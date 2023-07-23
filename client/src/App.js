import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import SignupPage from './components/SignupPage';
import Loginpage from './components/Loginpage';
import NavBar from './components/NavBar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https:localhost3000/', // Replace with your Apollo Server URL
  cache: new InMemoryCache(),
});


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/signuppage" component={SignupPage} />
          <Route path="/loginpage" component={Loginpage} />
        </Switch>
      </div>
    </Router>
</ApolloProvider>
  );
}

export default App;
