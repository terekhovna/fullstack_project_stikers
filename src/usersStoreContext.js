import React from "react";

const UsersStoreContext = React.createContext(undefined)

export const UsersStoreProvider = UsersStoreContext.Provider;

export default UsersStoreContext;