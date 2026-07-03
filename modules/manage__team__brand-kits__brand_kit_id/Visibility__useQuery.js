{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["Visibility", 0, function (_v0) {
    let {
        breakpoint: _v1,
        hide: _v2,
        children: _v3,
        ssr: _v4
      } = _v0,
      [_v5] = (0, _v1.useMediaQuery)(_v1, {
        ssr: _v4
      });
    return (_v2 ? !_v5 : _v5) ? _v3 : null;
  }], 0);
  var _v2 = _v0.i(0),
    _v3 = (_v0, _v1) => {
      var _v2, _v3;
      return null != (_v3 = null == (_v2 = null == _v0 ? void 0 : _v0.breakpoints) ? void 0 : _v2[_v1]) ? _v3 : _v1;
    };
  _v0.s(["useQuery", 0, function (_v0) {
    let {
        breakpoint: _v1 = "",
        below: _v2,
        above: _v3
      } = _v0,
      _v4 = (0, _v2.useTheme)(),
      _v5 = _v3(_v4, _v2),
      _v6 = _v3(_v4, _v3),
      _v7 = _v1;
    return _v5 ? _v7 = `(max-width: ${_v5})` : _v6 && (_v7 = `(min-width: ${_v6})`), _v7;
  }], 0);
}