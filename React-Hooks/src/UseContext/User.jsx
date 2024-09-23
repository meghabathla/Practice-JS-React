import React, { useContext } from "react";
import { ContextUser } from "./UseContxt";

const User = () => {
  const { username } = useContext(ContextUser);
  return <div>User:{username}</div>;
};

export default User;
