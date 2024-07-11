/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      source: ["Inconsolata", "sans-serif"],
      display: ["Pacifico", "sans-serif"],
    },
    colors: {
      accent: "#d0e899",
      error: {
        500: "#e5634e",
        600: "#d1462f",
      },
      text: "#0f1108",
      background: {
        100: "#EBEBEB",
        200: "#D1D1D1",
        300: "#C4C4C4",
        400: "#B8B8B8",
        500: "#828282",
      },
      sucess: {
        500: "#599f48",
        600: "#458237",
      },
      secondry: "#f6ae2d",

      primary: "#6c63ff",

      extend: {},
    },
    borderColor: {
      dark: "#828282",
      light: "#EBEBEB",
    },
    extend: {},
  },
  variants: {
    extend: {
      translate: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};
