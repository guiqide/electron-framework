const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [
  {
    mode: 'development',
    entry: './app/app.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.ts$/,
        include: /app/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/,
      }]
    },
    output: {
      path: __dirname + '/dist',
      filename: 'app.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './app/bootstrap/index.html'
      })
    ]
  }
];