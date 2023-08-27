describe("", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/buttons`);
  });
  it("Double Click Test", () => {
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage")
      .should("be.visible")
      .and("have.text", "You have done a double click");
  });

  it("Right Click Test", () => {
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage")
      .should("be.visible")
      .and("have.text", "You have done a right click");
  });
});
 