import React, { useState } from "react";
import "./NavBar.css";
// import logo from '../svgs/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (


<header className="Navbar fixed-top bg-dark d-flex justify-content-between align-items-center main-header clearfix" role="header">
 <div class="logo d-flex justify-content-between align-items-center">
      <a href="#n" className=""><span>Resume</span> Builder</a>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
  </div>
    <nav className={`nav-items main-nav ${isOpen && "open"}`} role="navigation">
      <ul class="main-menu d-flex">
          <li><a href="#section1">Home</a></li>
          <li class="has-submenu"><a href="#section2">About Us</a></li>
          <li><a href="#section4">Courses</a></li>
          <li><a href="#section5">Video</a></li>
          <li><a href="#section6">Contact</a></li>
          <li><a href="" class="external">Login</a></li>
      </ul>
    </nav>
  
  </header>
  );
};

export default Navbar;