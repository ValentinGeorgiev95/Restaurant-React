import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../../components/home/Home';

function FourOFour() {
    return (
        <div className="page-not-found d-flex align-items-center justify-content-center">
            <h2 className="text-center">
                The page you are looking for doesn't exist.
                <span></span>
                Please select a page from our navigation menu.
            </h2>
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