// @ts-ignore


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#f0f3f2",
        "green-color": "#ffcc00",
        "textcolor": "#7e8285",
        "border-bottom": "#dfe5e8",
        "footer-text-color": "#99a9b5",
      },
      backdropBlur: {
        lg: "20px", // You can customize this value as needed
      },
    },
  },
  variants: {
    backdropFilter: ["responsive"], // Enable responsive variants if needed
  },
  plugins: [
   
  ],
};
