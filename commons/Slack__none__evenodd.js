{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["Slack", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      children: [(0, _v1.jsx)("path", {
        d: "M6.2 14.64a2.1 2.1 0 1 1-2.1-2.1h2.1v2.1ZM7.26 14.64a2.1 2.1 0 1 1 4.2 0v5.26a2.1 2.1 0 1 1-4.2 0v-5.26Z",
        fill: "#E01E5A"
      }), (0, _v1.jsx)("path", {
        d: "M9.36 6.2a2.1 2.1 0 1 1 2.1-2.1v2.1h-2.1ZM9.36 7.26a2.1 2.1 0 1 1 0 4.2H4.1a2.1 2.1 0 1 1 0-4.2h5.26Z",
        fill: "#36C5F0"
      }), (0, _v1.jsx)("path", {
        d: "M17.8 9.36a2.1 2.1 0 1 1 2.1 2.1h-2.1v-2.1ZM16.74 9.36a2.1 2.1 0 1 1-4.2 0V4.1a2.1 2.1 0 1 1 4.2 0v5.26Z",
        fill: "#2EB67D"
      }), (0, _v1.jsx)("path", {
        d: "M14.64 17.8a2.1 2.1 0 1 1-2.1 2.1v-2.1h2.1ZM14.64 16.74a2.1 2.1 0 1 1 0-4.2h5.26a2.1 2.1 0 1 1 0 4.2h-5.26Z",
        fill: "#ECB22E"
      })]
    })
  })], 0);
  var _v3 = _v0.i(0);
  _v0.s(["FeatureFlag", 0, ({
    children: _v0,
    feature: _v1,
    checkLocalStorage: _v2 = !0
  }) => (0, _v3.shouldShowInDevelopmentFeature)(_v1, _v2) ? (0, _v1.jsx)(_v1.Fragment, {
    children: _v0
  }) : (0, _v1.jsx)(_v1.Fragment, {})], 0);
}