import React from 'react';
import InputControl from '../../../ResumeComponents/InputControl/InputControl';

export default function deleteAccount() {
  return (
    <div className="tab-pane">
    <form>
      <div className="">
        <InputControl
        className='bg-indigo'
          label="Delete"
        />
     </div>
      <div className="form-group">
        <p className="text-muted alert alert-danger font-size-sm">
          Input your full name!
          <br />
         Note: Once you delete your account, there is no going back. Please be certain.</p>
      </div>
      <button className="btn btn-danger w-100" type="button">Delete Account</button>
    </form>
  </div>
  
  )
}
