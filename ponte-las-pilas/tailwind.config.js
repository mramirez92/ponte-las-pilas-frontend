/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

const theme = {
  popover: {
    styles: {
      base: {
        bg: "bg-white",
        color: "text-blue-gray-500",
        // Add the outline-none utility class to the focus style
        focus: "outline-none",
      },
    },
  },
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Urbanist","sans-serif"],
        quotes: ["Economica", "sans-serif"],
        worksans:["Work+Sans", "sans-serif"],
      },
      colors: {
        "bg-color-1": "bg-amber-500",
        "bg-color-2": "bg-indigo-600",
        "bg-color-3": "bg-red-400",
        "bg-color-4": "bg-sky-500",
        "bg-color-5": "bg-teal-500",
        "bg-color-6": "bg-rose-400",
      },
    },
  },
  plugins: [],
}