{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["default", 0, function (_v0, _v1) {
    let [_v2, _v3] = (0, _v1.useState)(() => {
        try {
          let _v0 = window.localStorage.getItem(_v0);
          return _v0 ? JSON.parse(_v0) : _v1;
        } catch (_v0) {
          return _v1;
        }
      }),
      _v4 = (0, _v1.useCallback)(_v0 => {
        try {
          let _v0 = _v0 instanceof Function ? _v0(_v2) : _v0;
          _v3(_v0), window.localStorage.setItem(_v0, JSON.stringify(_v0));
        } catch (_v0) {}
      }, [_v2, _v3]);
    return [_v2, _v4];
  }]);
}