const { generateConfig } = require('gatsby-plugin-ts-config');

if (process.env.NODE_ENV !== 'production' || process.env.BUILD_DEV === 'true') {
  require('dotenv').config();
}

module.exports = generateConfig({
  configDir: 'config',
  projectRoot: __dirname,
});
