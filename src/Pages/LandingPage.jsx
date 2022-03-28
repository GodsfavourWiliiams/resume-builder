import React, { Component, Fragment } from 'react';
import Navbar from '../components/NavBar/navbar';
import HeroContent from '../components/HeroContent/heroContent';
import WhyUs from '../components/WhyUs/whyUs'
import Card from '../components/Features/Features';
import LearnMore from '../components/LearnMore/learnMore';
import Footer from '../components/Footer/footer';
import Faqs from '../components/Faqs/faqs';
import ScrollToTop from './Scroll';


export default class LandingPage extends Component {
  render() {
    return (
         <Fragment>
            <Navbar/>
            <ScrollToTop/>
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