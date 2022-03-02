import React, { Component } from 'react';
import Navbar from '../../components/NavBar/navbar';
import MultiStepForm from '../../components/steps/multiStepForm';
// import PageHeader from '../../pageElements/pageHeader/pageHeader';
import ProgressBar from '../../components/steps/progressBar';

export default class WorkSpace extends Component {

  constructor(props) {
    super(props);
    this.state = {
        percentage: ''
    }
}

  render() {
    return (
      <div>
          <Navbar/>
            <section className="pc-container container">
              <div className="pcoded-content ">
                    {/* <PageHeader/> */}
                     <div className="card mt-5">
                         <MultiStepForm/>
                    </div>
            </div>
        </section>
        
        <ProgressBar className="progress-bars" percentage={this.state.percentage}/>
    </div>
    )
  }
}
