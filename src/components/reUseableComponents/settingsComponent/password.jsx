import React from 'react';
import InputControl from '../../../ResumeComponents/InputControl/InputControl';

export default function password() {
  return (
    <div className="tab-pane">
        <form>
        <div className="">
            <InputControl
            className='bg-indigo'
              label="Current Password"
              type="password"
            />
            <div className="row mt-2 ">
               <div className="col-lg-6">
                    <InputControl
                    className='bg-indigo'
                      label="New"
                      type="password"
                    />
                </div>
                <div className="col-lg-6">
                    <InputControl
                    className='bg-indigo'
                    label="Confirm"
                    type="password"
                    />
                </div>
            </div>
        </div>
        </form>
      <div className="form-group">
        <button className="btn btn-primary w-100">Change </button>
      </div>
  </div>
  )
}
