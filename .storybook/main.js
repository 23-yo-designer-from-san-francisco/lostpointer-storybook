const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/preset-scss"
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.hbs$/,
      use: ['handlebars-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
}
