import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import Logo from '../images/logo.png';

const Navbar = () => {
  const [isNavScroll, setIsNavScroll] = useState(false);

  const changeNavbarColor = () =>{
      if (window.scrollY >= 60){
            setIsNavScroll(true)
      }
      else{
        setIsNavScroll(false)
      }
  }
  
  window.addEventListener("scroll", changeNavbarColor);
  return (

  <header className={isNavScroll ? ' bg-white shadow-sm fixed-top py-2 header' : 'header py-3 fixed-top'}>
  <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="/" className="logo d-flex align-items-center gap-2 text-decoration-none">
          <img src={Logo} alt="" />
          <span>rBuilder</span>
      </a>

      <nav className="navbar">
          <ul>
              <li><a className="nav-link scrollto active" href="/">Home</a></li>
              <li><a className="nav-link scrollto" href="/">About</a></li>
              <li className="dropdown"><a href="/" className="text-decoration-none"><span>Drop Down</span><i className="bi bi-chevron-down"></i></a>
                  <ul className="shadow">
                      <li><a href="/">Drop Down 1</a></li>
                      <li><a href="/">Drop Down 2</a></li>
                      <li><a href="/">Drop Down 3</a></li>
                      <li><a href="/">Drop Down 4</a></li>
                  </ul>
              </li>
              <li><a className="nav-link scrollto" href="/">Contact</a></li>
              <NavLink to="/signIn" className="getstarted text-decoration-none">
                  Get Started
              </NavLink>
          </ul>
          <FaBars className="mobile-nav-toggle"/>
      </nav>
  </div>
</header>
  );
};

export default Navbar;