import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const product10 =fakeData.slice(0,10);
    const [products, setProducts] = useState(product10);
    const [cart, setCart]= useState([])

    const handelAddProduct = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(pd => 
                        <Product 
                            handelAddProduct={handelAddProduct}
                            product={pd} >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
           
        </div>
    );
};

export default Shop;