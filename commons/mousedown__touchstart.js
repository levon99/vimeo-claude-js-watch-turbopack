{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["default", 0, function (_v0, _v1, _v2, _v3 = []) {
    (0, _v1.useEffect)(() => {
      if (!_v0) return;
      let _v0 = _v2?.current || document,
        _v1 = _v0 => {
          (Array.isArray(_v0) ? _v0 : [_v0]).some(({
            current: _v0
          }) => _v0.target instanceof Element && !!_v0?.contains(_v0.target)) || _v1(_v0);
        };
      return _v0.addEventListener("mousedown", _v1), _v0.addEventListener("touchstart", _v1), () => {
        _v0.removeEventListener("mousedown", _v1), _v0.removeEventListener("touchstart", _v1);
      };
    }, _v3);
  }]);
}