'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootPath = process.cwd();

const config = {
    entry: {
        main: ['./scripts/main.js', './styles/main.scss']
        //customizer: './scripts/customizer.js'
    },
    paths: {
        root: rootPath,
        assets: path.join(rootPath, 'theme/resources/assets'),
        dist: path.join(rootPath, 'theme/dist'),
    }
}

module.exports = {
    context: config.paths.assets,
    entry: config.entry,
    devtool: 'source-map',
    cache: true,
    output: {
        path: config.paths.dist,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: config.paths.assets,
                loader: 'import-glob-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: config.paths.assets,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' }, 
                        { loader: 'postcss-loader' }
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: config.paths.assets,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { sourceMap: true } },
                        { loader: 'resolve-url-loader' },
                        { loader: 'postcss-loader', options: {
                            config: { path: __dirname, ctx: config },
                            sourceMap: true,
                            }
                        },
                        { loader: 'sass-loader', options: { sourceMap: true } }
                    ]
                })
            },
            {
                test: /\.(ttf|eot|woff2?)$/,
                use: [
                    'file-loader?limit:4096,name=fonts/[name].[ext]'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: [
                    'file-loader?name=images/[name].[ext]'
                ]
            }
        ]
    },
    resolve: {
        modules: [
            config.paths.assets,
            'node_modules'
        ],
        enforceExtension: false
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
    stats: {
        children: false
    }
}