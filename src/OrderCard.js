import React, { Component } from 'react';
import './App.css';
import OrderItem from './OrderItem.js';
import moment from "moment";

class OrderCard extends Component {

    getOrderSum() {
        const orderItemsList=this.props.orderItems;
        let orderSum=0;
        for (let i=0; i<orderItemsList.length; i++) {
            let price=orderItemsList[i].price*orderItemsList[i].qty;
            orderSum=orderSum+price;
        }
        return orderSum.toFixed(2);
    }

    formatDate(input) {
        return moment(input).format("YYYY-MM-DD")
    }

    capitalize(input) {
            return input.charAt(0).toUpperCase() + input.slice(1);
    }
    render() {
        return (
            <div className="order-card-container">
                <div className="order-card">
                        <div className="order-card-header">
                            <div className="order-info-container">
                                <div className="order-date-container">
                                    <h4>Date</h4>
                                    <p>{this.formatDate(this.props.date)}</p>
                                </div>
                                <div className="order-id">
                                    <h4>Order ID</h4>
                                    <p>{this.props.orderId}</p>
                                </div>
                                <div className="order-status">
                                    <h4>Status</h4>
                                    <p className="order-status-type">{this.capitalize(this.props.status)}</p>
                                </div>
                            </div>
                            <div className="order-recipient-container">
                                <div className="order-recipient">
                                    <h4>Recipient</h4>
                                    <p>{this.props.recipient}</p>
                                </div>
                                <div className="delivery-address">
                                    <h4>Delivery address</h4>
                                    <p>{this.props.address}</p>
                                </div>
                                <div className="order-price">
                                    <h4>Order price</h4>
                                    <p>{this.getOrderSum()} &euro;</p>
                                </div>
                            </div>
                        </div>
                    <hr />
                    <div className="order-card-main">
                        <ul className="order-list">
                            <li className="order-list-header">
                                <span>Product</span>
                                <span>Price (&euro;)</span>
                                <span>Quantity</span>
                                <span>Total(&euro;)</span>
                            </li>
                            {this.props.orderItems.map((item) => {
                        return <OrderItem
                        name={item.beer}
                        price={item.price}
                        quantity={item.qty}
                        />
                    })}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default OrderCard;
