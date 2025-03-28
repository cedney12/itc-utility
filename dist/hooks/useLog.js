import { useEffect } from "react";

/**
 * Custom hook that will log a value on change
 * 
 * @param {any} value Value to display on change
 * @param {string} [label] Label for the value
 */
var useLog = function useLog(value) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Value";
  useEffect(function () {
    console.log("".concat(label, ":"), value);
  }, [value]);
};
export default useLog;