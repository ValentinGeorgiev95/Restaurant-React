import React from 'react';

const FormInput = ({
    label,
    type,
    value,
    name,
    placeholder,
    maxLength,
    required,
    disabled,
    displayErrorMsg,
    errorMessage,
    isValid,
    onChange
}) => {
    return (
        <div className={"form-group d-flex flex-column" + (!isValid ? ' invalid' : '')}>
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
                disabled={disabled}
            />
            {!displayErrorMsg && (
                <span className="text-danger">{errorMessage}</span>
            )}
        </div>
    )
}

export default FormInput;