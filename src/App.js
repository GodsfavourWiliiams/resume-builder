import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Template from './Pages/Template/Template';
import WorkSpace from './Pages/WorkSpace/WorkSpace';
import Intro from './Pages/Template/intro';
import Error404 from './Pages/404/404';
import Reset from './Reset';

class App extends Component {
  
    render() {
  return (
          <div>
              <Routes>
                <Route path="/" element={ <LandingPage/> } />
                    <Route path="/template" element={<Template />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/workspace" element={<WorkSpace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset" element={<Reset />} />
                <Route path="*" element={ <Error404/> } />
              </Routes>
          </div>
        )
    }
  }
export default App
