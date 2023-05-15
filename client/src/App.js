import Header from './components/Header.js';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
// import Clients from './components/Clients.jsx'
// import AddClientModal from './components/AddClientModal.jsx';
// import Projects from './components/Projects.jsx';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx';

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
      <Router>
      <Header />
      <div className="container">
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/projects/:id" element={<ProjectDetails />}/>
       </Routes>
      </div>
      </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
