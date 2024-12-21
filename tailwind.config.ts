import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Poppins"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        intenseGlow: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0.6' },
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        intenseGlow: 'intenseGlow 3s infinite',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        outline: '0 0 0 1px #7C3AED',
        whole: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
} satisfies Config;
