import React, { Component } from 'react';
import './App.css';

class OrderItem extends Component {
    render() {
        return (
            <li className="order-item">
                <span>{this.props.name}</span>
                <span>{this.props.price}</span>
                <span>{this.props.quantity}</span>
                <span>{(this.props.price*this.props.quantity).toFixed(2)}</span>
            </li>
        );
    }
}

export default OrderItem;
