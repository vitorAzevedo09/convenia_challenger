
describe('App Case Two EUR', () => {
  it('Should do correct calculations', () => {
    cy.visit('http://localhost:4173')
    cy.get('[data-cy="toogle-input"]').should('not.be.checked')
    cy.get('[data-cy="value"]').clear().type(60.00).trigger('input')
    cy.get('[data-cy="slider"]').eq(0).invoke('val', 10).trigger('input')
    cy.get('[data-cy="slider"]').eq(1).invoke('val', 3).trigger('input')


    cy.get('[data-cy="result"]').eq(0).first().should('have.text', '€60.00')
    cy.get('[data-cy="result"]').eq(1).first().should('have.text', '€6.00')
    cy.get('[data-cy="result"]').eq(2).first().should('have.text', '€66.00')
    cy.get('[data-cy="result"]').eq(3).first().should('have.text', '€22.00')

  })
})

