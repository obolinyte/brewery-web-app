import React, { Component } from 'react';
import './App.css';
import DesktopMenu from './DekstopMenu.js'
import MobileMenu from './MobileMenu';
import AcountNavContainer from './AcountNavContainer.js';

class AcountNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 650 });
    }
    render() {
        const isDesktop = this.state.isDesktop;
        return (
            <div className="top-nav-container">
                <div className="top-nav">
                    {isDesktop ? (
                        <DesktopMenu activePage={this.props.activePage} />
                    ) : (
                            <MobileMenu />
                        )}
                    <AcountNavContainer />
                </div>
            </div>
        );
    }
}

export default AcountNav;
