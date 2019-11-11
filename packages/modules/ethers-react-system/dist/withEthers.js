"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Context = _interopRequireDefault(require("./Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @summary A higher order component which returns the given React Component with the ethers object as a prop.
 * @param {React.Component} Component the child component of the HOC. It will have the ethers state object as a prop
 * @returns {React.Component} returns the new React component created by the HOC
 */
var withEthers = Component => () => _react.default.createElement(_Context.default.Consumer, null, ethers => _react.default.createElement(Component, {
  ethers: ethers
}));

var _default = withEthers;
exports.default = _default;