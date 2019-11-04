import * as actions from '../actions/';
const keys = Object.keys(actions);

/**
 * @summary Insert documentation for enhanceActions middleware
 * @param {Object} state
 * @param {Function} dispatch
 */
export const enhanceActions = (state, dispatch) => {
  let enhanced = {};
  keys.forEach(action => {
    enhanced[action] = actions[action](state, dispatch);
  });
  return enhanced;
};
