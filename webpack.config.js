const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
    return {

        mode: env,
        watch: env == "development" ? true : false,
        devtool: env == "production" ? "none" : "eval-source-map",
        target: 'electron-renderer',
        entry: './app/src/renderer_process.js',
    
        output: {
            path: __dirname + '/app/build',
            publicPath: 'build/',
            filename: 'bundle.js'
        },
    
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                      loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    })
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            ]
        },
    
        plugins: [
            new ExtractTextPlugin({
                filename: 'bundle.css',
                disable: false,
                allChunks: true
            })
        ],
    
        resolve: {
          extensions: ['.js', '.json', '.jsx']
        }        
    }
}
