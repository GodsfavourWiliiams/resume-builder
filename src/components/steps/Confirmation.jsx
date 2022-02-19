import React, { Component } from 'react';
 
class Confirmation extends Component{
 
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
 
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
 
    render(){
        const {inputValues: { firstName, lastName, email, address, city, state, zip }} = this.props;
 
        return(
            <div className='container'>
                <h1>Confirm your Details</h1>
                <p>Confirm if the following details are correct.</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Adress: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                <button className="btn btn-secondary" onClick={this.back}>Back</button>{' '}
                <button className="btn btn-primary">Confirm</button>
            </div>
        )
    }
}
 
export default Confirmation;