{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["HorizontalScrollShadow", 0, function ({
    className: _v0 = (0, _v4.createDomName)("scroll-shadow"),
    color: _v1,
    children: _v2 = null
  }) {
    return (0, _v1.jsx)(_v3.Box, {
      className: _v0,
      position: "absolute",
      width: "100%",
      height: (0, _v2.rem)(18),
      top: (0, _v2.rem)(-16),
      left: 0,
      bgGradient: `linear(to-t, ${_v1 ?? "surface"} 5%, rgba(0,0,0,0) 85%)`,
      children: _v2
    });
  }]);
}