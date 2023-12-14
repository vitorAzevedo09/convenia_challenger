
describe('App Case Four USD', () => {
  it('Should do correct calculations', () => {
    cy.visit('http://localhost:4173')
    cy.get('[data-cy="toogle-label"]').click()
    cy.get('[data-cy="toogle-input"]').should('be.checked')
    cy.get('[data-cy="value"]').clear().type(2.58).trigger('input')
    cy.get('[data-cy="slider"]').eq(0).invoke('val', 17).trigger('input')
    cy.get('[data-cy="slider"]').eq(1).invoke('val', 3).trigger('input')


    cy.get('[data-cy="result"').eq(0).first().should('have.text', '$2.58')
    cy.get('[data-cy="result"').eq(1).first().should('have.text', '$0.44')
    cy.get('[data-cy="result"').eq(2).first().should('have.text', '$3.02')
    cy.get('[data-cy="result"').eq(3).first().should('have.text', '$1.51')

  })
})

