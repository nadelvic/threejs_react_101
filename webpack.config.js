import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin'

export default  {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            use: ['style-loader','css-loader'],
            test: /\.css$/
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
                },
                {
                loader: "css-loader", options: {
                    sourceMap: true
                    }
                }, 
                {
                loader: "less-loader", options: {
                    sourceMap: true
                    }
                }
            ]
        }]   
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html'
        }),
        new LiveReloadPlugin()
    ]
};