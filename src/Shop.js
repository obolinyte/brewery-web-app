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
            filter:"all",
            searchInput: "",
        }
        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onFilterClick = this.onFilterClick.bind(this);
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
        let filter=this.state.filter;
        if (filter!=="all") {
            filteredProductsList=filteredProductsList.filter((product)=> {
                if (product.style.toLowerCase() === filter.toLowerCase()) {
                    return true;
                }
                return false;
            })
        }

        this.setState({
            currentPage: 1,
            filteredBeerList: filteredProductsList,
            totalPages: Math.ceil(filteredProductsList.length / this.state.pageSize),
            searchInput: lowercasedSearchTerm,
        })
    }

    onFilterClick(filter) {
        let lowercasedSearchTerm = this.state.searchInput;
        let filteredProductsList = this.state.beerList.filter((product) => {
            let lowercasedProductName = product.name.toLowerCase();
            let result = lowercasedProductName.indexOf(lowercasedSearchTerm);
            if (result > -1) {
                return true;
            }
            return false;
        });
      

        if (filter!=="all") {
            filteredProductsList=filteredProductsList.filter((product)=> {
                if (product.style.toLowerCase() === filter.toLowerCase()) {
                    return true;
                }
                return false;
            })
        }

        this.setState({
            filter: filter,
            currentPage: 1,
            filteredBeerList: filteredProductsList,
            totalPages: Math.ceil(filteredProductsList.length / this.state.pageSize),
        })
    }

    render() {
        const pagedProductList = this.state.filteredBeerList.slice((this.state.currentPage - 1) * this.state.pageSize, this.state.currentPage * this.state.pageSize);
        const paginationOrError = pagedProductList.length > 0 ?
            <Pagination onPrevClick={this.onPrevClick} onNextClick={this.onNextClick} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
            : <span>No beers found...</span>;

        return (
            <div className="wrapper">
                <Header showSocials={true}/>
                <main>
                    <IntroSearchContainer
                        searchSubmit={this.onSearchSubmit}
                        filterClick={this.onFilterClick}
                        filter={this.state.filter} />
                    <ProductList products={pagedProductList} />
                    {paginationOrError}
                </main>
                <Footer />
            </div>
        );
    }
}

export default Shop;
