## useReducer

In React, reducers are a pattern used for managing complex state logic. They are most commonly used with the useReducer hook, which is an alternative to useState for managing state in function components, especially when the state logic depends on the previous state or becomes more complex.

## What is a Reducer?

A reducer is simply a JavaScript function that takes two arguments:

- Current state: The state at the moment when the reducer is called.
- Action: An object that describes what happened (usually containing a type field and sometimes additional data).
  The reducer function returns the new state based on the action.

Reducer Example:

```js
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

In this example, the reducer handles two actions, 'INCREMENT' and 'DECREMENT', and updates the count state accordingly.

## useReducer Hook

The useReducer hook allows you to use a reducer function to manage your state. It’s a powerful alternative to useState when your state logic grows more complex or when different state transitions depend on previous states.

Syntax:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

- reducer: The reducer function you define.
- initialState: The initial state of your component.
- state: The current state.
- dispatch: A function to send an action to the reducer.

Example of useReducer:

```js
import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

In this example:

- The Counter component uses useReducer to manage the count state.
- The dispatch function sends an action to the reducer to increment or decrement the count based on the button clicked.
- When to Use useReducer?
- When your state transitions depend on the previous state.
- When the state logic is complex (multiple sub-values or conditions).
- When you want to centralize and organize state logic.

#### useReducer vs. useState

- useState is simpler and great for local state with simple values or a small number of state transitions.

- useReducer is better suited for handling more complex state logic, especially when you have multiple state updates or when actions affect the state in different ways.
