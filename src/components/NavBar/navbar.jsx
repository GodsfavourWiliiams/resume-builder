import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Setting from '../reUseableComponents/tabsComponet';
import { ReactComponent as LoginLogo } from '../../Assets/Sign_in_squre.svg';
import { ReactComponent as LogoutLogo } from '../../Assets/Sign_out_squre.svg';
import { ReactComponent as SettingsLogo } from '../../Assets/Setting_line.svg';
import { ReactComponent as Profile } from '../../Assets/User_circle.svg';
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
       

    <div className="">                
      <div className="" onClick={() => setIsProfileOpen(!isProfileOpen)}>
        <span className="mr-2 d-none d-lg-inline text-white small">Display Name</span>
          <Profile className="img-profile"/>
      </div>
      
      <ul className={`profile ${isProfileOpen && "show-profile shadow-sm bg-white rounded animated--grow-in"}`}>
        {useLocation().pathname === '/' ?
          ""
         :
         <li className="dropdown-item py-2" onClick={ToggleSidebar}>
         <SettingsLogo className="mr-2"/> Settings
         </li>
        } 
         
          {currentUser ?
          <div className="dropdown-item py-2"  onClick={() => auth.signOut()}>
              <LogoutLogo className="mr-2"/> Logout
          </div>
         :
            <Link to="/signin" className="dropdown-item py-2" >
                <LoginLogo className="mr-2"/> Login
            </Link>
          }
        </ul>
  </div>

      
     
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