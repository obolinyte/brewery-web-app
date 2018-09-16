import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox.js';

class MyOrdersHeader extends Component {
    render() {
        return (
            <div className="orders-header-container">
                <div className="orders-header">
                    <h1>my orders</h1>
                    <div className="orders-search-container">
                        <SearchBox searchSubmit={this.props.searchSubmit} placeholder="search by ID, recipient or address"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyOrdersHeader;
