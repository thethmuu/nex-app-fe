/**
 * to wrap app with apolloClient
 */

import { ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
export function useApollo() {

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
  console.log(token)

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      //...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}
