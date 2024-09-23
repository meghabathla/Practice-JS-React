import React, { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = "Megha";
  }, []);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <input
        type="text"
        value="Shobhit"
        placeholder="enter...."
        ref={inputRef}
      />
    </div>
  );
};

export default LayoutEffectTutorial;
