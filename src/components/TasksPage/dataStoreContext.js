import React from "react";

const DataStoreContext = React.createContext(undefined)

export const StoreProvider = DataStoreContext.Provider;

export default DataStoreContext;