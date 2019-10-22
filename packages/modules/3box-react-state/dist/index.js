"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BoxProvider", {
  enumerable: true,
  get: function get() {
    return _Provider.default;
  }
});
Object.defineProperty(exports, "BoxContext", {
  enumerable: true,
  get: function get() {
    return _WithContext.default;
  }
});
Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function get() {
    return _WithContext.default;
  }
});
Object.defineProperty(exports, "BoxInject", {
  enumerable: true,
  get: function get() {
    return _WithContextInjected.default;
  }
});

var _Provider = _interopRequireDefault(require("./Provider"));

var _WithContext = _interopRequireDefault(require("./WithContext"));

var _WithContextInjected = _interopRequireDefault(require("./WithContextInjected"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }