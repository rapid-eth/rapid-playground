import { hashCode, getLatestDeploymentAddress } from '../utilities';
import { ethers } from 'ethers';
import { INIT_CONTRACT_REQUEST } from '../../dist/actions/types';
/**
 *
 * @param {Object} provider
 */
export const setProvider = (state, dispatch) => ({ provider }) =>
  dispatch({
    type: 'SET_PROVIDER',
    payload: provider
  });

/**
 *
 * @param {Object} provider
 */
export const setProviderStatus = (state, dispatch) => ({ provider }) =>
  dispatch({
    type: 'SET_PROVIDER_STATUS',
    payload: provider
  });

/* --- Library ---- */
export const loadContractIntoLibrary = (state, dispatch) => ({
  abi,
  contractName
}) =>
  dispatch({
    type: 'LOAD_CONTRACT_INTO_LIBRARY_REQUEST',
    payload: {
      abi,
      contractName
    }
  });

/**
 * @summary This function will take the built smart contracts(and a optional deployed address param)
 * and initialize the smart contract with the deployed version. By default it will pull the latest deployed address from the JSON file.
 * @name initContract
 * @param {Object} actionProps
 * @param {Function} dispatch - the reducer dispatch function which send the payload, type and id
 * to the associated reducer.
 * @param {Object} wallet The wallet of the current application user.
 * As provided by metamask, dapp browser or whichever other provider is triggered by ethereum.enable()
 * ! @NOTE The Contract parameter is assumed to follow the general structure resulting from compiling via the truffle (ie it has the abi, networks used, etc)
 * TODO @todo add extensive error checking
 */
export const initContract = (state, dispatch) => ({ Contract, address }) => {
  const { wallet } = state;
  if (wallet === undefined) {
    return;
  }
  const latestAddress = getLatestDeploymentAddress(Contract);
  const contract = new ethers.Contract(latestAddress, Contract.abi, wallet);
  dispatch({
    type: INIT_CONTRACT_REQUEST,
    id: hashCode(Contract),
    payload: {
      contract,
      address: address || latestAddress
    }
  });
};

export const initContractFromLibrary = (state, dispatch) => (
  { address, contractName },
  dispatch
) =>
  dispatch({
    type: 'INIT_CONTRACT_FROM_LIBRARY_REQUEST',
    payload: {
      address,
      contractName
    }
  });

export const deployContract = (state, dispatch) => (
  { contract, delta, values },
  dispatch
) =>
  dispatch({
    type: 'DEPLOY_CONTRACT_REQUEST',
    payload: {
      contract,
      values
    },
    delta: delta || (contract && contract.contractName)
  });

export const deployContractFromBytecode = (state, dispatch) => (
  abi,
  bytecode,
  delta,
  dispatch
) =>
  dispatch({
    type: 'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST',
    input: bytecode,
    delta: delta || hashCode(abi)
  });

export const signMessageTyped = (state, dispatch) => (
  { message, delta },
  dispatch
) =>
  dispatch({
    type: 'SIGN_TYPED_MESSAGE_REQUEST',
    payload: message,
    id: delta || hashCode(message.toString())
  });

export const signMessage = (state, dispatch) => ({ message, delta }) =>
  dispatch({
    type: 'SIGN_MESSAGE_REQUEST',
    payload: message,
    id: delta || hashCode(message)
  });

export const sendTransaction = (state, dispatch) => (
  transaction,
  delta,
  dispatch
) =>
  dispatch({
    type: 'SIGN_TRANSACTION_REQUEST',
    input: transaction,
    delta
  });
