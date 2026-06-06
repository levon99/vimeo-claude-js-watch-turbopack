{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8() {
    var _v0;
    return _v0 = arguments.length - 1, _v0 < 0 || arguments.length <= _v0 ? void 0 : arguments[_v0];
  }
  var _v9 = {
      "*": {
        infix: {
          symbol: "*",
          f: function (_v0, _v1) {
            return _v0 * _v1;
          },
          notation: "infix",
          precedence: 4,
          rightToLeft: 0,
          argCount: 2
        },
        symbol: "*",
        regSymbol: "\\*"
      },
      "/": {
        infix: {
          symbol: "/",
          f: function (_v0, _v1) {
            return _v0 / _v1;
          },
          notation: "infix",
          precedence: 4,
          rightToLeft: 0,
          argCount: 2
        },
        symbol: "/",
        regSymbol: "/"
      },
      "+": {
        infix: {
          symbol: "+",
          f: function (_v0, _v1) {
            return _v0 + _v1;
          },
          notation: "infix",
          precedence: 2,
          rightToLeft: 0,
          argCount: 2
        },
        prefix: {
          symbol: "+",
          f: _v8,
          notation: "prefix",
          precedence: 3,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: "+",
        regSymbol: "\\+"
      },
      "-": {
        infix: {
          symbol: "-",
          f: function (_v0, _v1) {
            return _v0 - _v1;
          },
          notation: "infix",
          precedence: 2,
          rightToLeft: 0,
          argCount: 2
        },
        prefix: {
          symbol: "-",
          f: function (_v0) {
            return -_v0;
          },
          notation: "prefix",
          precedence: 3,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: "-",
        regSymbol: "-"
      },
      ",": {
        infix: {
          symbol: ",",
          f: function () {
            return Array.of.apply(Array, arguments);
          },
          notation: "infix",
          precedence: 1,
          rightToLeft: 0,
          argCount: 2
        },
        symbol: ",",
        regSymbol: ","
      },
      "(": {
        prefix: {
          symbol: "(",
          f: _v8,
          notation: "prefix",
          precedence: 0,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: "(",
        regSymbol: "\\("
      },
      ")": {
        postfix: {
          symbol: ")",
          f: void 0,
          notation: "postfix",
          precedence: 0,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: ")",
        regSymbol: "\\)"
      },
      min: {
        func: {
          symbol: "min",
          f: function () {
            return Math.min.apply(Math, arguments);
          },
          notation: "func",
          precedence: 0,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: "min",
        regSymbol: "min\\b"
      },
      max: {
        func: {
          symbol: "max",
          f: function () {
            return Math.max.apply(Math, arguments);
          },
          notation: "func",
          precedence: 0,
          rightToLeft: 0,
          argCount: 1
        },
        symbol: "max",
        regSymbol: "max\\b"
      }
    },
    _v10 = function (_v0) {
      function _v1(_v0) {
        var _v1;
        return _v1 = _v0.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + _v0 + " for more information.") || this, (0, _v4.default)(_v1);
      }
      return (0, _v5.default)(_v1, _v0), _v1;
    }((0, _v6.default)(Error)),
    _v11 = /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;
  function _v12(_v0, _v1) {
    var _v2,
      _v3 = _v0.pop();
    return _v1.push(_v3.f.apply(_v3, (_v2 = []).concat.apply(_v2, _v1.splice(-_v3.argCount)))), _v3.precedence;
  }
  function _v13(_v0) {
    return _v0.split("").reverse().join("");
  }
  var _v14 = /--[\S]*/g;
  function _v15(_v0) {
    return _v0.charAt(0).toUpperCase() + _v0.slice(1);
  }
  var _v16 = ["Top", "Right", "Bottom", "Left"];
  function _v17(_v0) {
    for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
    for (var _v4 = _v2[0], _v5 = _v2[1], _v6 = void 0 === _v5 ? _v4 : _v5, _v7 = _v2[2], _v8 = _v2[3], _v9 = [_v4, _v6, void 0 === _v7 ? _v4 : _v7, void 0 === _v8 ? _v6 : _v8], _v10 = {}, _v11 = 0; _v11 < _v9.length; _v11 += 1) (_v9[_v11] || 0 === _v9[_v11]) && (_v10[function (_v0, _v1) {
      if (!_v0) return _v1.toLowerCase();
      var _v2 = _v0.split("-");
      if (_v2.length > 1) return _v2.splice(1, 0, _v1), _v2.reduce(function (_v0, _v1) {
        return "" + _v0 + _v15(_v1);
      });
      var _v3 = _v0.replace(/([a-z])([A-Z])/g, "$1" + _v1 + "$2");
      return _v0 === _v3 ? "" + _v0 + _v1 : _v3;
    }(_v0, _v16[_v11])] = _v9[_v11]);
    return _v10;
  }
  function _v18(_v0, _v1) {
    return _v0.substr(-_v1.length) === _v1;
  }
  var _v19 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
  function _v20(_v0) {
    return "string" != typeof _v0 ? _v0 : _v0.match(_v19) ? parseFloat(_v0) : _v0;
  }
  var _v21 = function (_v0) {
      return function (_v0, _v1) {
        void 0 === _v1 && (_v1 = "16px");
        var _v2 = _v0,
          _v3 = _v1;
        if ("string" == typeof _v0) {
          if (!_v18(_v0, "px")) throw new _v10(69, _v0, _v0);
          _v2 = _v20(_v0);
        }
        if ("string" == typeof _v1) {
          if (!_v18(_v1, "px")) throw new _v10(70, _v0, _v1);
          _v3 = _v20(_v1);
        }
        if ("string" == typeof _v2) throw new _v10(71, _v0, _v0);
        if ("string" == typeof _v3) throw new _v10(72, _v1, _v0);
        return "" + _v2 / _v3 + _v0;
      };
    },
    _v22 = _v21("em"),
    _v23 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
  function _v24(_v0) {
    if ("string" != typeof _v0) return [_v0, ""];
    var _v1 = _v0.match(_v23);
    return _v1 ? [parseFloat(_v0), _v1[2]] : [_v0, void 0];
  }
  var _v25 = {
      minorSecond: 1.067,
      majorSecond: 1.125,
      minorThird: 1.2,
      majorThird: 1.25,
      perfectFourth: 1.333,
      augFourth: 1.414,
      perfectFifth: 1.5,
      minorSixth: 1.6,
      goldenSection: 1.618,
      majorSixth: 1.667,
      minorSeventh: 1.778,
      majorSeventh: 1.875,
      octave: 2,
      majorTenth: 2.5,
      majorEleventh: 2.667,
      majorTwelfth: 3,
      doubleOctave: 4
    },
    _v26 = _v21("rem");
  function _v27(_v0) {
    var _v1 = _v24(_v0);
    if ("px" === _v1[1]) return parseFloat(_v0);
    if ("%" === _v1[1]) return parseFloat(_v0) / 100 * 16;
    throw new _v10(78, _v1[1]);
  }
  var _v28 = {
      back: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
      circ: "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
      cubic: "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
      expo: "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
      quad: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
      quart: "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
      quint: "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
      sine: "cubic-bezier(0.470,  0.000, 0.745, 0.715)"
    },
    _v29 = {
      back: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
      circ: "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
      cubic: "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
      expo: "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
      quad: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
      quart: "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
      quint: "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
      sine: "cubic-bezier(0.445,  0.050, 0.550, 0.950)"
    },
    _v30 = {
      back: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
      cubic: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
      circ: "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
      expo: "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
      quad: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
      quart: "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
      quint: "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
      sine: "cubic-bezier(0.390,  0.575, 0.565, 1.000)"
    };
  function _v31(_v0, _v1, _v2, _v3) {
    void 0 === _v2 && (_v2 = "320px"), void 0 === _v3 && (_v3 = "1200px");
    var _v4 = _v24(_v0),
      _v5 = _v4[0],
      _v6 = _v4[1],
      _v7 = _v24(_v1),
      _v8 = _v7[0],
      _v9 = _v7[1],
      _v10 = _v24(_v2),
      _v11 = _v10[0],
      _v12 = _v10[1],
      _v13 = _v24(_v3),
      _v14 = _v13[0],
      _v15 = _v13[1];
    if ("number" != typeof _v11 || "number" != typeof _v14 || !_v12 || !_v15 || _v12 !== _v15) throw new _v10(47);
    if ("number" != typeof _v5 || "number" != typeof _v8 || _v6 !== _v9) throw new _v10(48);
    if (_v6 !== _v12 || _v9 !== _v15) throw new _v10(76);
    var _v16 = (_v5 - _v8) / (_v11 - _v14);
    return "calc(" + (_v8 - _v16 * _v14).toFixed(2) + (_v6 || "") + " + " + (100 * _v16).toFixed(2) + "vw)";
  }
  function _v32(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  var _v33 = /^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i,
    _v34 = {
      woff: "woff",
      woff2: "woff2",
      ttf: "truetype",
      otf: "opentype",
      eot: "embedded-opentype",
      svg: "svg",
      svgz: "svg"
    };
  function _v35(_v0, _v1) {
    return _v1 ? ' format("' + _v34[_v0] + '")' : "";
  }
  function _v36(_v0) {
    return void 0 === _v0 && (_v0 = 1.3), "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + _v0 + "),\n    only screen and (min--moz-device-pixel-ratio: " + _v0 + "),\n    only screen and (-o-min-device-pixel-ratio: " + _v0 + "/1),\n    only screen and (min-resolution: " + Math.round(96 * _v0) + "dpi),\n    only screen and (min-resolution: " + _v0 + "dppx)\n  ";
  }
  function _v37(_v0) {
    for (var _v1 = "", _v2 = arguments.length, _v3 = Array(_v2 > 1 ? _v2 - 1 : 0), _v4 = 1; _v4 < _v2; _v4++) _v3[_v4 - 1] = arguments[_v4];
    for (var _v5 = 0; _v5 < _v0.length; _v5 += 1) if (_v1 += _v0[_v5], _v5 === _v3.length - 1 && _v3[_v5]) {
      var _v6 = _v3.filter(function (_v0) {
        return !!_v0;
      });
      _v6.length > 1 ? _v1 = _v1.slice(0, -1) + ", " + _v3[_v5] : 1 === _v6.length && (_v1 += "" + _v3[_v5]);
    } else _v3[_v5] && (_v1 += _v3[_v5] + " ");
    return _v1.trim();
  }
  var _v38 = {
      easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
      easeInCirc: "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
      easeInCubic: "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
      easeInExpo: "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
      easeInQuad: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
      easeInQuart: "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
      easeInQuint: "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
      easeInSine: "cubic-bezier(0.470,  0.000, 0.745, 0.715)",
      easeOutBack: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
      easeOutCubic: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
      easeOutCirc: "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
      easeOutExpo: "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
      easeOutQuad: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
      easeOutQuart: "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
      easeOutQuint: "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
      easeOutSine: "cubic-bezier(0.390,  0.575, 0.565, 1.000)",
      easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
      easeInOutCirc: "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
      easeInOutCubic: "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
      easeInOutExpo: "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
      easeInOutQuad: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
      easeInOutQuart: "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
      easeInOutQuint: "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
      easeInOutSine: "cubic-bezier(0.445,  0.050, 0.550, 0.950)"
    },
    _v39 = function (_v0, _v1, _v2) {
      var _v3 = "" + _v2[0] + (_v2[1] || ""),
        _v4 = "" + _v2[0] / 2 + (_v2[1] || ""),
        _v5 = "" + _v1[0] + (_v1[1] || ""),
        _v6 = "" + _v1[0] / 2 + (_v1[1] || "");
      switch (_v0) {
        case "top":
          return "0 " + _v4 + " " + _v5 + " " + _v4;
        case "topLeft":
          return _v3 + " " + _v5 + " 0 0";
        case "left":
          return _v6 + " " + _v3 + " " + _v6 + " 0";
        case "bottomLeft":
          return _v3 + " 0 0 " + _v5;
        case "bottom":
          return _v5 + " " + _v4 + " 0 " + _v4;
        case "bottomRight":
          return "0 0 " + _v3 + " " + _v5;
        case "right":
          return _v6 + " 0 " + _v6 + " " + _v3;
        default:
          return "0 " + _v3 + " " + _v5 + " 0";
      }
    },
    _v40 = function (_v0, _v1) {
      switch (_v0) {
        case "top":
        case "bottomRight":
          return {
            borderBottomColor: _v1
          };
        case "right":
        case "bottomLeft":
          return {
            borderLeftColor: _v1
          };
        case "bottom":
        case "topLeft":
          return {
            borderTopColor: _v1
          };
        case "left":
        case "topRight":
          return {
            borderRightColor: _v1
          };
        default:
          throw new _v10(59);
      }
    };
  function _v41(_v0) {
    return Math.round(255 * _v0);
  }
  function _v42(_v0, _v1, _v2) {
    return _v41(_v0) + "," + _v41(_v1) + "," + _v41(_v2);
  }
  function _v43(_v0, _v1, _v2, _v3) {
    if (void 0 === _v3 && (_v3 = _v42), 0 === _v1) return _v3(_v2, _v2, _v2);
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
  var _v44 = {
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
    _v45 = /^#[a-fA-F0-9]{6}$/,
    _v46 = /^#[a-fA-F0-9]{8}$/,
    _v47 = /^#[a-fA-F0-9]{3}$/,
    _v48 = /^#[a-fA-F0-9]{4}$/,
    _v49 = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    _v50 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    _v51 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    _v52 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  function _v53(_v0) {
    if ("string" != typeof _v0) throw new _v10(3);
    var _v1 = function (_v0) {
      if ("string" != typeof _v0) return _v0;
      var _v1 = _v0.toLowerCase();
      return _v44[_v1] ? "#" + _v44[_v1] : _v0;
    }(_v0);
    if (_v1.match(_v45)) return {
      red: parseInt("" + _v1[1] + _v1[2], 16),
      green: parseInt("" + _v1[3] + _v1[4], 16),
      blue: parseInt("" + _v1[5] + _v1[6], 16)
    };
    if (_v1.match(_v46)) {
      var _v2 = parseFloat((parseInt("" + _v1[7] + _v1[8], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + _v1[1] + _v1[2], 16),
        green: parseInt("" + _v1[3] + _v1[4], 16),
        blue: parseInt("" + _v1[5] + _v1[6], 16),
        alpha: _v2
      };
    }
    if (_v1.match(_v47)) return {
      red: parseInt("" + _v1[1] + _v1[1], 16),
      green: parseInt("" + _v1[2] + _v1[2], 16),
      blue: parseInt("" + _v1[3] + _v1[3], 16)
    };
    if (_v1.match(_v48)) {
      var _v3 = parseFloat((parseInt("" + _v1[4] + _v1[4], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + _v1[1] + _v1[1], 16),
        green: parseInt("" + _v1[2] + _v1[2], 16),
        blue: parseInt("" + _v1[3] + _v1[3], 16),
        alpha: _v3
      };
    }
    var _v4 = _v49.exec(_v1);
    if (_v4) return {
      red: parseInt("" + _v4[1], 10),
      green: parseInt("" + _v4[2], 10),
      blue: parseInt("" + _v4[3], 10)
    };
    var _v5 = _v50.exec(_v1.substring(0, 50));
    if (_v5) return {
      red: parseInt("" + _v5[1], 10),
      green: parseInt("" + _v5[2], 10),
      blue: parseInt("" + _v5[3], 10),
      alpha: parseFloat("" + _v5[4]) > 1 ? parseFloat("" + _v5[4]) / 100 : parseFloat("" + _v5[4])
    };
    var _v6 = _v51.exec(_v1);
    if (_v6) {
      var _v7 = "rgb(" + _v43(parseInt("" + _v6[1], 10), parseInt("" + _v6[2], 10) / 100, parseInt("" + _v6[3], 10) / 100) + ")",
        _v8 = _v49.exec(_v7);
      if (!_v8) throw new _v10(4, _v1, _v7);
      return {
        red: parseInt("" + _v8[1], 10),
        green: parseInt("" + _v8[2], 10),
        blue: parseInt("" + _v8[3], 10)
      };
    }
    var _v9 = _v52.exec(_v1.substring(0, 50));
    if (_v9) {
      var _v10 = "rgb(" + _v43(parseInt("" + _v9[1], 10), parseInt("" + _v9[2], 10) / 100, parseInt("" + _v9[3], 10) / 100) + ")",
        _v11 = _v49.exec(_v10);
      if (!_v11) throw new _v10(4, _v1, _v10);
      return {
        red: parseInt("" + _v11[1], 10),
        green: parseInt("" + _v11[2], 10),
        blue: parseInt("" + _v11[3], 10),
        alpha: parseFloat("" + _v9[4]) > 1 ? parseFloat("" + _v9[4]) / 100 : parseFloat("" + _v9[4])
      };
    }
    throw new _v10(5);
  }
  function _v54(_v0) {
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
    }(_v53(_v0));
  }
  var _v55 = function (_v0) {
    return 7 === _v0.length && _v0[1] === _v0[2] && _v0[3] === _v0[4] && _v0[5] === _v0[6] ? "#" + _v0[1] + _v0[3] + _v0[5] : _v0;
  };
  function _v56(_v0) {
    var _v1 = _v0.toString(16);
    return 1 === _v1.length ? "0" + _v1 : _v1;
  }
  function _v57(_v0) {
    return _v56(Math.round(255 * _v0));
  }
  function _v58(_v0, _v1, _v2) {
    return _v55("#" + _v57(_v0) + _v57(_v1) + _v57(_v2));
  }
  function _v59(_v0, _v1, _v2) {
    if ("number" == typeof _v0 && "number" == typeof _v1 && "number" == typeof _v2) return _v43(_v0, _v1, _v2, _v58);
    if ("object" == typeof _v0 && void 0 === _v1 && void 0 === _v2) {
      var _v3;
      return _v3 = _v0.hue, _v43(_v3, _v0.saturation, _v0.lightness, _v58);
    }
    throw new _v10(1);
  }
  function _v60(_v0, _v1, _v2, _v3) {
    if ("number" == typeof _v0 && "number" == typeof _v1 && "number" == typeof _v2 && "number" == typeof _v3) return _v3 >= 1 ? _v43(_v0, _v1, _v2, _v58) : "rgba(" + _v43(_v0, _v1, _v2) + "," + _v3 + ")";
    if ("object" == typeof _v0 && void 0 === _v1 && void 0 === _v2 && void 0 === _v3) {
      var _v4;
      return _v0.alpha >= 1 ? (_v4 = _v0.hue, _v43(_v4, _v0.saturation, _v0.lightness, _v58)) : "rgba(" + _v43(_v0.hue, _v0.saturation, _v0.lightness) + "," + _v0.alpha + ")";
    }
    throw new _v10(2);
  }
  function _v61(_v0, _v1, _v2) {
    if ("number" == typeof _v0 && "number" == typeof _v1 && "number" == typeof _v2) return _v55("#" + _v56(_v0) + _v56(_v1) + _v56(_v2));
    if ("object" == typeof _v0 && void 0 === _v1 && void 0 === _v2) return _v55("#" + _v56(_v0.red) + _v56(_v0.green) + _v56(_v0.blue));
    throw new _v10(6);
  }
  function _v62(_v0, _v1, _v2, _v3) {
    if ("string" == typeof _v0 && "number" == typeof _v1) {
      var _v4 = _v53(_v0);
      return "rgba(" + _v4.red + "," + _v4.green + "," + _v4.blue + "," + _v1 + ")";
    }
    if ("number" == typeof _v0 && "number" == typeof _v1 && "number" == typeof _v2 && "number" == typeof _v3) return _v3 >= 1 ? _v61(_v0, _v1, _v2) : "rgba(" + _v0 + "," + _v1 + "," + _v2 + "," + _v3 + ")";
    if ("object" == typeof _v0 && void 0 === _v1 && void 0 === _v2 && void 0 === _v3) return _v0.alpha >= 1 ? _v61(_v0.red, _v0.green, _v0.blue) : "rgba(" + _v0.red + "," + _v0.green + "," + _v0.blue + "," + _v0.alpha + ")";
    throw new _v10(7);
  }
  function _v63(_v0) {
    if ("object" != typeof _v0) throw new _v10(8);
    if ("number" == typeof _v0.red && "number" == typeof _v0.green && "number" == typeof _v0.blue && "number" == typeof _v0.alpha) return _v62(_v0);
    if ("number" == typeof _v0.red && "number" == typeof _v0.green && "number" == typeof _v0.blue && ("number" != typeof _v0.alpha || void 0 === _v0.alpha)) return _v61(_v0);
    if ("number" == typeof _v0.hue && "number" == typeof _v0.saturation && "number" == typeof _v0.lightness && "number" == typeof _v0.alpha) return _v60(_v0);
    if ("number" == typeof _v0.hue && "number" == typeof _v0.saturation && "number" == typeof _v0.lightness && ("number" != typeof _v0.alpha || void 0 === _v0.alpha)) return _v59(_v0);
    throw new _v10(8);
  }
  function _v64(_v0) {
    return function _v0(_v1, _v2, _v3) {
      return function () {
        var _v0 = _v3.concat(Array.prototype.slice.call(arguments));
        return _v0.length >= _v2 ? _v1.apply(this, _v0) : _v0(_v1, _v2, _v0);
      };
    }(_v0, _v0.length, []);
  }
  var _v65 = _v64(function (_v0, _v1) {
    if ("transparent" === _v1) return _v1;
    var _v2 = _v54(_v1);
    return _v63((0, _v3.default)({}, _v2, {
      hue: _v2.hue + parseFloat(_v0)
    }));
  });
  function _v66(_v0, _v1, _v2) {
    return Math.max(_v0, Math.min(_v1, _v2));
  }
  var _v67 = _v64(function (_v0, _v1) {
      if ("transparent" === _v1) return _v1;
      var _v2 = _v54(_v1);
      return _v63((0, _v3.default)({}, _v2, {
        lightness: _v66(0, 1, _v2.lightness - parseFloat(_v0))
      }));
    }),
    _v68 = _v64(function (_v0, _v1) {
      if ("transparent" === _v1) return _v1;
      var _v2 = _v54(_v1);
      return _v63((0, _v3.default)({}, _v2, {
        saturation: _v66(0, 1, _v2.saturation - parseFloat(_v0))
      }));
    });
  function _v69(_v0) {
    if ("transparent" === _v0) return 0;
    var _v1 = _v53(_v0),
      _v2 = Object.keys(_v1).map(function (_v0) {
        var _v1 = _v1[_v0] / 255;
        return _v1 <= .03928 ? _v1 / 12.92 : Math.pow((_v1 + .055) / 1.055, 2.4);
      });
    return parseFloat((.2126 * _v2[0] + .7152 * _v2[1] + .0722 * _v2[2]).toFixed(3));
  }
  function _v70(_v0, _v1) {
    var _v2 = _v69(_v0),
      _v3 = _v69(_v1);
    return parseFloat((_v2 > _v3 ? (_v2 + .05) / (_v3 + .05) : (_v3 + .05) / (_v2 + .05)).toFixed(2));
  }
  var _v71 = _v64(function (_v0, _v1) {
      if ("transparent" === _v1) return _v1;
      var _v2 = _v54(_v1);
      return _v63((0, _v3.default)({}, _v2, {
        lightness: _v66(0, 1, _v2.lightness + parseFloat(_v0))
      }));
    }),
    _v72 = _v64(function (_v0, _v1, _v2) {
      if ("transparent" === _v1) return _v2;
      if ("transparent" === _v2) return _v1;
      if (0 === _v0) return _v2;
      var _v3 = _v53(_v1),
        _v4 = (0, _v3.default)({}, _v3, {
          alpha: "number" == typeof _v3.alpha ? _v3.alpha : 1
        }),
        _v5 = _v53(_v2),
        _v6 = (0, _v3.default)({}, _v5, {
          alpha: "number" == typeof _v5.alpha ? _v5.alpha : 1
        }),
        _v7 = _v4.alpha - _v6.alpha,
        _v8 = 2 * parseFloat(_v0) - 1,
        _v9 = ((_v8 * _v7 == -1 ? _v8 : _v8 + _v7) / (1 + _v8 * _v7) + 1) / 2,
        _v10 = 1 - _v9;
      return _v62({
        red: Math.floor(_v4.red * _v9 + _v6.red * _v10),
        green: Math.floor(_v4.green * _v9 + _v6.green * _v10),
        blue: Math.floor(_v4.blue * _v9 + _v6.blue * _v10),
        alpha: _v4.alpha * parseFloat(_v0) + _v6.alpha * (1 - parseFloat(_v0))
      });
    }),
    _v73 = _v64(function (_v0, _v1) {
      if ("transparent" === _v1) return _v1;
      var _v2 = _v53(_v1),
        _v3 = "number" == typeof _v2.alpha ? _v2.alpha : 1;
      return _v62((0, _v3.default)({}, _v2, {
        alpha: _v66(0, 1, (100 * _v3 + 100 * parseFloat(_v0)) / 100)
      }));
    }),
    _v74 = "#000",
    _v75 = "#fff",
    _v76 = _v64(function (_v0, _v1) {
      if ("transparent" === _v1) return _v1;
      var _v2 = _v54(_v1);
      return _v63((0, _v3.default)({}, _v2, {
        saturation: _v66(0, 1, _v2.saturation + parseFloat(_v0))
      }));
    }),
    _v77 = _v64(function (_v0, _v1) {
      return "transparent" === _v1 ? _v1 : _v63((0, _v3.default)({}, _v54(_v1), {
        hue: parseFloat(_v0)
      }));
    }),
    _v78 = _v64(function (_v0, _v1) {
      return "transparent" === _v1 ? _v1 : _v63((0, _v3.default)({}, _v54(_v1), {
        lightness: parseFloat(_v0)
      }));
    }),
    _v79 = _v64(function (_v0, _v1) {
      return "transparent" === _v1 ? _v1 : _v63((0, _v3.default)({}, _v54(_v1), {
        saturation: parseFloat(_v0)
      }));
    }),
    _v80 = _v64(function (_v0, _v1) {
      return "transparent" === _v1 ? _v1 : _v72(parseFloat(_v0), "rgb(0, 0, 0)", _v1);
    }),
    _v81 = _v64(function (_v0, _v1) {
      return "transparent" === _v1 ? _v1 : _v72(parseFloat(_v0), "rgb(255, 255, 255)", _v1);
    }),
    _v82 = _v64(function (_v0, _v1) {
      if ("transparent" === _v1) return _v1;
      var _v2 = _v53(_v1),
        _v3 = "number" == typeof _v2.alpha ? _v2.alpha : 1;
      return _v62((0, _v3.default)({}, _v2, {
        alpha: _v66(0, 1, (100 * _v3 - 100 * parseFloat(_v0)).toFixed(2) / 100)
      }));
    }),
    _v83 = ["top", "right", "bottom", "left"];
  function _v84(_v0, _v1, _v2) {
    if (!_v1) throw new _v10(67);
    if (0 === _v0.length) return _v1("");
    for (var _v3, _v4 = [], _v5 = 0; _v5 < _v0.length; _v5 += 1) {
      if (_v2 && 0 > _v2.indexOf(_v0[_v5])) throw new _v10(68);
      _v4.push(_v1((_v3 = _v0[_v5]) ? ":" + _v3 : ""));
    }
    return _v4.join(",");
  }
  var _v85 = [void 0, null, "active", "focus", "hover"];
  function _v86(_v0) {
    return "button" + _v0 + ',\n  input[type="button"]' + _v0 + ',\n  input[type="reset"]' + _v0 + ',\n  input[type="submit"]' + _v0;
  }
  var _v87 = ["absolute", "fixed", "relative", "static", "sticky"],
    _v88 = [void 0, null, "active", "focus", "hover"];
  function _v89(_v0) {
    return 'input[type="color"]' + _v0 + ',\n    input[type="date"]' + _v0 + ',\n    input[type="datetime"]' + _v0 + ',\n    input[type="datetime-local"]' + _v0 + ',\n    input[type="email"]' + _v0 + ',\n    input[type="month"]' + _v0 + ',\n    input[type="number"]' + _v0 + ',\n    input[type="password"]' + _v0 + ',\n    input[type="search"]' + _v0 + ',\n    input[type="tel"]' + _v0 + ',\n    input[type="text"]' + _v0 + ',\n    input[type="time"]' + _v0 + ',\n    input[type="url"]' + _v0 + ',\n    input[type="week"]' + _v0 + ",\n    input:not([type])" + _v0 + ",\n    textarea" + _v0;
  }
  _v0.s(["adjustHue", 0, _v65, "animation", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    var _v3 = Array.isArray(_v1[0]);
    if (!_v3 && _v1.length > 8) throw new _v10(64);
    return {
      animation: _v1.map(function (_v0) {
        if (_v3 && !Array.isArray(_v0) || !_v3 && Array.isArray(_v0)) throw new _v10(65);
        if (Array.isArray(_v0) && _v0.length > 8) throw new _v10(66);
        return Array.isArray(_v0) ? _v0.join(" ") : _v0;
      }).join(", ")
    };
  }, "backgroundImages", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return {
      backgroundImage: _v1.join(", ")
    };
  }, "backgrounds", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return {
      background: _v1.join(", ")
    };
  }, "between", 0, _v31, "border", 0, function (_v0) {
    for (var _v1, _v2 = arguments.length, _v3 = Array(_v2 > 1 ? _v2 - 1 : 0), _v4 = 1; _v4 < _v2; _v4++) _v3[_v4 - 1] = arguments[_v4];
    return "string" == typeof _v0 && _v83.indexOf(_v0) >= 0 ? ((_v1 = {})["border" + _v15(_v0) + "Width"] = _v3[0], _v1["border" + _v15(_v0) + "Style"] = _v3[1], _v1["border" + _v15(_v0) + "Color"] = _v3[2], _v1) : (_v3.unshift(_v0), {
      borderWidth: _v3[0],
      borderStyle: _v3[1],
      borderColor: _v3[2]
    });
  }, "borderColor", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return _v17.apply(void 0, ["borderColor"].concat(_v1));
  }, "borderRadius", 0, function (_v0, _v1) {
    var _v2,
      _v3,
      _v4 = _v15(_v0);
    if (!_v1 && 0 !== _v1) throw new _v10(62);
    if ("Top" === _v4 || "Bottom" === _v4) return (_v2 = {})["border" + _v4 + "RightRadius"] = _v1, _v2["border" + _v4 + "LeftRadius"] = _v1, _v2;
    if ("Left" === _v4 || "Right" === _v4) return (_v3 = {})["borderTop" + _v4 + "Radius"] = _v1, _v3["borderBottom" + _v4 + "Radius"] = _v1, _v3;
    throw new _v10(63);
  }, "borderStyle", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return _v17.apply(void 0, ["borderStyle"].concat(_v1));
  }, "borderWidth", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return _v17.apply(void 0, ["borderWidth"].concat(_v1));
  }, "buttons", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return _v84(_v1, _v86, _v85);
  }, "clearFix", 0, function (_v0) {
    void 0 === _v0 && (_v0 = "&");
    var _v1,
      _v2 = _v0 + "::after";
    return (_v1 = {})[_v2] = {
      clear: "both",
      content: '""',
      display: "table"
    }, _v1;
  }, "complement", 0, function (_v0) {
    if ("transparent" === _v0) return _v0;
    var _v1 = _v54(_v0);
    return _v63((0, _v3.default)({}, _v1, {
      hue: (_v1.hue + 180) % 360
    }));
  }, "cover", 0, function (_v0) {
    return void 0 === _v0 && (_v0 = 0), {
      position: "absolute",
      top: _v0,
      right: _v0,
      bottom: _v0,
      left: _v0
    };
  }, "cssVar", 0, function (_v0, _v1) {
    var _v2;
    if (!_v0 || !_v0.match(_v14)) throw new _v10(73);
    if ("u" > typeof document && null !== document.documentElement && (_v2 = getComputedStyle(document.documentElement).getPropertyValue(_v0)), _v2) return _v2.trim();
    if (_v1) return _v1;
    throw new _v10(74);
  }, "darken", 0, _v67, "desaturate", 0, _v68, "directionalProperty", 0, _v17, "easeIn", 0, function (_v0) {
    return _v28[_v0.toLowerCase().trim()];
  }, "easeInOut", 0, function (_v0) {
    return _v29[_v0.toLowerCase().trim()];
  }, "easeOut", 0, function (_v0) {
    return _v30[_v0.toLowerCase().trim()];
  }, "ellipsis", 0, function (_v0, _v1) {
    void 0 === _v1 && (_v1 = 1);
    var _v2 = {
      display: "inline-block",
      maxWidth: _v0 || "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    };
    return _v1 > 1 ? (0, _v3.default)({}, _v2, {
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: _v1,
      display: "-webkit-box",
      whiteSpace: "normal"
    }) : _v2;
  }, "em", 0, _v22, "fluidRange", 0, function (_v0, _v1, _v2) {
    if (void 0 === _v1 && (_v1 = "320px"), void 0 === _v2 && (_v2 = "1200px"), !Array.isArray(_v0) && "object" != typeof _v0 || null === _v0) throw new _v10(49);
    if (Array.isArray(_v0)) {
      for (var _v3, _v4, _v5, _v6, _v7 = {}, _v8 = {}, _v9 = function (_v0) {
          var _v1 = "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
          if (_v1) return (_v1 = _v1.call(_v0)).next.bind(_v1);
          if (Array.isArray(_v0) || (_v1 = function (_v0) {
            if (_v0) {
              if ("string" == typeof _v0) return _v32(_v0, void 0);
              var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
              if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
              if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v32(_v0, void 0);
            }
          }(_v0))) {
            _v1 && (_v0 = _v1);
            var _v2 = 0;
            return function () {
              return _v2 >= _v0.length ? {
                done: !0
              } : {
                done: !1,
                value: _v0[_v2++]
              };
            };
          }
          throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }(_v0); !(_v6 = _v9()).done;) {
        var _v10,
          _v11,
          _v12 = _v6.value;
        if (!_v12.prop || !_v12.fromSize || !_v12.toSize) throw new _v10(50);
        _v8[_v12.prop] = _v12.fromSize, _v7["@media (min-width: " + _v1 + ")"] = (0, _v3.default)({}, _v7["@media (min-width: " + _v1 + ")"], ((_v10 = {})[_v12.prop] = _v31(_v12.fromSize, _v12.toSize, _v1, _v2), _v10)), _v7["@media (min-width: " + _v2 + ")"] = (0, _v3.default)({}, _v7["@media (min-width: " + _v2 + ")"], ((_v11 = {})[_v12.prop] = _v12.toSize, _v11));
      }
      return (0, _v3.default)({}, _v8, _v7);
    }
    if (!_v0.prop || !_v0.fromSize || !_v0.toSize) throw new _v10(51);
    return (_v5 = {})[_v0.prop] = _v0.fromSize, _v5["@media (min-width: " + _v1 + ")"] = ((_v3 = {})[_v0.prop] = _v31(_v0.fromSize, _v0.toSize, _v1, _v2), _v3), _v5["@media (min-width: " + _v2 + ")"] = ((_v4 = {})[_v0.prop] = _v0.toSize, _v4), _v5;
  }, "fontFace", 0, function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7,
      _v8,
      _v9 = _v0.fontFamily,
      _v10 = _v0.fontFilePath,
      _v11 = _v0.fontStretch,
      _v12 = _v0.fontStyle,
      _v13 = _v0.fontVariant,
      _v14 = _v0.fontWeight,
      _v15 = _v0.fileFormats,
      _v16 = void 0 === _v15 ? ["eot", "woff2", "woff", "ttf", "svg"] : _v15,
      _v17 = _v0.formatHint,
      _v18 = _v0.localFonts,
      _v19 = void 0 === _v18 ? [_v9] : _v18,
      _v20 = _v0.unicodeRange,
      _v21 = _v0.fontDisplay,
      _v22 = _v0.fontVariationSettings,
      _v23 = _v0.fontFeatureSettings;
    if (!_v9) throw new _v10(55);
    if (!_v10 && !_v19) throw new _v10(52);
    if (_v19 && !Array.isArray(_v19)) throw new _v10(53);
    if (!Array.isArray(_v16)) throw new _v10(54);
    return JSON.parse(JSON.stringify({
      "@font-face": {
        fontFamily: _v9,
        src: (_v1 = _v10, _v2 = _v19, _v3 = _v16, _v4 = void 0 !== _v17 && _v17, _v5 = [], _v2 && _v5.push(_v2.map(function (_v0) {
          return 'local("' + _v0 + '")';
        }).join(", ")), _v1 && _v5.push((_v6 = _v1, _v7 = _v3, _v8 = _v4, _v6.replace(/\s+/g, " ").match(_v33) ? 'url("' + _v6 + '")' + _v35(_v7[0], _v8) : _v7.map(function (_v0) {
          return 'url("' + _v6 + "." + _v0 + '")' + _v35(_v0, _v8);
        }).join(", "))), _v5.join(", ")),
        unicodeRange: _v20,
        fontStretch: _v11,
        fontStyle: _v12,
        fontVariant: _v13,
        fontWeight: _v14,
        fontDisplay: _v21,
        fontVariationSettings: _v22,
        fontFeatureSettings: _v23
      }
    }));
  }, "getContrast", 0, _v70, "getLuminance", 0, _v69, "getValueAndUnit", 0, _v24, "grayscale", 0, function (_v0) {
    return "transparent" === _v0 ? _v0 : _v63((0, _v3.default)({}, _v54(_v0), {
      saturation: 0
    }));
  }, "hiDPI", 0, _v36, "hideText", 0, function () {
    return {
      textIndent: "101%",
      overflow: "hidden",
      whiteSpace: "nowrap"
    };
  }, "hideVisually", 0, function () {
    return {
      border: "0",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px"
    };
  }, "hsl", 0, _v59, "hslToColorString", 0, function (_v0) {
    if ("object" == typeof _v0 && "number" == typeof _v0.hue && "number" == typeof _v0.saturation && "number" == typeof _v0.lightness) return _v0.alpha && "number" == typeof _v0.alpha ? _v60({
      hue: _v0.hue,
      saturation: _v0.saturation,
      lightness: _v0.lightness,
      alpha: _v0.alpha
    }) : _v59({
      hue: _v0.hue,
      saturation: _v0.saturation,
      lightness: _v0.lightness
    });
    throw new _v10(45);
  }, "hsla", 0, _v60, "important", 0, function _v0(_v1, _v2) {
    if ("object" != typeof _v1 || null === _v1) throw new _v10(75, typeof _v1);
    var _v3 = {};
    return Object.keys(_v1).forEach(function (_v0) {
      "object" == typeof _v1[_v0] && null !== _v1[_v0] ? _v3[_v0] = _v0(_v1[_v0], _v2) : !_v2 || _v2 && (_v2 === _v0 || _v2.indexOf(_v0) >= 0) ? _v3[_v0] = _v1[_v0] + " !important" : _v3[_v0] = _v1[_v0];
    }), _v3;
  }, "invert", 0, function (_v0) {
    if ("transparent" === _v0) return _v0;
    var _v1 = _v53(_v0);
    return _v63((0, _v3.default)({}, _v1, {
      red: 255 - _v1.red,
      green: 255 - _v1.green,
      blue: 255 - _v1.blue
    }));
  }, "lighten", 0, _v71, "linearGradient", 0, function (_v0) {
    var _v1 = _v0.colorStops,
      _v2 = _v0.fallback,
      _v3 = _v0.toDirection;
    if (!_v1 || _v1.length < 2) throw new _v10(56);
    return {
      backgroundColor: _v2 || _v1[0].replace(/,\s+/g, ",").split(" ")[0].replace(/,(?=\S)/g, ", "),
      backgroundImage: _v37(_v1 || (_v1 = (0, _v7.default)(["linear-gradient(", "", ")"])), void 0 === _v3 ? "" : _v3, _v1.join(", ").replace(/,(?=\S)/g, ", "))
    };
  }, "margin", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return _v17.apply(void 0, ["margin"].concat(_v1));
  }, "math", 0, function (_v0, _v1) {
    var _v2 = _v13(_v0),
      _v3 = _v2.match(_v11);
    if (_v3 && !_v3.every(function (_v0) {
      return _v0 === _v3[0];
    })) throw new _v10(41);
    return "" + function (_v0, _v1) {
      var _v2,
        _v3,
        _v4 = ((_v2 = {}).symbols = _v1 ? (0, _v3.default)({}, _v9, _v1.symbols) : (0, _v3.default)({}, _v9), _v2),
        _v5 = [_v4.symbols["("].prefix],
        _v6 = [],
        _v7 = RegExp("\\d+(?:\\.\\d+)?|" + Object.keys(_v4.symbols).map(function (_v0) {
          return _v4.symbols[_v0];
        }).sort(function (_v0, _v1) {
          return _v1.symbol.length - _v0.symbol.length;
        }).map(function (_v0) {
          return _v0.regSymbol;
        }).join("|") + "|(\\S)", "g");
      _v7.lastIndex = 0;
      var _v8 = !1;
      do {
        var _v9 = (_v3 = _v7.exec(_v0)) || [")", void 0],
          _v10 = _v9[0],
          _v11 = _v9[1],
          _v12 = _v4.symbols[_v10],
          _v13 = _v12 && !_v12.prefix && !_v12.func,
          _v14 = !_v12 || !_v12.postfix && !_v12.infix;
        if (_v11 || (_v8 ? _v14 : _v13)) throw new _v10(37, _v3 ? _v3.index : _v0.length, _v0);
        if (_v8) {
          var _v15 = _v12.postfix || _v12.infix;
          do {
            var _v16 = _v5[_v5.length - 1];
            if ((_v15.precedence - _v16.precedence || _v16.rightToLeft) > 0) break;
          } while (_v12(_v5, _v6));
          _v8 = "postfix" === _v15.notation, ")" !== _v15.symbol && (_v5.push(_v15), _v8 && _v12(_v5, _v6));
        } else if (_v12) {
          if (_v5.push(_v12.prefix || _v12.func), _v12.func && (!(_v3 = _v7.exec(_v0)) || "(" !== _v3[0])) throw new _v10(38, _v3 ? _v3.index : _v0.length, _v0);
        } else _v6.push(+_v10), _v8 = !0;
      } while (_v3 && _v5.length);
      if (_v5.length) throw new _v10(39, _v3 ? _v3.index : _v0.length, _v0);
      if (!_v3) return _v6.pop();
      throw new _v10(40, _v3 ? _v3.index : _v0.length, _v0);
    }(_v13(_v2.replace(_v11, "")), _v1) + (_v3 ? _v13(_v3[0]) : "");
  }, "meetsContrastGuidelines", 0, function (_v0, _v1) {
    var _v2 = _v70(_v0, _v1);
    return {
      AA: _v2 >= 4.5,
      AALarge: _v2 >= 3,
      AAA: _v2 >= 7,
      AAALarge: _v2 >= 4.5
    };
  }, "mix", 0, _v72, "modularScale", 0, function (_v0, _v1, _v2) {
    if (void 0 === _v1 && (_v1 = "1em"), void 0 === _v2 && (_v2 = 1.333), "number" != typeof _v0) throw new _v10(42);
    if ("string" == typeof _v2 && !_v25[_v2]) throw new _v10(43);
    var _v3 = "string" == typeof _v1 ? _v24(_v1) : [_v1, ""],
      _v4 = _v3[0],
      _v5 = _v3[1],
      _v6 = "string" == typeof _v2 ? _v25[_v2] : _v2;
    if ("string" == typeof _v4) throw new _v10(44, _v1);
    return "" + _v4 * Math.pow(_v6, _v0) + (_v5 || "");
  }, "normalize", 0, function () {
    var _v0;
    return [((_v0 = {
      html: {
        lineHeight: "1.15",
        textSizeAdjust: "100%"
      },
      body: {
        margin: "0"
      },
      main: {
        display: "block"
      },
      h1: {
        fontSize: "2em",
        margin: "0.67em 0"
      },
      hr: {
        boxSizing: "content-box",
        height: "0",
        overflow: "visible"
      },
      pre: {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
      },
      a: {
        backgroundColor: "transparent"
      },
      "abbr[title]": {
        borderBottom: "none",
        textDecoration: "underline"
      }
    })["b,\n    strong"] = {
      fontWeight: "bolder"
    }, _v0["code,\n    kbd,\n    samp"] = {
      fontFamily: "monospace, monospace",
      fontSize: "1em"
    }, _v0.small = {
      fontSize: "80%"
    }, _v0["sub,\n    sup"] = {
      fontSize: "75%",
      lineHeight: "0",
      position: "relative",
      verticalAlign: "baseline"
    }, _v0.sub = {
      bottom: "-0.25em"
    }, _v0.sup = {
      top: "-0.5em"
    }, _v0.img = {
      borderStyle: "none"
    }, _v0["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
      fontFamily: "inherit",
      fontSize: "100%",
      lineHeight: "1.15",
      margin: "0"
    }, _v0["button,\n    input"] = {
      overflow: "visible"
    }, _v0["button,\n    select"] = {
      textTransform: "none"
    }, _v0['button,\n    html [type="button"],\n    [type="reset"],\n    [type="submit"]'] = {
      WebkitAppearance: "button"
    }, _v0['button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner'] = {
      borderStyle: "none",
      padding: "0"
    }, _v0['button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring'] = {
      outline: "1px dotted ButtonText"
    }, _v0.fieldset = {
      padding: "0.35em 0.625em 0.75em"
    }, _v0.legend = {
      boxSizing: "border-box",
      color: "inherit",
      display: "table",
      maxWidth: "100%",
      padding: "0",
      whiteSpace: "normal"
    }, _v0.progress = {
      verticalAlign: "baseline"
    }, _v0.textarea = {
      overflow: "auto"
    }, _v0['[type="checkbox"],\n    [type="radio"]'] = {
      boxSizing: "border-box",
      padding: "0"
    }, _v0['[type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button'] = {
      height: "auto"
    }, _v0['[type="search"]'] = {
      WebkitAppearance: "textfield",
      outlineOffset: "-2px"
    }, _v0['[type="search"]::-webkit-search-decoration'] = {
      WebkitAppearance: "none"
    }, _v0["::-webkit-file-upload-button"] = {
      WebkitAppearance: "button",
      font: "inherit"
    }, _v0.details = {
      display: "block"
    }, _v0.summary = {
      display: "list-item"
    }, _v0.template = {
      display: "none"
    }, _v0["[hidden]"] = {
      display: "none"
    }, _v0), {
      "abbr[title]": {
        textDecoration: "underline dotted"
      }
    }];
  }, "opacify", 0, _v73, "padding", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return _v17.apply(void 0, ["padding"].concat(_v1));
  }, "parseToHsl", 0, _v54, "parseToRgb", 0, _v53, "position", 0, function (_v0) {
    for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
    return _v87.indexOf(_v0) >= 0 && _v0 ? (0, _v3.default)({}, _v17.apply(void 0, [""].concat(_v2)), {
      position: _v0
    }) : _v17.apply(void 0, ["", _v0].concat(_v2));
  }, "radialGradient", 0, function (_v0) {
    var _v1 = _v0.colorStops,
      _v2 = _v0.extent,
      _v3 = _v0.fallback,
      _v4 = _v0.position,
      _v5 = _v0.shape;
    if (!_v1 || _v1.length < 2) throw new _v10(57);
    return {
      backgroundColor: _v3 || _v1[0].split(" ")[0],
      backgroundImage: _v37(_v2 || (_v2 = (0, _v7.default)(["radial-gradient(", "", "", "", ")"])), void 0 === _v4 ? "" : _v4, void 0 === _v5 ? "" : _v5, void 0 === _v2 ? "" : _v2, _v1.join(", "))
    };
  }, "readableColor", 0, function (_v0, _v1, _v2, _v3) {
    void 0 === _v1 && (_v1 = _v74), void 0 === _v2 && (_v2 = _v75), void 0 === _v3 && (_v3 = !0);
    var _v4 = _v69(_v0) > .179,
      _v5 = _v4 ? _v1 : _v2;
    return !_v3 || _v70(_v0, _v5) >= 4.5 ? _v5 : _v4 ? _v74 : _v75;
  }, "rem", 0, _v26, "remToPx", 0, function (_v0, _v1) {
    var _v2 = _v24(_v0);
    if ("rem" !== _v2[1] && "" !== _v2[1]) throw new _v10(77, _v2[1]);
    var _v3 = _v1 ? _v27(_v1) : function () {
      if ("u" > typeof document && null !== document.documentElement) {
        var _v0 = getComputedStyle(document.documentElement).fontSize;
        return _v0 ? _v27(_v0) : 16;
      }
      return 16;
    }();
    return _v2[0] * _v3 + "px";
  }, "retinaImage", 0, function (_v0, _v1, _v2, _v3, _v4) {
    if (void 0 === _v2 && (_v2 = "png"), void 0 === _v4 && (_v4 = "_2x"), !_v0) throw new _v10(58);
    var _v5,
      _v6 = _v2.replace(/^\./, ""),
      _v7 = _v3 ? _v3 + "." + _v6 : "" + _v0 + _v4 + "." + _v6;
    return (_v5 = {
      backgroundImage: "url(" + _v0 + "." + _v6 + ")"
    })[_v36()] = (0, _v3.default)({
      backgroundImage: "url(" + _v7 + ")"
    }, _v1 ? {
      backgroundSize: _v1
    } : {}), _v5;
  }, "rgb", 0, _v61, "rgbToColorString", 0, function (_v0) {
    if ("object" == typeof _v0 && "number" == typeof _v0.red && "number" == typeof _v0.green && "number" == typeof _v0.blue) return "number" == typeof _v0.alpha ? _v62({
      red: _v0.red,
      green: _v0.green,
      blue: _v0.blue,
      alpha: _v0.alpha
    }) : _v61({
      red: _v0.red,
      green: _v0.green,
      blue: _v0.blue
    });
    throw new _v10(46);
  }, "rgba", 0, _v62, "saturate", 0, _v76, "setHue", 0, _v77, "setLightness", 0, _v78, "setSaturation", 0, _v79, "shade", 0, _v80, "size", 0, function (_v0, _v1) {
    return void 0 === _v1 && (_v1 = _v0), {
      height: _v0,
      width: _v1
    };
  }, "stripUnit", 0, _v20, "textInputs", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return _v84(_v1, _v89, _v88);
  }, "timingFunctions", 0, function (_v0) {
    return _v38[_v0];
  }, "tint", 0, _v81, "toColorString", 0, _v63, "transitions", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    if (!Array.isArray(_v1[0]) || 2 !== _v1.length) return {
      transition: _v1.join(", ")
    };
    var _v3 = _v1[1];
    if ("string" != typeof _v3) throw new _v10(61);
    return {
      transition: _v1[0].map(function (_v0) {
        return _v0 + " " + _v3;
      }).join(", ")
    };
  }, "transparentize", 0, _v82, "triangle", 0, function (_v0) {
    var _v1 = _v0.pointingDirection,
      _v2 = _v0.height,
      _v3 = _v0.width,
      _v4 = _v0.foregroundColor,
      _v5 = _v0.backgroundColor,
      _v6 = _v24(_v3),
      _v7 = _v24(_v2);
    if (isNaN(_v7[0]) || isNaN(_v6[0])) throw new _v10(60);
    return (0, _v3.default)({
      width: "0",
      height: "0",
      borderColor: void 0 === _v5 ? "transparent" : _v5
    }, _v40(_v1, _v4), {
      borderStyle: "solid",
      borderWidth: _v39(_v1, _v7, _v6)
    });
  }, "wordWrap", 0, function (_v0) {
    void 0 === _v0 && (_v0 = "break-word");
    var _v1 = "break-word" === _v0 ? "break-all" : _v0;
    return {
      overflowWrap: _v0,
      wordWrap: _v0,
      wordBreak: _v1
    };
  }]);
}