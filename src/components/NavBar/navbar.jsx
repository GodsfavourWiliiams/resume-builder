import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import Avatar from '../../Assets/avatar-2.jpg';
import Setting from "../reUseableComponents/tabsComponet";
import { ReactComponent as LoginLogo } from '../../Assets/Sign_in_squre.svg';
import { ReactComponent as LogoutLogo } from '../../Assets/Sign_out_squre.svg';
import { auth } from '../../Pages/firebase/firebase.utils';



const Navbar = ({ currentUser }) => {

  const [isNavScroll, setIsNavScroll] = useState(false);
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
            <span>rBuilder</span>
        </Link>
       

      {useLocation().pathname === '/' ?
      
         <nav >
           {currentUser ?
          ( <div  onClick={() => auth.signOut()}>
                <button className="btn btn-primary d-none d-lg-block">Log Out</button>
                <LogoutLogo className="d-lg-none"/>
            </div>
          )
            :
           ( <Link to="/signin">
                <button className="btn btn-primary d-none d-lg-block">Log In</button>
                <LoginLogo className="d-lg-none"/>
            </Link>
           )
        }
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