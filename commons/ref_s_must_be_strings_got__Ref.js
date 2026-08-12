{
  "use strict";

  _v2.__esModule = !0, _v2.default = void 0;
  var _v3 = _v0.r(0),
    _v4 = function (_v0) {
      if ("string" != typeof _v0) throw TypeError("ref's must be strings, got: " + _v0);
    },
    _v5 = function () {
      _v1.isRef = function (_v0) {
        return !!(_v0 && (_v0.__isYupRef || _v0 instanceof _v1));
      };
      var _v0 = _v1.prototype;
      function _v1(_v0, _v1, _v2) {
        void 0 === _v2 && (_v2 = {}), _v4(_v0);
        var _v3 = _v2.contextPrefix || "$";
        "function" == typeof _v0 && (_v0 = "."), this.key = _v0.trim(), this.prefix = _v3, this.isContext = 0 === this.key.indexOf(_v3), this.isSelf = "." === this.key, this.path = this.isContext ? this.key.slice(this.prefix.length) : this.key, this._get = (0, _v3.getter)(this.path, !0), this.map = _v1 || function (_v0) {
          return _v0;
        };
      }
      return _v0.toString = function () {
        return "Ref(" + this.key + ")";
      }, _v0.resolve = function () {
        return this;
      }, _v0.cast = function (_v0, _v1) {
        var _v2 = _v1.parent,
          _v3 = _v1.context;
        return this.getValue(_v2, _v3);
      }, _v0.getValue = function (_v0, _v1) {
        var _v2 = this.isContext,
          _v3 = this._get(_v2 ? _v1 : _v0 || _v1 || {});
        return this.map(_v3);
      }, _v1;
    }();
  _v2.default = _v5, _v5.prototype.__isYupRef = !0, _v1.exports = _v2.default;
}