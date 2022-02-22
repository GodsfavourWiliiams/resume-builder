import React, { Component } from 'react';
// import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
 
class Description extends Component{
    state = {
        editorState: undefined,
      }
    
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
 
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
 
        
    render() {
        return( 
        <div className="">
                <div className="card-header bg-white pt-3">
                    <h5 className=''>Add your job decription</h5>
                </div>
            <div className='form card-body'>
                <p className="alert alert-primary">
                    Let's Know your job description 
                </p>
                    <form>
                        <div controlid="formJobDescription">
                        <textarea
                            rows="11"
                             className='form-control card container rounded border p-3'
                             placeholder='Type your achievements and responsibilities here'
                             defaultValue={this.props.inputValues.jobDescription}
                            onChange={this.props.handleChange}
                            name="jobDescription"
                        />
                        </div>
                        {/* <Editor
                            controlid="formJobDescription"
                            wrapperClassName=" my-5 p-2 rounded-3 "
                            editorClassName="bg-light px-2"
                            toolbarClassName=""
                            onEditorStateChange={this.onEditorStateChange}
                            placeholder='Type your achievements and responsibilities here'
                            defaultValue={this.props.inputValues.jobDescription}
                            onChange={this.props.handleChange}
                            name="jobDescription"
                        /> */}
                        
                    </form>
                <div className="d-flex align-items-center justify-content-between my-3 gap-3">
                    <button className='btn btn-transparent border-secondary'  onClick={this.back}>Back</button>{' '}
                        <button className='btn btn-primary' onClick={this.saveAndContinue}>Continue</button>
                </div>
            </div>
         </div>   
        );
    }
}
 
export default Description;
;