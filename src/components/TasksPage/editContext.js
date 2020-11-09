import React from "react";
//TODO maybe remove edit context
const EditContext = React.createContext((id)=>{})

export const EditProvider = EditContext.Provider;

export default EditContext;