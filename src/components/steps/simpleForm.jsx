import React, { Component } from 'react';
 
class SimpleForm extends Component {
  render() {
    return (
    <div className='container'>
      <div className='form'>
        <div className='form-group' controlId="form.Name">
            <label>Name</label>
            <input className='form-control' type="text" placeholder="Enter name" />
        </div>
        <div className='form-group' controlId="form.Email">
            <label>Email address</label>
            <input className='form-control' type="email" placeholder="name@example.com" />
        </div>
        <div className='form-group' controlId="form.Textarea">
            <label>Comment</label>
            <input className='form-control' as="textarea" rows={3} />
        </div>
      </div>
    </div>
    );
  }
        
}
export default SimpleForm;