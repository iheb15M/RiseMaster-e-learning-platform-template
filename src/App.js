import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles/main.scss";

function App() {
  return (
      <BrowserRouter basename="/RiseMaster-e-learning-platform-template">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
