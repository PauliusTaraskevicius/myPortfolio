module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-xxl": { max: "1368px" },
        "-lg": { max: "1023px" },
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
        "@md": { min: "640px", max: "767px" },
        "@lg": { min: "768px", max: "1023px" },
        "@xl": { min: "1024px", max: "1279px" },
        "@2xl": { min: "1280px", max: "1535px" },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
