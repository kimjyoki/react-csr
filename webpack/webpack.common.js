const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const ForkTsCheckerWebpackPlugin = require(`fork-ts-checker-webpack-plugin`);
const CopyPlugin = require(`copy-webpack-plugin`);
// const PnpWebpackPlugin = require("pnp-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "~" : path.resolve(__dirname, '../src/static'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/'
        },
      },
      {
        test: /\.(ico|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          publicPath: path.resolve(__dirname, "dist"),
          name: "[name].[ext]?[hash]",
          limit: 10000,
          outputPath: 'static/'
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
    //   PnpWebpackPlugin.forkTsCheckerOptions({
    //       checkSyntacticErrors: true,
    //       eslint: true, // <---------- this requires eslint to be installed locally
    //   })
    // ),
    // new CopyPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, "../src/static"), to: "static" },
    //   ],
    // }),
    new CleanWebpackPlugin()
  ],
};
