const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
    const options = {
        webpackOptions: {
            resolve: {
                alias: {
                    // Ensure jose module can be resolved
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
        },
    };

    on('file:preprocessor', webpack(options));
};
