import React, { Component, Fragment } from 'react';
import Navbar from '../components/NavBar/navbar';
import HeroContent from '../components/HeroContent/heroContent';
import WhyUs from '../components/WhyUs/whyUs'
import Card from '../components/Features/Features';
import LearnMore from '../components/LearnMore/learnMore';
import Footer from '../components/Footer/footer';
import Faqs from '../components/Faqs/faqs';
import ScrollToTop from './Scroll'; 
import { auth } from '../Pages/firebase/firebase.utils'


class LandingPage extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    
    console.log(user)
  });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
         <Fragment>
           <Navbar currentUser={this.state.currentUser}/>
            <ScrollToTop/>
            <HeroContent currentUser={this.state.currentUser}/>
            <WhyUs/>
            <Card/>
            <LearnMore/>
            <Faqs/>
            <Footer/> 
          </Fragment>
    )
  }
}
export default LandingPage;