{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = "function" == typeof Object.is ? Object.is : function (_v0, _v1) {
      return _v0 === _v1 && (0 !== _v0 || 1 / _v0 == 1 / _v1) || _v0 != _v0 && _v1 != _v1;
    },
    _v5 = _v3.useState,
    _v6 = _v3.useEffect,
    _v7 = _v3.useLayoutEffect,
    _v8 = _v3.useDebugValue;
  function _v9(_v0) {
    var _v1 = _v0.getSnapshot;
    _v0 = _v0.value;
    try {
      var _v2 = _v1();
      return !_v4(_v0, _v2);
    } catch (_v0) {
      return !0;
    }
  }
  var _v10 = "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (_v0, _v1) {
    return _v1();
  } : function (_v0, _v1) {
    var _v2 = _v1(),
      _v3 = _v5({
        inst: {
          value: _v2,
          getSnapshot: _v1
        }
      }),
      _v4 = _v3[0].inst,
      _v5 = _v3[1];
    return _v7(function () {
      _v4.value = _v2, _v4.getSnapshot = _v1, _v9(_v4) && _v5({
        inst: _v4
      });
    }, [_v0, _v2, _v1]), _v6(function () {
      return _v9(_v4) && _v5({
        inst: _v4
      }), _v0(function () {
        _v9(_v4) && _v5({
          inst: _v4
        });
      });
    }, [_v0]), _v8(_v2), _v2;
  };
  _v2.useSyncExternalStore = void 0 !== _v3.useSyncExternalStore ? _v3.useSyncExternalStore : _v10;
}