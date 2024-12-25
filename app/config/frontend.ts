export const config = {
  contact: {
    dialCode: '+30',
    dialCodeWithoutPlus: '+30',
    phone: '6974070055',
    email: 'baxevanisg.generali@gmail.com',
  },
  captcha: {
    siteKey: typeof window !== 'undefined' ? import.meta.env.VITE_CAPTCHA_SITE_KEY : 'on server',
  },
};
