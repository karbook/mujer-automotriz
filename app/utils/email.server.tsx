import { Resend } from "resend";
import { getServerEnv } from '@/utils/env.server';
import { z } from "zod";
import { ContactUsEmail } from './contact-use-email';
import { render } from '@react-email/render';

import { ContactFormSchema } from '@/routes/resource/contact-form-schema';

export async function sendContactEmail(data: z.infer<typeof ContactFormSchema>) {
  const resendApiKey = getServerEnv().RESEND_API_KEY;

  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY no configurada.");
  }

  const resend = new Resend(resendApiKey);

  const emailHtmlContent = await render(
    <ContactUsEmail
      fullName={data.fullName}
      email={data.email}
      subject={data.subject}
      message={data.message}
    />
  );

  resend.emails.send({
    from: "Contacto <noreply@karbook.com>",
    to: ["eriksen5518@gmail.com"],
    subject: `📬 Mensaje de contacto: ${data.subject}`,
    html: emailHtmlContent,
  }).then(response => {
    if (response && 'error' in response && response.error) {
      console.error("Resend API error:", response.error.message);
    } else {
      console.log("Correo enviado con éxito");
    }
  }).catch(error => {
    console.error("Error interno enviando correo (Resend):", error);
  });

  return { status: "ok", message: "Correo en proceso de envío" };
}
