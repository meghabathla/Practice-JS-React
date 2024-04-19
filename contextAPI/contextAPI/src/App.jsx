import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const countState = useContext(CounterContext);
  console.log(countState);
  return (
    <>
      <h1>Count {countState.count} </h1>
      <Counter />
    </>
  );
}

export default App;
