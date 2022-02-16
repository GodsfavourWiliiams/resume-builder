import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Navbar from '../components/NavBar/navbar';

import './Template.css'

export default class Template extends Component {
  render() {
    return (
    <div className=''>
        <Navbar/>
            <section className="inner-page mt-5">
            <div className="container vh-100">
 
            </div>
            </section>
        <Footer/>
     </div>
    )
  }
}
