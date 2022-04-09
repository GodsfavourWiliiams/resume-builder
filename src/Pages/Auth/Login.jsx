import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Logo  from '../../Assets/CustomLogo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Load from "./load";
import { toast } from 'react-toastify';


function Login() {
  const [email, setEmail] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();


  useEffect(() => {
    if (user) 
    { navigate("/template") 
      toast.success("Successfully Login")
    }
  });
  
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  

  return (
    <section className="vh-100">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <Link to='/' className='d-flex justify-content-center '>
                <img alt='logo' src={Logo}/>
            </Link>
            <h4 className="text-gray-900 mb-4 d-flex justify-content-center">Welcome Back!!</h4>

            {/* <p className="alert alert-danger">{error.message} huh!!</p> */}
            <div >
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
                      <label htmlFor="email" className="form-label">Password</label>
                        <input
                          type={passwordShown ? "text" : "password"}
                          className="bg-indigo form-input"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>
                      <div className="position-relative passwordToggle"
                            onClick={togglePasswordVisiblity}>
                            {passwordShown ?
                            <FaEye/>
                          :
                          <FaEyeSlash/>
                           }
                           </div>
               {/* <!-- 2 column grid layout --> */}
                    <div className="d-flex justify-content-between mb-4">
                        <div className="d-flex ">
                            <div className="form-check mb-3 mb-md-0">
                              <input
                              className="form-check-input"
                              type="checkbox"
                              value=''
                            />
                        <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                      </div>
                      </div>

                      <Link to='/reset' className="">
                      <span>Forgot password?</span>
                      </Link>  
                  </div>

          
             <button className="btn text-decoration-none btn-primary w-100 mb-4" 
             onClick={() => {
              logInWithEmailAndPassword(email, password);
              setIsButtonLoading(true);
              setTimeout(() => {
                setIsButtonLoading(false);
              }, 5500);
            }}>{isButtonLoading ? <Load/> : "Sign In"}</button>
        <div>
                 <button onClick={signInWithGoogle} className="my-3 w-100 border rounded-md border d-flex align-items-center justify-content-center">{''}
                    <svg width={19} height={20} viewBox="0 0 19 20" fill="none">
                        <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                        <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                        <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                        <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                    </svg>
                    <p className="text-base font-medium ms-2 mt-3 text-gray-700">Continue with Google</p>{''}
                </button>
               
                </div>
            {/* <!-- Register buttons --> */}
            <div className="text-center">
                <p>Not a member? <Link to="/register">Register</Link></p>
            </div>
            </div>
       </div>
      </div>
    </div>
  </section>
          
  );
}

export default Login;
