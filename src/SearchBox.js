import React, { Component } from 'react';
import './App.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchSubmit(this.state.value);
    }
    render() {
        return (
            <form className="search-box" onSubmit={this.handleSubmit}>
                <input type="text" className="search-input" placeholder="i.e., pilsner" value={this.state.value} onChange={this.handleChange}></input>
                <button type="submit" className="search-submit icon-search"></button>
            </form>
        );
    }
}

export default SearchBox;
