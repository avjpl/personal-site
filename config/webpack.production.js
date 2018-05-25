const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { PATHS } = require('./webpack.constants');

const productionConfig = merge([
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.extractCSS({
    use: [
      {
        loader: 'css-loader',
        options: { importLoaders: 1 },
      },
      'postcss-loader',
    ],
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: './images/[name].[ext]',
    },
  }),
  /**
   * purifycss-webpack  Error: undefined:4:47743: property missing ':'
   *
   * Github issue
   * https://github.com/webpack-contrib/purifycss-webpack/issues/89
   */
  // parts.purifyCSS({
  //   paths: glob.sync(`${ PATHS.app }/**/*.js`, { nodir: true }),
  // }),
]);

exports.productionConfig = productionConfig;
