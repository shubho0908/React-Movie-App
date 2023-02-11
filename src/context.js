import React, { useContext, useEffect } from "react";
const API_URL = `http://www.omdbapi.com/?apikey=20d09b0a&s=pathaan`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  return (
    <AppContext.Provider value="Shubho">
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
