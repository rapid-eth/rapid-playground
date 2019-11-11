"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _utilities = require("./utilities");

var _types = require("./actions/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducerActions = (state, action) => {
  var filtered;
  var {
    input,
    delta,
    id,
    payload,
    type
  } = action;

  switch (action.type) {
    case _types.SET_PROVIDER:
      return _objectSpread({}, state, {
        provider: payload
      });

    case _types.SET_PROVIDER_STATUS:
      return _objectSpread({}, state, {
        providerStatus: payload
      });

    case 'SET_ADDRESS':
      return _objectSpread({}, state, {
        address: input
      });

    case _types.SET_WALLET:
      return _objectSpread({}, state, {
        address: payload.address,
        wallet: payload.wallet,
        contracts: payload.contracts
      });

    case _types.SIGN_TRANSACTION_REQUEST:
      return _objectSpread({}, state, {
        signatures: _objectSpread({}, state.signatures, {
          [id]: payload
        })
      });

    case _types.SIGN_TYPED_MESSAGE_REQUEST:
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          messages: [...state.store.messages, _objectSpread({}, action)]
        })
      });

    case _types.SIGN_MESSAGE_REQUEST:
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          messages: [...state.store.messages, _objectSpread({}, action)]
        })
      });

    case 'SIGN_MESSAGE_SUCCESS':
      filtered = state.store.messages.filter(msg => msg.id !== action.id);
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          messages: filtered
        }),
        signatures: _objectSpread({}, state.signatures, {
          [action.id]: _objectSpread({}, action)
        })
      });

    case 'SIGN_MESSAGE_FAILURE':
      filtered = state.store.messages.filter(msg => msg.id !== action.id);
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          messages: []
        }),
        signatures: _objectSpread({}, state.signatures, {
          [input.id]: _objectSpread({}, input, {
            type: 'signature',
            status: false
          })
        })
      });

    /* ----------------------- */

    /* Contract Loading     */

    /* ----------------------- */

    case _types.LOAD_CONTRACT_INTO_LIBRARY_REQUEST:
      return (0, _dotPropImmutableChain.default)(state).set("store.library", [...state.store.library, action]).value();

    case 'LOAD_CONTRACT_INTO_LIBRARY_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("library.".concat(action.payload.contractName), action.payload).value();

    case 'LOAD_CONTRACT_INTO_LIBRARY_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.library", []).value();

    /* ----------------------- */

    /* Contract Loading     */

    /* ----------------------- */

    case 'LOAD_CONTRACT_REQUEST':
      console.log(action, 'init contract');
      return (0, _dotPropImmutableChain.default)(state).set("store.library", [...state.store.contracts, action]).value();

    case 'LOAD_CONTRACT_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("contracts.".concat(action.payload.contractName), action.payload).value();

    case 'LOAD_CONTRACT_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.contracts", []).value();

    /* ----------------------- */

    /* Contract Initialize     */

    /* ----------------------- */

    case _types.INIT_CONTRACT_REQUEST:
      var {
        address,
        contract
      } = payload;
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          contracts: []
        }),
        contracts: _objectSpread({}, state.contracts, {
          [id]: _objectSpread({
            id,
            address
          }, contract)
        })
      });

    /* ----------------------- */

    /* Contract Deployment     */

    /* ----------------------- */

    case _types.DEPLOY_CONTRACT_REQUEST:
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deploy: [...state.store.deploy, {
            payload,
            type,
            id: delta || (0, _utilities.hashCode)(payload),
            delta: delta || (0, _utilities.hashCode)(payload)
          }]
        })
      });

    case _types.DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST:
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deploy: [...state.store.deploy, {
            payload,
            id: delta || (0, _utilities.hashCode)(input)
          }]
        })
      });

    case 'DEPLOY_CONTRACT_SUCCESS':
      filtered = state.store.messages.filter(msg => msg.id !== input.id);
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deploy: filtered
        }),
        deployed: [...state.deployed, _objectSpread({}, payload, {
          type: 'contractDeployed',
          status: true
        })]
      });

    default:
      throw new Error("No Reducer Type Set: ".concat(action.type));
  }
};

var _default = reducerActions;
exports.default = _default;