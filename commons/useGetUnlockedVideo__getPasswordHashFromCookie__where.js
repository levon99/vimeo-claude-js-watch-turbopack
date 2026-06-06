{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useGetUnlockedVideo", 0, function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      _v3 = _v2 ? (0, _v2.getPasswordHashFromCookie)(_v2?.where.videoId) : null,
      _v4 = _v2 ? {
        ..._v2,
        query: {
          ..._v2?.query,
          ...(_v3 && {
            password: _v3
          })
        }
      } : null;
    return (0, _v1.useGetVideo)(_v4, _v1);
  }]);
}