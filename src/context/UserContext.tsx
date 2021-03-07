import React, { createContext, useState, FC } from "react";

import { User } from "../types/index";

const initialState = {
  user: {
    id: "",
    firstName: "name",
    lastName: "",
    role: "",
    email: "",
  },
  handleSetUser: (user: User) => {},
};

export const UserContext = createContext(initialState);

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>(initialState.user);

  const handleSetUser = (newUser: User) => setUser(newUser);

  return (
    <UserContext.Provider
      value={{
        user,
        handleSetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
