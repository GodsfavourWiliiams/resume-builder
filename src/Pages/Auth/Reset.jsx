import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase/firebase";
import Logo  from '../../Assets/CustomLogo.png';
import Load from "./load";

function Reset() {
  const [email, setEmail] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/login");
  });

  return (
    <section className="vh-100">
     <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <Link to='/' className='d-flex justify-content-center '>
                <img alt='logo' src={Logo}/>
            </Link>
            <h4 className="text-gray-900 mb-4 d-flex justify-content-center">Reset Password!</h4>
                <div>
                  <div className="form-group">
                        <input
                        type="text"
                        className="bg-indigo form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                        />
                    </div>
                    <button className="btn btn-primary w-100 mb-4" onClick=
                    {() =>{
                       sendPasswordReset(email);
                       setIsButtonLoading(true);
                       setTimeout(() => {
                         setIsButtonLoading(false);
                       }, 4000);
                      }}
                    >
                      { 
                      isButtonLoading ?
                      <Load/> 
                      :
                      " Send password to email "
                      }
                    </button>

                    <div>
                    <p className="text-center" >Not a member? <Link to="/register">Register</Link></p>
                    </div>
                </div>
             </div>
         </div>
    </div>
</section>
  );
}

export default Reset;
