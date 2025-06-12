import { sendContactEmail } from '@/utils/email.server';
import { ContactFormSchema } from '@/routes/resource/contact-form-schema';
import { parseWithZod } from "@conform-to/zod";

export async function action({ request }: { request: Request }) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    if (!request.headers.get('Content-Type')?.includes('multipart/form-data')) {
        return new Response(JSON.stringify({ message: 'Invalid Content-Type, expected multipart/form-data' }), {
            status: 415,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const formData = await request.formData();
    const validationResult = parseWithZod(formData, { schema: ContactFormSchema });

    if (validationResult.status !== "success") {
        return validationResult.reply();
    }

    await sendContactEmail(validationResult.value);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

