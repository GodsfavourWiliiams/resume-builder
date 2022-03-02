import React from "react";

export default function Input({ title, name, label, placeholder, register, required, disabled = false, type }) {
    return (
        <div className="my-3">
            <label className="form-label" for={title}>{label}</label>
            <input className="form-control" 
            name={name}
            type={type} 
            placeholder={placeholder}
            disabled={disabled} 
            {...register(title, { required })} />
        </div>
    )
}