import React from "react";

function InputControl({ label, className, ...props }) {
  return (
    <div className="form-group">
       {label && <label className="form-label">{label}</label>}
        <input 
        type="text" 
        className={`form-input ${className}`}
        placeholder=" " {...props} />
       
</div>
  );
}

export default InputControl;
