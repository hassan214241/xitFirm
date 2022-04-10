const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const fs = require("fs");

admin.initializeApp();

const gmailEmail = "hassan214241@gmail.com";
const gmailPassword = "hassan5236721";

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

let htmlmail = fs.readFileSync("welcome.html", "utf-8").toString();

exports.welcome = functions.https.onRequest((req, res) => {
  res.send("Welcome");
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const recipent_email = user.email;
  console.log(user.email);

  const mailOptions = {
    from: '"Muhammad Hassan" <hassan214241@gmail.com>',
    to: recipent_email,
    subject: "Welcome Email",
    html: htmlmail,
  };

  return mailTransport.sendMail(mailOptions);
});

// mailTransport.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
