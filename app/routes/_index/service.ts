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
    text: data.message,
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
    await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${config.captcha.secretKey}&response=${captcha}`,
      { method: 'POST' }
    );
  } catch (error) {
    console.error(error);
    throw new Error('Captcha verification failed!');
  }
};
