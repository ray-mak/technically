import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightTeal: "#5d98a6",
        transparent: "transparent",
        neutral: {
          0: "hsl(0, 0%, 100%)",
          100: "hsl(17, 41%, 97%)",
          200: " hsl(17, 12%, 89%)",
          700: "hsl(195, 23%, 28%)",
          900: "hsl(194, 78%, 11%)",
        },

        "light-salmon": {
          50: "hsl(22, 100%, 97%)",
          100: "hsl(22, 100%, 91%)",
          500: "hsl(22, 99%, 72%)",
        },
      },
      extend: {
        backgroundImage: {
          gradient: "linear-gradient(90deg, #ffe2d1 0%, #fff5ef 100%)",
          "gradient-text":
            "linear-gradient(107deg, #ff9a60 -11.37%, #062630 61.84%)",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
