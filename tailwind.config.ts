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

        spend: [
          '#F3E8CE',
          '#EBD49B',
          '#DFBF82',
          '#F0B543',
          '#CC9A39',
          '#A08030',
          '#846A2D',
          '#6C592A',
          '#594A27',
        ],

        save: [
          '#D5F2E3',
          '#8DE8B7',
          '#44EE93',
          '#28C772',
          '#2B8F5A',
          '#2A6846',
          '#254C37',
          '#20382B',
          '#1B2A22',
        ],
        debt: [],
        income: [],
      },
    },
  },
};
