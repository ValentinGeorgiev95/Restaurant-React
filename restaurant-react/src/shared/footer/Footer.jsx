import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../shared/form-input/FormInput';
import axios from '../../axios-orders';
import { v4 as uuidv4 } from 'uuid';
import FacebookIcon from '../../assets/img/icons/facebook.svg';
import TwitterIcon from '../../assets/img/icons/twitter.svg';
import InstagramIcon from '../../assets/img/icons/instagram.svg';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,

        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubscribeNewsletter = (e) => {
        e.preventDefault();
        // TO DO email validation !!!
        const email = {
            id: uuidv4(),
            email: this.state.email,
        };

        axios.post('/subscribedEmails.json', email)
            .then(response => {
                this.setState({
                    email: null,
                });
                console.log(response.data)
                // TO DO => modal for success subscribtion !!!
            })
            // TO DO => modal for error in subscribing !!!
            .catch(error => console.log(error));
    }

    render() {
        return (
            <footer className="footer">
                <div className="shell d-flex align-items-start justify-content-between flex-row-wrap">
                    <div className="footer-text">
                        <h4>
                            <span>Valentino.</span>Tasty
                        </h4>
                        <p>
                            Lorem ipsum dolors sit amet Lorem ipsum dolors sit amet Lorem ipsum dolors sit amet
                        </p>
                        <ul className="list-socials">
                            <li>
                                <Link
                                    to={{
                                        pathname: 'https://www.facebook.com'
                                    }}
                                    target="_blank"
                                >
                                    <img src={FacebookIcon} alt="facebook" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={{
                                        pathname: 'https://www.twitter.com'
                                    }}
                                    target="_blank"
                                >
                                    <img src={TwitterIcon} alt="twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={{
                                        pathname: 'https://www.instagram.com'
                                    }}
                                    target="_blank"
                                >
                                    <img src={InstagramIcon} alt="instagram" />
                                </Link>
                            </li>
                        </ul>
                    </div>{/* footer-text */}
                    <div className="open-hours">
                        <h4>Open hours</h4>
                        <ul>
                            <li className="d-flex align-items-center justify-content-between">
                                <p>Monday</p>
                                <p>9:00 - 24:00</p>
                            </li>
                            <li className="d-flex align-items-center justify-content-between">
                                <p>Tuesday</p>
                                <p>9:00 - 24:00</p>
                            </li>
                            <li className="d-flex align-items-center justify-content-between">
                                <p>Wednesday</p>
                                <p>9:00 - 24:00</p>
                            </li>
                            <li className="d-flex align-items-center justify-content-between">
                                <p>Thursday</p>
                                <p>9:00 - 24:00</p>
                            </li>
                            <li className="d-flex align-items-center justify-content-between">
                                <p>Friday</p>
                                <p>9:00 - 24:00</p>
                            </li>
                            <li className="d-flex align-items-center justify-content-between">
                                <p>Saturday</p>
                                <p>9:00 - 24:00</p>
                            </li>
                            <li className="d-flex align-items-center justify-content-between">
                                <p>Sunday</p>
                                <p>9:00 - 24:00</p>
                            </li>
                        </ul>
                    </div>{/* open-hours */}
                    <div className="newsletter">
                        <h4>newsletter</h4>
                        <p>Subscribe to our newsletter and get the latest news</p>
                        <form
                            className="form-newsletter"
                            onSubmit={this.handleSubscribeNewsletter}
                            noValidate
                        >
                            <FormInput
                                type='email'
                                onChange={this.handleInputChange}
                                value={this.state.email ?? ''}
                                name='email'
                                placeholder='Your email'
                                maxLength='100'
                                required={true}
                                displayErrorMsg='Email is required'
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>{/* newsletter */}
                </div>{/* shell */}
                <div className="copyright">
                    <p className="text-center">&copy; Created by Valentin Georgiev</p>
                </div>
            </footer>
        )
    }
}

export default Footer;