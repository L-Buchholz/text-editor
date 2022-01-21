const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
// IF NEEDED: const WorkboxPlugin = require("workbox-webpack-plugin");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

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

      //Webpack Manifest
      new WebpackPwaManifest({
        swSrc: "./src-sw.js",
        name: "Just Another Text Editor",
        short_name: "JATE",
        description:
          "A simple text editor that can be installed and used offline!",
      }),
      //Inject Manifest
      new InjectManifest({
        swSrc: "./src-sw.js",
      }),

      /*
      // IF NEEDED:
      // Workbox Plugin (Generate SW)
      new WorkboxPlugin.GenerateSW({
        // EDIT BELOW CODE AS NEEDED (from previous activity)
        // Do not precache images
        exclude: [/\.(?:png|jpg|jpeg|svg)$/],

        // Define runtime caching rules.
        runtimeCaching: [
          {
            // Match any request that ends with .png, .jpg, .jpeg or .svg.
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

            // Apply a cache-first strategy.
            handler: "CacheFirst",

            options: {
              // Use a custom cache name.
              cacheName: "images",

              // Only cache 2 images.
              expiration: {
                maxEntries: 2,
              },
            },
          },
        ],
      }),
      */
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
