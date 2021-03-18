import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = (props) => {
    const onChange = (date) => {
        props.onChange(date);
    }

    const tomorrowsDate = () => {
        let date = new Date();
        date.setDate(date.getDate() + 1);

        return date;
    }

    return (
        <div className="form-group datepicker d-flex flex-column">
            <label>{props.label}</label>
            <DatePicker
                selected={props.selected}
                onChange={onChange}
                dateFormat={'dd/MM/yyyy'}
                placeholderText={'Please select a date'}
                minDate={tomorrowsDate()}
                isClearable
            >
                {/* <p>Making a reservation for today's date is not available!</p> */}
            </DatePicker>
        </div>
    )
}

export default Datepicker;