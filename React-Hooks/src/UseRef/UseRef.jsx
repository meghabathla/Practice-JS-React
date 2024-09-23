import React, { useRef } from "react";

const RefTutorial = () => {
  const inputRef = useRef(null);

  const buttonClicked = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Megha</h1>
      <input type="text" placeholder="hello..." ref={inputRef} />
      <button onClick={buttonClicked}>click me</button>
    </div>
  );
};

export default RefTutorial;
