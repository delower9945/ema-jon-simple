import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // loop Condiiton --------------- 
    // const total =cart.reduce( (total,product)=>total+product.price,0)

    // loop Condiiton ---------------
    let total = 0;
    for(let i=0; i< cart.length; i++){
        const product =cart[i];
        total= total + product.price ;
    }

    // Shippingh Charge Condition
    let shipping=0;

    if(total >1000){
        shipping = 0;
    }
    else if(total >500){
        shipping=7.41;
    }
    else if(total >0){
        shipping=12.52;
    }


    return (
        <div>
            <h2>Total list Product Numebar : {cart.length}</h2>
            <p><small>Shiping Carge :$ {shipping}</small></p>
            <p>total Price : {Math.round(total+shipping)} </p>

        </div>
    );
};

export default Cart;