"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxReactState = require("3box-react-state");

var _effects = require("./effects");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OpenSpace = (_ref) => {
  var {
    box,
    isMenuAvailable,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "isMenuAvailable", "styled"]);

  var [request, setRequest] = (0, _react.useState)(props.auto); // const [ , set ] = useState(props.auto)

  var login = (0, _effects.useSpaceOpenRequestEffect)(box, {
    space: props.space,
    request
  });
  /* --- Effects --- */

  return _react.default.createElement(_react.default.Fragment, null, login.isLoggedIn && _react.default.createElement(A.Span, null, props.children || props.componentIsLoggedIn), login.isDispatched && !login.isLoggedIn && _react.default.createElement(A.Span, null, props.componentIsLoading), !login.isDispatched && !login.isLoggedIn && _react.default.createElement(A.Span, {
    onClick: setRequest
  }, props.componentIsLoggedOut));
};

OpenSpace.defaultProps = {
  componentIsLoggedOut: _react.default.createElement(_designSystemAtoms.Span, {
    pointer: true,
    xxs: true,
    tag: "white"
  }, "Open Space ", _react.default.createElement(A.Span, {
    opacity: .6,
    pl: 1
  }, _react.default.createElement(A.LoadingSquare, null))),
  componentIsLoading: _react.default.createElement(_designSystemAtoms.Span, {
    pointer: true,
    xxs: true,
    tag: "white"
  }, "Opening Space ", _react.default.createElement(A.Span, {
    pl: 1
  }, _react.default.createElement(A.LoadingSquare, {
    className: "active"
  }))),
  componentIsLoggedIn: _react.default.createElement(_designSystemAtoms.Span, {
    pointer: true,
    xxs: true,
    tag: "green"
  }, "space")
};
OpenSpace.propTypes = {
  spaceAuto: PropTypes.bool
};

var _default = props => _react.default.createElement(_boxReactState.BoxInject, null, _react.default.createElement(OpenSpace, props));

exports.default = _default;