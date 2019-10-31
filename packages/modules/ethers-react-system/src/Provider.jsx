import React, { useContext, useReducer, useEffect } from 'react';
import Context from './Context';
import reducers from './reducer';
import ProviderEffects from './effects';
import * as actions from './actions';

const Provider = ({ children, ...props }) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducers, initialState);
  ProviderEffects(useEffect, state, dispatch);
  return (
    <Context.Provider
      value={{
        ...state,
        dispatch,
        enable: window.ethereum.enable,
        ...actions
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
