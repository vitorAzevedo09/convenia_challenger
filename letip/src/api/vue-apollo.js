import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

console.log(process.env)
const apolloClient = new ApolloClient({
  cache,
  uri: `https://swop.cx/graphql?api-key=${process.env.VUE_APP_SWOP_API_KEY}`,
})


export default apolloClient
