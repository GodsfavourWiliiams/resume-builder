import React, { Component } from 'react';
 
 
class Education extends Component{
    
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
                    <h5 className=''>Tell us about your education</h5>
        </div>
        <div className='form card-body'>
            <p className="alert alert-primary">
                Include every school, even if youre still there or didn't graduate.
            </p>
            <div className="row">
            <div className='form-group col-lg-6' controlId="formSchoolName">
                <label className='form-label'>School Name</label>
                <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.SchoolName}
                    name="SchoolName"
                    placeholder='e.g. University of Uyo'
                    required
                    onChange={this.props.handleChange}
                />
            </div>

                <div className='form-group col-lg-6' controlId="formSchoolLocation">
                    <label className='form-label'>School Location</label>
                    <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.SchoolLocation}
                    name="SchoolLocation"
                    placeholder='Uyo, Nigeria'
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
        </div>    
            
                <div className='form-group ' controlId="formDegree">
                    <label className='form-label'>Degree</label>
                    <input className='form-control'
                    type="text"
                    placeholder='e.g. B. Eng'
                    defaultValue={this.props.inputValues.Degree}
                    name="Degree"
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
                
            <div className="row">
                <div className='form-group col-lg-6' controlId="formFieldOfStudy">
                    <label className='form-label'>Field of Study</label>
                    <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.FieldOfStudy}
                    name="FieldOfStudy"
                    required
                    placeholder='Computer Engineering'
                    onChange={this.props.handleChange}
                    />
                </div>
                <div className='form-group col-lg-3' controlId="formZip">
                    <label className='form-label'>Graduation Start Date</label>
                    <input className='form-control'
                    type="date"
                    defaultValue={this.props.inputValues.zip}
                    name="Date"
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
            
                <div className='form-group col-lg-3' controlId="formZip">
                    <label className='form-label'>Graduation End Date</label>
                    <input className='form-control'
                    type="date"
                    defaultValue={this.props.inputValues.zip}
                    name="Date"
                    required
                    onChange={this.props.handleChange}
                    disabled= {(this.state.disabled)? "disabled" : ""}
                    />
                </div>
            </div>
            
            <div className="form-check gap-2">
                <input type="checkbox" name="Check" className='form-check-input' onClick = {this.handleGameClik.bind(this)} />
                <label htmlFor="Work" className='form-check-label'>I currently Attend Here</label>
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
 
export default Education;