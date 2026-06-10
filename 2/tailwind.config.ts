import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F4EFE8",
          50: "#FAF7F2",
          100: "#EFE9DF",
          200: "#E6DDD0",
        },
        espresso: {
          DEFAULT: "#1A1410",
          900: "#0F0B08",
          800: "#1A1410",
          700: "#2A2520",
          600: "#3A332D",
        },
        cocoa: {
          DEFAULT: "#5A453B",
          600: "#5A453B",
          400: "#8A7468",
          200: "#B8A89B",
        },
        ink: "#221A14",
        warm: {
          50: "#FAF7F2",
          100: "#EBE3D5",
          200: "#D9CFC2",
          300: "#B8AC9C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest: "0.24em",
        ultra: "0.32em",
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        full: "9999px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.08) translate(-1%, -1%)" },
        },
        "char-in": {
          "0%": { opacity: "0", transform: "translateY(0.4em)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 900ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "ken-burns": "ken-burns 20s ease-out both",
        "char-in": "char-in 700ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
