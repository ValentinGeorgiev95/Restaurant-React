import React from 'react';

const FormInput = (props) => {
    const onChange = (e) => {
        props.onChange(e);
    }

    return (
        <div className="form-group d-flex flex-column">
            {props.label && (
                <label>{props.label}</label>
            )}
            <input
                type={props.type}
                onChange={onChange}
                value={props.value ?? ''}
                name={props.name}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                required={props.required}
                disabled={props.disabled}
            />
            {props.displayErrorMsg && (
                <span className="text-danger">{props.errorMessage}</span>
            )}
        </div>
    )
}

export default FormInput;