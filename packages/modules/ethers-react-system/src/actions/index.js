import {
  hashCode,
  generateNewContracts,
  networkRouting,
  getContract
} from '../utilities';
import { ethers } from 'ethers';
import {
  INIT_CONTRACT_REQUEST,
  SET_WALLET,
  SIGN_TRANSACTION_REQUEST,
  SIGN_MESSAGE
} from './types';
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
 * and initialize the smart contract with the deployed version.
 * By default it will pull the latest deployed address from the JSON file.
 *
 * @param {Object} Contract The smart contract build object. Assumed to follow the general structure resulting
 * from compiling via the truffle(ie it has the abi, networks used, etc)
 *
 * @param {String} address optional parameter that specifies the deployment address to initialize the contract with.
 * In the event you need to initialize with a contract that is not the latest deployed.
 *
 * TODO @todo add extensive error checking
 */
export const initContract = (state, dispatch) => (Contract, address) => {
  const { wallet, defaultProvider } = state;
  if (wallet === undefined || Contract === undefined) {
    return;
  }

  try {
    const [contract, latestAddress, contractID] = getContract(
      contract,
      defaultProvider
    );
    dispatch({
      type: INIT_CONTRACT_REQUEST,
      id: contractID,
      payload: {
        contract,
        address: address || latestAddress
      }
    });
  } catch (error) {
    console.log(error);
    return;
  }
};

export const initContractFromLibrary = (state, dispatch) => ({
  address,
  contractName
}) =>
  dispatch({
    type: 'INIT_CONTRACT_FROM_LIBRARY_REQUEST',
    payload: {
      address,
      contractName
    }
  });

export const deployContract = (state, dispatch) => ({
  contract,
  delta,
  values
}) =>
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
  delta
) =>
  dispatch({
    type: 'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST',
    input: bytecode,
    delta: delta || hashCode(abi)
  });

export const signMessageTyped = (state, dispatch) => ({ message, delta }) =>
  dispatch({
    type: 'SIGN_TYPED_MESSAGE_REQUEST',
    payload: message,
    id: delta || hashCode(message.toString())
  });

/**
 * @summary The action creator will receive a message
 * and a optional messageID that will be utilized as the reference in the 'messages' state object.
 * It will sign the given message and then dispatch the action with the message as the payload
 * @param {String} message message to be signed
 * @param {String} messsageID optional ID for the message (to be referenced in the state object)
 */
export const signMessage = (state, dispatch) => async (message, messageID) => {
  const { wallet } = state;
  if (wallet === undefined) {
    return;
  }
  //the basic signed message. It will be necessary to utilize the 'splitSignature' function to use it with solidity.
  //https://docs.ethers.io/ethers.js/html/cookbook-signing.html
  const flatSig = await wallet.signMessage(message);
  dispatch({
    type: SIGN_MESSAGE,
    payload: flatSig,
    id: messageID || hashCode(message)
  });
};

/**
 *
 * @param {String} contractID
 * @param {String} functionName
 * @param {Array} params
 */
export const sendTransaction = (state, dispatch) => (
  contractID,
  functionName,
  params = []
) => {
  const contract = state.contracts[contractID];
  const contractFunction = contract[functionName];
  contractFunction(...params).then(tx => {
    console.log(tx);
    return dispatch({
      type: SIGN_TRANSACTION_REQUEST,
      id: contractID,
      payload: tx.toNumber()
    });
  });
};

/**
 * @summary
 */
export const generateWallet = (state, dispatch) => () => {
  if (state.wallet) {
    return;
  }
  const randomWallet = ethers.Wallet.createRandom();
  const provider =
    networkRouting(state.provider) ||
    networkRouting('metamask') ||
    networkRouting('json');
  const wallet = new ethers.Wallet(randomWallet.privateKey, provider);
  const contracts = generateNewContracts(state.contracts, wallet);
  dispatch({
    type: SET_WALLET,
    payload: { wallet, address: wallet.address, contracts }
  });
};
