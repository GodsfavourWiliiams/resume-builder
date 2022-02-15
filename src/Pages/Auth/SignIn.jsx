import React, { Component } from 'react';
import './Auth.css';
import { FaGoogle, FaFacebook} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class SignIn extends Component {
  render() {
    return (
    <div className="container">
            <div className="">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user mx-auto">
                        <div className="form-group">
                            <input type="email" className="form-control form-control-user"
                                placeholder="Enter Email Address..."/>
                        </div>
                        <div className="form-group my-3">
                            <input type="password" className="form-control form-control-user"
                            placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <div className="d-flex align-items-center gap-1">
                                <input type="checkbox" className="" />
                                <label className="custom-control-label " htmlFor="customCheck">Remember
                                    Me</label>
                            </div>
                        </div>
                        <a href="/" className="btn btn-primary w-100 my-3">
                            Login
                        </a>
                        <hr/>
                        <a href="/" className="btn btn-success my-3  w-100">
                            <FaGoogle/> Login with Google
                        </a>
                        <a href="/" className="btn btn-primary w-100">
                            <FaFacebook/> Login with Facebook
                        </a>
                    </form>
                    <hr className='user mx-auto'/>
                    <div className="">
                       <Link to='/' className="text-center">
                           Forgot Password
                         </Link>
                         <Link to="/SignUp" className="text-center">
                            Create an Account!!
                        </Link> 
                    </div>
                    
            </div>
    </div>
</div>
    )
  }
}
