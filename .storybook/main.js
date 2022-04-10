const path = require("path");

module.exports = {
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
  }),
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": path.join(
            process.cwd(),
            "./node_modules/@emotion/react"
          ),
          "emotion-theming": path.join(
            process.cwd(),
            "./node_modules/@emotion/react"
          ),
        },
      },
    };
  },
};
