import React, { Component } from 'react';
import './App.css';

class BeerFilter extends Component {
    constructor(props) {
        super(props);
        this.getFilterClass = this.getFilterClass.bind(this);
    }

    getFilterClass (filter) {
        let result = this.props.filterList.indexOf(filter);
        if (result > -1) {
            return "beer-filter-active";
        }
        return "";
    }

    render() {
        return (
            <ul className="beer-filter-container">
                <li className={this.getFilterClass("american lager")} onClick={()=>{this.props.filterClick("american lager")}}>american lager</li>
                <li className={this.getFilterClass("european lager")} onClick={()=>{this.props.filterClick("european lager")}}>european lager</li>
                <li className={this.getFilterClass("pilsner")} onClick={()=>{this.props.filterClick("pilsner")}}>pilsner</li>
                <li className={this.getFilterClass("indian pale ale")} onClick={()=>{this.props.filterClick("indian pale ale")}}>indian pale ale</li>
                <li className={this.getFilterClass("american pale ale")} onClick={()=>{this.props.filterClick("american pale ale")}}>american pale ale</li>
                <li className={this.getFilterClass("stout")} onClick={()=>{this.props.filterClick("stout")}}>stout</li>
                <li className={this.getFilterClass("porter")} onClick={()=>{this.props.filterClick("porter")}}>porter</li>
            </ul>
        );
    }
}

export default BeerFilter;
