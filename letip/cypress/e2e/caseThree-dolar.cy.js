import currencyFormat from "../../src/helpers/currencyFormat.js"

const OPTIONS = {
  headers: {
    authorization: `ApiKey ${Cypress.env('VUE_APP_SWOP_API_KEY')}`
  },
  url: "https://swop.cx/rest/rates?quote_currencies=BRL,USD"
}


describe('App Case Three USD', () => {
  it('Should do correct calculations', () => {
    cy.visit('http://localhost:8080')
    cy.get('[data-cy="toogle-label"]').click()
    cy.get('[data-cy="toogle-input"]').should('be.checked')
    cy.get('[data-cy="value"]').clear().type("13.00").trigger('input')
    cy.get('[data-cy="slider"]').eq(0).invoke('val', 15).trigger('input')
    cy.get('[data-cy="slider"]').eq(1).invoke('val', 2).trigger('input')


    cy.get('[data-cy="bill"]').find('[data-cy="result"]').should('have.text', ' $13.00 ')
    cy.get('[data-cy="tip"]').find('[data-cy="result"]').should('have.text', ' $1.95 ')
    cy.get('[data-cy="total-bill"]').find('[data-cy="result"]').should('have.text', ' $14.95 ')
    cy.get('[data-cy="per-person"]').find('[data-cy="result"]').should('have.text', ' $7.76 ')

    cy.request(OPTIONS).then((response => {
      const quote_BRL = ((1 / response.body[1].quote) * response.body[0].quote)
      const money_format = currencyFormat("BRL", (quote_BRL * 14.95))
      cy.get('[data-cy="bill-BRL"]').find('[data-cy="result"]').should('have.text', ` ${money_format} `)
    }))

  })
})

