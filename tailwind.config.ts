import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "snow-white": "#FBFBFB",
      "white-primary": "#FFFFFF",
      "black-primary": "#000000",
      "nero-black": "#131313",
      "red-bright": "#FF1E1E",
      "blue-secondary": "#11009E",
      "blue-primary": "#0766AD",
      "grey-primary": "#636c67",
      "light-grey": "#EFF3EA",
      "light-grey-border": "#cccccc",
      "light-grey-placeholder": "#C7C8CC",
      "light-grey-secondary": "#f7f8fa",
      "light-grey-border-secondary": "#e7e7e7",
      "dark-grey": "#202c38",
      "bright-orange": "#F93827",
      transparent: "rgba(0, 0, 0, 0)",
      "green-online": "#16C47F",
    },

    fontSize: {
      12: "0.75rem",
      14: "14px",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
      72: "4.5rem",
    },
    lineHeight: ({ theme }) => ({
      ...theme("fontSize"),
    }),

    gap: ({ theme }) => ({
      4: "0.25rem",
      8: "0.5rem",
      ...theme("fontSize"),
    }),

    borderRadius: {
      0: "0rem",
      2: "0.125rem",
      4: "0.25rem",
      5: "0.3125rem",
      8: "0.5rem",
      10: "0.5rem",
      20: "0.5rem",
      24: "1.5rem",
      32: "2rem",
      56: "3.5rem",
      full: "100%",
    },

    fontFamily: {
      "BH-Satoshi-black": "Satoshi Type Black",
      "BH-Satoshi-regular": "Satoshi Type Regular",
      "BH-Satoshi-light": "Satoshi Type Light",
      "BH-Satoshi-bold": "Satoshi Type Bold",
      "BH-Satoshi-medium": "Satoshi Type Medium",
    },
    extend: {
      width: {
        108: "30rem",
        116: "35rem",
      },
      boxShadow: {
        "drop-down-shadow": "10px 5px 15px -1px rgba(0,0,0,0.1),-10px 10px 15px -3px rgba(0,0,0,0.1)"
      }
    },
  },
  plugins: [],
} satisfies Config;
