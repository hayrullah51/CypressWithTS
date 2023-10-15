describe("Date Picker Describe", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/date-picker`);
  });
  it("date picker demo test", () => {
    cy.get("#datePickerMonthYearInput").click();
    cy.get(".react-datepicker__month-select")
      .select("0")
      .should("have.value", "0");
    cy.get(".react-datepicker__year-select")
      .select("1900")
      .should("have.value", "1900");
    cy.findByText("16").click();

    cy.get("#datePickerMonthYearInput").should('have.value','01/16/1900')
  });
});
