import { useState } from "react";
import "./App.css";
import CheckoutStepper from "./component/stepper";
import { CHECKOUT_STEPS } from "./data";

function App() {
  return (
    <>
      <h2>checkout</h2>
      <CheckoutStepper steps={CHECKOUT_STEPS} />
    </>
  );
}

export default App;
