import React, { createContext, useReducer } from 'react'

// Preparing the data layer 
export const Context=createContext();
const ContextProvider = ({reducer,initialState,children}) => {
  return (
    <Context.Provider value={useReducer(reducer,initialState)}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
