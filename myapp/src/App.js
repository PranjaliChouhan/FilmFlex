import React from "react";
import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from"./Home";
import Singlemovie from"./Singlemovie";
import Error from"./Error";







function App() {
  return (
    <>
   
        <Routes>

        <Route path="/" element={<Home />} />
      
        <Route path="movie/:id" element={<Singlemovie />} />
        <Route path="*" element={<Error/>} />
        </Routes>
   
    
    </>
  );
}

export default App;
