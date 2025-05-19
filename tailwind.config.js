// tailwind.config.js
const aspectRatio = require('@tailwindcss/aspect-ratio');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fooshRed: '#E53935',
        fooshBlue: '#2196F3',
      },
    },
  },
  plugins: [aspectRatio],
};
