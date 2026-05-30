{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v0 => (_v0, _v1, _v2) => (_v2.setState = (_v0, _v1, ..._v2) => _v0("function" == typeof _v0 ? (0, _v4.produce)(_v0) : _v0, _v1, ..._v2), _v0(_v2.setState, _v1, _v2));
  _v0.s(["immer", 0, _v5], 0);
  let _v6 = _v0 => (0, _v2.create)((0, _v3.subscribeWithSelector)(_v5(_v0)));
  _v0.s(["createPersistentStore", 0, (_v0, _v1) => (0, _v2.create)((0, _v3.subscribeWithSelector)((0, _v3.persist)(_v5(_v0), _v1))), "createStore", 0, _v6, "rehydrate", 0, _v0 => {
    let _v1 = _v0 => {
      _v0.key === _v0.persist.getOptions().name && _v0.newValue && _v0.persist.rehydrate();
    };
    return window.addEventListener("storage", _v1), () => {
      window.removeEventListener("storage", _v1);
    };
  }], 0);
  let _v7 = {
      info: () => void 0,
      error: () => void 0,
      debug: () => void 0,
      warn: () => void 0
    },
    _v8 = _v6(_v0 => ({
      logger: void 0,
      setLogger: _v0 => {
        _v0(_v0 => {
          _v0.logger = _v0;
        });
      }
    }));
  _v0.s(["getLogger", 0, _v0 => {
    let _v1 = _v8.getState().logger;
    return _v1 ? _v1(_v0) : _v7;
  }, "useLogger", 0, (_v0, _v1) => {
    let {
      logger: _v2,
      setLogger: _v3
    } = _v8();
    return (0, _v1.useMemo)(() => {
      _v1 && !_v2 && _v3(_v1);
    }, [_v2, _v1, _v3]), (0, _v1.useMemo)(() => _v2 ? _v2(_v0) : _v7, [_v0, _v2]);
  }], 0);
}