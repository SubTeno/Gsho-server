const mode = process.env.NODE_ENV || "development";
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: mode,
  entry: "./src/index.ts",
  target: "node",
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        keep_classnames: /entry|gloss|kanji_code|kanji|reading|sense/
      }
    })],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
