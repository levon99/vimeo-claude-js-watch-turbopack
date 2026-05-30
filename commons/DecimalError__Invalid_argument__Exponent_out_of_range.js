{
  !function (_v0) {
    "use strict";

    var _v1,
      _v2 = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
      },
      _v3 = !0,
      _v4 = "[DecimalError] ",
      _v5 = _v4 + "Invalid argument: ",
      _v6 = _v4 + "Exponent out of range: ",
      _v7 = Math.floor,
      _v8 = Math.pow,
      _v9 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      _v10 = _v7(1286742750677284.5),
      _v11 = {};
    function _v12(_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10 = _v0.constructor,
        _v11 = _v10.precision;
      if (!_v0.s || !_v1.s) return _v1.s || (_v1 = new _v10(_v0)), _v3 ? _v22(_v1, _v11) : _v1;
      if (_v8 = _v0.d, _v9 = _v1.d, _v6 = _v0.e, _v4 = _v1.e, _v8 = _v8.slice(), _v5 = _v6 - _v4) {
        for (_v5 < 0 ? (_v3 = _v8, _v5 = -_v5, _v7 = _v9.length) : (_v3 = _v9, _v4 = _v6, _v7 = _v8.length), _v5 > (_v7 = (_v6 = Math.ceil(_v11 / 7)) > _v7 ? _v6 + 1 : _v7 + 1) && (_v5 = _v7, _v3.length = 1), _v3.reverse(); _v5--;) _v3.push(0);
        _v3.reverse();
      }
      for ((_v7 = _v8.length) - (_v5 = _v9.length) < 0 && (_v5 = _v7, _v3 = _v9, _v9 = _v8, _v8 = _v3), _v2 = 0; _v5;) _v2 = (_v8[--_v5] = _v8[_v5] + _v9[_v5] + _v2) / 0 | 0, _v8[_v5] %= 0;
      for (_v2 && (_v8.unshift(_v2), ++_v4), _v7 = _v8.length; 0 == _v8[--_v7];) _v8.pop();
      return _v1.d = _v8, _v1.e = _v4, _v3 ? _v22(_v1, _v11) : _v1;
    }
    function _v13(_v0, _v1, _v2) {
      if (_v0 !== ~~_v0 || _v0 < _v1 || _v0 > _v2) throw Error(_v5 + _v0);
    }
    function _v14(_v0) {
      var _v1,
        _v2,
        _v3,
        _v4 = _v0.length - 1,
        _v5 = "",
        _v6 = _v0[0];
      if (_v4 > 0) {
        for (_v5 += _v6, _v1 = 1; _v1 < _v4; _v1++) (_v2 = 7 - (_v3 = _v0[_v1] + "").length) && (_v5 += _v19(_v2)), _v5 += _v3;
        (_v2 = 7 - (_v3 = (_v6 = _v0[_v1]) + "").length) && (_v5 += _v19(_v2));
      } else if (0 === _v6) return "0";
      for (; _v6 % 10 == 0;) _v6 /= 10;
      return _v5 + _v6;
    }
    _v11.absoluteValue = _v11.abs = function () {
      var _v0 = new this.constructor(this);
      return _v0.s && (_v0.s = 1), _v0;
    }, _v11.comparedTo = _v11.cmp = function (_v0) {
      var _v1, _v2, _v3, _v4;
      if (_v0 = new this.constructor(_v0), this.s !== _v0.s) return this.s || -_v0.s;
      if (this.e !== _v0.e) return this.e > _v0.e ^ this.s < 0 ? 1 : -1;
      for (_v1 = 0, _v2 = (_v3 = this.d.length) < (_v4 = _v0.d.length) ? _v3 : _v4; _v1 < _v2; ++_v1) if (this.d[_v1] !== _v0.d[_v1]) return this.d[_v1] > _v0.d[_v1] ^ this.s < 0 ? 1 : -1;
      return _v3 === _v4 ? 0 : _v3 > _v4 ^ this.s < 0 ? 1 : -1;
    }, _v11.decimalPlaces = _v11.dp = function () {
      var _v0 = this.d.length - 1,
        _v1 = (_v0 - this.e) * 7;
      if (_v0 = this.d[_v0]) for (; _v0 % 10 == 0; _v0 /= 10) _v1--;
      return _v1 < 0 ? 0 : _v1;
    }, _v11.dividedBy = _v11.div = function (_v0) {
      return _v15(this, new this.constructor(_v0));
    }, _v11.dividedToIntegerBy = _v11.idiv = function (_v0) {
      var _v1 = this.constructor;
      return _v22(_v15(this, new _v1(_v0), 0, 1), _v1.precision);
    }, _v11.equals = _v11.eq = function (_v0) {
      return !this.cmp(_v0);
    }, _v11.exponent = function () {
      return _v17(this);
    }, _v11.greaterThan = _v11.gt = function (_v0) {
      return this.cmp(_v0) > 0;
    }, _v11.greaterThanOrEqualTo = _v11.gte = function (_v0) {
      return this.cmp(_v0) >= 0;
    }, _v11.isInteger = _v11.isint = function () {
      return this.e > this.d.length - 2;
    }, _v11.isNegative = _v11.isneg = function () {
      return this.s < 0;
    }, _v11.isPositive = _v11.ispos = function () {
      return this.s > 0;
    }, _v11.isZero = function () {
      return 0 === this.s;
    }, _v11.lessThan = _v11.lt = function (_v0) {
      return 0 > this.cmp(_v0);
    }, _v11.lessThanOrEqualTo = _v11.lte = function (_v0) {
      return 1 > this.cmp(_v0);
    }, _v11.logarithm = _v11.log = function (_v0) {
      var _v1,
        _v2 = this.constructor,
        _v3 = _v2.precision,
        _v4 = _v3 + 5;
      if (void 0 === _v0) _v0 = new _v2(10);else if ((_v0 = new _v2(_v0)).s < 1 || _v0.eq(_v1)) throw Error(_v4 + "NaN");
      if (this.s < 1) throw Error(_v4 + (this.s ? "NaN" : "-Infinity"));
      return this.eq(_v1) ? new _v2(0) : (_v3 = !1, _v1 = _v15(_v20(this, _v4), _v20(_v0, _v4), _v4), _v3 = !0, _v22(_v1, _v3));
    }, _v11.minus = _v11.sub = function (_v0) {
      return _v0 = new this.constructor(_v0), this.s == _v0.s ? _v23(this, _v0) : _v12(this, (_v0.s = -_v0.s, _v0));
    }, _v11.modulo = _v11.mod = function (_v0) {
      var _v1,
        _v2 = this.constructor,
        _v3 = _v2.precision;
      if (!(_v0 = new _v2(_v0)).s) throw Error(_v4 + "NaN");
      return this.s ? (_v3 = !1, _v1 = _v15(this, _v0, 0, 1).times(_v0), _v3 = !0, this.minus(_v1)) : _v22(new _v2(this), _v3);
    }, _v11.naturalExponential = _v11.exp = function () {
      return _v16(this);
    }, _v11.naturalLogarithm = _v11.ln = function () {
      return _v20(this);
    }, _v11.negated = _v11.neg = function () {
      var _v0 = new this.constructor(this);
      return _v0.s = -_v0.s || 0, _v0;
    }, _v11.plus = _v11.add = function (_v0) {
      return _v0 = new this.constructor(_v0), this.s == _v0.s ? _v12(this, _v0) : _v23(this, (_v0.s = -_v0.s, _v0));
    }, _v11.precision = _v11.sd = function (_v0) {
      var _v1, _v2, _v3;
      if (void 0 !== _v0 && !!_v0 !== _v0 && 1 !== _v0 && 0 !== _v0) throw Error(_v5 + _v0);
      if (_v1 = _v17(this) + 1, _v2 = 7 * (_v3 = this.d.length - 1) + 1, _v3 = this.d[_v3]) {
        for (; _v3 % 10 == 0; _v3 /= 10) _v2--;
        for (_v3 = this.d[0]; _v3 >= 10; _v3 /= 10) _v2++;
      }
      return _v0 && _v1 > _v2 ? _v1 : _v2;
    }, _v11.squareRoot = _v11.sqrt = function () {
      var _v0,
        _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = this.constructor;
      if (this.s < 1) {
        if (!this.s) return new _v7(0);
        throw Error(_v4 + "NaN");
      }
      for (_v0 = _v17(this), _v3 = !1, 0 == (_v4 = Math.sqrt(+this)) || _v4 == 1 / 0 ? (((_v1 = _v14(this.d)).length + _v0) % 2 == 0 && (_v1 += "0"), _v4 = Math.sqrt(_v1), _v0 = _v7((_v0 + 1) / 2) - (_v0 < 0 || _v0 % 2), _v3 = new _v7(_v1 = _v4 == 1 / 0 ? "5e" + _v0 : (_v1 = _v4.toExponential()).slice(0, _v1.indexOf("e") + 1) + _v0)) : _v3 = new _v7(_v4.toString()), _v4 = _v6 = (_v2 = _v7.precision) + 3;;) if (_v3 = (_v5 = _v3).plus(_v15(this, _v5, _v6 + 2)).times(.5), _v14(_v5.d).slice(0, _v6) === (_v1 = _v14(_v3.d)).slice(0, _v6)) {
        if (_v1 = _v1.slice(_v6 - 3, _v6 + 1), _v4 == _v6 && "4999" == _v1) {
          if (_v22(_v5, _v2 + 1, 0), _v5.times(_v5).eq(this)) {
            _v3 = _v5;
            break;
          }
        } else if ("9999" != _v1) break;
        _v6 += 4;
      }
      return _v3 = !0, _v22(_v3, _v2);
    }, _v11.times = _v11.mul = function (_v0) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10 = this.constructor,
        _v11 = this.d,
        _v12 = (_v0 = new _v10(_v0)).d;
      if (!this.s || !_v0.s) return new _v10(0);
      for (_v0.s *= this.s, _v2 = this.e + _v0.e, (_v8 = _v11.length) < (_v9 = _v12.length) && (_v5 = _v11, _v11 = _v12, _v12 = _v5, _v6 = _v8, _v8 = _v9, _v9 = _v6), _v5 = [], _v3 = _v6 = _v8 + _v9; _v3--;) _v5.push(0);
      for (_v3 = _v9; --_v3 >= 0;) {
        for (_v1 = 0, _v4 = _v8 + _v3; _v4 > _v3;) _v7 = _v5[_v4] + _v12[_v3] * _v11[_v4 - _v3 - 1] + _v1, _v5[_v4--] = _v7 % 0 | 0, _v1 = _v7 / 0 | 0;
        _v5[_v4] = (_v5[_v4] + _v1) % 0 | 0;
      }
      for (; !_v5[--_v6];) _v5.pop();
      return _v1 ? ++_v2 : _v5.shift(), _v0.d = _v5, _v0.e = _v2, _v3 ? _v22(_v0, _v10.precision) : _v0;
    }, _v11.toDecimalPlaces = _v11.todp = function (_v0, _v1) {
      var _v2 = this,
        _v3 = _v2.constructor;
      return (_v2 = new _v3(_v2), void 0 === _v0) ? _v2 : (_v13(_v0, 0, 0), void 0 === _v1 ? _v1 = _v3.rounding : _v13(_v1, 0, 8), _v22(_v2, _v0 + _v17(_v2) + 1, _v1));
    }, _v11.toExponential = function (_v0, _v1) {
      var _v2,
        _v3 = this,
        _v4 = _v3.constructor;
      return void 0 === _v0 ? _v2 = _v24(_v3, !0) : (_v13(_v0, 0, 0), void 0 === _v1 ? _v1 = _v4.rounding : _v13(_v1, 0, 8), _v2 = _v24(_v3 = _v22(new _v4(_v3), _v0 + 1, _v1), !0, _v0 + 1)), _v2;
    }, _v11.toFixed = function (_v0, _v1) {
      var _v2,
        _v3,
        _v4 = this.constructor;
      return void 0 === _v0 ? _v24(this) : (_v13(_v0, 0, 0), void 0 === _v1 ? _v1 = _v4.rounding : _v13(_v1, 0, 8), _v2 = _v24((_v3 = _v22(new _v4(this), _v0 + _v17(this) + 1, _v1)).abs(), !1, _v0 + _v17(_v3) + 1), this.isneg() && !this.isZero() ? "-" + _v2 : _v2);
    }, _v11.toInteger = _v11.toint = function () {
      var _v0 = this.constructor;
      return _v22(new _v0(this), _v17(this) + 1, _v0.rounding);
    }, _v11.toNumber = function () {
      return +this;
    }, _v11.toPower = _v11.pow = function (_v0) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = this,
        _v8 = _v7.constructor,
        _v9 = +(_v0 = new _v8(_v0));
      if (!_v0.s) return new _v8(_v1);
      if (!(_v7 = new _v8(_v7)).s) {
        if (_v0.s < 1) throw Error(_v4 + "Infinity");
        return _v7;
      }
      if (_v7.eq(_v1)) return _v7;
      if (_v3 = _v8.precision, _v0.eq(_v1)) return _v22(_v7, _v3);
      if (_v6 = (_v1 = _v0.e) >= (_v2 = _v0.d.length - 1), _v5 = _v7.s, _v6) {
        if ((_v2 = _v9 < 0 ? -_v9 : _v9) <= 0) {
          for (_v4 = new _v8(_v1), _v1 = Math.ceil(_v3 / 7 + 4), _v3 = !1; _v2 % 2 && _v25((_v4 = _v4.times(_v7)).d, _v1), 0 !== (_v2 = _v7(_v2 / 2));) _v25((_v7 = _v7.times(_v7)).d, _v1);
          return _v3 = !0, _v0.s < 0 ? new _v8(_v1).div(_v4) : _v22(_v4, _v3);
        }
      } else if (_v5 < 0) throw Error(_v4 + "NaN");
      return _v5 = _v5 < 0 && 1 & _v0.d[Math.max(_v1, _v2)] ? -1 : 1, _v7.s = 1, _v3 = !1, _v4 = _v0.times(_v20(_v7, _v3 + 12)), _v3 = !0, (_v4 = _v16(_v4)).s = _v5, _v4;
    }, _v11.toPrecision = function (_v0, _v1) {
      var _v2,
        _v3,
        _v4 = this,
        _v5 = _v4.constructor;
      return void 0 === _v0 ? (_v2 = _v17(_v4), _v3 = _v24(_v4, _v2 <= _v5.toExpNeg || _v2 >= _v5.toExpPos)) : (_v13(_v0, 1, 0), void 0 === _v1 ? _v1 = _v5.rounding : _v13(_v1, 0, 8), _v2 = _v17(_v4 = _v22(new _v5(_v4), _v0, _v1)), _v3 = _v24(_v4, _v0 <= _v2 || _v2 <= _v5.toExpNeg, _v0)), _v3;
    }, _v11.toSignificantDigits = _v11.tosd = function (_v0, _v1) {
      var _v2 = this.constructor;
      return void 0 === _v0 ? (_v0 = _v2.precision, _v1 = _v2.rounding) : (_v13(_v0, 1, 0), void 0 === _v1 ? _v1 = _v2.rounding : _v13(_v1, 0, 8)), _v22(new _v2(this), _v0, _v1);
    }, _v11.toString = _v11.valueOf = _v11.val = _v11.toJSON = function () {
      var _v0 = _v17(this),
        _v1 = this.constructor;
      return _v24(this, _v0 <= _v1.toExpNeg || _v0 >= _v1.toExpPos);
    };
    var _v15 = function () {
      function _v0(_v0, _v1) {
        var _v2,
          _v3 = 0,
          _v4 = _v0.length;
        for (_v0 = _v0.slice(); _v4--;) _v2 = _v0[_v4] * _v1 + _v3, _v0[_v4] = _v2 % 0 | 0, _v3 = _v2 / 0 | 0;
        return _v3 && _v0.unshift(_v3), _v0;
      }
      function _v1(_v0, _v1, _v2, _v3) {
        var _v4, _v5;
        if (_v2 != _v3) _v5 = _v2 > _v3 ? 1 : -1;else for (_v4 = _v5 = 0; _v4 < _v2; _v4++) if (_v0[_v4] != _v1[_v4]) {
          _v5 = _v0[_v4] > _v1[_v4] ? 1 : -1;
          break;
        }
        return _v5;
      }
      function _v2(_v0, _v1, _v2) {
        for (var _v3 = 0; _v2--;) _v0[_v2] -= _v3, _v3 = +(_v0[_v2] < _v1[_v2]), _v0[_v2] = 0 * _v3 + _v0[_v2] - _v1[_v2];
        for (; !_v0[0] && _v0.length > 1;) _v0.shift();
      }
      return function (_v0, _v1, _v2, _v3) {
        var _v4,
          _v5,
          _v6,
          _v7,
          _v8,
          _v9,
          _v10,
          _v11,
          _v12,
          _v13,
          _v14,
          _v15,
          _v16,
          _v17,
          _v18,
          _v19,
          _v20,
          _v21,
          _v22 = _v0.constructor,
          _v23 = _v0.s == _v1.s ? 1 : -1,
          _v24 = _v0.d,
          _v25 = _v1.d;
        if (!_v0.s) return new _v22(_v0);
        if (!_v1.s) throw Error(_v4 + "Division by zero");
        for (_v6 = 0, _v5 = _v0.e - _v1.e, _v20 = _v25.length, _v18 = _v24.length, _v11 = (_v10 = new _v22(_v23)).d = []; _v25[_v6] == (_v24[_v6] || 0);) ++_v6;
        if (_v25[_v6] > (_v24[_v6] || 0) && --_v5, (_v15 = null == _v2 ? _v2 = _v22.precision : _v3 ? _v2 + (_v17(_v0) - _v17(_v1)) + 1 : _v2) < 0) return new _v22(0);
        if (_v15 = _v15 / 7 + 2 | 0, _v6 = 0, 1 == _v20) for (_v7 = 0, _v25 = _v25[0], _v15++; (_v6 < _v18 || _v7) && _v15--; _v6++) _v16 = 0 * _v7 + (_v24[_v6] || 0), _v11[_v6] = _v16 / _v25 | 0, _v7 = _v16 % _v25 | 0;else {
          for ((_v7 = 0 / (_v25[0] + 1) | 0) > 1 && (_v25 = _v0(_v25, _v7), _v24 = _v0(_v24, _v7), _v20 = _v25.length, _v18 = _v24.length), _v17 = _v20, _v13 = (_v12 = _v24.slice(0, _v20)).length; _v13 < _v20;) _v12[_v13++] = 0;
          (_v21 = _v25.slice()).unshift(0), _v19 = _v25[0], _v25[1] >= 0 / 2 && ++_v19;
          do _v7 = 0, (_v4 = _v1(_v25, _v12, _v20, _v13)) < 0 ? (_v14 = _v12[0], _v20 != _v13 && (_v14 = 0 * _v14 + (_v12[1] || 0)), (_v7 = _v14 / _v19 | 0) > 1 ? (_v7 >= 0 && (_v7 = 0 - 1), _v9 = (_v8 = _v0(_v25, _v7)).length, _v13 = _v12.length, 1 == (_v4 = _v1(_v8, _v12, _v9, _v13)) && (_v7--, _v2(_v8, _v20 < _v9 ? _v21 : _v25, _v9))) : (0 == _v7 && (_v4 = _v7 = 1), _v8 = _v25.slice()), (_v9 = _v8.length) < _v13 && _v8.unshift(0), _v2(_v12, _v8, _v13), -1 == _v4 && (_v13 = _v12.length, (_v4 = _v1(_v25, _v12, _v20, _v13)) < 1 && (_v7++, _v2(_v12, _v20 < _v13 ? _v21 : _v25, _v13))), _v13 = _v12.length) : 0 === _v4 && (_v7++, _v12 = [0]), _v11[_v6++] = _v7, _v4 && _v12[0] ? _v12[_v13++] = _v24[_v17] || 0 : (_v12 = [_v24[_v17]], _v13 = 1); while ((_v17++ < _v18 || void 0 !== _v12[0]) && _v15--);
        }
        return _v11[0] || _v11.shift(), _v10.e = _v5, _v22(_v10, _v3 ? _v2 + _v17(_v10) + 1 : _v2);
      };
    }();
    function _v16(_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = 0,
        _v8 = 0,
        _v9 = _v0.constructor,
        _v10 = _v9.precision;
      if (_v17(_v0) > 16) throw Error(_v6 + _v17(_v0));
      if (!_v0.s) return new _v9(_v1);
      for (null == _v1 ? (_v3 = !1, _v6 = _v10) : _v6 = _v1, _v5 = new _v9(.03125); _v0.abs().gte(.1);) _v0 = _v0.times(_v5), _v8 += 5;
      for (_v6 += Math.log(_v8(2, _v8)) / Math.LN10 * 2 + 5 | 0, _v2 = _v3 = _v4 = new _v9(_v1), _v9.precision = _v6;;) {
        if (_v3 = _v22(_v3.times(_v0), _v6), _v2 = _v2.times(++_v7), _v14((_v5 = _v4.plus(_v15(_v3, _v2, _v6))).d).slice(0, _v6) === _v14(_v4.d).slice(0, _v6)) {
          for (; _v8--;) _v4 = _v22(_v4.times(_v4), _v6);
          return _v9.precision = _v10, null == _v1 ? (_v3 = !0, _v22(_v4, _v10)) : _v4;
        }
        _v4 = _v5;
      }
    }
    function _v17(_v0) {
      for (var _v1 = 7 * _v0.e, _v2 = _v0.d[0]; _v2 >= 10; _v2 /= 10) _v1++;
      return _v1;
    }
    function _v18(_v0, _v1, _v2) {
      if (_v1 > _v0.LN10.sd()) throw _v3 = !0, _v2 && (_v0.precision = _v2), Error(_v4 + "LN10 precision limit exceeded");
      return _v22(new _v0(_v0.LN10), _v1);
    }
    function _v19(_v0) {
      for (var _v1 = ""; _v0--;) _v1 += "0";
      return _v1;
    }
    function _v20(_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10,
        _v11 = 1,
        _v12 = _v0,
        _v13 = _v12.d,
        _v14 = _v12.constructor,
        _v15 = _v14.precision;
      if (_v12.s < 1) throw Error(_v4 + (_v12.s ? "NaN" : "-Infinity"));
      if (_v12.eq(_v1)) return new _v14(0);
      if (null == _v1 ? (_v3 = !1, _v9 = _v15) : _v9 = _v1, _v12.eq(10)) return null == _v1 && (_v3 = !0), _v18(_v14, _v9);
      if (_v14.precision = _v9 += 10, _v3 = (_v2 = _v14(_v13)).charAt(0), !(0 > Math.abs(_v5 = _v17(_v12)))) return _v8 = _v18(_v14, _v9 + 2, _v15).times(_v5 + ""), _v12 = _v20(new _v14(_v3 + "." + _v2.slice(1)), _v9 - 10).plus(_v8), _v14.precision = _v15, null == _v1 ? (_v3 = !0, _v22(_v12, _v15)) : _v12;
      for (; _v3 < 7 && 1 != _v3 || 1 == _v3 && _v2.charAt(1) > 3;) _v3 = (_v2 = _v14((_v12 = _v12.times(_v0)).d)).charAt(0), _v11++;
      for (_v5 = _v17(_v12), _v3 > 1 ? (_v12 = new _v14("0." + _v2), _v5++) : _v12 = new _v14(_v3 + "." + _v2.slice(1)), _v7 = _v6 = _v12 = _v15(_v12.minus(_v1), _v12.plus(_v1), _v9), _v10 = _v22(_v12.times(_v12), _v9), _v4 = 3;;) {
        if (_v6 = _v22(_v6.times(_v10), _v9), _v14((_v8 = _v7.plus(_v15(_v6, new _v14(_v4), _v9))).d).slice(0, _v9) === _v14(_v7.d).slice(0, _v9)) return _v7 = _v7.times(2), 0 !== _v5 && (_v7 = _v7.plus(_v18(_v14, _v9 + 2, _v15).times(_v5 + ""))), _v7 = _v15(_v7, new _v14(_v11), _v9), _v14.precision = _v15, null == _v1 ? (_v3 = !0, _v22(_v7, _v15)) : _v7;
        _v7 = _v8, _v4 += 2;
      }
    }
    function _v21(_v0, _v1) {
      var _v2, _v3, _v4;
      for ((_v2 = _v1.indexOf(".")) > -1 && (_v1 = _v1.replace(".", "")), (_v3 = _v1.search(/e/i)) > 0 ? (_v2 < 0 && (_v2 = _v3), _v2 += +_v1.slice(_v3 + 1), _v1 = _v1.substring(0, _v3)) : _v2 < 0 && (_v2 = _v1.length), _v3 = 0; 48 === _v1.charCodeAt(_v3);) ++_v3;
      for (_v4 = _v1.length; 48 === _v1.charCodeAt(_v4 - 1);) --_v4;
      if (_v1 = _v1.slice(_v3, _v4)) {
        if (_v4 -= _v3, _v0.e = _v7((_v2 = _v2 - _v3 - 1) / 7), _v0.d = [], _v3 = (_v2 + 1) % 7, _v2 < 0 && (_v3 += 7), _v3 < _v4) {
          for (_v3 && _v0.d.push(+_v1.slice(0, _v3)), _v4 -= 7; _v3 < _v4;) _v0.d.push(+_v1.slice(_v3, _v3 += 7));
          _v3 = 7 - (_v1 = _v1.slice(_v3)).length;
        } else _v3 -= _v4;
        for (; _v3--;) _v1 += "0";
        if (_v0.d.push(+_v1), _v3 && (_v0.e > _v10 || _v0.e < -_v10)) throw Error(_v6 + _v2);
      } else _v0.s = 0, _v0.e = 0, _v0.d = [0];
      return _v0;
    }
    function _v22(_v0, _v1, _v2) {
      var _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10,
        _v11 = _v0.d;
      for (_v6 = 1, _v5 = _v11[0]; _v5 >= 10; _v5 /= 10) _v6++;
      if ((_v3 = _v1 - _v6) < 0) _v3 += 7, _v4 = _v1, _v9 = _v11[_v10 = 0];else {
        if ((_v10 = Math.ceil((_v3 + 1) / 7)) >= (_v5 = _v11.length)) return _v0;
        for (_v6 = 1, _v9 = _v5 = _v11[_v10]; _v5 >= 10; _v5 /= 10) _v6++;
        _v3 %= 7, _v4 = _v3 - 7 + _v6;
      }
      if (void 0 !== _v2 && (_v7 = _v9 / (_v5 = _v8(10, _v6 - _v4 - 1)) % 10 | 0, _v8 = _v1 < 0 || void 0 !== _v11[_v10 + 1] || _v9 % _v5, _v8 = _v2 < 4 ? (_v7 || _v8) && (0 == _v2 || _v2 == (_v0.s < 0 ? 3 : 2)) : _v7 > 5 || 5 == _v7 && (4 == _v2 || _v8 || 6 == _v2 && (_v3 > 0 ? _v4 > 0 ? _v9 / _v8(10, _v6 - _v4) : 0 : _v11[_v10 - 1]) % 10 & 1 || _v2 == (_v0.s < 0 ? 8 : 7))), _v1 < 1 || !_v11[0]) return _v8 ? (_v5 = _v17(_v0), _v11.length = 1, _v1 = _v1 - _v5 - 1, _v11[0] = _v8(10, (7 - _v1 % 7) % 7), _v0.e = _v7(-_v1 / 7) || 0) : (_v11.length = 1, _v11[0] = _v0.e = _v0.s = 0), _v0;
      if (0 == _v3 ? (_v11.length = _v10, _v5 = 1, _v10--) : (_v11.length = _v10 + 1, _v5 = _v8(10, 7 - _v3), _v11[_v10] = _v4 > 0 ? (_v9 / _v8(10, _v6 - _v4) % _v8(10, _v4) | 0) * _v5 : 0), _v8) for (;;) if (0 == _v10) {
        0 == (_v11[0] += _v5) && (_v11[0] = 1, ++_v0.e);
        break;
      } else {
        if (_v11[_v10] += _v5, 0 != _v11[_v10]) break;
        _v11[_v10--] = 0, _v5 = 1;
      }
      for (_v3 = _v11.length; 0 === _v11[--_v3];) _v11.pop();
      if (_v3 && (_v0.e > _v10 || _v0.e < -_v10)) throw Error(_v6 + _v17(_v0));
      return _v0;
    }
    function _v23(_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10,
        _v11,
        _v12 = _v0.constructor,
        _v13 = _v12.precision;
      if (!_v0.s || !_v1.s) return _v1.s ? _v1.s = -_v1.s : _v1 = new _v12(_v0), _v3 ? _v22(_v1, _v13) : _v1;
      if (_v8 = _v0.d, _v11 = _v1.d, _v3 = _v1.e, _v9 = _v0.e, _v8 = _v8.slice(), _v6 = _v9 - _v3) {
        for ((_v10 = _v6 < 0) ? (_v2 = _v8, _v6 = -_v6, _v7 = _v11.length) : (_v2 = _v11, _v3 = _v9, _v7 = _v8.length), _v6 > (_v4 = Math.max(Math.ceil(_v13 / 7), _v7) + 2) && (_v6 = _v4, _v2.length = 1), _v2.reverse(), _v4 = _v6; _v4--;) _v2.push(0);
        _v2.reverse();
      } else {
        for ((_v10 = (_v4 = _v8.length) < (_v7 = _v11.length)) && (_v7 = _v4), _v4 = 0; _v4 < _v7; _v4++) if (_v8[_v4] != _v11[_v4]) {
          _v10 = _v8[_v4] < _v11[_v4];
          break;
        }
        _v6 = 0;
      }
      for (_v10 && (_v2 = _v8, _v8 = _v11, _v11 = _v2, _v1.s = -_v1.s), _v7 = _v8.length, _v4 = _v11.length - _v7; _v4 > 0; --_v4) _v8[_v7++] = 0;
      for (_v4 = _v11.length; _v4 > _v6;) {
        if (_v8[--_v4] < _v11[_v4]) {
          for (_v5 = _v4; _v5 && 0 === _v8[--_v5];) _v8[_v5] = 0 - 1;
          --_v8[_v5], _v8[_v4] += 0;
        }
        _v8[_v4] -= _v11[_v4];
      }
      for (; 0 === _v8[--_v7];) _v8.pop();
      for (; 0 === _v8[0]; _v8.shift()) --_v3;
      return _v8[0] ? (_v1.d = _v8, _v1.e = _v3, _v3 ? _v22(_v1, _v13) : _v1) : new _v12(0);
    }
    function _v24(_v0, _v1, _v2) {
      var _v3,
        _v4 = _v17(_v0),
        _v5 = _v14(_v0.d),
        _v6 = _v5.length;
      return _v1 ? (_v2 && (_v3 = _v2 - _v6) > 0 ? _v5 = _v5.charAt(0) + "." + _v5.slice(1) + _v19(_v3) : _v6 > 1 && (_v5 = _v5.charAt(0) + "." + _v5.slice(1)), _v5 = _v5 + (_v4 < 0 ? "e" : "e+") + _v4) : _v4 < 0 ? (_v5 = "0." + _v19(-_v4 - 1) + _v5, _v2 && (_v3 = _v2 - _v6) > 0 && (_v5 += _v19(_v3))) : _v4 >= _v6 ? (_v5 += _v19(_v4 + 1 - _v6), _v2 && (_v3 = _v2 - _v4 - 1) > 0 && (_v5 = _v5 + "." + _v19(_v3))) : ((_v3 = _v4 + 1) < _v6 && (_v5 = _v5.slice(0, _v3) + "." + _v5.slice(_v3)), _v2 && (_v3 = _v2 - _v6) > 0 && (_v4 + 1 === _v6 && (_v5 += "."), _v5 += _v19(_v3))), _v0.s < 0 ? "-" + _v5 : _v5;
    }
    function _v25(_v0, _v1) {
      if (_v0.length > _v1) return _v0.length = _v1, !0;
    }
    function _v26(_v0) {
      if (!_v0 || "object" != typeof _v0) throw Error(_v4 + "Object expected");
      var _v1,
        _v2,
        _v3,
        _v4 = ["precision", 1, 0, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (_v1 = 0; _v1 < _v4.length; _v1 += 3) if (void 0 !== (_v3 = _v0[_v2 = _v4[_v1]])) if (_v7(_v3) === _v3 && _v3 >= _v4[_v1 + 1] && _v3 <= _v4[_v1 + 2]) this[_v2] = _v3;else throw Error(_v5 + _v2 + ": " + _v3);
      if (void 0 !== (_v3 = _v0[_v2 = "LN10"])) if (_v3 == Math.LN10) this[_v2] = new this(_v3);else throw Error(_v5 + _v2 + ": " + _v3);
      return this;
    }
    if ((_v2 = function _v0(_v1) {
      var _v2, _v3, _v4;
      function _v5(_v0) {
        if (!(this instanceof _v5)) return new _v5(_v0);
        if (this.constructor = _v5, _v0 instanceof _v5) {
          this.s = _v0.s, this.e = _v0.e, this.d = (_v0 = _v0.d) ? _v0.slice() : _v0;
          return;
        }
        if ("number" == typeof _v0) {
          if (0 * _v0 != 0) throw Error(_v5 + _v0);
          if (_v0 > 0) this.s = 1;else if (_v0 < 0) _v0 = -_v0, this.s = -1;else {
            this.s = 0, this.e = 0, this.d = [0];
            return;
          }
          if (_v0 === ~~_v0 && _v0 < 0) {
            this.e = 0, this.d = [_v0];
            return;
          }
          return _v21(this, _v0.toString());
        }
        if ("string" != typeof _v0) throw Error(_v5 + _v0);
        if (45 === _v0.charCodeAt(0) ? (_v0 = _v0.slice(1), this.s = -1) : this.s = 1, _v9.test(_v0)) _v21(this, _v0);else throw Error(_v5 + _v0);
      }
      if (_v5.prototype = _v11, _v5.ROUND_UP = 0, _v5.ROUND_DOWN = 1, _v5.ROUND_CEIL = 2, _v5.ROUND_FLOOR = 3, _v5.ROUND_HALF_UP = 4, _v5.ROUND_HALF_DOWN = 5, _v5.ROUND_HALF_EVEN = 6, _v5.ROUND_HALF_CEIL = 7, _v5.ROUND_HALF_FLOOR = 8, _v5.clone = _v0, _v5.config = _v5.set = _v26, void 0 === _v1 && (_v1 = {}), _v1) for (_v2 = 0, _v4 = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; _v2 < _v4.length;) _v1.hasOwnProperty(_v3 = _v4[_v2++]) || (_v1[_v3] = this[_v3]);
      return _v5.config(_v1), _v5;
    }(_v2)).default = _v2.Decimal = _v2, _v1 = new _v2(1), "function" == typeof define && define.amd) {
      let _v0;
      _v0.r, void 0 !== (_v0 = _v2) && _v0.v(_v0);
    } else _v1.exports ? _v1.exports = _v2 : (_v0 || (_v0 = "u" > typeof self && self && self.self == self ? self : Function("return this")()), _v0.Decimal = _v2);
  }(_v0.e);
}