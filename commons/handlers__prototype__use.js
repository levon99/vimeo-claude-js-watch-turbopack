{
  "use strict";

  var _v3 = _v0.r(0);
  function _v4() {
    this.handlers = [];
  }
  _v4.prototype.use = function (_v0, _v1, _v2) {
    return this.handlers.push({
      fulfilled: _v0,
      rejected: _v1,
      synchronous: !!_v2 && _v2.synchronous,
      runWhen: _v2 ? _v2.runWhen : null
    }), this.handlers.length - 1;
  }, _v4.prototype.eject = function (_v0) {
    this.handlers[_v0] && (this.handlers[_v0] = null);
  }, _v4.prototype.forEach = function (_v0) {
    _v3.forEach(this.handlers, function (_v0) {
      null !== _v0 && _v0(_v0);
    });
  }, _v1.exports = _v4;
}