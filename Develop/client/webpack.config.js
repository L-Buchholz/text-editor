const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

// DONE: Add and configure workbox plugins for a service worker and manifest file.
module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      //HTML Webpack Plugin
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Just Another Text Editor",
      }),
      //Inject Manifest
      new InjectManifest({
        swSrc: "./src-sw.js",
      }),
      //Copy Webpack Plugin
      new CopyPlugin({
        patterns: [{ from: "img", to: "assets" }],
      }),
      //Webpack Manifest
      new WebpackPwaManifest({
        background_color: "#225ca3",
        description:
          "A simple text editor that can be installed and used offline!",
        display: "standalone",
        icons: [
          {
            src: "./img/icons/icon_96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
        name: "Just Another Text Editor",
        short_name: "J.A.T.E",
        publicPath: "/",
        start_url: "/",
      }),
    ],

    // DONE: Add CSS loaders and babel to webpack.
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
