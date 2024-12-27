export const config = {
  mailSender: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
  },
  mailReceiverAddress: 'baxevanisg.generali@gmail.com',
  captcha: {
    secretKey: process.env.CAPTCHA_SECRET_KEY,
  },
};
