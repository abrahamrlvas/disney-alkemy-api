const nodemailer = require("nodemailer");
console.log();
async function main(email) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  console.log(email, "recibido desde email");
  let info = await transporter.sendMail({
    from: 'Abraham Rivas',
    to: email,
    subject: "Hello ✔",
    html: "<b>Bienvenido al sistema de Disney</b>", 
  });
}
module.exports = main;

