import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import MyOrdersHeader from './MyOrdersHeader.js';
import OrderList from './OrderList.js';
import Pagination from './Pagination.js';
import data from './data.js';
import OrderFilter from './OrderFilter.js'


class MyOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: data.orders,
            filteredOrderList:data.orders,
            pageSize: 5,
            currentPage: 1,
            totalPages: Math.ceil(data.orders.length / 5),
            searchInput:"",
            filter:"status",
        }
        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
        this.onSearchSubmit=this.onSearchSubmit.bind(this);
        this.onStatusChange=this.onStatusChange.bind(this);

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
        let filteredOrderList = this.state.orderList.filter((item) => {
            let lowercasedOrderRecipient = item.recipient.toLowerCase();
            let lowercasedOrderAddress=item.address.toLowerCase();
            let lowercasedOrderId=item.id.toLowerCase();
            let resultInRecipient = lowercasedOrderRecipient.indexOf(lowercasedSearchTerm);
            if (resultInRecipient > -1) {
                return true;
            }
            let resultInAddress = lowercasedOrderAddress.indexOf(lowercasedSearchTerm);
            if (resultInAddress > -1) {
                return true;
            }
            let resultInId=lowercasedOrderId.indexOf(lowercasedSearchTerm);
            if (resultInId > -1) {
                return true;
            }
            return false;
        });

        let filter=this.state.filter;
        if (filter!="status") {
            filteredOrderList=filteredOrderList.filter((item)=> {
                if (item.status == filter) {
                    return true;
                }
                return false;
            })
        }

        this.setState({
            currentPage: 1,
            filteredOrderList: filteredOrderList,
            totalPages: Math.ceil(filteredOrderList.length / this.state.pageSize),
            searchInput: lowercasedSearchTerm,
        })
    }

    onStatusChange (filter) {
        let lowercasedSearchTerm=this.state.searchInput.toLowerCase();
        let filteredOrderList = this.state.orderList.filter((item) => {
            let lowercasedOrderRecipient = item.recipient.toLowerCase();
            let lowercasedOrderAddress=item.address.toLowerCase();
            let lowercasedOrderId=item.id.toLowerCase();
            let resultInRecipient = lowercasedOrderRecipient.indexOf(lowercasedSearchTerm);
            if (resultInRecipient > -1) {
                return true;
            }
            let resultInAddress = lowercasedOrderAddress.indexOf(lowercasedSearchTerm);
            if (resultInAddress > -1) {
                return true;
            }
            let resultInId=lowercasedOrderId.indexOf(lowercasedSearchTerm);
            if (resultInId > -1) {
                return true;
            }
            return false;
        });

        if (filter!="status") {
            filteredOrderList=filteredOrderList.filter((item)=> {
                if (item.status == filter) {
                    return true;
                }
                return false;
            })
        }

        this.setState({
            currentPage: 1,
            filteredOrderList: filteredOrderList,
            totalPages: Math.ceil(filteredOrderList.length / this.state.pageSize),
            filter:filter,
        })

    }

    render() {
        const pagedOrderList = this.state.filteredOrderList.sort((a,b) => {return new Date(b.orderDate)-new Date(a.orderDate)}).slice((this.state.currentPage - 1) * this.state.pageSize, this.state.currentPage * this.state.pageSize);
        const paginationOrError = pagedOrderList.length > 0 ?
            <Pagination onPrevClick={this.onPrevClick} onNextClick={this.onNextClick} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
            : <span>No results found...</span>;
        return (
            <div className="wrapper">
                <Header showSocials={false} />
                <main>
                    <MyOrdersHeader searchSubmit={this.onSearchSubmit}/>
                    <OrderFilter onStatusChange={this.onStatusChange}/>
                    <OrderList orders={pagedOrderList}/>
                    {paginationOrError}
                </main>
                <Footer />
            </div>
        );
    }
}

export default MyOrders;
