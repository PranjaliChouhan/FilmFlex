import React from "react";

import Movies from "./Movies";
import Search from "./Search";
import TimePlace from "./TimePlace";

const Home=()=>{
    //const name=useContext(AppContext);
   
   return( <>
    <Search/>
    
   <Movies/>
   <TimePlace/>
    </>
    );
};
export default Home;