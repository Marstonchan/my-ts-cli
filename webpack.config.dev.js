const { program } = require('commander');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

program
    .option('-sub --subProject <subProjecttName>')
    .option('--config')
    .option('--progress')
program.parse(process.argv);
const subProjectName = program.opts().subProject;

module.exports = {
    entry: `./${subProjectName}/script/${subProjectName}.ts`,
    output: {
        filename: `./${subProjectName}.js`,
        path: path.resolve(__dirname, `${subProjectName}/dist`)
    },
    devServer: {
        host: 'localhost',
        open: true,
        port: 8888,
        hot: true
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: ['ts-loader']
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./${subProjectName}/${subProjectName}.html`
        })
    ]
}