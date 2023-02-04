import React from "react";
import { Routes, Route } from "react-router-dom";
import Authentication from "../routes/authentication/authentication";
import HomePage from "../routes/homepage/homepage";
import Navigation from "../routes/navigation/navigation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<div>Shop</div>} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
