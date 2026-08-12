{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v2.forwardRef)(function ({
    width: _v0 = "100%",
    height: _v1 = (0, _v3.rem)(16),
    borderRadius: _v2 = "pill",
    sx: _v3,
    children: _v4,
    ..._v5
  }, _v6) {
    return (0, _v1.jsx)(_v4.Box, {
      ref: _v6,
      overflow: "hidden",
      width: _v0,
      height: _v1,
      borderRadius: _v2,
      sx: _v3,
      ..._v5,
      children: (0, _v1.jsx)(_v5.Skeleton, {
        width: "100%",
        height: "100%",
        borderRadius: _v2,
        children: _v4
      })
    });
  });
  _v0.s(["BokehSkeleton", 0, _v6]);
}