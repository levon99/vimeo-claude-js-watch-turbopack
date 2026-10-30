{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = "function" == typeof Object.is ? Object.is : function (_v0, _v1) {
      return _v0 === _v1 && (0 !== _v0 || 1 / _v0 == 1 / _v1) || _v0 != _v0 && _v1 != _v1;
    },
    _v6 = _v4.useSyncExternalStore,
    _v7 = _v3.useRef,
    _v8 = _v3.useEffect,
    _v9 = _v3.useMemo,
    _v10 = _v3.useDebugValue;
  _v2.useSyncExternalStoreWithSelector = function (_v0, _v1, _v2, _v3, _v4) {
    var _v5 = _v7(null);
    if (null === _v5.current) {
      var _v6 = {
        hasValue: !1,
        value: null
      };
      _v5.current = _v6;
    } else _v6 = _v5.current;
    var _v7 = _v6(_v0, (_v5 = _v9(function () {
      function _v0(_v0) {
        if (!_v3) {
          if (_v3 = !0, _v1 = _v0, _v0 = _v3(_v0), void 0 !== _v4 && _v6.hasValue) {
            var _v1 = _v6.value;
            if (_v4(_v1, _v0)) return _v2 = _v1;
          }
          return _v2 = _v0;
        }
        if (_v1 = _v2, _v5(_v1, _v0)) return _v1;
        var _v2 = _v3(_v0);
        return void 0 !== _v4 && _v4(_v1, _v2) ? (_v1 = _v0, _v1) : (_v1 = _v0, _v2 = _v2);
      }
      var _v1,
        _v2,
        _v3 = !1,
        _v4 = void 0 === _v2 ? null : _v2;
      return [function () {
        return _v0(_v1());
      }, null === _v4 ? void 0 : function () {
        return _v0(_v4());
      }];
    }, [_v1, _v2, _v3, _v4]))[0], _v5[1]);
    return _v8(function () {
      _v6.hasValue = !0, _v6.value = _v7;
    }, [_v7]), _v10(_v7), _v7;
  };
}