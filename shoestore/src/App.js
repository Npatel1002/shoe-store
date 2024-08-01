import React from "react";
import "./assets/css/styling.css";
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Profile from "./components/Profile";
import {CartProvider} from "react-use-cart";

export default function App() 
{
  return (
  <CartProvider>
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  </CartProvider>
  );
}
