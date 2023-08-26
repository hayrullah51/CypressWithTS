describe('Env variable demo', () => {
    it('Demo', () => {
        cy.log(`Printing Enviroment Variable Value: ${Cypress.env("demoVar")}`);
    });
});