import React, { Component } from 'react';
 
 
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
        return( <div className='container'>
                    <div className='form'>
                        <div className='row'>
                            <div className='col' controlId="formFirstName">
                                <label className="label">First Name</label>
                                <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.firstName}
                                name="firstName"
                                required
                                onChange={this.props.handleChange}
                                />
                            </div >
 
                            <div className='col' controlId="formLastName">
                                <label className="label">Last Name</label>
                                <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.lastName}
                                name="lastName"
                                required
                                onChange={this.props.handleChange}
                                />
                            </div >
                        </div>
 
                        <div  controlId="formEmail">
                            <label className="label">Email Address</label>
                            <input className='form-control'
                            type="email"
                            defaultValue={this.props.inputValues.email}
                            name="email"
                            required
                            onChange={this.props.handleChange}
                            />
                        </div >
 
                        <button className="btn btn-primary" onClick={this.saveAndContinue}>Next</button>
                    </div>
                </div>
        );
    }
}
 
export default userDetails;