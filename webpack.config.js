const path = require('path');

module.exports = {
    resolve: {
        alias: {
            // Resolve the jose module correctly
            jose: require.resolve('jose')
        },
        extensions: ['.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
