const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, subject, message } = req.body;

  const msg = {
    to: [
      { email: "heather.alsen@thestudioklein.com" },
    ],
    from: "heather.alsen@thestudioklein.com",
    subject: `New Message From - ${email}`,
    html: `<p>Name: ${name}</p>
      <p>Subject: ${subject}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send("Thanks for the message! I will get back to you within 3-4 business days.");
  } catch (error) {
    res
      .status(400)
      .send(
        "Message not sent. Please contact heather.alsen@thestudioklein.com directly."
      );
  }
}
