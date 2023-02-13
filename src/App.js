import React from "react";
import "./App.css";
import Home from "./Home";
import DetailPage from "./DetailPage";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="movie/:id" element={<DetailPage />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
