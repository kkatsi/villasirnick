export const config = {
  captcha: {
    siteKey: typeof window !== 'undefined' ? import.meta.env.VITE_CAPTCHA_SITE_KEY : 'on server',
  },
};
