import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.toEmail,
        pass: process.env.toPassword, 
    }
})

const sendContactEmail = async (name, email, message) => {
    try {
        const mailOptions = {
            from: process.env.fromEmail,
            to: process.env.toEmail,
            subject: `Notification From Portfolio Website By ${name}`,
            text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`, 
            html: `
                <h3>New Contact Form Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            `
        }

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully: ", info.response);
        return { success: true };
    } catch (error) {
        console.error("Error sending email by Nodemailer: ", error);
        return { success: false, error };
    }
};

export default sendContactEmail;
