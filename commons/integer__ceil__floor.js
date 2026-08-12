{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = _v9;
  var _v4 = _v3(_v0.r(0)),
    _v5 = _v3(_v0.r(0)),
    _v6 = _v0.r(0),
    _v7 = _v3(_v0.r(0)),
    _v8 = function (_v0) {
      return (0, _v7.default)(_v0) || _v0 === (0 | _v0);
    };
  function _v9() {
    var _v0 = this;
    if (!(this instanceof _v9)) return new _v9();
    _v5.default.call(this, {
      type: "number"
    }), this.withMutation(function () {
      _v0.transform(function (_v0) {
        if (this.isType(_v0)) return _v0;
        var _v1 = parseFloat(_v0);
        return this.isType(_v1) ? _v1 : NaN;
      });
    });
  }
  (0, _v4.default)(_v9, _v5.default, {
    _typeCheck: function (_v0) {
      var _v1;
      return _v0 instanceof Number && (_v0 = _v0.valueOf()), "number" == typeof _v0 && (_v1 = _v0) == +_v1;
    },
    min: function (_v0, _v1) {
      return void 0 === _v1 && (_v1 = _v6.number.min), this.test({
        message: _v1,
        name: "min",
        exclusive: !0,
        params: {
          min: _v0
        },
        test: function (_v0) {
          return (0, _v7.default)(_v0) || _v0 >= this.resolve(_v0);
        }
      });
    },
    max: function (_v0, _v1) {
      return void 0 === _v1 && (_v1 = _v6.number.max), this.test({
        message: _v1,
        name: "max",
        exclusive: !0,
        params: {
          max: _v0
        },
        test: function (_v0) {
          return (0, _v7.default)(_v0) || _v0 <= this.resolve(_v0);
        }
      });
    },
    lessThan: function (_v0, _v1) {
      return void 0 === _v1 && (_v1 = _v6.number.lessThan), this.test({
        message: _v1,
        name: "max",
        exclusive: !0,
        params: {
          less: _v0
        },
        test: function (_v0) {
          return (0, _v7.default)(_v0) || _v0 < this.resolve(_v0);
        }
      });
    },
    moreThan: function (_v0, _v1) {
      return void 0 === _v1 && (_v1 = _v6.number.moreThan), this.test({
        message: _v1,
        name: "min",
        exclusive: !0,
        params: {
          more: _v0
        },
        test: function (_v0) {
          return (0, _v7.default)(_v0) || _v0 > this.resolve(_v0);
        }
      });
    },
    positive: function (_v0) {
      return void 0 === _v0 && (_v0 = _v6.number.positive), this.min(0, _v0);
    },
    negative: function (_v0) {
      return void 0 === _v0 && (_v0 = _v6.number.negative), this.max(0, _v0);
    },
    integer: function (_v0) {
      return void 0 === _v0 && (_v0 = _v6.number.integer), this.test({
        name: "integer",
        message: _v0,
        test: _v8
      });
    },
    truncate: function () {
      return this.transform(function (_v0) {
        return (0, _v7.default)(_v0) ? _v0 : 0 | _v0;
      });
    },
    round: function (_v0) {
      var _v1 = ["ceil", "floor", "round", "trunc"];
      if ("trunc" === (_v0 = _v0 && _v0.toLowerCase() || "round")) return this.truncate();
      if (-1 === _v1.indexOf(_v0.toLowerCase())) throw TypeError("Only valid options for round() are: " + _v1.join(", "));
      return this.transform(function (_v0) {
        return (0, _v7.default)(_v0) ? _v0 : Math[_v0](_v0);
      });
    }
  }), _v1.exports = _v2.default;
}