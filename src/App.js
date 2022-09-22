import { registerRootComponent } from 'expo'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AppNavigation from './navigators/AppNavigation';
import { ACCESS_TOKEN } from './constants';

const httpLink = createHttpLink({
    uri: 'https://graphql.anilist.co'
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = ACCESS_TOKEN
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

// Initialize Apollo Client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <AppNavigation />
        </ApolloProvider>
    );
}

registerRootComponent(App)