"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTimestampConvertEffect = void 0;

var _luxon = require("luxon");

var _react = require("react");

/* eslint-disable react-hooks/exhaustive-deps */
var useTimestampConvertEffect = props => {
  var [timeFormatted, setTimeFormated] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (props.timestamp) {
      var time = _luxon.DateTime.fromMillis(props.timestamp * 1000).toLocaleString({
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });

      setTimeFormated(time);
    }
  }, [props.timestamp]);
  return timeFormatted;
};

exports.useTimestampConvertEffect = useTimestampConvertEffect;