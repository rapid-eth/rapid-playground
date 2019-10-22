"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _boxReactState = require("3box-react-state");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _utilities = require("./utilities");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxProfileRetrieve = (_ref) => {
  var {
    box,
    address,
    small,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "address", "small", "styled"]);

  var [isNameDisabled, setIsNameDisabled] = (0, _react.useState)(props.disableName);
  var [profile, setProfile] = (0, _react.useState)();
  /**
   * @function ProfileRetrieve
   * @description Send message signing request to current Web3 provider.
   */

  (0, _react.useEffect)(() => {
    if (address && !profile) {
      box.getProfile(address);
    } else if ((0, _idx.default)(box, _ => _.profiles[address])) {// setProfile(idx(box, _=>_.profiles[address]))
    }
  }, [address, profile]);
  (0, _react.useEffect)(() => {
    if (!profile) {
      setProfile((0, _idx.default)(box, _ => _.profiles[address]));
    }
  }, [profile, (0, _idx.default)(box, _ => _.profiles[address])]);
  return _react.default.createElement(ProfileCard, _extends({
    small: small,
    profile: profile,
    address: address
  }, props));
};

var ProfileCard = (_ref2) => {
  var {
    profile,
    small
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["profile", "small"]);

  var [isNameDisabled, setIsNameDisabled] = (0, _react.useState)(props.disableName);
  return profile ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystemAtoms.Flex, {
    circle: true,
    center: true,
    column: true,
    boxShadow: 0,
    p: 2,
    border: "1px solid #FFF",
    overflow: "hidden",
    m: 1,
    width: 24,
    height: 24,
    maxWidth: 26,
    maxWidth: 26
  }, profile.image ? _react.default.createElement(_designSystemAtoms.BackgroundImage, {
    ratio: .5,
    src: (0, _utilities.GenerateImage)(profile.image)
  }) : _react.default.createElement(_designSystemAtoms.BackgroundImage, {
    ratio: .5,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  })), !isNameDisabled && _react.default.createElement(_designSystemAtoms.Box, {
    ml: 10
  }, _react.default.createElement(_designSystemAtoms.Link, {
    to: "/profile/".concat(props.address)
  }, _react.default.createElement(_designSystemAtoms.Heading, {
    md: true,
    noMargin: true
  }, (0, _idx.default)(profile, _ => _.name)))))) : _react.default.createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystemAtoms.Span, null, _react.default.createElement(_designSystemAtoms.Image, {
    card: true,
    circle: true,
    src: "https://static.thenounproject.com/png/2348501-200.png",
    border: "none",
    bg: "white",
    p: 0,
    width: 20
  })), _react.default.createElement(_designSystemAtoms.Box, {
    ml: 10
  }, _react.default.createElement(_designSystemAtoms.Box, {
    borderRadius: 40,
    bg: "gray",
    p: 1,
    width: 120
  })));
};

var _default = props => _react.default.createElement(_boxReactState.BoxInject, null, _react.default.createElement(BoxProfileRetrieve, props));

exports.default = _default;