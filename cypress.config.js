const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
viewportHeight:900,
defaultCommandTimeout:15000,
chromeWebSecurity:false,

  e2e: {
    baseUrl: 'https://example.cypress.io/commands/querying',
    reporter: 'cypress-mochawesome-reporter',

    setupNodeEvents(on, config) {
      
      on('task', {downloadFile});
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
    },
 
  }
})
