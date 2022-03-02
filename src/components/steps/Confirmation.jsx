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
             FieldOfStudy,
             Degree,
             SchoolLocation,
             SchoolName,
             JobStartDate,
             JobEndDate,
             EducationStartDate,
             EducationEndDate
            }} = this.props;
 
        return(
            <div className='container card-body'>
                <div className="row">
                    <div className="col-3">
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
                </div>
                <div className='col-3'>
                <p>Job Title: {JobTitle}</p>
                <p>Job Company Name: {JobCompanyName}</p>
                <p>Job Country: {JobCountry}</p>
                <p>Job City: {Jobcity}</p>
                <p>Job description: {jobDescription}</p>
                <p>Job Start Date: {JobStartDate}</p>
                <p>Job End Date: {JobEndDate}</p>
                </div>
                <div className="col-3">
                    <p>Feild of study: {FieldOfStudy}</p>
                    <p>Degree:  {Degree}</p>
                    <p>School Location {SchoolLocation}</p>
                    <p>School Name: {SchoolName}</p>
                    <p>School Start Date: {EducationStartDate}</p>
                    <p>School End Date: {EducationEndDate}</p>
                </div>
              </div>  
                <div className="d-flex align-items-center justify-content-between gap-3">
                         <button className="btn border-secondary" onClick={this.back}>Back</button>{' '}
                        <button className="btn btn-primary">Confirm</button>
                </div>
            </div>
        )
    }
}
 
export default Confirmation;