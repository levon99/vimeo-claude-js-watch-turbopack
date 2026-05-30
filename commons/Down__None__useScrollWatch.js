{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = ((_v1 = _v3 || {})[_v1.Up = 0] = "Up", _v1[_v1.Down = 1] = "Down", _v1[_v1.None = 2] = "None", _v1);
  _v0.s(["useScrollWatch", 0, (_v0 = [], _v1, _v2, _v3) => {
    let [_v4, _v5] = (0, _v2.useState)(2),
      _v6 = (0, _v2.useRef)(0),
      [_v7, _v8] = (0, _v2.useState)(0),
      _v9 = (0, _v2.useRef)(null),
      _v10 = (0, _v2.useRef)(_v0?.length ?? 0),
      _v11 = (0, _v2.useRef)(void 0),
      _v12 = (0, _v2.useRef)(!0),
      _v13 = (0, _v2.useRef)(_v0 && _v0.length ? _v0[_v0.length - 1] : null),
      _v14 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v0.currentTarget?.scrollTop;
        _v5(_v1 - _v6.current < 0 ? 0 : 1), _v6.current = _v1, _v8(_v1);
      }, []),
      _v15 = (0, _v2.useRef)(null);
    return (0, _v2.useEffect)(() => (_v15?.current?.addEventListener("scroll", _v14), () => _v15?.current?.removeEventListener("scroll", _v14)), [_v15.current]), _v15.current && 0 !== _v10.current && _v10.current < _v0.length && (_v11.current = _v15.current.scrollHeight - _v15.current.scrollTop), _v10.current = _v0.length, (0, _v2.useEffect)(() => {
      _v9.current && _v12.current && (_v12.current = !1, _v1());
      let _v0 = _v0 && _v0.length && _v13.current === _v0[_v0.length - 1];
      _v11.current && _v15.current && _v0 && (_v15.current.scrollTop = _v15.current.scrollHeight - _v11.current), _v11.current = null, _v0 && (_v13.current = _v0 && _v0.length ? _v0[_v0.length - 1] : null);
    }), (0, _v2.useEffect)(() => {
      if (0 === _v4 && _v7 < 700 && _v2(), 1 === _v4) {
        let _v0 = _v15.current;
        _v0 && _v0.scrollHeight - Math.abs(_v0.scrollTop) < _v0.clientHeight + 500 && _v3();
      }
    }, [_v4, _v7]), [_v15, _v9];
  }]);
}