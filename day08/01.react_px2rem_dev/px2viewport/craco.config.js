//  es6引入模块 (import/export)
// import pxToViewport from "postcss-px-to-viewport";

//  commonJS模块 (reuqire)
const pxToViewport = require("postcss-px-to-viewport");

module.exports = {
  style: {
    postcss: {
      plugins: [
        pxToViewport({
          unitToConvert: "px",
          viewportWidth: 375, //设计稿宽度
          unitPrecision: 5,
          propList: ["*"],
          viewportUnit: "vw",
          fontViewportUnit: "vw",
          selectorBlackList: ["body"], //body的px单位不用转
          minPixelValue: 1, //解决1px问题
          mediaQuery: false,
          replace: true,
          exclude: /node_modules/,
        }),
      ],
    },
  },
};
