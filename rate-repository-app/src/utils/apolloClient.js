import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloUri = process.env.EXPO_PUBLIC_APOLLO_URI;

const httpLink = new HttpLink({
  uri: apolloUri,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
