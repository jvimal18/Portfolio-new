const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../backend/dist"),

  configureWebpack: {
    devtool: 'source-map'
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/variables.scss";`
      }
    }
  }
}