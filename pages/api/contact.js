import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async (req, res) => {
  const { email, subject, message, name } = req.body
  const msg = {
    to: process.env.NEXT_PUBLIC_EMAIL_TO,
    from: process.env.NEXT_PUBLIC_EMAIL_FROM,
    subject: subject,
    name: name,
    // text: message + ', ' + email,
    templateId: 'd-78c00b37a23e404eae9a840d972806c4',
    dynamicTemplateData: {
      name: name,
      message: message,
      email: email,
    },
  };

  try {
        await sgMail.send(msg);
        res.json({ message: `El correo ha sido enviado` })
  } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al enviar el email, por favor vuelve a intentarlo' })
  }
}