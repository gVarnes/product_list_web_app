import React from "react";
import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Wrapper from "./components/Wrapper";
import ProductView from "./components/ProductView/component";
import Portal from "./config/Portal";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Wrapper />}></Route>
          <Route path="/:id" element={<ProductView />}></Route>
        </Routes>
      </div>
      <Portal />
    </div>
  );
}

export default App;
