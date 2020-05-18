const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: './src/index.js',                            // 리액트 파일이 시작하는 곳
    output: {                                           // bundled compiled 파일
        path: path.resolve(__dirname +  '/dist'),            //__dirname : 현재 디렉토리, dist 폴더에 모든 컴파일된 하나의 번들파일을 넣을 예정
        filename: 'index_bundle.js'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',                // 생성한 템플릿 파일
            filename: 'index.html'
        }),
        new ManifestPlugin()
    ]


    //context: path.resolve(__dirname, '../src/main/resources/static'),
    // entry: './src/index.js',
    // output: {
    //     path: __dirname + '/dist',
    //     filename: 'index_bundle.js'
    // },
    // module: {
    //     rules: [{
    //         test: /\.jsx?$/,
    //         exclude: /(node_modules)/,
    //         use: {
    //             loader: 'babel-loader',
    //             options: {
    //                 presets: ['@babel/preset-env', '@babel/preset-react']
    //             }
    //         }
    //     }],
    //     rules: [{
    //         test: /\.css$/,
    //         use: ['style-loader', 'css-loader']
    //     }]
    // }
    // },
    // plugins: [
    //     new HtmlWebpackPlugin(),
    //     new CopyWebPackPlugin([
    //
    //     ])
    // ]
}