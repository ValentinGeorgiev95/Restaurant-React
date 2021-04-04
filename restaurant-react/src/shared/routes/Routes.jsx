import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Home from '../../components/home-page/Home';

function FourOFour() {
    return (
        <div className="page-not-found d-flex align-items-center justify-content-center flex-column w-100">
            <h2 className="text-center">
                404 Page not found
                <span></span>
                The page you are looking for doesn't exist.
            </h2>
            <Link to={'/'}>Back to home page</Link>
        </div>
    )
}

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route component={FourOFour} />
        </Switch>
    )
}

export default Routes;