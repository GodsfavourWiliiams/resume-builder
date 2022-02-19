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
        return( <div className='Container'>
                    <div className='form'>
                        <div className='form-group' controlId="formAddress">
                            <div>Address</div>
                            <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.address}
                                name="address"
                                required
                                onChange={this.props.handleChange}
                            />
                        </div>
 
                        <div className='row'>
                            <div className='form-group col' controlId="formCity">
                                <div>City</div>
                                <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.city}
                                name="city"
                                required
                                onChange={this.props.handleChange}
                                />
                            </div>
 
                            <div className='form-control col' controlId="formState">
                                <div>State</div>
                                <select className='form-control' as="select" name="state" defaultValue={this.props.inputValues.state} onChange={this.props.handleChange}>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                </select>
                            </div>
 
                            <div className='form-control col' controlId="formZip">
                                <div>Zip</div>
                                <input className='form-control'
                                type="text"
                                defaultValue={this.props.inputValues.zip}
                                name="zip"
                                required
                                onChange={this.props.handleChange}
                                />
                            </div>
                        </div>
 
                        <button className='btn btn-secondary'  onClick={this.back}>Back</button>{' '}
                        <button className='btn btn-primary' onClick={this.saveAndContinue}>Next</button>
                    </div>
                </div>
        );
    }
}
 
export default AddressDetails;