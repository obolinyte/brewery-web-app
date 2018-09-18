import React, { Component } from 'react';
import './App.css';

class OrderFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDropdown: false,
            value: "all",
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.onFilterClick = this.onFilterClick.bind(this);
    
}

toggleDropdown() {
    this.setState(
        {
            showDropdown: !this.state.showDropdown,
        }
    )
}

onFilterClick(filter) {
    this.props.onStatusChange(filter);

    this.setState({
        showDropdown: false,
        value: filter,
    })
}

render() {
    return (
        <div className="order-filter">
        <span>sort by status:</span>
            <button onClick={this.toggleDropdown} className="filter-dropdown-btn">{this.state.value} <span className="icon-down-open"></span></button>
            <ul style={{ display: this.state.showDropdown ? "flex" : "none" }} className="filter-container">
                <li onClick={() => { this.onFilterClick("all") }}>all</li>
                <li onClick={() => { this.onFilterClick("pending payment") }}>pending payment</li>
                <li onClick={() => { this.onFilterClick("processing") }}>processing</li>
                <li onClick={() => { this.onFilterClick("shipped") }}>shipped</li>
                <li onClick={() => { this.onFilterClick("delivered") }}>delivered</li>
            </ul>
        </div>
    );
}
}

export default OrderFilter;
