import React, { useContext, useReducer, useEffect } from 'react';
import Context from './Context';
import reducers from './reducer';
import ProviderEffects from './effects';
import { enhanceActions } from './middleware/actions';
import { initialize } from './middleware/initialize';
/**
 * @summary A React Context Provider that provides a simple interface to most ethers.js functionality.
 * It allows for easy contract management and querying/transactions of the smart contracts.
 * @param {Array<React.Component>} children
 * @param {Array} contracts
 * @param {String} provider
 * @todo Add hooks to query smart contracts
 * @todo Add dispatch async/await
 * @todo Add better error handling
 * @todo Add option to initialize a contract not deployed
 */
const Provider = ({ children, contracts, provider }) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(
    reducers,
    initialState,
    initialize(contracts, provider)
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
