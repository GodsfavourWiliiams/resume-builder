import React from "react";

function InputControl({ label, ...props }) {
  return (
    <div className="form">
        <input type="text" className="form__input" placeholder=" " {...props} />
        {label && <label htmlFor="password" className="form__label">{label}</label>}
</div>
  );
}

export default InputControl;
