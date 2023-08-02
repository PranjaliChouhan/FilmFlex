import React from 'react';
import money from "./assets/money.png";

const Bill = ({ selectedSeats, seatPrices }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedSeats.forEach((seatNumber) => {
      const containerIndex = seatNumber >= 1 && seatNumber <= 16 ? 0 : seatNumber <= 36 ? 1 : seatNumber <= 72 ? 2 : 3;
      totalPrice += seatPrices[containerIndex];
    });
    return totalPrice;
  };

  const calculateCGST = () => {
    const totalAmount = calculateTotalPrice();
    const cgstRate = 0.05; // 5% CGST rate
    return totalAmount * cgstRate;
  };

  const calculateSGST = () => {
    const totalAmount = calculateTotalPrice();
    const sgstRate = 0.05; // 5% SGST rate
    return totalAmount * sgstRate;
  };

  const calculateTotalAmountWithTaxes = () => {
    const totalAmount = calculateTotalPrice();
    const cgst = calculateCGST();
    const sgst = calculateSGST();
    return totalAmount + cgst + sgst;
  };

  return (
    <div className="bill-container">
      <h2>Payment-Details</h2>
      <ul>
        {selectedSeats.map((seatNumber, index) => (
          <li key={index}>Seat {seatNumber}: Rs {seatPrices[seatNumber >= 1 && seatNumber <= 16 ? 0 : seatNumber <= 36 ? 1 : seatNumber <= 72 ? 2 : 3]}</li>
        ))}
      </ul>
      <div className='pay'>
      <div>Total Price: Rs {calculateTotalPrice()}</div>
      <div>CGST: Rs {calculateCGST()}</div>
      <div>SGST: Rs {calculateSGST()}</div>
      <div>Total Amount with Taxes: Rs {calculateTotalAmountWithTaxes()}</div>
      <button>Pay
        <img src={money} alt="notes" style={{ marginRight: "8px" }} />

      </button>
      </div>
    </div>
  );
};

export default Bill;
