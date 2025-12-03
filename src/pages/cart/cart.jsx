import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";



export const Cart = () => {

  const { cartItems } = React.useContext(ShopContext);

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

    </div>

)}