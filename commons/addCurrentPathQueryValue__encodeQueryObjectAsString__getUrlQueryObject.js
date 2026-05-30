{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["addCurrentPathQueryValue", 0, function (_v0, _v1, _v2 = window.location.search) {
    let _v3 = window.location.hash || "",
      _v4 = _v1.default.parse(_v2),
      _v5 = _v1.default.stringify({
        ..._v4,
        [_v0]: _v1
      }),
      _v6 = `${_v2.environmentConfig.PROTOCOL}//${_v2.environmentConfig.HOST}${window.location.pathname}${_v5 ? `?${_v5}` : ""}${_v3}`;
    window.history.replaceState({}, "", _v6);
  }, "encodeQueryObjectAsString", 0, function (_v0, _v1) {
    let _v2 = _v0 ? _v1.default.stringify(_v0, _v1) : "";
    return _v2 ? "?" + _v2 : "";
  }, "getUrlQueryObject", 0, function (_v0 = window.location.search) {
    return _v1.default.parse(_v0);
  }, "getUrlQueryValue", 0, function (_v0, _v1 = location.search) {
    let _v2 = _v1.default.parse(_v1);
    return _v0 in _v2 ? _v2[_v0] : null;
  }, "removeCurrentPathQueryValue", 0, function (_v0, _v1 = window.location.search) {
    let _v2 = window.location.hash || "",
      _v3 = _v1.default.parse(_v1),
      _v4 = _v1.default.stringify((0, _v3.omit)(_v3, _v0)),
      _v5 = `${_v2.environmentConfig.PROTOCOL}//${_v2.environmentConfig.HOST}${window.location.pathname}${_v4 ? `?${_v4}` : ""}${_v2}`;
    window.history.replaceState({}, "", _v5);
  }]);
}