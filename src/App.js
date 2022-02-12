import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {
    render() {
        return ( 
          <BrowserRouter>
            <LandingPage/>
          </BrowserRouter>
        )
    }
}

export default App