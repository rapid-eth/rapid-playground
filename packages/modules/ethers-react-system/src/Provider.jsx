import React, { useContext, useReducer, useEffect } from 'react';
import Context from './Context';
import reducers from './reducer';
import ProviderEffects from './effects';
import { enhanceActions } from './middleware/actions';

/**
 * @todo add reducer middleware
 * @todo add initialization function
 */
const Provider = ({ children, ...props }) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducers, initialState);
  const actions = enhanceActions(state, dispatch);
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
