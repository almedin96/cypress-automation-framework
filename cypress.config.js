const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx, feature}",
    chromeWebSecurity: false,
    baseUrl: "https://www.nesto.com", // koristi se u testu: cy.visit("/")
    experimentalSessionAndOrigin: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    // headed: true, --headed dodaje se na run commandi: npx cypress run --browser chrome --headed posto je cypress sada po defaultu headless
    env: {
      first_name: "sara" //env variable, can be used Cypress.env(first_name) ili pozvana npx cypress run --env first_name=Hazbula
    }
  },
});
