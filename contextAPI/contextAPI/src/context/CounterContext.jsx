import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};
