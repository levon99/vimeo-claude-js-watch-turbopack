{
  "use strict";

  let _v3;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v4 = new Uint8Array(16);
  _v2.default = function () {
    if (!_v3) {
      if ("u" < typeof crypto || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      _v3 = crypto.getRandomValues.bind(crypto);
    }
    return _v3(_v4);
  };
}