import React, { Component } from 'react';
import Logo from '../../Assets/CustomLogo.png';
import './Auth.css';
import { FaGoogle, FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class SignIn extends Component {
    constructor(props){
        super();
    
        this.state = {
            value: ''
        }
    
        this.handleAuth = this.handleAuth.bind(this)
      }

      handleAuth = (e) => {
        alert("Ready to Create the best resume")
    }

  render() {
    return (
    <div className="auth-wrapper">
            <div className="px-2">
                <div className="">
                    <div className="text-center">
                        <img src={Logo} alt="" className='my-2' />
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user mx-auto">
                     
                   <div className="form">
                        <input type="text" className="form__input" placeholder=" "/>
                        <label for="email" className="form__label">Email</label>
                    </div>
                    <div className="form">
                        <input type="password" className="form__input" placeholder=" "/>
                        <label for="password" className="form__label">Password</label>
                    </div>
                        <div className="form-group">
                            <div className="d-flex align-items-center ">
                                <input type="checkbox" className="form-check-input p-1 me-2" />
                                <label className="form-check-label mt-1" htmlFor="customCheck">
                                    Remember Me</label>
                            </div>
                        </div>
                        <Link to="/template" className="btn btn-primary w-100 my-3" onClick={this.handleAuth}>
                            Login
                        </Link>
                        <hr/>
                        <a href="/" className="btn btn-success my-3  w-100">
                            <FaGoogle/> Login with Google
                        </a>
                        <a href="/" className="btn btn-primary w-100">
                            <FaGithub/> Login with GitHub
                        </a>
                    </form>
                    <hr className='mx-auto'/>
                    <div className="">
                       <Link to='/' className="d-block text-center">
                           Forgot Password
                         </Link>
                         <Link to="/SignUp" className="d-block text-center">
                            Create an Account!!
                        </Link> 
                    </div>
                    
            </div>
    </div>
</div>
    )
  }
}
