import React from "react";

const EditContext = React.createContext((id)=>{})

export const EditProvider = EditContext.Provider;

export default EditContext;