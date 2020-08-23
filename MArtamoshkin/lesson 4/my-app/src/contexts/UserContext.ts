import React from "react";

export const UserContext = React.createContext<User>({} as User);
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer; 