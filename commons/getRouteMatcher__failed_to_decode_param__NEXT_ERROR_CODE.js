{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "getRouteMatcher", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5({
    re: _v0,
    groups: _v1
  }) {
    return (0, _v4.safeRouteMatcher)(_v0 => {
      let _v1 = _v0.exec(_v0);
      if (!_v1) return !1;
      let _v2 = _v0 => {
          try {
            return decodeURIComponent(_v0);
          } catch {
            throw Object.defineProperty(new _v3.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", {
              value: "E528",
              enumerable: !1,
              configurable: !0
            });
          }
        },
        _v3 = {};
      for (let [_v0, _v1] of Object.entries(_v1)) {
        let _v0 = _v1[_v1.pos];
        void 0 !== _v0 && (_v1.repeat ? _v3[_v0] = _v0.split("/").map(_v0 => _v2(_v0)) : _v3[_v0] = _v2(_v0));
      }
      return _v3;
    });
  }
}