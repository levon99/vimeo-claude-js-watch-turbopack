{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9({
    children: _v0
  }) {
    let {
      query: _v1
    } = (0, _v3.useRouter)();
    return (0, _v5.useMountTracking)("SingleVideoLayout"), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v6.Navigation, {
        children: [(0, _v1.jsx)(_v2.default, {
          href: `/demo/next/videos/${_v1.id}`,
          children: "Video"
        }), (0, _v1.jsx)(_v2.default, {
          href: `/demo/next/videos/${_v1.id}/settings`,
          children: "Settings"
        })]
      }), _v0]
    });
  }
  _v0.s(["getLayout", 0, function (_v0, _v1) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v4.HeaderLayout, {
        ..._v1
      }), (0, _v1.jsx)(_v7.NextNavigationLayout, {}), (0, _v1.jsx)(_v8.VideoLayout, {
        children: (0, _v1.jsx)(_v9, {
          children: _v0
        })
      })]
    });
  }]);
}