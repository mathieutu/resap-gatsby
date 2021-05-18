const { generateConfig } = require('gatsby-plugin-ts-config');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = generateConfig({
  configDir: 'config',
  projectRoot: __dirname,
});
