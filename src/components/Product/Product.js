import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img,name,seller,price} =props.product;
    return (
        <div className="single-product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="single-name">
                <h3>{name}</h3>
                <p style={{color: 'green'}} ><small >by: {seller} </small></p>
                <p>${price}</p>
                <br />
                <button className="main-button" 
                onClick={() => props.handelAddProduct(props.product)}
                >
                <FontAwesomeIcon icon={faCoffee} />Add to Cart </button>

            </div>
        </div>
    );
};

export default Product; 