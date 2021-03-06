module.exports = {
    entry: [
      './src/index.js',
      //'./src/index.css'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "script-loader"
          }
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "less-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
              }
            }
          ]
        }
      ]
    }
  };