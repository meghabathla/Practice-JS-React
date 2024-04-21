import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const item = useContext(CartContext);
  return (
    <div>
      <li>
        ${item.name} - ${item.price}
      </li>

      <h5>Total: bill</h5>
    </div>
  );
};
export default Cart;
