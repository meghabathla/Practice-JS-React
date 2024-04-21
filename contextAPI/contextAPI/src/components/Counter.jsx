import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const countState = useContext(CounterContext);
  console.log(countState);
  return (
    <div>
      <button onClick={() => countState.setCount(countState.count + 1)}>
        Increment
      </button>
      <button onClick={() => countState.setCount(countState.count - 1)}>
        Decrement
      </button>
    </div>
  );
};
//countState.setCount(countState.count - 1)
export default Counter;
