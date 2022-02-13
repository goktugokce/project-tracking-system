const nodemailer = require('nodemailer');
const emailConfig = require("../config/emailConfig");

const senderEmail = emailConfig.senderEmail;
const senderPassword = emailConfig.senderPassword;

const transporter = nodemailer.createTransport({
    service: emailConfig.service,
    auth: {
        user: senderEmail,
        pass: senderPassword
    }
});

const sendEmail = (name, email, subject, confirmationCode) => {
    const mailOptions = {
        from: senderEmail,
        to: email,
        subject: subject,
        html: `<div>
                    <h1>Email Confirmation</h1>
                    <h2>Hello ${name}</h2>
                    <p>You need to confirm your account.</p>
                    <a href=${emailConfig.url}/${confirmationCode}> Click Here!</a>
                </div>`
    };
    transporter.sendMail(
        mailOptions
    ).catch((e) => {
        console.log(e);
    });   
}



const sendConfirmationMail = {
    sendEmail: sendEmail,
};

module.exports = sendConfirmationMail;
