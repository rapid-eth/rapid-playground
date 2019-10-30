"use strict";

var _interopRequireDefault = require("/home/luis/consensys/rapid-playground/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("/home/luis/consensys/rapid-playground/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _react = _interopRequireDefault(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _utilities = require("../utilities");

/* --- Global --- */
var _default = function _default(props) {
  return props.image ? _react["default"].createElement(_designSystemAtoms.BackgroundImage, (0, _extends2["default"])({
    ratio: .5,
    src: (0, _utilities.GenerateImage)(props.image)
  }, props)) : null;
};

exports["default"] = _default;