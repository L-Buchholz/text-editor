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
      main: "./client/src/js/index.js",
      install: "./client/src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "client", "dist"),
    },
    plugins: [
      //HTML Webpack Plugin
      new HtmlWebpackPlugin({
        template: "client/index.html",
        title: "Just Another Text Editor",
      }),
      //Inject Manifest
      new InjectManifest({
        swSrc: "./client/src-sw.js",
      }),
      //Copy Webpack Plugin
      new CopyPlugin({
        patterns: [{ from: "client/img", to: "assets" }],
      }),
      //Webpack Manifest
      new WebpackPwaManifest({
        background_color: "#225ca3",
        description:
          "A simple text editor that can be installed and used offline!",
        display: "standalone",
        icons: [
          {
            src: "client/img/icons/icon_96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "client/img/icons/icon_144x144.png",
            sizes: "144x144",
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
