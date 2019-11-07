"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxReactState = require("3box-react-state");

var _effects = require("./effects");

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var Login = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var [request, setRequest] = (0, _react.useState)();
  var login = (0, _effects.useOpenRequestEffect)(box, {
    request
  }); // console.log(login, 'login effects')
  // const login = {}

  /* --- Effects --- */

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystemAtoms.Span, {
    onClick: () => setRequest(true)
  }, !login.isDispatched && !login.isLoggedIn ? !_react.default.isValidElement(props.componentIsLoggedOut) ? _react.default.createElement(props.componentIsLoggedOut) : props.componentIsLoggedOut || null : null), login.isDispatched && !login.isLoggedIn ? !_react.default.isValidElement(props.componentIsLoading) ? _react.default.createElement(props.componentIsLoading) : props.componentIsLoading || null : null, login.isLoggedIn && _react.default.createElement(_designSystemAtoms.Span, null, props.children || !_react.default.isValidElement(props.componentIsLoggedIn) ? _react.default.createElement(props.componentIsLoggedIn) : props.componentIsLoggedIn || null));
};

Login.defaultProps = {
  componentIsLoggedOut: _react.default.createElement(_Avatar.default, null),
  componentIsLoading: _react.default.createElement(_Avatar.default, null),
  componentIsLoggedIn: _react.default.createElement(_Avatar.default, null)
};
Login.propTypes = {
  spaceAuto: PropTypes.bool
};

var _default = props => _react.default.createElement(_boxReactState.BoxInject, null, _react.default.createElement(Login, props));

exports.default = _default;