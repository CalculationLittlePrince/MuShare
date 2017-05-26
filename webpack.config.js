var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'cheap-source-map',
  entry: {
    index: './static/js/index/main.js',
    app: './static/js/app/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './static/dist')
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && (module.context.indexOf('node_modules') !== -1 || module.context.indexOf('static/semantic') != -1);
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
      oss: 'http://gosspublic.alicdn.com/aliyun-oss-sdk-4.4.0.min',
      EventEmitter: 'wolfy87-eventemitter'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
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
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.ico$/,
        include: /(images)/,
        loader: "url-loader?limit=10000&mimetype=image/x-icon"
      },

    ]
  },
};
