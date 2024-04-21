import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = (props) => {
  const cart = useContext(CartContext);
  return (
    <div>
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button
        onClick={() => {
          cart.setItem([...cart.item], {
            name: props.name,
            price: props.price,
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
