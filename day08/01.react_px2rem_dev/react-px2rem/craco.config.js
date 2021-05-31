const pxtorem = require("postcss-px2rem");

module.exports = {
  style: {
    postcss: {
      plugins: [
        pxtorem({
          remUnit: 3.75,
          remPrecision: 5,
        }),
      ],
    },
  },
};
