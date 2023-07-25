import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import narxLogo from '../images/narxLogo.png';

function NavBar({ currentPage, handlePageChange }) {
  // Remove the handleLinkClick function

  return (
    <ul className="nav menu">
      <img src={narxLogo} alt="Logo" className="logo" />
      <li className="item">
        <NavLink
          exact
          to="/" // Use "exact" for the homepage to match only when the path is exactly "/"
          className="nav-link"
          activeClassName="active" // Use "activeClassName" to apply the active class when the link is active
        >
          Home
        </NavLink>
      </li>
      <li className="item">
        <NavLink
          to="/about"
          className="nav-link"
          activeClassName="active"
        >
          About Us
        </NavLink>
      </li>
      <li className="item">
        <NavLink
          to="/gallery"
          className="nav-link"
          activeClassName="active"
        >
          Gallery
        </NavLink>
      </li>
      <li className="item">
        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="active"
        >
          Contact
        </NavLink>
      </li>
      <li className="item">
        <NavLink
          to="/signuppage"
          className="nav-link"
          activeClassName="active"
        >
          Sign Up
        </NavLink>
      </li>
      <li className="item">
        <NavLink
          to="/loginpage"
          className="nav-link"
          activeClassName="active"
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
