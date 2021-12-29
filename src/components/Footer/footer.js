import React, {Component, Fragment} from 'react';
// import logo from '../svgs/logoWhite.svg';
import './footer.css';

export default class Footer extends Component{
    render() {
        return (
<Fragment>
<footer className="footer-area footer--light">
  <div className="footer-big">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div className="footer-widget">
            <div className="widget-about">
              <a href="#n"><span>Resume</span> Builder</a>
              <ul className="contact-details">
                  <li>
                      <p>
                      Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                      </p>
                  </li>
                <li>
                  <span className="icon-earphones"></span> Call Us:
                  <a href="tel:344-755-111">815-9675-934</a>
                </li>
                <li>
                  <span className="icon-envelope-open"></span>
                  <a href="mailto:support@godzfeivvur@gmail.com">support@williamsgodsfavour.com</a>
                </li>
              </ul>
            </div>
          </div>
        
        </div>
    
        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu footer-menu--1">
              <h4 className="footer-widget-title">Popular Category</h4>
              <ul>
                <li>
                  <a href="#d">Wordpress</a>
                </li>
                <li>
                  <a href="#d">Plugins</a>
                </li>
                <li>
                  <a href="#d">Joomla Template</a>
                </li>
                <li>
                  <a href="#d">Admin Template</a>
                </li>
                <li>
                  <a href="#d">HTML Template</a>
                </li>
              </ul>
            </div>
        
          </div>
        
        </div>
    

        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu">
              <h4 className="footer-widget-title">Our Company</h4>
              <ul>
                <li>
                  <a href="#d">About Us</a>
                </li>
                <li>
                  <a href="#d">How It Works</a>
                </li>
                <li>
                  <a href="#d">Affiliates</a>
                </li>
                <li>
                  <a href="#d">Testimonials</a>
                </li>
                <li>
                  <a href="#d">Contact Us</a>
                </li>
                <li>
                  <a href="#d">Plan &amp; Pricing</a>
                </li>
                <li>
                  <a href="#d">Blog</a>
                </li>
              </ul>
            </div>
        
          </div>
        
        </div>
    

        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu no-padding">
              <h4 className="footer-widget-title">Help Support</h4>
              <ul>
                <li>
                  <a href="#d">Support Forum</a>
                </li>
                <li>
                  <a href="#d">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#d">Support Policy</a>
                </li>
                <li>
                  <a href="#d">Refund Policy</a>
                </li>
                <li>
                  <a href="#d">FAQs</a>
                </li>
                <li>
                  <a href="#d">Buyers Faq</a>
                </li>
                <li>
                  <a href="#d">Sellers Faq</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='mini-footer'>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p><i class="fa fa-copyright"></i> Copyright 2020 by Resume Builder | Design:
                        <a href="#" rel="sponsored" target="_parent">Williams Godsfavour</a>

                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
</Fragment>
        )
    }
}