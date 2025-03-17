import { color } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs:"245px",
        xs: "320px",
        sm: "375px",
        sml: "500px",
        xsml:"570px",
        md: "667px",
        mdl: "768px",
        xmdl: "850px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        xxl: "1360px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      colors: {
        bodyColor: "#0f172a",
        lightText: "#94a3b8",
        designColor: "#38bdf8",
      },
      boxShadow: {
        shadowOne: "-6px -6px 14px #0c111d, 6px 6px 18px #1e293b",
        shadowTwo: "-4px -4px 10px #0c111d, 4px 4px 14px #1e293b",
      },
    },
  },
  plugins: [],
};
