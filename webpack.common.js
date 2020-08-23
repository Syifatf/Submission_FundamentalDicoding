const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      /* style and css loader */
      
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      
      //  url loader
      // {
      //   test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit: 100000,
      //       name: "[name].[ext]"
      //     }
      //   }
      // },

      /* babel loader */
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                { plugins: ["@babel/plugin-proposal-class-properties"] }
              ]
            }
          }
        ]
      },
      
    ]
  },
  /* plugin */
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
};
