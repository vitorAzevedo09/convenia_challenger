import currencyFormat from "../../src/helpers/currencyFormat.js"

const OPTIONS = {
  headers: {
    authorization: `ApiKey ${Cypress.env('VUE_APP_SWOP_API_KEY')}`
  },
  url: "https://swop.cx/rest/rates?quote_currencies=BRL,USD"
}


describe('App Case Four USD', () => {
  it('Should do correct calculations', () => {
    cy.visit('http://localhost:8080')
    cy.get('[data-cy="toogle-label"]').click()
    cy.get('[data-cy="toogle-input"]').should('be.checked')
    cy.get('[data-cy="value"]').clear().type("2.58").trigger('input')
    cy.get('[data-cy="slider"]').eq(0).invoke('val', 17).trigger('input')
    cy.get('[data-cy="slider"]').eq(1).invoke('val', 3).trigger('input')



    cy.get('[data-cy="bill"]').find('[data-cy="result"]').should('have.text', ' $2.58 ')
    cy.get('[data-cy="tip"]').find('[data-cy="result"]').should('have.text', ' $0.44 ')
    cy.get('[data-cy="total-bill"]').find('[data-cy="result"]').should('have.text', ' $3.02 ')
    cy.get('[data-cy="per-person"]').find('[data-cy="result"]').should('have.text', ' $1.51 ')

    cy.request(OPTIONS).then((response => {
      const quote_BRL = ((1 / response.body[1].quote) * response.body[0].quote)
      const money_format = currencyFormat("BRL", (quote_BRL * 3.02))
      cy.get('[data-cy="bill-BRL"]').find('[data-cy="result"]').should('have.text', ` ${money_format} `)
    }))

  })
})

