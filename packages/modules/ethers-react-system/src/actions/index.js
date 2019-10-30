import { hashCode } from '../utilities';

/**
 *
 * @param {Object} provider
 */
export const setProvider = ({ provider }) =>
  dispatch({
    type: 'SET_PROVIDER',
    payload: provider
  });

/**
 *
 * @param {Object} provider
 */
export const setProviderStatus = ({ provider }) =>
  dispatch({
    type: 'SET_PROVIDER_STATUS',
    payload: provider
  });

/* --- Library ---- */
export const loadContractIntoLibrary = ({ abi, contractName }) =>
  dispatch({
    type: 'LOAD_CONTRACT_INTO_LIBRARY_REQUEST',
    payload: {
      abi,
      contractName
    }
  });

/* --- Initialize ---- */
export const initContract = (
  { Contract, address, contractType, delta },
  dispatch
) => {
  const networks = Object.keys(Contract.networks);
  const latestAddress =
    Contract.networks[networks[networks.length - 1]].address;
  dispatch({
    type: 'INIT_CONTRACT_REQUEST',
    payload: {
      abi: Contract.abi,
      address: address || latestAddress,
      contractType
    },
    delta: delta || address
  });
};

export const initContractFromLibrary = ({ address, contractName }) =>
  dispatch({
    type: 'INIT_CONTRACT_FROM_LIBRARY_REQUEST',
    payload: {
      address,
      contractName
    }
  });

export const deployContract = ({ contract, delta, values }) =>
  dispatch({
    type: 'DEPLOY_CONTRACT_REQUEST',
    payload: {
      contract,
      values
    },
    delta: delta || (contract && contract.contractName)
  });

export const deployContractFromBytecode = (abi, bytecode, delta) =>
  dispatch({
    type: 'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST',
    input: bytecode,
    delta: delta || hashCode(abi)
  });

export const signMessageTyped = ({ message, delta }) =>
  dispatch({
    type: 'SIGN_TYPED_MESSAGE_REQUEST',
    payload: message,
    id: delta || hashCode(message.toString())
  });

export const signMessage = ({ message, delta }) =>
  dispatch({
    type: 'SIGN_MESSAGE_REQUEST',
    payload: message,
    id: delta || hashCode(message)
  });

export const sendTransaction = (transaction, delta) =>
  dispatch({
    type: 'SIGN_TRANSACTION_REQUEST',
    input: transaction,
    delta
  });
