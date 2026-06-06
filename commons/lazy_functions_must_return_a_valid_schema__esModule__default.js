{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = void 0;
  var _v4 = _v3(_v0.r(0)),
    _v5 = _v3(_v0.r(0)),
    _v6 = function () {
      function _v0(_v0) {
        this._resolve = function () {
          var _v0 = _v0.apply(void 0, arguments);
          if (!(0, _v5.default)(_v0)) throw TypeError("lazy() functions must return a valid schema");
          return _v0;
        };
      }
      var _v1 = _v0.prototype;
      return _v1.resolve = function (_v0) {
        var _v1 = _v0.value,
          _v2 = (0, _v4.default)(_v0, ["value"]);
        return this._resolve(_v1, _v2);
      }, _v1.cast = function (_v0, _v1) {
        return this._resolve(_v0, _v1).cast(_v0, _v1);
      }, _v1.validate = function (_v0, _v1) {
        return this._resolve(_v0, _v1).validate(_v0, _v1);
      }, _v0;
    }();
  _v6.prototype.__isYupSchema__ = !0, _v2.default = _v6, _v1.exports = _v2.default;
}