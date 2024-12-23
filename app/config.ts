export const config = {
  mailSender: {
    host: import.meta.env.VITE_MAIL_HOST,
    port: import.meta.env.VITE_MAIL_PORT,
    user: import.meta.env.VITE_MAIL_USER,
    password: import.meta.env.VITE_MAIL_PASSWORD,
  },
  mailReceiverAddress: import.meta.env.VITE_MAIL_RECEIVER_ADDRESS,
  captchaSiteKey: import.meta.env.VITE_CAPTCHA_SITE_KEY,
};
