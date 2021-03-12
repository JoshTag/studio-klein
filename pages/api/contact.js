const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, subject, message } = req.body;

  const msg = {
    to: [
      { email: "josh.taguicana@thestudioklein.com" },
      { email: "joshtaguicana@gmail.com" },
    ],
    from: "josh.taguicana@thestudioklein.com",
    subject: `New Message From - ${email}`,
    html: `<p>Name: ${name}</p>
      <p>Subject: ${subject}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
