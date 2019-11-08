"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _ethers = require("ethers");

/**
 * @name EthersContext
 * @description Initialize Ethers contenxt.
 */

/**
 * @typedef Context @memberof React.Context
 * @property {Object} instance
 * @property {Object} store
 * @property {Object} contracts
 * @property {Object} library
 * @property {Array} deployed
 * @property {Object} signatures
 * @property {String} address
 * @property {String} addressShortened
 * @property {String} addressTrimmed
 * @property {String} wallet
 * @property {Function} enable
 * @property {Function} loadContractIntoLibrary
 * @property {Function} initContract
 * @property {Function} initContractFromLibrary
 * @property {Function} deployContract
 * @property {Function} deployContractFromBytecode
 * @property {Function} setProvider
 * @property {Function} setProviderStatus
 * @property {Function} signMessage
 * @property {Function} signMessageTyped
 *
 * @example // value can be consumed via Context.Consumer
 * <Context.Provider value={...}>
 *    <MyApp />
 * </Context.Provider>
 * ...
 * <Context.Consumer>
 *  {value => ...}
 * </Context.Consumer>
 */
var Context = (0, _react.createContext)({
  instance: _ethers.ethers,
  store: {
    contracts: [],
    deploy: [],
    messages: [],
    library: [],
    transactions: [],
    wallets: []
  },
  contracts: {},
  library: {},
  deployed: [],
  signatures: {},
  address: undefined,
  wallet: undefined,
  enable: () => {},
  loadContractIntoLibrary: () => {},
  initContract: () => {},
  initContractFromLibrary: () => {},
  deployContract: () => {},
  deployContractFromBytecode: () => {},
  setProvider: () => {},
  setProviderStatus: () => {},
  signMessage: () => {},
  signMessageTyped: () => {},
  sendTransaction: () => {}
});
var _default = Context;
exports.default = _default;