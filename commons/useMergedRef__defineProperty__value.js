{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "useMergedRef", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  });
  let _v3 = _v0.r(0);
  function _v4(_v0, _v1) {
    let _v2 = (0, _v3.useRef)(null),
      _v3 = (0, _v3.useRef)(null);
    return (0, _v3.useCallback)(_v0 => {
      if (null === _v0) {
        let _v0 = _v2.current;
        _v0 && (_v2.current = null, _v0());
        let _v1 = _v3.current;
        _v1 && (_v3.current = null, _v1());
      } else _v0 && (_v2.current = _v5(_v0, _v0)), _v1 && (_v3.current = _v5(_v1, _v0));
    }, [_v0, _v1]);
  }
  function _v5(_v0, _v1) {
    if ("function" != typeof _v0) return _v0.current = _v1, () => {
      _v0.current = null;
    };
    {
      let _v0 = _v0(_v1);
      return "function" == typeof _v0 ? _v0 : () => _v0(null);
    }
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}