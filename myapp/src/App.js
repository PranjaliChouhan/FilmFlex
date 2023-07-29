import React from "react";
import {  Routes, Route } from "react-router-dom";
import TimePlace from "./TimePlace";
import './App.css';
import Home from"./Home";
import Singlemovie from"./Singlemovie";








function App() {
  return (
    <>
   
        <Routes>
        

             <Route path="/" element={<Home />} />
             <Route path="movie/:id" element={<Singlemovie />} />
             <Route path="*" element={<TimePlace/>}/>
             
           
        </Routes>
    
    </>
  );
}

export default App;
