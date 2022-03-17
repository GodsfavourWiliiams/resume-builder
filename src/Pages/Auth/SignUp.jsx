import React, { Component } from 'react';
import { FaGoogle, FaFacebook} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/CustomLogo.png';
import './Auth.css';

export default class SignUp extends Component {
  render() {
    return(
         <div className="auth-wrapper">
                <div className="p-3">
                    <div className="text-center">
                        <img src={Logo} alt="" />
                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                        <form className="user mx-auto">
                               <div className="form nb-3">
                                      <input type="text" className="form__input" placeholder=" "/>
                                    <label htmlFor="email" className="form__label">First Name</label>
                                 </div>
                               <div className="form">
                                        <input type="text" className="form__input" placeholder=" "/>
                                         <label htmlFor="text" className="form__label">Last Name</label>
                                 </div>
                                  
                                    <div className="form">
                                        <input type="text" className="form__input" placeholder=" "/>
                                        <label htmlFor="email" className="form__label">Email</label>
                                    </div>
                                    <div className="form">
                                        <input type="password" className="form__input" placeholder=" "/>
                                        <label htmlFor="password" className="form__label">Password</label>
                                    </div>
                                    <div className="form">
                                        <input type="password" className="form__input" placeholder=" "/>
                                        <label htmlFor="password" className="form__label">Repeat Password</label>
                                    </div>
                                    
                                <a href="/" className="btn btn-primary my-3 w-100">
                                    Register Account
                                </a>
                                <hr/>
                        <a href="/" className="btn btn-success my-3  w-100">
                            <FaGoogle/> Register with Google
                        </a>
                    <a href="/" className="btn btn-primary w-100 ">
                        <FaFacebook/> Register with Facebook
                    </a>
                </form>
            <hr className=''/>
                    <Link to="/" className="d-block text-center">
                      Forgot Password?
                    </Link>
                    <Link to="/SignIn" className="d-block text-center">
                        Already have an account? Login!
                    </Link>
        </div>
  </div>
    )
  }
}
