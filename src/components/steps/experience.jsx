import React, { Component } from 'react';
 
 
class Experience extends Component{
    constructor (props){
            super(props);
            this.state = { disabled: false }
        }
        handleGameClik() {
            this.setState( {disabled: !this.state.disabled} )
    }
    
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
               <div className="card-header bg-white pt-3">
                    <h5>Tell us about your Experience!</h5>
                 </div>
        <div className='form card-body'>
            <p className="alert alert-primary">We'll start there and work forward</p>
            <div className="row">
            <div className='form-group col-lg-6' controlId="formJobTitle">
                <label className='form-label'>Job Title</label>
                <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.JobTitle}
                    name="JobTitle"
                    placeholder='e.g. Marketing Manager'
                    required
                    onChange={this.props.handleChange}
                />
            </div>

                <div className='form-group col-lg-6' controlId="formJobCompanyName">
                    <label className='form-label'>Company/ Organisation Name</label>
                    <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.JobCompanyName}
                    name="JobCompanyName"
                    placeholder='Company Name'
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
        </div>    
            <div className="row">
                <div className='form-group col-lg-6' controlId="formJobCountry">
                    <label className='form-label'>Country</label>
                    <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.JobCountry}
                    name="JobCountry"
                    placeholder='Country'
                    required
                    onChange={this.props.handleChange}
                    />
                </div>

                <div className='form-group col-lg-6' controlId="formJobCity">
                    <label className='form-label'>City</label>
                    <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.Jobcity}
                    name="Jobcity"
                    placeholder='City'
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className='form-group col-lg-6' controlId="formJobStartDate">
                    <label className='form-label'>Start Date</label>
                    <input className='form-control'
                    type="month" 
                    defaultValue={this.props.inputValues.JobStartDate}
                    name="JobStartDate"
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
                <div className='form-group col-lg-6' controlId="formJobEndDate">
                    <label className='form-label'>End Date</label>
                    <input className='form-control'
                    type="month"
                    defaultValue={this.props.inputValues.JobEndDate}
                    name="JobEndDate"
                    required
                    onChange={this.props.handleChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}
                    />
                </div>
            </div>
            <div className="form-check gap-2">
                <input type="checkbox" name="Check" className='form-check-input' onClick = {this.handleGameClik.bind(this)} />
                <label htmlFor="Work" className='form-check-label'>I currently work Here</label>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3 gap-3">
                <button className='btn btn-transparent border-secondary'  onClick={this.back}>Back</button>{' '}
                    <button className='btn btn-primary' onClick={this.saveAndContinue}>Continue</button>
            </div>
        </div>
    </div>    
        );
    }
}
 
export default Experience;