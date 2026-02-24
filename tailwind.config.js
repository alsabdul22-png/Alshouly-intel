/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'intel-dark': '#0a0e27',
        'intel-blue': '#00d4ff',
        'intel-green': '#00ff41',
        'intel-red': '#ff0055',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 65, 0.2)',
        'glow-red': '0 0 20px rgba(255, 0, 85, 0.2)',
      },
      backdropFilter: {
        glass: 'blur(10px)',
      },
    },
  },
  plugins: [],
};
