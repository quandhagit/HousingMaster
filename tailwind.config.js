/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sidebar': '5px 0px 4px rgba(0, 0, 0, 0.25)',
        'header': '0px 5px 4px rgba(0, 0, 0, 0.25)',
        'table': '0px 0px 10px rgba(0, 0, 0, 0.4)'
      },
      colors: {
        "secondary": "#116BCC",
        "primary": "#3D99B8",
        "secondary-light": "#E0EFF5",
        "placeholder": "#DBDBDB",
        "main-text": "#1F1F1F",
        "sub-text": "#575757",
        "disable": "#999999",
        "border": "#CCCCCC",
        // "background": "#F3F3F3",
        // "error": "#EF5350",
        // "warning": "#FF9800",
        // "success": "#4caf50",
        // "table-header": "#EDEDED"
      }
    },
  },
  plugins: [],
}

