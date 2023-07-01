import React from "react";
import {  Routes, Route } from "react-router-dom";
import TimePlace from "./TimePlace";
import './App.css';
import Home from"./Home";
import Singlemovie from"./Singlemovie";
import Error from"./Error";







function App() {
  return (
    <>
   
        <Routes>
        

             <Route path="/" element={<Home />} />
             <Route path="time-place" element={<TimePlace/>}/>
             <Route path="movie/:id" element={<Singlemovie />} />
             <Route path="*" element={<Error/>} />
        
        </Routes>
    
    </>
  );
}

export default App;
