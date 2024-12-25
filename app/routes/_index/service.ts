import nodemailer from 'nodemailer';
import { IContactForm } from './types';
import { config } from '~/config/backend';

export const forwardMessageToEmail = async (data: IContactForm): Promise<string> => {
  const transporter = nodemailer.createTransport({
    host: config.mailSender.host,
    port: Number(config.mailSender.port),
    secure: true,
    auth: {
      user: config.mailSender.user,
      pass: config.mailSender.password,
    },
  });

  const mailOptions = {
    to: config.mailReceiverAddress,
    from: config.mailSender.user,
    subject: `${data.firstName} ${data.lastName} sent you a message about Villa Sir Nick: ${data.email}`,
    text: `
    Name: ${data.firstName} ${data.lastName}
    Email: ${data.email}
    Phone Number: ${data.phone ? `${data.dialCode}${data.phone}` : '-'}
    Message: ${data.message}
  `,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Roboto', sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        .email-container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h2 {
          font-family: 'Lora', serif;
          font-size: 1.5em;
          color: #1a1a1a;
          margin-bottom: 20px;
        }
        p {
          margin: 10px 0;
        }
        a {
          color: #1a73e8;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        blockquote {
          font-family: 'Lora', serif;
          border-left: 4px solid #1a73e8;
          margin: 10px 0;
          padding-left: 15px;
          color: #555;
        }
        footer {
          font-size: 0.9em;
          color: #888;
          margin-top: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${
          data.email
        }?subject=Regarding your inquiry about Villa Sir Nick">${data.email}</a></p>
        <p><strong>Phone Number:</strong> ${data.phone ? `${data.dialCode}${data.phone}` : '-'}</p>
        <p><strong>Message:</strong></p>
        <blockquote>
          ${data.message.replace(/\n/g, '<br>')}
        </blockquote>
        <footer>
          <p>Villa Sir Nick</p>
          <p>Thank you for your interest!</p>
        </footer>
      </div>
    </body>
    </html>
  `,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        throw new Error(`Error sending email: ${error}`);
      } else {
        resolve(`Email sent successfully: ${info.response}`);
      }
    });
  });
};

export const verifyCaptcha = async (captcha: string) => {
  try {
    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${config.captcha.secretKey}&response=${captcha}`,
      { method: 'POST' }
    );
    const resObj = await res.json();
    if (!resObj.success || !res.ok) {
      console.error(resObj);
      throw new Error('Captch verification failed!');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Captcha verification failed!');
  }
};
