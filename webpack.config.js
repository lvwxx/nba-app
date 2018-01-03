const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            //'webpack/hot/dev-server',
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

    plugins:[
        // new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new webpack.NamedModulesPlugin(),
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