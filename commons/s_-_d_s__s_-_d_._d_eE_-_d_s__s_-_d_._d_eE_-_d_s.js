{
  "use strict";

  _v0.i(0), _v0.i(0);
  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8 = _v0.i(0);
  let _v9 = Math.sqrt(50),
    _v10 = Math.sqrt(10),
    _v11 = Math.sqrt(2);
  function _v12(_v0, _v1, _v2) {
    let _v3,
      _v4,
      _v5,
      _v6 = (_v1 - _v0) / Math.max(0, _v2),
      _v7 = Math.floor(Math.log10(_v6)),
      _v8 = _v6 / Math.pow(10, _v7),
      _v9 = _v8 >= _v9 ? 10 : _v8 >= _v10 ? 5 : _v8 >= _v11 ? 2 : 1;
    return (_v7 < 0 ? (_v3 = Math.round(_v0 * (_v5 = Math.pow(10, -_v7) / _v9)), _v4 = Math.round(_v1 * _v5), _v3 / _v5 < _v0 && ++_v3, _v4 / _v5 > _v1 && --_v4, _v5 = -_v5) : (_v3 = Math.round(_v0 / (_v5 = Math.pow(10, _v7) * _v9)), _v4 = Math.round(_v1 / _v5), _v3 * _v5 < _v0 && ++_v3, _v4 * _v5 > _v1 && --_v4), _v4 < _v3 && .5 <= _v2 && _v2 < 2) ? _v12(_v0, _v1, 2 * _v2) : [_v3, _v4, _v5];
  }
  function _v13(_v0, _v1, _v2) {
    if (_v1 *= 1, _v0 *= 1, !((_v2 *= 1) > 0)) return [];
    if (_v0 === _v1) return [_v0];
    let _v3 = _v1 < _v0,
      [_v4, _v5, _v6] = _v3 ? _v12(_v1, _v0, _v2) : _v12(_v0, _v1, _v2);
    if (!(_v5 >= _v4)) return [];
    let _v7 = _v5 - _v4 + 1,
      _v8 = Array(_v7);
    if (_v3) {
      if (_v6 < 0) for (let _v0 = 0; _v0 < _v7; ++_v0) _v8[_v0] = -((_v5 - _v0) / _v6);else for (let _v0 = 0; _v0 < _v7; ++_v0) _v8[_v0] = (_v5 - _v0) * _v6;
    } else if (_v6 < 0) for (let _v0 = 0; _v0 < _v7; ++_v0) _v8[_v0] = -((_v4 + _v0) / _v6);else for (let _v0 = 0; _v0 < _v7; ++_v0) _v8[_v0] = (_v4 + _v0) * _v6;
    return _v8;
  }
  function _v14(_v0, _v1, _v2) {
    return _v12(_v0 *= 1, _v1 *= 1, _v2 *= 1)[2];
  }
  function _v15(_v0, _v1, _v2) {
    _v1 *= 1, _v0 *= 1, _v2 *= 1;
    let _v3 = _v1 < _v0,
      _v4 = _v3 ? _v14(_v1, _v0, _v2) : _v14(_v0, _v1, _v2);
    return (_v3 ? -1 : 1) * (_v4 < 0 ? -(1 / _v4) : _v4);
  }
  function _v16(_v0, _v1) {
    return null == _v0 || null == _v1 ? NaN : _v0 < _v1 ? -1 : _v0 > _v1 ? 1 : _v0 >= _v1 ? 0 : NaN;
  }
  function _v17(_v0, _v1) {
    return null == _v0 || null == _v1 ? NaN : _v1 < _v0 ? -1 : _v1 > _v0 ? 1 : _v1 >= _v0 ? 0 : NaN;
  }
  function _v18(_v0) {
    let _v1, _v2, _v3;
    function _v4(_v0, _v1, _v2 = 0, _v3 = _v0.length) {
      if (_v2 < _v3) {
        if (0 !== _v1(_v1, _v1)) return _v3;
        do {
          let _v0 = _v2 + _v3 >>> 1;
          0 > _v2(_v0[_v0], _v1) ? _v2 = _v0 + 1 : _v3 = _v0;
        } while (_v2 < _v3);
      }
      return _v2;
    }
    return 2 !== _v0.length ? (_v1 = _v16, _v2 = (_v0, _v1) => _v16(_v0(_v0), _v1), _v3 = (_v0, _v1) => _v0(_v0) - _v1) : (_v1 = _v0 === _v16 || _v0 === _v17 ? _v0 : _v19, _v2 = _v0, _v3 = _v0), {
      left: _v4,
      center: function (_v0, _v1, _v2 = 0, _v3 = _v0.length) {
        let _v4 = _v4(_v0, _v1, _v2, _v3 - 1);
        return _v4 > _v2 && _v3(_v0[_v4 - 1], _v1) > -_v3(_v0[_v4], _v1) ? _v4 - 1 : _v4;
      },
      right: function (_v0, _v1, _v2 = 0, _v3 = _v0.length) {
        if (_v2 < _v3) {
          if (0 !== _v1(_v1, _v1)) return _v3;
          do {
            let _v0 = _v2 + _v3 >>> 1;
            0 >= _v2(_v0[_v0], _v1) ? _v2 = _v0 + 1 : _v3 = _v0;
          } while (_v2 < _v3);
        }
        return _v2;
      }
    };
  }
  function _v19() {
    return 0;
  }
  function _v20(_v0) {
    return null === _v0 ? NaN : +_v0;
  }
  let _v21 = _v18(_v16),
    _v22 = _v21.right;
  function _v23(_v0, _v1, _v2) {
    _v0.prototype = _v1.prototype = _v2, _v2.constructor = _v0;
  }
  function _v24(_v0, _v1) {
    var _v2 = Object.create(_v0.prototype);
    for (var _v3 in _v1) _v2[_v3] = _v1[_v3];
    return _v2;
  }
  function _v25() {}
  _v21.left, _v18(_v20).center;
  var _v26 = "\\s*([+-]?\\d+)\\s*",
    _v27 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    _v28 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    _v29 = /^#([0-9a-f]{3,8})$/,
    _v30 = RegExp(`^rgb\\(${_v26},${_v26},${_v26}\\)$`),
    _v31 = RegExp(`^rgb\\(${_v28},${_v28},${_v28}\\)$`),
    _v32 = RegExp(`^rgba\\(${_v26},${_v26},${_v26},${_v27}\\)$`),
    _v33 = RegExp(`^rgba\\(${_v28},${_v28},${_v28},${_v27}\\)$`),
    _v34 = RegExp(`^hsl\\(${_v27},${_v28},${_v28}\\)$`),
    _v35 = RegExp(`^hsla\\(${_v27},${_v28},${_v28},${_v27}\\)$`),
    _v36 = {
      aliceblue: 0,
      antiquewhite: 0,
      aqua: 0,
      aquamarine: 0,
      azure: 0,
      beige: 0,
      bisque: 0,
      black: 0,
      blanchedalmond: 0,
      blue: 255,
      blueviolet: 0,
      brown: 0,
      burlywood: 0,
      cadetblue: 0,
      chartreuse: 0,
      chocolate: 0,
      coral: 0,
      cornflowerblue: 0,
      cornsilk: 0,
      crimson: 0,
      cyan: 0,
      darkblue: 139,
      darkcyan: 0,
      darkgoldenrod: 0,
      darkgray: 0,
      darkgreen: 0,
      darkgrey: 0,
      darkkhaki: 0,
      darkmagenta: 0,
      darkolivegreen: 0,
      darkorange: 0,
      darkorchid: 0,
      darkred: 0,
      darksalmon: 0,
      darkseagreen: 0,
      darkslateblue: 0,
      darkslategray: 0,
      darkslategrey: 0,
      darkturquoise: 0,
      darkviolet: 0,
      deeppink: 0,
      deepskyblue: 0,
      dimgray: 0,
      dimgrey: 0,
      dodgerblue: 0,
      firebrick: 0,
      floralwhite: 0,
      forestgreen: 0,
      fuchsia: 0,
      gainsboro: 0,
      ghostwhite: 0,
      gold: 0,
      goldenrod: 0,
      gray: 0,
      green: 0,
      greenyellow: 0,
      grey: 0,
      honeydew: 0,
      hotpink: 0,
      indianred: 0,
      indigo: 0,
      ivory: 0,
      khaki: 0,
      lavender: 0,
      lavenderblush: 0,
      lawngreen: 0,
      lemonchiffon: 0,
      lightblue: 0,
      lightcoral: 0,
      lightcyan: 0,
      lightgoldenrodyellow: 0,
      lightgray: 0,
      lightgreen: 0,
      lightgrey: 0,
      lightpink: 0,
      lightsalmon: 0,
      lightseagreen: 0,
      lightskyblue: 0,
      lightslategray: 0,
      lightslategrey: 0,
      lightsteelblue: 0,
      lightyellow: 0,
      lime: 0,
      limegreen: 0,
      linen: 0,
      magenta: 0,
      maroon: 0,
      mediumaquamarine: 0,
      mediumblue: 205,
      mediumorchid: 0,
      mediumpurple: 0,
      mediumseagreen: 0,
      mediumslateblue: 0,
      mediumspringgreen: 0,
      mediumturquoise: 0,
      mediumvioletred: 0,
      midnightblue: 0,
      mintcream: 0,
      mistyrose: 0,
      moccasin: 0,
      navajowhite: 0,
      navy: 128,
      oldlace: 0,
      olive: 0,
      olivedrab: 0,
      orange: 0,
      orangered: 0,
      orchid: 0,
      palegoldenrod: 0,
      palegreen: 0,
      paleturquoise: 0,
      palevioletred: 0,
      papayawhip: 0,
      peachpuff: 0,
      peru: 0,
      pink: 0,
      plum: 0,
      powderblue: 0,
      purple: 0,
      rebeccapurple: 0,
      red: 0,
      rosybrown: 0,
      royalblue: 0,
      saddlebrown: 0,
      salmon: 0,
      sandybrown: 0,
      seagreen: 0,
      seashell: 0,
      sienna: 0,
      silver: 0,
      skyblue: 0,
      slateblue: 0,
      slategray: 0,
      slategrey: 0,
      snow: 0,
      springgreen: 0,
      steelblue: 0,
      tan: 0,
      teal: 0,
      thistle: 0,
      tomato: 0,
      turquoise: 0,
      violet: 0,
      wheat: 0,
      white: 0,
      whitesmoke: 0,
      yellow: 0,
      yellowgreen: 0
    };
  function _v37() {
    return this.rgb().formatHex();
  }
  function _v38() {
    return this.rgb().formatRgb();
  }
  function _v39(_v0) {
    var _v1, _v2;
    return _v0 = (_v0 + "").trim().toLowerCase(), (_v1 = _v29.exec(_v0)) ? (_v2 = _v1[1].length, _v1 = parseInt(_v1[1], 16), 6 === _v2 ? _v40(_v1) : 3 === _v2 ? new _v43(_v1 >> 8 & 15 | _v1 >> 4 & 240, _v1 >> 4 & 15 | 240 & _v1, (15 & _v1) << 4 | 15 & _v1, 1) : 8 === _v2 ? _v41(_v1 >> 24 & 255, _v1 >> 16 & 255, _v1 >> 8 & 255, (255 & _v1) / 255) : 4 === _v2 ? _v41(_v1 >> 12 & 15 | _v1 >> 8 & 240, _v1 >> 8 & 15 | _v1 >> 4 & 240, _v1 >> 4 & 15 | 240 & _v1, ((15 & _v1) << 4 | 15 & _v1) / 255) : null) : (_v1 = _v30.exec(_v0)) ? new _v43(_v1[1], _v1[2], _v1[3], 1) : (_v1 = _v31.exec(_v0)) ? new _v43(255 * _v1[1] / 100, 255 * _v1[2] / 100, 255 * _v1[3] / 100, 1) : (_v1 = _v32.exec(_v0)) ? _v41(_v1[1], _v1[2], _v1[3], _v1[4]) : (_v1 = _v33.exec(_v0)) ? _v41(255 * _v1[1] / 100, 255 * _v1[2] / 100, 255 * _v1[3] / 100, _v1[4]) : (_v1 = _v34.exec(_v0)) ? _v49(_v1[1], _v1[2] / 100, _v1[3] / 100, 1) : (_v1 = _v35.exec(_v0)) ? _v49(_v1[1], _v1[2] / 100, _v1[3] / 100, _v1[4]) : _v36.hasOwnProperty(_v0) ? _v40(_v36[_v0]) : "transparent" === _v0 ? new _v43(NaN, NaN, NaN, 0) : null;
  }
  function _v40(_v0) {
    return new _v43(_v0 >> 16 & 255, _v0 >> 8 & 255, 255 & _v0, 1);
  }
  function _v41(_v0, _v1, _v2, _v3) {
    return _v3 <= 0 && (_v0 = _v1 = _v2 = NaN), new _v43(_v0, _v1, _v2, _v3);
  }
  function _v42(_v0, _v1, _v2, _v3) {
    var _v4;
    return 1 == arguments.length ? ((_v4 = _v0) instanceof _v25 || (_v4 = _v39(_v4)), _v4) ? new _v43((_v4 = _v4.rgb()).r, _v4.g, _v4.b, _v4.opacity) : new _v43() : new _v43(_v0, _v1, _v2, null == _v3 ? 1 : _v3);
  }
  function _v43(_v0, _v1, _v2, _v3) {
    this.r = +_v0, this.g = +_v1, this.b = +_v2, this.opacity = +_v3;
  }
  function _v44() {
    return `#${_v48(this.r)}${_v48(this.g)}${_v48(this.b)}`;
  }
  function _v45() {
    let _v0 = _v46(this.opacity);
    return `${1 === _v0 ? "rgb(" : "rgba("}${_v47(this.r)}, ${_v47(this.g)}, ${_v47(this.b)}${1 === _v0 ? ")" : `, ${_v0})`}`;
  }
  function _v46(_v0) {
    return isNaN(_v0) ? 1 : Math.max(0, Math.min(1, _v0));
  }
  function _v47(_v0) {
    return Math.max(0, Math.min(255, Math.round(_v0) || 0));
  }
  function _v48(_v0) {
    return ((_v0 = _v47(_v0)) < 16 ? "0" : "") + _v0.toString(16);
  }
  function _v49(_v0, _v1, _v2, _v3) {
    return _v3 <= 0 ? _v0 = _v1 = _v2 = NaN : _v2 <= 0 || _v2 >= 1 ? _v0 = _v1 = NaN : _v1 <= 0 && (_v0 = NaN), new _v51(_v0, _v1, _v2, _v3);
  }
  function _v50(_v0) {
    if (_v0 instanceof _v51) return new _v51(_v0.h, _v0.s, _v0.l, _v0.opacity);
    if (_v0 instanceof _v25 || (_v0 = _v39(_v0)), !_v0) return new _v51();
    if (_v0 instanceof _v51) return _v0;
    var _v1 = (_v0 = _v0.rgb()).r / 255,
      _v2 = _v0.g / 255,
      _v3 = _v0.b / 255,
      _v4 = Math.min(_v1, _v2, _v3),
      _v5 = Math.max(_v1, _v2, _v3),
      _v6 = NaN,
      _v7 = _v5 - _v4,
      _v8 = (_v5 + _v4) / 2;
    return _v7 ? (_v6 = _v1 === _v5 ? (_v2 - _v3) / _v7 + (_v2 < _v3) * 6 : _v2 === _v5 ? (_v3 - _v1) / _v7 + 2 : (_v1 - _v2) / _v7 + 4, _v7 /= _v8 < .5 ? _v5 + _v4 : 2 - _v5 - _v4, _v6 *= 60) : _v7 = _v8 > 0 && _v8 < 1 ? 0 : _v6, new _v51(_v6, _v7, _v8, _v0.opacity);
  }
  function _v51(_v0, _v1, _v2, _v3) {
    this.h = +_v0, this.s = +_v1, this.l = +_v2, this.opacity = +_v3;
  }
  function _v52(_v0) {
    return (_v0 = (_v0 || 0) % 360) < 0 ? _v0 + 360 : _v0;
  }
  function _v53(_v0) {
    return Math.max(0, Math.min(1, _v0 || 0));
  }
  function _v54(_v0, _v1, _v2) {
    return (_v0 < 60 ? _v1 + (_v2 - _v1) * _v0 / 60 : _v0 < 180 ? _v2 : _v0 < 240 ? _v1 + (_v2 - _v1) * (240 - _v0) / 60 : _v1) * 255;
  }
  function _v55(_v0, _v1, _v2, _v3, _v4) {
    var _v5 = _v0 * _v0,
      _v6 = _v5 * _v0;
    return ((1 - 3 * _v0 + 3 * _v5 - _v6) * _v1 + (4 - 6 * _v5 + 3 * _v6) * _v2 + (1 + 3 * _v0 + 3 * _v5 - 3 * _v6) * _v3 + _v6 * _v4) / 6;
  }
  _v23(_v25, _v39, {
    copy(_v0) {
      return Object.assign(new this.constructor(), this, _v0);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: _v37,
    formatHex: _v37,
    formatHex8: function () {
      return this.rgb().formatHex8();
    },
    formatHsl: function () {
      return _v50(this).formatHsl();
    },
    formatRgb: _v38,
    toString: _v38
  }), _v23(_v43, _v42, _v24(_v25, {
    brighter(_v0) {
      return _v0 = null == _v0 ? 1.4285714285714286 : Math.pow(1.4285714285714286, _v0), new _v43(this.r * _v0, this.g * _v0, this.b * _v0, this.opacity);
    },
    darker(_v0) {
      return _v0 = null == _v0 ? .7 : Math.pow(.7, _v0), new _v43(this.r * _v0, this.g * _v0, this.b * _v0, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new _v43(_v47(this.r), _v47(this.g), _v47(this.b), _v46(this.opacity));
    },
    displayable() {
      return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: _v44,
    formatHex: _v44,
    formatHex8: function () {
      return `#${_v48(this.r)}${_v48(this.g)}${_v48(this.b)}${_v48((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
    },
    formatRgb: _v45,
    toString: _v45
  })), _v23(_v51, function (_v0, _v1, _v2, _v3) {
    return 1 == arguments.length ? _v50(_v0) : new _v51(_v0, _v1, _v2, null == _v3 ? 1 : _v3);
  }, _v24(_v25, {
    brighter(_v0) {
      return _v0 = null == _v0 ? 1.4285714285714286 : Math.pow(1.4285714285714286, _v0), new _v51(this.h, this.s, this.l * _v0, this.opacity);
    },
    darker(_v0) {
      return _v0 = null == _v0 ? .7 : Math.pow(.7, _v0), new _v51(this.h, this.s, this.l * _v0, this.opacity);
    },
    rgb() {
      var _v0 = this.h % 360 + (this.h < 0) * 360,
        _v1 = isNaN(_v0) || isNaN(this.s) ? 0 : this.s,
        _v2 = this.l,
        _v3 = _v2 + (_v2 < .5 ? _v2 : 1 - _v2) * _v1,
        _v4 = 2 * _v2 - _v3;
      return new _v43(_v54(_v0 >= 240 ? _v0 - 240 : _v0 + 120, _v4, _v3), _v54(_v0, _v4, _v3), _v54(_v0 < 120 ? _v0 + 240 : _v0 - 120, _v4, _v3), this.opacity);
    },
    clamp() {
      return new _v51(_v52(this.h), _v53(this.s), _v53(this.l), _v46(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl() {
      let _v0 = _v46(this.opacity);
      return `${1 === _v0 ? "hsl(" : "hsla("}${_v52(this.h)}, ${100 * _v53(this.s)}%, ${100 * _v53(this.l)}%${1 === _v0 ? ")" : `, ${_v0})`}`;
    }
  }));
  let _v56 = _v0 => () => _v0;
  function _v57(_v0, _v1) {
    var _v2 = _v1 - _v0;
    return _v2 ? function (_v0) {
      return _v0 + _v0 * _v2;
    } : _v56(isNaN(_v0) ? _v1 : _v0);
  }
  let _v58 = function _v0(_v1) {
    var _v2,
      _v3 = 1 == (_v2 = +_v1) ? _v57 : function (_v0, _v1) {
        var _v2, _v3, _v4;
        return _v1 - _v0 ? (_v2 = _v0, _v3 = _v1, _v2 = Math.pow(_v2, _v4 = _v2), _v3 = Math.pow(_v3, _v4) - _v2, _v4 = 1 / _v4, function (_v0) {
          return Math.pow(_v2 + _v0 * _v3, _v4);
        }) : _v56(isNaN(_v0) ? _v1 : _v0);
      };
    function _v4(_v0, _v1) {
      var _v2 = _v3((_v0 = _v42(_v0)).r, (_v1 = _v42(_v1)).r),
        _v3 = _v3(_v0.g, _v1.g),
        _v4 = _v3(_v0.b, _v1.b),
        _v5 = _v57(_v0.opacity, _v1.opacity);
      return function (_v0) {
        return _v0.r = _v2(_v0), _v0.g = _v3(_v0), _v0.b = _v4(_v0), _v0.opacity = _v5(_v0), _v0 + "";
      };
    }
    return _v4.gamma = _v0, _v4;
  }(1);
  function _v59(_v0) {
    return function (_v0) {
      var _v1,
        _v2,
        _v3 = _v0.length,
        _v4 = Array(_v3),
        _v5 = Array(_v3),
        _v6 = Array(_v3);
      for (_v1 = 0; _v1 < _v3; ++_v1) _v2 = _v42(_v0[_v1]), _v4[_v1] = _v2.r || 0, _v5[_v1] = _v2.g || 0, _v6[_v1] = _v2.b || 0;
      return _v4 = _v0(_v4), _v5 = _v0(_v5), _v6 = _v0(_v6), _v2.opacity = 1, function (_v0) {
        return _v2.r = _v4(_v0), _v2.g = _v5(_v0), _v2.b = _v6(_v0), _v2 + "";
      };
    };
  }
  function _v60(_v0, _v1) {
    return _v0 *= 1, _v1 *= 1, function (_v0) {
      return _v0 * (1 - _v0) + _v1 * _v0;
    };
  }
  _v59(function (_v0) {
    var _v1 = _v0.length - 1;
    return function (_v0) {
      var _v1 = _v0 <= 0 ? _v0 = 0 : _v0 >= 1 ? (_v0 = 1, _v1 - 1) : Math.floor(_v0 * _v1),
        _v2 = _v0[_v1],
        _v3 = _v0[_v1 + 1],
        _v4 = _v1 > 0 ? _v0[_v1 - 1] : 2 * _v2 - _v3,
        _v5 = _v1 < _v1 - 1 ? _v0[_v1 + 2] : 2 * _v3 - _v2;
      return _v55((_v0 - _v1 / _v1) * _v1, _v4, _v2, _v3, _v5);
    };
  }), _v59(function (_v0) {
    var _v1 = _v0.length;
    return function (_v0) {
      var _v1 = Math.floor(((_v0 %= 1) < 0 ? ++_v0 : _v0) * _v1),
        _v2 = _v0[(_v1 + _v1 - 1) % _v1],
        _v3 = _v0[_v1 % _v1],
        _v4 = _v0[(_v1 + 1) % _v1],
        _v5 = _v0[(_v1 + 2) % _v1];
      return _v55((_v0 - _v1 / _v1) * _v1, _v2, _v3, _v4, _v5);
    };
  });
  var _v61 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    _v62 = RegExp(_v61.source, "g");
  function _v63(_v0, _v1) {
    var _v2,
      _v3,
      _v4 = typeof _v1;
    return null == _v1 || "boolean" === _v4 ? _v56(_v1) : ("number" === _v4 ? _v60 : "string" === _v4 ? (_v3 = _v39(_v1)) ? (_v1 = _v3, _v58) : function (_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = _v61.lastIndex = _v62.lastIndex = 0,
        _v8 = -1,
        _v9 = [],
        _v10 = [];
      for (_v0 += "", _v1 += ""; (_v4 = _v61.exec(_v0)) && (_v5 = _v62.exec(_v1));) (_v6 = _v5.index) > _v7 && (_v6 = _v1.slice(_v7, _v6), _v9[_v8] ? _v9[_v8] += _v6 : _v9[++_v8] = _v6), (_v4 = _v4[0]) === (_v5 = _v5[0]) ? _v9[_v8] ? _v9[_v8] += _v5 : _v9[++_v8] = _v5 : (_v9[++_v8] = null, _v10.push({
        i: _v8,
        x: _v60(_v4, _v5)
      })), _v7 = _v62.lastIndex;
      return _v7 < _v1.length && (_v6 = _v1.slice(_v7), _v9[_v8] ? _v9[_v8] += _v6 : _v9[++_v8] = _v6), _v9.length < 2 ? _v10[0] ? (_v2 = _v10[0].x, function (_v0) {
        return _v2(_v0) + "";
      }) : (_v3 = _v1, function () {
        return _v3;
      }) : (_v1 = _v10.length, function (_v0) {
        for (var _v1, _v2 = 0; _v2 < _v1; ++_v2) _v9[(_v1 = _v10[_v2]).i] = _v1.x(_v0);
        return _v9.join("");
      });
    } : _v1 instanceof _v39 ? _v58 : _v1 instanceof Date ? function (_v0, _v1) {
      var _v2 = new Date();
      return _v0 *= 1, _v1 *= 1, function (_v0) {
        return _v2.setTime(_v0 * (1 - _v0) + _v1 * _v0), _v2;
      };
    } : !ArrayBuffer.isView(_v2 = _v1) || _v2 instanceof DataView ? Array.isArray(_v1) ? function (_v0, _v1) {
      var _v2,
        _v3 = _v1 ? _v1.length : 0,
        _v4 = _v0 ? Math.min(_v3, _v0.length) : 0,
        _v5 = Array(_v4),
        _v6 = Array(_v3);
      for (_v2 = 0; _v2 < _v4; ++_v2) _v5[_v2] = _v63(_v0[_v2], _v1[_v2]);
      for (; _v2 < _v3; ++_v2) _v6[_v2] = _v1[_v2];
      return function (_v0) {
        for (_v2 = 0; _v2 < _v4; ++_v2) _v6[_v2] = _v5[_v2](_v0);
        return _v6;
      };
    } : "function" != typeof _v1.valueOf && "function" != typeof _v1.toString || isNaN(_v1) ? function (_v0, _v1) {
      var _v2,
        _v3 = {},
        _v4 = {};
      for (_v2 in (null === _v0 || "object" != typeof _v0) && (_v0 = {}), (null === _v1 || "object" != typeof _v1) && (_v1 = {}), _v1) _v2 in _v0 ? _v3[_v2] = _v63(_v0[_v2], _v1[_v2]) : _v4[_v2] = _v1[_v2];
      return function (_v0) {
        for (_v2 in _v3) _v4[_v2] = _v3[_v2](_v0);
        return _v4;
      };
    } : _v60 : function (_v0, _v1) {
      _v1 || (_v1 = []);
      var _v2,
        _v3 = _v0 ? Math.min(_v1.length, _v0.length) : 0,
        _v4 = _v1.slice();
      return function (_v0) {
        for (_v2 = 0; _v2 < _v3; ++_v2) _v4[_v2] = _v0[_v2] * (1 - _v0) + _v1[_v2] * _v0;
        return _v4;
      };
    })(_v0, _v1);
  }
  function _v64(_v0, _v1) {
    return _v0 *= 1, _v1 *= 1, function (_v0) {
      return Math.round(_v0 * (1 - _v0) + _v1 * _v0);
    };
  }
  function _v65(_v0) {
    return +_v0;
  }
  var _v66 = [0, 1];
  function _v67(_v0) {
    return _v0;
  }
  function _v68(_v0, _v1) {
    var _v2;
    return (_v1 -= _v0 *= 1) ? function (_v0) {
      return (_v0 - _v0) / _v1;
    } : (_v2 = isNaN(_v1) ? NaN : .5, function () {
      return _v2;
    });
  }
  function _v69(_v0, _v1, _v2) {
    var _v3 = _v0[0],
      _v4 = _v0[1],
      _v5 = _v1[0],
      _v6 = _v1[1];
    return _v4 < _v3 ? (_v3 = _v68(_v4, _v3), _v5 = _v2(_v6, _v5)) : (_v3 = _v68(_v3, _v4), _v5 = _v2(_v5, _v6)), function (_v0) {
      return _v5(_v3(_v0));
    };
  }
  function _v70(_v0, _v1, _v2) {
    var _v3 = Math.min(_v0.length, _v1.length) - 1,
      _v4 = Array(_v3),
      _v5 = Array(_v3),
      _v6 = -1;
    for (_v0[_v3] < _v0[0] && (_v0 = _v0.slice().reverse(), _v1 = _v1.slice().reverse()); ++_v6 < _v3;) _v4[_v6] = _v68(_v0[_v6], _v0[_v6 + 1]), _v5[_v6] = _v2(_v1[_v6], _v1[_v6 + 1]);
    return function (_v0) {
      var _v1 = _v22(_v0, _v0, 1, _v3) - 1;
      return _v5[_v1](_v4[_v1](_v0));
    };
  }
  function _v71(_v0, _v1) {
    return _v1.domain(_v0.domain()).range(_v0.range()).interpolate(_v0.interpolate()).clamp(_v0.clamp()).unknown(_v0.unknown());
  }
  function _v72() {
    var _v0,
      _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6 = _v66,
      _v7 = _v66,
      _v8 = _v63,
      _v9 = _v67;
    function _v10() {
      var _v0,
        _v1,
        _v2,
        _v3 = Math.min(_v6.length, _v7.length);
      return _v9 !== _v67 && (_v0 = _v6[0], _v1 = _v6[_v3 - 1], _v0 > _v1 && (_v2 = _v0, _v0 = _v1, _v1 = _v2), _v9 = function (_v0) {
        return Math.max(_v0, Math.min(_v1, _v0));
      }), _v3 = _v3 > 2 ? _v70 : _v69, _v4 = _v5 = null, _v11;
    }
    function _v11(_v0) {
      return null == _v0 || isNaN(_v0 *= 1) ? _v2 : (_v4 || (_v4 = _v3(_v6.map(_v0), _v7, _v8)))(_v0(_v9(_v0)));
    }
    return _v11.invert = function (_v0) {
      return _v9(_v1((_v5 || (_v5 = _v3(_v7, _v6.map(_v0), _v60)))(_v0)));
    }, _v11.domain = function (_v0) {
      return arguments.length ? (_v6 = Array.from(_v0, _v65), _v10()) : _v6.slice();
    }, _v11.range = function (_v0) {
      return arguments.length ? (_v7 = Array.from(_v0), _v10()) : _v7.slice();
    }, _v11.rangeRound = function (_v0) {
      return _v7 = Array.from(_v0), _v8 = _v64, _v10();
    }, _v11.clamp = function (_v0) {
      return arguments.length ? (_v9 = !!_v0 || _v67, _v10()) : _v9 !== _v67;
    }, _v11.interpolate = function (_v0) {
      return arguments.length ? (_v8 = _v0, _v10()) : _v8;
    }, _v11.unknown = function (_v0) {
      return arguments.length ? (_v2 = _v0, _v11) : _v2;
    }, function (_v0, _v1) {
      return _v0 = _v0, _v1 = _v1, _v10();
    };
  }
  function _v73() {
    return _v72()(_v67, _v67);
  }
  var _v74 = _v0.i(0);
  function _v75(_v0, _v1) {
    if (!isFinite(_v0) || 0 === _v0) return null;
    var _v2 = (_v0 = _v1 ? _v0.toExponential(_v1 - 1) : _v0.toExponential()).indexOf("e"),
      _v3 = _v0.slice(0, _v2);
    return [_v3.length > 1 ? _v3[0] + _v3.slice(2) : _v3, +_v0.slice(_v2 + 1)];
  }
  function _v76(_v0) {
    return (_v0 = _v75(Math.abs(_v0))) ? _v0[1] : NaN;
  }
  var _v77 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function _v78(_v0) {
    var _v1;
    if (!(_v1 = _v77.exec(_v0))) throw Error("invalid format: " + _v0);
    return new _v79({
      fill: _v1[1],
      align: _v1[2],
      sign: _v1[3],
      symbol: _v1[4],
      zero: _v1[5],
      width: _v1[6],
      comma: _v1[7],
      precision: _v1[8] && _v1[8].slice(1),
      trim: _v1[9],
      type: _v1[10]
    });
  }
  function _v79(_v0) {
    this.fill = void 0 === _v0.fill ? " " : _v0.fill + "", this.align = void 0 === _v0.align ? ">" : _v0.align + "", this.sign = void 0 === _v0.sign ? "-" : _v0.sign + "", this.symbol = void 0 === _v0.symbol ? "" : _v0.symbol + "", this.zero = !!_v0.zero, this.width = void 0 === _v0.width ? void 0 : +_v0.width, this.comma = !!_v0.comma, this.precision = void 0 === _v0.precision ? void 0 : +_v0.precision, this.trim = !!_v0.trim, this.type = void 0 === _v0.type ? "" : _v0.type + "";
  }
  function _v80(_v0, _v1) {
    var _v2 = _v75(_v0, _v1);
    if (!_v2) return _v0 + "";
    var _v3 = _v2[0],
      _v4 = _v2[1];
    return _v4 < 0 ? "0." + Array(-_v4).join("0") + _v3 : _v3.length > _v4 + 1 ? _v3.slice(0, _v4 + 1) + "." + _v3.slice(_v4 + 1) : _v3 + Array(_v4 - _v3.length + 2).join("0");
  }
  _v78.prototype = _v79.prototype, _v79.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
  };
  let _v81 = {
    "%": (_v0, _v1) => (100 * _v0).toFixed(_v1),
    b: _v0 => Math.round(_v0).toString(2),
    c: _v0 => _v0 + "",
    d: function (_v0) {
      return Math.abs(_v0 = Math.round(_v0)) >= 0 ? _v0.toLocaleString("en").replace(/,/g, "") : _v0.toString(10);
    },
    e: (_v0, _v1) => _v0.toExponential(_v1),
    f: (_v0, _v1) => _v0.toFixed(_v1),
    g: (_v0, _v1) => _v0.toPrecision(_v1),
    o: _v0 => Math.round(_v0).toString(8),
    p: (_v0, _v1) => _v80(100 * _v0, _v1),
    r: _v80,
    s: function (_v0, _v1) {
      var _v2 = _v75(_v0, _v1);
      if (!_v2) return _v1 = void 0, _v0.toPrecision(_v1);
      var _v3 = _v2[0],
        _v4 = _v2[1],
        _v5 = _v4 - (_v1 = 3 * Math.max(-8, Math.min(8, Math.floor(_v4 / 3)))) + 1,
        _v6 = _v3.length;
      return _v5 === _v6 ? _v3 : _v5 > _v6 ? _v3 + Array(_v5 - _v6 + 1).join("0") : _v5 > 0 ? _v3.slice(0, _v5) + "." + _v3.slice(_v5) : "0." + Array(1 - _v5).join("0") + _v75(_v0, Math.max(0, _v1 + _v5 - 1))[0];
    },
    X: _v0 => Math.round(_v0).toString(16).toUpperCase(),
    x: _v0 => Math.round(_v0).toString(16)
  };
  function _v82(_v0) {
    return _v0;
  }
  var _v83 = Array.prototype.map,
    _v84 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function _v85(_v0, _v1, _v2, _v3) {
    var _v4,
      _v5,
      _v6 = _v15(_v0, _v1, _v2);
    switch ((_v3 = _v78(null == _v3 ? ",f" : _v3)).type) {
      case "s":
        var _v7 = Math.max(Math.abs(_v0), Math.abs(_v1));
        return null != _v3.precision || isNaN(_v5 = Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(_v76(_v7) / 3))) - _v76(Math.abs(_v6)))) || (_v3.precision = _v5), _v4(_v3, _v7);
      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        null != _v3.precision || isNaN(_v5 = Math.max(0, _v76(Math.abs(Math.max(Math.abs(_v0), Math.abs(_v1))) - (_v4 = Math.abs(_v4 = _v6))) - _v76(_v4)) + 1) || (_v3.precision = _v5 - ("e" === _v3.type));
        break;
      case "f":
      case "%":
        null != _v3.precision || isNaN(_v5 = Math.max(0, -_v76(Math.abs(_v6)))) || (_v3.precision = _v5 - ("%" === _v3.type) * 2);
    }
    return _v3(_v3);
  }
  function _v86(_v0) {
    var _v1 = _v0.domain;
    return _v0.ticks = function (_v0) {
      var _v1 = _v1();
      return _v13(_v1[0], _v1[_v1.length - 1], null == _v0 ? 10 : _v0);
    }, _v0.tickFormat = function (_v0, _v1) {
      var _v2 = _v1();
      return _v85(_v2[0], _v2[_v2.length - 1], null == _v0 ? 10 : _v0, _v1);
    }, _v0.nice = function (_v0) {
      null == _v0 && (_v0 = 10);
      var _v1,
        _v2,
        _v3 = _v1(),
        _v4 = 0,
        _v5 = _v3.length - 1,
        _v6 = _v3[_v4],
        _v7 = _v3[_v5],
        _v8 = 10;
      for (_v7 < _v6 && (_v2 = _v6, _v6 = _v7, _v7 = _v2, _v2 = _v4, _v4 = _v5, _v5 = _v2); _v8-- > 0;) {
        if ((_v2 = _v14(_v6, _v7, _v0)) === _v1) return _v3[_v4] = _v6, _v3[_v5] = _v7, _v1(_v3);
        if (_v2 > 0) _v6 = Math.floor(_v6 / _v2) * _v2, _v7 = Math.ceil(_v7 / _v2) * _v2;else if (_v2 < 0) _v6 = Math.ceil(_v6 * _v2) / _v2, _v7 = Math.floor(_v7 * _v2) / _v2;else break;
        _v1 = _v2;
      }
      return _v0;
    }, _v0;
  }
  function _v87() {
    var _v0 = _v73();
    return _v0.copy = function () {
      return _v71(_v0, _v87());
    }, _v74.initRange.apply(_v0, arguments), _v86(_v0);
  }
  function _v88(_v0) {
    var _v1;
    function _v2(_v0) {
      return null == _v0 || isNaN(_v0 *= 1) ? _v1 : _v0;
    }
    return _v2.invert = _v2, _v2.domain = _v2.range = function (_v0) {
      return arguments.length ? (_v0 = Array.from(_v0, _v65), _v2) : _v0.slice();
    }, _v2.unknown = function (_v0) {
      return arguments.length ? (_v1 = _v0, _v2) : _v1;
    }, _v2.copy = function () {
      return _v88(_v0).unknown(_v1);
    }, _v0 = arguments.length ? Array.from(_v0, _v65) : [0, 1], _v86(_v2);
  }
  function _v89(_v0, _v1) {
    _v0 = _v0.slice();
    var _v2,
      _v3 = 0,
      _v4 = _v0.length - 1,
      _v5 = _v0[_v3],
      _v6 = _v0[_v4];
    return _v6 < _v5 && (_v2 = _v3, _v3 = _v4, _v4 = _v2, _v2 = _v5, _v5 = _v6, _v6 = _v2), _v0[_v3] = _v1.floor(_v5), _v0[_v4] = _v1.ceil(_v6), _v0;
  }
  function _v90(_v0) {
    return Math.log(_v0);
  }
  function _v91(_v0) {
    return Math.exp(_v0);
  }
  function _v92(_v0) {
    return -Math.log(-_v0);
  }
  function _v93(_v0) {
    return -Math.exp(-_v0);
  }
  function _v94(_v0) {
    return isFinite(_v0) ? +("1e" + _v0) : _v0 < 0 ? 0 : _v0;
  }
  function _v95(_v0) {
    return (_v0, _v1) => -_v0(-_v0, _v1);
  }
  function _v96(_v0) {
    let _v1,
      _v2,
      _v3 = _v0(_v90, _v91),
      _v4 = _v3.domain,
      _v5 = 10;
    function _v6() {
      var _v0, _v1;
      return _v1 = (_v0 = _v5) === Math.E ? Math.log : 10 === _v0 && Math.log10 || 2 === _v0 && Math.log2 || (_v0 = Math.log(_v0), _v0 => Math.log(_v0) / _v0), _v2 = 10 === (_v1 = _v5) ? _v94 : _v1 === Math.E ? Math.exp : _v0 => Math.pow(_v1, _v0), _v4()[0] < 0 ? (_v1 = _v95(_v1), _v2 = _v95(_v2), _v0(_v92, _v93)) : _v0(_v90, _v91), _v3;
    }
    return _v3.base = function (_v0) {
      return arguments.length ? (_v5 = +_v0, _v6()) : _v5;
    }, _v3.domain = function (_v0) {
      return arguments.length ? (_v4(_v0), _v6()) : _v4();
    }, _v3.ticks = _v0 => {
      let _v1,
        _v2,
        _v3 = _v4(),
        _v4 = _v3[0],
        _v5 = _v3[_v3.length - 1],
        _v6 = _v5 < _v4;
      _v6 && ([_v4, _v5] = [_v5, _v4]);
      let _v7 = _v1(_v4),
        _v8 = _v1(_v5),
        _v9 = null == _v0 ? 10 : +_v0,
        _v10 = [];
      if (!(_v5 % 1) && _v8 - _v7 < _v9) {
        if (_v7 = Math.floor(_v7), _v8 = Math.ceil(_v8), _v4 > 0) {
          for (; _v7 <= _v8; ++_v7) for (_v1 = 1; _v1 < _v5; ++_v1) if (!((_v2 = _v7 < 0 ? _v1 / _v2(-_v7) : _v1 * _v2(_v7)) < _v4)) {
            if (_v2 > _v5) break;
            _v10.push(_v2);
          }
        } else for (; _v7 <= _v8; ++_v7) for (_v1 = _v5 - 1; _v1 >= 1; --_v1) if (!((_v2 = _v7 > 0 ? _v1 / _v2(-_v7) : _v1 * _v2(_v7)) < _v4)) {
          if (_v2 > _v5) break;
          _v10.push(_v2);
        }
        2 * _v10.length < _v9 && (_v10 = _v13(_v4, _v5, _v9));
      } else _v10 = _v13(_v7, _v8, Math.min(_v8 - _v7, _v9)).map(_v2);
      return _v6 ? _v10.reverse() : _v10;
    }, _v3.tickFormat = (_v0, _v1) => {
      if (null == _v0 && (_v0 = 10), null == _v1 && (_v1 = 10 === _v5 ? "s" : ","), "function" != typeof _v1 && (_v5 % 1 || null != (_v1 = _v78(_v1)).precision || (_v1.trim = !0), _v1 = _v3(_v1)), _v0 === 1 / 0) return _v1;
      let _v2 = Math.max(1, _v5 * _v0 / _v3.ticks().length);
      return _v0 => {
        let _v1 = _v0 / _v2(Math.round(_v1(_v0)));
        return _v1 * _v5 < _v5 - .5 && (_v1 *= _v5), _v1 <= _v2 ? _v1(_v0) : "";
      };
    }, _v3.nice = () => _v4(_v89(_v4(), {
      floor: _v0 => _v2(Math.floor(_v1(_v0))),
      ceil: _v0 => _v2(Math.ceil(_v1(_v0)))
    })), _v3;
  }
  function _v97() {
    let _v0 = _v96(_v72()).domain([1, 10]);
    return _v0.copy = () => _v71(_v0, _v97()).base(_v0.base()), _v74.initRange.apply(_v0, arguments), _v0;
  }
  function _v98(_v0) {
    return function (_v0) {
      return Math.sign(_v0) * Math.log1p(Math.abs(_v0 / _v0));
    };
  }
  function _v99(_v0) {
    return function (_v0) {
      return Math.sign(_v0) * Math.expm1(Math.abs(_v0)) * _v0;
    };
  }
  function _v100(_v0) {
    var _v1 = 1,
      _v2 = _v0(_v98(1), _v99(_v1));
    return _v2.constant = function (_v0) {
      return arguments.length ? _v0(_v98(_v1 = +_v0), _v99(_v1)) : _v1;
    }, _v86(_v2);
  }
  function _v101() {
    var _v0 = _v100(_v72());
    return _v0.copy = function () {
      return _v71(_v0, _v101()).constant(_v0.constant());
    }, _v74.initRange.apply(_v0, arguments);
  }
  _v3 = (_v2 = function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4 = void 0 === _v0.grouping || void 0 === _v0.thousands ? _v82 : (_v1 = _v83.call(_v0.grouping, Number), _v2 = _v0.thousands + "", function (_v0, _v1) {
        for (var _v2 = _v0.length, _v3 = [], _v4 = 0, _v5 = _v1[0], _v6 = 0; _v2 > 0 && _v5 > 0 && (_v6 + _v5 + 1 > _v1 && (_v5 = Math.max(1, _v1 - _v6)), _v3.push(_v0.substring(_v2 -= _v5, _v2 + _v5)), !((_v6 += _v5 + 1) > _v1));) _v5 = _v1[_v4 = (_v4 + 1) % _v1.length];
        return _v3.reverse().join(_v2);
      }),
      _v5 = void 0 === _v0.currency ? "" : _v0.currency[0] + "",
      _v6 = void 0 === _v0.currency ? "" : _v0.currency[1] + "",
      _v7 = void 0 === _v0.decimal ? "." : _v0.decimal + "",
      _v8 = void 0 === _v0.numerals ? _v82 : (_v3 = _v83.call(_v0.numerals, String), function (_v0) {
        return _v0.replace(/[0-9]/g, function (_v0) {
          return _v3[+_v0];
        });
      }),
      _v9 = void 0 === _v0.percent ? "%" : _v0.percent + "",
      _v10 = void 0 === _v0.minus ? "−" : _v0.minus + "",
      _v11 = void 0 === _v0.nan ? "NaN" : _v0.nan + "";
    function _v12(_v0, _v1) {
      var _v2 = (_v0 = _v78(_v0)).fill,
        _v3 = _v0.align,
        _v4 = _v0.sign,
        _v5 = _v0.symbol,
        _v6 = _v0.zero,
        _v7 = _v0.width,
        _v8 = _v0.comma,
        _v9 = _v0.precision,
        _v10 = _v0.trim,
        _v11 = _v0.type;
      "n" === _v11 ? (_v8 = !0, _v11 = "g") : _v81[_v11] || (void 0 === _v9 && (_v9 = 12), _v10 = !0, _v11 = "g"), (_v6 || "0" === _v2 && "=" === _v3) && (_v6 = !0, _v2 = "0", _v3 = "=");
      var _v12 = (_v1 && void 0 !== _v1.prefix ? _v1.prefix : "") + ("$" === _v5 ? _v5 : "#" === _v5 && /[boxX]/.test(_v11) ? "0" + _v11.toLowerCase() : ""),
        _v13 = ("$" === _v5 ? _v6 : /[%p]/.test(_v11) ? _v9 : "") + (_v1 && void 0 !== _v1.suffix ? _v1.suffix : ""),
        _v14 = _v81[_v11],
        _v15 = /[defgprs%]/.test(_v11);
      function _v16(_v0) {
        var _v1,
          _v2,
          _v3,
          _v4 = _v12,
          _v5 = _v13;
        if ("c" === _v11) _v5 = _v14(_v0) + _v5, _v0 = "";else {
          var _v6 = (_v0 *= 1) < 0 || 1 / _v0 < 0;
          if (_v0 = isNaN(_v0) ? _v11 : _v14(Math.abs(_v0), _v9), _v10 && (_v0 = function (_v0) {
            t: for (var _v1, _v2 = _v0.length, _v3 = 1, _v4 = -1; _v3 < _v2; ++_v3) switch (_v0[_v3]) {
              case ".":
                _v4 = _v1 = _v3;
                break;
              case "0":
                0 === _v4 && (_v4 = _v3), _v1 = _v3;
                break;
              default:
                if (!+_v0[_v3]) break t;
                _v4 > 0 && (_v4 = 0);
            }
            return _v4 > 0 ? _v0.slice(0, _v4) + _v0.slice(_v1 + 1) : _v0;
          }(_v0)), _v6 && 0 == +_v0 && "+" !== _v4 && (_v6 = !1), _v4 = (_v6 ? "(" === _v4 ? _v4 : _v10 : "-" === _v4 || "(" === _v4 ? "" : _v4) + _v4, _v5 = ("s" !== _v11 || isNaN(_v0) || void 0 === _v1 ? "" : _v84[8 + _v1 / 3]) + _v5 + (_v6 && "(" === _v4 ? ")" : ""), _v15) {
            for (_v1 = -1, _v2 = _v0.length; ++_v1 < _v2;) if (48 > (_v3 = _v0.charCodeAt(_v1)) || _v3 > 57) {
              _v5 = (46 === _v3 ? _v7 + _v0.slice(_v1 + 1) : _v0.slice(_v1)) + _v5, _v0 = _v0.slice(0, _v1);
              break;
            }
          }
        }
        _v8 && !_v6 && (_v0 = _v4(_v0, 1 / 0));
        var _v7 = _v4.length + _v0.length + _v5.length,
          _v8 = _v7 < _v7 ? Array(_v7 - _v7 + 1).join(_v2) : "";
        switch (_v8 && _v6 && (_v0 = _v4(_v8 + _v0, _v8.length ? _v7 - _v5.length : 1 / 0), _v8 = ""), _v3) {
          case "<":
            _v0 = _v4 + _v0 + _v5 + _v8;
            break;
          case "=":
            _v0 = _v4 + _v8 + _v0 + _v5;
            break;
          case "^":
            _v0 = _v8.slice(0, _v7 = _v8.length >> 1) + _v4 + _v0 + _v5 + _v8.slice(_v7);
            break;
          default:
            _v0 = _v8 + _v4 + _v0 + _v5;
        }
        return _v8(_v0);
      }
      return _v9 = void 0 === _v9 ? 6 : /[gprs]/.test(_v11) ? Math.max(1, Math.min(21, _v9)) : Math.max(0, Math.min(20, _v9)), _v16.toString = function () {
        return _v0 + "";
      }, _v16;
    }
    return {
      format: _v12,
      formatPrefix: function (_v0, _v1) {
        var _v2 = 3 * Math.max(-8, Math.min(8, Math.floor(_v76(_v1) / 3))),
          _v3 = Math.pow(10, -_v2),
          _v4 = _v12(((_v0 = _v78(_v0)).type = "f", _v0), {
            suffix: _v84[8 + _v2 / 3]
          });
        return function (_v0) {
          return _v4(_v3 * _v0);
        };
      }
    };
  }({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  })).format, _v4 = _v2.formatPrefix, _v0.s(["default", 0, _v87, "linearish", 0, _v86], 0);
  var _v102 = _v0.i(0);
  function _v103(_v0) {
    return function (_v0) {
      return _v0 < 0 ? -Math.pow(-_v0, _v0) : Math.pow(_v0, _v0);
    };
  }
  function _v104(_v0) {
    return _v0 < 0 ? -Math.sqrt(-_v0) : Math.sqrt(_v0);
  }
  function _v105(_v0) {
    return _v0 < 0 ? -_v0 * _v0 : _v0 * _v0;
  }
  function _v106(_v0) {
    var _v1 = _v0(_v67, _v67),
      _v2 = 1;
    return _v1.exponent = function (_v0) {
      return arguments.length ? 1 == (_v2 = +_v0) ? _v0(_v67, _v67) : .5 === _v2 ? _v0(_v104, _v105) : _v0(_v103(_v2), _v103(1 / _v2)) : _v2;
    }, _v86(_v1);
  }
  function _v107() {
    var _v0 = _v106(_v72());
    return _v0.copy = function () {
      return _v71(_v0, _v107()).exponent(_v0.exponent());
    }, _v74.initRange.apply(_v0, arguments), _v0;
  }
  function _v108() {
    return _v107.apply(null, arguments).exponent(.5);
  }
  function _v109(_v0) {
    return Math.sign(_v0) * _v0 * _v0;
  }
  function _v110() {
    var _v0,
      _v1 = _v73(),
      _v2 = [0, 1],
      _v3 = !1;
    function _v4(_v0) {
      var _v1,
        _v2 = Math.sign(_v1 = _v1(_v0)) * Math.sqrt(Math.abs(_v1));
      return isNaN(_v2) ? _v0 : _v3 ? Math.round(_v2) : _v2;
    }
    return _v4.invert = function (_v0) {
      return _v1.invert(_v109(_v0));
    }, _v4.domain = function (_v0) {
      return arguments.length ? (_v1.domain(_v0), _v4) : _v1.domain();
    }, _v4.range = function (_v0) {
      return arguments.length ? (_v1.range((_v2 = Array.from(_v0, _v65)).map(_v109)), _v4) : _v2.slice();
    }, _v4.rangeRound = function (_v0) {
      return _v4.range(_v0).round(!0);
    }, _v4.round = function (_v0) {
      return arguments.length ? (_v3 = !!_v0, _v4) : _v3;
    }, _v4.clamp = function (_v0) {
      return arguments.length ? (_v1.clamp(_v0), _v4) : _v1.clamp();
    }, _v4.unknown = function (_v0) {
      return arguments.length ? (_v0 = _v0, _v4) : _v0;
    }, _v4.copy = function () {
      return _v110(_v1.domain(), _v2).round(_v3).clamp(_v1.clamp()).unknown(_v0);
    }, _v74.initRange.apply(_v4, arguments), _v86(_v4);
  }
  function _v111(_v0, _v1) {
    let _v2;
    if (void 0 === _v1) for (let _v0 of _v0) null != _v0 && (_v2 < _v0 || void 0 === _v2 && _v0 >= _v0) && (_v2 = _v0);else {
      let _v0 = -1;
      for (let _v0 of _v0) null != (_v0 = _v1(_v0, ++_v0, _v0)) && (_v2 < _v0 || void 0 === _v2 && _v0 >= _v0) && (_v2 = _v0);
    }
    return _v2;
  }
  function _v112(_v0, _v1) {
    let _v2;
    if (void 0 === _v1) for (let _v0 of _v0) null != _v0 && (_v2 > _v0 || void 0 === _v2 && _v0 >= _v0) && (_v2 = _v0);else {
      let _v0 = -1;
      for (let _v0 of _v0) null != (_v0 = _v1(_v0, ++_v0, _v0)) && (_v2 > _v0 || void 0 === _v2 && _v0 >= _v0) && (_v2 = _v0);
    }
    return _v2;
  }
  function _v113(_v0, _v1) {
    return (null == _v0 || !(_v0 >= _v0)) - (null == _v1 || !(_v1 >= _v1)) || (_v0 < _v1 ? -1 : +(_v0 > _v1));
  }
  function _v114(_v0, _v1, _v2) {
    let _v3 = _v0[_v1];
    _v0[_v1] = _v0[_v2], _v0[_v2] = _v3;
  }
  function _v115() {
    var _v0,
      _v1 = [],
      _v2 = [],
      _v3 = [];
    function _v4() {
      var _v0 = 0,
        _v1 = Math.max(1, _v2.length);
      for (_v3 = Array(_v1 - 1); ++_v0 < _v1;) _v3[_v0 - 1] = function (_v0, _v1, _v2 = _v20) {
        if (!(!(_v3 = _v0.length) || isNaN(_v1 *= 1))) {
          if (_v1 <= 0 || _v3 < 2) return +_v2(_v0[0], 0, _v0);
          if (_v1 >= 1) return +_v2(_v0[_v3 - 1], _v3 - 1, _v0);
          var _v3,
            _v4 = (_v3 - 1) * _v1,
            _v5 = Math.floor(_v4),
            _v6 = +_v2(_v0[_v5], _v5, _v0);
          return _v6 + (_v2(_v0[_v5 + 1], _v5 + 1, _v0) - _v6) * (_v4 - _v5);
        }
      }(_v1, _v0 / _v1);
      return _v5;
    }
    function _v5(_v0) {
      return null == _v0 || isNaN(_v0 *= 1) ? _v0 : _v2[_v22(_v3, _v0)];
    }
    return _v5.invertExtent = function (_v0) {
      var _v1 = _v2.indexOf(_v0);
      return _v1 < 0 ? [NaN, NaN] : [_v1 > 0 ? _v3[_v1 - 1] : _v1[0], _v1 < _v3.length ? _v3[_v1] : _v1[_v1.length - 1]];
    }, _v5.domain = function (_v0) {
      if (!arguments.length) return _v1.slice();
      for (let _v0 of (_v1 = [], _v0)) null == _v0 || isNaN(_v0 *= 1) || _v1.push(_v0);
      return _v1.sort(_v16), _v4();
    }, _v5.range = function (_v0) {
      return arguments.length ? (_v2 = Array.from(_v0), _v4()) : _v2.slice();
    }, _v5.unknown = function (_v0) {
      return arguments.length ? (_v0 = _v0, _v5) : _v0;
    }, _v5.quantiles = function () {
      return _v3.slice();
    }, _v5.copy = function () {
      return _v115().domain(_v1).range(_v2).unknown(_v0);
    }, _v74.initRange.apply(_v5, arguments);
  }
  function _v116() {
    var _v0,
      _v1 = 0,
      _v2 = 1,
      _v3 = 1,
      _v4 = [.5],
      _v5 = [0, 1];
    function _v6(_v0) {
      return null != _v0 && _v0 <= _v0 ? _v5[_v22(_v4, _v0, 0, _v3)] : _v0;
    }
    function _v7() {
      var _v0 = -1;
      for (_v4 = Array(_v3); ++_v0 < _v3;) _v4[_v0] = ((_v0 + 1) * _v2 - (_v0 - _v3) * _v1) / (_v3 + 1);
      return _v6;
    }
    return _v6.domain = function (_v0) {
      return arguments.length ? ([_v1, _v2] = _v0, _v1 *= 1, _v2 *= 1, _v7()) : [_v1, _v2];
    }, _v6.range = function (_v0) {
      return arguments.length ? (_v3 = (_v5 = Array.from(_v0)).length - 1, _v7()) : _v5.slice();
    }, _v6.invertExtent = function (_v0) {
      var _v1 = _v5.indexOf(_v0);
      return _v1 < 0 ? [NaN, NaN] : _v1 < 1 ? [_v1, _v4[0]] : _v1 >= _v3 ? [_v4[_v3 - 1], _v2] : [_v4[_v1 - 1], _v4[_v1]];
    }, _v6.unknown = function (_v0) {
      return arguments.length && (_v0 = _v0), _v6;
    }, _v6.thresholds = function () {
      return _v4.slice();
    }, _v6.copy = function () {
      return _v116().domain([_v1, _v2]).range(_v5).unknown(_v0);
    }, _v74.initRange.apply(_v86(_v6), arguments);
  }
  function _v117() {
    var _v0,
      _v1 = [.5],
      _v2 = [0, 1],
      _v3 = 1;
    function _v4(_v0) {
      return null != _v0 && _v0 <= _v0 ? _v2[_v22(_v1, _v0, 0, _v3)] : _v0;
    }
    return _v4.domain = function (_v0) {
      return arguments.length ? (_v3 = Math.min((_v1 = Array.from(_v0)).length, _v2.length - 1), _v4) : _v1.slice();
    }, _v4.range = function (_v0) {
      return arguments.length ? (_v2 = Array.from(_v0), _v3 = Math.min(_v1.length, _v2.length - 1), _v4) : _v2.slice();
    }, _v4.invertExtent = function (_v0) {
      var _v1 = _v2.indexOf(_v0);
      return [_v1[_v1 - 1], _v1[_v1]];
    }, _v4.unknown = function (_v0) {
      return arguments.length ? (_v0 = _v0, _v4) : _v0;
    }, _v4.copy = function () {
      return _v117().domain(_v1).range(_v2).unknown(_v0);
    }, _v74.initRange.apply(_v4, arguments);
  }
  let _v118 = new Date(),
    _v119 = new Date();
  function _v120(_v0, _v1, _v2, _v3) {
    function _v4(_v0) {
      return _v0(_v0 = 0 == arguments.length ? new Date() : new Date(+_v0)), _v0;
    }
    return _v4.floor = _v0 => (_v0(_v0 = new Date(+_v0)), _v0), _v4.ceil = _v0 => (_v0(_v0 = new Date(_v0 - 1)), _v1(_v0, 1), _v0(_v0), _v0), _v4.round = _v0 => {
      let _v1 = _v4(_v0),
        _v2 = _v4.ceil(_v0);
      return _v0 - _v1 < _v2 - _v0 ? _v1 : _v2;
    }, _v4.offset = (_v0, _v1) => (_v1(_v0 = new Date(+_v0), null == _v1 ? 1 : Math.floor(_v1)), _v0), _v4.range = (_v0, _v1, _v2) => {
      let _v3,
        _v4 = [];
      if (_v0 = _v4.ceil(_v0), _v2 = null == _v2 ? 1 : Math.floor(_v2), !(_v0 < _v1) || !(_v2 > 0)) return _v4;
      do _v4.push(_v3 = new Date(+_v0)), _v1(_v0, _v2), _v0(_v0); while (_v3 < _v0 && _v0 < _v1);
      return _v4;
    }, _v4.filter = _v0 => _v120(_v0 => {
      if (_v0 >= _v0) for (; _v0(_v0), !_v0(_v0);) _v0.setTime(_v0 - 1);
    }, (_v0, _v1) => {
      if (_v0 >= _v0) if (_v1 < 0) for (; ++_v1 <= 0;) for (; _v1(_v0, -1), !_v0(_v0););else for (; --_v1 >= 0;) for (; _v1(_v0, 1), !_v0(_v0););
    }), _v2 && (_v4.count = (_v0, _v1) => (_v118.setTime(+_v0), _v119.setTime(+_v1), _v0(_v118), _v0(_v119), Math.floor(_v2(_v118, _v119))), _v4.every = _v0 => isFinite(_v0 = Math.floor(_v0)) && _v0 > 0 ? _v0 > 1 ? _v4.filter(_v3 ? _v0 => _v3(_v0) % _v0 == 0 : _v0 => _v4.count(0, _v0) % _v0 == 0) : _v4 : null), _v4;
  }
  let _v121 = _v120(_v0 => {
    _v0.setMonth(0, 1), _v0.setHours(0, 0, 0, 0);
  }, (_v0, _v1) => {
    _v0.setFullYear(_v0.getFullYear() + _v1);
  }, (_v0, _v1) => _v1.getFullYear() - _v0.getFullYear(), _v0 => _v0.getFullYear());
  _v121.every = _v0 => isFinite(_v0 = Math.floor(_v0)) && _v0 > 0 ? _v120(_v0 => {
    _v0.setFullYear(Math.floor(_v0.getFullYear() / _v0) * _v0), _v0.setMonth(0, 1), _v0.setHours(0, 0, 0, 0);
  }, (_v0, _v1) => {
    _v0.setFullYear(_v0.getFullYear() + _v1 * _v0);
  }) : null, _v121.range;
  let _v122 = _v120(_v0 => {
    _v0.setUTCMonth(0, 1), _v0.setUTCHours(0, 0, 0, 0);
  }, (_v0, _v1) => {
    _v0.setUTCFullYear(_v0.getUTCFullYear() + _v1);
  }, (_v0, _v1) => _v1.getUTCFullYear() - _v0.getUTCFullYear(), _v0 => _v0.getUTCFullYear());
  _v122.every = _v0 => isFinite(_v0 = Math.floor(_v0)) && _v0 > 0 ? _v120(_v0 => {
    _v0.setUTCFullYear(Math.floor(_v0.getUTCFullYear() / _v0) * _v0), _v0.setUTCMonth(0, 1), _v0.setUTCHours(0, 0, 0, 0);
  }, (_v0, _v1) => {
    _v0.setUTCFullYear(_v0.getUTCFullYear() + _v1 * _v0);
  }) : null, _v122.range;
  let _v123 = _v120(_v0 => {
    _v0.setDate(1), _v0.setHours(0, 0, 0, 0);
  }, (_v0, _v1) => {
    _v0.setMonth(_v0.getMonth() + _v1);
  }, (_v0, _v1) => _v1.getMonth() - _v0.getMonth() + (_v1.getFullYear() - _v0.getFullYear()) * 12, _v0 => _v0.getMonth());
  _v123.range;
  let _v124 = _v120(_v0 => {
    _v0.setUTCDate(1), _v0.setUTCHours(0, 0, 0, 0);
  }, (_v0, _v1) => {
    _v0.setUTCMonth(_v0.getUTCMonth() + _v1);
  }, (_v0, _v1) => _v1.getUTCMonth() - _v0.getUTCMonth() + (_v1.getUTCFullYear() - _v0.getUTCFullYear()) * 12, _v0 => _v0.getUTCMonth());
  _v124.range;
  function _v125(_v0) {
    return _v120(_v0 => {
      _v0.setDate(_v0.getDate() - (_v0.getDay() + 7 - _v0) % 7), _v0.setHours(0, 0, 0, 0);
    }, (_v0, _v1) => {
      _v0.setDate(_v0.getDate() + 7 * _v1);
    }, (_v0, _v1) => (_v1 - _v0 - (_v1.getTimezoneOffset() - _v0.getTimezoneOffset()) * 0) / 0);
  }
  let _v126 = _v125(0),
    _v127 = _v125(1),
    _v128 = _v125(2),
    _v129 = _v125(3),
    _v130 = _v125(4),
    _v131 = _v125(5),
    _v132 = _v125(6);
  function _v133(_v0) {
    return _v120(_v0 => {
      _v0.setUTCDate(_v0.getUTCDate() - (_v0.getUTCDay() + 7 - _v0) % 7), _v0.setUTCHours(0, 0, 0, 0);
    }, (_v0, _v1) => {
      _v0.setUTCDate(_v0.getUTCDate() + 7 * _v1);
    }, (_v0, _v1) => (_v1 - _v0) / 0);
  }
  _v126.range, _v127.range, _v128.range, _v129.range, _v130.range, _v131.range, _v132.range;
  let _v134 = _v133(0),
    _v135 = _v133(1),
    _v136 = _v133(2),
    _v137 = _v133(3),
    _v138 = _v133(4),
    _v139 = _v133(5),
    _v140 = _v133(6);
  _v134.range, _v135.range, _v136.range, _v137.range, _v138.range, _v139.range, _v140.range;
  let _v141 = _v120(_v0 => _v0.setHours(0, 0, 0, 0), (_v0, _v1) => _v0.setDate(_v0.getDate() + _v1), (_v0, _v1) => (_v1 - _v0 - (_v1.getTimezoneOffset() - _v0.getTimezoneOffset()) * 0) / 0, _v0 => _v0.getDate() - 1);
  _v141.range;
  let _v142 = _v120(_v0 => {
    _v0.setUTCHours(0, 0, 0, 0);
  }, (_v0, _v1) => {
    _v0.setUTCDate(_v0.getUTCDate() + _v1);
  }, (_v0, _v1) => (_v1 - _v0) / 0, _v0 => _v0.getUTCDate() - 1);
  _v142.range;
  let _v143 = _v120(_v0 => {
    _v0.setUTCHours(0, 0, 0, 0);
  }, (_v0, _v1) => {
    _v0.setUTCDate(_v0.getUTCDate() + _v1);
  }, (_v0, _v1) => (_v1 - _v0) / 0, _v0 => Math.floor(_v0 / 0));
  _v143.range;
  let _v144 = _v120(_v0 => {
    _v0.setTime(_v0 - _v0.getMilliseconds() - 0 * _v0.getSeconds() - 0 * _v0.getMinutes());
  }, (_v0, _v1) => {
    _v0.setTime(+_v0 + 0 * _v1);
  }, (_v0, _v1) => (_v1 - _v0) / 0, _v0 => _v0.getHours());
  _v144.range;
  let _v145 = _v120(_v0 => {
    _v0.setUTCMinutes(0, 0, 0);
  }, (_v0, _v1) => {
    _v0.setTime(+_v0 + 0 * _v1);
  }, (_v0, _v1) => (_v1 - _v0) / 0, _v0 => _v0.getUTCHours());
  _v145.range;
  let _v146 = _v120(_v0 => {
    _v0.setTime(_v0 - _v0.getMilliseconds() - 0 * _v0.getSeconds());
  }, (_v0, _v1) => {
    _v0.setTime(+_v0 + 0 * _v1);
  }, (_v0, _v1) => (_v1 - _v0) / 0, _v0 => _v0.getMinutes());
  _v146.range;
  let _v147 = _v120(_v0 => {
    _v0.setUTCSeconds(0, 0);
  }, (_v0, _v1) => {
    _v0.setTime(+_v0 + 0 * _v1);
  }, (_v0, _v1) => (_v1 - _v0) / 0, _v0 => _v0.getUTCMinutes());
  _v147.range;
  let _v148 = _v120(_v0 => {
    _v0.setTime(_v0 - _v0.getMilliseconds());
  }, (_v0, _v1) => {
    _v0.setTime(+_v0 + 0 * _v1);
  }, (_v0, _v1) => (_v1 - _v0) / 0, _v0 => _v0.getUTCSeconds());
  _v148.range;
  let _v149 = _v120(() => {}, (_v0, _v1) => {
    _v0.setTime(+_v0 + _v1);
  }, (_v0, _v1) => _v1 - _v0);
  function _v150(_v0, _v1, _v2, _v3, _v4, _v5) {
    let _v6 = [[_v148, 1, 0], [_v148, 5, 0], [_v148, 15, 0], [_v148, 30, 0], [_v5, 1, 0], [_v5, 5, 0], [_v5, 15, 0], [_v5, 30, 0], [_v4, 1, 0], [_v4, 3, 0], [_v4, 6, 0], [_v4, 12, 0], [_v3, 1, 0], [_v3, 2, 0], [_v2, 1, 0], [_v1, 1, 0], [_v1, 3, 0], [_v0, 1, 0]];
    function _v7(_v0, _v1, _v2) {
      let _v3 = Math.abs(_v1 - _v0) / _v2,
        _v4 = _v18(([,, _v0]) => _v0).right(_v6, _v3);
      if (_v4 === _v6.length) return _v0.every(_v15(_v0 / 0, _v1 / 0, _v2));
      if (0 === _v4) return _v149.every(Math.max(_v15(_v0, _v1, _v2), 1));
      let [_v5, _v6] = _v6[_v3 / _v6[_v4 - 1][2] < _v6[_v4][2] / _v3 ? _v4 - 1 : _v4];
      return _v5.every(_v6);
    }
    return [function (_v0, _v1, _v2) {
      let _v3 = _v1 < _v0;
      _v3 && ([_v0, _v1] = [_v1, _v0]);
      let _v4 = _v2 && "function" == typeof _v2.range ? _v2 : _v7(_v0, _v1, _v2),
        _v5 = _v4 ? _v4.range(_v0, +_v1 + 1) : [];
      return _v3 ? _v5.reverse() : _v5;
    }, _v7];
  }
  _v149.every = _v0 => isFinite(_v0 = Math.floor(_v0)) && _v0 > 0 ? _v0 > 1 ? _v120(_v0 => {
    _v0.setTime(Math.floor(_v0 / _v0) * _v0);
  }, (_v0, _v1) => {
    _v0.setTime(+_v0 + _v1 * _v0);
  }, (_v0, _v1) => (_v1 - _v0) / _v0) : _v149 : null, _v149.range;
  let [_v151, _v152] = _v150(_v122, _v124, _v134, _v143, _v145, _v147),
    [_v153, _v154] = _v150(_v121, _v123, _v126, _v141, _v144, _v146);
  function _v155(_v0) {
    if (0 <= _v0.y && _v0.y < 100) {
      var _v1 = new Date(-1, _v0.m, _v0.d, _v0.H, _v0.M, _v0.S, _v0.L);
      return _v1.setFullYear(_v0.y), _v1;
    }
    return new Date(_v0.y, _v0.m, _v0.d, _v0.H, _v0.M, _v0.S, _v0.L);
  }
  function _v156(_v0) {
    if (0 <= _v0.y && _v0.y < 100) {
      var _v1 = new Date(Date.UTC(-1, _v0.m, _v0.d, _v0.H, _v0.M, _v0.S, _v0.L));
      return _v1.setUTCFullYear(_v0.y), _v1;
    }
    return new Date(Date.UTC(_v0.y, _v0.m, _v0.d, _v0.H, _v0.M, _v0.S, _v0.L));
  }
  function _v157(_v0, _v1, _v2) {
    return {
      y: _v0,
      m: _v1,
      d: _v2,
      H: 0,
      M: 0,
      S: 0,
      L: 0
    };
  }
  var _v158 = {
      "-": "",
      _: " ",
      0: "0"
    },
    _v159 = /^\s*\d+/,
    _v160 = /^%/,
    _v161 = /[\\^$*+?|[\]().{}]/g;
  function _v162(_v0, _v1, _v2) {
    var _v3 = _v0 < 0 ? "-" : "",
      _v4 = (_v3 ? -_v0 : _v0) + "",
      _v5 = _v4.length;
    return _v3 + (_v5 < _v2 ? Array(_v2 - _v5 + 1).join(_v1) + _v4 : _v4);
  }
  function _v163(_v0) {
    return _v0.replace(_v161, "\\$&");
  }
  function _v164(_v0) {
    return RegExp("^(?:" + _v0.map(_v163).join("|") + ")", "i");
  }
  function _v165(_v0) {
    return new Map(_v0.map((_v0, _v1) => [_v0.toLowerCase(), _v1]));
  }
  function _v166(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 1));
    return _v3 ? (_v0.w = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v167(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 1));
    return _v3 ? (_v0.u = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v168(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 2));
    return _v3 ? (_v0.U = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v169(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 2));
    return _v3 ? (_v0.V = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v170(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 2));
    return _v3 ? (_v0.W = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v171(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 4));
    return _v3 ? (_v0.y = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v172(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 2));
    return _v3 ? (_v0.y = +_v3[0] + (+_v3[0] > 68 ? 0 : 0), _v2 + _v3[0].length) : -1;
  }
  function _v173(_v0, _v1, _v2) {
    var _v3 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(_v1.slice(_v2, _v2 + 6));
    return _v3 ? (_v0.Z = _v3[1] ? 0 : -(_v3[2] + (_v3[3] || "00")), _v2 + _v3[0].length) : -1;
  }
  function _v174(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 1));
    return _v3 ? (_v0.q = 3 * _v3[0] - 3, _v2 + _v3[0].length) : -1;
  }
  function _v175(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 2));
    return _v3 ? (_v0.m = _v3[0] - 1, _v2 + _v3[0].length) : -1;
  }
  function _v176(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 2));
    return _v3 ? (_v0.d = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v177(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 3));
    return _v3 ? (_v0.m = 0, _v0.d = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v178(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 2));
    return _v3 ? (_v0.H = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v179(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 2));
    return _v3 ? (_v0.M = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v180(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 2));
    return _v3 ? (_v0.S = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v181(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 3));
    return _v3 ? (_v0.L = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v182(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2, _v2 + 6));
    return _v3 ? (_v0.L = Math.floor(_v3[0] / 0), _v2 + _v3[0].length) : -1;
  }
  function _v183(_v0, _v1, _v2) {
    var _v3 = _v160.exec(_v1.slice(_v2, _v2 + 1));
    return _v3 ? _v2 + _v3[0].length : -1;
  }
  function _v184(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2));
    return _v3 ? (_v0.Q = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v185(_v0, _v1, _v2) {
    var _v3 = _v159.exec(_v1.slice(_v2));
    return _v3 ? (_v0.s = +_v3[0], _v2 + _v3[0].length) : -1;
  }
  function _v186(_v0, _v1) {
    return _v162(_v0.getDate(), _v1, 2);
  }
  function _v187(_v0, _v1) {
    return _v162(_v0.getHours(), _v1, 2);
  }
  function _v188(_v0, _v1) {
    return _v162(_v0.getHours() % 12 || 12, _v1, 2);
  }
  function _v189(_v0, _v1) {
    return _v162(1 + _v141.count(_v121(_v0), _v0), _v1, 3);
  }
  function _v190(_v0, _v1) {
    return _v162(_v0.getMilliseconds(), _v1, 3);
  }
  function _v191(_v0, _v1) {
    return _v190(_v0, _v1) + "000";
  }
  function _v192(_v0, _v1) {
    return _v162(_v0.getMonth() + 1, _v1, 2);
  }
  function _v193(_v0, _v1) {
    return _v162(_v0.getMinutes(), _v1, 2);
  }
  function _v194(_v0, _v1) {
    return _v162(_v0.getSeconds(), _v1, 2);
  }
  function _v195(_v0) {
    var _v1 = _v0.getDay();
    return 0 === _v1 ? 7 : _v1;
  }
  function _v196(_v0, _v1) {
    return _v162(_v126.count(_v121(_v0) - 1, _v0), _v1, 2);
  }
  function _v197(_v0) {
    var _v1 = _v0.getDay();
    return _v1 >= 4 || 0 === _v1 ? _v130(_v0) : _v130.ceil(_v0);
  }
  function _v198(_v0, _v1) {
    return _v0 = _v197(_v0), _v162(_v130.count(_v121(_v0), _v0) + (4 === _v121(_v0).getDay()), _v1, 2);
  }
  function _v199(_v0) {
    return _v0.getDay();
  }
  function _v200(_v0, _v1) {
    return _v162(_v127.count(_v121(_v0) - 1, _v0), _v1, 2);
  }
  function _v201(_v0, _v1) {
    return _v162(_v0.getFullYear() % 100, _v1, 2);
  }
  function _v202(_v0, _v1) {
    return _v162((_v0 = _v197(_v0)).getFullYear() % 100, _v1, 2);
  }
  function _v203(_v0, _v1) {
    return _v162(_v0.getFullYear() % 0, _v1, 4);
  }
  function _v204(_v0, _v1) {
    var _v2 = _v0.getDay();
    return _v162((_v0 = _v2 >= 4 || 0 === _v2 ? _v130(_v0) : _v130.ceil(_v0)).getFullYear() % 0, _v1, 4);
  }
  function _v205(_v0) {
    var _v1 = _v0.getTimezoneOffset();
    return (_v1 > 0 ? "-" : (_v1 *= -1, "+")) + _v162(_v1 / 60 | 0, "0", 2) + _v162(_v1 % 60, "0", 2);
  }
  function _v206(_v0, _v1) {
    return _v162(_v0.getUTCDate(), _v1, 2);
  }
  function _v207(_v0, _v1) {
    return _v162(_v0.getUTCHours(), _v1, 2);
  }
  function _v208(_v0, _v1) {
    return _v162(_v0.getUTCHours() % 12 || 12, _v1, 2);
  }
  function _v209(_v0, _v1) {
    return _v162(1 + _v142.count(_v122(_v0), _v0), _v1, 3);
  }
  function _v210(_v0, _v1) {
    return _v162(_v0.getUTCMilliseconds(), _v1, 3);
  }
  function _v211(_v0, _v1) {
    return _v210(_v0, _v1) + "000";
  }
  function _v212(_v0, _v1) {
    return _v162(_v0.getUTCMonth() + 1, _v1, 2);
  }
  function _v213(_v0, _v1) {
    return _v162(_v0.getUTCMinutes(), _v1, 2);
  }
  function _v214(_v0, _v1) {
    return _v162(_v0.getUTCSeconds(), _v1, 2);
  }
  function _v215(_v0) {
    var _v1 = _v0.getUTCDay();
    return 0 === _v1 ? 7 : _v1;
  }
  function _v216(_v0, _v1) {
    return _v162(_v134.count(_v122(_v0) - 1, _v0), _v1, 2);
  }
  function _v217(_v0) {
    var _v1 = _v0.getUTCDay();
    return _v1 >= 4 || 0 === _v1 ? _v138(_v0) : _v138.ceil(_v0);
  }
  function _v218(_v0, _v1) {
    return _v0 = _v217(_v0), _v162(_v138.count(_v122(_v0), _v0) + (4 === _v122(_v0).getUTCDay()), _v1, 2);
  }
  function _v219(_v0) {
    return _v0.getUTCDay();
  }
  function _v220(_v0, _v1) {
    return _v162(_v135.count(_v122(_v0) - 1, _v0), _v1, 2);
  }
  function _v221(_v0, _v1) {
    return _v162(_v0.getUTCFullYear() % 100, _v1, 2);
  }
  function _v222(_v0, _v1) {
    return _v162((_v0 = _v217(_v0)).getUTCFullYear() % 100, _v1, 2);
  }
  function _v223(_v0, _v1) {
    return _v162(_v0.getUTCFullYear() % 0, _v1, 4);
  }
  function _v224(_v0, _v1) {
    var _v2 = _v0.getUTCDay();
    return _v162((_v0 = _v2 >= 4 || 0 === _v2 ? _v138(_v0) : _v138.ceil(_v0)).getUTCFullYear() % 0, _v1, 4);
  }
  function _v225() {
    return "+0000";
  }
  function _v226() {
    return "%";
  }
  function _v227(_v0) {
    return +_v0;
  }
  function _v228(_v0) {
    return Math.floor(_v0 / 0);
  }
  function _v229(_v0) {
    return new Date(_v0);
  }
  function _v230(_v0) {
    return _v0 instanceof Date ? +_v0 : +new Date(+_v0);
  }
  function _v231(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9) {
    var _v10 = _v73(),
      _v11 = _v10.invert,
      _v12 = _v10.domain,
      _v13 = _v9(".%L"),
      _v14 = _v9(":%S"),
      _v15 = _v9("%I:%M"),
      _v16 = _v9("%I %p"),
      _v17 = _v9("%a %d"),
      _v18 = _v9("%b %d"),
      _v19 = _v9("%B"),
      _v20 = _v9("%Y");
    function _v21(_v0) {
      return (_v8(_v0) < _v0 ? _v13 : _v7(_v0) < _v0 ? _v14 : _v6(_v0) < _v0 ? _v15 : _v5(_v0) < _v0 ? _v16 : _v3(_v0) < _v0 ? _v4(_v0) < _v0 ? _v17 : _v18 : _v2(_v0) < _v0 ? _v19 : _v20)(_v0);
    }
    return _v10.invert = function (_v0) {
      return new Date(_v11(_v0));
    }, _v10.domain = function (_v0) {
      return arguments.length ? _v12(Array.from(_v0, _v230)) : _v12().map(_v229);
    }, _v10.ticks = function (_v0) {
      var _v1 = _v12();
      return _v0(_v1[0], _v1[_v1.length - 1], null == _v0 ? 10 : _v0);
    }, _v10.tickFormat = function (_v0, _v1) {
      return null == _v1 ? _v21 : _v9(_v1);
    }, _v10.nice = function (_v0) {
      var _v1 = _v12();
      return _v0 && "function" == typeof _v0.range || (_v0 = _v1(_v1[0], _v1[_v1.length - 1], null == _v0 ? 10 : _v0)), _v0 ? _v12(_v89(_v1, _v0)) : _v10;
    }, _v10.copy = function () {
      return _v71(_v10, _v231(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9));
    }, _v10;
  }
  function _v232() {
    return _v74.initRange.apply(_v231(_v153, _v154, _v121, _v123, _v126, _v141, _v144, _v146, _v148, _v6).domain([new Date(0, 0, 1), new Date(0, 0, 2)]), arguments);
  }
  function _v233() {
    return _v74.initRange.apply(_v231(_v151, _v152, _v122, _v124, _v134, _v142, _v145, _v147, _v148, _v7).domain([Date.UTC(0, 0, 1), Date.UTC(0, 0, 2)]), arguments);
  }
  function _v234() {
    var _v0,
      _v1,
      _v2,
      _v3,
      _v4,
      _v5 = 0,
      _v6 = 1,
      _v7 = _v67,
      _v8 = !1;
    function _v9(_v0) {
      return null == _v0 || isNaN(_v0 *= 1) ? _v4 : _v7(0 === _v2 ? .5 : (_v0 = (_v3(_v0) - _v0) * _v2, _v8 ? Math.max(0, Math.min(1, _v0)) : _v0));
    }
    function _v10(_v0) {
      return function (_v0) {
        var _v1, _v2;
        return arguments.length ? ([_v1, _v2] = _v0, _v7 = _v0(_v1, _v2), _v9) : [_v7(0), _v7(1)];
      };
    }
    return _v9.domain = function (_v0) {
      return arguments.length ? ([_v5, _v6] = _v0, _v0 = _v3(_v5 *= 1), _v1 = _v3(_v6 *= 1), _v2 = _v0 === _v1 ? 0 : 1 / (_v1 - _v0), _v9) : [_v5, _v6];
    }, _v9.clamp = function (_v0) {
      return arguments.length ? (_v8 = !!_v0, _v9) : _v8;
    }, _v9.interpolator = function (_v0) {
      return arguments.length ? (_v7 = _v0, _v9) : _v7;
    }, _v9.range = _v10(_v63), _v9.rangeRound = _v10(_v64), _v9.unknown = function (_v0) {
      return arguments.length ? (_v4 = _v0, _v9) : _v4;
    }, function (_v0) {
      return _v3 = _v0, _v0 = _v0(_v5), _v1 = _v0(_v6), _v2 = _v0 === _v1 ? 0 : 1 / (_v1 - _v0), _v9;
    };
  }
  function _v235(_v0, _v1) {
    return _v1.domain(_v0.domain()).interpolator(_v0.interpolator()).clamp(_v0.clamp()).unknown(_v0.unknown());
  }
  function _v236() {
    var _v0 = _v86(_v234()(_v67));
    return _v0.copy = function () {
      return _v235(_v0, _v236());
    }, _v74.initInterpolator.apply(_v0, arguments);
  }
  function _v237() {
    var _v0 = _v96(_v234()).domain([1, 10]);
    return _v0.copy = function () {
      return _v235(_v0, _v237()).base(_v0.base());
    }, _v74.initInterpolator.apply(_v0, arguments);
  }
  function _v238() {
    var _v0 = _v100(_v234());
    return _v0.copy = function () {
      return _v235(_v0, _v238()).constant(_v0.constant());
    }, _v74.initInterpolator.apply(_v0, arguments);
  }
  function _v239() {
    var _v0 = _v106(_v234());
    return _v0.copy = function () {
      return _v235(_v0, _v239()).exponent(_v0.exponent());
    }, _v74.initInterpolator.apply(_v0, arguments);
  }
  function _v240() {
    return _v239.apply(null, arguments).exponent(.5);
  }
  function _v241() {
    var _v0 = [],
      _v1 = _v67;
    function _v2(_v0) {
      if (null != _v0 && !isNaN(_v0 *= 1)) return _v1((_v22(_v0, _v0, 1) - 1) / (_v0.length - 1));
    }
    return _v2.domain = function (_v0) {
      if (!arguments.length) return _v0.slice();
      for (let _v0 of (_v0 = [], _v0)) null == _v0 || isNaN(_v0 *= 1) || _v0.push(_v0);
      return _v0.sort(_v16), _v2;
    }, _v2.interpolator = function (_v0) {
      return arguments.length ? (_v1 = _v0, _v2) : _v1;
    }, _v2.range = function () {
      return _v0.map((_v0, _v1) => _v1(_v1 / (_v0.length - 1)));
    }, _v2.quantiles = function (_v0) {
      return Array.from({
        length: _v0 + 1
      }, (_v0, _v1) => function (_v0, _v1) {
        if (!(!(_v2 = (_v0 = Float64Array.from(function* (_v0, _v1) {
          if (void 0 === _v1) for (let _v0 of _v0) null != _v0 && (_v0 *= 1) >= _v0 && (yield _v0);else {
            let _v0 = -1;
            for (let _v0 of _v0) null != (_v0 = _v1(_v0, ++_v0, _v0)) && (_v0 *= 1) >= _v0 && (yield _v0);
          }
        }(_v0, void 0))).length) || isNaN(_v1 *= 1))) {
          if (_v1 <= 0 || _v2 < 2) return _v112(_v0);
          if (_v1 >= 1) return _v111(_v0);
          var _v2,
            _v3 = (_v2 - 1) * _v1,
            _v4 = Math.floor(_v3),
            _v5 = _v111(function _v0(_v1, _v2, _v3 = 0, _v4 = 1 / 0, _v5) {
              if (_v2 = Math.floor(_v2), _v3 = Math.floor(Math.max(0, _v3)), _v4 = Math.floor(Math.min(_v1.length - 1, _v4)), !(_v3 <= _v2 && _v2 <= _v4)) return _v1;
              for (_v5 = void 0 === _v5 ? _v113 : function (_v0 = _v16) {
                if (_v0 === _v16) return _v113;
                if ("function" != typeof _v0) throw TypeError("compare is not a function");
                return (_v0, _v1) => {
                  let _v2 = _v0(_v0, _v1);
                  return _v2 || 0 === _v2 ? _v2 : (0 === _v0(_v1, _v1)) - (0 === _v0(_v0, _v0));
                };
              }(_v5); _v4 > _v3;) {
                if (_v4 - _v3 > 600) {
                  let _v0 = _v4 - _v3 + 1,
                    _v1 = _v2 - _v3 + 1,
                    _v2 = Math.log(_v0),
                    _v3 = .5 * Math.exp(2 * _v2 / 3),
                    _v4 = .5 * Math.sqrt(_v2 * _v3 * (_v0 - _v3) / _v0) * (_v1 - _v0 / 2 < 0 ? -1 : 1),
                    _v5 = Math.max(_v3, Math.floor(_v2 - _v1 * _v3 / _v0 + _v4)),
                    _v6 = Math.min(_v4, Math.floor(_v2 + (_v0 - _v1) * _v3 / _v0 + _v4));
                  _v0(_v1, _v2, _v5, _v6, _v5);
                }
                let _v0 = _v1[_v2],
                  _v1 = _v3,
                  _v2 = _v4;
                for (_v114(_v1, _v3, _v2), _v5(_v1[_v4], _v0) > 0 && _v114(_v1, _v3, _v4); _v1 < _v2;) {
                  for (_v114(_v1, _v1, _v2), ++_v1, --_v2; 0 > _v5(_v1[_v1], _v0);) ++_v1;
                  for (; _v5(_v1[_v2], _v0) > 0;) --_v2;
                }
                0 === _v5(_v1[_v3], _v0) ? _v114(_v1, _v3, _v2) : _v114(_v1, ++_v2, _v4), _v2 <= _v2 && (_v3 = _v2 + 1), _v2 <= _v2 && (_v4 = _v2 - 1);
              }
              return _v1;
            }(_v0, _v4).subarray(0, _v4 + 1));
          return _v5 + (_v112(_v0.subarray(_v4 + 1)) - _v5) * (_v3 - _v4);
        }
      }(_v0, _v1 / _v0));
    }, _v2.copy = function () {
      return _v241(_v1).domain(_v0);
    }, _v74.initInterpolator.apply(_v2, arguments);
  }
  function _v242() {
    var _v0,
      _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7 = 0,
      _v8 = .5,
      _v9 = 1,
      _v10 = 1,
      _v11 = _v67,
      _v12 = !1;
    function _v13(_v0) {
      return isNaN(_v0 *= 1) ? _v6 : (_v0 = .5 + ((_v0 = +_v5(_v0)) - _v1) * (_v10 * _v0 < _v10 * _v1 ? _v3 : _v4), _v11(_v12 ? Math.max(0, Math.min(1, _v0)) : _v0));
    }
    function _v14(_v0) {
      return function (_v0) {
        var _v1, _v2, _v3;
        return arguments.length ? ([_v1, _v2, _v3] = _v0, _v11 = function (_v0, _v1) {
          void 0 === _v1 && (_v1 = _v0, _v0 = _v63);
          for (var _v2 = 0, _v3 = _v1.length - 1, _v4 = _v1[0], _v5 = Array(_v3 < 0 ? 0 : _v3); _v2 < _v3;) _v5[_v2] = _v0(_v4, _v4 = _v1[++_v2]);
          return function (_v0) {
            var _v1 = Math.max(0, Math.min(_v3 - 1, Math.floor(_v0 *= _v3)));
            return _v5[_v1](_v0 - _v1);
          };
        }(_v0, [_v1, _v2, _v3]), _v13) : [_v11(0), _v11(.5), _v11(1)];
      };
    }
    return _v13.domain = function (_v0) {
      return arguments.length ? ([_v7, _v8, _v9] = _v0, _v0 = _v5(_v7 *= 1), _v1 = _v5(_v8 *= 1), _v2 = _v5(_v9 *= 1), _v3 = _v0 === _v1 ? 0 : .5 / (_v1 - _v0), _v4 = _v1 === _v2 ? 0 : .5 / (_v2 - _v1), _v10 = _v1 < _v0 ? -1 : 1, _v13) : [_v7, _v8, _v9];
    }, _v13.clamp = function (_v0) {
      return arguments.length ? (_v12 = !!_v0, _v13) : _v12;
    }, _v13.interpolator = function (_v0) {
      return arguments.length ? (_v11 = _v0, _v13) : _v11;
    }, _v13.range = _v14(_v63), _v13.rangeRound = _v14(_v64), _v13.unknown = function (_v0) {
      return arguments.length ? (_v6 = _v0, _v13) : _v6;
    }, function (_v0) {
      return _v5 = _v0, _v0 = _v0(_v7), _v1 = _v0(_v8), _v2 = _v0(_v9), _v3 = _v0 === _v1 ? 0 : .5 / (_v1 - _v0), _v4 = _v1 === _v2 ? 0 : .5 / (_v2 - _v1), _v10 = _v1 < _v0 ? -1 : 1, _v13;
    };
  }
  function _v243() {
    var _v0 = _v86(_v242()(_v67));
    return _v0.copy = function () {
      return _v235(_v0, _v243());
    }, _v74.initInterpolator.apply(_v0, arguments);
  }
  function _v244() {
    var _v0 = _v96(_v242()).domain([.1, 1, 10]);
    return _v0.copy = function () {
      return _v235(_v0, _v244()).base(_v0.base());
    }, _v74.initInterpolator.apply(_v0, arguments);
  }
  function _v245() {
    var _v0 = _v100(_v242());
    return _v0.copy = function () {
      return _v235(_v0, _v245()).constant(_v0.constant());
    }, _v74.initInterpolator.apply(_v0, arguments);
  }
  function _v246() {
    var _v0 = _v106(_v242());
    return _v0.copy = function () {
      return _v235(_v0, _v246()).exponent(_v0.exponent());
    }, _v74.initInterpolator.apply(_v0, arguments);
  }
  function _v247() {
    return _v246.apply(null, arguments).exponent(.5);
  }
  _v6 = (_v5 = function (_v0) {
    var _v1 = _v0.dateTime,
      _v2 = _v0.date,
      _v3 = _v0.time,
      _v4 = _v0.periods,
      _v5 = _v0.days,
      _v6 = _v0.shortDays,
      _v7 = _v0.months,
      _v8 = _v0.shortMonths,
      _v9 = _v164(_v4),
      _v10 = _v165(_v4),
      _v11 = _v164(_v5),
      _v12 = _v165(_v5),
      _v13 = _v164(_v6),
      _v14 = _v165(_v6),
      _v15 = _v164(_v7),
      _v16 = _v165(_v7),
      _v17 = _v164(_v8),
      _v18 = _v165(_v8),
      _v19 = {
        a: function (_v0) {
          return _v6[_v0.getDay()];
        },
        A: function (_v0) {
          return _v5[_v0.getDay()];
        },
        b: function (_v0) {
          return _v8[_v0.getMonth()];
        },
        B: function (_v0) {
          return _v7[_v0.getMonth()];
        },
        c: null,
        d: _v186,
        e: _v186,
        f: _v191,
        g: _v202,
        G: _v204,
        H: _v187,
        I: _v188,
        j: _v189,
        L: _v190,
        m: _v192,
        M: _v193,
        p: function (_v0) {
          return _v4[+(_v0.getHours() >= 12)];
        },
        q: function (_v0) {
          return 1 + ~~(_v0.getMonth() / 3);
        },
        Q: _v227,
        s: _v228,
        S: _v194,
        u: _v195,
        U: _v196,
        V: _v198,
        w: _v199,
        W: _v200,
        x: null,
        X: null,
        y: _v201,
        Y: _v203,
        Z: _v205,
        "%": _v226
      },
      _v20 = {
        a: function (_v0) {
          return _v6[_v0.getUTCDay()];
        },
        A: function (_v0) {
          return _v5[_v0.getUTCDay()];
        },
        b: function (_v0) {
          return _v8[_v0.getUTCMonth()];
        },
        B: function (_v0) {
          return _v7[_v0.getUTCMonth()];
        },
        c: null,
        d: _v206,
        e: _v206,
        f: _v211,
        g: _v222,
        G: _v224,
        H: _v207,
        I: _v208,
        j: _v209,
        L: _v210,
        m: _v212,
        M: _v213,
        p: function (_v0) {
          return _v4[+(_v0.getUTCHours() >= 12)];
        },
        q: function (_v0) {
          return 1 + ~~(_v0.getUTCMonth() / 3);
        },
        Q: _v227,
        s: _v228,
        S: _v214,
        u: _v215,
        U: _v216,
        V: _v218,
        w: _v219,
        W: _v220,
        x: null,
        X: null,
        y: _v221,
        Y: _v223,
        Z: _v225,
        "%": _v226
      },
      _v21 = {
        a: function (_v0, _v1, _v2) {
          var _v3 = _v13.exec(_v1.slice(_v2));
          return _v3 ? (_v0.w = _v14.get(_v3[0].toLowerCase()), _v2 + _v3[0].length) : -1;
        },
        A: function (_v0, _v1, _v2) {
          var _v3 = _v11.exec(_v1.slice(_v2));
          return _v3 ? (_v0.w = _v12.get(_v3[0].toLowerCase()), _v2 + _v3[0].length) : -1;
        },
        b: function (_v0, _v1, _v2) {
          var _v3 = _v17.exec(_v1.slice(_v2));
          return _v3 ? (_v0.m = _v18.get(_v3[0].toLowerCase()), _v2 + _v3[0].length) : -1;
        },
        B: function (_v0, _v1, _v2) {
          var _v3 = _v15.exec(_v1.slice(_v2));
          return _v3 ? (_v0.m = _v16.get(_v3[0].toLowerCase()), _v2 + _v3[0].length) : -1;
        },
        c: function (_v0, _v1, _v2) {
          return _v24(_v0, _v1, _v1, _v2);
        },
        d: _v176,
        e: _v176,
        f: _v182,
        g: _v172,
        G: _v171,
        H: _v178,
        I: _v178,
        j: _v177,
        L: _v181,
        m: _v175,
        M: _v179,
        p: function (_v0, _v1, _v2) {
          var _v3 = _v9.exec(_v1.slice(_v2));
          return _v3 ? (_v0.p = _v10.get(_v3[0].toLowerCase()), _v2 + _v3[0].length) : -1;
        },
        q: _v174,
        Q: _v184,
        s: _v185,
        S: _v180,
        u: _v167,
        U: _v168,
        V: _v169,
        w: _v166,
        W: _v170,
        x: function (_v0, _v1, _v2) {
          return _v24(_v0, _v2, _v1, _v2);
        },
        X: function (_v0, _v1, _v2) {
          return _v24(_v0, _v3, _v1, _v2);
        },
        y: _v172,
        Y: _v171,
        Z: _v173,
        "%": _v183
      };
    function _v22(_v0, _v1) {
      return function (_v0) {
        var _v1,
          _v2,
          _v3,
          _v4 = [],
          _v5 = -1,
          _v6 = 0,
          _v7 = _v0.length;
        for (_v0 instanceof Date || (_v0 = new Date(+_v0)); ++_v5 < _v7;) 37 === _v0.charCodeAt(_v5) && (_v4.push(_v0.slice(_v6, _v5)), null != (_v2 = _v158[_v1 = _v0.charAt(++_v5)]) ? _v1 = _v0.charAt(++_v5) : _v2 = "e" === _v1 ? " " : "0", (_v3 = _v1[_v1]) && (_v1 = _v3(_v0, _v2)), _v4.push(_v1), _v6 = _v5 + 1);
        return _v4.push(_v0.slice(_v6, _v5)), _v4.join("");
      };
    }
    function _v23(_v0, _v1) {
      return function (_v0) {
        var _v1,
          _v2,
          _v3 = _v157(0, void 0, 1);
        if (_v24(_v3, _v0, _v0 += "", 0) != _v0.length) return null;
        if ("Q" in _v3) return new Date(_v3.Q);
        if ("s" in _v3) return new Date(0 * _v3.s + ("L" in _v3 ? _v3.L : 0));
        if (!_v1 || "Z" in _v3 || (_v3.Z = 0), "p" in _v3 && (_v3.H = _v3.H % 12 + 12 * _v3.p), void 0 === _v3.m && (_v3.m = "q" in _v3 ? _v3.q : 0), "V" in _v3) {
          if (_v3.V < 1 || _v3.V > 53) return null;
          "w" in _v3 || (_v3.w = 1), "Z" in _v3 ? (_v1 = (_v2 = (_v1 = _v156(_v157(_v3.y, 0, 1))).getUTCDay()) > 4 || 0 === _v2 ? _v135.ceil(_v1) : _v135(_v1), _v1 = _v142.offset(_v1, (_v3.V - 1) * 7), _v3.y = _v1.getUTCFullYear(), _v3.m = _v1.getUTCMonth(), _v3.d = _v1.getUTCDate() + (_v3.w + 6) % 7) : (_v1 = (_v2 = (_v1 = _v155(_v157(_v3.y, 0, 1))).getDay()) > 4 || 0 === _v2 ? _v127.ceil(_v1) : _v127(_v1), _v1 = _v141.offset(_v1, (_v3.V - 1) * 7), _v3.y = _v1.getFullYear(), _v3.m = _v1.getMonth(), _v3.d = _v1.getDate() + (_v3.w + 6) % 7);
        } else ("W" in _v3 || "U" in _v3) && ("w" in _v3 || (_v3.w = "u" in _v3 ? _v3.u % 7 : +("W" in _v3)), _v2 = "Z" in _v3 ? _v156(_v157(_v3.y, 0, 1)).getUTCDay() : _v155(_v157(_v3.y, 0, 1)).getDay(), _v3.m = 0, _v3.d = "W" in _v3 ? (_v3.w + 6) % 7 + 7 * _v3.W - (_v2 + 5) % 7 : _v3.w + 7 * _v3.U - (_v2 + 6) % 7);
        return "Z" in _v3 ? (_v3.H += _v3.Z / 100 | 0, _v3.M += _v3.Z % 100, _v156(_v3)) : _v155(_v3);
      };
    }
    function _v24(_v0, _v1, _v2, _v3) {
      for (var _v4, _v5, _v6 = 0, _v7 = _v1.length, _v8 = _v2.length; _v6 < _v7;) {
        if (_v3 >= _v8) return -1;
        if (37 === (_v4 = _v1.charCodeAt(_v6++))) {
          if (!(_v5 = _v21[(_v4 = _v1.charAt(_v6++)) in _v158 ? _v1.charAt(_v6++) : _v4]) || (_v3 = _v5(_v0, _v2, _v3)) < 0) return -1;
        } else if (_v4 != _v2.charCodeAt(_v3++)) return -1;
      }
      return _v3;
    }
    return _v19.x = _v22(_v2, _v19), _v19.X = _v22(_v3, _v19), _v19.c = _v22(_v1, _v19), _v20.x = _v22(_v2, _v20), _v20.X = _v22(_v3, _v20), _v20.c = _v22(_v1, _v20), {
      format: function (_v0) {
        var _v1 = _v22(_v0 += "", _v19);
        return _v1.toString = function () {
          return _v0;
        }, _v1;
      },
      parse: function (_v0) {
        var _v1 = _v23(_v0 += "", !1);
        return _v1.toString = function () {
          return _v0;
        }, _v1;
      },
      utcFormat: function (_v0) {
        var _v1 = _v22(_v0 += "", _v20);
        return _v1.toString = function () {
          return _v0;
        }, _v1;
      },
      utcParse: function (_v0) {
        var _v1 = _v23(_v0 += "", !0);
        return _v1.toString = function () {
          return _v0;
        }, _v1;
      }
    };
  }({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  })).format, _v5.parse, _v7 = _v5.utcFormat, _v5.utcParse, _v0.s(["scaleBand", () => _v8.default, "scaleDiverging", 0, _v243, "scaleDivergingLog", 0, _v244, "scaleDivergingPow", 0, _v246, "scaleDivergingSqrt", 0, _v247, "scaleDivergingSymlog", 0, _v245, "scaleIdentity", 0, _v88, "scaleImplicit", () => _v102.implicit, "scaleLinear", 0, _v87, "scaleLog", 0, _v97, "scaleOrdinal", () => _v102.default, "scalePoint", () => _v8.point, "scalePow", 0, _v107, "scaleQuantile", 0, _v115, "scaleQuantize", 0, _v116, "scaleRadial", 0, _v110, "scaleSequential", 0, _v236, "scaleSequentialLog", 0, _v237, "scaleSequentialPow", 0, _v239, "scaleSequentialQuantile", 0, _v241, "scaleSequentialSqrt", 0, _v240, "scaleSequentialSymlog", 0, _v238, "scaleSqrt", 0, _v108, "scaleSymlog", 0, _v101, "scaleThreshold", 0, _v117, "scaleTime", 0, _v232, "scaleUtc", 0, _v233, "tickFormat", 0, _v85], 0), _v0.i(0), _v0.s(["scaleBand", () => _v8.default, "scaleDiverging", 0, _v243, "scaleDivergingLog", 0, _v244, "scaleDivergingPow", 0, _v246, "scaleDivergingSqrt", 0, _v247, "scaleDivergingSymlog", 0, _v245, "scaleIdentity", 0, _v88, "scaleImplicit", () => _v102.implicit, "scaleLinear", 0, _v87, "scaleLog", 0, _v97, "scaleOrdinal", () => _v102.default, "scalePoint", () => _v8.point, "scalePow", 0, _v107, "scaleQuantile", 0, _v115, "scaleQuantize", 0, _v116, "scaleRadial", 0, _v110, "scaleSequential", 0, _v236, "scaleSequentialLog", 0, _v237, "scaleSequentialPow", 0, _v239, "scaleSequentialQuantile", 0, _v241, "scaleSequentialSqrt", 0, _v240, "scaleSequentialSymlog", 0, _v238, "scaleSqrt", 0, _v108, "scaleSymlog", 0, _v101, "scaleThreshold", 0, _v117, "scaleTime", 0, _v232, "scaleUtc", 0, _v233, "tickFormat", 0, _v85], 0);
}