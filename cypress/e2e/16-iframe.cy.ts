describe("Iframe example", () => {
  before(() => {
    cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
  });
  it("Simple and nested iframe", () => {
    cy.get("#frame1").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).should("have.text", "Parent frame");
      cy.wrap($body)
        .find("iframe")
        .then(function ($childIframe) {
          const $childBody = $childIframe.contents().find("body");
          cy.wrap($childBody).should("have.text", "Child Iframe");
        });
    });
  });
});

describe("Iframe example 2", () => {
    before(() => {
      cy.visit(`${Cypress.env("theInternet")}/iframe`);
    });
    it("Simple and nested iframe", () => {
      cy.get("#mce_0_ifr").then(function ($iframe) {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).should('have.text','Your content goes here.');
        cy.wrap($body).clear();
        cy.wrap($body).type('Hello this is HAYRULLAH!!!');
        cy.wrap($body).should('have.text','Hello this is HAYRULLAH!!!');
      })
    });
  });

  describe.only("Iframe example 3", () => {
    before(() => {
      cy.visit(`${Cypress.env("theInternet")}/iframe`);
    });
    it("Simple and nested iframe", () => {
      cy.get("#mce_0_ifr").then(function ($iframe) {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).should('have.text','Your content goes here.');
        cy.wrap($body).find('p').type("{selectAll}{del}Hello this is HAYRULLAH!!!")
        cy.wrap($body).should('have.text','Hello this is HAYRULLAH!!!');
      })
    });
  });
