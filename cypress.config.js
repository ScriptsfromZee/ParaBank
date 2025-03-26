const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  "chromeWebSecurity": false,
  video: false,
  e2e: {
    baseUrl:"https://parabank.parasoft.com/parabank/register.htm",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
