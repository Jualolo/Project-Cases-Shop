import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {

    const {id, productName, price, image} = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div className="product">
            <div>
                <img src={image} alt="no image" />
            </div>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>{price}€</p>
            </div>
            <button className="addToCartButton" onClick={() => addToCart(id)}>
                Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
            <p></p>
        
        </div>
    )
}