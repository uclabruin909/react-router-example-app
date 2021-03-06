module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    // loaders: [
    //   {
    //     exclude: /node_modules/,
    //     loader: 'babel-loader',
    //     query: {
    //       presets: ['react', 'es2015', 'stage-1']
    //     }
    //   }
    // ]
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
