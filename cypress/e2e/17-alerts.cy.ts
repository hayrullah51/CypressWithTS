describe("Alerts", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/javascript_alerts`);
  });
  it("JS Alert", () => {
    cy.contains("button", "Click for JS Alert").click();
    cy.on("window:alert", (message) => {
      expect(message).to.be.equal("I am a JS Alert");
    });
    cy.on("window:confirm", () => true);
    cy.get("p#result").should("have.text", "You successfully clicked an alert");
  });

  it("JS Alert clicking OK", () => {
    cy.contains("button", "Click for JS Confirm").click();
    cy.on("window:alert", (message) => {
      expect(message).to.be.equal("I am a JS Alert");
    });
    cy.on("window:confirm", () => true);
    cy.get("p#result").should("have.text", "You clicked: Ok");
  });

  it("JS Alert clicking Cancel", () => {
    cy.contains("button", "Click for JS Confirm").click();
    cy.on("window:alert", (message) => {
      expect(message).to.be.equal("I am a JS Alert");
    });
    cy.on("window:confirm", () => false);
    cy.get("p#result").should("have.text", "You clicked: Cancel");
  });

  it.only("JS Prompt", () => {
    cy.window().then((window) => {
      cy.stub(window, "prompt").returns("Hayrullah !!!");
    });
    cy.contains("button", "Click for JS Prompt").click();
    cy.get("p#result").should("have.text", "You entered: Hayrullah !!!");
  });
});
