import React from 'react';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/Auth/SignUp';
import SignIn from './Pages/Auth/SignIn';
import Template from './Pages/Template/Template';
import WorkSpace from './Pages/WorkSpace/WorkSpace';
import Intro from './Pages/Template/intro';
import Error404 from './Pages/404/404';
import ProtectedRoute from './Pages/protectedRoute';



const App = ({isLoggedIn}) => {
  return (
          <BrowserRouter>
             <Routes>
                <Route path="/" element={ <LandingPage /> } />

                <Route element={
                <ProtectedRoute isLoggedIn={isLoggedIn === false} />}>
                  <Route path="/template" element={<Template />} />
                  <Route path="/intro" element={<Intro />} />
                  <Route path="/workspace" element={<WorkSpace />} />
                </Route>

                <Route path="/signIn" element={ <SignIn /> } />
                <Route path="/signUp" element={ <SignUp /> } />
                <Route path="*" element={ <Error404/> } />
              </Routes>
          </BrowserRouter>
        )
    }

export default App
