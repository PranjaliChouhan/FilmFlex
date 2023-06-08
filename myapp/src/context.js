//context api and usecontext are different//
//context api used for taking data from parents for this we need warehouse,provider and consumer but to create consumer was to lengthy thats why usecontext hooks used
import React from "react";
import { useContext, useEffect ,useState} from "react";

 export const  API_URL =   `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_VERSION}`;                           
const AppContext=React.createContext();
// a provider created
const AppProvider=({children}) =>{
   const[isLoading,setIsLoading]=useState(true); 
   const[movie,setMovie] = useState([]);
   const[isError,setIsError]=useState({show:"false",msg:""}); 
   const[query,setQuery] = useState("batman");
const getMovies=async(url) =>{
    setIsLoading(true);
try{
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    if(data.Response==="True"){
        setIsLoading(false);
        setIsError({
            show:false,
            msg:"",
        });
        setMovie(data.Search);
    } else {
        setIsError({
            show:true,
            msg:data.Error,
        });
    }

} catch(error){
  console.log(error);
}
};
/* debouncing*/ 
useEffect(()=>{
    let timerOut=setTimeout(()=>{
getMovies(`${API_URL}&s=${query}`);  /*useeefect always retuen one fuction i.e your cleanup function */
    },800);
    return ()=> clearTimeout(timerOut);
},[query]);



    return( 
    <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>
        {children}
        </AppContext.Provider>
    );
};
    //global custom hooks
    const useGlobalContext=()=>{
        return useContext(AppContext);
    };


export   {AppContext,AppProvider,useGlobalContext};