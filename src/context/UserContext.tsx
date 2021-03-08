import React, { createContext, useState, FC } from "react";

import { User } from "../types/index";

const initialState = {
  token: "",
  user: {
    id: "",
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    profilePic: "",
  },
  handleSetUser: (user: User) => {},
  handleSetToken: (token: string) => {},
};

export const UserContext = createContext(initialState);

const UserProvider: FC = ({ children }) => {
  const [token, setToken] = useState<string>(initialState.token);
  const [user, setUser] = useState<User>(initialState.user);

  const handleSetUser = (newUser: User) => setUser(newUser);

  const handleSetToken = (newToken: string) => setToken(newToken);

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        handleSetUser,
        handleSetToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
