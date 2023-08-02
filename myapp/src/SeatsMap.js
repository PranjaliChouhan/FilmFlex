import React, { useState } from 'react';
import Seat from './Seats';
import Bill from './Bill'; 

const SeatMap = () => {
  
  const numRows = 5;
  const numCols = 5;
  const containerCount = 5; 
  const rowLabels = ["A", "B", "C", "D", "E", "F"];

  const seatPrices = [100, 150, 150, 250,250];
  const [selectedSeatsArray, setSelectedSeatsArray] = useState(() => {
    return Array.from({ length: containerCount }, () => []);
  });

  const handleSeatSelect = (seatNumber, containerIndex) => {
    setSelectedSeatsArray((prevSelectedSeatsArray) => {
      const selectedSeatsForContainer = prevSelectedSeatsArray[containerIndex];
      if (selectedSeatsForContainer.includes(seatNumber)) {
        return prevSelectedSeatsArray.map((selectedSeats, index) =>
          index === containerIndex ? selectedSeats.filter((seat) => seat !== seatNumber) : selectedSeats
        );
      } else {
        return prevSelectedSeatsArray.map((selectedSeats, index) =>
          index === containerIndex ? [...selectedSeats, seatNumber] : selectedSeats
        );
      }
    });
  };

  const renderContainer = (containerIndex) => {
    return (
      <>
        <div key={containerIndex} className={`seats-container${containerIndex + 1}`}>
          {Array.from({ length: numRows }, (_, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              <span className="row-label">{ rowLabels[rowIndex] }:</span>
              {Array.from({ length: numCols }, (_, colIndex) => {
                const seatNumber = containerIndex * (numRows * numCols) + rowIndex * numCols + colIndex + 1;
                return (
                  <Seat
                    key={seatNumber}
                    seatNumber={seatNumber}
                    isSelected={selectedSeatsArray[containerIndex].includes(seatNumber)}
                    onSelect={(seatNumber) => handleSeatSelect(seatNumber, containerIndex)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="seat-map">
        <h2>Select Your Seats</h2>
        <div className="seats-container">
          {/* Render seats for the first container */}
          {Array.from({ length: 22 }, (_, index) => (
            <Seat
             
              key={index}
              seatNumber={index + 1}
              isSelected={selectedSeatsArray[0].includes(index + 1)}
              onSelect={(seatNumber) => handleSeatSelect(seatNumber, 0)}
            />
          ))}
        </div>

        {/* Render seats for the other containers */}
        {Array.from({ length: containerCount - 1 }, (_, containerIndex) => renderContainer(containerIndex + 1))}

        <div className="selected-seats">
          Selected Seats: {selectedSeatsArray.map((selectedSeats) => selectedSeats.join(", ")).join(" | ")}
        </div>
      </div>
      <Bill selectedSeats={selectedSeatsArray.flat()} seatPrices={seatPrices} />
    </>
  );
};

export default SeatMap;








