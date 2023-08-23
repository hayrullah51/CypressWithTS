describe('Locators', () => {
    beforeEach(() => {
        cy.visit('/dynamicid')
    })
    it('cy.contains using', () => {
        cy.contains('Button with Dynamic ID').should('have.text','Button with Dynamic ID');
    });

    it('cy.get() + cy.find()', () => {
        cy.get('div').find('button').should('have.text','Button with Dynamic ID');
    });

    it('css sellector using an attribute', () => {
        cy.get('button[class="btn btn-primary"]').should('have.text','Button with Dynamic ID');
    });
});