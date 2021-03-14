import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const CreateFilePlugin = require("create-file-webpack");
const CopyPlugin = require("copy-webpack-plugin");

import { withComponentControls } from "@component-controls/react-router-integration/webpack-build";

const publicFolder = process.env.PUBLIC_PATH || "public";
const distFolder = process.env.BUILD_PATH || "build";
const distPath = path.join(__dirname, distFolder);

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: distPath,
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        include: /src/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: publicFolder }],
    }),
    new CleanWebpackPlugin(),
    new CreateFilePlugin({
      path: distFolder,
      fileName: "_redirects",
      content: `
      /*  /index.html  200
`,
    }),
  ],
  performance: {
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000,
  },
};

export default withComponentControls({
  config,
  options: { configPath: ".config", distFolder: publicFolder },
});
