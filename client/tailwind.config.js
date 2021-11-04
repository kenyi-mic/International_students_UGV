module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('https://buff.ly/3w4dCip')",
      },
      fontFamily: {
        "font-head": "Courier New",
      },
      maxHeight: {
        bannerHeight: "28.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
