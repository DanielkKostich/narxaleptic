import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
  const handleLinkClick = (event, page) => {
    event.preventDefault();
    handlePageChange(page);
  };

  return (
    <ul className="nav  nav-justified menu">
      <li className="item">
        <a
          href="/"
          onClick={(event) => handleLinkClick(event, 'Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="item">
        <a
          href="/about"
          onClick={(event) => handleLinkClick(event, 'About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Us
        </a>
      </li>
      <li className="item">
        <a
          href="/gallery"
          onClick={(event) => handleLinkClick(event, 'Gallery')}
          className={currentPage === 'Gallery' ? 'nav-link active' : 'nav-link'}
        >
          Gallery
        </a>
      </li>
      <li className="item">
        <a
          href="/contact"
          onClick={(event) => handleLinkClick(event, 'Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      
    </ul>
  );
}

export default NavBar;
