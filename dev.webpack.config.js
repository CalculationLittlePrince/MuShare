var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'cheap-source-map',
  entry: {
    index: ['babel-polyfill', './static/js/index/main.js'],
    app: ['babel-polyfill', './static/js/app/main.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './static/dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && (module.context.indexOf('node_modules') !== -1
          || module.context.indexOf('static/semantic') != -1
          || module.context.indexOf('static/js/vendor') != -1);
      },
    }),
    // CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest', // But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
      EventEmitter: 'wolfy87-eventemitter'
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
      },
      {
        test: /(\.css|\.scss)$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=10000&name=img/[hash:8].[name].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.ico$/,
        include: /(images)/,
        loader: "url-loader?limit=10000&mimetype=image/x-icon"
      },

    ]
  },
};
