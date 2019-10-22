"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _luxon = require("luxon");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _designSystemOrganisms = require("@horizin/design-system-organisms");

var _effects = require("../effects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SMSLogItem = (_ref) => {
  var {
    as,
    sx,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["as", "sx", "children"]);

  var timeFormatted = (0, _effects.useTimestampConvertEffect)(props);
  return _react.default.createElement(_designSystemAtoms.Flex, {
    alignCenter: true,
    sx: _objectSpread({
      alignContent: 'center',
      justifyContent: 'space-between',
      bg: 'white',
      borderRadius: 4,
      boxShadow: 0,
      display: 'flex',
      my: 1,
      px: 2,
      py: 3,
      zIndex: 10
    }, sx)
  }, _react.default.createElement(_designSystemAtoms.Span, {
    sx: {
      flex: 2
    }
  }, props.from), _react.default.createElement(_designSystemAtoms.Span, {
    sx: {
      flex: 2
    }
  }, props.to), _react.default.createElement(_designSystemAtoms.Span, {
    sx: {
      flex: 2
    }
  }, timeFormatted), _react.default.createElement(_designSystemAtoms.Span, {
    sx: {
      fontSize: 0,
      flex: 3,
      px: 2
    }
  }, props.message), _react.default.createElement(_designSystemOrganisms.Modal, {
    content: _react.default.createElement(SMSMetadata, null)
  }, _react.default.createElement(_designSystemAtoms.Span, {
    variants: ['tag'],
    effects: ['white', 'sm'],
    sx: {
      cursor: 'pointer'
    }
  }, "Details")));
};

SMSLogItem.defaultProps = {
  sx: {}
};
SMSLogItem.propTypes = {
  sx: _propTypes.default.object
};

var SMSMetadata = props => {
  return _react.default.createElement(_designSystemAtoms.Box, {
    bg: true,
    sx: {
      bg: '#FFF',
      p: 3,
      minWidth: 450
    }
  }, _react.default.createElement(_designSystemAtoms.Heading, null, "SMS Metadata"), _react.default.createElement(_designSystemAtoms.HorizontalRule, {
    my: 2
  }));
};

var _default = SMSLogItem;
exports.default = _default;