import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

const PublicRoute = ({ component: Component, location, ...rest }) => (
    <Route {...rest} render={props => (
        !localStorage.getItem('token') ? (
            <Component {...props} {...rest} />
        ) : (
            <Redirect to={'/login'} />
        )
    )} />
)

export default withRouter(PublicRoute);