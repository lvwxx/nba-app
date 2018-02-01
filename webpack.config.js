const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            // 'webpack/hot/dev-server',
            path.join(__dirname,'./app/main.js'),
        
        //  vendor: [
        //     'react',
        //     'react-dom',
        // ],
        
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname,'./dist'),
        publicPath: '/dist/',
    },
    devtool: 'inline-source-map',
    plugins:[
        // new webpack.HotModuleReplacementPlugin(), // 启用 HMR package.json中 --hot 已经启用这个功能
        new webpack.NamedModulesPlugin(),
        // new UglifyJSPlugin(), // tree shaking
        // new webpack.optimize.CommonsChunkPlugin({ // 提出公共代码
        //     name: 'common',
        // }),
    ],

    module : {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'app'),
                query: {
                    presets: ['react', 'es2015']
                }
            },{
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },{
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },

    devServer: {
        hot: true,
        host: 'localhost',
        port: 3000,
        contentBase: path.resolve(__dirname,'dist')
    }
}