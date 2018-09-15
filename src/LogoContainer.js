import React, { Component } from 'react';
import './App.css';

class LogoContainer extends Component {
    render() {
        return (
            <div className="logo-container">
                <div className="logo-img-container">
                    <img src="./small-beer.svg"></img>
                    <img src="./beer.svg"></img>
                    <img src="./big-beer.svg"></img>
                </div>
                <span>js brew</span>
            </div>
        );
    }
}

export default LogoContainer;
