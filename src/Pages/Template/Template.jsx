import React, { useEffect, useState } from 'react';
import Navbar from '../../components/NavBar/navbar';
import TemplateImg from '../../Assets/Ikbal2.png';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../../components/Footer/footer';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";


const Template = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

    fetchUserName();
  });



return (
 <div className="">
   <Navbar/>
    <section className="about">
      <div className="container" >
          <div className="row gx-0">
              <div className="col-lg-6 d-flex flex-column justify-content-center" >
                  <div className="content">
                    <p className="mb-3 mt-0 fw-bold">Hello {name}</p>
                      <h3>Let's get started</h3>
                      <h2>Enter Your Information</h2>
                      <p>
                         You can use our pre-written content to enhance your skills and experience. 
                      </p>
                      <h3>Select a Template</h3>
                      <h2>Enter Your Information</h2>
                      <p>
                        Pick one of our approved templates to personalise and format your resume 
                      </p>
                      <h3>Download and Print</h3>
                      <h2>Enter Your Information</h2>
                      <p>
                         Presto! Your resume is ready to share!
                      </p>
                      <div className="">
                          <Link to="/intro" className=" btn btn-primary text-decoration-none align-items-center">
                              <span className='p-2'>Continue</span>
                              <FaArrowRight/>
                          </Link>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out">
                  <img src={TemplateImg} className="img-fluid p-3" alt=""/>
              </div>

          </div>
      </div>
  </section>
  <Footer/>
  </div>
    )
  }

  export default Template;