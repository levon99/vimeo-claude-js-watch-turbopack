{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = _v6;
  var _v4 = _v3(_v0.r(0)),
    _v5 = /\$\{\s*(\w+)\s*\}/g;
  function _v6(_v0, _v1, _v2, _v3) {
    var _v4 = this;
    this.name = "ValidationError", this.value = _v1, this.path = _v2, this.type = _v3, this.errors = [], this.inner = [], _v0 && [].concat(_v0).forEach(function (_v0) {
      _v4.errors = _v4.errors.concat(_v0.errors || _v0), _v0.inner && (_v4.inner = _v4.inner.concat(_v0.inner.length ? _v0.inner : _v0));
    }), this.message = this.errors.length > 1 ? this.errors.length + " errors occurred" : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, _v6);
  }
  _v6.prototype = Object.create(Error.prototype), _v6.prototype.constructor = _v6, _v6.isError = function (_v0) {
    return _v0 && "ValidationError" === _v0.name;
  }, _v6.formatError = function (_v0, _v1) {
    "string" == typeof _v0 && (_v2 = _v0, _v0 = function (_v0) {
      return _v2.replace(_v5, function (_v0, _v1) {
        return (0, _v4.default)(_v0[_v1]);
      });
    });
    var _v2,
      _v3 = function (_v0) {
        return _v0.path = _v0.label || _v0.path || "this", "function" == typeof _v0 ? _v0(_v0) : _v0;
      };
    return 1 == arguments.length ? _v3 : _v3(_v1);
  }, _v1.exports = _v2.default;
}