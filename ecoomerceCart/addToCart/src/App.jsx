import { useState } from "react";
import "./App.css";
import Item from "./component/Item";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Item name="MacBook" price="100000" />
      <Item name="Headphones" price="60000" />
      <Item name="Mobile" price="30000" />
      <Cart />
    </>
  );
}

export default App;
