module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          lighter: "#F6F6F6",
          light: "#F3F3F3",
          dark: "#BABABA",
          darker: "#7F7F7F",
        },
        primary: "#0ACF83",
        accent: "#FFC120",
      },
    },
  },
  plugins: [],
};
