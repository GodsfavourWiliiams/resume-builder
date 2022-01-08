import React, { Component,Fragment } from 'react'
import Navbar from './components/NavBar/navbar';
import HeroContent from './components/HeroContent/heroContent';
import WhyUs from './components/WhyUs/whyUs'
import Card from './components/Card/Card';
import ComingSoon from './components/ComingSoon/comingSoon';
import LearnMore from './components/LearnMore/learnMore';
import Footer from './components/Footer/footer';
import Faqs from './components/Faqs/faqs'
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {
    render() {
        return ( 
          <Fragment>
            <Navbar/>
            <HeroContent/>
            <WhyUs/>
            <ComingSoon/>
            <Card/>
            <LearnMore/>
            <Faqs/>
            <Footer/>
          </Fragment>
        )
    }
}

export default App