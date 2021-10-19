//for node js we use require

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // can be production
    entry: './src/index.js', // the main file with the project
    output: {
        path: path.resolve(__dirname, 'build'), //where we will save the project
        filename: '[name].[contenthash].js', //the name of the files, if we can not mention it, the name will be bundel(bad)
        clean: true // clean build and save the last variant (clean-webpack-plugin can be too)
    },
    devServer: {           
        port: 3000,
        hot: true, //changes only some parts of the code 
        historyApiFallback: { index: '/' }
    },
    plugins: [
        new HtmlWebpackPlugin({ // only empty html file
            template: './public/index.html', // example of html file
            filename: './index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    //"style-loader",
                    //{loader: "css-loader",
                    //options: {
                     //   modules: true, //классы станут нечетабильны
                    // modules: {
                    //     localIdentName: "[name]_[local]_[hash:base64:5]", //чтобы названия стали читабельными и разные(без совподений, благодаря hash)
                    // },
                    //    sourceMap: true,
                 //   }
              //  },
                //    "sass-loader",
                
                 "style-loader",
                 "css-loader",
                 "sass-loader",
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],  // for react jsx
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'], // don't write the index of the files
    },
}

