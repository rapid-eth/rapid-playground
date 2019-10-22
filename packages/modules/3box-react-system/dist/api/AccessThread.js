"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _boxReactState = require("3box-react-state");

var _effects = require("./effects");

var _Login = _interopRequireDefault(require("./Login"));

var _SpaceOpen = _interopRequireDefault(require("./SpaceOpen"));

var _ThreadJoin = _interopRequireDefault(require("./ThreadJoin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- Component --- */
var AccessThread = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var isLoggedIn = (0, _effects.useLoggedInEffect)(box);
  var isSpaceReady = (0, _effects.useSpaceReadyEffect)(box, props);
  var thread = (0, _effects.useThreadReadyEffect)(box, props);
  console.log(isSpaceReady, thread, 'AccessThread');
  return _react.default.createElement(_react.default.Fragment, null, isLoggedIn ? null : _react.default.createElement(_Login.default, {
    isLoggedIn: props.children,
    componentIsLoggedOut: props.componentIsLoggedOut,
    componentIsLoading: props.componentIsLoading,
    componentIsLoggedIn: props.componentIsLoggedIn
  }), isLoggedIn && !isSpaceReady ? _react.default.createElement(_SpaceOpen.default, {
    space: props.space,
    auto: props.spaceAuto,
    componentIsClosed: props.componentIsClosed,
    componentIsLoading: props.componentIsLoading,
    componentIsOpen: props.componentIsOpen
  }) : null, isLoggedIn && isSpaceReady && !thread.isReady ? _react.default.createElement(_ThreadJoin.default, {
    auto: props.threadAuto,
    space: props.space,
    threadName: props.threadName,
    options: props.threadOptions,
    componentIsClosed: props.componentIsThreadClosed,
    componentIsLoading: props.componentIsThreadLoading,
    componentIsJoined: props.componentIsThreadJoined
  }) : null, isLoggedIn && isSpaceReady && thread.isReady ? props.children : null);
};

AccessThread.defaultProps = {
  componentLogin: _react.default.createElement(_Login.default, null),
  componentIsLoggedOut: _react.default.createElement(A.Span, {
    pointer: true,
    tag: "white"
  }, "Login ", _react.default.createElement(A.Span, {
    opacity: .6,
    pl: 1
  }, _react.default.createElement(A.LoadingSquare, null))),
  componentIsLoading: _react.default.createElement(A.Span, {
    pointer: true,
    tag: "white"
  }, "Login ", _react.default.createElement(A.Span, {
    pl: 1
  }, _react.default.createElement(A.LoadingSquare, {
    className: "active"
  }))),
  componentIsLoggedIn: _react.default.createElement(A.Span, {
    pointer: true,
    tag: "blue"
  }, "Active"),
  loginAuto: false,
  spaceAuto: false,
  threadAuto: false,
  isLoginDisabled: false
};
AccessThread.propTypes = {
  space: PropTypes.string
};

var _default = props => _react.default.createElement(_boxReactState.BoxContext, null, box => _react.default.createElement(AccessThread, _extends({
  box: box
}, props)));

exports.default = _default;