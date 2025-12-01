import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

// Optional: in the future you can import an image like this:
// import logo from '../assets/logo.png';
// and uncomment the <img> tag inside the brand div below.

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-inner">
        <div className="brand">
          {/* placeholder brand text (replace with an <img src={logo} alt="Logo" /> when available) */}
          <span>Character Cases</span>
          {/* Example image using an imported asset: */}
          {/* <img src={logo} alt="MyShop logo" /> */}
        </div>
        <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
}