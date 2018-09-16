import React, { Component } from 'react';
import './App.css';
import OrderCard from './OrderCard.js';

class OrderList extends Component {
    render() {
        return (
            <div className="order-list-container">
            {this.props.orders.map((order) => {
                        return <OrderCard
                        date={order.orderDate}
                        orderId={order.id}
                        status={order.status} 
                        recipient={order.recipient}
                        address={order.address}
                        orderItems={order.orderItems}
                        />
                    })}
           
            </div>
        );
    }
}

export default OrderList;
