import gql from 'graphql-tag'
import apolloClient from '@/api/apolloClient'
import { EUR, USD, BRL } from '@/helpers/enums'


async function getPremium(currency: string) {
  const response = await apolloClient.query({
    query: gql`
     query LatestEuro {
       latest(baseCurrency: "${currency}", quoteCurrencies: ["${BRL}"]) {
         quote
       }
     }
   `
  })
  const quote = response.data.latest[0].quote
  return quote
}

async function getFree(currency: string) {
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


export async function getCurrentCurrencyQuote(currency: string): Promise<number> | never {
  return getPremium(currency).catch(() => getFree(currency));
}
