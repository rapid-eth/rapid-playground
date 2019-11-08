"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateWallet = exports.sendTransaction = exports.signMessage = exports.signMessageTyped = exports.deployContractFromBytecode = exports.deployContract = exports.initContractFromLibrary = exports.initContract = exports.loadContractIntoLibrary = exports.setProviderStatus = exports.setProvider = void 0;

var _utilities = require("../utilities");

var _ethers = require("ethers");

var _types = require("./types");

/**
 *
 * @param {Object} provider
 */
var setProvider = (state, dispatch) => (_ref) => {
  var {
    provider
  } = _ref;
  return dispatch({
    type: 'SET_PROVIDER',
    payload: provider
  });
};
/**
 *
 * @param {Object} provider
 */


exports.setProvider = setProvider;

var setProviderStatus = (state, dispatch) => (_ref2) => {
  var {
    provider
  } = _ref2;
  return dispatch({
    type: 'SET_PROVIDER_STATUS',
    payload: provider
  });
};
/* --- Library ---- */


exports.setProviderStatus = setProviderStatus;

var loadContractIntoLibrary = (state, dispatch) => (_ref3) => {
  var {
    abi,
    contractName
  } = _ref3;
  return dispatch({
    type: 'LOAD_CONTRACT_INTO_LIBRARY_REQUEST',
    payload: {
      abi,
      contractName
    }
  });
};
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


exports.loadContractIntoLibrary = loadContractIntoLibrary;

var initContract = (state, dispatch) => (Contract, address) => {
  var {
    wallet
  } = state;

  if (wallet === undefined || Contract === undefined) {
    return;
  }

  try {
    var latestAddress = (0, _utilities.getLatestDeploymentAddress)(Contract);
    var contract = new _ethers.ethers.Contract(latestAddress, Contract.abi, wallet);
    dispatch({
      type: _types.INIT_CONTRACT_REQUEST,
      id: (0, _utilities.hashCode)(Contract),
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

exports.initContract = initContract;

var initContractFromLibrary = (state, dispatch) => (_ref4) => {
  var {
    address,
    contractName
  } = _ref4;
  return dispatch({
    type: 'INIT_CONTRACT_FROM_LIBRARY_REQUEST',
    payload: {
      address,
      contractName
    }
  });
};

exports.initContractFromLibrary = initContractFromLibrary;

var deployContract = (state, dispatch) => (_ref5) => {
  var {
    contract,
    delta,
    values
  } = _ref5;
  return dispatch({
    type: 'DEPLOY_CONTRACT_REQUEST',
    payload: {
      contract,
      values
    },
    delta: delta || contract && contract.contractName
  });
};

exports.deployContract = deployContract;

var deployContractFromBytecode = (state, dispatch) => (abi, bytecode, delta) => dispatch({
  type: 'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST',
  input: bytecode,
  delta: delta || (0, _utilities.hashCode)(abi)
});

exports.deployContractFromBytecode = deployContractFromBytecode;

var signMessageTyped = (state, dispatch) => (_ref6) => {
  var {
    message,
    delta
  } = _ref6;
  return dispatch({
    type: 'SIGN_TYPED_MESSAGE_REQUEST',
    payload: message,
    id: delta || (0, _utilities.hashCode)(message.toString())
  });
};

exports.signMessageTyped = signMessageTyped;

var signMessage = (state, dispatch) => (_ref7) => {
  var {
    message,
    delta
  } = _ref7;
  return dispatch({
    type: 'SIGN_MESSAGE_REQUEST',
    payload: message,
    id: delta || (0, _utilities.hashCode)(message)
  });
};
/**
 *
 * @param {String} contractID
 * @param {String} functionName
 * @param {Array} params
 */


exports.signMessage = signMessage;

var sendTransaction = (state, dispatch) => (contractID, functionName, params) => {
  var contract = state.contracts[contractID];
  var contractFunction = contract[functionName];
  contractFunction(...params).then(tx => {
    dispatch({
      type: _types.SIGN_TRANSACTION_REQUEST,
      input: tx
    });
  });
};

exports.sendTransaction = sendTransaction;

var generateWallet = (state, dispatch) => () => {
  var randomWallet = _ethers.ethers.Wallet.createRandom();

  var provider = (0, _utilities.networkRouting)('metamask') || (0, _utilities.networkRouting)('json');
  var wallet = new _ethers.ethers.Wallet(randomWallet.privateKey, provider);
  var contracts = (0, _utilities.generateNewContracts)(state.contracts, wallet);
  dispatch({
    type: _types.SET_WALLET,
    payload: {
      wallet,
      contracts
    }
  });
};

exports.generateWallet = generateWallet;