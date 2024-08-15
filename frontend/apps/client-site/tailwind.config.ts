/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
        "bounce-opposite": "bounce-opposite 3s linear infinite",
        "fade-in": "fade-in 1s linear",
        "slide-right": "slide-right 5s ease",
        "slide-left": "slide-left 5s ease",
        "slide-up": "slide-up 5s linear",
        "slide-down": "slide-down 3s ease",
        "scale-slide-up": "scale-slide-up 3s linear",
        "bg-slide-in": "bg-slide-in 1s linear",
        "slide-bottom-right-up": "slide-bottom-right-up 3s ease-in",
        "slide-bottom-left-up": "slide-bottom-left-up 3s ease-in",
        "slide-top-left-down": "slide-top-left-down 3s ease-in",
        "slide-top-right-down": "slide-top-right-down 3s linear",
      },
      keyframes: {
        "bounce-opposite": {
          "0%, 100%": {
            transform: "translateY(10px)",
            "animation-timing-function": "ease",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "ease",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "bg-slide-in": {
          "0%": {
            "background-position": "150%",
          },
          "100%": {
            "background-position": "revert",
          },
        },
        "slide-bottom-right-up": {
          "0%": {
            transform: "translate(100%,100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0,0)",
            opacity: 1,
          },
        },
        "slide-bottom-left-up": {
          "0%": {
            transform: "translate(-100%,100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0,0)",
            opacity: 1,
          },
        },
        "slide-top-left-down": {
          "0%": {
            transform: "translate(-100%,-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0%,0%)",
            opacity: 1,
          },
        },
        "slide-top-right-down": {
          "0%": {
            transform: "translate(100%,-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0%,0%)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
