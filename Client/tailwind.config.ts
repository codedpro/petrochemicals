import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#ffffff",
        "secondary-light": "#e2e0e1",
        "tertiary-light": "#f4f6ff",
        "primary-brand": "#8cc0ff",
        "secondary-brand": "#2f88ff",
        "tertiary-brand": "#90caf9",
        "primary-dark": "var(--primary-color-dark)",
        "secondary-dark": "var(--secondary-color-dark)",
        "tertiary-dark": "var(--tertiary-color-dark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
