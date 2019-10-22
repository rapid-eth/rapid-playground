"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useSetEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.store.sets.length > 0) {
      var selected = state.store.sets[0];

      switch (selected.type) {
        case 'SET_REQUEST':
          if (selected) {
            var runEffect =
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(function* () {
                var listUpdated;
                var {
                  access,
                  key,
                  keys,
                  inputs,
                  space,
                  append,
                  override
                } = selected;

                try {
                  if (space) {
                    if (append) {
                      var _data = yield state.spaces[space].instance[access].get(append);

                      if (_data) {
                        /**
                         * IF : key
                         * TRUE : Update object 
                         * FALSE : Update array 
                         */
                        if (key) {
                          listUpdated = _objectSpread({}, _data, {
                            [key]: inputs
                          });
                        } else {
                          listUpdated = Array.isArray(_data) ? [..._data, inputs] : [_data, inputs];
                        }
                      } else {
                        if (key) {
                          listUpdated = {
                            [key]: inputs
                          };
                        } else {
                          listUpdated = [inputs];
                        }
                      }

                      var list = yield state.spaces[space].instance[access].set(append, listUpdated);
                      dispatch({
                        type: "SET_SUCCESS",
                        payload: list
                      });

                      if (selected.update) {
                        dispatch({
                          type: "GET_REQUEST",
                          access,
                          key: selected.update,
                          space
                        });
                      }
                    } else {
                      yield state.spaces[space].instance[access].setMultiple(keys, inputs);
                      dispatch({
                        type: "SET_SUCCESS"
                      });

                      if (selected.update) {
                        dispatch({
                          type: "GET_REQUEST",
                          access,
                          key: selected.update,
                          space
                        });
                      }
                    }
                  } else {
                    if (append) {
                      var _data2 = yield state.instance[access].get(append);

                      if (_data2) {
                        listUpdated = Array.isArray(_data2) ? [..._data2, inputs] : [_data2, inputs];
                      } else {
                        listUpdated = [inputs];
                      }

                      Array.isArray(_data2) ? yield state.instance[access].set(append, listUpdated) : !override // todo set system for overriding data... add to backup space? 
                      ? yield state.instance[access].set(append, listUpdated) : null;
                    } else {
                      yield state.auth.instance[access].setMultiple(keys, inputs);
                    }
                  }
                } catch (error) {
                  console.log(error);
                  dispatch({
                    type: "SET_FAILURE"
                  });
                }
              });

              return function runEffect() {
                return _ref.apply(this, arguments);
              };
            }();

            runEffect();
          }

          break;

        case 'SET_INSERT_REQUEST':
          var data, branch, branchIndex;

          try {
            if (selected.key) data = dot.merge(state.profile[selected.index], "".concat(selected.key), selected.input);else data = dot.merge(state.profile, "".concat(selected.index), selected.input)[selected.index];
            state.instance[selected.access].set(selected.index, data);
            dispatch({
              type: "SET_INSERT_SUCCESS",
              index: selected.index,
              key: selected.key,
              payload: data
            });
            setDispatched(true);
          } catch (error) {
            console.log(error, 'insert failure');
            dispatch({
              type: "SET_INSERT_FAILURE",
              payload: error
            });
          }

          break;

        case 'SET_MULTIPLE_REQUEST':
          state.instance[selected.access].setMultiple(selected.keys, selected.inputs);
          break;

        default:
          break;
      }
    }
  }, [state.store.sets]);
  return dispatched;
};
/* --- Export --- */


var _default = useSetEffect;
exports.default = _default;