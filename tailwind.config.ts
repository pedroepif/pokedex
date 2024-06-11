import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-[#A8A77A]",
    "bg-[#EE8130]",
    "bg-[#6390F0]",
    "bg-[#F7D02C]",
    "bg-[#7AC74C]",
    "bg-[#96D9D6]",
    "bg-[#C22E28]",
    "bg-[#A33EA1]",
    "bg-[#E2BF65]",
    "bg-[#A98FF3]",
    "bg-[#F95587]",
    "bg-[#A6B91A]",
    "bg-[#B6A136]",
    "bg-[#735797]",
    "bg-[#6F35FC]",
    "bg-[#705746]",
    "bg-[#B7B7CE]",
    "bg-[#D685AD]",
    "text-white",
    "text-black/80"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
