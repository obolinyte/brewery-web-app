import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import IntroSearchContainer from './IntroSearchContainer.js'
import ProductList from './ProductsList.js';
import Pagination from './Pagination.js';
import Footer from './Footer.js'
import data from './data.js';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beerList: data.beers,
            filteredBeerList: data.beers,
            pageSize: 12,
            currentPage: 1,
            totalPages: Math.ceil(data.beers.length / 12),
            filters:[],
        }
        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onFilterClick=this.onFilterClick.bind(this);
    }

    onPrevClick() {
        if (this.state.currentPage === 1) {
            return
        }
        let newPage = this.state.currentPage - 1;
        this.setState({ currentPage: newPage })
    }

    onNextClick() {
        if (this.state.currentPage === this.state.totalPages) {
            return
        }
        let newPage = this.state.currentPage + 1;
        this.setState({ currentPage: newPage })
    }

    onSearchSubmit(searchTerm) {
        let lowercasedSearchTerm = searchTerm.toLowerCase();
        let filteredProductsList = this.state.beerList.filter((product) => {
            let lowercasedProductName = product.name.toLowerCase();
            let result = lowercasedProductName.indexOf(lowercasedSearchTerm);
            if (result > -1) {
                return true;
            }
            return false;
        });
        
        this.setState({
            currentPage: 1,
            filteredBeerList: filteredProductsList,
            totalPages: Math.ceil(filteredProductsList.length / this.state.pageSize)
        })
    }

    onFilterClick (filter) {
        let activeFilters=this.state.filters;
        let result=activeFilters.indexOf(filter);
        if (result>-1) {
            activeFilters.splice(result,1);
        } else {
            activeFilters.push(filter);
        }
        console.log({filters:activeFilters})
        this.setState({filters:activeFilters})
    }

    render() {
        let pagedProductList = this.state.filteredBeerList.slice((this.state.currentPage - 1) * this.state.pageSize, this.state.currentPage * this.state.pageSize);
        let paginationOrError = pagedProductList.length > 0 ?
            <Pagination onPrevClick={this.onPrevClick} onNextClick={this.onNextClick} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
            : <span>No beers for you!</span>;
             
        return (
            <div className="wrapper">
                <Header />
                <main>
                    <IntroSearchContainer 
                    searchSubmit={this.onSearchSubmit} 
                    filterClick={this.onFilterClick}
                    filterList={this.state.filters}/>
                    <ProductList products={pagedProductList} />
                    {paginationOrError}
                </main>
                <Footer />
            </div>
        );
    }
}

export default Shop;
