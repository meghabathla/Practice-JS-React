import React, { useEffect } from "react";

const Child = ({ returncomment }) => {
  useEffect(() => {
    console.log("Function is calleed");
  }, [returncomment]);
  return <div>{returncomment("Megha")}</div>;
};

export default Child;
