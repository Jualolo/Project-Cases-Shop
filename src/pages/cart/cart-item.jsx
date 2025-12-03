import React from "react";

export const CartItem = (props) => {

    const {id, productName, price} = props.data;

    return (
        <div className="cartItem">

            <div className="cartItemDetails">
                <h3>{props.data.productName}</h3>
                <p>Price: {props.data.price}€</p>
                <p>Quantity: {/* Quantity logic to be added */}</p>
            </div>
        </div>
    )
}