import React, { Component } from 'react';
import './App.css';
import ProductCard from './ProductCard.js';


class ProductsList extends Component {
    render() {
        return (
            <div className="products-list-container">
                <div className="products-list">
                    {this.props.products.map((product) => {
                        return <ProductCard
                        productImgSrc={"./" + product.img}
                        productTitle={product.name}
                        productAlc={product.alcohol}
                        productPrice={product.price} />
                    })}
                    
              
                </div>
            </div>
        );
    }
}

export default ProductsList;
