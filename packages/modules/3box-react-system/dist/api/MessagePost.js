"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _boxReactState = require("3box-react-state");

var _BoxAccess = _interopRequireDefault(require("../components/BoxAccess"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MessagePost = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  /* --- State --- */
  var [isThreadReady, setIsThreadReady] = (0, _react.useState)(false);
  var [isRequested, setIsRequested] = (0, _react.useState)(false);
  /* --- Handlers --- */

  var postRequestHandler = () => setIsRequested(true);
  /* --- Effects --- */

  /**
   * @function isThreadReadyUseEffect
   * @description Check if 3Box Thread is ready.
   */


  (0, _react.useEffect)(() => {
    var select = (0, _dotPropImmutableChain.default)(box).get("auth.threads.".concat(props.threadName, ".instance")).value();
    if (select) setIsThreadReady(true);
  }, [box.auth.threads]);
  /**
   * @function threadPostRequestEffect
   * @description Handle User Input Request
   */

  (0, _react.useEffect)(() => {
    if ((isRequested || props.isPostAuto) && // Wait for dispatch request.
    props.threadName && props.post // Minimal Thread Post Requirements
    ) {
        // 3box.js : ThreadPost (https://docs.3box.io/api/messaging#box-space-thread-post-message)
        // 3box-state : threadPost (github.com/kamescg/3box-state)
        box.threadPost({
          space: props.space,
          threadName: props.threadName,
          // auth.threads[threadName]
          post: props.post // auth.threads[threadName].instance.post(post)

        });
      }
  }, [isRequested, props.data]);
  /* --- Init Effects --- */
  // isThreadReadyUseEffect()
  // threadPostRequestEffect()

  /* --- Component --- */

  var styled = isThreadReady ? props.styled : props.styledLoading;
  return props.children ? _react.default.createElement(A.Span, {
    onClick: postRequestHandler
  }, props.children) : isThreadReady ? _react.default.createElement(A.Span, _extends({}, props.styled, {
    onClick: postRequestHandler
  }), props.isReadyComponent) : _react.default.createElement(A.Toast, {
    content: _react.default.createElement(PostAttemptMessage, {
      threadName: props.threadName
    })
  }, _react.default.createElement(A.Flex, {
    alignCenter: true
  }, _react.default.createElement(A.Span, props.styled, props.isLoadingComponent)));
};

var PostAttemptMessage = props => _react.default.createElement(A.Flex, {
  column: true
}, _react.default.createElement(A.Span, {
  xs: true,
  mb: 3
}, "Open Thread to Complete Action"), _react.default.createElement(_BoxAccess.default, {
  spaceAuto: true,
  threadAuto: true,
  level: "thread",
  space: SPACE,
  threadName: props.threadName,
  optionsThread: {
    members: true
  }
}));

MessagePost.defaultProps = {
  isReadyComponent: _react.default.createElement(A.Span, {
    xxs: true,
    tag: "green"
  }, "Post"),
  isLoadingComponent: _react.default.createElement(A.Span, {
    xxs: true,
    tag: "white",
    opacity: .7
  }, "Post"),
  label: 'Post',
  spaceAuto: true,
  styledLoading: {
    xs: true,
    variant: 'white'
  },
  styled: {
    xs: true,
    variant: 'red'
  },
  styledButton: {
    xs: true,
    variant: 'white'
  }
};
MessagePost.propTypes = {
  spaceAuto: PropTypes.bool
};

var _default = props => _react.default.createElement(_boxReactState.BoxInject, null, _react.default.createElement(MessagePost, props));

exports.default = _default;