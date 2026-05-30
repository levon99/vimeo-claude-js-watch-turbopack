{
  "use strict";

  var _v3 = _v0.r(0);
  function _v4(_v0) {
    if ("function" != typeof _v0) throw TypeError("executor must be a function.");
    this.promise = new Promise(function (_v0) {
      _v1 = _v0;
    });
    var _v1,
      _v2 = this;
    this.promise.then(function (_v0) {
      if (_v2._listeners) {
        var _v1,
          _v2 = _v2._listeners.length;
        for (_v1 = 0; _v1 < _v2; _v1++) _v2._listeners[_v1](_v0);
        _v2._listeners = null;
      }
    }), this.promise.then = function (_v0) {
      var _v1,
        _v2 = new Promise(function (_v0) {
          _v2.subscribe(_v0), _v1 = _v0;
        }).then(_v0);
      return _v2.cancel = function () {
        _v2.unsubscribe(_v1);
      }, _v2;
    }, _v0(function (_v0) {
      _v2.reason || (_v2.reason = new _v3(_v0), _v1(_v2.reason));
    });
  }
  _v4.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }, _v4.prototype.subscribe = function (_v0) {
    this.reason ? _v0(this.reason) : this._listeners ? this._listeners.push(_v0) : this._listeners = [_v0];
  }, _v4.prototype.unsubscribe = function (_v0) {
    if (this._listeners) {
      var _v1 = this._listeners.indexOf(_v0);
      -1 !== _v1 && this._listeners.splice(_v1, 1);
    }
  }, _v4.source = function () {
    var _v0;
    return {
      token: new _v4(function (_v0) {
        _v0 = _v0;
      }),
      cancel: _v0
    };
  }, _v1.exports = _v4;
}