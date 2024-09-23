import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, showText: state.showText };
    case "ToggleText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "ToggleText" });
        }}
      >
        Click here
      </button>
      {state.showText && <p>hello world</p>}
    </>
  );
};

export default ReducerTutorial;
