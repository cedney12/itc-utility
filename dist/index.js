"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useModalManager = require("./hooks/useModalManager");
Object.keys(_useModalManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useModalManager[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useModalManager[key];
    }
  });
});