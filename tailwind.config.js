import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: colors.orange[300],
          hover: colors.orange[400],
          text: colors.orange[500],
          neutral: colors.neutral[100],
        },
        ghost: {
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
        },
      },
    },
  },
  plugins: [],
};
