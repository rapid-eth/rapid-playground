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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @summary
 * @param {Array<ContractABI>} contracts an array of the contract ABIs to be initialized
 * @returns the initial state including with the initialized contracts
 */
var initialize = contracts => initialState => {
  contracts.map(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(function* (contract) {
      var provider = yield (0, _effects.networkRouting)('metamask');
      var wallet = provider.getSigner();
      var address = (0, _utilities.getLatestDeploymentAddress)(contract);
      var deployedContract = new _ethers.ethers.Contract(address, contract.abi, wallet);
      var id = (0, _utilities.hashCode)(deployedContract);
      initialState.contracts[id] = _objectSpread({
        id,
        address
      }, deployedContract);
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  return initialState;
};

exports.initialize = initialize;