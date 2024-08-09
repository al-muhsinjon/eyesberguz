/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        mm: "425px",
        md: "768px",
        lg: "1024px",
        xlg: "1300px",
        xl: "1440px",
      },
      fontSmoothing: {
        antialiased: "antialiased",
      },
      fontFamily: {
        nunito: ["Nunito", "Arial", "sans-serif"],
        roboto: ["Roboto", "Arial", "sans-serif"],
        inter: ["Inter", "Arial", "sans-serif"],
      },

      colors: {
        yellow: "#ffd60a",
        gray: "#a1a1a1",
        lightBlue: "#d6eaff",
        dusty: "#9a9a9a",
        emerald: "#32d74b",
        athens: "#eaeaef",
        clay: "#252742",
        cadet: "#adadc2",
        yellowhite: "#f2f9ff",
        science: "#0763bf",
        mischka: "#d6d6e1",
        blue: "#0a84ff",
        waterloo: "#828291",
        apple: "#ebfbed",
        green: "#25a138",
        romance: "#cbf5d2",
        athena: "#fbfbfc",
        scarpe: "#575761",
        boulder: "#757575",
        wildsand: "#f5f5f5",
        lupa: "#f7f7f9",
        shark: "#1c1c1e",
        alto: "#d7d7d7",
      },
    },

    boxShadow: {
      none: "none",
      custom:
        "0 2px 8px rgba(40, 41, 61, 0.08), 0 20px 32px rgba(96, 97, 112, 0.24)",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
        xlg: "107px",
        xl: "7rem",
        xxl: "7rem",
      },
    },
  },
  plugins: [],
};
