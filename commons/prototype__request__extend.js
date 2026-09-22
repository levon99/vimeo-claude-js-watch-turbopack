{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = function _v0(_v1) {
      var _v2 = new _v5(_v1),
        _v3 = _v4(_v5.prototype.request, _v2);
      return _v3.extend(_v3, _v5.prototype, _v2), _v3.extend(_v3, _v2), _v3.create = function (_v0) {
        return _v0(_v6(_v1, _v0));
      }, _v3;
    }(_v0.r(0));
  _v7.Axios = _v5, _v7.Cancel = _v0.r(0), _v7.CancelToken = _v0.r(0), _v7.isCancel = _v0.r(0), _v7.VERSION = _v0.r(0).version, _v7.all = function (_v0) {
    return Promise.all(_v0);
  }, _v7.spread = _v0.r(0), _v7.isAxiosError = _v0.r(0), _v1.exports = _v7, _v1.exports.default = _v7;
}