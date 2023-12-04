import gql from 'graphql-tag'
import apolloClient from '@/api/apolloClient'
import { EUR, USD, BRL } from '@/helpers/enums'

export async function getCurrentCurrencyQuote(currency: string): Promise<number> {
  try {
    const response = await apolloClient.query({
      query: gql`
     query LatestEuro {
       latest(baseCurrency: "${currency}", quoteCurrencies: ["${BRL}"]) {
         quote
       }
     }
   `
    })
    return response.data.latest[0].quote
  } catch {

    const response = await apolloClient.query({
      query: gql`
   query {
     latest(baseCurrency: "${EUR}", quoteCurrencies: ["${BRL}", "${USD}"]) {
       quote
     }
   }
  `
    })
    let quote = 0
    if (currency === EUR) {
      quote = response.data.latest[0].quote
    }
    if (currency === USD) {
      quote = (1 / response.data.latest[1].quote) * response.data.latest[0].quote
    }
    return quote
  }
}
