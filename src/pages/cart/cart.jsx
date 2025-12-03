import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";

import { useNavigate } from "react-router-dom";



export const Cart = () => {

  const { cartItems, getTotalCartAmount } = React.useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">

      <div className="shopTitle">
        <h1>Your Cart Items</h1>
      </div>

      <div  className="cartItems">
        {PRODUCTS.map((product) => {

          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }

        })}
      </div>

      {totalAmount > 0 && (
        <div className="checkout">
          <p>Subtotal: {totalAmount}€</p>
          <button onClick={() => navigate("/")}>Continue shopping</button>
          <button>Checkout</button>
        </div>
      )}

      {totalAmount === 0 && (
        <div className="emptyCart">
          <h3>Your cart is empty</h3>
          <button onClick={() => navigate("/")}>Start shopping</button>
        </div>
      )}

    </div>

)}