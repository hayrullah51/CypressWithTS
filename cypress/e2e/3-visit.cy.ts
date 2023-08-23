describe("basics", () => {
  beforeEach(() => {
    cy.visit("/textinput");
  });
  it("visit explanation text visit", () => {
    cy.log("Hello from inside it");
  });

  it("visit explanation text attribute", () => {
    cy.log("Hello from inside it");
  });
  it("visit explanation text attribute", () => {
    cy.log("Hello from inside it");
  });
  it("visit explanation text attribute", () => {
    cy.log("Hello from inside it");
    cy.url().then((url) => {
      cy.log(`Printing the URL: ${url}`);
      expect(url).include("/textinput");
    });
  });
  it("title validation", () => {
    cy.title().then((title) => {
      cy.log("TiTlE :  " + title);
      expect(title).to.be.equal("Text Input");
    });
  });
  it.only("Input test", () => {
    cy.get("input#newButtonName").type("This is INPUT!!!");
    cy.get('button#updatingButton').click().should('have.text','This is INPUT!!!');
  });
});
