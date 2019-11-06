"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = void 0;

var _ethers = require("ethers");

var _utilities = require("../utilities");

var _effects = require("../effects");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @summary The function is called by the 'useReducer' functionality, it will process the given smart contracts
 *  and then add them to the initial state of the provider.
 * @param {Array<ContractABI>} contracts an array of the contract ABIs to be initialized
 * @returns the initial state including with the initialized contracts
 */
var initialize = contracts => initialState => {
  var deployed = {};
  contracts.forEach(contract => {
    var [deployedContract, address] = getContract(contract);
    var id = (0, _utilities.hashCode)(deployedContract);
    deployed[id] = _objectSpread({
      id,
      address
    }, deployedContract);
  });
  return _objectSpread({}, initialState, {
    contracts: _objectSpread({}, deployed)
  });
};

exports.initialize = initialize;

var getContract = contract => {
  var provider = (0, _effects.networkRouting)('metamask');
  var wallet = provider.getSigner();
  var address = (0, _utilities.getLatestDeploymentAddress)(contract);
  var deployedContract = new _ethers.ethers.Contract(address, contract.abi, wallet);
  return [deployedContract, address];
};