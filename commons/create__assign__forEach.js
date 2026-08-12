{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => {
      let _v1,
        _v2 = new Set(),
        _v3 = (_v0, _v1) => {
          let _v2 = "function" == typeof _v0 ? _v0(_v1) : _v0;
          if (!Object.is(_v2, _v1)) {
            let _v0 = _v1;
            _v1 = (null != _v1 ? _v1 : "object" != typeof _v2 || null === _v2) ? _v2 : Object.assign({}, _v1, _v2), _v2.forEach(_v0 => _v0(_v1, _v0));
          }
        },
        _v4 = () => _v1,
        _v5 = {
          setState: _v3,
          getState: _v4,
          getInitialState: () => _v6,
          subscribe: _v0 => (_v2.add(_v0), () => _v2.delete(_v0))
        },
        _v6 = _v1 = _v0(_v3, _v4, _v5);
      return _v5;
    },
    _v3 = _v0 => {
      let _v1 = _v0 ? _v2(_v0) : _v2,
        _v2 = _v0 => function (_v0, _v1 = _v0 => _v0) {
          let _v2 = _v1.default.useSyncExternalStore(_v0.subscribe, _v1.default.useCallback(() => _v1(_v0.getState()), [_v0, _v1]), _v1.default.useCallback(() => _v1(_v0.getInitialState()), [_v0, _v1]));
          return _v1.default.useDebugValue(_v2), _v2;
        }(_v1, _v0);
      return Object.assign(_v2, _v1), _v2;
    };
  _v0.s(["create", 0, _v0 => _v0 ? _v3(_v0) : _v3], 0);
}