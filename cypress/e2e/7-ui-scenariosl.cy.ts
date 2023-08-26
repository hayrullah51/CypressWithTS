describe.skip("Click challenge", () => {
  beforeEach(() => {
    cy.visit("/click");
  });
  it("Class Assertions", () => {
    cy.get("#badButton")
      .should("have.class", "btn btn-primary")
      .click()
      .should("have.class", "btn btn-success");
  });
  it("background assertions", () => {
    cy.get("#badButton").should('have.css','background-color','rgb(0, 123, 255)').click().should('have.css','background-color','rgb(40, 167, 69)');
  });
});

describe('Hover Challenge', () => {
    beforeEach(() => {
        cy.visit("/mouseover");
      });
    it('Hover with cypress workround', () => {// we use cypress-real-events plg [https://github.com/dmtrKovalenko/cypress-real-events]
        cy.get('.text-primary').trigger('mouseover')
    });
    it('Hover with real hover element', () => {// we use cypress-real-events plg [https://github.com/dmtrKovalenko/cypress-real-events]
      cy.get('.text-primary').realHover();
  });
});

describe.only('Dynamic tabe challenge', () => {
  beforeEach(() => {
    cy.visit("/dynamictable");
  });
  it('Chrome CPU Test', () => {
    cy.get("div[role='row'] span").each(($cell) => {
      if($cell.text().includes('Chrome')){
        cy.log(`I have found the ${$cell.text()} row!!!`);
        let chromeRowValues: string[] = [];
        chromeRowValues.push($cell.next().text());
        chromeRowValues.push($cell.next().next().text());
        chromeRowValues.push($cell.next().next().next().text());
        chromeRowValues.push($cell.next().next().next().next().text());
        cy.log("Chrome values ", chromeRowValues)
        chromeRowValues.forEach((chromeValue) => {
          if (chromeValue.includes('%')) {
            cy.log(chromeValue)
            cy.get('.bg-warning').should('have.text',`Chrome CPU: ${chromeValue}`)
          }
        })
      }
      
    })
  });
});
