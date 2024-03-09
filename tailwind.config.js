/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEE5F5',
          100: '#D3BEE7',
          200: '#B793D8',
          500: '#8642BD',
          600: '#6711AC',
        },
        black: {
          DEFAULT: '#000000',
          900: '#191A25',
        },
        neutral: {
          50: '#F4F5F8',
          100: '#ECECEC',
          200: '#E0E0E0',
          300: '#D1D1D1',
          400: '#AFAFAF',
          500: '#828282',
          600: '#565656',
          700: '#474747',
          800: '#373737',
          900: '#242424',
        },
        error: {
          100: '#FFE6E6',
          500: '#D23131',
        },
        status: {
          orange: '#D07000',
          rightOrange: '#FFF8EC',
        },
        success: {
          100: '#D6F3EA',
          500: '#00875A',
        },
        warning: {
          100: '#F7EDDB',
          500: '#E08700',
        },
        link: {
          100: '#E3EEFF',
          500: '#236BDF',
        },
        indigo: {
          10: '#f3f2ff',
          500: '#6153FF',
        },
        orange: {
          10: '#fff6ea',
          50: 'rgba(255, 122, 0, 0.1)',
          100: 'rgba(255, 122, 0, 0.5)',
          400: '#FF7A00',
        },
        blue: {
          50: 'rgba(97, 83, 255, 0.1)',
          100: 'rgba(97, 83, 255, 0.5)',
          500: '#4D23A6',
        },
        purple: {
          500: '#4021BE',
        },
        pink: {
          50: 'rgba(252, 80, 111, 0.1)',
          100: 'rgba(252, 80, 111, 0.5)',
          400: '#FC506F',
          500: '#DD1A54',
        },
        green: {
          50: 'rgba(0, 179, 71, 0.1)',
          100: 'rgba(0, 179, 71, 0.5)',
          400: '#00A858',
          500: '#0F923C',
        },
      },
      fontSize: {
        10: ['0.625rem', '150%'],
        12: ['0.75rem', '150%'],
        14: ['0.875rem', '1.25rem'],
        16: ['1rem', '150%'],
        18: ['1.125rem', '150%'],
        20: ['1.25rem', '150%'],
        24: ['1.5rem', '150%'],
        28: ['1.75rem', '150%'],
        32: ['2rem', '150%'],
      },
      fontFamily: {
        roboto: ['Roboto', ...fontFamily.sans],
        customize: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.gradient-blue-container': {
          '--tw-gradient-from': '#2B80FF var(--tw-gradient-from-position)',
          '--tw-gradient-to': '#4D23A6 var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-blue-outlined': {
          '--tw-gradient-from': '#E6F0FF var(--tw-gradient-from-position)',
          '--tw-gradient-to': '#EEE5FF var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-blue-outlined-dark': {
          '--tw-gradient-from': 'rgba(43, 128, 255, 0.5) var(--tw-gradient-from-position)',
          '--tw-gradient-to': 'rgba(77, 35, 166, 0.5) var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-purple-container': {
          '--tw-gradient-from': '#4021BE var(--tw-gradient-from-position)',
          '--tw-gradient-to': '#A00EC4 var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-purple-outlined': {
          '--tw-gradient-from': '#DBD2FF var(--tw-gradient-from-position)',
          '--tw-gradient-to': '#FCF0FF var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-purple-outlined-dark': {
          '--tw-gradient-from': 'rgba(64, 33, 190, 0.5) var(--tw-gradient-from-position)',
          '--tw-gradient-to': 'rgba(160, 14, 196, 0.5) var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-orange-container': {
          '--tw-gradient-from': '#FFAF38 var(--tw-gradient-from-position)',
          '--tw-gradient-to': '#FF7A00 var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-orange-outlined': {
          '--tw-gradient-from': '#FFF2D8 var(--tw-gradient-from-position)',
          '--tw-gradient-to': '#FFDEC5 var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-orange-outlined-dark': {
          '--tw-gradient-from': 'rgba(255, 175, 56, 0.5) var(--tw-gradient-from-position)',
          '--tw-gradient-to': 'rgba(255, 122, 0, 0.5) var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-pink-container': {
          '--tw-gradient-from': '#FF4D82 var(--tw-gradient-from-position)',
          '--tw-gradient-to': '#FF614B var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-pink-outlined': {
          '--tw-gradient-from': '#FFE9F0 var(--tw-gradient-from-position)',
          '--tw-gradient-to': '#FFD9D4 var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-pink-outlined-dark': {
          '--tw-gradient-from': 'rgba(255, 77, 130, 0.5) var(--tw-gradient-from-position)',
          '--tw-gradient-to': 'rgba(255, 97, 75, 0.5) var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-green-container': {
          '--tw-gradient-from': '#00B347 var(--tw-gradient-from-position)',
          '--tw-gradient-to': '#00B39E var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-green-outlined': {
          '--tw-gradient-from': '#E7FCEF var(--tw-gradient-from-position)',
          '--tw-gradient-to': '#B8F2EB var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
        '.gradient-green-outlined-dark': {
          '--tw-gradient-from': 'rgba(0, 179, 71, 0.5) var(--tw-gradient-from-position)',
          '--tw-gradient-to': 'rgba(0, 179, 158, 0.5) var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        },
      });
    }),
  ],
};
