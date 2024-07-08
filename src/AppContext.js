// AppContext.js
import React, { createContext, useReducer, useContext } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const initialState = {
    RcnData: null,
    RcmData: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_RCN_DATA':
        return {
          ...state,
          RcnData: action.payload,
        };
      case 'UPDATE_RCM_DATA':
        return {
          ...state,
          RcmData: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}