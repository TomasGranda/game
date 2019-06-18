import React, { createContext, useContext, useReducer } from 'react';

const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const StateContext = createContext();
export const useStateValue = () => useContext(StateContext);

export default StateProvider;