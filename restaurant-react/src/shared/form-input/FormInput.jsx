import React from 'react';

const FormInput = ({
    label,
    type,
    value,
    name,
    placeholder,
    maxLength,
    required,
    displayErrorMsg,
    errorMessage,
    onChange
}) => {
    return (
        <div className="form-group d-flex flex-column">
            {label && (
                <label>{label}</label>
            )}
            <input
                type={type}
                onChange={(e) => onChange(e)}
                value={value ?? ''}
                name={name}
                placeholder={placeholder}
                maxLength={maxLength}
                required={required}
            />
            {displayErrorMsg && (
                <span className="text-danger">{errorMessage}</span>
            )}
        </div>
    )
}

export default FormInput;