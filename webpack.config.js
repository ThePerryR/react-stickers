import webpack from 'webpack';
import merge from 'lodash/object/merge';
import autoprefixer from 'autoprefixer-core';
import minimist from 'minimist';

const { DefinePlugin, BannerPlugin } = webpack;
const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;

const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  '__DEV__': DEBUG
};

//
// Common configuration chunk to be used for both
// client-side (app.js) and server-side (server.js) bundles
// -----------------------------------------------------------------------------

const config = {
  output: {
    publicPath: './',
    sourcePrefix: '  '
  },
  node: {
    console: true,
    fs: "empty"
  },
  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0'
      }
    ],
    noParse: /node_modules\/quill\/dist/
  }
};

//
// Configuration for the client-side bundle (app.js)
// -----------------------------------------------------------------------------

const appConfig = merge({}, config, {
  entry: './src/app.js',
  output: {
    path: './build/public',
    filename: 'app.js'
  },
  devtool: DEBUG ? 'source-map' : false,
  plugins: config.plugins.concat([
      new DefinePlugin(merge(GLOBALS, {'__SERVER__': false}))
    ].concat(DEBUG ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
      ])
  )
});

//
// Configuration for the server-side bundle (server.js)
// -----------------------------------------------------------------------------

const serverConfig = merge({}, config, {
  entry: './src/server.js',
  output: {
    path: './build',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: /^[a-z][a-z\.\-0-9]*$/,
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  devtool: DEBUG ? 'source-map' : 'cheap-module-source-map',
  plugins: config.plugins.concat(
    new DefinePlugin(merge(GLOBALS, {'__SERVER__': true})),
    new BannerPlugin('require("source-map-support").install();',
      {raw: true, entryOnly: false})
  ),
  module: {
    loaders: config.module.loaders.map(function (loader) {
      // Remove style-loader

    })
  }
});

export default [appConfig, serverConfig];
