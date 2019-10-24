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
 * @summary
 * @param {Object} ethers values provided by the EthersProvider React Context.
 * Primarily we need it to initialize the contract, enable ethereum and then sign the transaction submitted by the form
 */
var CertificateEmblemForm = (_ref) => {
  var {
    ethers
  } = _ref;
  (0, _emblems.default)(ethers);
  var contractsNum = Object.keys(ethers.contracts).length;

  var onSubmit = values => {
    console.log(values);
  };

  return _react.default.createElement("div", null, _react.default.createElement("h1", null, "Create a Certificate Emblem"), _react.default.createElement("h3", null, "Number of contracts: ", contractsNum), _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    name: "field-one",
    placeholder: "Emblem Type ID"
  }), _react.default.createElement(_designSystem.Field, {
    name: "field-two",
    placeholder: "Emblem URI"
  }), _react.default.createElement(_designSystem.Field, {
    name: "field-three",
    placeholder: "Trust Anchors"
  }), _react.default.createElement(_designSystem.Button, {
    type: "submit"
  }, "Submit")));
};

var _default = CertificateEmblemForm;
exports.default = _default;