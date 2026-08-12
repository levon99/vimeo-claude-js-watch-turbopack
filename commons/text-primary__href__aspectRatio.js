{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["default", 0, _v0 => {
    let {
        href: _v1,
        aspectRatio: _v2,
        width: _v3,
        ..._v4
      } = _v0,
      _v5 = (0, _v3.useContext)(_v4.ViewerContext),
      _v6 = _v5?.isSimplifiedSite ?? !1;
    return (0, _v1.jsx)(_v2.default, {
      href: _v1,
      ..._v4,
      children: _v6 ? (0, _v1.jsx)(_v6.default, {}) : (0, _v1.jsx)(_v5.default, {
        aspectRatio: _v2,
        color: "text-primary",
        width: _v3
      })
    });
  }]);
}