import React from "react";
import {  Routes, Route } from "react-router-dom";
import TimePlace from "./TimePlace";
import './App.css';
import Home from"./Home";
import Singlemovie from"./Singlemovie";
import SeatMap from "./SeatsMap";

function App() {
  return (
    <>
   <Routes>
             <Route path="/" element={<Home />} />
             <Route path="movie/:id" element={<Singlemovie />}/>
             <Route path="TimePlace" element={<TimePlace />} />
             <Route path="seatmap" element={<SeatMap />} /> 
          
          
             
  </Routes>
    </>
  );
}
export default App;
