/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          0: '#D5F2E3',
          1: '#8DE8B7',
          2: '#44EE93',
          3: '#28C772',
          4: '#2B8F5A',
          5: '#2A6846',
          6: '#254C37',
          7: '#20382B',
          8: '#1B2A22',
        },
        grey: {
          0: '#C0C1C2',
          1: '#9C9DA0',
          2: '#7E8085',
          3: '#66696E',
          4: '#53565B',
          5: '#43464C',
          6: '#36393F',
          7: '#2B2D30',
          8: '#222325',
        },

        gray: {
          100: '#d1d1d2',
          200: '#a3a3a5',
          300: '#757677',
          400: '#47484a',
          500: '#191a1d',
          600: '#141517',
          700: '#0f1011',
          800: '#0a0a0c',
          900: '#050506',
        },

        spend: {
          1: '#F3E8CE',
          2: '#EBD49B',
          3: '#DFBF82',
          4: '#F0B543',
          5: '#CC9A39',
          6: '#A08030',
          7: '#846A2D',
          8: '#6C592A',
          9: '#594A27',
        },
        improbable: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c'],
      },
    },
  },
};
