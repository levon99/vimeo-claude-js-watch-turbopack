{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["withIris", 0, function (_v0, _v1, _v2, _v3) {
    void 0 === _v1 && (_v1 = !0), void 0 === _v2 && (_v2 = null), void 0 === _v3 && (_v3 = !1);
    var _v4 = _v0.name;
    null == _v4 || _v4.replace("Component", "");
    var _v5 = function (_v0) {
      var _v1 = _v0.theme,
        _v2 = (0, _v1.b)(_v0, ["theme"]),
        _v3 = (0, _v2.useContext)(_v3.ThemeContext);
      return _v1 = _v1 || _v3, _v0((0, _v1.c)({
        theme: _v1
      }, _v2));
    };
    return (0, _v2.forwardRef)(function (_v0, _v1) {
      return _v5((0, _v1.c)({
        forwardRef: _v1
      }, _v0));
    });
  }]);
}