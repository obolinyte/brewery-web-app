import React, { Component } from 'react';
import './App.css';

class LogoContainer extends Component {
    render() {
        return (
            <div className="logo-container">
                <div className="logo-img-container">
                    <img src="./small-beer.svg" alt="company logo part one"></img>
                    <img src="./beer.svg" alt="company logo part two"></img>
                    <img src="./big-beer.svg" alt="company logo part three"></img>
                </div>
                <span>js brew</span>
            </div>
        );
    }
}

export default LogoContainer;
