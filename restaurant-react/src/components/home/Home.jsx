import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import FormInput from '../../shared/form-input/FormInput';
import DatePicker from "react-datepicker";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarouseImageOne from '../../assets/img/cuts/home-intro-one.jpg';
import HomeCarouseImageTwo from '../../assets/img/cuts/home-intro-two.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bookingModel: {
                name: null,
                email: null,
                phone: null,
                checkInDate: null,
                checkInTime: null,
                guestsNumber: null,
            }
        }
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

    render() {
        return (
            <div className="main home">
                <div className="intro">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        interval={4000}
                        showIndicators
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                    >
                        <div className="carousel-slide">
                            <div className="overlay"></div>
                            <img src={HomeCarouseImageOne} alt="" />
                            <div className="intro-text shell">
                                <span className="intro-subheading">Valentino Restaurant</span>
                                <h1>Best Quality</h1>
                            </div>{/* intro-text */}
                        </div>
                        <div className="carousel-slide">
                            <div className="overlay"></div>
                            <img src={HomeCarouseImageTwo} alt="" />
                            <div className="intro-text shell">
                                <span className="intro-subheading">Valentino Restaurant</span>
                                <h1>Made With Love</h1>
                            </div>{/* intro-text */}
                        </div>
                    </Carousel>
                </div>{/* section-intro */}
                <section className="section-about">
                    <div className="shell">
                        <div className="section-aside">
                            <h4>Book your table</h4>
                            <form
                                className="form-about"
                                noValidate
                            >
                                <FormInput
                                    type='text'
                                    onChange={this.handleInputChange}
                                    value={this.state.bookingModel.name}
                                    label='Name'
                                    placeholder='Name'
                                    maxLength='50'
                                    required={true}
                                />
                                <FormInput
                                    type='email'
                                    onChange={this.handleInputChange}
                                    value={this.state.bookingModel.email}
                                    label='Email'
                                    placeholder='Email'
                                    maxLength='80'
                                    required={true}
                                />
                                <FormInput
                                    type='number'
                                    onChange={this.handleInputChange}
                                    value={this.state.bookingModel.phone}
                                    label='Phone'
                                    placeholder='Phone'
                                    maxLength='50'
                                    required={true}
                                />
                            </form>{/* form-about */}
                        </div>{/* section-aside */}
                        <div className="section-text">
                            <h4 className="section-subheading">About</h4>
                            <h3 className="section-title">Welcome to Valentino.Tasty</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of.
                            </p>
                        </div>{/* section-text */}
                    </div>{/* shell */}
                </section>
            </div>
        )
    }
}

export default Home;