describe('Home page', () => {
  it('should have text of', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('h1').should('contain', 'Learn CI/CD')
  })

  it('should have title of', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.title().should('eq', 'Create Next App')
  })
})
