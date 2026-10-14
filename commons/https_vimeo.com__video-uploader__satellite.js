{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "https://vimeo.com",
    _v3 = new Set([...Object.keys(_v1.SUBFOLDER_TO_LOCALE), ...Object.values(_v1.SUBFOLDER_TO_LOCALE)]);
  function _v4(_v0) {
    return _v0.split(/[?#]/)[0];
  }
  function _v5(_v0) {
    let _v1 = _v0.split("/");
    return _v1.length > 2 && _v3.has(_v1[1]) ? `/${_v1.slice(2).join("/")}` : _v0;
  }
  let _v6 = ["/video-uploader"];
  function _v7(_v0) {
    return _v0.startsWith("/satellite/") || _v6.includes(_v0);
  }
  _v0.s(["SEO_ORIGIN", 0, _v2, "isSatelliteRoute", 0, function (_v0) {
    return _v7(_v5(_v4(_v0)));
  }, "satelliteHreflangAlternates", 0, function (_v0) {
    let _v1 = [{
      hreflang: "x-default",
      href: `${_v2}${_v0}`
    }, {
      hreflang: "en",
      href: `${_v2}${_v0}`
    }];
    for (let _v0 of _v1.SATELLITE_SUBFOLDERS) {
      let _v0 = _v1.SUBFOLDER_TO_LOCALE[_v0].split("-")[0];
      _v1.push({
        hreflang: _v0,
        href: `${_v2}/${_v0}${_v0}`
      });
    }
    return _v1;
  }, "satelliteLanguageUrl", 0, function (_v0, _v1) {
    let _v2,
      _v3 = _v5(_v4(_v0));
    if (!_v7(_v2 = _v4(_v3)) || _v1.SATELLITE_LOCALE_EXCLUDED.includes(_v2)) return null;
    let _v4 = _v1.LOCALE_TO_SUBFOLDER[_v1];
    return _v4 ? `/${_v4}${_v3}` : _v3;
  }]);
}