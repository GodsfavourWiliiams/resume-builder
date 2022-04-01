import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/Auth/SignUp';
import SignIn from './Pages/Auth/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import Template from './Pages/Template/Template';
import WorkSpace from './Pages/WorkSpace/WorkSpace';
import Intro from './Pages/Template/intro';
export class App extends Component {
    render() {
        return ( 
          <BrowserRouter>
             <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path='/template' element={ <Template/> }/>
                <Route path='/intro' element={ <Intro/> }/>
                <Route path='/workspace' element={ <WorkSpace/> }/>
                <Route path="/signIn" element={ <SignIn /> } />
                <Route path="/signUp" element={ <SignUp /> } />
              </Routes>
          </BrowserRouter>
        )
    }
}

export default App
