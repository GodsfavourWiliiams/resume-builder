import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/navbar';
import MultiStepForm from '../../components/steps/multiStepForm';
import PageHeader from '../../pageElements/pageHeader/pageHeader';
import ProgressBar from '../../components/steps/progressBar';

export default class WorkSpace extends Component {
    
  render() {
    return (
      <div>
          <Navbar/>
            <section className="pc-container container">
              <div className="pcoded-content ">
                    <PageHeader/>
                     <div className="card mt-5">
                         <MultiStepForm/>
                    </div>
            </div>
        </section>
        <ProgressBar/>
    </div>
    )
  }
}
