
describe("template spec", () => {
  before(() => {
  cy.log('Hell from the before hook fn :)')
  })
  after(() => {
    cy.log('Hell from the after hook fn :)')
    })
    beforeEach(() => {
      cy.log('Hello from the beforeEach hook fn')
    })
    afterEach(() => {
      cy.log('Hello from the afterEach hook fn')
    })
  it("Test Case #1", () => {
    cy.log("Hello World");
  });
  it("Test Case #2", () => {
    cy.log("Hello World");
  });
  it("Test Case #3", () => {
    cy.log("Hello World");
  });
  
});
