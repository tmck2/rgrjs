module.exports = {
  entry: "./js/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['react','es2015']
        }
      }
    ]
  }
}
