import React, {Component} from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.css';

export default class Footer extends Component{
    render() {
        return (
      <footer className="footer bg-indigo">

<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>
        <form>
          <input type="email" className='rounded' name="email"/><input type="submit" className='rounded-3 btn btn-primary' value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact mt-3">
      <div className="logo mb-4">
            <span>rBuilder</span>
        </div>
        <div>
          Akwa Ibom, Uyo 535022
          <br/>
          Nigeria 
          <br/><br/>
          <div className='d-flex'>Phone: <a className='text-decoration-none ms-2' href="tel://+2348159675934">+234 815 967 5934</a></div>
          <br/>
          <div className='d-flex'>Email: <a className='text-decoration-none ms-2' href="mailto:williamsgodsfavoursolomon@gmail.com">Here !</a></div>
          <br/>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Terms of service</a></li>
          <li><a href="/">Privacy policy</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><a href="/">Web Design</a></li>
          <li><a href="/">Web Development</a></li>
          <li><a href="/">Product Management</a></li>
          <li><a href="/">Marketing</a></li>
          <li><a href="/">Graphic Design</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laudantium.</p>
        <div className="social-links mt-3">
          <FaTwitter className=''/>
          <FaFacebook className='mx-3'/>
          <FaInstagram className=''/>
          <FaGithub className='mx-3'/>
          <FaLinkedin className=''/>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="container footer-bottom d-flex align-items-center justify-content-center">
  <div className="copyright">
    &copy; Copyright <strong><span>rBuilder</span></strong>. All Rights Reserved
    Designed by <a href="/" className='text-decoration-none fw-bold'>Williams Godsfavour Solomon</a>
  </div>
</div>
</footer>
        )
    }
}