import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaCcAmazonPay, FaGooglePay,FaPaypal } from 'react-icons/fa';

const Payment = () => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    alert('Payment successful! Thank you for booking theater tickets.');
   
  };

  return (
    <div className="payment-container">
      <h2>Theater Ticket Payment</h2>
      <div className='payment-methods'>
        <FaPaypal size={40} className='icon'/>
        <FaCcAmazonPay size={40} className='icon'/>
        <FaGooglePay size={60} className='icon'/>
      </div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Cardholder's Name</label>
        <input
          type="text"
          id="name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
        />

        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />

        <label htmlFor="expiry">Expiration Date</label>
        <input
          type="text"
          id="expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />

        <label htmlFor="cvv">CVV</label>
        <input
          type="number"
          id="cvv"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          required
        />
        <Link to="/">
        <button type="submit" className="payment-button">Submit Payment</button>
        </Link>
      </form>
    </div>
  );
};

export default Payment;
