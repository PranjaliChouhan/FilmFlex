import React from "react";
import { useEffect,useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "./context";



const Singlemovie=()=>{
    const {id}=useParams();
    const[isLoading,setIsLoading]=useState(true); 
    const[movie,setMovie] = useState("");
  
 const getMovies=async(url) =>{
     setIsLoading(true);
 try{
     const res=await fetch(url);
     const data=await res.json();
     console.log(data);
     if(data.Response==="True"){
         setIsLoading(false);
         setMovie(data );
     } 
 
 } catch(error){
   console.log(error);
 }
 };  
 /* debouncing*/ 
 useEffect(()=>{
     let timerOut=setTimeout(()=>{
 getMovies(`${API_URL}&i=${id}`);  /*useeefect always retuen one fuction i.e your cleanup function */
     },800);
     return ()=> clearTimeout(timerOut);
 },[id]);
 
 
if(isLoading){
    return(
        <div className="movie-section">
            <div className="loading">Loading...</div>
        </div>
    )
}

    return(
        <>
        <section className="movie-section">

        <div className="movie-card">
         <figure>
        <img src={movie.Poster} alt=""/>
         </figure>
         <div className="card-content">
            <p className="title">{movie.Title}</p>
            
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating}</p>
            <p className="card-text">{movie.Country}</p>

              <NavLink to="/time-place" className="back-btn">Book Show</NavLink>   
            </div>   
        </div>
        </section>
        </>
    );
};
export default Singlemovie;