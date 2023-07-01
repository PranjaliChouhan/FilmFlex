import React from "react";
import { useEffect,useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "./context";



const TimePlace=()=>{
    const {id}=useParams();
    
   const[movie,setMovie] = useState("");
  
 const getMovies=async(url) =>{
     
 try{
     const res=await fetch(url);
     const data=await res.json();
     console.log(data);
     if(data.Response==="True"){
         
         setMovie(data );
     } 
 
 } catch(error){
   console.log(error);
 }
 };  
 /* debouncing*/ 
 useEffect(()=>{
     let timerOut=setTimeout(()=>{
 getMovies(`${API_URL}&i=${id}`);  /*useeffect always return one fuction i.e your cleanup function */
     },500);
     return ()=> clearTimeout(timerOut);
 },[id]);
 
 


    return(
        <>
            <div className="place">
            <p className="title">{movie.Title}</p>
            <NavLink></NavLink>
           
            </div>
        
        </>
    );
};
export default TimePlace;