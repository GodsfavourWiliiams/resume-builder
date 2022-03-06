import React, { Component } from 'react';
import { FiSettings, FiDelete, FiUsers, FiSpeaker, FiEdit2 } from "react-icons/fi";

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
        visibility: false
    };
}
handleToggleVisibility() {
    this.setState((prevState) => {
        return {
            visibility: !prevState.visibility
        };
    });
}
  render() {
    return (
       <div className="">
              <nav className="nav flex-column nav-pills ">
                <div className={this.state.visibility ? 'nav-item mb-2 nav-link nav-link-faded bg-light' : 
                ' nav-item nav-link nav-link-faded active mb-2'} onClick={this.handleToggleVisibility}>
                <FiUsers className='mb-1 mx-2'/>
                  Email 
                </div>
                <div className="nav-item nav-link nav-link-faded bg-light mb-2">
                    <FiSettings className='mb-1 mx-2'/>
                  Password
                </div>
                <div className="nav-item nav-link nav-link-faded bg-light mb-2">
                    <FiSpeaker className='mb-1 mx-2'/>
                  Language
                </div>
                <div className="nav-item nav-link nav-link-faded bg-light mb-2">
                    <FiDelete className='mb-1 mx-2'/>
                 Delete
                </div>
                <div className="nav-item nav-link nav-link-faded bg-light">
                    <FiEdit2 className='mb-1 mx-2'/>
                 Templates
                </div>
              </nav>
      
            <div className="py-4 tab-content">
           
              <div className={this.state.visibility ? 'tab-pane' : 
                ' active'}>
                <form>
                  <div className="form-group">
                    <label htmlfor="fullName">Email</label>
                    <input type="text" className="form-control" placeholder="Enter your Email"/>
                  </div>
                  
                <div className="row form-group">
                  <div className="col-lg-6">
                    <label for="url">New</label>
                    <input type="text" className="form-control mt-2" placeholder="Change Email"/>
                  </div>
                  <div className="col-lg-6">
                    <label for="location">Confirm</label>
                    <input type="text" className="form-control mt-2" placeholder="Confirm New Email" />
                  </div>
                </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                        <button type="reset" className="btn btn-light border-1 border-secondary">Cancel </button>
                        <button type="button" className="btn btn-primary">Update Profile</button>
                  </div>
                 
                </form>
              </div>
              <div className="tab-pane">
                <form>
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" className="form-control mt-2" placeholder="Enter your username"/>
                 </div>
                  <div className="form-group">
                    <label className="d-block text-danger">Delete Account</label>
                    <p className="text-muted font-size-sm">Once you delete your account, there is no going back. Please be certain.</p>
                  </div>
                  <button className="btn btn-danger" type="button">Delete Account</button>
                </form>
              </div>
              <div className="tab-pane">
                <form>
                  <div className="form-group">
                    <label className="mb-2">Current Password</label>
                    <input type="text" className="form-control" placeholder="Enter your old password"/>
                    <div className="row mt-2 form-group">
                      <div className="col-lg-6">
                        <label for="url">New</label>
                             <input type="text" className="form-control mt-1" placeholder="New password"/>
                         </div>
                        <div className="col-lg-6">
                         <label for="url">Comfirm</label>
                             <input type="text" className="form-control mt-1" placeholder="Confirm new password"/>
                        </div>
                    </div>
                  </div>
                </form>
                  <div className="form-group">
                    <button className="btn btn-primary" type="button">Change </button>
                  </div>
              </div>
              {/*  */}
               <div className="tab-pane">
                <form>
                  <div className="form-group">
                    <label className="mb-2">Change Language</label>
                    <select className="form-control">
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="English">Portuguese</option>
                    </select>
                  </div>
                </form>
              </div>
              {/*  */}
            </div>
          </div>
    )
  }
}
