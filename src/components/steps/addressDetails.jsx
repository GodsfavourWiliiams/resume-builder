import React, { Component } from 'react';
 
 
class AddressDetails extends Component{
 
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
                                <h5>Address Details</h5>
                            </div>
                    <div className='form card-body'>
                        <p className="alert alert-primary">
                            Tell us about your Location
                        </p>
                        <div className='form-group' controlId="formAddress">
                            <label className='form-label'>Address</label>
                            <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.address}
                                name="address"
                                placeholder='Address'
                                required
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <div className="row">
                            <div className='form-group col-6' controlId="formCountry">
                                <label className='form-label'>Country</label>
                                <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.country}
                                name="country"
                                placeholder='Current Location'
                                required
                                onChange={this.props.handleChange}
                                />
                            </div>

                            <div className='form-group col-6' controlId="formCity">
                                <label className='form-label'>City</label>
                                <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.city}
                                name="city"
                                placeholder='City'
                                required
                                onChange={this.props.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className='form-group col-6' controlId="formState">
                                <label className='form-label'>State</label>
                                <input className='form-control'
                                 name="state" 
                                 placeholder='State'
                                 defaultValue={this.props.inputValues.state} 
                                 onChange={this.props.handleChange}/>
                            </div>
 
                            <div className='form-group col-6' controlId="formZip">
                                <label className='form-label'>Zip</label>
                                <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.zip}
                                name="zip"
                                placeholder='Zip'
                                required
                                onChange={this.props.handleChange}
                                />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <button className='btn btn-transparent border-secondary'  onClick={this.back}>Back</button>{' '}
                             <button className='btn btn-primary' onClick={this.saveAndContinue}>Continue</button>
                       </div>
                    </div>
    </div>
        );
    }
}
 
export default AddressDetails;