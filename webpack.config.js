const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/AricEditor.js',
    output: {
        filename: 'AricEditor.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /fonts\/.*\.(woff(2)?|eot|ttf|svg|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name="[name]-[hash].[ext]"',
            }
        ]
    }
};
