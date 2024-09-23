import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        console.log("API called");
      });
  }, []);
  return <div>{data.length > 0 ? data[0].email : "Loading..."}</div>;
};

export default EffectTutorial;
