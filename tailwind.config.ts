import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        gradientBgPosition: {
          to: { "background-position": "200% center" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradientLinear: "gradient 8s linear infinite",
        gradientShift: "gradient-shift 15s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
