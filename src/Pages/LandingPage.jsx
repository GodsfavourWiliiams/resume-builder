import React, { Component, Fragment } from 'react';
import Navbar from '../components/NavBar/navbar';
import HeroContent from '../components/HeroContent/heroContent';
import WhyUs from '../components/WhyUs/whyUs'
import Card from '../components/Features/Features';
import LearnMore from '../components/LearnMore/learnMore';
import Footer from '../components/Footer/footer';
import Faqs from '../components/Faqs/faqs';
import ScrollToTop from './Scroll'; 
import { auth, createUserProfileDocument } from '../Pages/firebase/firebase.utils'


class LandingPage extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser:{
            id: snapShot.id,
            ...snapShot.data()
          }
        });
        console.log(this.state)
      });
      this.setState({ currentUser: userAuth})
    }
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