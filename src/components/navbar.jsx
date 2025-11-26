import React from "react";
import {Link} from 'react-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
        <h2>Navbar component</h2>
        <div className="links">
            <Link to="/Shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </div>
  );
}