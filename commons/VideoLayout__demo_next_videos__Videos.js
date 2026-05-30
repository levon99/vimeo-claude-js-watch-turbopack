{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7({
    children: _v0
  }) {
    return (0, _v4.useMountTracking)("VideoLayout"), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v5.Navigation, {
        children: [(0, _v1.jsx)(_v2.default, {
          href: "/demo/next/videos",
          children: "Videos"
        }), (0, _v1.jsx)(_v2.default, {
          href: "/demo/next/videos/categories",
          children: "Categories"
        })]
      }), _v0]
    });
  }
  _v0.s(["VideoLayout", 0, _v7, "getLayout", 0, function (_v0, _v1) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v3.HeaderLayout, {
        ..._v1
      }), (0, _v1.jsx)(_v6.NextNavigationLayout, {}), (0, _v1.jsx)(_v7, {
        children: _v0
      })]
    });
  }]);
}