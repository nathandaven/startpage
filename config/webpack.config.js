'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = (env, argv) =>
  merge(common, {
    entry: {
      app: PATHS.src + '/app.js',
      background: PATHS.src + '/background.js',
      anime: PATHS.src + '/anime.min.js',
      config: PATHS.src + '/config.js',
      weather: PATHS.src + '/weather.js',
      search: PATHS.src + '/search.js',
    },
    devtool: argv.mode === 'production' ? false : 'source-map',
  });

module.exports = config;
