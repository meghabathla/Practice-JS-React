import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [item, setItem] = useState([]);
  return (
    <CartContext.Provider value={{ item, setItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
