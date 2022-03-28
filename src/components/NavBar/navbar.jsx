import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import "./NavBar.css";
import Logo from '../../Assets/logo.png';
import Avatar from '../../Assets/avatar-2.jpg';
import Setting from "../reUseableComponents/tabsComponet";

const Navbar = () => {
  const [isNavScroll, setIsNavScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSideOpen, setIsSideopen] = useState(false);

  const ToggleSidebar = () => {
    isSideOpen ? setIsSideopen(false) : setIsSideopen(true);
  }

  const changeNavbarColor = () =>{
      window.scrollY >= 60 ?  setIsNavScroll(true) : setIsNavScroll(false)
  }
  
  window.addEventListener("scroll", changeNavbarColor);
      
  return (
  <header className={isNavScroll ? ' bg-white fixed-top py-1 header d-flex align-items-center' : 'header d-flex align-items-center py-3 fixed-top'}>
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center gap-2 text-decoration-none">
            <img src={Logo} alt="" />
            <span>rBuilder</span>
        </Link>
        
      {useLocation().pathname === '/' ?
      
         <nav className={`navbars`} >
            <ul className={`ul  ${isOpen && "show-menu"}`}>
                <li><span className="nav-link scrollto">About</span></li>
                <Link to="/SignIn" className="text-decoration-none">
                    <button className="btn btn-primary"> Log In</button>         
                </Link>
               
            </ul>
          <div className="mobile-nav-toggle menu cross menu--1" >
            <label style={{width: '50px', height: '40px'}}>
             <input type="checkbox" onClick={() => setIsOpen(!isOpen)}/>
            <svg viewBox="0 0 100 100" style={{width: '70px', height: '50px'}}>
              <path className="line--1" d="M0 35h62c9 0 8 28-4 25L35 40" />
              <path className="line--2" d="M0 50h70" />
              <path className="line--3" d="M0 65h62c9 0 8-28-4-25L35 60" />
            </svg>
          </label>
        </div>
      </nav>

      :

    <div className="d-flex">
     
      <div onClick={() => setIsProfileOpen(!isProfileOpen)}>
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">Blessing Asuk </span>
          <img className="img-profile rounded-circle" alt="profile" src={Avatar}/>
      </div>
      
      <ul className={`profile ${isProfileOpen && "show-profile shadow-sm bg-white rounded animated--grow-in"}`}>
          <li className="dropdown-item py-2" onClick={ToggleSidebar}>
              <FiSettings className="mr-2"/> Settings
          </li>
          <Link to="/SignIn" className="dropdown-item py-2">
              <FiLogOut className="mr-2"/> Logout
          </Link>
         
        </ul>
  </div>

      }
      
     
           <div className={`sidebar ${isSideOpen === true ? 'active' : ''}`}>
                <div className="sd-header">
                     <h4 className="mb-0">Settings</h4>
                     <div className="btn btn-primary p-0" onClick={ToggleSidebar}><FaTimes className="m-2"/></div>
                </div>
                  <div className="sd-body">
                          <Setting/>
                  </div>
            </div>
                <div className={`sidebar-overlay ${isSideOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
          </div>
</header>
  );
};

export default Navbar;