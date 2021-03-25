import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';

const LoginContainer = (props) => {
    console.log(props, 'props');
    return (
        <Login
            {...props}
            loading={props.loading}
            error={props.error}
            isAuthenticated={props.isAuthenticated}
        />
    )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(auth(email, password, isSignup)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);