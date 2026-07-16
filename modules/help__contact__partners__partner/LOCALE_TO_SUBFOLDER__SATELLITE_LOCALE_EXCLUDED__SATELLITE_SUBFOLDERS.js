{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v1.default.SUBFOLDER_TO_LOCALE,
    _v3 = Object.fromEntries(Object.entries(_v2).map(([_v0, _v1]) => [_v1, _v0])),
    _v4 = Object.keys(_v2),
    _v5 = _v1.default.SATELLITE_LOCALE_EXCLUDED;
  _v0.s(["LOCALE_TO_SUBFOLDER", 0, _v3, "SATELLITE_LOCALE_EXCLUDED", 0, _v5, "SATELLITE_SUBFOLDERS", 0, _v4, "SUBFOLDER_TO_LOCALE", 0, _v2], 0);
  let _v6 = "https://vimeo.com",
    _v7 = new Set([...Object.keys(_v2), ...Object.values(_v2)]);
  function _v8(_v0) {
    return _v0.split(/[?#]/)[0];
  }
  function _v9(_v0) {
    let _v1 = _v0.split("/");
    return _v1.length > 2 && _v7.has(_v1[1]) ? `/${_v1.slice(2).join("/")}` : _v0;
  }
  let _v10 = ["/video-uploader"];
  function _v11(_v0) {
    return _v0.startsWith("/satellite/") || _v10.includes(_v0);
  }
  _v0.s(["SEO_ORIGIN", 0, _v6, "isSatelliteRoute", 0, function (_v0) {
    return _v11(_v9(_v8(_v0)));
  }, "satelliteHreflangAlternates", 0, function (_v0) {
    let _v1 = [{
      hreflang: "x-default",
      href: `${_v6}${_v0}`
    }, {
      hreflang: "en",
      href: `${_v6}${_v0}`
    }];
    for (let _v0 of _v4) {
      let _v0 = _v2[_v0].split("-")[0];
      _v1.push({
        hreflang: _v0,
        href: `${_v6}/${_v0}${_v0}`
      });
    }
    return _v1;
  }, "satelliteLanguageUrl", 0, function (_v0, _v1) {
    let _v2,
      _v3 = _v9(_v8(_v0));
    if (!_v11(_v2 = _v8(_v3)) || _v5.includes(_v2)) return null;
    let _v4 = _v3[_v1];
    return _v4 ? `/${_v4}${_v3}` : _v3;
  }], 0);
}