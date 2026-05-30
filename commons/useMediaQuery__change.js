{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useMediaQuery", 0, function (_v0, _v1 = {}) {
    let {
        ssr: _v2 = !0,
        fallback: _v3
      } = _v1,
      {
        getWindow: _v4
      } = (0, _v1.useEnvironment)(),
      _v5 = Array.isArray(_v0) ? _v0 : [_v0],
      _v6 = Array.isArray(_v3) ? _v3 : [_v3];
    _v6 = _v6.filter(_v0 => null != _v0);
    let [_v7, _v8] = (0, _v2.useState)(() => _v5.map((_v0, _v1) => ({
      media: _v0,
      matches: _v2 ? !!_v6[_v1] : _v4().matchMedia(_v0).matches
    })));
    return (0, _v2.useEffect)(() => {
      let _v0 = _v4();
      _v8(_v5.map(_v0 => ({
        media: _v0,
        matches: _v0.matchMedia(_v0).matches
      })));
      let _v1 = _v5.map(_v0 => _v0.matchMedia(_v0)),
        _v2 = _v0 => {
          _v8(_v0 => _v0.slice().map(_v0 => _v0.media === _v0.media ? {
            ..._v0,
            matches: _v0.matches
          } : _v0));
        };
      return _v1.forEach(_v0 => {
        "function" == typeof _v0.addListener ? _v0.addListener(_v2) : _v0.addEventListener("change", _v2);
      }), () => {
        _v1.forEach(_v0 => {
          "function" == typeof _v0.removeListener ? _v0.removeListener(_v2) : _v0.removeEventListener("change", _v2);
        });
      };
    }, [_v4]), _v7.map(_v0 => _v0.matches);
  }]);
}