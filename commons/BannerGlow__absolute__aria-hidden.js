{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => {
    let _v1 = _v0 => "number" == typeof _v0 ? (0, _v3.rem)(_v0) : _v0;
    return "number" == typeof _v0 ? (0, _v3.rem)(_v0) : "object" == typeof _v0 ? {
      base: _v1(_v0.base),
      md: _v1(_v0.md)
    } : _v0;
  };
  _v0.s(["BannerGlow", 0, ({
    geometry: _v0,
    asset: _v1
  }) => (0, _v1.jsx)(_v2.Box, {
    position: "absolute",
    top: _v4(_v0.top),
    left: void 0 !== _v0.left ? _v4(_v0.left) : void 0,
    right: void 0 !== _v0.right ? _v4(_v0.right) : void 0,
    width: _v4(_v0.size),
    height: _v4(_v0.size),
    "aria-hidden": "true",
    children: (0, _v1.jsx)(_v1, {
      width: "100%",
      height: "100%"
    })
  })]);
}