import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm-range": { min: "320px", max: "639px" }, // 640px to 767px
        "md-range": { min: "640px", max: "1024px" }, // 768px to 1023px
        "lg-range": { min: "1024px", max: "1220px" }, // 1024px to 1279px
        "xlg-range": { min: "1220px", max: "1920px" }, // 1024px to 1279px
      },
    },
  },
  plugins: [],
} satisfies Config;
