import React from 'react';
import Routes from '../routes/Routes';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Layout() {
    return (
        <div className="wrapper">
            <Header />
            <Routes />
            <Footer />
        </div>
    )
}

export default Layout;