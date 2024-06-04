describe('API Testing with Postman and Cypress', () => {
  it('should run Postman collection', () => {
    cy.runPostmanCollection('postman/Restful Booker.postman_collection.json', 'postman/Production.postman_environment.json').then((summary) => {
      expect(summary.run.failures.length).to.equal(0);
    });
  });
});
