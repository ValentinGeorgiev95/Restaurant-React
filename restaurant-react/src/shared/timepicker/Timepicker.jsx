import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = (props) => {

    const onChange = (date) => {
        props.onChange(date);
    }
    return (
        <div className="form-group datepicker d-flex flex-column">
            <label>{props.label}</label>
            <DatePicker
                selected={props.selected}
                onChange={onChange}
                dateFormat={'HH:mm'}
                placeholderText={'Please select time'}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
            />
        </div>
    )
}

export default Datepicker;