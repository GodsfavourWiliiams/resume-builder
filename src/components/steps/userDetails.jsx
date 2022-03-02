import React, { Component } from 'react';
// import Input from '../reUseableComponents/Input'

 
 
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
        <div className=''>
        
                    <div className="card-header bg-white pt-3">
                        <h5>What's the best way for employers to contact you?</h5>
                    </div>
                    <div className='form card-body'>
                        <p className="alert alert-primary">We suggest including an email and phone number.</p>
                        <div className='row'>
                            <div className='form-group col-6' controlId="formFirstName">
                                <label className="form-label">First Name</label>
                                <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.firstName}
                                name="firstName"
                                placeholder='First Name'
                                required
                                onChange={this.props.handleChange}
                                />
                            </div >
 
                            <div className='form-group col-6' controlId="formLastName">
                                <label className="form-label">Last Name</label>
                                <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.lastName}
                                name="lastName"
                                placeholder='Last Name'
                                required
                                onChange={this.props.handleChange}
                                />
                            </div >
                        </div>
                              <div className='form-group' controlId="formProffession">
                                <label className="form-label">Profession</label>
                                <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.proffession}
                                name="proffession"
                                placeholder='Full-Stack-Engineer'
                                required
                                onChange={this.props.handleChange}
                                />
                            </div >
                    <div className="row">
                        <div className='form-group col-6'  controlId="formEmail">
                            <label className="form-label">Email Address</label>
                            <input className='form-control'
                            type="email"
                            defaultValue={this.props.inputValues.email}
                            name="email"
                            placeholder='Email'
                            required
                            onChange={this.props.handleChange}
                            />
                        </div >

                        <div className='form-group col-6'  controlId="formPhone">
                            <label className="form-label">Phone</label>
                            <input className='form-control'
                            type="number"
                            defaultValue={this.props.inputValues.phone}
                            name="phone"
                            placeholder='Phone Number'
                            required
                            onChange={this.props.handleChange}
                            />
                        </div >
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
 
export default userDetails;