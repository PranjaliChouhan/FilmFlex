import React from "react";

import Movies from "./Movies";
import Search from "./Search";


const Home=()=>{
   
   
   return( 
   <>
   <div className="home">
    <Search/>
    
   <Movies/>
</div>
    </>
    );
};
export default Home;