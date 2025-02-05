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
import Checkout from "./components/Checkout";
import Admin from "./components/Admin";
import Login from "./components/Login";
import {CartProvider} from "react-use-cart";

export default function App() 
{
  const isAdminAuthenticated =true;
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
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/admin/login" element={<Login/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin" element={isAdminAuthenticated?<Admin/>:<Login/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  </CartProvider>
  );
}
