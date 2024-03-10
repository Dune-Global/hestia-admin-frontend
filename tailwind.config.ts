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
      gray: {
        0: "hsl(var(--gray-0))",
        50: "hsl(var(--gray-50))",
        100: "hsl(var(--gray-100))",
        200: "hsl(var(--gray-200))",
        300: "hsl(var(--gray-300))",
        400: "hsl(var(--gray-400))",
        500: "hsl(var(--gray-500))",
        600: "hsl(var(--gray-600))",
        700: "hsl(var(--gray-700))",
        800: "hsl(var(--gray-800))",
        900: "hsl(var(--gray-900))",
        950: "hsl(var(--gray-950))",
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
      green: {
        400: "hsl(var(--green-400))",
      },
      yellow: {
        400: "hsl(var(--yellow-400))",
      },
      red: {
        400: "hsl(var(--red-400))",
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
