import nodemailer from 'nodemailer';
import { IContactForm } from './types';

export const forwardMessageToEmail = async (
  data: IContactForm
): Promise<{ isSuccess: boolean; error?: any }> => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kotsoulis@gmail.com',
      pass: 'arzf tkml ollz ftjz',
    },
  });

  const mailOptions = {
    to: 'kotsoulis@gmail.com',
    from: data.email,
    subject: `${data.email} sent you a message about Villa Sir Nick: ${data.firstName} ${data.lastName}`,
    text: data.message,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        resolve({ isSuccess: false, error });
      } else {
        console.log('Email sent successfully:', info.response);
        resolve({ isSuccess: true });
      }
    });
  });
};
