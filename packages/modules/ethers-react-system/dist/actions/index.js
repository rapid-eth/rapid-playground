"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendTransaction = exports.signMessage = exports.signMessageTyped = exports.deployContractFromBytecode = exports.deployContract = exports.initContractFromLibrary = exports.initContract = exports.loadContractIntoLibrary = exports.setProviderStatus = exports.setProvider = void 0;

var _utilities = require("../utilities");

/**
 *
 * @param {Object} provider
 */
var setProvider = (_ref) => {
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

var setProviderStatus = (_ref2) => {
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

var loadContractIntoLibrary = (_ref3) => {
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
/* --- Initialize ---- */


exports.loadContractIntoLibrary = loadContractIntoLibrary;

var initContract = (_ref4) => {
  var {
    abi,
    address,
    contractType,
    delta
  } = _ref4;
  return dispatch({
    type: 'INIT_CONTRACT_REQUEST',
    payload: {
      abi,
      address,
      contractType
    },
    delta: delta || address
  });
};

exports.initContract = initContract;

var initContractFromLibrary = (_ref5) => {
  var {
    address,
    contractName
  } = _ref5;
  return dispatch({
    type: 'INIT_CONTRACT_FROM_LIBRARY_REQUEST',
    payload: {
      address,
      contractName
    }
  });
};

exports.initContractFromLibrary = initContractFromLibrary;

var deployContract = (_ref6) => {
  var {
    contract,
    delta,
    values
  } = _ref6;
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

var deployContractFromBytecode = (abi, bytecode, delta) => dispatch({
  type: 'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST',
  input: bytecode,
  delta: delta || (0, _utilities.hashCode)(abi)
});

exports.deployContractFromBytecode = deployContractFromBytecode;

var signMessageTyped = (_ref7) => {
  var {
    message,
    delta
  } = _ref7;
  return dispatch({
    type: 'SIGN_TYPED_MESSAGE_REQUEST',
    payload: message,
    id: delta || (0, _utilities.hashCode)(message.toString())
  });
};

exports.signMessageTyped = signMessageTyped;

var signMessage = (_ref8) => {
  var {
    message,
    delta
  } = _ref8;
  return dispatch({
    type: 'SIGN_MESSAGE_REQUEST',
    payload: message,
    id: delta || (0, _utilities.hashCode)(message)
  });
};

exports.signMessage = signMessage;

var sendTransaction = (transaction, delta) => dispatch({
  type: 'SIGN_TRANSACTION_REQUEST',
  input: transaction,
  delta
});

exports.sendTransaction = sendTransaction;