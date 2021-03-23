import React from 'react';
import FormInput from '../../shared/form-input/FormInput';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginCredentions: {
                email: null,
                password: null,
            },
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState(prevState => ({
            loginCredentions: {
                ...prevState.loginCredentions,
                [name]: value,
            },
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onAuth(this.state.loginCredentions.email, this.state.loginCredentions.password, true);
    }

    render() {
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={'/'} />
        }
        return (
            <section className="section-login">
                {authRedirect}
                <h3>Please enter your credentials to sign up!</h3>
                <form className="form-login" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        onChange={this.handleInputChange}
                        value={this.state.loginCredentions.email}
                        name='email'
                        label='email'
                        placeholder='email'
                        maxLength='200'
                        required={true}
                    />
                    <FormInput
                        type='password'
                        onChange={this.handleInputChange}
                        value={this.state.loginCredentions.password}
                        name='password'
                        label='password'
                        placeholder='password'
                        maxLength='30'
                        required={true}
                    />
                    <button type="submit">Login</button>
                </form>
            </section>
        )
    }
}

export default Login;