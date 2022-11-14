// tailwind.config.js
module.exports = {
  purge: [
    './source/presentation/pages/**/*.{js,ts,jsx,tsx}',
    './source/presentation/components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    colors: {
      white: "#ffffff",
      'off-white': "#e5e5e5",
      dark: "#141414",
      black: "#000",
      gray: "#808080",
      primary: "#e50914",
      transparent: "transparent"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
