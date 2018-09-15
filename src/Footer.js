import React, { Component } from 'react';
import './App.css';
import SocialsContainer from './SocialsContainer.js';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                <div className="follow-us-container">
                <h2>Follow us</h2>
                <ul className="nav-list">
                            <li><Link to="#">Facebook</Link></li>
                            <li><Link to="#">Instagram</Link></li>
                            <li><Link to="#">Twitter</Link></li>
                        </ul>
                </div>
                <div className="subscribe-container">
                <h2>Find out about new arrivals and special offers</h2>
                <form className="subscribe-form">
                <input type="text" className="subscribe-input" placeholder="enter email"></input>
                <button type="submit" className="subscribe-submit">Subscribe</button>
            </form>
                </div>
                <div className="contact-us-container">
                <h2>Contact us</h2>
                <span>99 Vilnius street, Lithuania</span>
                <span>info@jsbrew.com</span>
                <span>+370 600 99999</span>
                </div>
                </div>
                <p className="copyright">© 2018 <span className="footer-company-title">js brew</span>. Powered by good mood.</p>
            </footer>
        );
    }
}

export default Footer;
