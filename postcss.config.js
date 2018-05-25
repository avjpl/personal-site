const path = require('path');

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-flexbox': {},
    'postcss-each': {},
    'postcss-font-magician': {
      variants: {
        Raleway: {
          300: ['woff2'],
          700: ['woff2'],
        },
      },
    },
    'postcss-font-awesome': {},
    'postcss-mixins': {},
    'precss': {},
    'cssnano': {},
    'postcss-reporter': {
      clearMessages: true,
    },
  },
};
