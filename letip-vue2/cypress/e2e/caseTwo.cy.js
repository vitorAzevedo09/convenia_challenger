import currencyFormat from "../../src/helpers/currencyFormat.js"

const OPTIONS = {
  headers: {
    authorization: `ApiKey ${Cypress.env('VUE_APP_SWOP_API_KEY')}`
  },
  url: "https://swop.cx/rest/rates?quote_currencies=BRL,USD"
}


describe('App Case TWO EUR', () => {
  it('Should do correct calculations', () => {
    cy.visit('http://localhost:8080')
    cy.get('[data-cy="checkbox"]').should('not.be.checked')
    cy.get('[data-cy="input"').clear().type(60).trigger('change')
    cy.get('[data-cy="slider-percentage"').eq(0).invoke('val', 10).trigger('change')
    cy.get('[data-cy="slider-quantity-peaplo"').eq(1).invoke('val', 3).trigger('change')


    cy.get(".result__wrapper__money").eq(0).first().should('have.text', ' €60.00 ')
    cy.get(".result__wrapper__money").eq(1).first().should('have.text', ' €6.00 ')
    cy.get(".result__wrapper__money").eq(2).first().should('have.text', ' €66.00 ')
    cy.get(".result__wrapper__money").eq(3).first().should('have.text', ' €22.00 ')

    cy.request(OPTIONS).then((response => {
      const quote_BRL = response.body[0].quote
      const money_format = currencyFormat("BRL", (quote_BRL * 66.00))
      cy.get(".result__wrapper__money").eq(4).first().should('have.text', ` ${money_format} `)
    }))

  })
})

describe('App Case One USD', () => {
  it('Should do correct calculations', () => {
    cy.visit('http://localhost:8080')
    cy.get('.toggle__control').click()
    cy.get('.toggle__checkbox').should('be.checked')
    cy.get(".money__input").clear().type(60.00).trigger('change')
    cy.get('.slider__wrapper__input__range').eq(0).invoke('val', 10).trigger('change')
    cy.get('.slider__wrapper__input__range').eq(1).invoke('val', 3).trigger('change')


    cy.get(".result__wrapper__money").eq(0).first().should('have.text', ' $60.00 ')
    cy.get(".result__wrapper__money").eq(1).first().should('have.text', ' $6.00 ')
    cy.get(".result__wrapper__money").eq(2).first().should('have.text', ' $66.00 ')
    cy.get(".result__wrapper__money").eq(3).first().should('have.text', ' $22.00 ')

    cy.request(OPTIONS).then((response => {
      const quote_BRL = ((1 / response.body[1].quote) * response.body[0].quote)
      const money_format = currencyFormat("BRL", (quote_BRL * 66.00))
      cy.get(".result__wrapper__money").eq(4).first().should('have.text', ` ${money_format} `)
    }))

  })
})
