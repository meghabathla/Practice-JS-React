import React, { useCallback, useState } from "react";
import Child from "./Child";

const CallbackTutorial = () => {
  const [data, setData] = useState("");
  const [toogle, setToogle] = useState(false);
  const returncomment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <Child returncomment={returncomment} />
      <button onClick={() => setToogle(!toogle)}>toogle</button>
      <div>{toogle && <span>Toogled Callback hook</span>}</div>
    </div>
  );
};

export default CallbackTutorial;
