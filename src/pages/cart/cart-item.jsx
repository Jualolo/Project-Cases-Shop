import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {

    const {id, productName, price, image} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = React.useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className="cartItem">

            <div className="cartItemDetails">
                <img src={image} alt="" />
                <h3>{productName}</h3>
                <p>Price: {price}€</p>
                
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>

                </div>

            </div>
        </div>
    )
}