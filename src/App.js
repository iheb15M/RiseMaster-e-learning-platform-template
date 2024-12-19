import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles/main.scss";
import Notfound from "./pages/errors/Notfound";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
