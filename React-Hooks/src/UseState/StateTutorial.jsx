import React, { useState } from "react";

const StateTutorial = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const handleUpdate = (operation) => {
    setCount((prev) => (operation === "add" ? prev + 1 : prev - 1));
  };

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => handleUpdate("add")}>Add</button>
      {"  "}
      <button onClick={() => handleUpdate("subtract")}>Subtract</button>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your name here"
      />
      <div>{value}</div>
    </>
  );
};

export default StateTutorial;
