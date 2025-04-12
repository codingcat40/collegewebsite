import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
const Navbar = () => {
  const listItemStyles = {
    textDecoration: 'none',
    fontSize: '16px'
  }
  return (
    <nav className="navbar">
      <ul className="listItems">
        <p className="logo-title">BTU @ All rights reserved</p>
        <li>
          <Link to="/" style={listItemStyles}>Home</Link>
        </li>

        <li>
          <Link to="/about-us" style={listItemStyles}>About Us</Link>
        </li>

        <li>
          <Link to="faculty" style={listItemStyles}>Faculty</Link>
        </li>

        <li>
          <Link to="/contact-us" style={listItemStyles}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
