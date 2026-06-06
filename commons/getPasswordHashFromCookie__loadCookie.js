{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getPasswordHashFromCookie", 0, _v0 => {
    let _v1 = `${_v0}_password`;
    return "u" < typeof document ? null : (0, _v1.loadCookie)(_v1);
  }]);
}