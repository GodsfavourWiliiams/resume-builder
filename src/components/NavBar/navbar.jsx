import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Setting from '../reUseableComponents/tabsComponet';
import { ReactComponent as LoginLogo } from '../../Assets/Sign_in_squre.svg';
import { ReactComponent as LogoutLogo } from '../../Assets/Sign_out_squre.svg';
import { ReactComponent as SettingsLogo } from '../../Assets/Setting_line.svg';
import { ReactComponent as Profile } from '../../Assets/User_circle.svg';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";



const Navbar = () => {

  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;

    fetchUserName();
  });


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
        <span className="mr-2 d-none d-lg-inline small">{name}</span>
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
         
          {user ?
          <div className="dropdown-item py-2"  onClick={logout}>
              <LogoutLogo className="mr-2"/> Logout
          </div>
         :
            <Link to="/login" className="dropdown-item py-2" >
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