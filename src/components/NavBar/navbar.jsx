import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import "./NavBar.css";
import Logo from '../images/logo.png';
import Avatar from '../images/avatar-2.jpg';
import Modal from '../reUseableComponents/Modal'
import Setting from "../reUseableComponents/Setting";

const Navbar = () => {
  const [isNavScroll, setIsNavScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [status, setStatus] = useState(false);

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
  <header className={isNavScroll ? ' bg-white shadow-sm fixed-top py-1 header d-flex align-items-center' : 'header d-flex align-items-center py-3 fixed-top'}>
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="/" className="logo d-flex align-items-center gap-2 text-decoration-none">
            <img src={Logo} alt="" />
            <span>rBuilder</span>
        </a>
        
        
      {useLocation().pathname === '/' ?
         <nav className={`navbars`} >
        
            <ul className={`ul  ${isOpen && "show-menu"}`}>
                <li><a className="nav-link scrollto" href="/">About</a></li>
                <Link to="/SignIn" className="text-decoration-none">
                    <button className="btn btn-primary"> Log In</button>         
                </Link>
            </ul>
        
          <FaBars className="mobile-nav-toggle" onClick={() => setIsOpen(!isOpen)}/>

      </nav>

      :

    <div className="">
      <div onClick={() => setIsProfileOpen(!isProfileOpen)}>
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
          <img className="img-profile rounded-circle" alt="profile" src={Avatar}/>
      </div>
      <ul className={`profile ${isProfileOpen && "show-profile shadow-sm bg-white rounded animated--grow-in"}`}>
          <li className="dropdown-item py-2"  onClick={() => setStatus(true)}>
              <FiSettings className="mr-2 text-gray-400"/> Settings
          </li>
          <Link to="/SignIn" className="dropdown-item py-2">
              <FiLogOut className="mr-2 text-gray-400"/> Logout
          </Link>
        </ul>
  </div>

      }
      { status && (<Modal closeModal={() => setStatus(false)}> 
            <p>
          <Setting/>
          </p></Modal>)}
  </div>
</header>
  );
};

export default Navbar;