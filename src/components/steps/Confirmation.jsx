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
        const {inputValues: {
             firstName, lastName, proffession, email, phone, address, country, city, state, zip ,
             jobDescription,
             JobTitle,
             JobCompanyName,
             JobCountry,
             Jobcity,
            }} = this.props;
 
        return(
            <div className='container card-body'>
                <h3 className='bg-primary p-3 rounded text-white mb-5'>Confirm if the following details are correct.</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Proffession: {proffession}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Adress: {address}</p>
                <p>Country: {country}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                <p>Job Title: {JobTitle}</p>
                <p>Job Company Name: {JobCompanyName}</p>
                <p>Job Country: {JobCountry}</p>
                <p>Job City: {Jobcity}</p>
                <p>Job description: {jobDescription}</p>

                <div className="d-flex align-items-center justify-content-between gap-3">
                         <button className="btn border-secondary" onClick={this.back}>Back</button>{' '}
                        <button className="btn btn-success">Confirm</button>
                </div>
            </div>
        )
    }
}
 
export default Confirmation;