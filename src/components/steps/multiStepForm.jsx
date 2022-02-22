import React, { Component } from 'react';
import UserDetails from "./userDetails";
import AddressDetails from "./addressDetails";
import Confirmation from "./Confirmation";
import Experience from './experience';
import Description from './Description';
import Education from './education';
import Intro from './intro';
 
class multiStepForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        proffesion: '',
        email: '',
        phone: '',
        address: '',
        country: '',
        city: '',
        state: '',
        zip: '',
        JobCompanyName: '',
        JobCountry: '',
        JobTitle: '',
        Jobcity: '',
        jobDescription: '',
        FieldOfStudy: '',
        Degree: '',
        SchoolLocation: '',
        SchoolName: ''
    }
 
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }
 
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }
 
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
 
    render(){
        const { step, firstName, lastName, proffession, email, phone, address, country, city, state, zip,
             jobDescription ,
             JobCompanyName,
             JobCountry,
             JobTitle,
             Jobcity,
             FieldOfStudy,
             Degree,
             SchoolLocation,
             SchoolName

        } = this.state;
        const inputValues = { firstName, lastName, proffession, email, phone, address, country, city, state, zip,
             jobDescription ,
             JobCompanyName,
             JobCountry,
             JobTitle,
             Jobcity,
             FieldOfStudy,
             Degree,
             SchoolLocation,
             SchoolName
        };
        switch(step) {
        case 1:
            return <Intro
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
        case 2:
            return <UserDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
        case 3:
            return <AddressDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
        case 4:
            return <Experience
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange = {this.handleChange}
            inputValues={inputValues}
                    />
        case 5:
          return <Description
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange = {this.handleChange}
          inputValues={inputValues}
                  />
        case 6:
          return <Education
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          inputValues={inputValues}
          />
        case 7:
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                    />
        default:
        }
    }
}
 
export default multiStepForm;