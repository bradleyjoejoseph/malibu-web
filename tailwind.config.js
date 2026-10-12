/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          "SFMono-Regular",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        apple: {
          blue: "#2997ff",
          indigo: "#5e5ce6",
          purple: "#bf5af2",
          gray: "#86868b",
          darkGray: "#6e6e73",
          lightGray: "#d2d2d7",
          bg: "#000000",
          card: "#161617",
          cardBorder: "rgba(255, 255, 255, 0.08)",
          cardHover: "rgba(255, 255, 255, 0.05)",
        },
      },
      boxShadow: {
        "apple-card": "0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        "apple-card-hover": "0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)",
        "apple-glow": "0 0 50px -10px rgba(41, 151, 255, 0.25)",
        "apple-subtle": "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};

