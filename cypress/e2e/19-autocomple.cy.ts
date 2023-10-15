describe("Autocomplete explanation", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/auto-complete`);
  });
  it("Autocomplete demo using Yellow", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      expect(err.message).to.include("of undefined");
      done();
      return false;
    });
    cy.get(".auto-complete__value-container").first().type("Y");
    cy.get("#react-select-2-option-0").contains("Yellow").click();
    cy.get(".css-12jo7m5 auto-complete__multi-value__label").should(
      "have.text",
      "Yellow"
    );
  });
});

function done() {
  throw new Error("Function not implemented.");
}
