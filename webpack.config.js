const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.woff$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000
          }
        }
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/build/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
