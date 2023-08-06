import React from "react";
import { Link } from "react-router-dom";

const generateRandomTime = () => {
  // Generate random time between 9 AM and 11 PM
  const hours = Math.floor(Math.random() * 15) + 9;
  const minutes = Math.floor(Math.random() * 60);
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  return formattedTime;
};

const generateRandomButtonCount = () => {
  // Generate random number of buttons (2, 3, or 4)
  return Math.floor(Math.random() * 3) + 2;
};

const MallsCard = ({ name, city, zipcode, cinemas }) => {
  return (
    <>
    <div className="mall-box">
      <h2>{name}</h2>
      <h3>{city}</h3>
      <h3>{zipcode}</h3>
      <h3>Cinemas:</h3>
      <ul >
        {cinemas.map((cinema) => (
          <li key={cinema.id}>
            {cinema.name} - Screens: {cinema.screens}, 3D: {cinema.has_3d.toString()}
          </li>
        ))}
      </ul>
     <div className="outer-btn">
        <div className="buttons-time">
       
        {[...Array(generateRandomButtonCount())].map((_, index) => (
         <Link to="SeatsMap" className="link-style">  
          <button className="btn" key={index}>
            <span>{generateRandomTime()}</span>
            </button>
         </Link> 
        ))}
      </div>
        </div>
    </div>
    </>
  );
};

export default MallsCard;
