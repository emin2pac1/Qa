const path = require('path');

module.exports = {
    // output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            '@Layouts': path.resolve('resources/js/Layouts'),
            '@Navigation': path.resolve('resources/js/Navigation'),
        },
    },

    module: {

        rules: [
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',

                        // Requires >= sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                indentedSyntax: true // optional
                            },
                        },
                    },
                ],
            },
        ],
    }
};
