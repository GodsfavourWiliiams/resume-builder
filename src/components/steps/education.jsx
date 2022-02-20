import React, { Component } from 'react';
 
 
class Education extends Component{
 
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
                    <h5 className=''>Tell us about your education</h5>
        </div>
        <div className='form card-body'>
            <p className="alert alert-primary">
                Include every school, even if youre still there or didn't graduate.
            </p>
            <div className="row">
            <div className='form-group col-lg-6' controlId="formAddress">
                <label className='form-label'>School Name</label>
                <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.address}
                    name="address"
                    placeholder='e.g. Marketing Manager'
                    required
                    onChange={this.props.handleChange}
                />
            </div>

                <div className='form-group col-lg-6' controlId="formCountry">
                    <label className='form-label'>School Location</label>
                    <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.country}
                    name="country"
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
        </div>    
            
                <div className='form-group ' controlId="formDegree">
                    <label className='form-label'>Degree</label>
                    <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.city}
                    name="Degree"
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
                
            <div className="row">
                <div className='form-group col-lg-6' controlId="formState">
                    <label className='form-label'>Field of Study</label>
                    <input className='form-control'
                    type="text"
                    defaultValue={this.props.inputValues.city}
                    name="Feild"
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
              <div className="row col-lg-6">
                <div className='form-group col-lg-6' controlId="formZip">
                    <label className='form-label'>Graduation Start Date</label>
                    <input className='form-control'
                    type="date"
                    defaultValue={this.props.inputValues.zip}
                    name="Date"
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
            
                <div className='form-group col-lg-6' controlId="formZip">
                    <label className='form-label'>Graduation End Date</label>
                    <input className='form-control'
                    type="date"
                    defaultValue={this.props.inputValues.zip}
                    name="Date"
                    required
                    onChange={this.props.handleChange}
                    />
                </div>
              </div>  
            </div>
            <div className="d-flex align-items-center gap-2">
                <input type="checkbox" name="Check" className='' />
                <label htmlFor="WOrk" className=''>I currently Attend Here</label>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3 gap-3">
                <button className='btn btn-transparent border-secondary'  onClick={this.back}>Back</button>{' '}
                    <button className='btn btn-success' onClick={this.saveAndContinue}>Continue</button>
            </div>
        </div>
    </div>
        );
    }
}
 
export default Education;