import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';



class ProductCard extends Component {
    render() {
        return (
            <Link className="product-card-container" to="#">
                <div className="product-card">
                    <img className="product-img" src={this.props.productImgSrc}></img>
                    <div className="product-card-footer">
                        <span className="product-title">{this.props.productTitle}</span>
                        <div className="alc-price-container">
                            <span className="product-alcohol">{this.props.productAlc}%</span>
                            <span className="product-price">{this.props.productPrice} &euro;</span>
                            {/* <span className="icon-shopping-cart"></span> */}
                        </div>

                    </div>

                </div>
            </Link>
        );
    }
}

export default ProductCard;
