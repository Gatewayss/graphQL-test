import Header from './components/Header.js';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import Clients from './components/Clients.jsx'
import AddClientModal from './components/AddClientModal.jsx';
import Projects from './components/Projects.jsx';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({uri: 'http://localhost:3001/graphql',
cache
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <AddClientModal />
        <Projects />
        <Clients />
      </div>
      </ApolloProvider>
    </>
  );
}

export default App;
