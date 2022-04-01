import React from 'react';
import InputControl from '../../../ResumeComponents/InputControl/InputControl';

export default function email(props) {
  return (
   
    <div className='tab-pane'>
      <form>
        <div className="">
          <InputControl
          className='bg-indigo'
          label="Email"
          type="email"
        />
        </div>
      
    <div className="row">
      <div className="col-lg-6">
        <InputControl
        className='bg-indigo'
        label="New"
        />
      </div>
      <div className="col-lg-6">
      <InputControl
      className='bg-indigo'
        label="Confirm"
        />
      </div>
    </div>
      <div className="d-flex align-items-center justify-content-between mt-3">
            <button type="reset" className="btn btn-light border-1 border-secondary">Cancel </button>
            <button type="button" className="btn btn-primary">Update Profile</button>
      </div>
     
    </form>
  </div>
  )
}
