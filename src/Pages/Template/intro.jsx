import React, { useEffect } from 'react';
import IntroFolder from '../../Assets/Empty-Files.png';
import IntroCreate from '../../Assets/Computer.png';
import Welcome from '../../Assets/Marni 5.png';
import  { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/navbar';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const Intro = () => {
  const [user, loading ] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

  });

        return( 
        <>
        <Navbar/>
            <div className="d-flex align-items-center justify-content-center intro">
                <div className='container p-3'>
                        <h2 className="text-center text-primary">How do you want to start?</h2>
                        <div className="d-flex align-items-center justify-content-center py-4">
                            <div className="position-relative me-2">
                                    <img src={IntroCreate} className='responsive p-3' alt="create" />
                                
                                    <div className='image__overlay rounded'>
                                        <div className="d-flex column align-items-center justify-content-center">
                                        <p className="">
                                        </p>
                                           <Link to="/workspace" className='btn btn-primary'>Start Resume</Link>    
                                        </div>
                                    </div>
                            </div>
                            <div className="position-relative ms-2">
                                    <img src={IntroFolder} className='responsive p-3' alt="upload" />
                                
                                    <div className='image__overlay rounded'>
                                        <div className="text-center">
                                        <p className="">
                                        </p>
                                        <div className="import ">
                                            <input type="file" className='p-3 rounded border-0 outline-0 '/>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                </div>
                <img src={Welcome} alt="standing" className='intro-img d-none d-lg-block' style={{width: '500px'}}/>
            </div>
        </>
        );
    }

export default Intro; 