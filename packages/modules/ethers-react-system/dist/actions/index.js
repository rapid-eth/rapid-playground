"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendTransaction = exports.signMessage = exports.signMessageTyped = exports.deployContractFromBytecode = exports.deployContract = exports.initContractFromLibrary = exports.initContract = exports.loadContractIntoLibrary = exports.setProviderStatus = exports.setProvider = void 0;

var _utilities = require("../utilities");

var _ethers = require("ethers");

var _types = require("../../dist/actions/types");

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


exports.loadContractIntoLibrary = loadContractIntoLibrary;

var initContract = (state, dispatch) => (Contract, address) => {
  var {
    wallet
  } = state;

  if (wallet === undefined || Contract === NoUndefinedVariables) {
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

var initContractFromLibrary = (state, dispatch) => (_ref4, dispatch) => {
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

var deployContract = (state, dispatch) => (_ref5, dispatch) => {
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

var deployContractFromBytecode = (state, dispatch) => (abi, bytecode, delta, dispatch) => dispatch({
  type: 'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST',
  input: bytecode,
  delta: delta || (0, _utilities.hashCode)(abi)
});

exports.deployContractFromBytecode = deployContractFromBytecode;

var signMessageTyped = (state, dispatch) => (_ref6, dispatch) => {
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

exports.signMessage = signMessage;

var sendTransaction = (state, dispatch) => (transaction, delta, dispatch) => dispatch({
  type: 'SIGN_TRANSACTION_REQUEST',
  input: transaction,
  delta
});

exports.sendTransaction = sendTransaction;