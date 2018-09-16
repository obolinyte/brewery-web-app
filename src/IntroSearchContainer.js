import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox.js';
import BeerFilter from './BeerFilter';

class SearchContainer extends Component {
    render() {
        return (
            <div className="intro-search-container">
            <h1>beer?</h1>
            <SearchBox searchSubmit={this.props.searchSubmit} placeholder="i.e., jQuery"/>
            <BeerFilter filterClick={this.props.filterClick} filterList={this.props.filterList}/>
            </div>
        );
    }
}

export default SearchContainer;
