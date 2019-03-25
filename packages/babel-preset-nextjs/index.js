/* eslint-disable global-require */

const env = process.env.NODE_ENV;
// const isProduction = env === 'production';
const isDevelopment = env === 'development';
// const isTest = env === 'test';

// eslint-disable-next-line no-unused-vars
module.exports = (context, options = {}) => ({
  presets: [require('@babel/preset-flow')],
  plugins: [
    require('@babel/plugin-proposal-do-expressions'),
    require('@babel/plugin-proposal-export-default-from'),
    isDevelopment && require('babel-plugin-flow-react-proptypes'),
  ].filter(Boolean),
});
