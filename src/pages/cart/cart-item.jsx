import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {

    const {id, productName, price} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = React.useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className="cartItem">

            <div className="cartItemDetails">
                <h3>{props.data.productName}</h3>
                <p>Price: {props.data.price}€</p>
                
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>

                </div>

            </div>
        </div>
    )
}