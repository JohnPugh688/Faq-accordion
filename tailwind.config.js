/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      WorkSans: ["Work Sans", "san-serif"],
    },
    extend: {
      backgroundImage: {
        body: "url('assets/images/background-pattern-desktop.svg')",
        "body-mobile": "url('assets/images/background-pattern-mobile.svg')",
      },
      colors: {
        LightPink: "#F9F0FF",
        GrayishPurple: "#8C6991",
        DarkPurple: "#2F1533",
      },
    },
  },
  plugins: [],
};
