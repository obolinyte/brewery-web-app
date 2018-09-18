import React, { Component } from 'react';
import './App.css';

class BeerFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            value: "all"
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.onFilterClick = this.onFilterClick.bind(this);
    }

    onFilterClick(filter) {
        this.props.filterClick(filter);

        this.setState({
            showDropdown: false,
            value: filter,
        })
    }


    toggleDropdown() {
        this.setState(
            {
                showDropdown: !this.state.showDropdown,
            }
        )
    }

    render() {
        return (

            <div className="filter-dropdown-container">
                <span>what's your style?</span>
                <button onClick={this.toggleDropdown} className="filter-dropdown-btn">{this.state.value} <span className="icon-down-open"></span></button>
                <ul style={{ display: this.state.showDropdown ? "block" : "none" }} className="filter-container">
                    <li onClick={() => { this.onFilterClick("all") }}>all</li>
                    <li onClick={() => { this.onFilterClick("american lager") }}>american lager</li>
                    <li onClick={() => { this.onFilterClick("european lager") }}>european lager</li>
                    <li onClick={() => { this.onFilterClick("pilsner") }}>pilsner</li>
                    <li onClick={() => { this.onFilterClick("indian pale ale") }}>indian pale ale</li>
                    <li onClick={() => { this.onFilterClick("american pale ale") }}>american pale ale</li>
                    <li onClick={() => { this.onFilterClick("stout") }}>stout</li>
                    <li onClick={() => { this.onFilterClick("porter") }}>porter</li>
                </ul>
            </div>
        );
    }
}

export default BeerFilter;
