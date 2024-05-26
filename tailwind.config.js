/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: [
          "12px",
          {
            lineHeight: "12px",
            fontWeight: "500",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "14px",
            fontWeight: "500",
          },
        ],
        lg: [
          "24px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        xl: [
          "32px",
          {
            lineHeight: "44.8px",
            fontWeight: "400",
          },
        ],
        "2xl": [
          "48px",
          {
            lineHeight: "48px",
            fontWeight: "500",
          },
        ],
      },
      colors: {
        White: "#FFFFFF",
        Black: "#000000",
        DarkSlateGray: "#252F3D",
        DimGray: "#4D5254",
        YellowGreen: "#85BF55",
        DodgerBlue: "#2C7EF8",
      },
    },
  },
  plugins: [],
};
