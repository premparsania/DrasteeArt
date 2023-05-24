/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#51459F",
        secondary: "#A6B1C6",
        input_bg: "#FCFCFC",
        bg_primary: "#FFFFFF",
        t_color: "#414046",
        enable_switch: '#51459F',
        disable_switch: '#A6B1C6',        
        custom_shadow: "0px 0px 14px #E3E6FE",
        ...defaultTheme.colors,
      },
    },
  },
  plugins: [],
};
