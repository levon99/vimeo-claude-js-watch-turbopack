{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = 5;
  _v0.s(["setCacheHeaders", 0, (_v0, _v1, {
    ttl: _v2 = 0,
    cdnTtl: _v3 = _v2,
    keys: _v4
  }) => {
    if (!(0, _v1.isLoggedOut)(_v0)) return;
    let _v5 = !!_v0.headers["x-varnish"];
    if (0 === _v2 ? (_v1.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0"), _v5 || _v1.setHeader("CDN-Cache-Control", "no-store")) : _v5 ? (_v1.setHeader("Cache-Control", `max-age=${_v2}`), _v1.setHeader("Expires", new Date(Date.now() + 0 * _v2).toUTCString())) : (_v1.setHeader("Cache-Control", "no-store"), _v1.setHeader("CDN-Cache-Control", `max-age=${_v3}`)), _v4 && Object.keys(_v4).length > 0) {
      let _v0 = Object.entries(_v4).map(([_v0, _v1]) => `${_v0}:${_v1}`);
      _v1.setHeader("X-HashTwo", _v0), _v1.setHeader("Cache-Tag", _v0.join(","));
    }
  }]);
}