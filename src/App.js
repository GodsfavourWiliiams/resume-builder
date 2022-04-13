import React from 'react';
import LandingPage from './Pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Template from './Pages/Template/Template';
import WorkSpace from './Pages/WorkSpace/WorkSpace';
import Intro from './Pages/Template/intro';
import Error404 from './Pages/404/404';
import Reset from './Pages/Auth/Reset';
import './toastify.css';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

    toast.configure({
        autoClose: 3000,
        draggable: false
    });

    return ( 
        <div>
        <ToastContainer / >
         <Routes >
        <Route path = "/" element = { <LandingPage /> }/> 
        <Route path = "/template"    element = { <Template /> }
        /> <
        Route path = "/intro"
        element = { < Intro / > }
        /> <
        Route path = "/workspace"
        element = { < WorkSpace / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < Register / > }
        /> <
        Route path = "/reset"
        element = { < Reset / > }
        /> <
        Route path = "*"
        element = { < Error404 / > }
        /> < /
        Routes > <
        /div>
    )
}

export default App