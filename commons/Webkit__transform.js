{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.browserPrefixToKey = _v5, _v2.browserPrefixToStyle = function (_v0, _v1) {
    return _v1 ? `-${_v1.toLowerCase()}-${_v0}` : _v0;
  }, _v2.default = void 0, _v2.getPrefix = _v4;
  let _v3 = ["Moz", "Webkit", "O", "ms"];
  function _v4() {
    let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
    if ("u" < typeof window) return "";
    let _v1 = window.document?.documentElement?.style;
    if (!_v1 || _v0 in _v1) return "";
    for (let _v0 = 0; _v0 < _v3.length; _v0++) if (_v5(_v0, _v3[_v0]) in _v1) return _v3[_v0];
    return "";
  }
  function _v5(_v0, _v1) {
    return _v1 ? `${_v1}${function (_v0) {
      let _v1 = "",
        _v2 = !0;
      for (let _v0 = 0; _v0 < _v0.length; _v0++) _v2 ? (_v1 += _v0[_v0].toUpperCase(), _v2 = !1) : "-" === _v0[_v0] ? _v2 = !0 : _v1 += _v0[_v0];
      return _v1;
    }(_v0)}` : _v0;
  }
  _v2.default = _v4();
}