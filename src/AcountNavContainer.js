import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class AcountNav extends Component {
    render() {
        return (

                <ul className="acount-nav">
                    <li><Link className="icon-user" to="/NotFound"></Link></li>
                    <li><Link to="/MyOrders">my orders</Link></li>
                    <li><Link className="icon-shopping-cart" to="/NotFound"></Link></li>
                </ul>
        );
    }
}

export default AcountNav;
