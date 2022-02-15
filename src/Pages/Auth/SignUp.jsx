import React, { Component } from 'react';
import { FaGoogle, FaFacebook} from 'react-icons/fa';
import './Auth.css';

export default class SignUp extends Component {
  render() {
    return(
         <div className="container">
                <div className="p-3">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                        <form className="user mx-auto">
                                    <div className=" mb-3 ">
                                        <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                            placeholder="First Name"/>
                                    </div>
                                    <div className="">
                                        <input type="text" className="form-control form-control-user" id="exampleLastName"
                                            placeholder="Last Name"/>
                                    </div>
                                    <div className=" my-3">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Email Address"/>
                                    </div>
                                    <div className=" mb-3 ">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password"/>
                                    </div>
                                    <div className="">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Repeat Password"/>
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
            <hr className='user mx-auto'/>
                    <div className="text-center">
                        <a className="small" href="/">Forgot Password?</a>
                    </div>
                    <div className="text-center">
                        <a className="small" href="login.html">Already have an account? Login!</a>
                </div>
        </div>
  </div>
    )
  }
}