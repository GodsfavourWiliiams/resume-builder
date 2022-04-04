import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import Logo  from './Assets/CustomLogo.png';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading,] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/template");
  });

  return (
   
     <section className="vh-100">
     <div className="container h-100">
       <div className="row d-flex justify-content-center align-items-center h-100">
         <div className="col-12 col-md-8 col-lg-6 col-xl-5">
             <Link to='/' className='d-flex justify-content-center '>
                 <img alt='logo' src={Logo}/>
             </Link>
             <h4 className="text-gray-900 mb-4 d-flex justify-content-center">Create an Account!</h4>
             <div>
                   <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input
                          type="text"
                          className="bg-indigo form-input"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name"
                        />
                      </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                         <input
                          type="text"
                          className="bg-indigo form-input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="E-mail Address"
                        />
                      </div>
                      <div className="form-group">
                          <label htmlFor="password" className="form-label">Password</label>
                            <input
                              type="password"
                              className="bg-indigo form-input"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Password"
                            />
                          </div>    
                         <div className="d-flex justify-content-between mb-4">
                              <div className="form-check mb-3 mb-md-0">
                                 <input
                                 className="form-check-input"
                                 type="checkbox"
                                 value=""
                                 />
                                 <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                               </div>
                         </div>

             {/* <!-- Submit button --> */}
             <button className="btn btn-primary w-100 mb-4" onClick={register}>Sign Up</button>
             <button onClick={signInWithGoogle} className="my-3 w-100 border rounded-md border d-flex align-items-center justify-content-center">{''}
                    <svg width={19} height={20} viewBox="0 0 19 20" fill="none">
                        <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                        <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                        <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                        <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                    </svg>
                    <p className="text-base font-medium ms-2 mt-3 text-gray-700">Continue with Google</p>{''}
                </button>

             {/* <!-- Sign in buttons --> */}
             <div className="text-center">
                 <p>Already have an account? <Link to="/login">Sign In</Link></p>
             </div>
             
         </div>
        </div>
       </div>
                
     </div>
   </section>
  );
}

export default Register;
