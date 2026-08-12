{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = void 0;
  var _v4 = _v3(_v0.r(0)),
    _v5 = _v3(_v0.r(0)),
    _v6 = _v3(_v0.r(0)),
    _v7 = _v0.r(0),
    _v8 = _v3(_v0.r(0)),
    _v9 = _v3(_v0.r(0)),
    _v10 = new Date(""),
    _v11 = function (_v0) {
      return "[object Date]" === Object.prototype.toString.call(_v0);
    };
  function _v12() {
    var _v0 = this;
    if (!(this instanceof _v12)) return new _v12();
    _v4.default.call(this, {
      type: "date"
    }), this.withMutation(function () {
      _v0.transform(function (_v0) {
        return this.isType(_v0) ? _v11(_v0) ? new Date(_v0) : _v0 : (_v0 = (0, _v6.default)(_v0)) ? new Date(_v0) : _v10;
      });
    });
  }
  _v2.default = _v12, (0, _v5.default)(_v12, _v4.default, {
    _typeCheck: function (_v0) {
      return _v11(_v0) && !isNaN(_v0.getTime());
    },
    min: function (_v0, _v1) {
      void 0 === _v1 && (_v1 = _v7.date.min);
      var _v2 = _v0;
      if (!_v9.default.isRef(_v2) && (_v2 = this.cast(_v0), !this._typeCheck(_v2))) throw TypeError("`min` must be a Date or a value that can be `cast()` to a Date");
      return this.test({
        message: _v1,
        name: "min",
        exclusive: !0,
        params: {
          min: _v0
        },
        test: function (_v0) {
          return (0, _v8.default)(_v0) || _v0 >= this.resolve(_v2);
        }
      });
    },
    max: function (_v0, _v1) {
      void 0 === _v1 && (_v1 = _v7.date.max);
      var _v2 = _v0;
      if (!_v9.default.isRef(_v2) && (_v2 = this.cast(_v0), !this._typeCheck(_v2))) throw TypeError("`max` must be a Date or a value that can be `cast()` to a Date");
      return this.test({
        message: _v1,
        name: "max",
        exclusive: !0,
        params: {
          max: _v0
        },
        test: function (_v0) {
          return (0, _v8.default)(_v0) || _v0 <= this.resolve(_v2);
        }
      });
    }
  }), _v1.exports = _v2.default;
}