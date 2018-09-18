import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';

class NotFound extends Component {
    render() {
        return (
            <div className="wrapper">
            <Header />
            <div className="not-found-container">
            <div className="not-yet-implemented">
            <h1>not yet implemented...</h1>
            </div>     
            <p>Try <Link to="/" >Shop</Link> or <Link to="/MyOrders" >My orders</Link>!</p>
            </div>
            <Footer />
            </div>
        );
    }
}

export default NotFound;
