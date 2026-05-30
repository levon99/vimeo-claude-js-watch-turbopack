{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.i(0);
  var _v5 = function (_v0) {
    function _v1(_v0) {
      var _v1;
      return _v1 = _v0.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + _v0 + " for more information.") || this, (0, _v2.default)(_v1);
    }
    return (0, _v3.default)(_v1, _v0), _v1;
  }((0, _v4.default)(Error));
  function _v6(_v0, _v1) {
    return _v0.substr(-_v1.length) === _v1;
  }
  var _v7 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
  function _v8(_v0) {
    return "string" != typeof _v0 ? _v0 : _v0.match(_v7) ? parseFloat(_v0) : _v0;
  }
  var _v9 = function (_v0) {
      return function (_v0, _v1) {
        void 0 === _v1 && (_v1 = "16px");
        var _v2 = _v0,
          _v3 = _v1;
        if ("string" == typeof _v0) {
          if (!_v6(_v0, "px")) throw new _v5(69, _v0, _v0);
          _v2 = _v8(_v0);
        }
        if ("string" == typeof _v1) {
          if (!_v6(_v1, "px")) throw new _v5(70, _v0, _v1);
          _v3 = _v8(_v1);
        }
        if ("string" == typeof _v2) throw new _v5(71, _v0, _v0);
        if ("string" == typeof _v3) throw new _v5(72, _v1, _v0);
        return "" + _v2 / _v3 + _v0;
      };
    },
    _v10 = _v9("em"),
    _v11 = _v9("rem");
  function _v12(_v0) {
    return Math.round(255 * _v0);
  }
  function _v13(_v0, _v1, _v2) {
    return _v12(_v0) + "," + _v12(_v1) + "," + _v12(_v2);
  }
  function _v14(_v0, _v1, _v2, _v3) {
    if (void 0 === _v3 && (_v3 = _v13), 0 === _v1) return _v3(_v2, _v2, _v2);
    var _v4 = (_v0 % 360 + 360) % 360 / 60,
      _v5 = (1 - Math.abs(2 * _v2 - 1)) * _v1,
      _v6 = _v5 * (1 - Math.abs(_v4 % 2 - 1)),
      _v7 = 0,
      _v8 = 0,
      _v9 = 0;
    _v4 >= 0 && _v4 < 1 ? (_v7 = _v5, _v8 = _v6) : _v4 >= 1 && _v4 < 2 ? (_v7 = _v6, _v8 = _v5) : _v4 >= 2 && _v4 < 3 ? (_v8 = _v5, _v9 = _v6) : _v4 >= 3 && _v4 < 4 ? (_v8 = _v6, _v9 = _v5) : _v4 >= 4 && _v4 < 5 ? (_v7 = _v6, _v9 = _v5) : _v4 >= 5 && _v4 < 6 && (_v7 = _v5, _v9 = _v6);
    var _v10 = _v2 - _v5 / 2;
    return _v3(_v7 + _v10, _v8 + _v10, _v9 + _v10);
  }
  var _v15 = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
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
      fuchsia: "ff00ff",
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
      rebeccapurple: "639",
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
    _v16 = /^#[a-fA-F0-9]{6}$/,
    _v17 = /^#[a-fA-F0-9]{8}$/,
    _v18 = /^#[a-fA-F0-9]{3}$/,
    _v19 = /^#[a-fA-F0-9]{4}$/,
    _v20 = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
    _v21 = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,
    _v22 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    _v23 = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
  function _v24(_v0) {
    if ("string" != typeof _v0) throw new _v5(3);
    var _v1 = function (_v0) {
      if ("string" != typeof _v0) return _v0;
      var _v1 = _v0.toLowerCase();
      return _v15[_v1] ? "#" + _v15[_v1] : _v0;
    }(_v0);
    if (_v1.match(_v16)) return {
      red: parseInt("" + _v1[1] + _v1[2], 16),
      green: parseInt("" + _v1[3] + _v1[4], 16),
      blue: parseInt("" + _v1[5] + _v1[6], 16)
    };
    if (_v1.match(_v17)) {
      var _v2 = parseFloat((parseInt("" + _v1[7] + _v1[8], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + _v1[1] + _v1[2], 16),
        green: parseInt("" + _v1[3] + _v1[4], 16),
        blue: parseInt("" + _v1[5] + _v1[6], 16),
        alpha: _v2
      };
    }
    if (_v1.match(_v18)) return {
      red: parseInt("" + _v1[1] + _v1[1], 16),
      green: parseInt("" + _v1[2] + _v1[2], 16),
      blue: parseInt("" + _v1[3] + _v1[3], 16)
    };
    if (_v1.match(_v19)) {
      var _v3 = parseFloat((parseInt("" + _v1[4] + _v1[4], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + _v1[1] + _v1[1], 16),
        green: parseInt("" + _v1[2] + _v1[2], 16),
        blue: parseInt("" + _v1[3] + _v1[3], 16),
        alpha: _v3
      };
    }
    var _v4 = _v20.exec(_v1);
    if (_v4) return {
      red: parseInt("" + _v4[1], 10),
      green: parseInt("" + _v4[2], 10),
      blue: parseInt("" + _v4[3], 10)
    };
    var _v5 = _v21.exec(_v1.substring(0, 50));
    if (_v5) return {
      red: parseInt("" + _v5[1], 10),
      green: parseInt("" + _v5[2], 10),
      blue: parseInt("" + _v5[3], 10),
      alpha: parseFloat("" + _v5[4])
    };
    var _v6 = _v22.exec(_v1);
    if (_v6) {
      var _v7 = "rgb(" + _v14(parseInt("" + _v6[1], 10), parseInt("" + _v6[2], 10) / 100, parseInt("" + _v6[3], 10) / 100) + ")",
        _v8 = _v20.exec(_v7);
      if (!_v8) throw new _v5(4, _v1, _v7);
      return {
        red: parseInt("" + _v8[1], 10),
        green: parseInt("" + _v8[2], 10),
        blue: parseInt("" + _v8[3], 10)
      };
    }
    var _v9 = _v23.exec(_v1.substring(0, 50));
    if (_v9) {
      var _v10 = "rgb(" + _v14(parseInt("" + _v9[1], 10), parseInt("" + _v9[2], 10) / 100, parseInt("" + _v9[3], 10) / 100) + ")",
        _v11 = _v20.exec(_v10);
      if (!_v11) throw new _v5(4, _v1, _v10);
      return {
        red: parseInt("" + _v11[1], 10),
        green: parseInt("" + _v11[2], 10),
        blue: parseInt("" + _v11[3], 10),
        alpha: parseFloat("" + _v9[4])
      };
    }
    throw new _v5(5);
  }
  function _v25(_v0) {
    return function (_v0) {
      var _v1,
        _v2 = _v0.red / 255,
        _v3 = _v0.green / 255,
        _v4 = _v0.blue / 255,
        _v5 = Math.max(_v2, _v3, _v4),
        _v6 = Math.min(_v2, _v3, _v4),
        _v7 = (_v5 + _v6) / 2;
      if (_v5 === _v6) if (void 0 !== _v0.alpha) return {
        hue: 0,
        saturation: 0,
        lightness: _v7,
        alpha: _v0.alpha
      };else return {
        hue: 0,
        saturation: 0,
        lightness: _v7
      };
      var _v8 = _v5 - _v6,
        _v9 = _v7 > .5 ? _v8 / (2 - _v5 - _v6) : _v8 / (_v5 + _v6);
      switch (_v5) {
        case _v2:
          _v1 = (_v3 - _v4) / _v8 + 6 * (_v3 < _v4);
          break;
        case _v3:
          _v1 = (_v4 - _v2) / _v8 + 2;
          break;
        default:
          _v1 = (_v2 - _v3) / _v8 + 4;
      }
      return (_v1 *= 60, void 0 !== _v0.alpha) ? {
        hue: _v1,
        saturation: _v9,
        lightness: _v7,
        alpha: _v0.alpha
      } : {
        hue: _v1,
        saturation: _v9,
        lightness: _v7
      };
    }(_v24(_v0));
  }
  var _v26 = function (_v0) {
    return 7 === _v0.length && _v0[1] === _v0[2] && _v0[3] === _v0[4] && _v0[5] === _v0[6] ? "#" + _v0[1] + _v0[3] + _v0[5] : _v0;
  };
  function _v27(_v0) {
    var _v1 = _v0.toString(16);
    return 1 === _v1.length ? "0" + _v1 : _v1;
  }
  function _v28(_v0) {
    return _v27(Math.round(255 * _v0));
  }
  function _v29(_v0, _v1, _v2) {
    return _v26("#" + _v28(_v0) + _v28(_v1) + _v28(_v2));
  }
  function _v30(_v0, _v1, _v2) {
    if ("number" == typeof _v0 && "number" == typeof _v1 && "number" == typeof _v2) return _v26("#" + _v27(_v0) + _v27(_v1) + _v27(_v2));
    if ("object" == typeof _v0 && void 0 === _v1 && void 0 === _v2) return _v26("#" + _v27(_v0.red) + _v27(_v0.green) + _v27(_v0.blue));
    throw new _v5(6);
  }
  function _v31(_v0, _v1, _v2, _v3) {
    if ("string" == typeof _v0 && "number" == typeof _v1) {
      var _v4 = _v24(_v0);
      return "rgba(" + _v4.red + "," + _v4.green + "," + _v4.blue + "," + _v1 + ")";
    }
    if ("number" == typeof _v0 && "number" == typeof _v1 && "number" == typeof _v2 && "number" == typeof _v3) return _v3 >= 1 ? _v30(_v0, _v1, _v2) : "rgba(" + _v0 + "," + _v1 + "," + _v2 + "," + _v3 + ")";
    if ("object" == typeof _v0 && void 0 === _v1 && void 0 === _v2 && void 0 === _v3) return _v0.alpha >= 1 ? _v30(_v0.red, _v0.green, _v0.blue) : "rgba(" + _v0.red + "," + _v0.green + "," + _v0.blue + "," + _v0.alpha + ")";
    throw new _v5(7);
  }
  function _v32(_v0) {
    var _v1, _v2;
    if ("object" != typeof _v0) throw new _v5(8);
    if ("number" == typeof _v0.red && "number" == typeof _v0.green && "number" == typeof _v0.blue && "number" == typeof _v0.alpha) return _v31(_v0);
    if ("number" == typeof _v0.red && "number" == typeof _v0.green && "number" == typeof _v0.blue && ("number" != typeof _v0.alpha || void 0 === _v0.alpha)) return _v30(_v0);
    if ("number" == typeof _v0.hue && "number" == typeof _v0.saturation && "number" == typeof _v0.lightness && "number" == typeof _v0.alpha) {
      if ("object" == typeof _v0) return _v0.alpha >= 1 ? (_v1 = _v0.hue, _v14(_v1, _v0.saturation, _v0.lightness, _v29)) : "rgba(" + _v14(_v0.hue, _v0.saturation, _v0.lightness) + "," + _v0.alpha + ")";
      throw new _v5(2);
    }
    if ("number" == typeof _v0.hue && "number" == typeof _v0.saturation && "number" == typeof _v0.lightness && ("number" != typeof _v0.alpha || void 0 === _v0.alpha)) {
      if ("object" == typeof _v0) return _v2 = _v0.hue, _v14(_v2, _v0.saturation, _v0.lightness, _v29);
      throw new _v5(1);
    }
    throw new _v5(8);
  }
  function _v33(_v0) {
    return function _v0(_v1, _v2, _v3) {
      return function () {
        var _v0 = _v3.concat(Array.prototype.slice.call(arguments));
        return _v0.length >= _v2 ? _v1.apply(this, _v0) : _v0(_v1, _v2, _v0);
      };
    }(_v0, _v0.length, []);
  }
  var _v34 = _v33(function (_v0, _v1) {
    if ("transparent" === _v1) return _v1;
    var _v2 = _v25(_v1);
    return _v32((0, _v1.default)({}, _v2, {
      hue: _v2.hue + parseFloat(_v0)
    }));
  });
  function _v35(_v0, _v1, _v2) {
    return Math.max(_v0, Math.min(_v1, _v2));
  }
  var _v36 = _v33(function (_v0, _v1) {
    if ("transparent" === _v1) return _v1;
    var _v2 = _v25(_v1);
    return _v32((0, _v1.default)({}, _v2, {
      lightness: _v35(0, 1, _v2.lightness - parseFloat(_v0))
    }));
  });
  function _v37(_v0) {
    if ("transparent" === _v0) return 0;
    var _v1 = _v24(_v0),
      _v2 = Object.keys(_v1).map(function (_v0) {
        var _v1 = _v1[_v0] / 255;
        return _v1 <= .03928 ? _v1 / 12.92 : Math.pow((_v1 + .055) / 1.055, 2.4);
      });
    return parseFloat((.2126 * _v2[0] + .7152 * _v2[1] + .0722 * _v2[2]).toFixed(3));
  }
  var _v38 = _v33(function (_v0, _v1) {
      if ("transparent" === _v1) return _v1;
      var _v2 = _v25(_v1);
      return _v32((0, _v1.default)({}, _v2, {
        lightness: _v35(0, 1, _v2.lightness + parseFloat(_v0))
      }));
    }),
    _v39 = _v33(function (_v0, _v1, _v2) {
      if ("transparent" === _v1) return _v2;
      if ("transparent" === _v2) return _v1;
      if (0 === _v0) return _v2;
      var _v3 = _v24(_v1),
        _v4 = (0, _v1.default)({}, _v3, {
          alpha: "number" == typeof _v3.alpha ? _v3.alpha : 1
        }),
        _v5 = _v24(_v2),
        _v6 = (0, _v1.default)({}, _v5, {
          alpha: "number" == typeof _v5.alpha ? _v5.alpha : 1
        }),
        _v7 = _v4.alpha - _v6.alpha,
        _v8 = 2 * parseFloat(_v0) - 1,
        _v9 = ((_v8 * _v7 == -1 ? _v8 : _v8 + _v7) / (1 + _v8 * _v7) + 1) / 2,
        _v10 = 1 - _v9;
      return _v31({
        red: Math.floor(_v4.red * _v9 + _v6.red * _v10),
        green: Math.floor(_v4.green * _v9 + _v6.green * _v10),
        blue: Math.floor(_v4.blue * _v9 + _v6.blue * _v10),
        alpha: _v4.alpha * (parseFloat(_v0) / 1) + _v6.alpha * (1 - parseFloat(_v0) / 1)
      });
    }),
    _v40 = "#000",
    _v41 = "#fff",
    _v42 = _v33(function (_v0, _v1) {
      if ("transparent" === _v1) return _v1;
      var _v2 = _v25(_v1);
      return _v32((0, _v1.default)({}, _v2, {
        saturation: _v35(0, 1, _v2.saturation + parseFloat(_v0))
      }));
    }),
    _v43 = _v33(function (_v0, _v1) {
      return "transparent" === _v1 ? _v1 : _v39(parseFloat(_v0), "rgb(0, 0, 0)", _v1);
    }),
    _v44 = _v33(function (_v0, _v1) {
      return "transparent" === _v1 ? _v1 : _v39(parseFloat(_v0), "rgb(255, 255, 255)", _v1);
    }),
    _v45 = _v33(function (_v0, _v1) {
      if ("transparent" === _v1) return _v1;
      var _v2 = _v24(_v1),
        _v3 = "number" == typeof _v2.alpha ? _v2.alpha : 1;
      return _v31((0, _v1.default)({}, _v2, {
        alpha: _v35(0, 1, (100 * _v3 - 100 * parseFloat(_v0)).toFixed(2) / 100)
      }));
    });
  _v0.s(["adjustHue", 0, _v34, "darken", 0, _v36, "em", 0, _v10, "getLuminance", 0, _v37, "lighten", 0, _v38, "readableColor", 0, function (_v0, _v1, _v2, _v3) {
    void 0 === _v1 && (_v1 = _v40), void 0 === _v2 && (_v2 = _v41), void 0 === _v3 && (_v3 = !0);
    var _v4,
      _v5,
      _v6 = _v37(_v0) > .179,
      _v7 = _v6 ? _v1 : _v2;
    return !_v3 || parseFloat(((_v4 = _v37(_v0)) > (_v5 = _v37(_v7)) ? (_v4 + .05) / (_v5 + .05) : (_v5 + .05) / (_v4 + .05)).toFixed(2)) >= 4.5 ? _v7 : _v6 ? _v40 : _v41;
  }, "rem", 0, _v11, "rgba", 0, _v31, "saturate", 0, _v42, "shade", 0, _v43, "tint", 0, _v44, "transparentize", 0, _v45]);
}