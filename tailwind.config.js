/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      Pink: "hsl(322, 100%, 66%)",

      "Very-Pale-Cyan": "hsl(193, 100%, 96%)",
      "Very-Dark-Cyan": "hsl(192, 100%, 9%)",
      "Grayish-Blue": "hsl(208, 11%, 55%)",
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "900px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
