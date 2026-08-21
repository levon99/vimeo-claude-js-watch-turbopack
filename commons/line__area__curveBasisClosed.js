{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    return _v0[0];
  }
  function _v6(_v0) {
    return _v0[1];
  }
  function _v7(_v0, _v1) {
    var _v2 = (0, _v2.default)(!0),
      _v3 = null,
      _v4 = _v3.default,
      _v5 = null,
      _v6 = (0, _v4.withPath)(_v7);
    function _v7(_v0) {
      var _v1,
        _v2,
        _v3,
        _v4 = (_v0 = (0, _v1.default)(_v0)).length,
        _v5 = !1;
      for (null == _v3 && (_v5 = _v4(_v3 = _v6())), _v1 = 0; _v1 <= _v4; ++_v1) !(_v1 < _v4 && _v2(_v2 = _v0[_v1], _v1, _v0)) === _v5 && ((_v5 = !_v5) ? _v5.lineStart() : _v5.lineEnd()), _v5 && _v5.point(+_v0(_v2, _v1, _v0), +_v1(_v2, _v1, _v0));
      if (_v3) return _v5 = null, _v3 + "" || null;
    }
    return _v0 = "function" == typeof _v0 ? _v0 : void 0 === _v0 ? _v5 : (0, _v2.default)(_v0), _v1 = "function" == typeof _v1 ? _v1 : void 0 === _v1 ? _v6 : (0, _v2.default)(_v1), _v7.x = function (_v0) {
      return arguments.length ? (_v0 = "function" == typeof _v0 ? _v0 : (0, _v2.default)(+_v0), _v7) : _v0;
    }, _v7.y = function (_v0) {
      return arguments.length ? (_v1 = "function" == typeof _v0 ? _v0 : (0, _v2.default)(+_v0), _v7) : _v1;
    }, _v7.defined = function (_v0) {
      return arguments.length ? (_v2 = "function" == typeof _v0 ? _v0 : (0, _v2.default)(!!_v0), _v7) : _v2;
    }, _v7.curve = function (_v0) {
      return arguments.length ? (_v4 = _v0, null != _v3 && (_v5 = _v4(_v3)), _v7) : _v4;
    }, _v7.context = function (_v0) {
      return arguments.length ? (null == _v0 ? _v3 = _v5 = null : _v5 = _v4(_v3 = _v0), _v7) : _v3;
    }, _v7;
  }
  function _v8() {}
  function _v9(_v0, _v1, _v2) {
    _v0._context.bezierCurveTo((2 * _v0._x0 + _v0._x1) / 3, (2 * _v0._y0 + _v0._y1) / 3, (_v0._x0 + 2 * _v0._x1) / 3, (_v0._y0 + 2 * _v0._y1) / 3, (_v0._x0 + 4 * _v0._x1 + _v1) / 6, (_v0._y0 + 4 * _v0._y1 + _v2) / 6);
  }
  function _v10(_v0) {
    this._context = _v0;
  }
  function _v11(_v0) {
    this._context = _v0;
  }
  function _v12(_v0) {
    this._context = _v0;
  }
  _v0.s(["line", 0, _v7], 0), _v0.s(["area", 0, function (_v0, _v1, _v2) {
    var _v3 = null,
      _v4 = (0, _v2.default)(!0),
      _v5 = null,
      _v6 = _v3.default,
      _v7 = null,
      _v8 = (0, _v4.withPath)(_v9);
    function _v9(_v0) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6 = (_v0 = (0, _v1.default)(_v0)).length,
        _v7 = !1,
        _v8 = Array(_v6),
        _v9 = Array(_v6);
      for (null == _v5 && (_v7 = _v6(_v5 = _v8())), _v1 = 0; _v1 <= _v6; ++_v1) {
        if (!(_v1 < _v6 && _v4(_v4 = _v0[_v1], _v1, _v0)) === _v7) if (_v7 = !_v7) _v2 = _v1, _v7.areaStart(), _v7.lineStart();else {
          for (_v7.lineEnd(), _v7.lineStart(), _v3 = _v1 - 1; _v3 >= _v2; --_v3) _v7.point(_v8[_v3], _v9[_v3]);
          _v7.lineEnd(), _v7.areaEnd();
        }
        _v7 && (_v8[_v1] = +_v0(_v4, _v1, _v0), _v9[_v1] = +_v1(_v4, _v1, _v0), _v7.point(_v3 ? +_v3(_v4, _v1, _v0) : _v8[_v1], _v2 ? +_v2(_v4, _v1, _v0) : _v9[_v1]));
      }
      if (_v5) return _v7 = null, _v5 + "" || null;
    }
    function _v10() {
      return _v7().defined(_v4).curve(_v6).context(_v5);
    }
    return _v0 = "function" == typeof _v0 ? _v0 : void 0 === _v0 ? _v5 : (0, _v2.default)(+_v0), _v1 = "function" == typeof _v1 ? _v1 : void 0 === _v1 ? (0, _v2.default)(0) : (0, _v2.default)(+_v1), _v2 = "function" == typeof _v2 ? _v2 : void 0 === _v2 ? _v6 : (0, _v2.default)(+_v2), _v9.x = function (_v0) {
      return arguments.length ? (_v0 = "function" == typeof _v0 ? _v0 : (0, _v2.default)(+_v0), _v3 = null, _v9) : _v0;
    }, _v9.x0 = function (_v0) {
      return arguments.length ? (_v0 = "function" == typeof _v0 ? _v0 : (0, _v2.default)(+_v0), _v9) : _v0;
    }, _v9.x1 = function (_v0) {
      return arguments.length ? (_v3 = null == _v0 ? null : "function" == typeof _v0 ? _v0 : (0, _v2.default)(+_v0), _v9) : _v3;
    }, _v9.y = function (_v0) {
      return arguments.length ? (_v1 = "function" == typeof _v0 ? _v0 : (0, _v2.default)(+_v0), _v2 = null, _v9) : _v1;
    }, _v9.y0 = function (_v0) {
      return arguments.length ? (_v1 = "function" == typeof _v0 ? _v0 : (0, _v2.default)(+_v0), _v9) : _v1;
    }, _v9.y1 = function (_v0) {
      return arguments.length ? (_v2 = null == _v0 ? null : "function" == typeof _v0 ? _v0 : (0, _v2.default)(+_v0), _v9) : _v2;
    }, _v9.lineX0 = _v9.lineY0 = function () {
      return _v10().x(_v0).y(_v1);
    }, _v9.lineY1 = function () {
      return _v10().x(_v0).y(_v2);
    }, _v9.lineX1 = function () {
      return _v10().x(_v3).y(_v1);
    }, _v9.defined = function (_v0) {
      return arguments.length ? (_v4 = "function" == typeof _v0 ? _v0 : (0, _v2.default)(!!_v0), _v9) : _v4;
    }, _v9.curve = function (_v0) {
      return arguments.length ? (_v6 = _v0, null != _v5 && (_v7 = _v6(_v5)), _v9) : _v6;
    }, _v9.context = function (_v0) {
      return arguments.length ? (null == _v0 ? _v5 = _v7 = null : _v7 = _v6(_v5 = _v0), _v9) : _v5;
    }, _v9;
  }], 0), _v10.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 3:
          _v9(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
      }
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (_v0, _v1) {
      switch (_v0 *= 1, _v1 *= 1, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(_v0, _v1) : this._context.moveTo(_v0, _v1);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
        default:
          _v9(this, _v0, _v1);
      }
      this._x0 = this._x1, this._x1 = _v0, this._y0 = this._y1, this._y1 = _v1;
    }
  }, _v11.prototype = {
    areaStart: _v8,
    areaEnd: _v8,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;
        case 2:
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
          break;
        case 3:
          this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      }
    },
    point: function (_v0, _v1) {
      switch (_v0 *= 1, _v1 *= 1, this._point) {
        case 0:
          this._point = 1, this._x2 = _v0, this._y2 = _v1;
          break;
        case 1:
          this._point = 2, this._x3 = _v0, this._y3 = _v1;
          break;
        case 2:
          this._point = 3, this._x4 = _v0, this._y4 = _v1, this._context.moveTo((this._x0 + 4 * this._x1 + _v0) / 6, (this._y0 + 4 * this._y1 + _v1) / 6);
          break;
        default:
          _v9(this, _v0, _v1);
      }
      this._x0 = this._x1, this._x1 = _v0, this._y0 = this._y1, this._y1 = _v1;
    }
  }, _v0.s(["curveBasisClosed", 0, function (_v0) {
    return new _v11(_v0);
  }], 0), _v12.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    },
    lineEnd: function () {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (_v0, _v1) {
      switch (_v0 *= 1, _v1 *= 1, this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var _v2 = (this._x0 + 4 * this._x1 + _v0) / 6,
            _v3 = (this._y0 + 4 * this._y1 + _v1) / 6;
          this._line ? this._context.lineTo(_v2, _v3) : this._context.moveTo(_v2, _v3);
          break;
        case 3:
          this._point = 4;
        default:
          _v9(this, _v0, _v1);
      }
      this._x0 = this._x1, this._x1 = _v0, this._y0 = this._y1, this._y1 = _v1;
    }
  }, _v0.s(["curveBasisOpen", 0, function (_v0) {
    return new _v12(_v0);
  }], 0), _v0.s(["curveBasis", 0, function (_v0) {
    return new _v10(_v0);
  }], 0);
  class _v13 {
    constructor(_v0, _v1) {
      this._context = _v0, this._x = _v1;
    }
    areaStart() {
      this._line = 0;
    }
    areaEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }
    point(_v0, _v1) {
      switch (_v0 *= 1, _v1 *= 1, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(_v0, _v1) : this._context.moveTo(_v0, _v1);
          break;
        case 1:
          this._point = 2;
        default:
          this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + _v0) / 2, this._y0, this._x0, _v1, _v0, _v1) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + _v1) / 2, _v0, this._y0, _v0, _v1);
      }
      this._x0 = _v0, this._y0 = _v1;
    }
  }
  function _v14(_v0) {
    this._context = _v0;
  }
  _v0.s(["curveBumpX", 0, function (_v0) {
    return new _v13(_v0, !0);
  }], 0), _v0.s(["curveBumpY", 0, function (_v0) {
    return new _v13(_v0, !1);
  }], 0), _v14.prototype = {
    areaStart: _v8,
    areaEnd: _v8,
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      this._point && this._context.closePath();
    },
    point: function (_v0, _v1) {
      _v0 *= 1, _v1 *= 1, this._point ? this._context.lineTo(_v0, _v1) : (this._point = 1, this._context.moveTo(_v0, _v1));
    }
  }, _v0.s(["curveLinearClosed", 0, function (_v0) {
    return new _v14(_v0);
  }], 0);
  function _v15(_v0, _v1, _v2) {
    var _v3 = _v0._x1 - _v0._x0,
      _v4 = _v1 - _v0._x1,
      _v5 = (_v0._y1 - _v0._y0) / (_v3 || _v4 < 0 && -0),
      _v6 = (_v2 - _v0._y1) / (_v4 || _v3 < 0 && -0);
    return ((_v5 < 0 ? -1 : 1) + (_v6 < 0 ? -1 : 1)) * Math.min(Math.abs(_v5), Math.abs(_v6), .5 * Math.abs((_v5 * _v4 + _v6 * _v3) / (_v3 + _v4))) || 0;
  }
  function _v16(_v0, _v1) {
    var _v2 = _v0._x1 - _v0._x0;
    return _v2 ? (3 * (_v0._y1 - _v0._y0) / _v2 - _v1) / 2 : _v1;
  }
  function _v17(_v0, _v1, _v2) {
    var _v3 = _v0._x0,
      _v4 = _v0._y0,
      _v5 = _v0._x1,
      _v6 = _v0._y1,
      _v7 = (_v5 - _v3) / 3;
    _v0._context.bezierCurveTo(_v3 + _v7, _v4 + _v7 * _v1, _v5 - _v7, _v6 - _v7 * _v2, _v5, _v6);
  }
  function _v18(_v0) {
    this._context = _v0;
  }
  function _v19(_v0) {
    this._context = new _v20(_v0);
  }
  function _v20(_v0) {
    this._context = _v0;
  }
  function _v21(_v0) {
    this._context = _v0;
  }
  function _v22(_v0) {
    var _v1,
      _v2,
      _v3 = _v0.length - 1,
      _v4 = Array(_v3),
      _v5 = Array(_v3),
      _v6 = Array(_v3);
    for (_v4[0] = 0, _v5[0] = 2, _v6[0] = _v0[0] + 2 * _v0[1], _v1 = 1; _v1 < _v3 - 1; ++_v1) _v4[_v1] = 1, _v5[_v1] = 4, _v6[_v1] = 4 * _v0[_v1] + 2 * _v0[_v1 + 1];
    for (_v4[_v3 - 1] = 2, _v5[_v3 - 1] = 7, _v6[_v3 - 1] = 8 * _v0[_v3 - 1] + _v0[_v3], _v1 = 1; _v1 < _v3; ++_v1) _v2 = _v4[_v1] / _v5[_v1 - 1], _v5[_v1] -= _v2, _v6[_v1] -= _v2 * _v6[_v1 - 1];
    for (_v4[_v3 - 1] = _v6[_v3 - 1] / _v5[_v3 - 1], _v1 = _v3 - 2; _v1 >= 0; --_v1) _v4[_v1] = (_v6[_v1] - _v4[_v1 + 1]) / _v5[_v1];
    for (_v5[_v3 - 1] = (_v0[_v3] + _v4[_v3 - 1]) / 2, _v1 = 0; _v1 < _v3 - 1; ++_v1) _v5[_v1] = 2 * _v0[_v1 + 1] - _v4[_v1 + 1];
    return [_v4, _v5];
  }
  function _v23(_v0, _v1) {
    this._context = _v0, this._t = _v1;
  }
  _v0.s(["curveLinear", () => _v3.default], 0), _v18.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          _v17(this, this._t0, _v16(this, this._t0));
      }
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (_v0, _v1) {
      var _v2 = NaN;
      if (_v1 *= 1, (_v0 *= 1) !== this._x1 || _v1 !== this._y1) {
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(_v0, _v1) : this._context.moveTo(_v0, _v1);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, _v17(this, _v16(this, _v2 = _v15(this, _v0, _v1)), _v2);
            break;
          default:
            _v17(this, this._t0, _v2 = _v15(this, _v0, _v1));
        }
        this._x0 = this._x1, this._x1 = _v0, this._y0 = this._y1, this._y1 = _v1, this._t0 = _v2;
      }
    }
  }, (_v19.prototype = Object.create(_v18.prototype)).point = function (_v0, _v1) {
    _v18.prototype.point.call(this, _v1, _v0);
  }, _v20.prototype = {
    moveTo: function (_v0, _v1) {
      this._context.moveTo(_v1, _v0);
    },
    closePath: function () {
      this._context.closePath();
    },
    lineTo: function (_v0, _v1) {
      this._context.lineTo(_v1, _v0);
    },
    bezierCurveTo: function (_v0, _v1, _v2, _v3, _v4, _v5) {
      this._context.bezierCurveTo(_v1, _v0, _v3, _v2, _v5, _v4);
    }
  }, _v0.s(["curveMonotoneX", 0, function (_v0) {
    return new _v18(_v0);
  }], 0), _v0.s(["curveMonotoneY", 0, function (_v0) {
    return new _v19(_v0);
  }], 0), _v21.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x = [], this._y = [];
    },
    lineEnd: function () {
      var _v0 = this._x,
        _v1 = this._y,
        _v2 = _v0.length;
      if (_v2) if (this._line ? this._context.lineTo(_v0[0], _v1[0]) : this._context.moveTo(_v0[0], _v1[0]), 2 === _v2) this._context.lineTo(_v0[1], _v1[1]);else for (var _v3 = _v22(_v0), _v4 = _v22(_v1), _v5 = 0, _v6 = 1; _v6 < _v2; ++_v5, ++_v6) this._context.bezierCurveTo(_v3[0][_v5], _v4[0][_v5], _v3[1][_v5], _v4[1][_v5], _v0[_v6], _v1[_v6]);
      (this._line || 0 !== this._line && 1 === _v2) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    },
    point: function (_v0, _v1) {
      this._x.push(+_v0), this._y.push(+_v1);
    }
  }, _v0.s(["curveNatural", 0, function (_v0) {
    return new _v21(_v0);
  }], 0), _v23.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x = this._y = NaN, this._point = 0;
    },
    lineEnd: function () {
      0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
    },
    point: function (_v0, _v1) {
      switch (_v0 *= 1, _v1 *= 1, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(_v0, _v1) : this._context.moveTo(_v0, _v1);
          break;
        case 1:
          this._point = 2;
        default:
          if (this._t <= 0) this._context.lineTo(this._x, _v1), this._context.lineTo(_v0, _v1);else {
            var _v2 = this._x * (1 - this._t) + _v0 * this._t;
            this._context.lineTo(_v2, this._y), this._context.lineTo(_v2, _v1);
          }
      }
      this._x = _v0, this._y = _v1;
    }
  }, _v0.s(["curveStep", 0, function (_v0) {
    return new _v23(_v0, .5);
  }], 0), _v0.s(["curveStepAfter", 0, function (_v0) {
    return new _v23(_v0, 1);
  }], 0), _v0.s(["curveStepBefore", 0, function (_v0) {
    return new _v23(_v0, 0);
  }], 0);
}