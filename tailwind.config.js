/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#13183F',
          600: '#666CA3',
        },
        pink: {
          600: '#F74780',
          300: '#FFA7C3',
        },
        grey: '#83869A',
        'custom-start': '#FF6F48',
        'custom-end': '#F02AA6',
        'another-start': '#4851FF',
        'another-end': '#F02AA6',
        'another-start-2': '#FFFFFF',
        'another-end-2': '#F0F1FF',
        'white-50': 'rgba(255, 255, 255, 0.5)',
      },
      gradientColorStops: theme => ({
        'custom-start': theme('colors.custom-start'),
        'custom-end': theme('colors.custom-end'),
        'another-start': theme('colors.another-start'),
        'another-end': theme('colors.another-end'),
      }),
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
        '4xl': '2.5rem', // 40px
        '5xl': '3.5rem', // 56px
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      lineHeight: {
        tight: 1.2,
        normal: 1.5,
      },
      width: {
        168: '10.5rem',
        152: '9.5rem',
        328: '20.5rem',
        111: '6.938rem',
        576: '36rem',
        457: '28.563rem',
        544: '34rem',
        1120: '70rem',
      },
      height: {
        59: '3.688rem',
        320: '320px',
        122: '7.625rem',
        96: '6rem',
        48: '3rem',
        400: '25rem',
        350: '21.875rem',
        322: '20.125rem',
        118: '7.375rem',
        300: '18.75rem',
        570: '35.625rem',
        107: '6.688rem',
      },
      padding: {
        9: '0.563rem',
        41.5: '2.594rem',
        110.5: '6.906rem',
        87: '87px',
      },
      gap : {
        40: '2.5rem',
      },
      margin: {
        '28': '28px',
      },
      boxShadow: {
        'card-shadow': '0 25px 50px rgba(6, 22, 141, 0.0442)',
      },
      screens: {
        'custom-344': '344px',
        xs: '375px',
        'xl-custom': '1440px'
      },
    },
  },
  plugins: [],
}

