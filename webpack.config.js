const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss", ".module.css", ".module.scss", ".ttf"],
    },
    externals: {
        react: 'react'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // Creates style nodes from JS strings
                    'css-loader', // Translates CSS into CommonJS
                ],
            },
            {
                test: /\.svg$/,
                use: 'file-loader',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.module\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader', // Add this line
                ],
            },
            {
                test: /\.module\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ],
    }
}
