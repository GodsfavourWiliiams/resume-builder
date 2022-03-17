import React, {Component} from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from '../../Assets/logo.png';
import './footer.css';

export default class Footer extends Component{
    render() {
        return (
      <footer id="footer">

<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>
        <form action="" method="post">
          <input type="email" className='rounded' name="email"/><input type="submit" className='rounded-3 bg-primary' value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
      <a href="/" className="logo d-flex align-items-center gap-2 mb-2 text-decoration-none">
          <img src={Logo} alt="" />
          <h5 className=''>rBuilder</h5>
      </a>
        <p>
          Akwa Ibom, Uyo 535022<br/>
          Nigeria <br/><br/>
          <strong>Phone:</strong> +234 81 5967 5934<br/>
          <strong>Email:</strong> Bros@gmail.com<br/>
        </p>
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
    Designed by <a href="/" className='text-decoration-none fw-bold'>Williams Godsfavour</a>
  </div>
</div>
</footer>
        )
    }
}