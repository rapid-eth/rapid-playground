"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _emblems = _interopRequireDefault(require("../emblems"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @summary The emblems type forms allows the user to interface with the Emblems smart contract.
 * It will create a emblems type with the specified URI and delegates.
 * The emblem type is essentially a template from which other emblems can be created.
 * @param {Object} ethers values provided by the EthersProvider React Context.
 * Primarily we need it to initialize the contract, enable ethereum and then sign the transaction submitted by the form
 * ! NOTE: Right now the ethers value isn't working as expected. Contract Initialization and Transactions aren't working.
 */
var EmblemsTypeForm = (_ref) => {
  var {
    ethers
  } = _ref;
  (0, _emblems.default)(ethers);
  var contractsNum = Object.keys(ethers.contracts).length;

  var onSubmit = values => {
    console.log(values);
  };

  return _react.default.createElement("div", null, _react.default.createElement("h1", null, "Create an Emblem Type"), _react.default.createElement("h3", null, "Number of contracts: ", contractsNum), _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    name: "field-one",
    placeholder: "Emblem Type URI"
  }), _react.default.createElement(_designSystem.Field, {
    name: "field-two",
    placeholder: "Enter delegates"
  }), _react.default.createElement(_designSystem.Button, {
    type: "submit"
  }, "Submit")));
};

var _default = EmblemsTypeForm;
exports.default = _default;