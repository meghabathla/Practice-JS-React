import React, { useRef } from "react";
import Button from "./Button";

const ImperativeHandle = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          inputRef.current.alterToogle();
        }}
      >
        Button from Parent
      </button>
      <Button ref={inputRef} />
    </div>
  );
};

export default ImperativeHandle;
