import React from "react";
//import {AppContext} from "./Components/context";
//import {useGlobalContext} from "./Components/context";
import Movies from "./Movies";
import Search from "./Search";
const Home=()=>{
    //const name=useContext(AppContext);
   
   return( <>
    <Search/>
    
   <Movies/>
    </>
    );
};
export default Home;