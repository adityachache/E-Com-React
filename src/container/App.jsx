import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../routes/HomePage/Homepage";
import Navigation from "../routes/Navigation/Navigation";
import SignIn from "../routes/SignIn/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<div>Shop</div>} />
          <Route path="sign-in" element={<SignIn/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
