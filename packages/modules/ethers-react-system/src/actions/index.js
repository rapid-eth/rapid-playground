import {
  hashCode,
  generateNewContracts,
  networkRouting,
  getContract
} from '../utilities';
import { ethers } from 'ethers';
import {
  INIT_CONTRACT,
  SET_WALLET,
  SIGN_TRANSACTION,
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
 * @param {String} givenAddress optional parameter that specifies the deployment address to initialize the contract with.
 * In the event you need to initialize with a contract that is not the latest deployed.
 *
 * TODO @todo add extensive error checking
 */
export const initContract = (state, dispatch) => (Contract, givenAddress) => {
  const { wallet, defaultProvider } = state;
  if (wallet === undefined || Contract === undefined) {
    return;
  }

  try {
    const [contract, address, contractID] = getContract(
      contract,
      defaultProvider,
      { givenAddress }
    );
    dispatch({
      type: INIT_CONTRACT,
      id: contractID,
      payload: {
        contract,
        address
      }
    });
  } catch (error) {
    throw new Error('Error occured while initialization contract: ', error);
  }
};

export const deployContract = (state, dispatch) => (contractID, params) =>
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
    return dispatch({
      type: SIGN_TRANSACTION,
      id: contractID,
      payload: tx.toNumber()
    });
  });
};

/**
 * @summary
 */
export const generateWallet = (state, dispatch) => () => {
  const { contracts, provider } = state;
  if (state.wallet) {
    return;
  }
  const randomWallet = ethers.Wallet.createRandom();
  // const provider = networkRouting(provider) || networkRouting('json');
  const wallet = new ethers.Wallet(randomWallet.privateKey, provider);
  const newContracts = generateNewContracts(contracts, wallet);
  dispatch({
    type: SET_WALLET,
    payload: { wallet, address: wallet.address, contracts: newContracts }
  });
};
