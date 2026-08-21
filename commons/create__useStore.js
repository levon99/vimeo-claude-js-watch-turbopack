{
  "use strict";

  let _v1 = _v0 => {
    let _v1,
      _v2 = new Set(),
      _v3 = (_v0, _v1) => {
        let _v2 = "function" == typeof _v0 ? _v0(_v1) : _v0;
        if (!Object.is(_v2, _v1)) {
          let _v0 = _v1;
          _v1 = (null != _v1 ? _v1 : "object" != typeof _v2) ? _v2 : Object.assign({}, _v1, _v2), _v2.forEach(_v0 => _v0(_v1, _v0));
        }
      },
      _v4 = () => _v1,
      _v5 = {
        setState: _v3,
        getState: _v4,
        subscribe: _v0 => (_v2.add(_v0), () => _v2.delete(_v0)),
        destroy: () => {
          _v2.clear();
        }
      };
    return _v1 = _v0(_v3, _v4, _v5), _v5;
  };
  var _v2 = _v0.i(0);
  let {
    useSyncExternalStoreWithSelector: _v3
  } = _v0.i(0).default;
  function _v4(_v0, _v1 = _v0.getState, _v2) {
    let _v3 = _v3(_v0.subscribe, _v0.getState, _v0.getServerState || _v0.getState, _v1, _v2);
    return (0, _v2.useDebugValue)(_v3), _v3;
  }
  let _v5 = _v0 => {
    let _v1 = "function" == typeof _v0 ? _v0 ? _v1(_v0) : _v1 : _v0,
      _v2 = (_v0, _v1) => _v4(_v1, _v0, _v1);
    return Object.assign(_v2, _v1), _v2;
  };
  _v0.s(["create", 0, _v0 => _v0 ? _v5(_v0) : _v5, "useStore", 0, _v4], 0);
}