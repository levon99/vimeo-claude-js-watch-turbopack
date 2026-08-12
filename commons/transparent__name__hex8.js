{
  "use strict";

  function _v1(_v0) {
    return (_v1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  var _v2,
    _v3,
    _v4,
    _v5,
    _v6 = /^\s+/,
    _v7 = /\s+$/;
  function _v8(_v0, _v1) {
    if (_v1 = _v1 || {}, (_v0 = _v0 || "") instanceof _v8) return _v0;
    if (!(this instanceof _v8)) return new _v8(_v0, _v1);
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
      _v22 = (_v3 = {
        r: 0,
        g: 0,
        b: 0
      }, _v4 = 1, _v5 = null, _v6 = null, _v7 = null, _v8 = !1, _v9 = !1, "string" == typeof (_v2 = _v0) && (_v2 = function (_v0) {
        _v0 = _v0.replace(_v6, "").replace(_v7, "").toLowerCase();
        var _v1,
          _v2 = !1;
        if (_v25[_v0]) _v0 = _v25[_v0], _v2 = !0;else if ("transparent" == _v0) return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        return (_v1 = _v34.rgb.exec(_v0)) ? {
          r: _v1[1],
          g: _v1[2],
          b: _v1[3]
        } : (_v1 = _v34.rgba.exec(_v0)) ? {
          r: _v1[1],
          g: _v1[2],
          b: _v1[3],
          a: _v1[4]
        } : (_v1 = _v34.hsl.exec(_v0)) ? {
          h: _v1[1],
          s: _v1[2],
          l: _v1[3]
        } : (_v1 = _v34.hsla.exec(_v0)) ? {
          h: _v1[1],
          s: _v1[2],
          l: _v1[3],
          a: _v1[4]
        } : (_v1 = _v34.hsv.exec(_v0)) ? {
          h: _v1[1],
          s: _v1[2],
          v: _v1[3]
        } : (_v1 = _v34.hsva.exec(_v0)) ? {
          h: _v1[1],
          s: _v1[2],
          v: _v1[3],
          a: _v1[4]
        } : (_v1 = _v34.hex8.exec(_v0)) ? {
          r: _v30(_v1[1]),
          g: _v30(_v1[2]),
          b: _v30(_v1[3]),
          a: _v30(_v1[4]) / 255,
          format: _v2 ? "name" : "hex8"
        } : (_v1 = _v34.hex6.exec(_v0)) ? {
          r: _v30(_v1[1]),
          g: _v30(_v1[2]),
          b: _v30(_v1[3]),
          format: _v2 ? "name" : "hex"
        } : (_v1 = _v34.hex4.exec(_v0)) ? {
          r: _v30(_v1[1] + "" + _v1[1]),
          g: _v30(_v1[2] + "" + _v1[2]),
          b: _v30(_v1[3] + "" + _v1[3]),
          a: _v30(_v1[4] + "" + _v1[4]) / 255,
          format: _v2 ? "name" : "hex8"
        } : !!(_v1 = _v34.hex3.exec(_v0)) && {
          r: _v30(_v1[1] + "" + _v1[1]),
          g: _v30(_v1[2] + "" + _v1[2]),
          b: _v30(_v1[3] + "" + _v1[3]),
          format: _v2 ? "name" : "hex"
        };
      }(_v2)), "object" == _v1(_v2) && (_v35(_v2.r) && _v35(_v2.g) && _v35(_v2.b) ? (_v10 = _v2.r, _v11 = _v2.g, _v12 = _v2.b, _v3 = {
        r: 255 * _v28(_v10, 255),
        g: 255 * _v28(_v11, 255),
        b: 255 * _v28(_v12, 255)
      }, _v8 = !0, _v9 = "%" === String(_v2.r).substr(-1) ? "prgb" : "rgb") : _v35(_v2.h) && _v35(_v2.s) && _v35(_v2.v) ? (_v5 = _v32(_v2.s), _v6 = _v32(_v2.v), _v13 = _v2.h, _v14 = _v5, _v15 = _v6, _v13 = 6 * _v28(_v13, 360), _v14 = _v28(_v14, 100), _v15 = _v28(_v15, 100), _v16 = Math.floor(_v13), _v17 = _v13 - _v16, _v18 = _v15 * (1 - _v14), _v19 = _v15 * (1 - _v17 * _v14), _v20 = _v15 * (1 - (1 - _v17) * _v14), _v3 = {
        r: 255 * [_v15, _v19, _v18, _v18, _v20, _v15][_v21 = _v16 % 6],
        g: 255 * [_v20, _v15, _v15, _v19, _v18, _v18][_v21],
        b: 255 * [_v18, _v18, _v20, _v15, _v15, _v19][_v21]
      }, _v8 = !0, _v9 = "hsv") : _v35(_v2.h) && _v35(_v2.s) && _v35(_v2.l) && (_v5 = _v32(_v2.s), _v7 = _v32(_v2.l), _v3 = function (_v0, _v1, _v2) {
        var _v3, _v4, _v5;
        function _v6(_v0, _v1, _v2) {
          return (_v2 < 0 && (_v2 += 1), _v2 > 1 && (_v2 -= 1), _v2 < 1 / 6) ? _v0 + (_v1 - _v0) * 6 * _v2 : _v2 < .5 ? _v1 : _v2 < 2 / 3 ? _v0 + (_v1 - _v0) * (2 / 3 - _v2) * 6 : _v0;
        }
        if (_v0 = _v28(_v0, 360), _v1 = _v28(_v1, 100), _v2 = _v28(_v2, 100), 0 === _v1) _v3 = _v4 = _v5 = _v2;else {
          var _v7 = _v2 < .5 ? _v2 * (1 + _v1) : _v2 + _v1 - _v2 * _v1,
            _v8 = 2 * _v2 - _v7;
          _v3 = _v6(_v8, _v7, _v0 + 1 / 3), _v4 = _v6(_v8, _v7, _v0), _v5 = _v6(_v8, _v7, _v0 - 1 / 3);
        }
        return {
          r: 255 * _v3,
          g: 255 * _v4,
          b: 255 * _v5
        };
      }(_v2.h, _v5, _v7), _v8 = !0, _v9 = "hsl"), _v2.hasOwnProperty("a") && (_v4 = _v2.a)), _v4 = _v27(_v4), {
        ok: _v8,
        format: _v2.format || _v9,
        r: Math.min(255, Math.max(_v3.r, 0)),
        g: Math.min(255, Math.max(_v3.g, 0)),
        b: Math.min(255, Math.max(_v3.b, 0)),
        a: _v4
      });
    this._originalInput = _v0, this._r = _v22.r, this._g = _v22.g, this._b = _v22.b, this._a = _v22.a, this._roundA = Math.round(100 * this._a) / 100, this._format = _v1.format || _v22.format, this._gradientType = _v1.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = _v22.ok;
  }
  function _v9(_v0, _v1, _v2) {
    _v0 = _v28(_v0, 255);
    var _v3,
      _v4,
      _v5 = Math.max(_v0, _v1 = _v28(_v1, 255), _v2 = _v28(_v2, 255)),
      _v6 = Math.min(_v0, _v1, _v2),
      _v7 = (_v5 + _v6) / 2;
    if (_v5 == _v6) _v3 = _v4 = 0;else {
      var _v8 = _v5 - _v6;
      switch (_v4 = _v7 > .5 ? _v8 / (2 - _v5 - _v6) : _v8 / (_v5 + _v6), _v5) {
        case _v0:
          _v3 = (_v1 - _v2) / _v8 + 6 * (_v1 < _v2);
          break;
        case _v1:
          _v3 = (_v2 - _v0) / _v8 + 2;
          break;
        case _v2:
          _v3 = (_v0 - _v1) / _v8 + 4;
      }
      _v3 /= 6;
    }
    return {
      h: _v3,
      s: _v4,
      l: _v7
    };
  }
  function _v10(_v0, _v1, _v2) {
    _v0 = _v28(_v0, 255);
    var _v3,
      _v4 = Math.max(_v0, _v1 = _v28(_v1, 255), _v2 = _v28(_v2, 255)),
      _v5 = Math.min(_v0, _v1, _v2),
      _v6 = _v4 - _v5;
    if (_v4 == _v5) _v3 = 0;else {
      switch (_v4) {
        case _v0:
          _v3 = (_v1 - _v2) / _v6 + 6 * (_v1 < _v2);
          break;
        case _v1:
          _v3 = (_v2 - _v0) / _v6 + 2;
          break;
        case _v2:
          _v3 = (_v0 - _v1) / _v6 + 4;
      }
      _v3 /= 6;
    }
    return {
      h: _v3,
      s: 0 === _v4 ? 0 : _v6 / _v4,
      v: _v4
    };
  }
  function _v11(_v0, _v1, _v2, _v3) {
    var _v4 = [_v31(Math.round(_v0).toString(16)), _v31(Math.round(_v1).toString(16)), _v31(Math.round(_v2).toString(16))];
    return _v3 && _v4[0].charAt(0) == _v4[0].charAt(1) && _v4[1].charAt(0) == _v4[1].charAt(1) && _v4[2].charAt(0) == _v4[2].charAt(1) ? _v4[0].charAt(0) + _v4[1].charAt(0) + _v4[2].charAt(0) : _v4.join("");
  }
  function _v12(_v0, _v1, _v2, _v3) {
    return [_v31(_v33(_v3)), _v31(Math.round(_v0).toString(16)), _v31(Math.round(_v1).toString(16)), _v31(Math.round(_v2).toString(16))].join("");
  }
  function _v13(_v0, _v1) {
    _v1 = 0 === _v1 ? 0 : _v1 || 10;
    var _v2 = _v8(_v0).toHsl();
    return _v2.s -= _v1 / 100, _v2.s = _v29(_v2.s), _v8(_v2);
  }
  function _v14(_v0, _v1) {
    _v1 = 0 === _v1 ? 0 : _v1 || 10;
    var _v2 = _v8(_v0).toHsl();
    return _v2.s += _v1 / 100, _v2.s = _v29(_v2.s), _v8(_v2);
  }
  function _v15(_v0) {
    return _v8(_v0).desaturate(100);
  }
  function _v16(_v0, _v1) {
    _v1 = 0 === _v1 ? 0 : _v1 || 10;
    var _v2 = _v8(_v0).toHsl();
    return _v2.l += _v1 / 100, _v2.l = _v29(_v2.l), _v8(_v2);
  }
  function _v17(_v0, _v1) {
    _v1 = 0 === _v1 ? 0 : _v1 || 10;
    var _v2 = _v8(_v0).toRgb();
    return _v2.r = Math.max(0, Math.min(255, _v2.r - Math.round(-(_v1 / 100 * 255)))), _v2.g = Math.max(0, Math.min(255, _v2.g - Math.round(-(_v1 / 100 * 255)))), _v2.b = Math.max(0, Math.min(255, _v2.b - Math.round(-(_v1 / 100 * 255)))), _v8(_v2);
  }
  function _v18(_v0, _v1) {
    _v1 = 0 === _v1 ? 0 : _v1 || 10;
    var _v2 = _v8(_v0).toHsl();
    return _v2.l -= _v1 / 100, _v2.l = _v29(_v2.l), _v8(_v2);
  }
  function _v19(_v0, _v1) {
    var _v2 = _v8(_v0).toHsl(),
      _v3 = (_v2.h + _v1) % 360;
    return _v2.h = _v3 < 0 ? 360 + _v3 : _v3, _v8(_v2);
  }
  function _v20(_v0) {
    var _v1 = _v8(_v0).toHsl();
    return _v1.h = (_v1.h + 180) % 360, _v8(_v1);
  }
  function _v21(_v0, _v1) {
    if (isNaN(_v1) || _v1 <= 0) throw Error("Argument to polyad must be a positive number");
    for (var _v2 = _v8(_v0).toHsl(), _v3 = [_v8(_v0)], _v4 = 360 / _v1, _v5 = 1; _v5 < _v1; _v5++) _v3.push(_v8({
      h: (_v2.h + _v5 * _v4) % 360,
      s: _v2.s,
      l: _v2.l
    }));
    return _v3;
  }
  function _v22(_v0) {
    var _v1 = _v8(_v0).toHsl(),
      _v2 = _v1.h;
    return [_v8(_v0), _v8({
      h: (_v2 + 72) % 360,
      s: _v1.s,
      l: _v1.l
    }), _v8({
      h: (_v2 + 216) % 360,
      s: _v1.s,
      l: _v1.l
    })];
  }
  function _v23(_v0, _v1, _v2) {
    _v1 = _v1 || 6, _v2 = _v2 || 30;
    var _v3 = _v8(_v0).toHsl(),
      _v4 = 360 / _v2,
      _v5 = [_v8(_v0)];
    for (_v3.h = (_v3.h - (_v4 * _v1 >> 1) + 720) % 360; --_v1;) _v3.h = (_v3.h + _v4) % 360, _v5.push(_v8(_v3));
    return _v5;
  }
  function _v24(_v0, _v1) {
    _v1 = _v1 || 6;
    for (var _v2 = _v8(_v0).toHsv(), _v3 = _v2.h, _v4 = _v2.s, _v5 = _v2.v, _v6 = [], _v7 = 1 / _v1; _v1--;) _v6.push(_v8({
      h: _v3,
      s: _v4,
      v: _v5
    })), _v5 = (_v5 + _v7) % 1;
    return _v6;
  }
  _v8.prototype = {
    isDark: function () {
      return 128 > this.getBrightness();
    },
    isLight: function () {
      return !this.isDark();
    },
    isValid: function () {
      return this._ok;
    },
    getOriginalInput: function () {
      return this._originalInput;
    },
    getFormat: function () {
      return this._format;
    },
    getAlpha: function () {
      return this._a;
    },
    getBrightness: function () {
      var _v0 = this.toRgb();
      return (299 * _v0.r + 587 * _v0.g + 114 * _v0.b) / 0;
    },
    getLuminance: function () {
      var _v0,
        _v1,
        _v2,
        _v3 = this.toRgb();
      return _v0 = _v3.r / 255, _v1 = _v3.g / 255, .2126 * (_v0 <= .03928 ? _v0 / 12.92 : Math.pow((_v0 + .055) / 1.055, 2.4)) + .7152 * (_v1 <= .03928 ? _v1 / 12.92 : Math.pow((_v1 + .055) / 1.055, 2.4)) + .0722 * ((_v2 = _v3.b / 255) <= .03928 ? _v2 / 12.92 : Math.pow((_v2 + .055) / 1.055, 2.4));
    },
    setAlpha: function (_v0) {
      return this._a = _v27(_v0), this._roundA = Math.round(100 * this._a) / 100, this;
    },
    toHsv: function () {
      var _v0 = _v10(this._r, this._g, this._b);
      return {
        h: 360 * _v0.h,
        s: _v0.s,
        v: _v0.v,
        a: this._a
      };
    },
    toHsvString: function () {
      var _v0 = _v10(this._r, this._g, this._b),
        _v1 = Math.round(360 * _v0.h),
        _v2 = Math.round(100 * _v0.s),
        _v3 = Math.round(100 * _v0.v);
      return 1 == this._a ? "hsv(" + _v1 + ", " + _v2 + "%, " + _v3 + "%)" : "hsva(" + _v1 + ", " + _v2 + "%, " + _v3 + "%, " + this._roundA + ")";
    },
    toHsl: function () {
      var _v0 = _v9(this._r, this._g, this._b);
      return {
        h: 360 * _v0.h,
        s: _v0.s,
        l: _v0.l,
        a: this._a
      };
    },
    toHslString: function () {
      var _v0 = _v9(this._r, this._g, this._b),
        _v1 = Math.round(360 * _v0.h),
        _v2 = Math.round(100 * _v0.s),
        _v3 = Math.round(100 * _v0.l);
      return 1 == this._a ? "hsl(" + _v1 + ", " + _v2 + "%, " + _v3 + "%)" : "hsla(" + _v1 + ", " + _v2 + "%, " + _v3 + "%, " + this._roundA + ")";
    },
    toHex: function (_v0) {
      return _v11(this._r, this._g, this._b, _v0);
    },
    toHexString: function (_v0) {
      return "#" + this.toHex(_v0);
    },
    toHex8: function (_v0) {
      var _v1, _v2, _v3, _v4, _v5, _v6;
      return _v1 = this._r, _v2 = this._g, _v3 = this._b, _v4 = this._a, _v5 = _v0, _v6 = [_v31(Math.round(_v1).toString(16)), _v31(Math.round(_v2).toString(16)), _v31(Math.round(_v3).toString(16)), _v31(_v33(_v4))], _v5 && _v6[0].charAt(0) == _v6[0].charAt(1) && _v6[1].charAt(0) == _v6[1].charAt(1) && _v6[2].charAt(0) == _v6[2].charAt(1) && _v6[3].charAt(0) == _v6[3].charAt(1) ? _v6[0].charAt(0) + _v6[1].charAt(0) + _v6[2].charAt(0) + _v6[3].charAt(0) : _v6.join("");
    },
    toHex8String: function (_v0) {
      return "#" + this.toHex8(_v0);
    },
    toRgb: function () {
      return {
        r: Math.round(this._r),
        g: Math.round(this._g),
        b: Math.round(this._b),
        a: this._a
      };
    },
    toRgbString: function () {
      return 1 == this._a ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function () {
      return {
        r: Math.round(100 * _v28(this._r, 255)) + "%",
        g: Math.round(100 * _v28(this._g, 255)) + "%",
        b: Math.round(100 * _v28(this._b, 255)) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function () {
      return 1 == this._a ? "rgb(" + Math.round(100 * _v28(this._r, 255)) + "%, " + Math.round(100 * _v28(this._g, 255)) + "%, " + Math.round(100 * _v28(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * _v28(this._r, 255)) + "%, " + Math.round(100 * _v28(this._g, 255)) + "%, " + Math.round(100 * _v28(this._b, 255)) + "%, " + this._roundA + ")";
    },
    toName: function () {
      return 0 === this._a ? "transparent" : !(this._a < 1) && (_v26[_v11(this._r, this._g, this._b, !0)] || !1);
    },
    toFilter: function (_v0) {
      var _v1 = "#" + _v12(this._r, this._g, this._b, this._a),
        _v2 = _v1,
        _v3 = this._gradientType ? "GradientType = 1, " : "";
      if (_v0) {
        var _v4 = _v8(_v0);
        _v2 = "#" + _v12(_v4._r, _v4._g, _v4._b, _v4._a);
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + _v3 + "startColorstr=" + _v1 + ",endColorstr=" + _v2 + ")";
    },
    toString: function (_v0) {
      var _v1 = !!_v0;
      _v0 = _v0 || this._format;
      var _v2 = !1,
        _v3 = this._a < 1 && this._a >= 0;
      return !_v1 && _v3 && ("hex" === _v0 || "hex6" === _v0 || "hex3" === _v0 || "hex4" === _v0 || "hex8" === _v0 || "name" === _v0) ? "name" === _v0 && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === _v0 && (_v2 = this.toRgbString()), "prgb" === _v0 && (_v2 = this.toPercentageRgbString()), ("hex" === _v0 || "hex6" === _v0) && (_v2 = this.toHexString()), "hex3" === _v0 && (_v2 = this.toHexString(!0)), "hex4" === _v0 && (_v2 = this.toHex8String(!0)), "hex8" === _v0 && (_v2 = this.toHex8String()), "name" === _v0 && (_v2 = this.toName()), "hsl" === _v0 && (_v2 = this.toHslString()), "hsv" === _v0 && (_v2 = this.toHsvString()), _v2 || this.toHexString());
    },
    clone: function () {
      return _v8(this.toString());
    },
    _applyModification: function (_v0, _v1) {
      var _v2 = _v0.apply(null, [this].concat([].slice.call(_v1)));
      return this._r = _v2._r, this._g = _v2._g, this._b = _v2._b, this.setAlpha(_v2._a), this;
    },
    lighten: function () {
      return this._applyModification(_v16, arguments);
    },
    brighten: function () {
      return this._applyModification(_v17, arguments);
    },
    darken: function () {
      return this._applyModification(_v18, arguments);
    },
    desaturate: function () {
      return this._applyModification(_v13, arguments);
    },
    saturate: function () {
      return this._applyModification(_v14, arguments);
    },
    greyscale: function () {
      return this._applyModification(_v15, arguments);
    },
    spin: function () {
      return this._applyModification(_v19, arguments);
    },
    _applyCombination: function (_v0, _v1) {
      return _v0.apply(null, [this].concat([].slice.call(_v1)));
    },
    analogous: function () {
      return this._applyCombination(_v23, arguments);
    },
    complement: function () {
      return this._applyCombination(_v20, arguments);
    },
    monochromatic: function () {
      return this._applyCombination(_v24, arguments);
    },
    splitcomplement: function () {
      return this._applyCombination(_v22, arguments);
    },
    triad: function () {
      return this._applyCombination(_v21, [3]);
    },
    tetrad: function () {
      return this._applyCombination(_v21, [4]);
    }
  }, _v8.fromRatio = function (_v0, _v1) {
    if ("object" == _v1(_v0)) {
      var _v2 = {};
      for (var _v3 in _v0) _v0.hasOwnProperty(_v3) && ("a" === _v3 ? _v2[_v3] = _v0[_v3] : _v2[_v3] = _v32(_v0[_v3]));
      _v0 = _v2;
    }
    return _v8(_v0, _v1);
  }, _v8.equals = function (_v0, _v1) {
    return !!_v0 && !!_v1 && _v8(_v0).toRgbString() == _v8(_v1).toRgbString();
  }, _v8.random = function () {
    return _v8.fromRatio({
      r: Math.random(),
      g: Math.random(),
      b: Math.random()
    });
  }, _v8.mix = function (_v0, _v1, _v2) {
    _v2 = 0 === _v2 ? 0 : _v2 || 50;
    var _v3 = _v8(_v0).toRgb(),
      _v4 = _v8(_v1).toRgb(),
      _v5 = _v2 / 100;
    return _v8({
      r: (_v4.r - _v3.r) * _v5 + _v3.r,
      g: (_v4.g - _v3.g) * _v5 + _v3.g,
      b: (_v4.b - _v3.b) * _v5 + _v3.b,
      a: (_v4.a - _v3.a) * _v5 + _v3.a
    });
  }, _v8.readability = function (_v0, _v1) {
    var _v2 = _v8(_v0),
      _v3 = _v8(_v1);
    return (Math.max(_v2.getLuminance(), _v3.getLuminance()) + .05) / (Math.min(_v2.getLuminance(), _v3.getLuminance()) + .05);
  }, _v8.isReadable = function (_v0, _v1, _v2) {
    var _v3,
      _v4,
      _v5,
      _v6,
      _v7,
      _v8 = _v8.readability(_v0, _v1);
    switch (_v7 = !1, (_v4 = ((_v3 = (_v3 = _v2) || {
      level: "AA",
      size: "small"
    }).level || "AA").toUpperCase(), _v5 = (_v3.size || "small").toLowerCase(), "AA" !== _v4 && "AAA" !== _v4 && (_v4 = "AA"), "small" !== _v5 && "large" !== _v5 && (_v5 = "small"), _v6 = {
      level: _v4,
      size: _v5
    }).level + _v6.size) {
      case "AAsmall":
      case "AAAlarge":
        _v7 = _v8 >= 4.5;
        break;
      case "AAlarge":
        _v7 = _v8 >= 3;
        break;
      case "AAAsmall":
        _v7 = _v8 >= 7;
    }
    return _v7;
  }, _v8.mostReadable = function (_v0, _v1, _v2) {
    var _v3,
      _v4,
      _v5,
      _v6,
      _v7 = null,
      _v8 = 0;
    _v4 = (_v2 = _v2 || {}).includeFallbackColors, _v5 = _v2.level, _v6 = _v2.size;
    for (var _v9 = 0; _v9 < _v1.length; _v9++) (_v3 = _v8.readability(_v0, _v1[_v9])) > _v8 && (_v8 = _v3, _v7 = _v8(_v1[_v9]));
    return _v8.isReadable(_v0, _v7, {
      level: _v5,
      size: _v6
    }) || !_v4 ? _v7 : (_v2.includeFallbackColors = !1, _v8.mostReadable(_v0, ["#fff", "#000"], _v2));
  };
  var _v25 = _v8.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    },
    _v26 = _v8.hexNames = function (_v0) {
      var _v1 = {};
      for (var _v2 in _v0) _v0.hasOwnProperty(_v2) && (_v1[_v0[_v2]] = _v2);
      return _v1;
    }(_v25);
  function _v27(_v0) {
    return (isNaN(_v0 = parseFloat(_v0)) || _v0 < 0 || _v0 > 1) && (_v0 = 1), _v0;
  }
  function _v28(_v0, _v1) {
    "string" == typeof (_v2 = _v0) && -1 != _v2.indexOf(".") && 1 === parseFloat(_v2) && (_v0 = "100%");
    var _v2,
      _v3,
      _v4 = "string" == typeof (_v3 = _v0) && -1 != _v3.indexOf("%");
    return (_v0 = Math.min(_v1, Math.max(0, parseFloat(_v0))), _v4 && (_v0 = parseInt(_v0 * _v1, 10) / 100), 1e-6 > Math.abs(_v0 - _v1)) ? 1 : _v0 % _v1 / parseFloat(_v1);
  }
  function _v29(_v0) {
    return Math.min(1, Math.max(0, _v0));
  }
  function _v30(_v0) {
    return parseInt(_v0, 16);
  }
  function _v31(_v0) {
    return 1 == _v0.length ? "0" + _v0 : "" + _v0;
  }
  function _v32(_v0) {
    return _v0 <= 1 && (_v0 = 100 * _v0 + "%"), _v0;
  }
  function _v33(_v0) {
    return Math.round(255 * parseFloat(_v0)).toString(16);
  }
  var _v34 = (_v3 = "[\\s|\\(]+(" + (_v2 = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + _v2 + ")[,|\\s]+(" + _v2 + ")\\s*\\)?", _v4 = "[\\s|\\(]+(" + _v2 + ")[,|\\s]+(" + _v2 + ")[,|\\s]+(" + _v2 + ")[,|\\s]+(" + _v2 + ")\\s*\\)?", {
    CSS_UNIT: new RegExp(_v2),
    rgb: RegExp("rgb" + _v3),
    rgba: RegExp("rgba" + _v4),
    hsl: RegExp("hsl" + _v3),
    hsla: RegExp("hsla" + _v4),
    hsv: RegExp("hsv" + _v3),
    hsva: RegExp("hsva" + _v4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  });
  function _v35(_v0) {
    return !!_v34.CSS_UNIT.exec(_v0);
  }
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  let _v39 = (0, _v37.translate)({
      singular: "Please try again.",
      dictionary: {
        es: {
          singular: "Vuelve a intentarlo."
        },
        "de-DE": {
          singular: "Bitte versuche es nochmal."
        },
        "fr-FR": {
          singular: "Veuillez essayer à nouveau."
        },
        "ja-JP": {
          singular: "再度お試しください。"
        },
        "ko-KR": {
          singular: "다시 시도해주세요."
        },
        "pt-BR": {
          singular: "Por favor, tente novamente."
        },
        "zh-CN": {
          singular: "请重试。"
        }
      }
    }),
    _v40 = (_v0, _v1) => {
      let {
          r: _v2,
          g: _v3,
          b: _v4
        } = _v0,
        {
          r: _v5,
          g: _v6,
          b: _v7
        } = _v1,
        _v8 = _v2 - _v5,
        _v9 = _v8 / 2;
      return (2 + _v9 / 256) * _v8 ** 2 + 4 * (_v3 - _v6) ** 2 + (2 + (255 - _v9) / 256) * (_v4 - _v7) ** 2 < 0;
    },
    _v41 = {
      variables: {
        sizes: "700"
      }
    },
    _v42 = async (_v0, _v1) => {
      let _v2 = {
        method: "GET",
        headers: {
          Authorization: `jwt ${_v0.jwt}`,
          "Content-Type": "application/json"
        }
      };
      try {
        let [_v0, _v1] = await Promise.all([fetch(`//${_v0.apiUrl}/users/${_v0.ownerId}/team_logos?sizes=${_v41.variables.sizes}`, _v2), _v1 ? fetch(`//${_v0.apiUrl}/users/${_v0.ownerId}/customlogos?sizes=${_v41.variables.sizes}`, _v2) : Promise.resolve({
          ok: !0,
          json: () => ({
            data: []
          })
        })]);
        if (_v0.ok && _v1.ok) {
          let _v0 = await _v0.json(),
            _v1 = await _v1.json();
          return [..._v0.data, ..._v1.data].filter(_v0 => _v0.sizes[0]);
        }
        throw Error("error fetching logos");
      } catch (_v0) {
        throw _v0;
      }
    },
    _v43 = async _v0 => {
      let _v1 = {
        method: "GET",
        headers: {
          Authorization: `jwt ${_v0.jwt}`,
          "Content-Type": "application/json"
        }
      };
      try {
        let _v0 = await fetch(`//${_v0.apiUrl}/users/${_v0.ownerId}/customlogos?sizes=${_v41.variables.sizes}`, _v1);
        if (_v0.ok) {
          let _v0 = await _v0.json(),
            _v1 = _v0.data.length;
          return _v1 ? _v0.data[_v1 - 1].sizes[0].link : "";
        }
        throw Error("error fetching player logos");
      } catch (_v0) {
        throw _v0;
      }
    },
    _v44 = async (_v0, _v1) => {
      try {
        let _v0 = await fetch(`//${_v0.apiUrl}/users/${_v0.ownerId}/team_logos`, {
          method: "POST",
          headers: {
            Authorization: `jwt ${_v0.jwt}`,
            "Content-Type": "application/json"
          }
        });
        if (_v0.ok) {
          let _v0 = await _v0.json();
          await fetch(_v0.link, {
            method: "PUT",
            body: _v1,
            headers: {
              "Content-Type": _v1.type
            }
          });
          let _v1 = await fetch(`//${_v0.apiUrl}/users/${_v0.ownerId}/team_logos?sizes=${_v41.variables.sizes}`, {
            method: "GET",
            headers: {
              Authorization: `jwt ${_v0.jwt}`,
              "Content-Type": "application/json"
            }
          });
          if (_v1.ok) return (await _v1.json()).data[0].sizes[0].link;
          throw Error("error fetching team logos");
        }
        throw Error("error uploading logo");
      } catch (_v0) {
        throw _v0;
      }
    },
    _v45 = async _v0 => {
      try {
        let _v0 = await fetch(`//${_v0.apiUrl}/users/${_v0.ownerId}/team?sizes=${_v41.variables.sizes}`, {
          method: "GET",
          headers: {
            Authorization: `jwt ${_v0.jwt}`,
            "Content-Type": "application/json"
          }
        });
        if (_v0.ok) {
          let _v0 = await _v0.json();
          return await (0, _v38.camelize)(_v0);
        }
        throw Error("error fetching team info");
      } catch (_v0) {
        throw _v0;
      }
    },
    _v46 = async (_v0, _v1) => {
      try {
        return (await fetch(`//${_v0.apiUrl}${_v1}`, {
          method: "DELETE",
          headers: {
            Authorization: `jwt ${_v0.jwt}`,
            "Content-Type": "application/json"
          }
        })).ok;
      } catch (_v0) {
        throw _v0;
      }
    },
    _v47 = async (_v0, _v1) => {
      let _v2 = await fetch(`//${_v0.apiUrl}/users/${_v0.ownerId}/team`, {
          method: "PATCH",
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1",
            Authorization: `jwt ${_v0.jwt}`,
            "Content-Type": "application/json"
          },
          body: _v1
        }),
        _v3 = await _v2.json();
      if (_v2.ok) return (0, _v38.camelize)(_v3);
      throw Error("error updating team info");
    },
    _v48 = async (_v0, _v1) => {
      let _v2 = await fetch(`//${_v0.apiUrl}/users/${_v0.ownerId}/team`, {
          method: "POST",
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1",
            Authorization: `jwt ${_v0.jwt}`,
            "Content-Type": "application/json"
          },
          body: _v1
        }),
        _v3 = await _v2.json();
      if (_v2.ok) return (0, _v38.camelize)(_v3);
      if (0 === _v3.error_code) return await _v47(_v0, _v1);
      throw Error("error updating team info");
    },
    _v49 = async (_v0, _v1, _v2) => {
      try {
        if (_v1) return await _v47(_v0, _v2);
        return await _v48(_v0, _v2);
      } catch (_v0) {
        throw _v0;
      }
    },
    _v50 = async _v0 => {
      if (!(await fetch(`//${_v0.apiUrl}/users/${_v0.ownerId}/team`, {
        method: "DELETE",
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1",
          Authorization: `jwt ${_v0.jwt}`
        }
      })).ok) throw Error("error dropping team");
    };
  var _v51 = ((_v5 = {}).Picker = "picker", _v5.Preset = "preset", _v5);
  _v0.s(["ColorChangeMethods", () => _v51, "TeamEvents", 0, {
    ClickCancelButton: "click_cancel_button",
    ClickUploadButton: "click_upload_button",
    RemoveTeamLogo: "remove_team_logo",
    ScrollTeamLogo: "scroll_team_logo",
    SetTeamAccentColor: "set_team_accent_color",
    TeamSettingsUpdated: "team_settings_updated"
  }, "defaultError", 0, _v39, "dropTeam", 0, _v50, "extractColors", 0, _v0 => {
    let _v1 = document.createElement("canvas");
    _v1.height = _v0.height, _v1.width = _v0.width;
    let _v2 = _v1.getContext("2d");
    if (!_v2) return [];
    _v2.drawImage(_v0, 0, 0);
    let _v3 = _v2.getImageData(0, 0, _v0.width, _v0.height).data,
      _v4 = _v3.length / 4,
      _v5 = {};
    for (let _v0 = 0; _v0 < _v4 / 10; _v0++) {
      let _v0 = 10 * _v0,
        _v1 = _v3[4 * _v0],
        _v2 = _v3[4 * _v0 + 1],
        _v3 = _v3[4 * _v0 + 2],
        _v4 = _v3[4 * _v0 + 3] / 255;
      if (_v4 > 0 && !_v40({
        r: _v1,
        g: _v2,
        b: _v3
      }, {
        r: 255,
        g: 255,
        b: 255
      })) {
        let _v0 = _v8({
          r: _v1,
          g: _v2,
          b: _v3,
          a: _v4
        }).toHexString();
        _v5[_v0] ? _v5[_v0] += 1 : _v5[_v0] = 1;
      }
    }
    let _v6 = Object.keys(_v5).sort((_v0, _v1) => _v5[_v1] - _v5[_v0]),
      _v7 = [_v6[0]];
    for (let _v0 = 1; _v0 < Math.min(_v6.length, 10); _v0++) {
      let _v0 = !1;
      for (let _v0 = 0; _v0 < _v7.length; _v0++) if (_v40(_v8(_v6[_v0]).toRgb(), _v8(_v7[_v0]).toRgb())) {
        _v0 = !0;
        break;
      }
      if (_v0 || _v7.push(_v6[_v0]), 6 === _v7.length) break;
    }
    return _v7;
  }, "fetchDeleteLogo", 0, _v46, "fetchLogos", 0, _v42, "fetchPlayerLogoUrl", 0, _v43, "fetchTeamInfo", 0, _v45, "isTeamInfo", 0, _v0 => !!_v0 && Object.prototype.hasOwnProperty.call(_v0, "teamName"), "logoFetchOptions", 0, _v41, "logoUploadLimit", 0, 0, "teamLogoUrlToUri", 0, _v0 => {
    if (!_v0) return "";
    let _v1 = _v0.split("/"),
      _v2 = _v1[_v1.length - 2],
      _v3 = _v1[_v1.length - 1].split("_")[0].split(".")[0];
    return `/${_v2}/${_v3}`;
  }, "trackTeamSettingsModal", 0, (_v0, _v1 = {}) => {
    try {
      _v36.BigPictureClient.sendEvent(new _v36.Event(_v0, 1, {
        product: "Workflow",
        path: window.parent.location.pathname,
        location: "/onboarding" === window.location.pathname || "/onboarding" === window.parent.location.pathname ? "Onboarding" : "Team Settings Modal",
        ..._v1
      }));
    } catch (_v0) {
      console.error(_v0);
    }
  }, "updateTeamInfo", 0, _v49, "uploadLogo", 0, _v44], 0);
}