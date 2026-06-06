{
  "use strict";

  var _v3,
    _v4 = _v0.e && _v0.e.__extends || (_v3 = function (_v0, _v1) {
      return (_v3 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (_v0, _v1) {
        _v0.__proto__ = _v1;
      } || function (_v0, _v1) {
        for (var _v2 in _v1) _v1.hasOwnProperty(_v2) && (_v0[_v2] = _v1[_v2]);
      })(_v0, _v1);
    }, function (_v0, _v1) {
      function _v2() {
        this.constructor = _v0;
      }
      _v3(_v0, _v1), _v0.prototype = null === _v1 ? Object.create(_v1) : (_v2.prototype = _v1.prototype, new _v2());
    });
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  _v2.Streamer = function (_v0) {
    function _v1(_v0) {
      var _v1 = _v0.call(this, {
        readableObjectMode: !0,
        writableObjectMode: !1
      }) || this;
      return _v1.buffer = "", _v1.sep = _v0 && _v0.separator, _v1.quo = _v0 && _v0.quote, _v1;
    }
    return _v4(_v1, _v0), _v1.prototype._transform = function (_v0, _v1, _v2) {
      var _v3 = this;
      this.buffer = this.buffer.concat(_v0.toString()), void 0 === this.sep && (this.sep = _v6.detect(this.buffer));
      var _v4 = new _v7.Parser(this.buffer, this.sep, this.quo),
        _v5 = _v4.File();
      _v4.linePointer !== _v4.pointer && _v5.pop(), this.buffer = this.buffer.slice(_v4.linePointer), _v5.length > 0 && _v5.forEach(function (_v0) {
        _v3.push(_v0);
      }), _v2();
    }, _v1.prototype._flush = function (_v0) {
      var _v1 = this,
        _v2 = new _v7.Parser(this.buffer, this.sep, this.quo).File();
      _v2.length > 0 && _v2.forEach(function (_v0) {
        _v1.push(_v0);
      }), _v0();
    }, _v1;
  }(_v5.Transform);
}