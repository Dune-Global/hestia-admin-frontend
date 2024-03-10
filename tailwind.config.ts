/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      hgray: {
        0: "hsl(var(--hgray-0))",
        50: "hsl(var(--hgray-50))",
        100: "hsl(var(--hgray-100))",
        200: "hsl(var(--hgray-200))",
        300: "hsl(var(--hgray-300))",
        400: "hsl(var(--hgray-400))",
        500: "hsl(var(--hgray-500))",
        600: "hsl(var(--hgray-600))",
        700: "hsl(var(--hgray-700))",
        800: "hsl(var(--hgray-800))",
        900: "hsl(var(--hgray-900))",
        950: "hsl(var(--hgray-950))",
      },
      peach: {
        50: "hsl(var(--peach-50))",
        100: "hsl(var(--peach-100))",
        200: "hsl(var(--peach-200))",
        300: "hsl(var(--peach-300))",
        400: "hsl(var(--peach-400))",
        500: "hsl(var(--peach-500))",
        600: "hsl(var(--peach-600))",
        700: "hsl(var(--peach-700))",
        800: "hsl(var(--peach-600))",
        900: "hsl(var(--peach-900))",
        950: "hsl(var(--peach-950))",
      },
      hgreen: {
        400: "hsl(var(--hgreen-400))",
      },
      hyellow: {
        400: "hsl(var(--hyellow-400))",
      },
      red: {
        400: "hsl(var(--hred-400))",
      },

      transparent: "transparent",

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
