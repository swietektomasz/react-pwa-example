import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://graphql.anilist.co'
})
