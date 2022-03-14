import React from "react";
import "../App.css";

export default function Select({ title, label, children, register, required }) {
  return (
    <div className="mb-6 rounded-md" id={title}>
      <label
        className=" mb-2 d-block font-bold text-secondary">
        {label}
      </label>

      <select
        className="border border-secondary text-secondary"
        {...register(title, { required })}
      >
        {children}
      </select>
    </div>
  );
}
