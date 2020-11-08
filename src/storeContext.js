import React from "react";

const StoreContext = React.createContext(undefined)

export const StoreProvider = StoreContext.Provider;

export default StoreContext;