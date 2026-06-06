{
  "use strict";

  _v0.s(["generateUID", 0, function () {
    return ("000" + (0 * Math.random() | 0).toString(36)).slice(-3) + ("000" + (466.56 * new Date().getUTCMilliseconds() | 0).toString(36)).slice(-3);
  }]);
}