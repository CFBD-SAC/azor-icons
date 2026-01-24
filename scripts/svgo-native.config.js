module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeAttrs",
      params: {
        elemSeparator: "::",
        attrs: "xmlns|xml:space",
      },
    },
  ],
};
