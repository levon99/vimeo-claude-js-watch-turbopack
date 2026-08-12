{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = void 0;
  var _v4 = _v3(_v0.r(0)),
    _v5 = _v3(_v0.r(0));
  function _v6() {
    var _v0 = this;
    if (!(this instanceof _v6)) return new _v6();
    _v5.default.call(this, {
      type: "boolean"
    }), this.withMutation(function () {
      _v0.transform(function (_v0) {
        if (!this.isType(_v0)) {
          if (/^(true|1)$/i.test(_v0)) return !0;
          if (/^(false|0)$/i.test(_v0)) return !1;
        }
        return _v0;
      });
    });
  }
  _v2.default = _v6, (0, _v4.default)(_v6, _v5.default, {
    _typeCheck: function (_v0) {
      return _v0 instanceof Boolean && (_v0 = _v0.valueOf()), "boolean" == typeof _v0;
    }
  }), _v1.exports = _v2.default;
}