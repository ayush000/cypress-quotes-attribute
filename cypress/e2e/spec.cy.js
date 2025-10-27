/// <reference types="cypress" />
describe('page', () => {

  it('opens test HTML file with cy.origin', () => {
    const baseUrl = Cypress.config('baseUrl') || 'http://localhost:8080'

     cy.visit('https://example.cypress.io')

    cy.origin(baseUrl, () => {
      cy.visit('/')
      cy.get('title').should('contain', 'Test Page')
      cy.get('#testBtn').should('be.visible').and('contain', 'Click Me')
    })
  })
})
