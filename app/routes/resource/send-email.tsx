import { z } from "zod";
import { sendContactEmail } from '@/utils/email.server';
import { ContactFormSchema } from '@/routes/resource/contact-form-schema'; 

export async function action({ request }: { request: Request }) {
    if (request.method !== 'POST') {
        return new Response(
            JSON.stringify({ message: 'Method Not Allowed' }),
            {
                status: 405,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
    try {
        const requestBody = await request.json();
        const validatedData = ContactFormSchema.parse(requestBody);
        await sendContactEmail(validatedData);

        return new Response(
            JSON.stringify({ success: true, message: 'Correo enviado con éxito.' }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            const fieldErrors: Record<string, string> = {};
            error.errors.forEach(err => {
                if (err.path.length > 0) {
                    const fieldName = err.path[0];
                    if (typeof fieldName === 'string' || typeof fieldName === 'number') {
                        fieldErrors[fieldName] = err.message;
                    }
                }
            });
            return new Response(
                JSON.stringify({ success: false, message: 'Errores de validación.', errors: fieldErrors }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        let errorMessage = 'Ocurrió un error interno del servidor al enviar el correo.';
        if (error instanceof Error) {
            errorMessage = `Error: ${error.message}`;
        }
        return new Response(
            JSON.stringify({ success: false, message: errorMessage }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}