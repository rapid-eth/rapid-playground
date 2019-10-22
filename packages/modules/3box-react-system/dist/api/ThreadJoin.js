"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxReactState = require("3box-react-state");

var _effects = require("./effects");

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var ThreadJoin = (_ref) => {
  var {
    box,
    isMenuAvailable,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "isMenuAvailable", "styled"]);

  var [id, setID] = (0, _react.useState)((0, _uuid.default)());
  var [request, setRequest] = (0, _react.useState)(false);
  var thread = (0, _effects.useThreadJoinEffect)(box, _objectSpread({
    requestJoin: request
  }, props));
  /* --- Effects --- */

  return _react.default.createElement(_react.default.Fragment, null, !thread.isDispatched && !thread.isReady && _react.default.createElement(A.Span, {
    onClick: () => setRequest(true)
  }, props.componentIsDisconnected), thread.isDispatched && !thread.isReady && _react.default.createElement(A.Span, null, props.componentIsConnecting), thread.isReady && _react.default.createElement(A.Span, {
    onClick: () => setRequest(true)
  }, props.componentIsConnected));
};

ThreadJoin.defaultProps = {
  componentIsDisconnected: _react.default.createElement(_designSystemAtoms.Span, {
    pointer: true,
    xxs: true,
    tag: "white"
  }, "Join ", _react.default.createElement(A.Span, {
    opacity: .6,
    pl: 1
  }, _react.default.createElement(A.LoadingSquare, null))),
  componentIsConnecting: _react.default.createElement(_designSystemAtoms.Span, {
    pointer: true,
    xxs: true,
    tag: "white"
  }, "Joining ", _react.default.createElement(A.Span, {
    pl: 1
  }, _react.default.createElement(A.LoadingSquare, {
    className: "active"
  }))),
  componentIsConnected: _react.default.createElement(_designSystemAtoms.Span, {
    pointer: true,
    xxs: true,
    tag: "blue"
  }, "thread")
};
ThreadJoin.propTypes = {
  spaceAuto: PropTypes.bool
};

var _default = props => _react.default.createElement(_boxReactState.BoxInject, null, _react.default.createElement(ThreadJoin, props));

exports.default = _default;