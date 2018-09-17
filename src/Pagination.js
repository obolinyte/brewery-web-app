import React, { Component } from 'react';
import './App.css';


class SearchBox extends Component {
    render() {
        return (
            <div className="paging-container">
                <div className="left-side-container" onClick={this.props.onPrevClick}>
                    <div className="left-arrow icon-left-open"></div>
                    <span className="prev">prev</span>
                    
                </div>
                <span className="paging">{this.props.currentPage}/{this.props.totalPages}</span>
                <div className="right-side-container" onClick={this.props.onNextClick}>
                    <span className="next">next</span>
                    <div className="right-arrow icon-right-open"></div>
                </div>

            </div>
        );
    }
}

export default SearchBox;
