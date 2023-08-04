import React from 'react';

const Seat = ({ seatNumber, isSelected, onSelect }) => {
  const seatClassName = isSelected ? 'seat selected' : 'seat';


  const seatStyle = {
    width: '30px',
    height: '30px',
    backgroundColor: isSelected ? 'rgb(205, 239, 239)' : 'gray',
    margin: '5px',
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '30px',
    color: isSelected ? 'black' : 'white',
    fontWeight: 'bold',
    border: '1px solid black', // Adding a border
    fontSize: '14px', // Changing the font size
  };
  
  return (
    <div style={seatStyle} className={seatClassName} onClick={() => onSelect(seatNumber)}>
      {seatNumber}
    </div>
  );
};

export default Seat;
