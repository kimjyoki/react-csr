const path = require(`path`);
const webpack = require(`webpack`);
const { merge } = require(`webpack-merge`);
const common = require(`./webpack.common.js`);

module.exports = merge(common, {
  mode: "development",
  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true,
    port: 3000,
    contentBase: path.resolve(__dirname, "dist"),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
