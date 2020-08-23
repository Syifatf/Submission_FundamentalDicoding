const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins : [
                ["@babel/plugin-proposal-class-properties", { "loose": true }],
                // ["@babel/transform-class-properties"]
                ["transform-class-properties"]
              ]
            }
          }
        ]
      }
    ]
  }
});
