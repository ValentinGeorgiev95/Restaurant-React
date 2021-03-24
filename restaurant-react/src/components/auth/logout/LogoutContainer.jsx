import React from 'react';
import Logout from './Logout';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/auth';

const LogoutContainer = (props) => {
    return <Logout {...props} />
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    };
};

export default connect(null, mapDispatchToProps)(LogoutContainer);