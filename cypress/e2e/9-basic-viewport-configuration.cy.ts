describe("cy.viewport() Demo", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("Angular")}/angularjs-protractor-practice-site/`);
  });
  it("device name", () => {
    cy.viewport("iphone-6");
    cy.get("#mobile_menu_toggler").should("be.visible");
  });
  it("spesific viewport", () => {
    cy.viewport(550,700);
    cy.get("#mobile_menu_toggler").should("be.visible");
  });
});
