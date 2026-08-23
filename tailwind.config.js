/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D1418",       // near-black teal ground
        paper: "#EAEDEA",     // off-white text
        signal: "#FFB454",    // amber accent — "flagged" tools
        edge: "#3DDC97",      // teal-green accent — "live" / verified
        line: "#1F2B2E",      // hairline / border
        muted: "#7C8A87"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "'Segoe UI'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        grid: "linear-gradient(#1F2B2E 1px, transparent 1px), linear-gradient(90deg, #1F2B2E 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
