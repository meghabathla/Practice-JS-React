import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const cart = useCart();
  const total = cart.item.reduce((a, c) => a + parseFloat(c.price), 0);

  return (
    <div>
      <h1>Cart</h1>
      {cart &&
        cart.item.map((product) => (
          <li key={product.name}>
            {product.name}- ${product.price}
          </li>
        ))}

      <h5>Total: ${total}</h5>
    </div>
  );
};
export default Cart;
