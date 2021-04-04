import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ label, selected, onChange, displayErrorMsg, errorMessage }) => {

    const tomorrowsDate = () => {
        let date = new Date();
        date.setDate(date.getDate() + 1);

        return date;
    }

    return (
        <div className="form-group datepicker d-flex flex-column">
            {label && (
                <label>{label}</label>
            )}
            <DatePicker
                selected={selected}
                onChange={onChange}
                dateFormat={'dd/MM/yyyy'}
                placeholderText={'Please select a date'}
                minDate={tomorrowsDate()}
            />
            {displayErrorMsg && (
                <span className="text-danger">{errorMessage}</span>
            )}
        </div>
    )
}

export default Datepicker;