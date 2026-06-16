import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        midnight: "#070a1d",
        ink: "#f9f0ea",
        blush: "#f6b6c9",
        rose: "#f07a9b",
        lavender: "#b7a7ff",
        gold: "#f5c87a",
      },
      boxShadow: {
        glow: "0 0 44px rgba(246, 182, 201, 0.28)",
        gold: "0 0 42px rgba(245, 200, 122, 0.24)",
      },
      animation: {
        "slow-spin": "slow-spin 18s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 5s ease-in-out infinite",
      },
      keyframes: {
        "slow-spin": {
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
