const path = require('path');

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
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
    'postcss-cssnext': {
      browsers: ['last 3 versions', '> 5%'],
    },
    'postcss-mixins': {},
    'postcss-advanced-variables': {},
    'postcss-nested': {},
    'postcss-atroot': {},
    'postcss-property-lookup': {},
    'postcss-extend': {},
    'postcss-reporter': {
      clearMessages: true,
    },
  },
};
