import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.modify({
          id: cache.identify({
            __typename: 'Movie',
            id: id,
          }),
          fields: {
            isLiked: (isLiked) => !isLiked
          }
        })
      }
    }
  }
});

export default client;