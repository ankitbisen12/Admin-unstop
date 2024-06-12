import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        '-20px': '-20px', // Custom negative margin
      },
      colors: {
        logo: {
          100: "#1C4980",
          200:"#DCEDFE",
          300:"#0172E6",
          400:"#3096ff",
          500:"#d4e9fc"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '-50px': '-50px',
      },
    },
  },
  plugins: [],
};
export default config;
