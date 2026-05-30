{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  let _v2 = "$inf$";
  _v0.s(["INFINITE_PREFIX", 0, _v2], 0);
  var _v3 = _v0.i(0);
  let _v4 = _v1.i && window.__SWR_DEVTOOLS_USE__,
    _v5 = _v4 ? window.__SWR_DEVTOOLS_USE__ : [],
    _v6 = _v0 => (0, _v1.a)(_v0[1]) ? [_v0[0], _v0[1], _v0[2] || {}] : [_v0[0], null, (null === _v0[1] ? _v0[2] : _v0[1]) || {}],
    _v7 = () => {
      let _v0 = (0, _v3.useContext)(_v1.S);
      return (0, _v3.useMemo)(() => (0, _v1.m)(_v1.d, _v0), [_v0]);
    },
    _v8 = _v5.concat(_v0 => (_v0, _v1, _v2) => {
      let _v3 = _v1 && ((..._v0) => {
        let [_v1] = (0, _v1.s)(_v0),
          [,,, _v2] = _v1.b.get(_v1.c);
        if (_v1.startsWith(_v2)) return _v1(..._v0);
        let _v3 = _v2[_v1];
        return (0, _v1.e)(_v3) ? _v1(..._v0) : (delete _v2[_v1], _v3);
      });
      return _v0(_v0, _v3, _v2);
    });
  _v4 && (window.__SWR_DEVTOOLS_REACT__ = _v3.default), _v0.s(["subscribeCallback", 0, (_v0, _v1, _v2) => {
    let _v3 = _v1[_v0] || (_v1[_v0] = []);
    return _v3.push(_v2), () => {
      let _v0 = _v3.indexOf(_v2);
      _v0 >= 0 && (_v3[_v0] = _v3[_v3.length - 1], _v3.pop());
    };
  }, "useSWRConfig", 0, _v7, "withArgs", 0, _v0 => function (..._v0) {
    let _v1 = _v7(),
      [_v2, _v3, _v4] = _v6(_v0),
      _v5 = (0, _v1.f)(_v1, _v4),
      _v6 = _v0,
      {
        use: _v7
      } = _v5,
      _v8 = (_v7 || []).concat(_v8);
    for (let _v0 = _v8.length; _v0--;) _v6 = _v8[_v0](_v6);
    return _v6(_v2, _v3 || _v5.fetcher || null, _v5);
  }, "withMiddleware", 0, (_v0, _v1) => (..._v0) => {
    let [_v1, _v2, _v3] = _v6(_v0),
      _v4 = (_v3.use || []).concat(_v1);
    return _v0(_v1, _v2, {
      ..._v3,
      use: _v4
    });
  }], 0);
}