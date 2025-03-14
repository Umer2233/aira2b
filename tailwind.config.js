/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        100: "0px 4px 45px rgba(0, 0, 0, 0.15)",
        200: "0 5px 8px 0 rgba(0,0,0,.2), 0 9px 26px 0 rgba(0,0,0,.19)",
      },
      screens: {
        "screen-100": { min: "1024px", max: "1205px" },
        "screen-200": { min: "993px", max: "1240px" },
        "screen-300": { min: "768px", max: "768px" },
        "screen-400": { max: "362px" },
        "screen-500": { min: "1024px", max: "1343px" },
        "screen-600": { min: "1205px", max: "1343px" },
        "screen-700": { min: "556px", max: "639px" },
        "screen-800": { min: "320px", max: "361px" },
        "screen-900": { min: "768px", max: "772px" },
        "screen-1000": { min: "773px", max: "1023px" },
        "screen-1100": { min: "1024px", max: "1025px" },
        "screen-1200": { min: "320px", max: "360px" },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-in-out",
        "fade-left": "fade-left 1s ease-in-out",
      },
      keyframes: {
        "fade-up": {
          "0%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "fade-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        primary: {
          100: "#5eead4",
        },
        red: "#F82235",
        "gradient-100":
          "linear-gradient(180deg, #07DBDE -0.64%, rgba(251, 251, 251, 0) 11.24%);",
      },
    },

    backgroundImage: {
      "gradient-100":
        "linear-gradient(180deg, #07DBDE -0.64%, rgba(251, 251, 251, 0) 11.24%);",
      "gradient-200": "linear-gradient(90deg, #000000 29.19%, #09DADC 100%);",
      "gradient-300": "linear-gradient(-90deg, #000000 29.19%, #09DADC 100%);",
    },
  },
  plugins: [],
};
