import React from "react";
import "./assets/css/styling.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

import { CartProvider } from "react-use-cart";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          
        </div>
      </Router>
    </CartProvider>
  );
}