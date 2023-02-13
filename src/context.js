import React, { useContext, useEffect, useState } from "react";
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [IsLoading, setIsLoading] = useState(true);
  const [Movies, setMovies] = useState([]);
  const [IsError, setIsError] = useState({ show: "False", msg: "" });
  const [search, setSearch] = useState("Avengers");

  const getMovies = async (url) => {
    try {
      setIsLoading(true)
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data.Search);
        setIsError({
          show: false,
          msg: null,
        });

      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let TimeOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${search}`);
    }, 580);

    // clearTimeout function basically clears the timer set with SetTimOut()
    //Used it avoid multiple API request for each and every letter
    return()=> clearTimeout(TimeOut)
  }, [search]);

  return (
    // The data set in the "value" is what going to be shown in the page
    <AppContext.Provider
      value={{ IsLoading, IsError, Movies, search, setSearch }}
    >
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

export { AppContext, AppProvider, GlobalContext};
