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

/* --- Components --- */
var _default = function _default(props) {
  return _react["default"].createElement(_designSystemAtoms.Flex, (0, _extends2["default"])({
    circle: true,
    center: true,
    column: true,
    boxShadow: 0,
    p: 2,
    variant: "avatar",
    border: "2px solid #FFF",
    overflow: "hidden",
    maxWidth: 124,
    height: props.dimensions,
    width: props.dimensions
  }, props), props.image ? _react["default"].createElement(_designSystemAtoms.BackgroundImage, {
    ratio: 0.5,
    circle: true,
    src: (0, _utilities.GenerateImage)(props.image)
  }) : _react["default"].createElement(_designSystemAtoms.BackgroundImage, {
    ratio: 0.5,
    circle: true,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  }));
};

exports["default"] = _default;