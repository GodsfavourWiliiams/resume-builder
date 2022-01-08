import React, { useState } from "react";
import "./NavBar.css";
// import logo from '../svgs/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (


<header className="Navbar fixed-top main-header clearfix" role="header">
 <div class=" d-flex align-items-center">
      <a href="/" className="text-warning text-decoration-none"><span className="text-white">Resume</span> Builder</a>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
  </div>
    <nav className={`nav-items main-nav ${isOpen && "open"}`} role="navigation">
      <ul class="main-menu">
          <li><a href="#section1">Home</a></li>
          <li class=""><a href="/">About Us</a></li>
          <li><a href="#section4">Courses</a></li>
          <li><a href="#section5">Video</a></li>
          <li><a href="#section6">Contact</a></li>
          <li><a href="/" class="external">Login</a></li>
      </ul>
    </nav>
  
  </header>
  );
};

export default Navbar;