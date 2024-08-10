import React, { useState } from 'react';
import { useCart } from 'react-use-cart';

const Checkout = () => {
    const { items, cartTotal, emptyCart } = useCart();
    const [form, setForm] = useState({
        name: '',email: '',address: '',cardName: '',cardNumber: '',expiry: '',cvv: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleCardNumberChange = (e) => {
        const input = e.target.value;
        const formattedCardNumber = input.split(' ').join('').match(/.{1,4}/g)?.join(' ') || '';
        setForm({ ...form, cardNumber: formattedCardNumber });
    };

    const handlePlaceOrder = () => {
        // Clear the form fields after submission to mimic a real-world scenario.
        setForm({
            name: '',email: '',address: '',cardName: '',cardNumber: '',expiry: '',cvv: ''
        });
        alert('Your order will delivered soon... thanks for shopping with us');
        emptyCart(); // Clears the cart after placing the order
    };

    return (
        <div className="container checkout-container">
            <h2 className="text-center">Checkout</h2>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="form-control"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="form-control"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleInputChange}
                    className="form-control"
                />
                <input
                    type="text"
                    name="cardName"
                    placeholder="Name on Card"
                    value={form.cardName}
                    onChange={handleInputChange}
                    className="form-control"
                />
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={form.cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength="19"
                    className="form-control"
                />
                <input
                    type="text"
                    name="expiry"
                    placeholder="Expiry (MM/YY)"
                    value={form.expiry}
                    onChange={handleInputChange}
                    maxLength="5"
                    className="form-control"
                />
                <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={form.cvv}
                    onChange={handleInputChange}
                    maxLength="3"
                    className="form-control"
                />
            </div>
            <h3 className="text-center">Order Summary</h3>
            <ul className="list-group mt-3">
                {items.map((item, index) => (
                    <li className="list-group-item" key={index}>
                        {item.title} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <h4 className="text-center mt-3">Total: ${cartTotal}</h4>
            <button onClick={handlePlaceOrder} className="btn btn-primary mt-3">Place Order</button>
        </div>
    );
};

export default Checkout;