import React from 'react';

const Cart = ({ cart }) => {
    let total = 0
    let totalShipping = 0
    for (const product of cart) {
        total = total + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tax = total * 7 / 100
    const grandTotal = total + totalShipping + tax;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;