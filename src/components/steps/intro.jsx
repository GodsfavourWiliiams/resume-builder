import React, { Component } from 'react';
import IntroCreate from '../images/Saly-26.svg';
import IntroFolder from '../images/ImportFolder.svg';
 
class userDetails extends Component{
 
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
 
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
 
 
    render() {
        return( 
        <div className='container p-3'>
                    <h2 className="text-center text-primary">How do you want to start?</h2>
                    <p className="text-center">
                        Let's start by sellecting the type of text you want to order
                    </p>
                <div className="d-flex justify-content-center my-5 gap4">
                    <div className="me-2">
                            <div className="boxed responsive p-3">
                                <img src={IntroCreate} alt="" className='responsive'/>
                            </div>
                    </div>
                    <div className="ms-2">
                        <div className="boxed responsive">
                            <img src={IntroFolder} alt=""  className='responsive'/>
                            
                            </div>
                           
                    </div>
                </div>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary " onClick={this.saveAndContinue}>Continue</button>
                    </div>
        </div>
        );
    }
}
 
export default userDetails;