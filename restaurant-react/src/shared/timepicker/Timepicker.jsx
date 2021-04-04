import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ label, selected, minTime, maxTime, displayErrorMsg, errorMessage, onChange }) => {
    return (
        <div className="form-group datepicker d-flex flex-column">
            {label && (
                <label>{label}</label>
            )}
            <DatePicker
                selected={selected}
                onChange={onChange}
                dateFormat={'HH:mm'}
                placeholderText={'Please select time'}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                minTime={minTime}
                maxTime={maxTime}
            />
            {displayErrorMsg && (
                <span className="text-danger">{errorMessage}</span>
            )}
        </div>
    )
}

export default Datepicker;