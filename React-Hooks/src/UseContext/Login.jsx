import React, { useContext } from "react";
import { ContextUser } from "./UseContxt";

const Login = () => {
  const { setUserName } = useContext(ContextUser);
  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
};

export default Login;
