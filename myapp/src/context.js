//context api and usecontext are different//
//context api used for taking data from parents for this we need warehouse,provider and consumer but to create consumer was to lengthy thats why usecontext hooks used
import React from "react";
import { useContext, useEffect ,useState} from "react";

const  API_URL =   `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_VERSION}&s=logan`;                           
const AppContext=React.createContext();
// a provider created
const AppProvider=({children}) =>{
   const[isLoading,setIsLoading]=useState(true); 
   const[movie,setMovie] = useState([]);
   const[isError,setIsError]=useState({show:"false",msg:""}); 
const getMovies=async(url) =>{
try{
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    if(data.Response==="True"){
        setIsLoading(false);
        setMovie(data.Search);
    } else {
        setIsError({
            show:true,
            msg:data.error,
        });
    }

} catch(error){
  console.log(error);
}
};

useEffect(()=>{
getMovies(API_URL);
},[]);



    return( 
    <AppContext.Provider value={{isLoading,isError,movie}}>
        {children}
        </AppContext.Provider>
    );
};
    //global custom hooks
    const useGlobalContext=()=>{
        return useContext(AppContext);
    };


export   {AppContext,AppProvider,useGlobalContext};