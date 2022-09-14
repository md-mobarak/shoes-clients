/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#49ccd8",

          "secondary": "#8d76e8",

          "accent": "#8ef995",

          "neutral": "#1E1F2A",

          "base-100": "#F7F7F8",

          "info": "#48C6F4",

          "success": "#64EDAD",

          "warning": "#F5CC5B",

          "error": "#F74B73",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
} 