import React from 'react';

const Seat = ({ seatNumber, isSelected, onSelect }) => {
  const seatClassName = isSelected ? 'seat selected' : 'seat';


  const seatStyle = {
    width: '30px',
    height: '30px',
    backgroundColor: isSelected ? 'green' : 'gray',
    margin: '5px',
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '30px',
    color: isSelected ? 'white' : 'black',
    fontWeight: 'bold',
    border: '1px solid black', // Adding a border
    fontSize: '14px', // Changing the font size
  };
  
  return (
    <div style={seatStyle} id="seat-dec" className={seatClassName} onClick={() => onSelect(seatNumber)}>
      {seatNumber}
    </div>
  );
};

export default Seat;
