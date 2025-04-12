import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="listItems">
        <p className="logo-title">BTU @ All rights reserved</p>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about-us">About Us</Link>
        </li>

        <li>
          <Link to="faculty">Faculty</Link>
        </li>

        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        
        <li>
            <button>Color Toggle</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
