import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://swop.cx/graphql?api-key=fe98efacaa1362c9db6ede986e21c9061aca16cf3d6b85e08d94f27b22e18b3c',
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

export default apolloProvider
