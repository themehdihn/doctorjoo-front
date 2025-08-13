import React from "react";
import "./RHFTextField.css"

export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  required,
  validationSchema = {},
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);

  return (
    <div className={`text-field ${hasError ? "text-error" : ""}`}>
      <label htmlFor={name} className="text-field__label">
         {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`text-field__input ${dir === "ltr" ? "text-left" : "text-right"}`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {hasError && (
        <span className="text-field__error">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
