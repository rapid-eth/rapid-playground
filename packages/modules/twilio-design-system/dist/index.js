"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SMSLogItem", {
  enumerable: true,
  get: function get() {
    return _SMSLogItem.default;
  }
});
Object.defineProperty(exports, "VoiceLogItem", {
  enumerable: true,
  get: function get() {
    return _VoiceLogItem.default;
  }
});
exports.default = void 0;

var _SMSLogItem = _interopRequireDefault(require("./SMSLogItem"));

var _VoiceLogItem = _interopRequireDefault(require("./VoiceLogItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SMS
// Voice
var _default = {
  SMSLogItem: _SMSLogItem.default,
  VoiceLogItem: _VoiceLogItem.default
};
exports.default = _default;