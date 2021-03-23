import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { auth } from '../../store/actions/auth';

const LoginContainer = (props) => {
    return <Login {...props} />
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(auth(email, password, isSignup)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);