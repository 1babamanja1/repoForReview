const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'), // start point for webpack; If context is absent, routes should be /src/...
    mode: 'development', //or production
    // entry: '/index.js', // single entry point
    entry: {
        main: '/index.js',
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js', // this file will be created after packing is finished; [name] - reserved combination for file name (in our case: main and analytics)
        path: path.resolve(__dirname, 'myDist'), // the destination of result file storing
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        // alias: {
        //     '@aliasName': 'path/to/the/folder'
        // }
    },
    devServer: {
        port:8080, // creates dev server which store updates in RAM. Does not create build
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html' // creates index.html from this template
        }),
        new CleanWebpackPlugin(), // cleans dist folder on each rebuild
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'myDist'),
                },
            ]}),
            
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            // {
            //     test: // extension to be detected
            //     use: // used loader
            // }

             {
                 test: /\.css$/,
                 use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    'css-loader'
                ]
             },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
              },
              {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                  }
                }
              }

        ]
    }
}