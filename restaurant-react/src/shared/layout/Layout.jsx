import React from 'react';
import Routes from '../routes/Routes';
import Header from '../header/Header';

function Layout() {
    return (
        <div className="wrapper">
            <Header />
            <Routes />
        </div>
    )
}

export default Layout;