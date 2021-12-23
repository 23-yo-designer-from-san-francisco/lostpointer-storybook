const path = require('path');
const src = path.join(__dirname, '../src');

module.exports = {
  stories: [
    "../src/**/*.stories.ts"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/preset-scss"
  ],
  core: {
    builder: "webpack5"
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.join(src, 'components'),
      forms: path.join(src, 'forms'),
      tokens: path.join(src, '../tokens'),
    };
    config.module.rules.push({
      test: /\.hbs$/,
      use: ['handlebars-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
}
