import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageComponent = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Gallery':
        return <Gallery />;
      case 'Contact':
        return <Contact />;
      case 'About':
        return <About />;
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {getPageComponent()}
    </div>
  );
}

export default App;
