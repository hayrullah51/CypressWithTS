/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/classattr");
  });
  it("How to find an element by its text", () => {
    cy.xpath("//*[text()='Correct variant is']").should("contain.text", "var");
  });

  it('How to find an element by its attribute using xpath', () => {
    cy.xpath("//pre[@class=' language-html']").should('contain.text','button')
  });
  it('have.css', () => {// how to assert button or element colour !!!
    cy.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]").should("have.css","background-color","rgb(0, 123, 255)")
  });
});