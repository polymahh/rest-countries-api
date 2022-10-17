/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'DM-Elements': 'hsl(209, 23%, 22%)',
        'DM-Background': 'hsl(207, 26%, 17%)',
        'LM-Text': 'hsl(200, 15%, 8%)',
        'LM-Input': 'hsl(0, 0%, 52%)',
        'LM-Background': 'hsl(0, 0%, 98%)',
        'DM-Text-LM-Elements': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
