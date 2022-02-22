import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/navbar';
import TemplateImg from '../../components/images/features-3.png';
import './Template.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../../components/Footer/footer';




export default class Template extends Component {
 
  render() {

    return (
 <div className="">
   <Navbar/>
   <div>
   
      </div>
    <section className="about">

      <div className="container" >
          <div className="row gx-0">

              <div className="col-lg-6 d-flex flex-column justify-content-center" >
                  <div className="content">
                      <h3>Let's get started</h3>
                      <h2>Enter Your Information</h2>
                      <p>
                         You can use our pre-written content to enhance your skills and experience. 
                      </p>
                      <h3>Select a Template</h3>
                      <h2>Enter Your Information</h2>
                      <p>
                        Pick one of our approved templates to personalise and format your resume 
                      </p>
                      <h3>Download and Print</h3>
                      <h2>Enter Your Information</h2>
                      <p>
                         Presto! Your resume is ready to share!
                      </p>
                      <div className="text-center text-lg-start">
                          <Link to="/Workspace" className=" btn btn-primary text-decoration-none align-items-center align-self-center">
                              <span className='mr-2'>Continue</span>
                              <FaArrowRight/>
                          </Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out">
                  <img src={TemplateImg} className="img-fluid p-3" alt=""/>
              </div>

          </div>
      </div>
     
      
  </section>
  
  <Footer/>
  </div>
    )
  }
}
