import { Resend } from "resend";
import { getServerEnv } from '@/utils/env.server';
import { z } from "zod";
import { ContactUsEmail } from './contact-use-email';
import { render } from '@react-email/render';
import { ContactFormSchema } from '@/routes/resource/contact-form-schema';

export async function sendContactEmail(data: z.infer<typeof ContactFormSchema>) {
    const env = getServerEnv();
    if (!env.RESEND_API_KEY) {
        return { success: false, message: "RESEND_API_KEY is missing or not configured." };
    }

    const resend = new Resend(env.RESEND_API_KEY);

    const validationResult = ContactFormSchema.safeParse(data);
    if (!validationResult.success) {
        return { 
            success: false, 
            message: "Invalid contact form data.", 
            errors: validationResult.error.errors.map(err => ({
                path: err.path,
                message: err.message
            })) 
        };
    }

    const emailHtmlContent = await render(
        <ContactUsEmail 
            fullName={data.fullName} 
            email={data.email} 
            subject={data.subject} 
            message={data.message} 
        />
    );

    const response = await resend.emails.send({
        from: "Contact <noreply@karbook.com>",
        to: ["eriksen5518@gmail.com"],
        subject: `📬 Contact message: ${data.subject}`,
        html: emailHtmlContent,
    });

    if (!response || typeof response !== "object") {
        return { success: false, message: "Invalid response from Resend API." };
    }

    if ("error" in response && response.error) {
        return { success: false, message: `Resend API Error: ${response.error.message || 'Unknown error'}` };
    }

    return { success: true, message: "Email sent successfully." };
}
