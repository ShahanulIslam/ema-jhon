import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {

        if(product.quantity ===0){
            product.quantity =1;
        }

        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        quantity =quantity + product.quantity
    }

    const tex = total / 100 * 7;
    const grandTotal = total + shipping + tex

    return (
        <div className='cart'>
            <h3>Order Summary </h3>
            <p>Selected item : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Shipping charge : {shipping}</p>
            <p>Tex : {tex.toFixed(2)}</p>
            <h5>Grand total: {grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;