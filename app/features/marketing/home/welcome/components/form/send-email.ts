// utils/sendEmail.ts
export async function sendEmail(values: {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "contact@tudominio.com",
      to: values.email,
      subject: values.subject,
      html: `<p>${values.message}</p>`,
    }),
  });

  if (!res.ok) {
    throw new Error("Error al enviar el correo");
  }

  return await res.json();
}
