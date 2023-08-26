Cypress.on("uncaught:exception", (err, Runnable) => {
  return false;
});
