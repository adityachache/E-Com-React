import React from "react";
import { Routes, Route } from "react-router-dom";
import Authentication from "../routes/authentication/authentication";
import HomePage from "../routes/homepage/homepage";
import Navigation from "../routes/navigation/navigation";
import Shop from "../routes/shop/shop";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
