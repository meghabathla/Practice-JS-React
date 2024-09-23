import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [data, setdata] = useState(null);
  const [toogle, setToogle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setdata(response.data));
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return "null";

    let longestName = "";

    for (let i = 0; i < comments.length; i++) {
      let currentname = comments[i].name;
      if (currentname.length > longestName.length) {
        longestName = currentname;
      }
    }
    console.log(`this function is called`);
    console.log(longestName);
    return longestName;
  };

  const getLongestName = useMemo(() => {
    return findLongestName(data);
  }, [data]);

  return (
    <div>
      <div>{getLongestName}</div>
      <button onClick={() => setToogle(!toogle)}>Toogle</button>
      <div>{toogle && <span>Toogled me</span>}</div>
    </div>
  );
};

export default UseMemo;
