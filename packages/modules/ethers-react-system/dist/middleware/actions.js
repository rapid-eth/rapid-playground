"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhanceActions = void 0;

var actions = _interopRequireWildcard(require("../actions/"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var keys = Object.keys(actions);
/**
 * @summary Insert documentation for enhanceActions middleware
 * @param {Object} state the state object
 * @param {React.Dispatch} dispatch
 */

var enhanceActions = (state, dispatch) => {
  var enhanced = {};
  keys.forEach(action => {
    enhanced[action] = actions[action](state, dispatch);
  });
  return enhanced;
};

exports.enhanceActions = enhanceActions;