/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'y-axis': '0px -10px 30px 0px rgba(0, 0, 0, 0.25)',
        'x-axis': '10px 0px 30px 0px rgba(0, 0, 0, 0.25)',
        '-x-axis': '-10px 0px 30px 0px rgba(0, 0, 0, 0.25)',
        's-default': '0px 0px 10px 0px rgba(0, 0, 0, 0.25)',
        'loading': '0px 0px 50px 2px #ffffff',
      },
      dropShadow: {
        's-default': '0 0 10px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        default: '#3A3A3A',
        onyx: '#3F403F',
        oldGreen: '#487063',
        jasmine: '#FFDF85',
        oldRose: '#D28179',
        abu: '#DDDAD7',
        "abu-0.75": 'rgba(245, 257, 252, 0.75)',
        viridian: '#5B8E7D',
        cambridgeBlue: '#83AFA0',
        peachYellow: '#F9E2AE',
        white: '#F5F7F2',
        gray: '#6C6E6C',
      },
      backgroundImage: {
        disasterMap: 'linear-gradient(to bottom, rgba(58, 58, 58, 1) 5%, rgba(91, 142, 125, 1))',
      },
      borderRadius: {
        homeContent: "100px",
        bioCard: "50px",
        50: "50px",
      },
      width: {
        75: '75px',
        265: '265px',
        347: '347px',
        300: '300px',
        100: '400px',
        455: '455px',
        105: '500px',
        550: '550px',
        600: '600px',
        700: '700px',
      },
      height: {
        75: '75px',
        265: '265px',
        347: '347px',
        300: '300px',
        100: '400px',
        455: '455px',
        105: '500px',
        550: '550px',
        600: '600px',
        700: '700px',
      },
      animation: {
        'grow': 'grow 1.75s ease-in-out infinite',
      },
      keyframes: {
        'grow': {
          '0%': { transform: 'scale(0.3)' },
          '20%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(0.3)' },
          '100%': { transform: 'scale(0.3)' },
        },
      },
    },
  },
  plugins: [],
}