{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["usePoll", 0, (_v0, _v1, _v2) => {
    let _v3 = _v2?.interval || 0,
      [_v4, _v5] = (0, _v1.useState)(0),
      _v6 = (0, _v1.useRef)(void 0);
    (0, _v1.useEffect)(() => {
      if ("function" == typeof _v1 && _v1(_v4) || !0 === _v1) {
        var _v0;
        _v6.current = setTimeout(() => {
          _v5(_v4 + 1), _v0();
        }, "linear" === (_v0 = _v2?.backoff) ? _v3 * _v4 : "exponential" === _v0 ? Math.pow(2, _v4) * _v3 + Math.round(Math.random() * _v3) : _v3);
      } else clearTimeout(_v6.current);
      return () => clearTimeout(_v6.current);
    }, [_v4, _v1]), (0, _v1.useEffect)(() => {
      _v2?.shouldResetBackoff && _v2.shouldResetBackoff(_v4) && _v5(0);
    }, [_v2, _v4]);
  }]);
}