{
  "function" == typeof Object.create ? _v1.exports = function (_v0, _v1) {
    _v1 && (_v0.super_ = _v1, _v0.prototype = Object.create(_v1.prototype, {
      constructor: {
        value: _v0,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : _v1.exports = function (_v0, _v1) {
    if (_v1) {
      _v0.super_ = _v1;
      var _v2 = function () {};
      _v2.prototype = _v1.prototype, _v0.prototype = new _v2(), _v0.prototype.constructor = _v0;
    }
  };
}