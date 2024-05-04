import { createContext, useState } from "react";
import { useContext } from "react";

export const CartContext = createContext(null);
export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

export const CartContextProvider = (props) => {
  const [item, setItem] = useState([]);
  return (
    <CartContext.Provider value={{ item, setItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
