import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './Pages/Auth/SignUp';
import SignIn from './Pages/Auth/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {
    render() {
        return ( 
          <BrowserRouter>
             <Routes>
                <Route exact path="/signIn" element={ <SignIn /> } />
                <Route  path="/signUp" element={ <SignUp /> } />
              </Routes>
            <LandingPage/>
          </BrowserRouter>
        )
    }
}

export default App