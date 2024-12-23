export const config = {
  mailSender: {
    host: import.meta.env.MAIL_HOST || process.env.MAIL_HOST,
    port: import.meta.env.MAIL_PORT || process.env.MAIL_PORT,
    user: import.meta.env.MAIL_USER || process.env.MAIL_USER,
    password: import.meta.env.MAIL_PASSWORD || process.env.MAIL_PASSWORD,
  },
  mailReceiverAddress: import.meta.env.MAIL_RECEIVER_ADDRESS || process.env.MAIL_RECEIVER_ADDRESS,
  captchaSiteKey: import.meta.env.CAPTCHA_SITE_KEY || process.env.CAPTCHA_SITE_KEY,
};
