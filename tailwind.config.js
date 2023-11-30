/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updating gray to a lighter palette
        gray: {
          100: "#F7FAFC",
          200: "#EDF2F7",
          300: "#E2E8F0",
          // 400: "#CBD5E0",
          400: "#2F2925",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          // 800: "#2D3748",
          800: "#ECF0F1",
          900: "#1A202C",
        },
        custom: {
          smokeyBlack: "#1A140F",
          taupe: "#423C39",
          jet: "2F2925",
          copper: "#A8763E",
          antiFlashWhite: "#ECF0F1",
        },
        // Introducing a new blue palette
        blue: {
          100: "#ebf8ff",
          200: "#bee3f8",
          300: "#90cdf4",
          400: "#63b3ed",
          500: "#4299e1",
          600: "#3182ce",
          700: "#2b6cb0",
          800: "#2c5282",
          900: "#2a4365",
        },
        // Introducing a new green palette
        green: {
          100: "#f0fff4",
          200: "#c6f6d5",
          300: "#9ae6b4",
          400: "#68d391",
          500: "#48bb78",
          600: "#38a169",
          700: "#2f855a",
          800: "#276749",
          900: "#22543d",
        },
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        "architects-daughter": [
          "var(--font-architects-daughter)",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
        "6xl": "4rem",
      },
      inset: {
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      minWidth: {
        10: "2.5rem",
      },
      scale: {
        98: ".98",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
