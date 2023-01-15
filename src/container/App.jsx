import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../routes/HomePage/Homepage";
import Navigation from "../routes/Navigation/Navigation";
import Authentication from "../routes/Authentication/Authentication";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<div>Shop</div>} />
          <Route path="auth" element={<Authentication/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
