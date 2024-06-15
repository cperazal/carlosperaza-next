import sgMail from '@sendgrid/mail'
const rateLimit = require("express-rate-limit");
// implement rate limiting for the contact form
// Create a new express app
const express = require("express");
const app = express();
// Use the express app as middleware
app.use(express.json());
// Define the rate limit
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5 // limit each IP to 5 requests per windowMs
});
// Apply the rate limit to your route
app.use("/api/contact", limiter);

// Your existing code...
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { email, subject, message, name } = req.body
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
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