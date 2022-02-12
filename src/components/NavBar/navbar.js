import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import logo from '../svgs/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<header className="fixed-top header shadow">
  <div className="Navbar container main-header">
 <div className="logo fw-bold">
      <a href="/" className="text-decoration-none"><span className=""></span></a>
  </div>
    <nav className={`nav-items main-nav  ${isOpen && "open"}`}>
      <ul className="main-menu">
          <li><a href="/" className="text-decoration-none ">Home</a></li>
          <li><a href="/" className="text-decoration-none">About Us</a></li>
          <li><a href="/" className="text-decoration-none">Courses</a></li>
          <li><a href="/" className="text-decoration-none">Video</a></li>
          <li><a href="/" className="text-decoration-none">Contact</a></li>
          <Link to="/SignUp">
          <li><a href="/" className="text-decoration-none">Login</a></li>
          </Link>
      </ul>
    </nav>
    <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
      </div>
  </header>
  );
};

export default Navbar;