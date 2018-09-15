import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Socials extends Component {
    render() {
        return (
            <div className="socials-container">
                <Link to="#" className="icon-facebook-square"></Link>
                <Link to="#" className="icon-instagram"></Link>
                <Link to="#" className="icon-twitter-square"></Link>
                <Link to="#" className="icon-youtube-square"></Link>
            </div>
        );
    }
}

export default Socials;
