"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useThreadListenEffect = exports.useThreadPostDeleteRequestEffect = exports.useThreadReadyEffect = exports.useThreadJoinEffect = exports.useStorageDeleteRequestEffect = exports.useStorageInsertRequestEffect = exports.useStorageRemoveRequestEffect = exports.useStorageSelectorEffect = exports.useSpaceOpenRequestEffect = exports.useOpenRequestEffect = exports.useSpaceReadyEffect = exports.useLoggedInEffect = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var useLoggedInEffect = box => box.isLoggedIn;
/**
 * @function useSpaceReadyEffect
 * @description Check Space Instance
 * @returns {Boolean} Instance Status
 */


exports.useLoggedInEffect = useLoggedInEffect;

var useSpaceReadyEffect = (box, props) => {
  var [isReady, setIsReady] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    var select = (0, _dotPropImmutableChain.default)(box).get("auth.spaces.".concat(props.space, ".instance")).value();
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

var useOpenRequestEffect = (box, props) => {
  var [isRequested, setIsRequested] = (0, _react.useState)(props.request); // Watch 3Box instance and update login status when initialized.

  (0, _react.useEffect)(() => {
    if (!isRequested && props.request) setIsRequested(props.request);
  }, [isRequested]);
  /**
   * @name TriggerBoxOpen
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */

  (0, _react.useEffect)(() => isRequested && box.address && box.login(), [isRequested, box.address]);
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

var useSpaceOpenRequestEffect = (box, props) => {
  var [isRequested, setIsRequested] = (0, _react.useState)(props.request);
  var [isDispatched, setIsDispatched] = (0, _react.useState)();
  var [isOpen, setIsOpen] = (0, _react.useState)(); // Watch 3Box instance and update login status when initialized.

  (0, _react.useEffect)(() => setIsRequested(props.request), [props.request]);
  /**
   * @name SpaceInstanceStatus
   * @abstract Space
   * - trigger:box.auth.spaces[SPACE]
   * - requirement:box.address
   */

  (0, _react.useEffect)(() => {
    var selector = (0, _dotPropImmutableChain.default)(box).get("box.auth.spaces".concat(props.space, ".instance")).value();

    if (selector) {
      setIsOpened(true);
    }
  }, [box.auth.spaces[props.space]]);
  (0, _react.useEffect)(() => {
    if (!box.auth.spaces[props.space] && isRequested && box.address) {
      box.openSpace(props.space);
      setIsDispatched(true);
    }
  }, [isRequested, box.address]);
  return {
    isDispatched,
    isOpen
  };
};
/**
 * @function useStorageSelectorEffect
 * @description Check Space Instance
 * @returns {Boolean} Instance Status
 */


exports.useSpaceOpenRequestEffect = useSpaceOpenRequestEffect;

var useStorageSelectorEffect = (box, props) => {
  var [selected, setSelected] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    var select = (0, _dotPropImmutableChain.default)(box).get("@.".concat(props.address, ".spaces.").concat(props.space, ".").concat(props.selector)).value();
    if (select) setSelected(select);
  }, [(0, _dotPropImmutableChain.default)(box).get("@.".concat(props.address, ".spaces.").concat(props.space, ".").concat(props.selector)).value()]);
  return selected;
};
/**
 * @function useStorageRemoveRequestEffect
 * @description Dispatch delete request if requirements met.
 */


exports.useStorageSelectorEffect = useStorageSelectorEffect;

var useStorageRemoveRequestEffect = (box, props) => {
  var [isDispatched, setIsDispatched] = (0, _react.useState)();

  var invalidRequestHandler = () => {
    setIsDispatched(false);
  };
  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */


  (0, _react.useEffect)(() => {
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

var useStorageInsertRequestEffect = (box, props) => {
  var [isDispatched, setIsDispatched] = (0, _react.useState)();

  var invalidRequestHandler = () => {
    setIsDispatched(false);
  };
  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */


  (0, _react.useEffect)(() => {
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

var useStorageDeleteRequestEffect = (box, props) => {
  var [message, setMessage] = (0, _react.useState)(0);
  var [isDispatched, setIsDispatched] = (0, _react.useState)();

  var invalidRequestHandler = () => {
    setMessage(1);
    setIsDispatched(false);
  };
  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */


  (0, _react.useEffect)(() => {
    if (!isDispatched && props.space && props.index && props.delta) {
      box.delete({
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

var useThreadJoinEffect = (box, props) => {
  // Passed State
  var [isJoinRequested, setIsJoinRequested] = (0, _react.useState)(props.requestJoin || false); // Internal State

  var [isSpaceReady, setIsSpaceReady] = (0, _react.useState)(false);
  var [isDispatched, setIsDispatched] = (0, _react.useState)(false);
  var [isReady, setIsReady] = (0, _react.useState)(false);
  var [isSelected, setIsSelected] = (0, _react.useState)(false);
  console.log(props.requestJoin, isJoinRequested, 'useThreadJoinEffect');
  /* --- Passed Props State Effects --- */

  (0, _react.useEffect)(() => {
    if (!isJoinRequested) setIsJoinRequested(true);
  }, [props.requestJoin]);
  /* --- Internal State Effects --- */
  // Space Instance Ready

  (0, _react.useEffect)(() => {
    if (!isSpaceReady) {
      var selector = (0, _dotPropImmutableChain.default)(box).get("auth.spaces.".concat(props.space, ".instance")).value();
      if (selector) setIsSpaceReady(true);
    }
  }, [box.auth.spaces[props.space]]); // Dispatch Thread Join Request

  (0, _react.useEffect)(() => {
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

  (0, _react.useEffect)(() => {
    var select = (0, _dotPropImmutableChain.default)(box).get("auth.threads.".concat(props.threadName)).value();
    if (isJoinRequested && !isReady && select) setIsReady(true);
    setIsSelected(true);
  }, [isReady]);
  return {
    isSpaceReady,
    isDispatched,
    isReady
  };
};
/**
 * @function useThreadReadyEffect
 * @description Check if 3Box Thread is joined.
 */


exports.useThreadJoinEffect = useThreadJoinEffect;

var useThreadReadyEffect = (box, props) => {
  var [isReady, setIsReady] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    var select = (0, _dotPropImmutableChain.default)(box).get("auth.threads.".concat(props.threadName, ".instance")).value();
    if (!isReady && select) setIsReady(true);
  }, [box.auth.threads]);
  return {
    isReady
  };
};
/**
 * @function useThreadPostDeleteRequestEffect
 * @description Dispatch 3Box open request.
 */


exports.useThreadReadyEffect = useThreadReadyEffect;

var useThreadPostDeleteRequestEffect = (box, props) => {
  var [isRequested, setIsRequested] = (0, _react.useState)(props.request);
  var [message, setMessage] = (0, _react.useState)(0);
  var [isDispatched, setIsDispatched] = (0, _react.useState)();
  var [isOpen, setIsOpen] = (0, _react.useState)(); // Watch 3Box instance and update login status when initialized.

  (0, _react.useEffect)(() => setIsRequested(props.request), [props.request]);
  (0, _react.useEffect)(() => {
    var selector = (0, _dotPropImmutableChain.default)(box).get("box.auth.threads".concat(props.threadName)).value();

    if (selector) {
      setIsOpened(true);
    }
  }, [box.auth.threads[props.threadName]]);
  (0, _react.useEffect)(() => {
    if (isRequested && props.threadName && props.postId) {
      box.threadPostDelete({
        threadName: props.threadName,
        postId: props.postId
      });
      setIsDispatched(true);
    }
  }, [isRequested, box.address]);
  return {
    isDispatched,
    isOpen,
    message
  };
};
/**
 * @function useThreadListenEffect
 * @description Listen for thread updates
 */


exports.useThreadPostDeleteRequestEffect = useThreadPostDeleteRequestEffect;

var useThreadListenEffect = (box, props) => {
  // Passed State
  var [isRequested, setIsRequested] = (0, _react.useState)(props.listen); // Internal State

  var [isDispatched, setIsDispatched] = (0, _react.useState)(false);
  var [isActive, setIsActive] = (0, _react.useState)(false);
  var [threadId] = (0, _react.useState)(props.threadName || props.threadAddress);

  if (isActive) {
    console.log('thread is listening... shhh');

    try {// box.auth.threads[props.threadName].instance.onUpdate(()=>{console.log('call')})
    } catch (error) {
      console.log(error, 'thread update catch');
    }
  }
  /* --- Passed Props State Effects --- */


  (0, _react.useEffect)(() => {
    if (!isRequested) setIsRequested(true);
  }, [props.listen]);
  /* --- Internal State Effects --- */
  // Active

  (0, _react.useEffect)(() => {
    if (!isActive) {
      var selector = (0, _dotPropImmutableChain.default)(box).get("auth.threads.".concat(props.threadName)).value();
      if (selector) setIsActive(true);
    }
  }, [box.listening[threadId]]); // Dispatch

  (0, _react.useEffect)(() => {
    if (isRequested) {
      setIsDispatched(true);
      box.listenThread({
        threadAddress: props.threadAddress,
        threadName: props.threadName
      });
    }
  }, [isRequested]);
  return {
    isActive,
    isDispatched
  };
};

exports.useThreadListenEffect = useThreadListenEffect;
var _default = {
  useLoggedInEffect,
  useOpenRequestEffect,
  useSpaceOpenRequestEffect,
  useSpaceReadyEffect,
  useStorageSelectorEffect,
  useStorageDeleteRequestEffect,
  useStorageInsertRequestEffect,
  useStorageRemoveRequestEffect,
  useThreadJoinEffect,
  useThreadListenEffect,
  useThreadPostDeleteRequestEffect,
  useThreadReadyEffect
};
exports.default = _default;