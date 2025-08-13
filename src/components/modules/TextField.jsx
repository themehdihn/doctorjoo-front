import "./TextField.css";

function TextField({
  label,
  name,
  register,
  required,
  type = "text",
  validationSchema,
  errors,
  value,
  onChange,
}) {
  return (
    <div className="text-field">
      <label htmlFor={name} className="text-field__label">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        type={type}
        autoComplete="off"
        // {...register(name, validationSchema)}
        className="text-field__input"
        value={value}
        onChange={onChange}
      />
      {errors && errors[name] && (
        <span className="text-field__error">{errors[name].message}</span>
      )}
    </div>
  );
}

export default TextField;
