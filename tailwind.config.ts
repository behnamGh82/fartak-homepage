import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["var{--font-vazir}"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "#e1e1e1",
        lightgray: "#f0efef",
        purpel: "#6527a3",
        lightpurpel: "#a37dc8",
        green: "#7cc900",
        midpurpel: "#7c4bae",
        dotpurpel: "#6a4094",
        activedot: "#4a2d68",
      },
      width: {
        "600": "600px",
      },
      height: {
        "600": "600px",
      },
    },
  },
  plugins: [],
};
export default config;
