/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#151221",
        secondary: "#9b7eac",
        tertiary: "#151221bf",
        "black-100": "#202124",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px ##4dba87",
      },
      screens: {
        xs: "450px",
        xxs: "640px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
