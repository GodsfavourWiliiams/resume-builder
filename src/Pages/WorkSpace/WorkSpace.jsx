import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/navbar';
import PageHeader from '../../pageElements/pageHeader/pageHeader';
// import Form from '../../pageElements/Form';
import MultiStepForm from '../../components/steps/multiStepForm';

export default class WorkSpace extends Component {
    
  render() {
    return (
      <div>
          <Navbar/>
            <section className="pc-container container">
              <div className="pcoded-content ">
                    <PageHeader/>
                        <div className="card mt-5">
                            <div className="card-header">
                                <h5>Contacts Information</h5>
                            </div>
                           <MultiStepForm/>
                        </div>
                    
                    </div>
            </section>
      </div>
    )
  }
}
