const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
       config.env = {
        ...process.env,
        ...config.env
      }
      return config 
    },
  },
});
