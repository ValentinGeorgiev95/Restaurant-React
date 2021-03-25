import React from 'react';
import { Redirect } from 'react-router-dom';
import FormInput from '../../../shared/form-input/FormInput';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginCredentions: {
                email: null,
                password: null,
            },
            signUp: true,
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

    handleSwitchAuthMode = () => {
        this.setState(prevState => ({
            loginCredentions: {
                ...prevState.loginCredentions,
                email: null,
                password: null
            },
            signUp: !prevState.signUp,
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onAuth(this.state.loginCredentions.email, this.state.loginCredentions.password, this.state.signUp);
    }

    render() {
        console.log(this.props, 'props')
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={'/'} />
        }
        return (
            <section className="section-login">
                <div className="overlay"></div>
                <div className="shell d-flex align-items-center justify-content-center flex-column h-100">
                    <h3 className="logo">Valentino<span>.tasty</span></h3>
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
                        <div className="form-actions d-flex align-items-center justify-content-between">
                            <p onClick={this.handleSwitchAuthMode}>{this.state.signUp ? 'Already have an account ?' : 'Create a new account'}</p>
                            <button type="submit">{this.state.signUp ? 'Sign up' : 'Login'}</button>
                        </div>
                    </form>
                </div>{/* shell */}
            </section>
        )
    }
}

export default Login;