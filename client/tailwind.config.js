/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'y-axis': '0 -10px 30px rgba(0, 0, 0, 0.25)',
        'x-axis': '10 0 30px 0 rgba(0, 0, 0, 0.25)',
        'default': '0 0 10px 0 rgba(0, 0, 0, 0.25)',
      },
      colors: {
        default: '#3A3A3A',
        onyx: '#3F403F',
        oldGreen: '#487063',
        jasmine: '#FFDF85',
        oldRose: '#D28179',
        abu: '#DDDAD7',
        viridian: '#5B8E7D',
        cambridgeBlue: '#83AFA0',
        peachYellow: '#F9E2AE',
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
        300: '300px',
        100: '400px',
        455: '455px',
        105: '500px',
        600: '600px',
      },
      height: {
        300: '300px',
        100: '400px',
        455: '455px',
        105: '500px',
        600: '600px',
      }
    },
  },
  plugins: [],
}