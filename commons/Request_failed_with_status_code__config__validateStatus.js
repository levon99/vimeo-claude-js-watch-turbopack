{
  "use strict";

  var _v3 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3 = _v2.config.validateStatus;
    !_v2.status || !_v3 || _v3(_v2.status) ? _v0(_v2) : _v1(_v3("Request failed with status code " + _v2.status, _v2.config, null, _v2.request, _v2));
  };
}