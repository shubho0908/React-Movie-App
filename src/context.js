import React, { useContext, useEffect, useState } from "react";
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [IsLoading, setIsLoading] = useState(true)
  const [Movies, setMovies] = useState([])
  const[IsError,  setIsError] = useState({show: "False", msg: ""})
  const[search, setSearch] = useState("Avengers")

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false)
        setMovies(data.Search)
      }
      else{
        setIsError({
          show:true,
          msg:data.error
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(`${API_URL}&s=${search}`);
  }, [search]);

  return (
    // The data set in the "value" is what going to be shown in the page 
    <AppContext.Provider value={{IsLoading, IsError, Movies, search, setSearch}}>
      {children}
      {/*Writing "children as the object is necessary no other name"*/}
    </AppContext.Provider>
  );
};

//Global Context-
//Just to simplify the code
const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, GlobalContext };
