import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#009009", // Base primary color
          600: "#006A0E", // Darker shade
        },
        secondary: {
          DEFAULT: "#424242", // Base secondary color
        },
        tertiary: {
          DEFAULT: "#DF2525", // Base tertiary color
        },
      },
    },
  },
  safelist: [
    'border-[#FEDF89]',
    'bg-[#FFFAEB]',
    'text-[#B54708]',
    'border-[#ABEFC6]',
    'bg-[#ECFDF3]',
    'text-[#067647]',
    'border-[#B2DDFF]',
    'bg-[#EFF8FF]',
    'text-[#175CD3]',
    'border-[#EAECF0]',
    'bg-[#F9FAFB]',
    'text-[#344054]',
  ],
  plugins: [],
} satisfies Config;