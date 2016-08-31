

module.exports = {
  entry: './src/index.js',
  output:{
    path: './app',
    filename: 'boundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          presets: ['es2015', 'stage-2']
        }
      },
      {
        test: /\.css/,
        loader: 'style!css'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)/,
        loader: 'url'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
      }
    ]

  }


}
