const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssCustomMedia = require("postcss-custom-media");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNested = require("postcss-nested");

module.exports = {
  plugins: [
    autoprefixer(),
    cssnano(),
    postcssCustomMedia(),
    postcssPresetEnv(),
    postcssNested(),
  ],
};
