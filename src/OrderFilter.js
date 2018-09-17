import React, { Component } from 'react';
import './App.css';

class OrderFilter extends Component {
constructor(props) {
    super(props);

    this.state={
        value:"status",
    }

    this.handleChange=this.handleChange.bind(this);
}

handleChange(event) {
 this.setState({value:event.target.value});
 this.props.onStatusChange(event.target.value);
}

    render() {
        return (
            <div className="order-filter">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="status">sort by status</option>
                    <option value="pending payment">Pending payment</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                </select>
                
            </div>
        );
    }
}

export default OrderFilter;
