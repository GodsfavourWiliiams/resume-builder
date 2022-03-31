import React from 'react';
import Navbar from '../../components/NavBar/navbar';
import Body from '../../ResumeComponents/Body/Body'

export default function WorkSpace() {
  
    return (
      <div className='overflow-hidden'>
          <Navbar/>
            <section className="">
              <div className="container">
                     <div className="mt-2">
                       <Body/>
                    </div>
              </div>
            </section>
      
       </div>
    )
}
