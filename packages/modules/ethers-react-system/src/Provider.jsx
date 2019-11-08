import React, { useContext, useReducer, useEffect } from 'react';
import Context from './Context';
import reducers from './reducer';
import ProviderEffects from './effects';
import { enhanceActions } from './middleware/actions';
import { initialize } from './middleware/initialize';
/**
 * @todo add reducer middleware
 * @todo Add hooks to query smart contracts
 * @todo Add dispatch async/await
 */
const Provider = ({ children, contracts }) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(
    reducers,
    initialState,
    initialize(contracts)
  );
  const actions = enhanceActions(state, dispatch);
  ProviderEffects(useEffect, state, dispatch);
  return (
    <Context.Provider
      value={{
        ...state,
        dispatch,
        enable: window.ethereum ? window.ethereum.enable : state.enable,
        ...actions
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
