import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class SearchBox extends Component {
    render() {
        return (
            <div className="paging-container">
                <div className="left-side-container" onClick={this.props.onPrevClick}>
                    <div className="left-arrow"></div>
                    <span className="prev">prev</span>
                </div>
                <span className="paging">{this.props.currentPage}/{this.props.totalPages}</span>
                <div className="right-side-container" onClick={this.props.onNextClick}>
                    <div className="right-arrow"></div>
                    <span className="next">next</span>
                </div>

            </div>
        );
    }
}

export default SearchBox;
