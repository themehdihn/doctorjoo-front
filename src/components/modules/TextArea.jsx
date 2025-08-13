import React from 'react'
import "./TextArea.css"

function TextArea({
  label,
  name,
  validationSchema,
  errors,
  dir = "rtl",
  register,
  isRequired = false,
}) {
  return (
    <div className="text-field">
      <label htmlFor={name} className="text-field__label">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <textarea
        name={name}
        id={name}
        dir={dir}
         {...register(name, validationSchema)}
        className={`text-field__input ${
          dir === "ltr" ? "text-field__input--ltr" : "text-field__input--rtl"
        }`}
      ></textarea>
      {errors && errors[name] && (
        <span className="text-field__error">{errors[name].message}</span>
      )}
    </div>
  );
}

export default TextArea