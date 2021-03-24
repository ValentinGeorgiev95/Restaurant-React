import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <Routes />
            <Footer />
        </div>
    )
}

export default withRouter(Layout);