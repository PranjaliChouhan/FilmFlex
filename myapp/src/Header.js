import React from 'react';

const Header = () => {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const handleDayClick = () => {
    // Refresh the page 
    window.location.reload();
  };

  return (
    <div className="header">
        <h1>Show-time</h1>
      {weekDays.map((day, index) => (
        <button key={index} onClick={handleDayClick}>
          <p>{day}</p>
        </button>
      ))}
    </div>
  );
};

export default Header;
