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
          canvas: "#fbfbfd",
          canvasDark: "#000000",
          surface: "#ffffff",
          surfaceDark: "#161617",
          subtle: "#f5f5f7",
          subtleDark: "#1c1c1e",
          blue: "#0071e3",
          blueDark: "#2997ff",
          text: "#1d1d1f",
          textDark: "#f5f5f7",
          secondary: "#6e6e73",
          secondaryDark: "#86868b",
          border: "rgba(0, 0, 0, 0.08)",
          borderDark: "rgba(255, 255, 255, 0.08)",
        },
      },
      boxShadow: {
        "apple-card": "0 2px 12px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)",
        "apple-card-hover": "0 12px 32px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)",
        "apple-window": "0 20px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
