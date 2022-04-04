import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/CustomLogo.png';
import InputControl from '../../ResumeComponents/InputControl/InputControl';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';



const SignUp = () => {
  
  const [displayName, setdisplayName] = useState("");  
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async event => {
    event.preventDefault();
    setError("");
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password );

      await createUserProfileDocument(user, { displayName });

      navigate("/signin");    

    } catch (err) {
      setError(err.message);
    }
  }

return(
        <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <Link to='/' className='d-flex justify-content-center '>
                    <img alt='logo' src={Logo}/>
                </Link>
                <h4 className="text-gray-900 mb-4 d-flex justify-content-center">Create an Account!</h4>
                {error && <p className='alert alert-danger'>{error}</p>}
                <form onSubmit={handleSubmit}>
                              <InputControl
                                 className="bg-indigo"
                                 label="Full Name"
                                 placeholder='Blessed Etim'
                                 type="text"
                                 name="displayName"
                                 onChange={(e) => setdisplayName(e.target.value)}
                                 required
                                  />
                            
                              <InputControl
                                 className="bg-indigo"
                                 label="Email"
                                 placeholder='blessedetim@gmail.com'
                                 type="email"
                                 name="email"
                                 required
                                 onChange={(e) => setEmail(e.target.value)}
                                  />

                               <InputControl
                                 className="bg-indigo"
                                 label="Password"
                                 placeholder='Password'
                                 type="password"
                                 name="password"
                                 onChange={(e) => setPassword(e.target.value)}
                                 required
                               />
                           
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
                <button className="btn btn-primary w-100 mb-4">Sign Up</button>

                {/* <!-- Sign in buttons --> */}
                <div className="text-center">
                    <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                </div>
            </form>
           </div>
          </div>
        </div>
      </section>
       
    )
  }

export default SignUp
