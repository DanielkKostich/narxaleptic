import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import SignupPage from './components/SignupPage';
import Loginpage from './components/Loginpage';
import NavBar from './components/NavBar';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div className="App">
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/signuppage" component={SignupPage} />
          <Route path="/loginpage" component={Loginpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
