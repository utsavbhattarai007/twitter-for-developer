import React, { createContext, useEffect, useState } from "react";
import provider from "./axios";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  let token = localStorage.getItem("token");
  console.log(token);
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState();

  // fetch user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await provider.get(`/user/profile/${token}`);
        console.log(res.data);
        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      fetchUser();
    }
  }, []);

  return (
    <>
      <ContextProvider.Provider
        value={{
          t: [theme, setTheme],
          userDetails: [user, setUser],
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
