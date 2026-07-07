{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["applyLanguageChange", 0, function (_v0) {
    let {
        pathname: _v1,
        search: _v2,
        hash: _v3
      } = window.location,
      _v4 = (0, _v1.satelliteLanguageUrl)(_v1, _v0);
    _v4 ? window.location.assign(`${_v4}${_v2}${_v3}`) : window.location.reload();
  }]);
}