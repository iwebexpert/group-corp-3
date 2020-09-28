const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack');

require('dotenv').config()

const devMode = process.env.NODE_ENV === 'development'

const APP_ = /^APP_/i;
const stringified = {
    'process.env': Object.keys(process.env)
        .filter(key => APP_.test(key))
        .reduce((env, key) => {
            env[key] = JSON.stringify(process.env[key]);
            return env;
        }, {}),
}

module.exports =  {
    entry: path.join(__dirname, 'src', 'index.tsx'),

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            components: path.join(__dirname, 'src', 'components'),
        },
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        }
                    },
                ],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src',  'index.html'),
            filename: 'index.html',
            titleApp: 'The messenger App',
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? 'main.css' : '[name].[hash].css',
        }),
        //new Dotenv(),
        new webpack.DefinePlugin(stringified),
    ],
    devServer: {
        historyApiFallback: true,
    },
}
