const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/index.html', to: './index.html'}
        ])
    ]
};
