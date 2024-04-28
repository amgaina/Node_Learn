const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword",
  },
});

let mailOptions = {
  from: "youremail@gmail.com",
  to: "senderemail@gmail.com",
  subject: "Check the nodemailer",
  text: "I am just checking the nodemailer server. Thank you.",
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log("Email sent: " + data.response);
  }
});
