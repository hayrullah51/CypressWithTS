Cypress.config("defaultCommandTimeout", 1600); //Bekleme suresini ayarlama bu test bloguna ozel
describe("Retry ability demo", () => {
  it("visit with delay", () => {
    cy.visit("/loaddelay", { timeout: 10000 });
  });

  it("Client delay button", () => {
    cy.visit("/loaddelay");
  });

  it.only("Progress Bar button", () => {
    cy.visit("/progressbar");
    cy.get("#startButton").click();
    cy.get(".progress",{timeout:100000}).should("have.text", "100%");
  });
});
