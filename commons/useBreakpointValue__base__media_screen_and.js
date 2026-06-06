{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useBreakpointValue", 0, function (_v0, _v1) {
    var _v2, _v3, _v4, _v5;
    let _v6,
      _v7,
      _v8,
      _v9,
      _v10 = (_v3 = (0, _v4.isObject)(_v1) ? _v1 : {
        fallback: null != _v1 ? _v1 : "base"
      }, _v6 = (0, _v4.isObject)(_v3) ? _v3 : {
        fallback: null != _v3 ? _v3 : "base"
      }, _v8 = (_v7 = (0, _v3.useTheme)().__breakpoints.details.map(({
        minMaxQuery: _v0,
        breakpoint: _v1
      }) => ({
        breakpoint: _v1,
        query: _v0.replace("@media screen and ", "")
      }))).map(_v0 => _v0.breakpoint === _v6.fallback), _v9 = (0, _v2.useMediaQuery)(_v7.map(_v0 => _v0.query), {
        fallback: _v8,
        ssr: _v6.ssr
      }).findIndex(_v0 => !0 == _v0), null != (_v5 = null == (_v4 = _v7[_v9]) ? void 0 : _v4.breakpoint) ? _v5 : _v6.fallback),
      _v11 = (0, _v3.useTheme)();
    if (!_v10) return;
    let _v12 = Array.from((null == (_v2 = _v11.__breakpoints) ? void 0 : _v2.keys) || []);
    return function (_v0, _v1, _v2 = _v1.breakpoints) {
      let _v3 = Object.keys(_v0).indexOf(_v1);
      if (-1 !== _v3) return _v0[_v1];
      let _v4 = _v2.indexOf(_v1);
      for (; _v4 >= 0;) {
        let _v0 = _v2[_v4];
        if (_v0.hasOwnProperty(_v0)) {
          _v3 = _v4;
          break;
        }
        _v4 -= 1;
      }
      if (-1 !== _v3) return _v0[_v2[_v3]];
    }(Array.isArray(_v0) ? Object.fromEntries(Object.entries((0, _v1.arrayToObjectNotation)(_v0, _v12)).map(([_v0, _v1]) => [_v0, _v1])) : _v0, _v10, _v12);
  }], 0);
}