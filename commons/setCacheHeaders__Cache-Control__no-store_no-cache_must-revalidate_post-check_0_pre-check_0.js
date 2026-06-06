{
  "use strict";

  _v0.i(0), _v0.i(0);
  var _v1 = _v0.i(0);
  _v0.s(["setCacheHeaders", 0, (_v0, _v1, {
    ttl: _v2 = 0,
    keys: _v3
  }) => {
    if ((0, _v1.isLoggedOut)(_v0) && (0 === _v2 ? _v1.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0") : _v1.setHeader("Cache-Control", `max-age=${_v2}`), _v1.setHeader("Expires", new Date(Date.now() + 0 * (_v2 || 0)).toUTCString()), _v3 && Object.keys(_v3).length > 0)) {
      let _v0 = Object.entries(_v3).map(([_v0, _v1]) => `${_v0}:${_v1}`);
      _v1.setHeader("X-HashTwo", _v0);
    }
  }]);
}