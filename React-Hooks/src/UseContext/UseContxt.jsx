import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const ContextUser = createContext(null);

const ContextTutorial = () => {
  const [username, setUserName] = useState("");
  return (
    <ContextUser.Provider value={{ username, setUserName }}>
      <Login />
      <User />
    </ContextUser.Provider>
  );
};

export default ContextTutorial;
