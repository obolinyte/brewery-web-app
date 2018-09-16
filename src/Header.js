import React, { Component } from 'react';
import './App.css';
import LogoContainer from './LogoContainer.js';
import TopNavigation from './TopNavigation.js';
import SocialsContainer from './SocialsContainer.js';

class Header extends Component {
 
    render() {
        return (
            <header className="header">
                <TopNavigation />
                <LogoContainer />
                {this.props.showSocials ? <SocialsContainer /> : null}
            </header>
        );
    }
}

export default Header;
