{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.takeWhile = void 0, _v2.takeWhile = function (_v0, _v1) {
    let _v2 = [];
    for (let _v0 of _v0) {
      if (!_v1(_v0)) break;
      _v2.push(_v0);
    }
    return _v2;
  };
}