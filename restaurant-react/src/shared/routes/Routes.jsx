import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { authCheckState } from '../../store/actions/auth';
import Home from '../../components/home/Home';
import Login from '../../components/auth/login/LoginContainer';
import Logout from '../../components/auth/logout/LogoutContainer';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const fourOFour = () => {
    return (
        <div className="page-not-found d-flex align-items-center justify-content-center">
            <h2 className="text-center">
                The page your are looking for doesn't exist.
                <span></span>
                Please select a page from our navigation menu.
            </h2>
        </div>
    )
}

class Routes extends React.Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        let routes = null;
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/basket" exact component={() => <p>basket</p>} />
                    <Route path="/orders" exact component={() => <p>orders</p>} />
                    <Route path="/logout" exact component={Logout} />
                    <Route component={fourOFour} />
                </Switch >
            );
        } else {
            routes = (
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/basket" exact component={() => <p>basket</p>} />
                    <Route path="/login" exact component={Login} />
                    <Route component={fourOFour} />
                </Switch >
            );
        }
        return (
            // routes

            <Switch>
                <PublicRoute path="/" exact component={Home} />
                <PublicRoute path="/basket" exact component={() => <p>basket</p>} />
                <PrivateRoute path="/orders" exact component={() => <p>orders</p>} />
                <PublicRoute path="/login" exact component={Login} />
                <PrivateRoute path="/logout" exact component={Logout} />
                <PublicRoute component={fourOFour} />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));