"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useSetWalletEffect = (state, dispatch) => {
  var [isWalletReady, setWalletReady] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.address) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* () {
          try {
            var provider = yield ethers.providers.Web3Provider(window.web3.currentProvider);
            var wallet = provider.getSigner();
            dispatch({
              type: 'SET_WALLET_SUCCESS',
              payload: wallet
            });
            setWalletReady(true);
          } catch (error) {
            dispatch({
              type: 'SET_WALLET_FAILURE',
              payload: error
            });
            setWalletReady(false);
          }
        });

        return function runEffect() {
          return _ref.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.address]);
  return isWalletReady;
};
/* --- Export --- */


var _default = useSetWalletEffect;
exports.default = _default;