{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v1.default.SUBFOLDER_TO_LOCALE,
    _v3 = Object.fromEntries(Object.entries(_v2).map(([_v0, _v1]) => [_v1, _v0]));
  Object.keys(_v2);
  let _v4 = _v1.default.SATELLITE_LOCALE_EXCLUDED,
    _v5 = new Set([...Object.keys(_v2), ...Object.values(_v2)]);
  function _v6(_v0) {
    return _v0.split(/[?#]/)[0];
  }
  function _v7(_v0) {
    let _v1 = _v0.split("/");
    return _v1.length > 2 && _v5.has(_v1[1]) ? `/${_v1.slice(2).join("/")}` : _v0;
  }
  let _v8 = ["/video-uploader"];
  function _v9(_v0) {
    return _v0.startsWith("/satellite/") || _v8.includes(_v0);
  }
  function _v10(_v0, _v1) {
    let _v2,
      _v3 = _v7(_v6(_v0));
    if (!_v9(_v2 = _v6(_v3)) || _v4.includes(_v2)) return null;
    let _v4 = _v3[_v1];
    return _v4 ? `/${_v4}${_v3}` : _v3;
  }
  _v0.s(["isSatelliteRoute", 0, function (_v0) {
    return _v9(_v7(_v6(_v0)));
  }, "satelliteLanguageUrl", 0, _v10], 0), _v0.s(["applyLanguageChange", 0, function (_v0) {
    let {
        pathname: _v1,
        search: _v2,
        hash: _v3
      } = window.location,
      _v4 = _v10(_v1, _v0);
    _v4 ? window.location.assign(`${_v4}${_v2}${_v3}`) : window.location.reload();
  }], 0);
}