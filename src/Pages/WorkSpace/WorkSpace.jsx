import React from 'react';
import Navbar from '../../components/NavBar/navbar';
import Body from '../../ResumeComponents/Body/Body'

export default function WorkSpace() {
  
    return (
      <div>
          <Navbar/>
            <section className="pc-container container">
              <div className="pcoded-content ">
                     <div className="mt-5">
                       <Body/>
                    </div>
              </div>
            </section>
      
       </div>
    )
}
