import React from "react";
import Home from "./Home";
import DetailPage from './DetailPage'
import Error from "./Error";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="movie/:id" element={<DetailPage/>}/>
          <Route exact path="*" element={<Error/>}/>
        </Routes>
    </>
  );
};

export default App;
