import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';
import SignupPopup from './components/SignupPopup';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsSignupOpen(page === 'Gallery');
  };

  const openSignupPopup = () => {
    setIsSignupOpen(true);
  };

  const closeSignupPopup = () => {
    setIsSignupOpen(false);
  };

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === 'Gallery' && (
        <Gallery onGalleryLoaded={openSignupPopup} />
      )}
      {isSignupOpen && <SignupPopup onPopupClosed={closeSignupPopup} />}
      {currentPage === 'Home' && <Home />}
      {currentPage === 'Contact' && <Contact />}
      {currentPage === 'About' && <About />}
    </div>
  );
}

export default App;