import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState(
            {
                showMenu: !this.state.showMenu,
            }
        )
    }
    render() {
        return (
            <nav className="nav-container">
            <div className="dropdown-menu">
                <button onClick={this.toggleMenu} className="dropbtn icon-bars"></button>
                <ul style={{ display: this.state.showMenu ? "block" : "none" }} className="nav-list">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/Types">beer</Link></li>
                    <li><Link to="/PartnersList">partners</Link></li>
                    <li><Link to="/Contact">contact</Link></li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default DropdownMenu;
