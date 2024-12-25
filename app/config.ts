export const config = {
  mailSender: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
  },
  mailReceiverAddress: process.env.MAIL_RECEIVER_ADDRESS,
  captcha: {
    secretKey: process.env.CAPTCH_SECRET_KEY,
    siteKey: process.env.CAPTCHA_SITE_KEY,
  },
};
