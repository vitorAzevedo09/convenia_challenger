import currencyFormat from "../../src/helpers/currencyFormat.js"

const OPTIONS = {
  headers: {
    authorization: `ApiKey ${Cypress.env('VUE_APP_SWOP_API_KEY')}`
  },
  url: "https://swop.cx/rest/rates?quote_currencies=BRL,USD"
}


describe('App Case One EUR', () => {
  it('Should do correct calculations', () => {
    cy.visit('http://localhost:8080')
    cy.get('[data-cy="toogle-label"]').should('not.be.checked')
    cy.get('[data-cy="value"]').clear().type("73.23").trigger('input')
    cy.get('[data-cy="slider"]').eq(0).invoke('val', 13).trigger('input')
    cy.get('[data-cy="slider"]').eq(1).invoke('val', 10).trigger('input')


    cy.get('[data-cy="result"]').eq(0).first().should('have.text', ' €73.23 ')
    cy.get('[data-cy="result"]').eq(1).first().should('have.text', ' €9.52 ')
    cy.get('[data-cy="result"]').eq(2).first().should('have.text', ' €82.75 ')
    cy.get('[data-cy="result"]').eq(3).first().should('have.text', ' €8.28 ')

    cy.request(OPTIONS).then((response => {
      const quote_BRL = response.body[0].quote
      const money_format = currencyFormat("BRL", (quote_BRL * 82.75))
      cy.get('[data-cy="result"]').eq(4).first().should('have.text', ` ${money_format} `)
    }))

  })
})

