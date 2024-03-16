import {  ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
const TOKEN = import.meta.env.VITE_ADMIN_TOKEN


const httpLink = createHttpLink({
    uri: 'http://localhost:1337/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    
    return {
      headers: {
        ...headers,
        authorization: TOKEN ? `Bearer ${TOKEN}` : "",
      }
    }
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    // uri: 'http://localhost:1337/graphql',
    
    cache: new InMemoryCache(),
  });
export default client