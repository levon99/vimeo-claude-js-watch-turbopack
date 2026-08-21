{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.generateUID = function () {
    return ("000" + (0 * Math.random() | 0).toString(36)).slice(-3) + ("000" + (466.56 * new Date().getUTCMilliseconds() | 0).toString(36)).slice(-3);
  };
}