import React, { useEffect }  from 'react';
import Navbar from '../../components/NavBar/navbar';
import Body from '../../ResumeComponents/Body/Body';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

export default function WorkSpace() {
  const [user, loading ] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  });

    return (
      <div className='overflow-hidden'>
          <Navbar/>
            <section className="">
              <div className="container">
                <Body/>
              </div>
            </section>
       </div>
    )
}
