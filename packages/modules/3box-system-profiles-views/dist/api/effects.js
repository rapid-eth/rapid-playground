"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/@browser/playground/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useThreadListenEffect = exports.useThreadPostDeleteRequestEffect = exports.useThreadReadyEffect = exports.useThreadJoinEffect = exports.useStorageDeleteRequestEffect = exports.useStorageInsertRequestEffect = exports.useStorageRemoveRequestEffect = exports.useSpaceOpenRequestEffect = exports.useOpenRequestEffect = exports.useSpaceReadyEffect = exports.useLoggedInEffect = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/@browser/playground/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = require("react");

/**
 * @name 3BoxSystemEffects
 * @description 3Box interface side effect management.
 * - useLoggedInEffect
 * - useSpaceReadyEffect
 * - useOpenRequestEffect
 * - useSpaceOpenRequestEffect
 * - useStorageDeleteRequestEffect 
 * - useThreadJoinEffect
 * - useThreadReadyEffect
 * - useThreadPostDeleteRequestEffect
 */

/**
 * @function useLoggedInEffect
 * @description Authenticated state.
 * @returns {Boolean} Login State (Success, Failutre, Neutral)
 */
var useLoggedInEffect = function useLoggedInEffect(box) {
  return box.isLoggedIn;
};
/**
 * @function useSpaceReadyEffect
 * @description Check Space Instance
 * @returns {Boolean} Instance Status
 */


exports.useLoggedInEffect = useLoggedInEffect;

var useSpaceReadyEffect = function useSpaceReadyEffect(box, props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isReady = _useState2[0],
      setIsReady = _useState2[1];

  (0, _react.useEffect)(function () {
    var select = (0, _dotPropImmutableChain["default"])(box).get("auth.spaces.".concat(props.space, ".instance")).value();
    if (!isReady && select) setIsReady(true);
  }, [box.auth.spaces]);
  return isReady;
};
/**
 * @function useOpenRequestEffect
 * @description Dispatch 3Box open request.
 * @returns {Object} 3Box Open Status (Request, Success, Failure)
 */


exports.useSpaceReadyEffect = useSpaceReadyEffect;

var useOpenRequestEffect = function useOpenRequestEffect(box, props) {
  var _useState3 = (0, _react.useState)(props.request),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isRequested = _useState4[0],
      setIsRequested = _useState4[1]; // Watch 3Box instance and update login status when initialized.


  (0, _react.useEffect)(function () {
    return setIsRequested(props.request);
  }, [props.request]);
  /**
   * @name TriggerBoxOpen
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */

  (0, _react.useEffect)(function () {
    return isRequested && box.address && box.login();
  }, [isRequested, box.address]);
  return {
    isDispatched: box.isLoggingIn,
    isLoggedIn: box.isLoggedIn
  };
};
/**
 * @function useSpaceOpenRequestEffect
 * @description Dispatch 3Box open request.
 */


exports.useOpenRequestEffect = useOpenRequestEffect;

var useSpaceOpenRequestEffect = function useSpaceOpenRequestEffect(box, props) {
  var _useState5 = (0, _react.useState)(props.request),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isRequested = _useState6[0],
      setIsRequested = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      isDispatched = _useState8[0],
      setIsDispatched = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      isOpen = _useState10[0],
      setIsOpen = _useState10[1]; // Watch 3Box instance and update login status when initialized.


  (0, _react.useEffect)(function () {
    return setIsRequested(props.request);
  }, [props.request]);
  /**
   * @name SpaceInstanceStatus
   * @abstract Space
   * - trigger:box.auth.spaces[SPACE]
   * - requirement:box.address
   */

  (0, _react.useEffect)(function () {
    var selector = (0, _dotPropImmutableChain["default"])(box).get("box.auth.spaces".concat(props.space, ".instance")).value();

    if (selector) {
      setIsOpened(true);
    }
  }, [box.auth.spaces[props.space]]);
  (0, _react.useEffect)(function () {
    if (!box.auth.spaces[props.space] && isRequested && box.address) {
      box.openSpace(props.space);
      setIsDispatched(true);
    }
  }, [isRequested, box.address]);
  return {
    isDispatched: isDispatched,
    isOpen: isOpen
  };
};
/**
 * @function useStorageRemoveRequestEffect
 * @description Dispatch delete request if requirements met.
 */


exports.useSpaceOpenRequestEffect = useSpaceOpenRequestEffect;

var useStorageRemoveRequestEffect = function useStorageRemoveRequestEffect(box, props) {
  var _useState11 = (0, _react.useState)(),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      isDispatched = _useState12[0],
      setIsDispatched = _useState12[1];

  var invalidRequestHandler = function invalidRequestHandler() {
    setIsDispatched(false);
  };
  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */


  (0, _react.useEffect)(function () {
    if (!isDispatched && props.space && props.index && props.delta && value) {
      box.remove({
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta,
        value: props.value
      });
      setIsDispatched(true);
    } else {
      invalidRequestHandler();
    }
  }, [props]);
  return {
    status: isDispatched
  };
};
/**
 * @function useStorageInsertRequestEffect
 * @description Dispatch delete request if requirements met.
 */


exports.useStorageRemoveRequestEffect = useStorageRemoveRequestEffect;

var useStorageInsertRequestEffect = function useStorageInsertRequestEffect(box, props) {
  var _useState13 = (0, _react.useState)(),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      isDispatched = _useState14[0],
      setIsDispatched = _useState14[1];

  var invalidRequestHandler = function invalidRequestHandler() {
    setIsDispatched(false);
  };
  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */


  (0, _react.useEffect)(function () {
    if (!isDispatched && props.space && props.index && props.delta && value) {
      box.insert({
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta,
        value: props.value
      });
      setIsDispatched(true);
    } else {
      invalidRequestHandler();
    }
  }, [props]);
  return {
    status: isDispatched
  };
};
/**
 * @function useStorageDeleteRequestEffect
 * @description Dispatch delete request if requirements met.
 */


exports.useStorageInsertRequestEffect = useStorageInsertRequestEffect;

var useStorageDeleteRequestEffect = function useStorageDeleteRequestEffect(box, props) {
  var _useState15 = (0, _react.useState)(0),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      message = _useState16[0],
      setMessage = _useState16[1];

  var _useState17 = (0, _react.useState)(),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      isDispatched = _useState18[0],
      setIsDispatched = _useState18[1];

  var invalidRequestHandler = function invalidRequestHandler() {
    setMessage(1);
    setIsDispatched(false);
  };
  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */


  (0, _react.useEffect)(function () {
    if (!isDispatched && props.space && props.index && props.delta) {
      box["delete"]({
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta
      });
      setIsDispatched(true);
    } else {
      invalidRequestHandler();
    }
  }, [props]);
  return {
    status: isDispatched,
    message: message
  };
};
/* --------------------- */

/* Threads
/* --------------------- */

/**
 * @function useThreadJoinEffect
 * @description Check if 3Box Thread is joined.
 */


exports.useStorageDeleteRequestEffect = useStorageDeleteRequestEffect;

var useThreadJoinEffect = function useThreadJoinEffect(box, props) {
  // Passed State
  var _useState19 = (0, _react.useState)(props.requestJoin || false),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      isJoinRequested = _useState20[0],
      setIsJoinRequested = _useState20[1]; // Internal State


  var _useState21 = (0, _react.useState)(false),
      _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
      isSpaceReady = _useState22[0],
      setIsSpaceReady = _useState22[1];

  var _useState23 = (0, _react.useState)(false),
      _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
      isDispatched = _useState24[0],
      setIsDispatched = _useState24[1];

  var _useState25 = (0, _react.useState)(false),
      _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
      isReady = _useState26[0],
      setIsReady = _useState26[1];

  var _useState27 = (0, _react.useState)(false),
      _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
      isSelected = _useState28[0],
      setIsSelected = _useState28[1];

  console.log(props.requestJoin, isJoinRequested, 'useThreadJoinEffect');
  /* --- Passed Props State Effects --- */

  (0, _react.useEffect)(function () {
    if (!isJoinRequested) setIsJoinRequested(true);
  }, [props.requestJoin]);
  /* --- Internal State Effects --- */
  // Space Instance Ready

  (0, _react.useEffect)(function () {
    if (!isSpaceReady) {
      var selector = (0, _dotPropImmutableChain["default"])(box).get("auth.spaces.".concat(props.space, ".instance")).value();
      if (selector) setIsSpaceReady(true);
    }
  }, [box.auth.spaces[props.space]]); // Dispatch Thread Join Request

  (0, _react.useEffect)(function () {
    try {
      if (isJoinRequested) {
        setIsDispatched(true);
        box.joinThread({
          threadAddress: props.threadAddress,
          threadName: props.threadName,
          space: props.space,
          options: props.options
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [isJoinRequested]); // Watch Thread Chain

  (0, _react.useEffect)(function () {
    var select = (0, _dotPropImmutableChain["default"])(box).get("auth.threads.".concat(props.threadName)).value();
    if (isJoinRequested && !isReady && select) setIsReady(true);
    setIsSelected(true);
  }, [isReady]);
  return {
    isSpaceReady: isSpaceReady,
    isDispatched: isDispatched,
    isReady: isReady
  };
};
/**
 * @function useThreadReadyEffect
 * @description Check if 3Box Thread is joined.
 */


exports.useThreadJoinEffect = useThreadJoinEffect;

var useThreadReadyEffect = function useThreadReadyEffect(box, props) {
  var _useState29 = (0, _react.useState)(false),
      _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
      isReady = _useState30[0],
      setIsReady = _useState30[1];

  (0, _react.useEffect)(function () {
    var select = (0, _dotPropImmutableChain["default"])(box).get("auth.threads.".concat(props.threadName, ".instance")).value();
    if (!isReady && select) setIsReady(true);
  }, [box.auth.threads]);
  return {
    isReady: isReady
  };
};
/**
 * @function useThreadPostDeleteRequestEffect
 * @description Dispatch 3Box open request.
 */


exports.useThreadReadyEffect = useThreadReadyEffect;

var useThreadPostDeleteRequestEffect = function useThreadPostDeleteRequestEffect(box, props) {
  var _useState31 = (0, _react.useState)(props.request),
      _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
      isRequested = _useState32[0],
      setIsRequested = _useState32[1];

  var _useState33 = (0, _react.useState)(0),
      _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
      message = _useState34[0],
      setMessage = _useState34[1];

  var _useState35 = (0, _react.useState)(),
      _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
      isDispatched = _useState36[0],
      setIsDispatched = _useState36[1];

  var _useState37 = (0, _react.useState)(),
      _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
      isOpen = _useState38[0],
      setIsOpen = _useState38[1]; // Watch 3Box instance and update login status when initialized.


  (0, _react.useEffect)(function () {
    return setIsRequested(props.request);
  }, [props.request]);
  (0, _react.useEffect)(function () {
    var selector = (0, _dotPropImmutableChain["default"])(box).get("box.auth.threads".concat(props.threadName)).value();

    if (selector) {
      setIsOpened(true);
    }
  }, [box.auth.threads[props.threadName]]);
  (0, _react.useEffect)(function () {
    if (isRequested && props.threadName && props.postId) {
      box.threadPostDelete({
        threadName: props.threadName,
        postId: props.postId
      });
      setIsDispatched(true);
    }
  }, [isRequested, box.address]);
  return {
    isDispatched: isDispatched,
    isOpen: isOpen,
    message: message
  };
};
/**
 * @function useThreadListenEffect
 * @description Listen for thread updates
 */


exports.useThreadPostDeleteRequestEffect = useThreadPostDeleteRequestEffect;

var useThreadListenEffect = function useThreadListenEffect(box, props) {
  // Passed State
  var _useState39 = (0, _react.useState)(props.listen),
      _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
      isRequested = _useState40[0],
      setIsRequested = _useState40[1]; // Internal State


  var _useState41 = (0, _react.useState)(false),
      _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
      isDispatched = _useState42[0],
      setIsDispatched = _useState42[1];

  var _useState43 = (0, _react.useState)(false),
      _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
      isActive = _useState44[0],
      setIsActive = _useState44[1];

  var _useState45 = (0, _react.useState)(props.threadName || props.threadAddress),
      _useState46 = (0, _slicedToArray2["default"])(_useState45, 1),
      threadId = _useState46[0];

  if (isActive) {
    console.log('thread is listening... shhh');

    try {// box.auth.threads[props.threadName].instance.onUpdate(()=>{console.log('call')})
    } catch (error) {
      console.log(error, 'thread update catch');
    }
  }
  /* --- Passed Props State Effects --- */


  (0, _react.useEffect)(function () {
    if (!isRequested) setIsRequested(true);
  }, [props.listen]);
  /* --- Internal State Effects --- */
  // Active

  (0, _react.useEffect)(function () {
    if (!isActive) {
      var selector = (0, _dotPropImmutableChain["default"])(box).get("auth.threads.".concat(props.threadName)).value();
      if (selector) setIsActive(true);
    }
  }, [box.listening[threadId]]); // Dispatch

  (0, _react.useEffect)(function () {
    if (isRequested) {
      setIsDispatched(true);
      box.listenThread({
        threadAddress: props.threadAddress,
        threadName: props.threadName
      });
    }
  }, [isRequested]);
  return {
    isActive: isActive,
    isDispatched: isDispatched
  };
};

exports.useThreadListenEffect = useThreadListenEffect;