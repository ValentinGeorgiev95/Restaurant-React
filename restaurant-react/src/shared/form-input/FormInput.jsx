import React from 'react';

const FormInput = (props) => {
    const onChange = (e) => {
        props.onChange(e.value);
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input
                type={props.type}
                onChange={onChange}
                value={props.value ?? ''}
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