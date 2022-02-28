const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, "src", "index.js"),
    output: {
        filename: "main.[contenthash].js",
        path: resolve(__dirname, "build")
    },
    target: "web",
    resolve: {
        alias: {
            '@media': resolve(__dirname, 'media')
        }
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.(mp[3|4])$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            title: "Dates and Timer",
            filename: "index.html",
            template: resolve(__dirname, "src", "index.html")
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["imagemin-mozjpeg"],
                            ["optipng", { optimizationLevel: 5 }]
                        ],
                    },
                },
            }),
        ],
    },
}