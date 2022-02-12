import React, { Component, Fragment } from 'react';
import Navbar from '../components/NavBar/navbar';
import HeroContent from '../components/HeroContent/heroContent';
import WhyUs from '../components/WhyUs/whyUs'
import Card from '../components/Card/Card';
import LearnMore from '../components/LearnMore/learnMore';
import Footer from '../components/Footer/footer';
import Faqs from '../components/Faqs/faqs';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Auth/SignUp';
export default class LandingPage extends Component {
  render() {
    return (
         <Fragment>
            <Navbar/>
              <Routes>
                <Route path="SignUp" element={ <SignUp/> } />
              </Routes>
            <HeroContent/>
            <WhyUs/>
            <Card/>
            <LearnMore/>
            <Faqs/>
            <Footer/>
          </Fragment>
    )
  }
}