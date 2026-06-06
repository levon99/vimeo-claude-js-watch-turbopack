{
  "use strict";

  let _v3;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = function () {
    if (!_v3 && !(_v3 = "u" > typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return _v3(_v4);
  };
  let _v4 = new Uint8Array(16);
}