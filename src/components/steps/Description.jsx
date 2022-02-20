import React, { Component } from 'react';
 
class Description extends Component{
 
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
        <div className="">
                <div className="card-header pt-3">
                    <h5 className=''>Add your job decription</h5>
                </div>
            <div className='form card-body'>
                <p className="alert alert-primary">
                    Let's Know your job description 
                </p>
                    <form>
                        <div controlid="formJobDescription">
                        <textarea
                            rows="11"
                             className='card container rounded border p-3'
                             placeholder='Type your achievements and responsibilities here'
                             defaultValue={this.props.inputValues.jobDescription}
                            onChange={this.props.handleChange}
                            name="jobDescription"
                        />
                        </div>
                    </form>
                <div className="d-flex align-items-center justify-content-between my-3 gap-3">
                    <button className='btn btn-transparent border-secondary'  onClick={this.back}>Back</button>{' '}
                        <button className='btn btn-success' onClick={this.saveAndContinue}>Continue</button>
                </div>
            </div>
         </div>   
        );
    }
}
 
export default Description;
;