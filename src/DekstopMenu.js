import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <nav className="nav-container">
                <ul className="nav-list">
                    <li><Link to="/">shop</Link></li>
                    <li><Link to="#">about</Link></li>
                    <li><Link to="#">contact us</Link></li>
                </ul>
        </nav>
        );
    }
}

export default Menu;
