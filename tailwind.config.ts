import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
        keyframes: {
     
      },
    },
  },
  plugins: [],
} satisfies Config;
