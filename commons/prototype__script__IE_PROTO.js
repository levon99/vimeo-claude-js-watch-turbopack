{
  "use strict";

  var _v3,
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = "prototype",
    _v12 = "script",
    _v13 = _v10("IE_PROTO"),
    _v14 = function () {},
    _v15 = function (_v0) {
      return "<" + _v12 + ">" + _v0 + "</" + _v12 + ">";
    },
    _v16 = function (_v0) {
      _v0.write(_v15("")), _v0.close();
      var _v1 = _v0.parentWindow.Object;
      return _v0 = null, _v1;
    },
    _v17 = function () {
      var _v0,
        _v1 = _v9("iframe");
      return _v1.style.display = "none", _v8.appendChild(_v1), _v1.src = String("java" + _v12 + ":"), (_v0 = _v1.contentWindow.document).open(), _v0.write(_v15("document.F=Object")), _v0.close(), _v0.F;
    },
    _v18 = function () {
      try {
        _v3 = new ActiveXObject("htmlfile");
      } catch (_v0) {}
      _v18 = "u" > typeof document ? document.domain && _v3 ? _v16(_v3) : _v17() : _v16(_v3);
      for (var _v0 = _v6.length; _v0--;) delete _v18[_v11][_v6[_v0]];
      return _v18();
    };
  _v7[_v13] = !0, _v1.exports = Object.create || function (_v0, _v1) {
    var _v2;
    return null !== _v0 ? (_v14[_v11] = _v4(_v0), _v2 = new _v14(), _v14[_v11] = null, _v2[_v13] = _v0) : _v2 = _v18(), void 0 === _v1 ? _v2 : _v5.f(_v2, _v1);
  };
}