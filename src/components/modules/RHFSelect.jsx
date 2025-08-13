import React from "react";

 function RHFSelect({ label, name, options, required, register }) {
    return (
      <div className="rhf-select" style={{marginBottom:"1rem"}}>
        <label htmlFor={name} className="text-field__label">
          {label} {required && <span className="text-error">*</span>}
        </label>
        <select {...register(name)} id={name} className="text-field__input">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

export default RHFSelect;
