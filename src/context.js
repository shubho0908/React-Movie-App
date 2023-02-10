import React, { useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="Shubho">
      {children}
      {/*Writing "children as the object is necessary no other name"*/}
    </AppContext.Provider>
  );
};

//Global Context-
//Just to simplify the code
const GlobalContext = ()=>{
    return useContext(AppContext)
}

export { AppContext, AppProvider,GlobalContext };
