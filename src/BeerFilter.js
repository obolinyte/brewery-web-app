import React, { Component } from 'react';
import './App.css';

class BeerFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false
        }
        // this.getFilterClass = this.getFilterClass.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState(
            {
                showDropdown: !this.state.showDropdown,
            }
        )
    }

    // getFilterClass(filter) {
    //     let result = this.props.filterList.indexOf(filter);
    //     if (result > -1) {
    //         return "beer-filter-active";
    //     }
    //     return "";
    // }

    render() {
        return (

            <div className="beer-filter-dropdown-container">
                <button onClick={this.toggleDropdown} className="beer-filter-dropdown-btn">what's your style? ></button>
                <ul style={{ display: this.state.showDropdown ? "block" : "none" }} className="beer-filter-container">
                    <li  onClick={() => { this.props.filterClick("american lager") }}>american lager</li>
                    <li  onClick={() => { this.props.filterClick("european lager") }}>european lager</li>
                    <li  onClick={() => { this.props.filterClick("pilsner") }}>pilsner</li>
                    <li onClick={() => { this.props.filterClick("indian pale ale") }}>indian pale ale</li>
                    <li onClick={() => { this.props.filterClick("american pale ale") }}>american pale ale</li>
                    <li  onClick={() => { this.props.filterClick("stout") }}>stout</li>
                    <li  onClick={() => { this.props.filterClick("porter") }}>porter</li>
                </ul>
            </div>
        );
    }
}

export default BeerFilter;
