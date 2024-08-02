/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#06DBAC",
        purple: "#BD00FF",
        whiteTransparent: "rgba(255,255,255,10%)",
      },
      backgroundImage: {
        "hero-pattern": "url('./../public/hero_bg.svg')", 
      },
    },
  },
};
