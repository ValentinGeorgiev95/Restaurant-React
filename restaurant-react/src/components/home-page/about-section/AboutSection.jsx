import React from 'react';
import stringUtility from '../../../helpers/stringUtility';
import emailUtility from '../../../helpers/emailUtility';
import axios from '../../../axios-orders';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { cloneDeep } from 'lodash'
import FormInput from '../../../shared/form-input/FormInput';
import DatePicker from '../../../shared/datepicker/Datepicker';
import TimePicker from '../../../shared/timepicker/Timepicker';
import Modal from '../../../shared/modal/Modal';

import ChefImage from '../../../assets/img/cuts/chef.png';

class AboutSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bookingModel: {
                name: null,
                email: null,
                phone: null,
                checkInDate: null,
                checkInTime: null,
            },
            bookingErrors: {
                nameError: false,
                emailError: false,
                phoneError: false,
                checkInDateError: false,
                checkInTimeError: false,
            },
            bookingSuccess: false,
            bookingFailed: false,
        }

        this.bookingFormRef = React.createRef();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState(prevState => ({
            bookingModel: {
                ...prevState.bookingModel,
                [name]: value
            }
        }))
    }

    handleDateChange = (date, pickerType) => {
        if (pickerType === 'datepicker') {
            this.setState(prevState => ({
                bookingModel: {
                    ...prevState.bookingModel,
                    checkInDate: date,
                },
            }));
        } else if (pickerType === 'timepicker') {
            this.setState(prevState => ({
                bookingModel: {
                    ...prevState.bookingModel,
                    checkInTime: date,
                },
            }));
        }
    }

    validateForm = () => {
        const model = { ...this.state.bookingModel };

        let hasError = false;

        if (stringUtility.isNullOrWhiteSpace(model.name)) {
            hasError = true;

            this.setState(prevState => ({
                bookingErrors: {
                    ...prevState.bookingErrors,
                    nameError: true,
                },
            }));
        } else {
            this.setState(prevState => ({
                bookingErrors: {
                    ...prevState.bookingErrors,
                    nameError: false,
                },
            }));
        }

        if (isNaN(model.phone) || stringUtility.isNullOrWhiteSpace(model.phone) || model.phone?.length < 6) {
            hasError = true;

            this.setState(prevState => ({
                bookingErrors: {
                    ...prevState.bookingErrors,
                    phoneError: true,
                },
            }));
        } else {
            this.setState(prevState => ({
                bookingErrors: {
                    ...prevState.bookingErrors,
                    phoneError: false,
                },
            }));
        }

        if (stringUtility.isNullOrWhiteSpace(model.email) || !emailUtility.isValid(model.email)) {
            hasError = true;

            this.setState(prevState => ({
                bookingErrors: {
                    ...prevState.bookingErrors,
                    emailError: true,
                },
            }));
        } else {
            this.setState(prevState => ({
                bookingErrors: {
                    ...prevState.bookingErrors,
                    emailError: false,
                },
            }));
        }

        if (!model.checkInDate) {
            hasError = true;

            this.setState(prevState => ({
                bookingErrors: {
                    ...prevState.bookingErrors,
                    checkInDateError: true,
                },
            }));
        } else {
            this.setState(prevState => ({
                bookingErrors: {
                    ...prevState.bookingErrors,
                    checkInDateError: false,
                },
            }));
        }

        if (!model.checkInTime) {
            hasError = true;

            this.setState(prevState => ({
                bookingErrors: {
                    ...prevState.bookingErrors,
                    checkInTimeError: true,
                },
            }));
        } else {
            this.setState(prevState => ({
                bookingErrors: {
                    ...prevState.bookingErrors,
                    checkInTimeError: false,
                },
            }));
        }

        if (hasError) {
            return false;
        }

        return true;
    }

    handleSubmitBooking = (e) => {
        e.preventDefault();

        this.bookingFormRef.current.classList.add('was-validated');

        if (!this.validateForm()) {
            return;
        }

        const model = cloneDeep(this.state.bookingModel);
        const checkInDateFormatted = moment(model.checkInDate).format('DD/MM/YYYY');
        const checkInTimeFormatted = moment(model.checkInTime).format('HH:mm');

        model.id = uuidv4();
        model.checkInDate = checkInDateFormatted;
        model.checkInTime = checkInTimeFormatted;

        axios.post('/booking-reservations.json', model)
            .then(response => {
                this.setState(prevState => ({
                    bookingModel: {
                        ...prevState.bookingModel,
                        name: null,
                        email: null,
                        phone: null,
                        checkInDate: null,
                        checkInTime: null,
                    },
                    bookingSuccess: true,
                    bookingFailed: false,
                }));

                document.body.classList.add('prevent-scroll');
                this.bookingFormRef.current.classList.remove('was-validated');
            })
            .catch(error => {
                this.setState(prevState => ({
                    bookingSuccess: false,
                    bookingFailed: true,
                }));

                this.bookingFormRef.current.classList.remove('was-validated');
            })
    }

    handleCloseModal = (e) => {
        if (e) {
            e.preventDefault();
        }

        this.setState({
            bookingSuccess: false,
            bookingFailed: false,
        });

        document.body.classList.remove('prevent-scroll');
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-about" id={this.props.id} ref={this.props.aboutRef}>
                    <div className="shell d-flex justify-content-center">
                        <div className="section-aside">
                            <h4>Book your table</h4>
                            <form
                                className="form-about"
                                onSubmit={this.handleSubmitBooking}
                                noValidate
                                ref={this.bookingFormRef}
                            >
                                <FormInput
                                    type='text'
                                    onChange={this.handleInputChange}
                                    value={this.state.bookingModel.name}
                                    name='name'
                                    label='Name'
                                    placeholder='Name'
                                    maxLength='50'
                                    required={true}
                                    displayErrorMsg={this.state.bookingErrors.nameError}
                                    errorMessage='Please enter proper name'
                                />
                                <FormInput
                                    type='email'
                                    onChange={this.handleInputChange}
                                    value={this.state.bookingModel.email}
                                    name='email'
                                    label='Email'
                                    placeholder='Email'
                                    maxLength='80'
                                    required={true}
                                    displayErrorMsg={this.state.bookingErrors.emailError}
                                    errorMessage='Please enter proper email'
                                />
                                <FormInput
                                    type='number'
                                    onChange={this.handleInputChange}
                                    value={this.state.bookingModel.phone}
                                    name='phone'
                                    label='Phone'
                                    placeholder='Phone'
                                    maxLength='20'
                                    required={true}
                                    displayErrorMsg={this.state.bookingErrors.phoneError}
                                    errorMessage='Please enter proper phone'
                                />
                                <DatePicker
                                    label='Preferred date'
                                    selected={this.state.bookingModel.checkInDate}
                                    onChange={date => this.handleDateChange(date, 'datepicker')}
                                    displayErrorMsg={this.state.bookingErrors.checkInDateError}
                                    errorMessage='Please select check in date'
                                />
                                <TimePicker
                                    label='Time for check in'
                                    selected={this.state.bookingModel.checkInTime}
                                    onChange={date => this.handleDateChange(date, 'timepicker')}
                                    minTime={new Date(new Date().setHours(9, 0, 0))}
                                    maxTime={new Date(new Date().setHours(23, 59, 0))}
                                    displayErrorMsg={this.state.bookingErrors.checkInTimeError}
                                    errorMessage='Please select check in time'
                                />
                                <button type="submit" className="btn-submit">
                                    Book your table now
                                    </button>
                            </form>{/* form-about */}
                        </div>{/* section-aside */}
                        <div className="section-text ">
                            <h4 className="section-subheading">About</h4>
                            <h3 className="section-title">Welcome to Valentino.Tasty</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of.
                                </p>
                            <img src={ChefImage} alt="" />
                        </div>{/* section-text */}
                    </div>{/* shell */}
                </section>
                {this.state.bookingSuccess && (
                    <Modal
                        title='Success'
                        content='Your booking request was received!'
                        closeModal={this.handleCloseModal}
                    />
                )
                }
                {this.state.bookingFailed && (
                    <Modal
                        title='Error'
                        content='Oops! Something went wrong...'
                        closeModal={this.handleCloseModal}
                    />
                )
                }
            </React.Fragment>
        );
    }
}

export default AboutSection;