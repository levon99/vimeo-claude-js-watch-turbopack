{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["ShieldInfo", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M11.104 8.744c.02.062.05.119.09.17l.12.15a.999.999 0 0 0 1.42 0 .613.613 0 0 0 .12-.15.56.56 0 0 0 .09-.17.704.704 0 0 0 .06-.19 1.23 1.23 0 0 0 0-.19.881.881 0 0 0-.08-.39 1 1 0 0 0-1.3-.54 1.189 1.189 0 0 0-.33.22.998.998 0 0 0-.21.32.998.998 0 0 0-.08.39 1.23 1.23 0 0 0 0 .19.698.698 0 0 0 .1.19ZM12.024 16.384a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.239 1.732a2 2 0 0 1 1.522 0l7.5 3.088A2 2 0 0 1 21.5 6.67V11c0 6.46-4.761 10.24-8.99 11.4-.337.093-.691.09-1.027-.004C7.266 21.204 2.5 17.465 2.5 11V6.67a2 2 0 0 1 1.239-1.85l7.5-3.088ZM12 3.582 4.5 6.67V11c0 5.28 3.855 8.425 7.504 9.465C15.641 19.459 19.5 16.285 19.5 11V6.67L12 3.582Z"
      })]
    })
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    variables: _v1,
    ..._v2
  }) {
    return (0, _v3.measureLatency)("postVideosRestore", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/restore`, {
        ..._v2,
        method: "POST",
        body: JSON.stringify((0, _v4.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  _v0.s(["postVideosRestore", 0, _v5], 0);
}