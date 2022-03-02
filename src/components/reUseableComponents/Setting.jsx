import React, { Component } from 'react';
import { FiSettings, FiDelete, FiUsers, FiSpeaker } from "react-icons/fi";

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
      <div>
       <div className="row gutters-sm">
        <div className="col-md-4 d-none d-md-block">
          <div className="card">
            <div className="card-body">
              <nav className="nav flex-column nav-pills ">
                <div className={this.state.visibility ? 'nav-item nav-link has-icon nav-link-faded' : 
                ' nav-item nav-link has-icon nav-link-faded active'} onClick={this.handleToggleVisibility}>
                <FiUsers className='mb-1'/>
                  Email 
                </div>
                <div className="nav-item nav-link has-icon nav-link-faded">
                    <FiSettings className='mb-1'/>
                  Password
                </div>
                <div className="nav-item nav-link has-icon nav-link-faded">
                    <FiSpeaker className='mb-1'/>
                  Language
                </div>
                <div className="nav-item nav-link has-icon nav-link-faded">
                    <FiDelete className='mb-1'/>
                 Delete
                </div>
               
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header border-bottom mb-3 d-flex d-md-none">
              <ul className="nav nav-tabs card-header-tabs nav-gap-x-1" role="tablist">
                <li className="nav-item">
                  <div  className="nav-link has-icon">
                  <FiUsers className=''/>
                  </div>
                </li>
                <li className="nav-item">
                  <div  className="nav-link has-icon">
                      <FiSettings/>
                  </div>
                </li>
                <li className="nav-item">
                  <div  className="nav-link has-icon">
                      <FiSpeaker/>
                  </div>
                </li>
                <li className="nav-item">
                  <div  className="nav-link has-icon">
                      <FiDelete/>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-body tab-content">
           
              <div className={this.state.visibility ? 'tab-pane' : 
                ' active'}>
                <form>
                  <div className="form-group">
                    <label htmlfor="fullName">Email</label>
                    <input type="text" className="form-control" aria-describedby="fullNameHelp" placeholder="Enter your Email"/>
                  </div>
                <div className="row form-group">
                  <div className="col-lg-6">
                    <label for="url">New</label>
                    <input type="text" className="form-control mt-2" id="url" placeholder="Change Email"/>
                  </div>
                  <div className="col-lg-6">
                    <label for="location">Confirm</label>
                    <input type="text" className="form-control mt-2" id="location" placeholder="Confirm New Email" />
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
                    <input type="text" className="form-control mt-2" id="username" aria-describedby="usernameHelp" placeholder="Enter your username"/>
                 </div>
                  <div className="form-group">
                    <label className="d-block text-danger">Delete Account</label>
                    <p className="text-muted font-size-sm">Once you delete your account, there is no going back. Please be certain.</p>
                  </div>
                  <button className="btn btn-danger" type="button">Delete Account</button>
                </form>
              </div>
              <div className="tab-pane" id="security">
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
               <div className="tab-pane" id="security">
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
        </div>
      </div>
    </div>
    )
  }
}
