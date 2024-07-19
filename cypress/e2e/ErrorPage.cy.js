describe("ErrorPage Component", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/error-page");
  });

  it("displays default error message when no error is provided", () => {
    cy.contains("Article Not present");
  });
});
