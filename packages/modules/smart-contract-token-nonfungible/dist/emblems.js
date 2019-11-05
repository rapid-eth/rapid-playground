"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Emblems = _interopRequireDefault(require("../build/contracts/Emblems.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var networks = Object.keys(_Emblems.default.networks);
var deployedAddress = _Emblems.default.networks[networks[networks.length - 1]].address;
/**
 *
 * @param {Object} ethers the value provided by the EthersProvider Context Provider. It has access to the state values as well as the necessary dispatch function.
 * In this function we only use the InitContract, which will only need the ABI and deployed address.
 * ! NOTE - currently the contract isn't added to the state despite the function being dispatched
 */

var useEmblems = ethers => {
  var [isInitialized, setInitialized] = (0, _react.useState)(false);

  if (isInitialized === false) {
    setInitialized(true);
    ethers.initContract({
      abi: _Emblems.default.abi,
      address: deployedAddress
    });
  }

  return isInitialized;
};

var _default = useEmblems;
exports.default = _default;