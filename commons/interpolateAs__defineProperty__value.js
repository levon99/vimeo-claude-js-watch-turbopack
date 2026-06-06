{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "interpolateAs", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0, _v1, _v2) {
    let _v3 = "",
      _v4 = (0, _v4.getRouteRegex)(_v0),
      _v5 = _v4.groups,
      _v6 = (_v1 !== _v0 ? (0, _v3.getRouteMatcher)(_v4)(_v1) : "") || _v2;
    _v3 = _v0;
    let _v7 = Object.keys(_v5);
    return _v7.every(_v0 => {
      let _v1 = _v6[_v0] || "",
        {
          repeat: _v2,
          optional: _v3
        } = _v5[_v0],
        _v4 = `[${_v2 ? "..." : ""}${_v0}]`;
      return _v3 && (_v4 = `${!_v1 ? "/" : ""}[${_v4}]`), _v2 && !Array.isArray(_v1) && (_v1 = [_v1]), (_v3 || _v0 in _v6) && (_v3 = _v3.replace(_v4, _v2 ? _v1.map(_v0 => encodeURIComponent(_v0)).join("/") : encodeURIComponent(_v1)) || "/");
    }) || (_v3 = ""), {
      params: _v7,
      result: _v3
    };
  }
}