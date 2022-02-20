import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import Logo from '../images/logo.png';

const Navbar = () => {
  const [isNavScroll, setIsNavScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const User = useState(false)

  const changeNavbarColor = () =>{
      if (window.scrollY >= 60){
            setIsNavScroll(true)
      }
      else{
        setIsNavScroll(false)
      }
  }
  
  window.addEventListener("scroll", changeNavbarColor);
  if (User){

  }
  else{

  }
  return (

  <header className={isNavScroll ? ' bg-white shadow-sm fixed-top py-1 header d-flex align-items-center' : 'header d-flex align-items-center py-3 fixed-top'}>
  <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="/" className="logo d-flex align-items-center gap-2 text-decoration-none">
          <img src={Logo} alt="" />
          <span>rBuilder</span>
      </a>

      <nav className={`navbars`}>
          <ul className={`ul  ${isOpen && "show-menu"}`}>
              <li><a className="nav-link scrollto active" href="/">Home</a></li>
              <li><a className="nav-link scrollto" href="/">About</a></li>
              <li><a className="nav-link scrollto" href="/">CV</a></li>
              <Link to="/SignIn" className="text-decoration-none">
                  <button className="btn btn-primary"> Get Started</button>         
               </Link>
          </ul>
          <FaBars className="mobile-nav-toggle" onClick={() => setIsOpen(!isOpen)}/>
      </nav>
  </div>
</header>
  );
};

export default Navbar;