import { Resend } from "resend";
import { getServerEnv } from '@/utils/env.server';
import { z } from "zod";
import { ContactUsEmail } from './contact-use-email';
import { render } from '@react-email/render';
import { ContactFormSchema } from '@/routes/resource/contact-form-schema';

const env = getServerEnv();
if (!env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY not configured.");
}
const resend = new Resend(env.RESEND_API_KEY);

export async function sendContactEmail(data: z.infer<typeof ContactFormSchema>) {
    const validationResult = ContactFormSchema.safeParse(data);
    if (!validationResult.success) {
        return { success: false, message: "Invalid contact form data.", errors: validationResult.error.format() };
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

    if (!response) {
        return { success: false, message: "Resend API did not return a response." };
    }

    if ('error' in response && response.error) {
        return { success: false, message: `Resend API Error: ${response.error.message || 'Unknown error'}` };
    }

    return { success: true, message: "Email sent successfully." };
}
