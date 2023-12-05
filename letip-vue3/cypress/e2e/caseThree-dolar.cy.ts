
describe('App Case Three USD', () => {
  it('Should do correct calculations', () => {
    cy.visit('http://localhost:4173')
    cy.get('[data-cy="toogle-label"]').click()
    cy.get('[data-cy="toogle-input"]').should('be.checked')
    cy.get('[data-cy="value"]').clear().type(13).trigger('input')
    cy.get('[data-cy="slider"]').eq(0).invoke('val', 15).trigger('input')
    cy.get('[data-cy="slider"]').eq(1).invoke('val', 2).trigger('input')


    cy.get('[data-cy="result"').eq(0).first().should('have.text', '$13.00')
    cy.get('[data-cy="result"').eq(1).first().should('have.text', '$1.95')
    cy.get('[data-cy="result"').eq(2).first().should('have.text', '$14.95')
    cy.get('[data-cy="result"').eq(3).first().should('have.text', '$7.76')


  })
})

