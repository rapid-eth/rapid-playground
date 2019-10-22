"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _boxReactState = require("3box-react-state");

var _effects = require("./effects");

var _LoginButton = _interopRequireDefault(require("./LoginButton"));

var _Login = _interopRequireDefault(require("./Login"));

var _SpaceOpen = _interopRequireDefault(require("./SpaceOpen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @function AccessSpaces
 * @param {*} props 
 */
var AccessSpaces = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var isLoggedIn = (0, _effects.useLoggedInEffect)(box);
  var isSpaceReady = (0, _effects.useSpaceReadyEffect)(box, props);
  return _react.default.createElement(_react.default.Fragment, null, isLoggedIn ? null : _react.default.createElement(_Login.default, _extends({
    isLoggedIn: props.children
  }, props)), isLoggedIn && !isSpaceReady ? _react.default.createElement(_SpaceOpen.default, {
    space: props.space,
    auto: props.spaceAuto
  }) : null, isLoggedIn && isSpaceReady ? props.children : null);
};

AccessSpaces.defaultProps = {
  componentLogin: _react.default.createElement(_Login.default, null),
  loginAuto: false,
  spaceAuto: false,
  threadAuto: false,
  isLoginDisabled: false
};
AccessSpaces.propTypes = {
  space: PropTypes.string
};

var _default = props => _react.default.createElement(_boxReactState.BoxContext, null, box => _react.default.createElement(AccessSpaces, _extends({
  box: box
}, props)));

exports.default = _default;