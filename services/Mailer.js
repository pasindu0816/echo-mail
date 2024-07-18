const nodemailer = require('nodemailer');
const keys = require('../config/keys');

class Mailer {
    constructor({ subject, recipients }, content) {
        this.from_email = 'no-reply@emailecho.com';
        this.subject = subject;
        this.body = content;
        this.recipients = this.formatAddresses(recipients);
    }

    formatAddresses(recipients) {
        return recipients.map(({ email }) => email);
    }

    async send() {
        // Create a nodemailer transporter using Mailtrap SMTP credentials
        const transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525, // or other port provided by Mailtrap
            auth: {
                user: keys.mailtrapUser,
                pass: keys.mailtrapPass,
            },
        });

        // Setup email data
        const mailOptions = {
            from: this.from_email,
            to: this.recipients.join(', '),
            subject: this.subject,
            html: this.body,
        };

        try {
            // Send mail using nodemailer transporter
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ', info.messageId);
            return info;
        } catch (error) {
            console.error('Error sending email: ', error.message);
            throw error;
        }
    }
}

module.exports = Mailer;
