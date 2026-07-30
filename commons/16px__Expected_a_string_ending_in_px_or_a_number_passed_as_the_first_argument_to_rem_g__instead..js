{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  function _v13(_v0, _v1) {
    return _v0.substr(-_v1.length) === _v1;
  }
  function _v14(_v0) {
    var _v1 = parseFloat(_v0);
    return isNaN(_v1) ? _v0 : _v1;
  }
  var _v15 = function (_v0) {
      var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "16px",
        _v2 = _v0,
        _v3 = _v1;
      if ("string" == typeof _v0) {
        if (!_v13(_v0, "px")) throw Error('Expected a string ending in "px" or a number passed as the first argument to rem(), got "' + _v0 + '" instead.');
        _v2 = _v14(_v0);
      }
      if ("string" == typeof _v1) {
        if (!_v13(_v1, "px")) throw Error('Expected a string ending in "px" or a number passed as the second argument to rem(), got "' + _v1 + '" instead.');
        _v3 = _v14(_v1);
      }
      if ("string" == typeof _v2) throw Error('Passed invalid pixel value ("' + _v0 + '") to rem(), please pass a value like "12px" or 12.');
      if ("string" == typeof _v3) throw Error('Passed invalid base value ("' + _v1 + '") to rem(), please pass a value like "12px" or 12.');
      return "" + _v2 / _v3 + "rem";
    },
    _v16 = Object.assign || function (_v0) {
      for (var _v1 = 1; _v1 < arguments.length; _v1++) {
        var _v2 = arguments[_v1];
        for (var _v3 in _v2) Object.prototype.hasOwnProperty.call(_v2, _v3) && (_v0[_v3] = _v2[_v3]);
      }
      return _v0;
    };
  function _v17(_v0) {
    return Math.round(255 * _v0);
  }
  function _v18(_v0, _v1, _v2) {
    return _v17(_v0) + "," + _v17(_v1) + "," + _v17(_v2);
  }
  function _v19(_v0, _v1, _v2) {
    var _v3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _v18;
    if (0 === _v1) return _v3(_v2, _v2, _v2);
    var _v4 = _v0 % 360 / 60,
      _v5 = (1 - Math.abs(2 * _v2 - 1)) * _v1,
      _v6 = _v5 * (1 - Math.abs(_v4 % 2 - 1)),
      _v7 = 0,
      _v8 = 0,
      _v9 = 0;
    _v4 >= 0 && _v4 < 1 ? (_v7 = _v5, _v8 = _v6) : _v4 >= 1 && _v4 < 2 ? (_v7 = _v6, _v8 = _v5) : _v4 >= 2 && _v4 < 3 ? (_v8 = _v5, _v9 = _v6) : _v4 >= 3 && _v4 < 4 ? (_v8 = _v6, _v9 = _v5) : _v4 >= 4 && _v4 < 5 ? (_v7 = _v6, _v9 = _v5) : _v4 >= 5 && _v4 < 6 && (_v7 = _v5, _v9 = _v6);
    var _v10 = _v2 - _v5 / 2;
    return _v3(_v7 + _v10, _v8 + _v10, _v9 + _v10);
  }
  (_v4 = {
    html: {
      fontFamily: "sans-serif"
    },
    body: {
      margin: "0"
    }
  })["a:active,\n  a:hover"] = {
    outlineWidth: "0"
  }, _v4["button,\n  input,\n  optgroup,\n  select,\n  textarea"] = {
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15"
  }, (_v6 = {
    html: {
      lineHeight: "1.15",
      textSizeAdjust: "100%"
    }
  })["article,\n  aside,\n  footer,\n  header,\n  nav,\n  section"] = {
    display: "block"
  }, _v6.h1 = {
    fontSize: "2em",
    margin: "0.67em 0"
  }, _v6["figcaption,\n  figure,\n  main"] = {
    display: "block"
  }, _v6.figure = {
    margin: "1em 40px"
  }, _v6.hr = {
    boxSizing: "content-box",
    height: "0",
    overflow: "visible"
  }, _v6.pre = {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  }, _v6.a = {
    "background-color": "transparent",
    "-webkit-text-decoration-skip": "objects"
  }, _v6["abbr[title]"] = ((_v5 = {
    borderBottom: "none",
    textDecoration: "underline"
  }).textDecoration = "underline dotted", _v5), _v6["b,\n  strong"] = {
    fontWeight: "inherit"
  }, _v6["code,\n  kbd,\n  samp"] = {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  }, _v6.dfn = {
    fontStyle: "italic"
  }, _v6.mark = {
    backgroundColor: "#ff0",
    color: "#000"
  }, _v6.small = {
    fontSize: "80%"
  }, _v6["sub,\n  sup"] = {
    fontSize: "75%",
    lineHeight: "0",
    position: "relative",
    verticalAlign: "baseline"
  }, _v6.sub = {
    bottom: "-0.25em"
  }, _v6.sup = {
    top: "-0.5em"
  }, _v6["audio,\n  video"] = {
    display: "inline-block"
  }, _v6["audio:not([controls])"] = {
    display: "none",
    height: "0"
  }, _v6.img = {
    borderStyle: "none"
  }, _v6["svg:not(:root)"] = {
    overflow: "hidden"
  }, _v6["button,\n  input,\n  optgroup,\n  select,\n  textarea"] = {
    margin: "0"
  }, _v6["button,\n  input"] = {
    overflow: "visible"
  }, _v6["button,\n  select"] = {
    textTransform: "none"
  }, _v6['button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"]'] = {
    "-webkit-appearance": "button"
  }, _v6['button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner'] = {
    borderStyle: "none",
    padding: "0"
  }, _v6['button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring'] = {
    outline: "1px dotted ButtonText"
  }, _v6.fieldset = {
    border: "1px solid #c0c0c0",
    margin: "0 2px",
    padding: "0.35em 0.625em 0.75em"
  }, _v6.legend = {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: "0",
    whiteSpace: "normal"
  }, _v6.progress = {
    display: "inline-block",
    verticalAlign: "baseline"
  }, _v6.textarea = {
    overflow: "auto"
  }, _v6['[type="checkbox"],\n  [type="radio"]'] = {
    boxSizing: "border-box",
    padding: "0"
  }, _v6['[type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button'] = {
    height: "auto"
  }, _v6['[type="search"]'] = {
    "-webkit-appearance": "textfield",
    outlineOffset: "-2px"
  }, _v6['[type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration'] = {
    "-webkit-appearance": "none"
  }, _v6["::-webkit-file-upload-button"] = {
    "-webkit-appearance": "button",
    font: "inherit"
  }, _v6["details,\n  menu"] = {
    display: "block"
  }, _v6.summary = {
    display: "list-item"
  }, _v6.canvas = {
    display: "inline-block"
  }, _v6.template = {
    display: "none"
  }, _v6["[hidden]"] = {
    display: "none"
  };
  var _v20 = {
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
    _v21 = /^#[a-fA-F0-9]{6}$/,
    _v22 = /^#[a-fA-F0-9]{3}$/,
    _v23 = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
    _v24 = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,
    _v25 = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,
    _v26 = /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
  function _v27(_v0) {
    if ("string" != typeof _v0) throw Error("Passed an incorrect argument to a color function, please pass a string representation of a color.");
    var _v1 = function (_v0) {
      if ("string" != typeof _v0) return _v0;
      var _v1 = _v0.toLowerCase();
      return _v20[_v1] ? "#" + _v20[_v1] : _v0;
    }(_v0);
    if (_v1.match(_v21)) return {
      red: parseInt("" + _v1[1] + _v1[2], 16),
      green: parseInt("" + _v1[3] + _v1[4], 16),
      blue: parseInt("" + _v1[5] + _v1[6], 16)
    };
    if (_v1.match(_v22)) return {
      red: parseInt("" + _v1[1] + _v1[1], 16),
      green: parseInt("" + _v1[2] + _v1[2], 16),
      blue: parseInt("" + _v1[3] + _v1[3], 16)
    };
    var _v2 = _v23.exec(_v1);
    if (_v2) return {
      red: parseInt("" + _v2[1], 10),
      green: parseInt("" + _v2[2], 10),
      blue: parseInt("" + _v2[3], 10)
    };
    var _v3 = _v24.exec(_v1);
    if (_v3) return {
      red: parseInt("" + _v3[1], 10),
      green: parseInt("" + _v3[2], 10),
      blue: parseInt("" + _v3[3], 10),
      alpha: parseFloat("" + _v3[4])
    };
    var _v4 = _v25.exec(_v1);
    if (_v4) {
      var _v5 = "rgb(" + _v19(parseInt("" + _v4[1], 10), parseInt("" + _v4[2], 10) / 100, parseInt("" + _v4[3], 10) / 100) + ")",
        _v6 = _v23.exec(_v5);
      return {
        red: parseInt("" + _v6[1], 10),
        green: parseInt("" + _v6[2], 10),
        blue: parseInt("" + _v6[3], 10)
      };
    }
    var _v7 = _v26.exec(_v1);
    if (_v7) {
      var _v8 = "rgb(" + _v19(parseInt("" + _v7[1], 10), parseInt("" + _v7[2], 10) / 100, parseInt("" + _v7[3], 10) / 100) + ")",
        _v9 = _v23.exec(_v8);
      return {
        red: parseInt("" + _v9[1], 10),
        green: parseInt("" + _v9[2], 10),
        blue: parseInt("" + _v9[3], 10),
        alpha: parseFloat("" + _v7[4])
      };
    }
    throw Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.");
  }
  var _v28 = function (_v0) {
    return 7 === _v0.length && _v0[1] === _v0[2] && _v0[3] === _v0[4] && _v0[5] === _v0[6] ? "#" + _v0[1] + _v0[3] + _v0[5] : _v0;
  };
  function _v29(_v0) {
    var _v1 = _v0.toString(16);
    return 1 === _v1.length ? "0" + _v1 : _v1;
  }
  function _v30(_v0, _v1, _v2) {
    if ("number" == typeof _v0 && "number" == typeof _v1 && "number" == typeof _v2) return _v28("#" + _v29(_v0) + _v29(_v1) + _v29(_v2));
    if ("object" == typeof _v0 && void 0 === _v1 && void 0 === _v2) return _v28("#" + _v29(_v0.red) + _v29(_v0.green) + _v29(_v0.blue));
    throw Error("Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).");
  }
  function _v31(_v0, _v1, _v2, _v3) {
    if ("string" == typeof _v0 && "number" == typeof _v1) {
      var _v4 = _v27(_v0);
      return "rgba(" + _v4.red + "," + _v4.green + "," + _v4.blue + "," + _v1 + ")";
    }
    if ("number" == typeof _v0 && "number" == typeof _v1 && "number" == typeof _v2 && "number" == typeof _v3) return _v3 >= 1 ? _v30(_v0, _v1, _v2) : "rgba(" + _v0 + "," + _v1 + "," + _v2 + "," + _v3 + ")";
    if ("object" == typeof _v0 && void 0 === _v1 && void 0 === _v2 && void 0 === _v3) return _v0.alpha >= 1 ? _v30(_v0.red, _v0.green, _v0.blue) : "rgba(" + _v0.red + "," + _v0.green + "," + _v0.blue + "," + _v0.alpha + ")";
    throw Error("Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).");
  }
  (function _v0(_v1, _v2, _v3) {
    return function () {
      var _v0 = _v3.concat(Array.prototype.slice.call(arguments));
      return _v0.length >= _v2 ? _v1.apply(this, _v0) : _v0(_v1, _v2, _v0);
    };
  })(_v1 = function () {
    var _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
      _v1 = arguments[1],
      _v2 = arguments[2],
      _v3 = _v27(_v1),
      _v4 = _v16({}, _v3, {
        alpha: "number" == typeof _v3.alpha ? _v3.alpha : 1
      }),
      _v5 = _v27(_v2),
      _v6 = _v16({}, _v5, {
        alpha: "number" == typeof _v5.alpha ? _v5.alpha : 1
      }),
      _v7 = _v4.alpha - _v6.alpha,
      _v8 = 2 * _v0 - 1,
      _v9 = ((_v8 * _v7 == -1 ? _v8 : _v8 + _v7) / (1 + _v8 * _v7) + 1) / 2,
      _v10 = 1 - _v9;
    return _v31({
      red: Math.floor(_v4.red * _v9 + _v6.red * _v10),
      green: Math.floor(_v4.green * _v9 + _v6.green * _v10),
      blue: Math.floor(_v4.blue * _v9 + _v6.blue * _v10),
      alpha: _v4.alpha + (_v6.alpha - _v4.alpha) * (_v0 / 1)
    });
  }, _v1.length, []);
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = ((_v2 = {}).Facebook = "facebook", _v2.Youtube = "youtube", _v2.Twitter = "twitter", _v2.Linkedin = "linkedin", _v2.Shopify = "shopify", _v2.Pinterest = "pinterest", _v2.Dropbox = "dropbox", _v2.Tumblr = "tumblr", _v2),
    _v39 = _v0.i(0);
  let _v40 = /\+/g;
  class _v41 {
    dict = Object.create(null);
    constructor(_v0) {
      let _v1, _v2, _v3;
      if (!_v0) return;
      if ("string" == typeof _v0) {
        "?" === _v0.charAt(0) && (_v0 = _v0.slice(1)), _v3 = _v0.split("&");
        for (let _v0 = 0; _v0 < _v3.length; _v0++) -1 < (_v1 = (_v2 = _v3[_v0]).indexOf("=")) ? this.appendTo(this.dict, this.decode(_v2.slice(0, _v1)), this.decode(_v2.slice(_v1 + 1))) : _v2.length && this.appendTo(this.dict, this.decode(_v2), "");
      }
    }
    decode = _v0 => decodeURIComponent(_v0).replace(_v40, " ");
    appendTo = (_v0, _v1, _v2) => {
      _v1 in _v0 ? _v0[_v1].push(_v2) : _v0[_v1] = [_v2];
    };
    get = _v0 => _v0 in this.dict ? this.dict[_v0][0] : null;
  }
  function _v42({
    height: _v0 = .7 * window.innerHeight,
    width: _v1 = .6 * window.innerWidth,
    network: _v2 = _v38.Facebook,
    onClose: _v3,
    children: _v4,
    shopName: _v5,
    user: _v6,
    oAuthUrl: _v7
  }) {
    let _v8,
      _v9 = (0, _v8.useRef)(!1),
      _v10 = window.screenX + (window.outerWidth - _v1) / 2,
      _v11 = window.screenY + (window.outerHeight - _v0) / 2.5,
      _v12 = _v7 || `/settings/apps?service=${_v2}&action=connect&post_connect=/settings/apps/post_connect${_v2 === _v38.Shopify ? `&shop=${_v5}` : ""}`,
      _v13 = 0,
      _v14 = 0,
      _v15 = "",
      _v16 = () => {
        if (_v8) try {
          let _v0 = new _v41(_v8.location.search),
            _v1 = _v0.get("new_connection"),
            _v2 = _v0.get("error_code") || "",
            _v3 = _v0.get("error_message") || "";
          (_v1 || _v2 || _v3) && _v17(!!_v1, {
            code: _v2,
            message: _v3
          });
          return;
        } catch (_v0) {} finally {
          _v8.closed && !_v9.current && _v17(), _v9.current = !1;
        }
      },
      _v17 = (_v0 = !1, _v1) => {
        _v9.current = !0, _v18(), _v3 && _v3(_v0, _v1), _v8 && !_v8.closed && _v8.close();
      },
      _v18 = () => {
        clearInterval(_v13), clearTimeout(_v14);
      };
    return (0, _v7.jsx)("div", {
      onClick: _v0 => {
        if (_v0.preventDefault(), _v2 === _v38.Shopify && !_v5) return void console.error("Shop Name is mandatory for Shopify");
        _v39.BigPictureClient.sendEvent(new _v39.Event("distribution.click_to_open_window_from_oauth_connect", 1, {
          network: _v2,
          product: "Distribution",
          path: window.location.pathname,
          cuid: _v6?.id ?? null,
          shop_name: _v5 ?? null
        }));
        let _v1 = `height=${_v0},width=${_v1},left=${_v10},top=${_v11}, toolbar=no, menubar=no, scrolling=yes, scrollbars=yes,resizable=yes`;
        !_v8 || _v8 && _v8.closed ? _v8 = window.open(_v12, "_target", _v1) : _v15 !== _v12 ? (_v8 = window.open(_v12, "_target", _v1)) && _v8.focus() : null !== _v8 && _v8.focus(), _v15 = _v12, _v18(), _v14 = setTimeout(_v17, 0), _v13 = setInterval(_v16, 500);
      },
      children: _v4
    });
  }
  let _v43 = /^[a-z,A-Z,0-9,\-,_]+\.myshopify\.com$/,
    _v44 = ".myshopify.com";
  function _v45({
    shops: _v0,
    isShowing: _v1,
    onClose: _v2,
    callback: _v3,
    user: _v4,
    ..._v5
  }) {
    let [_v6, _v7] = (0, _v8.useState)(""),
      [_v8, _v9] = (0, _v8.useState)(""),
      [_v10, _v11] = (0, _v8.useState)("");
    (0, _v8.useEffect)(() => {
      _v9(""), _v7(""), _v11("");
    }, [_v1]);
    let _v12 = !!(_v6 || !_v8);
    return (0, _v7.jsx)(_v32.Modal, {
      isShowing: _v1,
      onDismiss: () => {
        _v2();
      },
      className: "connect_store_modal",
      modalLabelId: "connectStore",
      modalCloseLabel: "connectStoreClose",
      modalDescriptionId: "connectStoreDescription",
      firstFocusSelector: "",
      dismissButtonFormat: "dark",
      size: "fluid",
      children: (0, _v7.jsx)(_v46, {
        children: (0, _v7.jsxs)(_v47, {
          children: [(0, _v7.jsx)(_v33.Shopify, {
            position: "relative",
            zIndex: "2",
            width: _v15(70),
            height: _v15(80)
          }), (0, _v7.jsx)(_v49, {
            children: (0, _v34.translate)({
              singular: "Connect to Shopify",
              dictionary: {
                es: {
                  singular: "Conéctate a Shopify"
                },
                "de-DE": {
                  singular: "Mit Shopify verbinden"
                },
                "fr-FR": {
                  singular: "Connexion à Shopify"
                },
                "ja-JP": {
                  singular: "Shopify に接続する"
                },
                "ko-KR": {
                  singular: "Shopify에 연결"
                },
                "pt-BR": {
                  singular: "Conectar ao Shopify"
                },
                "zh-CN": {
                  singular: "与 Shopify 关联"
                }
              }
            })
          }), (0, _v7.jsx)(_v50, {
            children: (0, _v34.translate)({
              singular: "To add videos to your product pages, connect to your Shopify stores.",
              dictionary: {
                es: {
                  singular: "Para agregar videos a tus páginas de productos, conéctate a tus tiendas de Shopify."
                },
                "de-DE": {
                  singular: "Verbinde deine Shopify-Shops, um Videos zu deinen Produktseiten hinzuzufügen."
                },
                "fr-FR": {
                  singular: "Pour ajouter des vidéos sur vos pages de produits, connectez-vous à vos boutiques Shopify."
                },
                "ja-JP": {
                  singular: "商品ページに動画を追加するには、Shopifyストアに接続してください。"
                },
                "ko-KR": {
                  singular: "상품 페이지에 동영상을 추가하려면 Shopify 스토어에 연결하세요."
                },
                "pt-BR": {
                  singular: "Para adicionar vídeos às páginas de seus produtos, conecte-se às suas lojas do Shopify."
                },
                "zh-CN": {
                  singular: "要将视频添加到您的产品页面，请关联您的 Shopify 商店。"
                }
              }
            })
          }), (0, _v7.jsxs)(_v54, {
            children: [(0, _v7.jsxs)(_v48, {
              children: [(0, _v7.jsx)(_v52, {
                rightPadding: _v10 !== _v8 ? 120 : 12,
                type: "text",
                placeholder: "store.myshopify.com",
                value: _v8,
                onChange: _v0 => {
                  let _v1 = _v0.target.value;
                  if (_v1.length < 200) {
                    let _v0 = _v1.endsWith(_v44) ? _v1 : _v1 + _v44,
                      _v1 = _v0 && _v0.find(_v0 => 1 === _v0.status && _v0.domain === _v0),
                      _v2 = "";
                    _v43.test(_v0) ? _v1 && (_v2 = (0, _v34.translate)({
                      singular: "The store URL already exists.",
                      dictionary: {
                        es: {
                          singular: "La URL de la tienda ya existe."
                        },
                        "de-DE": {
                          singular: "Die Shop-URL ist bereits vorhanden."
                        },
                        "fr-FR": {
                          singular: "L'URL de boutique existe déjà."
                        },
                        "ja-JP": {
                          singular: "ショップURLは既に存在します。"
                        },
                        "ko-KR": {
                          singular: "이미 존재하는 스토어 URL입니다."
                        },
                        "pt-BR": {
                          singular: "O URL da loja já existe."
                        },
                        "zh-CN": {
                          singular: "商店 URL 已经存在。"
                        }
                      }
                    })) : _v2 = (0, _v34.translate)({
                      singular: "Please enter a valid store URL.",
                      dictionary: {
                        es: {
                          singular: "Introduce una URL de tienda válida."
                        },
                        "de-DE": {
                          singular: "Bitte gib eine gültige Shop-URL an."
                        },
                        "fr-FR": {
                          singular: "Veuillez saisir une URL de boutique valide."
                        },
                        "ja-JP": {
                          singular: "有効なストアURLを入力してください。"
                        },
                        "ko-KR": {
                          singular: "유효한 스토어 URL을 입력하세요."
                        },
                        "pt-BR": {
                          singular: "Por favor, insira um URL da loja válido."
                        },
                        "zh-CN": {
                          singular: "请输入有效的商店 URL。"
                        }
                      }
                    }), _v9(_v1), _v7(_v2), _v11(_v0);
                  }
                }
              }), _v8 && _v10 !== _v8 && (0, _v7.jsx)(_v53, {
                children: _v44
              })]
            }), _v6 && _v8 && (0, _v7.jsx)(_v55, {
              children: _v6
            }), (0, _v7.jsx)(_v42, {
              ..._v5,
              network: _v38.Shopify,
              shopName: _v10,
              onClose: _v3,
              user: _v4,
              children: (0, _v7.jsx)(_v56, {
                format: _v12 ? "secondary" : "primary",
                disabled: _v12,
                children: (0, _v34.translate)({
                  singular: "Connect",
                  dictionary: {
                    es: {
                      singular: "Conectar"
                    },
                    "de-DE": {
                      singular: "Verbinden"
                    },
                    "fr-FR": {
                      singular: "Connecter"
                    },
                    "ja-JP": {
                      singular: "接続"
                    },
                    "ko-KR": {
                      singular: "연결"
                    },
                    "pt-BR": {
                      singular: "Conectar"
                    },
                    "zh-CN": {
                      singular: "关联"
                    }
                  }
                })
              })
            }), (0, _v7.jsx)(_v57, {
              children: (0, _v34.translate)({
                singular: "Haven’t created a store yet? Learn more at {LINK}shopify.com{/LINK}",
                replacements: {
                  LINK: _v0 => (0, _v7.jsx)(_v58, {
                    href: "https://www.shopify.com/",
                    target: "_blank",
                    rel: "nofollow noopener noreferrer",
                    children: _v0
                  }, _v0)
                },
                dictionary: {
                  es: {
                    singular: "¿Aún no creaste una tienda? Obtén más información en {LINK}shopify.com{/LINK}"
                  },
                  "de-DE": {
                    singular: "Du hast noch keinen Shop erstellt? Unter {LINK}shopify.com{/LINK} kannst du mehr erfahren."
                  },
                  "fr-FR": {
                    singular: "Vous n'avez pas encore de boutique ? Accédez à {LINK}shopify.fr{/LINK} pour en savoir plus."
                  },
                  "ja-JP": {
                    singular: "まだストアを作成していませんか？詳しくは {LINK}shopify.com{/LINK} をご覧ください"
                  },
                  "ko-KR": {
                    singular: "아직 생성한 스토어가 없으신가요? {LINK}shopify.com{/LINK}에서 자세히 확인하세요"
                  },
                  "pt-BR": {
                    singular: "Ainda não criou uma loja? Saiba mais em {LINK}shopify.com{/LINK}"
                  },
                  "zh-CN": {
                    singular: "还没有创建商店？请访问 {LINK}shopify.com{/LINK} 了解更多信息"
                  }
                }
              })
            })]
          })]
        })
      })
    });
  }
  _v10.default.div.withConfig({
    displayName: "ShopifyConnectModal__ModalHeader",
    componentId: "sc-c884703f-0"
  })`
  height: ${_v15(10)};
`;
  let _v46 = _v10.default.section.withConfig({
    displayName: "ShopifyConnectModal__Wrapper",
    componentId: "sc-c884703f-1"
  })`
  border-radius: ${_v15(4)};
  padding: ${_v15(40)} 0;
  background: ${({
    theme: _v0
  }) => _v0.content.background};
  position: relative;
  user-select: none;
  width: 100%;
  ${_v37.media.sm`
    height: ${_v15(500)};
    width: ${_v15(500)};
  `}
`;
  (0, _v10.default)(_v36.Button).withConfig({
    displayName: "ShopifyConnectModal__DismissButton",
    componentId: "sc-c884703f-2"
  })`
  position: absolute;
  top: ${_v15(16)};
  right: ${_v15(16)};
`;
  let _v47 = _v10.default.div.withConfig({
      displayName: "ShopifyConnectModal__Container",
      componentId: "sc-c884703f-3"
    })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`,
    _v48 = _v10.default.div.withConfig({
      displayName: "ShopifyConnectModal__InputWrapper",
      componentId: "sc-c884703f-4"
    })`
  position: relative;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
`,
    _v49 = _v10.default.div.withConfig({
      displayName: "ShopifyConnectModal__Title",
      componentId: "sc-c884703f-5"
    })`
  color: ${(0, _v35.slate)(800)};
  font-size: ${_v15(18)};
  font-weight: 500;
  letter-spacing: ${_v15(.2)};
  line-height: ${_v15(24)};
  text-align: center;
  padding-bottom: ${_v15(8)};
`,
    _v50 = _v10.default.div.withConfig({
      displayName: "ShopifyConnectModal__SubTitle",
      componentId: "sc-c884703f-6"
    })`
  color: ${(0, _v35.slate)(500)};
  font-size: ${_v15(14)};
  letter-spacing: 0;
  line-height: ${_v15(18)};
  text-align: center;
  padding: 0 ${_v15(20)};
  ${_v37.media.xmd`
    padding: 0 ${_v15(50)};
  `}
  ${_v37.media.sm`
    padding: 0 ${_v15(80)};
  `}
`,
    _v51 = _v10.css`
  font-size: ${_v15(14)};
  line-height: 1;
`,
    _v52 = _v10.default.input.withConfig({
      displayName: "ShopifyConnectModal__Input",
      componentId: "sc-c884703f-7"
    })`
  ${_v51}
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  color: ${(0, _v35.grayscale)(850)};
  box-sizing: border-box;
  height: ${_v15(50)};
  border: ${_v15(1)} solid ${(0, _v35.slate)(200)};
  border-radius: ${_v15(3)};
  margin: ${_v15(25)} 0 0;
  width: 100%;
  padding: ${_v0 => _v10.css`
    ${_v15(12)} ${_v15(_v0.rightPadding)} ${_v15(12)}  ${_v15(12)}
  `};
  &:focus {
    box-shadow: 0 0 0 ${_v15(1)} ${(0, _v35.blue)(600)};
    border-color: ${(0, _v35.blue)(600)};
    outline-color: ${(0, _v35.blue)(600)};
  }
`,
    _v53 = _v10.default.span.withConfig({
      displayName: "ShopifyConnectModal__LinkPlaceholder",
      componentId: "sc-c884703f-8"
    })`
  ${_v51};
  position: absolute;
  right: ${_v15(10)};
  bottom: ${_v15(18)};
  color: ${(0, _v35.slate)(500)};
`,
    _v54 = _v10.default.div.withConfig({
      displayName: "ShopifyConnectModal__FieldWrapper",
      componentId: "sc-c884703f-9"
    })`
  width: calc(100% - ${_v15(20)});
  margin: 0 ${_v15(10)};
  ${_v37.media.xmd`
    margin: 0 ${_v15(30)};
    width: calc(100% - ${_v15(60)});
  `}
  ${_v37.media.sm`
    margin: 0 ${_v15(50)};
    width: calc(100% - ${_v15(100)});
  `}
`,
    _v55 = _v10.default.div.withConfig({
      displayName: "ShopifyConnectModal__ErrorMsg",
      componentId: "sc-c884703f-10"
    })`
  color: ${(0, _v35.red)(500)};
  font-size: ${_v15(14)};
  letter-spacing: 0;
  line-height: ${_v15(20)};
`,
    _v56 = (0, _v10.default)(_v36.Button).withConfig({
      displayName: "ShopifyConnectModal__CustomButton",
      componentId: "sc-c884703f-11"
    })`
  padding: 0;
  margin-top: ${_v15(17)};
  height: ${_v15(48)};
  width: 100%;
`,
    _v57 = _v10.default.div.withConfig({
      displayName: "ShopifyConnectModal__LearnMore",
      componentId: "sc-c884703f-12"
    })`
  color: ${(0, _v35.slate)(500)};
  font-size: ${_v15(14)};
  line-height: ${_v15(20)};
  margin-top: ${_v15(5)};
  text-align: center;
`,
    _v58 = _v10.default.a.withConfig({
      displayName: "ShopifyConnectModal__Link",
      componentId: "sc-c884703f-13"
    })`
  color: ${(0, _v35.slate)(500)};
  text-decoration: underline;
`;
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = (0, _v10.default)(_v67.default).withConfig({
      displayName: "UnsupportedBrowserErrorModal__ErrorPopup",
      componentId: "sc-1c227b9f-0"
    })`
  width: ${(0, _v62.rem)(520)};
  display: inline-table;
`,
    _v71 = function () {
      let [_v0, _v1] = (0, _v8.useState)(!0);
      return _v0 ? (0, _v7.jsx)(_v70, {
        title: _v66.default.UnsupportedBrowserErrorModalTitle,
        disableXCloseButton: !0,
        content: (0, _v7.jsx)(_v68.ErrorPopupContent, {
          children: (0, _v7.jsx)(_v65.Paragraph, {
            size: "2",
            children: (0, _v7.jsx)("span", {
              children: (0, _v63.translate)({
                singular: "Please {LINK}try{/LINK} with Chrome, Firefox, or Safari.",
                replacements: {
                  LINK: _v0 => (0, _v7.jsx)(_v64.Link, {
                    href: "https://browsehappy.com",
                    target: "_blank",
                    children: _v0
                  }, "upsell-link")
                },
                dictionary: {
                  es: {
                    singular: "{LINK}Prueba{/LINK} con Chrome, Firefox o Safari."
                  },
                  "de-DE": {
                    singular: "Bitte mit Chrome, Firefox oder Safari {LINK}versuchen{/LINK}."
                  },
                  "fr-FR": {
                    singular: "Veuillez {LINK}essayer{/LINK} avec Chrome, Firefox ou Safari."
                  },
                  "ja-JP": {
                    singular: "Chrome、Firefox、Safariで{/LINK}お試しください{LINK}。"
                  },
                  "ko-KR": {
                    singular: "Chrome, Firefox 또는 Safari로 {LINK}시도{/LINK}하세요."
                  },
                  "pt-BR": {
                    singular: "{LINK}Tente{/LINK} com Chrome, Firefox ou Safari."
                  },
                  "zh-CN": {
                    singular: "请使用 Chrome、Firefox 或 Safari {/LINK}尝试{LINK}。"
                  }
                }
              })
            })
          })
        }),
        footer: (0, _v7.jsx)(_v69.HBox, {
          justify: "flex-end",
          children: (0, _v7.jsx)(_v36.Button, {
            format: "primary",
            onClick: () => {
              let _v0;
              _v0 = document.referrer || "/create/templates", window.location.href = _v0;
            },
            children: _v66.default.UnsupportedBrowserErrorModalBack
          })
        }),
        onClose: () => {
          _v1(!1);
        }
      }) : null;
    };
  function _v72({
    children: _v0
  }) {
    return -1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > -1 ? (0, _v7.jsx)(_v71, {}) : _v0;
  }
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0);
  let _v83 = _v0 => (0, _v7.jsx)(_v82.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v7.jsx)("rect", {
      x: "8",
      y: "8",
      width: "8",
      height: "8",
      rx: "4",
      fill: "currentColor"
    })
  });
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  function _v103({
    children: _v0,
    fitContent: _v1,
    onCloseCallback: _v2,
    zIndex: _v3 = 0,
    autoHeight: _v4,
    autoWidth: _v5,
    overlayOpacity: _v6 = .8,
    fixedWidth: _v7,
    testId: _v8
  }) {
    let _v9 = (0, _v8.useRef)(null),
      _v10 = (0, _v8.useRef)(null);
    return (0, _v101.default)(_v9, _v2, _v10), (0, _v7.jsxs)("div", {
      ref: _v10,
      children: [(0, _v7.jsx)(_v104, {
        zIndex: _v3 - 1,
        opacity: _v6
      }), (0, _v7.jsx)(_v106, {
        "data-testid": _v8,
        fitContent: _v1,
        ref: _v9,
        zIndex: _v3,
        autoWidth: _v5,
        autoHeight: _v4,
        fixedWidth: _v7,
        children: _v0
      })]
    });
  }
  let _v104 = (0, _v10.default)("div").withConfig({
      displayName: "CustomModal__Overlay",
      componentId: "sc-de677e76-0"
    })`
  position: fixed;
  z-index: ${_v0 => _v0.zIndex};
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: ${_v0 => _v0.opacity};
  top: 0;
  left: 0;
  transition: all 300ms ease-in-out 0s;
  overflow: hidden;
  display: none;
  ${_v102.media.sm`
    display: block;
  `};
`,
    _v105 = _v10.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,
    _v106 = (0, _v10.default)("div").withConfig({
      displayName: "CustomModal__ModalContent",
      componentId: "sc-de677e76-1"
    })`
  z-index: ${_v0 => _v0.zIndex};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${(0, _v62.rem)(3)};
  overflow: hidden;
  animation: 0.2s ${_v105} linear 1 forwards;
  width: ${_v0 => _v0.autoWidth ? "auto" : "100%"};
  height: ${_v0 => _v0.autoHeight ? "auto" : "100%"};
  background-color: ${_v93.bokehTheme.colors.white};
  margin-top: ${(0, _v62.rem)(20)};
  ${_v102.media.sm`
    width: auto;
    height: auto;
    background-color: transparent;
    margin-top: 0;
  `};
  ${_v0 => _v0.fixedWidth && `width: ${(0, _v62.rem)(_v0.fixedWidth)} !important;`}
`;
  _v10.default.div.withConfig({
    displayName: "CommonStyles__Wrapper",
    componentId: "sc-6fd3c08a-0"
  })`
  width: ${_v0 => _v0.width ? (0, _v62.rem)(_v0.width) : (0, _v62.rem)(550)};
  height: ${_v0 => _v0.height ? (0, _v62.rem)(_v0.height) : "auto"};
  overflow: ${_v0 => _v0.overflow || "visible"};
`;
  let _v107 = _v10.default.div.withConfig({
    displayName: "CommonStyles__ContentWrapper",
    componentId: "sc-6fd3c08a-1"
  })`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${(0, _v62.rem)(35)};
`;
  (0, _v10.default)(_v107).withConfig({
    displayName: "CommonStyles__QuotaContentWrapper",
    componentId: "sc-6fd3c08a-2"
  })`
  padding-top: ${(0, _v62.rem)(40)};
  padding-left: ${(0, _v62.rem)(40)};
  padding-right: ${(0, _v62.rem)(40)};
  height: 100%;
  text-align: center;
  font-size: ${(0, _v62.rem)(14)};
  font-weight: 400;
  line-height: ${(0, _v62.rem)(22)};
  letter-spacing: 0;
`, _v10.default.div.withConfig({
    displayName: "CommonStyles__QuotaContentTitle",
    componentId: "sc-6fd3c08a-3"
  })`
  font-size: ${(0, _v62.rem)(20)};
  font-weight: 700;
  line-height: ${(0, _v62.rem)(26)};
  letter-spacing: -${(0, _v62.rem)(.5)};
  color: #11191d;
`, _v10.default.div.withConfig({
    displayName: "CommonStyles__QuotaSubContent",
    componentId: "sc-6fd3c08a-4"
  })`
  color: #23313b;
`, _v10.default.span.withConfig({
    displayName: "CommonStyles__DismissXWrapper",
    componentId: "sc-6fd3c08a-5"
  })`
  position: absolute;
  width: ${(0, _v62.rem)(22)};
  height: ${(0, _v62.rem)(22)};
  right: ${(0, _v62.rem)(10)};
  top: ${(0, _v62.rem)(10)};
  color: #1a2e3b;
  cursor: pointer;
`, _v10.default.img.withConfig({
    displayName: "CommonStyles__Header",
    componentId: "sc-6fd3c08a-6"
  })`
  width: ${_v0 => _v0.width ? (0, _v62.rem)(_v0.width) : (0, _v62.rem)(550)};
  height: ${_v0 => _v0.height ? (0, _v62.rem)(_v0.height) : (0, _v62.rem)(150)};
  @media screen and (max-height: ${768}px) {
    display: none;
  }
`, _v10.default.div.withConfig({
    displayName: "CommonStyles__TitleWrapper",
    componentId: "sc-6fd3c08a-7"
  })`
  width: ${_v0 => _v0.width ? (0, _v62.rem)(_v0.width) : (0, _v62.rem)(430)};
  display: flex;
  justify-self: center;
  text-align: center;
  font-size: ${(0, _v62.rem)(22)};
  font-weight: 500;
  line-height: ${(0, _v62.rem)(28)};
  margin: ${(0, _v62.rem)(29)} 0;
`, _v10.default.div.withConfig({
    displayName: "CommonStyles__ListWrapper",
    componentId: "sc-6fd3c08a-8"
  })`
  display: flex;
  margin: ${(0, _v62.rem)(20)};
  width: ${_v0 => _v0.width ? (0, _v62.rem)(_v0.width) : (0, _v62.rem)(460)};
  ${_v0 => _v0.noTopMargin && "margin-top: 0"}
`, _v10.default.ul.withConfig({
    displayName: "CommonStyles__List",
    componentId: "sc-6fd3c08a-9"
  })`
  margin-left: ${(0, _v62.rem)(15)};
`, _v10.default.li.withConfig({
    displayName: "CommonStyles__Bullet",
    componentId: "sc-6fd3c08a-10"
  })`
  font-size: ${(0, _v62.rem)(14)};
  line-height: ${(0, _v62.rem)(20)};
  color: #1a2e3b;
  margin-bottom: ${(0, _v62.rem)(10)};
  &:before {
    content: '\\2022';
    color: #b5bfc7;
    font-weight: 100;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }
`;
  let _v108 = _v10.default.a.withConfig({
    displayName: "CommonStyles__Link",
    componentId: "sc-6fd3c08a-11"
  })`
  font-size: ${(0, _v62.rem)(14)};
  color: ${_v0 => _v0.color ? _v0.color : "#09809c"};
  cursor: pointer;
  &:hover {
    color: ${_v0 => _v0.color ? _v0.hoverColor : "#044b5c"};
  }
`;
  _v10.default.div.withConfig({
    displayName: "UpsellCard__Wrapper",
    componentId: "sc-a85d4d33-0"
  })`
  padding: ${(0, _v62.rem)(16)};
  border: ${(0, _v62.rem)(1)} solid #edf1f2;
  border-radius: ${(0, _v62.rem)(4)};
  box-shadow: 0 0 ${(0, _v62.rem)(10)} 0 rgba(0, 0, 0, 0.05);
  ${_v0 => _v0.maxWidth && `max-width: ${(0, _v62.rem)(_v0.maxWidth)}`};
  position: relative;
`, _v10.default.ul.withConfig({
    displayName: "UpsellCard__Subtexts",
    componentId: "sc-a85d4d33-1"
  })`
  margin-left: ${(0, _v62.rem)(15)};
  width: ${(0, _v62.rem)(200)};
  ${_v0 => _v0.firstSubtextDark && "li:first-child {font-weight: bold}"};
`, _v10.default.hr.withConfig({
    displayName: "UpsellCard__HR",
    componentId: "sc-a85d4d33-2"
  })`
  border: 0;
  border-top: ${(0, _v62.rem)(1)} solid #e6ebeb;
  margin: ${(0, _v62.rem)(15)};
`, _v10.default.li.withConfig({
    displayName: "UpsellCard__Subtext",
    componentId: "sc-a85d4d33-3"
  })`
  font-size: ${(0, _v62.rem)(14)};
  line-height: ${(0, _v62.rem)(20)};
  color: #1a2e3b;
  margin-bottom: ${(0, _v62.rem)(10)};
  &:before {
    content: '\\2022';
    color: #b5bfc7;
    font-weight: 100;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }
`, _v10.default.div.withConfig({
    displayName: "UpsellCard__Title",
    componentId: "sc-a85d4d33-4"
  })`
  font-size: ${(0, _v62.rem)(18)};
  font-weight: bold;
  line-height: ${(0, _v62.rem)(20)};
  color: #223d4c;
  margin-bottom: ${(0, _v62.rem)(16)};
`, _v10.default.div.withConfig({
    displayName: "UpsellCard__SubtextDiv",
    componentId: "sc-a85d4d33-5"
  })`
  font-size: ${(0, _v62.rem)(14)};
  line-height: ${(0, _v62.rem)(20)};
  color: #788c99;
  margin-bottom: ${(0, _v62.rem)(2)};
`;
  let _v109 = _v10.default.div.withConfig({
    displayName: "UpsellCard__Price",
    componentId: "sc-a85d4d33-6"
  })`
  color: #223d4c;
  display: inline-block;
  font-size: ${(0, _v62.rem)(30)};
  font-weight: 300;
  line-height: ${(0, _v62.rem)(28)};
`;
  (0, _v10.default)(_v109).withConfig({
    displayName: "UpsellCard__PriceMo",
    componentId: "sc-a85d4d33-7"
  })`
  font-size: ${(0, _v62.rem)(18)};
  margin-left: ${(0, _v62.rem)(5)};
  margin-right: ${(0, _v62.rem)(8)};
`, (0, _v10.default)(_v36.Button).withConfig({
    displayName: "UpsellCard__CtaButton",
    componentId: "sc-a85d4d33-8"
  })`
  margin-top: ${(0, _v62.rem)(12)};
  ${_v0 => _v0.hasDarkCTA && "background-color: #106FA7;"}
  ${_v0 => _v0.hasDarkCTA && "border-color: #106FA7;"}
  &:hover {
    ${_v0 => _v0.hasDarkCTA && "background-color: #2a5e8b;"}
    ${_v0 => _v0.hasDarkCTA && "border-color: #2a5e8b;"}
  }
  ${_v0 => !_v0.isFreeTrial && `margin-bottom: ${(0, _v62.rem)(41)};`}
`, (0, _v10.default)(_v88.Text).withConfig({
    displayName: "UpsellCard__WeeklyLimit",
    componentId: "sc-a85d4d33-9"
  })`
  height: ${(0, _v62.rem)(44)};
  font-size: ${(0, _v62.rem)(16)};
  font-weight: 500;
  line-height: ${(0, _v62.rem)(18)};
  display: block;
`, (0, _v10.default)(_v88.Text).withConfig({
    displayName: "UpsellCard__AnnualLimit",
    componentId: "sc-a85d4d33-10"
  })`
  color: #788c99;
  font-size: ${(0, _v62.rem)(14)};
  line-height: ${(0, _v62.rem)(20)};
  display: block;
  margin-bottom: ${(0, _v62.rem)(32)};
`, _v10.default.p.withConfig({
    displayName: "UpsellCard__ListHeader",
    componentId: "sc-a85d4d33-11"
  })`
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.05px;
  color: #000000;
  margin-bottom: ${(0, _v62.rem)(15)};
`;
  let _v110 = _v10.default.div.withConfig({
    displayName: "UpsellCard__PurchaseNow",
    componentId: "sc-a85d4d33-12"
  })`
  width: 100%;
  font-size: ${(0, _v62.rem)(14)};
  line-height: ${(0, _v62.rem)(20)};
  display: flex;
  justify-content: center;
  margin-top: ${(0, _v62.rem)(6)};
`;
  function _v111({
    onDismiss: _v0,
    handleUpgrade: _v1,
    bpLocation: _v2,
    onContinueAndUpgradeLater: _v3,
    vsid: _v4,
    hideTrial: _v5,
    handleUpgradeFlow: _v6,
    ctaLink: _v7,
    title: _v8,
    pageLocation: _v9,
    flow: _v10,
    upsellTrigger: _v11,
    triggerCapability: _v12,
    isBlocker: _v13,
    thirdPartyIntegration: _v14
  }) {
    let {
        auth: _v15
      } = (0, _v8.useContext)(_v100.MagistoSessionContext),
      _v16 = _v15 && _v15.response && _v15.response.vimeo && _v15.response.vimeo.vimeoAccountType || _v98.Tier.Basic,
      _v17 = _v66.default.StartFreeTrial,
      {
        user: _v18,
        locale: _v19,
        vuid: _v20
      } = (0, _v8.useContext)(_v99.ConfigContext);
    return (0, _v8.useEffect)(() => {
      _v39.BigPictureClient.sendEvent(new _v39.Event("view_an_upsell", 13, {
        type: "impression",
        device_id: _v20,
        lang: _v19,
        platform: window.navigator.platform,
        user_id: `${_v18 && _v18.id}`,
        product: "Vimeo Create",
        path: window.location.pathname,
        layout_id: null,
        vsid: _v4 || null,
        plan: _v85.UPSELL_PLAN_TYPES.PRO,
        location: _v9 ?? "",
        flow: _v10 ?? null,
        cta: _v17,
        is_trial: !1,
        test_layout: "proUpsell",
        trigger_for_upsell: _v11 ?? null,
        is_blocker: _v13 ?? null,
        current_tier: _v16,
        third_party_integration: _v14 ?? null,
        trigger_capability: _v12 ?? null,
        ..._v97.NON_WEB_FIELDS
      }));
    }, [_v2, _v19, _v18, _v20, _v4, _v9, _v10, _v17, _v5, _v11, _v13, _v16, _v14, _v12]), (0, _v7.jsxs)(_v103, {
      testId: "pro-upsell-container",
      onCloseCallback: _v0,
      autoHeight: !0,
      autoWidth: !0,
      zIndex: 0,
      overlayOpacity: .7,
      children: [(0, _v7.jsxs)(_v113, {
        children: [(0, _v7.jsx)(_v114, {}), (0, _v7.jsx)(_v115, {
          children: (0, _v7.jsx)(_v36.Button, {
            "data-testid": "close-upsell-button",
            icon: (0, _v7.jsx)(_v94.DismissX, {}),
            format: "basic",
            variant: "hyperminimal",
            size: "sm",
            onClick: () => {
              _v0(), _v39.BigPictureClient.sendEvent(new _v39.Event("click_to_close_upsell_screen", 13, {
                product: "Vimeo Create",
                path: window.location.pathname,
                lang: _v19,
                platform: window.navigator.platform,
                user_id: `${_v18 && _v18.id}`,
                device_id: _v20,
                layout_id: null,
                vsid: _v4 || null,
                displayed_plan: _v85.UPSELL_PLAN_TYPES.PRO,
                plan: null,
                location: _v9 ?? "",
                flow: _v10 ?? null,
                cta: _v17,
                is_trial: !1,
                test_layout: null,
                trigger_for_upsell: _v11 ?? null,
                is_blocker: _v13 ?? null,
                current_tier: _v16,
                third_party_integration: _v14 ?? null,
                trigger_capability: _v12 ?? null,
                ..._v97.NON_WEB_FIELDS
              }));
            }
          })
        })]
      }), (0, _v7.jsxs)(_v116, {
        children: [(0, _v7.jsx)(_v117, {
          size: "3",
          children: _v8 || _v66.default.GetMoreWithPro
        }), (0, _v7.jsxs)(_v118, {
          children: [(0, _v7.jsx)(_v112, {
            content: _v66.default.UnlockExclusiveTemplates
          }), (0, _v7.jsx)(_v112, {
            content: _v66.default.UnlimitedStockClipsAndImages
          }), (0, _v7.jsx)(_v112, {
            content: _v66.default.AccessToAllStyles
          }), (0, _v7.jsx)(_v112, {
            content: _v66.default.CreateLongerVideos
          })]
        }), (0, _v7.jsxs)(_v119, {
          children: [(0, _v7.jsx)(_v36.Button, {
            onClick: () => _v1(!0),
            fluid: !0,
            format: "upsell",
            children: _v66.default.StartFreeTrial
          }), !_v13 && (0, _v7.jsx)(_v120, {
            children: (0, _v7.jsx)(_v36.Button, {
              format: "secondary",
              onClick: () => {
                _v39.BigPictureClient.sendEvent(new _v39.Event("click_on_upsell", 15, {
                  product: "Vimeo Create",
                  path: window.location.pathname,
                  type: "click",
                  device_id: _v20,
                  lang: _v19,
                  platform: window.navigator.platform,
                  user_id: `${_v18 && _v18.id}`,
                  layout_id: null,
                  vsid: _v4 || null,
                  displayed_plan: _v85.UPSELL_PLAN_TYPES.PRO,
                  plan: _v85.UPSELL_PLAN_TYPES.PRO,
                  duration: _v97.UpsellDuration.YEARLY,
                  location: _v9 ?? "",
                  flow: _v10 ?? null,
                  cta: _v66.default.ContinueAndUpgradeLater,
                  is_trial: !1,
                  test_layout: null,
                  trigger_for_upsell: _v11 ?? null,
                  is_blocker: _v13 ?? null,
                  current_tier: _v16,
                  third_party_integration: _v14 ?? null,
                  trigger_capability: _v12 ?? null,
                  ..._v97.NON_WEB_FIELDS
                })), _v3(), _v39.BigPictureClient.sendEvent(new _v39.Event("click_to_close_upsell_screen", 13, {
                  product: "Vimeo Create",
                  path: window.location.pathname,
                  lang: _v19,
                  platform: window.navigator.platform,
                  user_id: `${_v18 && _v18.id}`,
                  device_id: _v20,
                  layout_id: null,
                  vsid: _v4 || null,
                  displayed_plan: _v85.UPSELL_PLAN_TYPES.PRO,
                  plan: null,
                  location: _v9 ?? "",
                  flow: _v10 ?? null,
                  cta: _v66.default.ContinueAndUpgradeLater,
                  is_trial: !_v5,
                  test_layout: null,
                  trigger_for_upsell: _v11 ?? null,
                  is_blocker: _v13 ?? null,
                  current_tier: _v16,
                  third_party_integration: _v14 ?? null,
                  trigger_capability: _v12 ?? null,
                  ..._v97.NON_WEB_FIELDS
                }));
              },
              fluid: !0,
              children: _v66.default.ContinueAndUpgradeLater
            })
          }), _v13 && (0, _v7.jsx)(_v110, {
            translate: "no",
            children: (0, _v63.translate)({
              singular: "or {A}purchase now{/A}",
              replacements: {
                A: _v0 => (0, _v7.jsxs)(_v108, {
                  color: _v93.bokehTheme.colors.blue["500"],
                  hoverColor: _v96.COLORS.hoverBluePrimary,
                  onClick: () => {
                    _v6(_v7, !1), _v39.BigPictureClient.sendEvent(new _v39.Event("click_on_upsell", 15, {
                      product: "Vimeo Create",
                      path: window.location.pathname,
                      type: "click",
                      device_id: _v20,
                      lang: _v19,
                      platform: window.navigator.platform,
                      user_id: `${_v18 && _v18.id}`,
                      layout_id: null,
                      vsid: _v4 || null,
                      displayed_plan: _v85.UPSELL_PLAN_TYPES.PRO,
                      plan: _v85.UPSELL_PLAN_TYPES.PRO,
                      duration: _v97.UpsellDuration.YEARLY,
                      location: _v9 ?? "",
                      flow: _v10 ?? null,
                      cta: _v0,
                      is_trial: !1,
                      test_layout: null,
                      trigger_for_upsell: _v11 ?? null,
                      is_blocker: _v13 ?? null,
                      current_tier: _v16,
                      third_party_integration: _v14 ?? null,
                      trigger_capability: _v12 ?? null,
                      ..._v97.NON_WEB_FIELDS
                    }));
                  },
                  children: [" ", _v0]
                })
              },
              dictionary: {
                es: {
                  singular: "o {A}comprar ahora{/A}"
                },
                "de-DE": {
                  singular: "oder {A}jetzt kaufen{/A}"
                },
                "fr-FR": {
                  singular: "ou bien {A}achetez maintenant{/A}"
                },
                "ja-JP": {
                  singular: "または{A}今すぐ購入{/A}"
                },
                "ko-KR": {
                  singular: "또는 {A}지금 바로 구매하세요.{/A}"
                },
                "pt-BR": {
                  singular: "ou {A}compre agora{/A}"
                },
                "zh-CN": {
                  singular: "或者{A}立即购买{/A}"
                }
              }
            })
          })]
        })]
      })]
    });
  }
  function _v112({
    content: _v0
  }) {
    return (0, _v7.jsx)(_v121, {
      size: "2",
      element: "li",
      children: _v0
    });
  }
  (0, _v10.default)(_v64.Link).withConfig({
    displayName: "UpsellCard__CustomLink",
    componentId: "sc-a85d4d33-13"
  })`
  cursor: pointer;
  color: ${_v93.bokehTheme.colors.blue["500"]};
  &:hover {
    color: ${_v93.bokehTheme.colors.blue["400"]};
  }
`;
  let _v113 = _v10.default.div.withConfig({
      displayName: "ProUpsell__MastHead",
      componentId: "sc-e5569cce-0"
    })`
  background: ${_v93.bokehTheme.colors.white};
  height: ${(0, _v62.rem)(150)};
  width: ${(0, _v62.rem)(400)};
`,
    _v114 = _v10.default.div.withConfig({
      displayName: "ProUpsell__ImgWrapper",
      componentId: "sc-e5569cce-1"
    })`
  background: url(${_v96.IMAGE_ASSETS_PATH}1393.jpg) center/contain no-repeat ${_v93.bokehTheme.colors.gray["50"]};
  height: ${(0, _v62.rem)(150)};
`,
    _v115 = _v10.default.div.withConfig({
      displayName: "ProUpsell__DismissButton",
      componentId: "sc-e5569cce-2"
    })`
  display: flex;
  position: absolute;
  top: ${(0, _v62.rem)(16)};
  right: ${(0, _v62.rem)(16)};
  button {
    color: ${_v93.bokehTheme.colors.white};
    &:hover {
      background: #404040;
    }
  }
`,
    _v116 = _v10.default.div.withConfig({
      displayName: "ProUpsell__Content",
      componentId: "sc-e5569cce-3"
    })`
  background: ${_v93.bokehTheme.colors.white};
  padding: ${(0, _v62.rem)(30)} ${(0, _v62.rem)(70)} ${(0, _v62.rem)(40)};
  height: ${(0, _v62.rem)(403)};
  width: ${(0, _v62.rem)(400)};
  @media (max-height: 640px) {
    height: unset;
    padding: ${(0, _v62.rem)(15)} ${(0, _v62.rem)(70)} ${(0, _v62.rem)(20)};
  }
`,
    _v117 = (0, _v10.default)(_v95.Header).withConfig({
      displayName: "ProUpsell__StyledHeader",
      componentId: "sc-e5569cce-4"
    })`
  margin-bottom: ${(0, _v62.rem)(20)};
  text-align: center;
`,
    _v118 = _v10.default.ul.withConfig({
      displayName: "ProUpsell__Features",
      componentId: "sc-e5569cce-5"
    })`
  list-style: inside;
  margin-top: ${(0, _v62.rem)(20)};
`,
    _v119 = _v10.default.div.withConfig({
      displayName: "ProUpsell__ButtonsWrapper",
      componentId: "sc-e5569cce-6"
    })`
  box-sizing: border-box;
  margin-top: ${(0, _v62.rem)(48)};
  width: ${(0, _v62.rem)(260)};
  @media (max-height: 640px) {
    margin-top: ${(0, _v62.rem)(24)};
  }
`,
    _v120 = _v10.default.div.withConfig({
      displayName: "ProUpsell__ContinueButtonWrapper",
      componentId: "sc-e5569cce-7"
    })`
  margin-top: ${(0, _v62.rem)(12)};
`,
    _v121 = (0, _v10.default)(_v65.Paragraph).withConfig({
      displayName: "ProUpsell__StyledParagraph",
      componentId: "sc-e5569cce-8"
    })`
  margin-bottom: ${(0, _v62.rem)(10)};
  display: list-item;
`;
  var _v122 = _v0.i(0),
    _v123 = _v0.i(0);
  let _v124 = _v8.default.memo(({
    onDismiss: _v0,
    thirdPartyIntegration: _v1
  }) => {
    (0, _v8.useEffect)(() => {
      (0, _v123.trackTeamUpgradeBlocker)(_v1);
    }, [_v1]);
    let _v2 = (0, _v8.useCallback)(() => {
      _v0(), (0, _v123.trackTeamUpgradeBlockerCta)(_v1);
    }, [_v0, _v1]);
    return (0, _v7.jsxs)(_v126, {
      children: [(0, _v7.jsx)(_v129, {
        onClick: _v2
      }), (0, _v7.jsx)(_v127, {
        size: "4",
        children: _v66.default.OnlyOwnerCanUpgrade
      }), (0, _v7.jsx)(_v65.Paragraph, {
        size: "2",
        children: _v66.default.ReachOutToTeamOwner
      }), (0, _v7.jsx)(_v128, {
        children: (0, _v7.jsx)(_v36.Button, {
          onClick: _v2,
          children: _v66.default.GotIt
        })
      })]
    });
  });
  function _v125({
    onDismiss: _v0,
    thirdPartyIntegration: _v1
  }) {
    return (0, _v7.jsx)(_v122.Modal, {
      active: !0,
      content: (0, _v7.jsx)(_v124, {
        onDismiss: _v0,
        thirdPartyIntegration: _v1
      })
    });
  }
  let _v126 = _v10.default.div.withConfig({
      displayName: "TeamMemberUpgradeBlockingModal__ContentWrapper",
      componentId: "sc-efbe467a-0"
    })`
  background-color: ${_v93.bokehTheme.colors.white};
  padding: ${(0, _v62.rem)(24)};
  box-shadow: 0 ${(0, _v62.rem)(3)} ${(0, _v62.rem)(10)} rgba(0, 0, 0, 0.12);
`,
    _v127 = (0, _v10.default)(_v95.Header).withConfig({
      displayName: "TeamMemberUpgradeBlockingModal__ModalHeader",
      componentId: "sc-efbe467a-1"
    })`
  font-weight: 400;
  letter-spacing: -${(0, _v62.rem)(.4)};
  max-width: ${(0, _v62.rem)(320)};
  margin-bottom: ${(0, _v62.rem)(16)};
`,
    _v128 = _v10.default.div.withConfig({
      displayName: "TeamMemberUpgradeBlockingModal__Footer",
      componentId: "sc-efbe467a-2"
    })`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${(0, _v62.rem)(32)};
`,
    _v129 = (0, _v10.default)(_v94.DismissX).withConfig({
      displayName: "TeamMemberUpgradeBlockingModal__DismissIcon",
      componentId: "sc-efbe467a-3"
    })`
  width: ${(0, _v62.rem)(16)};
  height: ${(0, _v62.rem)(16)};
  position: absolute;
  top: ${(0, _v62.rem)(24)};
  right: ${(0, _v62.rem)(24)};
  cursor: pointer;
`,
    _v130 = () => (0, _v7.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64",
      children: [(0, _v7.jsx)("defs", {}), (0, _v7.jsxs)("g", {
        fill: "none",
        fillRule: "evenodd",
        children: [(0, _v7.jsx)("circle", {
          fill: "#A9DCE8",
          cx: "32",
          cy: "32",
          r: "32"
        }), (0, _v7.jsxs)("g", {
          transform: "translate(17 20.25)",
          children: [(0, _v7.jsx)("path", {
            stroke: "#1A2E3B",
            strokeWidth: "1.5",
            fill: "#FFF",
            d: "M-.75 4.5h25.5v20.25H-.75z"
          }), (0, _v7.jsx)("path", {
            fill: "#1A2E3B",
            d: "M0 9h24v1.5H0z"
          }), (0, _v7.jsx)("path", {
            stroke: "#1A2E3B",
            strokeWidth: "1.5",
            fill: "#FFF",
            d: "M4.5-.75H30V19.5H4.5z"
          }), (0, _v7.jsx)("path", {
            fill: "#1A2E3B",
            d: "M5.25 4.5h24V6h-24z"
          }), (0, _v7.jsx)("circle", {
            fill: "#1A2E3B",
            cx: "7.875",
            cy: "2.25",
            r: "1.125"
          }), (0, _v7.jsx)("circle", {
            fill: "#1A2E3B",
            cx: "10.875",
            cy: "2.25",
            r: "1.125"
          }), (0, _v7.jsx)("circle", {
            fill: "#1A2E3B",
            cx: "13.875",
            cy: "2.25",
            r: "1.125"
          })]
        })]
      })]
    });
  function _v131() {
    return (0, _v7.jsx)(_v134, {
      children: (0, _v7.jsxs)(_v133, {
        children: [(0, _v7.jsx)(_v132, {
          children: (0, _v7.jsx)(_v130, {})
        }), _v66.default.BrandKitUpsellTextWindowOpen]
      })
    });
  }
  let _v132 = _v10.default.div.withConfig({
      displayName: "WaitingScreen__Icon",
      componentId: "sc-174d02d-0"
    })`
  height: ${(0, _v62.rem)(64)};
  width: ${(0, _v62.rem)(64)};
  margin: 0 auto ${(0, _v62.rem)(26)};
`,
    _v133 = _v10.default.div.withConfig({
      displayName: "WaitingScreen__Message",
      componentId: "sc-174d02d-1"
    })`
  margin: 0 auto;
  padding-top: ${(0, _v62.rem)(70)};
  text-align: center;
  width: ${(0, _v62.rem)(300)};
`,
    _v134 = _v10.default.div.withConfig({
      displayName: "WaitingScreen__Wrapper",
      componentId: "sc-174d02d-2"
    })`
  height: ${(0, _v62.rem)(316)};
  width: ${(0, _v62.rem)(400)};
`,
    _v135 = "show_teams_onboarding=false",
    _v136 = new Set(["creator", "professional", "studio", "production"]);
  function _v137({
    isPaidUser: _v0,
    showUpsell: _v1,
    upsellType: _v2,
    bpLocation: _v3,
    onDismissModal: _v4,
    onPlanUpgrade: _v5,
    shouldUpgradeIn: _v6,
    vsid: _v7,
    onContinueAndUpgradeLater: _v8,
    upsellTitle: _v9,
    contentText: _v10,
    ctaText: _v11,
    canUpgradeFromQuotaNotification: _v12,
    pageLocation: _v13,
    flow: _v14,
    upsellTrigger: _v15,
    triggerCapability: _v16,
    isBlocker: _v17,
    feature: _v18,
    upsellName: _v19,
    trackingParams: _v20
  }) {
    let {
        user: _v21,
        locale: _v22,
        vuid: _v23,
        partnerConfig: _v24,
        teamUser: _v25
      } = (0, _v8.useContext)(_v99.ConfigContext),
      {
        thirdPartyIntegration: _v26
      } = (0, _v8.useContext)(_v99.ConfigContext),
      [_v27, _v28] = (0, _v8.useState)(!1),
      [_v29, _v30] = (0, _v8.useState)(!1),
      _v31 = _v21 && (_v21.capabilities.hasPaid || _v21.capabilities.hasBeenInFreeTrial),
      {
        auth: _v32
      } = (0, _v8.useContext)(_v100.MagistoSessionContext),
      _v33 = (0, _v8.useContext)(_v92.ViewerContext),
      _v34 = _v32 && _v32.response && _v32.response.vimeo && _v32.response.vimeo.vimeoAccountType || _v98.Tier.Basic,
      _v35 = _v66.default.StartFreeTrial,
      _v36 = _v21 && _v21.id || 0;
    (0, _v123.initialBI)({
      containerName: _v13 || "",
      userId: _v36,
      vuid: _v23,
      locale: _v22,
      vsid: _v7 || null
    });
    let _v37 = (0, _v8.useCallback)(_v0 => "save_preview" === _v3 || "create_draft_limit_modal" === _v3 ? _v0 ? _v85.UPSELL_PLAN_TYPES.PRO_BUSINESS : _v85.UPSELL_PLAN_TYPES.PLUS_PRO : _v96.UpsellType[_v0].toLowerCase(), [_v3, _v0]),
      _v38 = (0, _v90.useGetSubscriptionPlansData)();
    (0, _v8.useEffect)(() => {
      ("save_preview" === _v3 || "create_draft_limit_modal" === _v3) && _v39.BigPictureClient.sendEvent(new _v39.Event("view_an_upsell", 13, {
        product: "Vimeo Create",
        path: window.location.pathname,
        type: "impression",
        device_id: _v23,
        lang: _v22,
        platform: window.navigator.platform,
        user_id: `${_v21 && _v21.id}`,
        layout_id: null,
        vsid: _v7 || null,
        plan: _v37(_v2),
        location: _v13 ?? "",
        flow: _v14 ?? null,
        cta: _v35,
        is_trial: !1,
        test_layout: "upsellModal",
        trigger_for_upsell: _v15 ?? null,
        is_blocker: !0,
        current_tier: _v34,
        third_party_integration: _v26,
        trigger_capability: _v16 ?? null,
        ..._v97.NON_WEB_FIELDS
      }));
    }, [_v22, _v3, _v2, _v21, _v23, _v7, _v13, _v14, _v31, _v15, _v17, _v34, _v16, _v26, _v35, _v0, _v37]);
    let _v39 = _v2 === _v96.UpsellType.STARTER_BLOCKING || _v2 === _v96.UpsellType.STANDARD_BLOCKING || _v2 === _v96.UpsellType.ADVANCED_BLOCKING || _v2 === _v96.UpsellType.ENTERPRISE_BLOCKING,
      _v40 = (0, _v8.useCallback)((_v0, _v1, _v2 = "", _v3) => {
        if ((0, _v12.clearCookie)(_v84.BI_UPSELL_IS_TRIAL), (0, _v12.clearCookie)(_v84.BI_UPSELL_PLAN), _v25) return void _v30(!0);
        if (_v24?.handleUpgrade) return void _v24.handleUpgrade(_v0, _v3);
        let _v4 = null;
        switch (_v6) {
          case _v86.UpgradeWindowOption.NEW_WINDOW:
            _v0 += (_v0.includes("?") ? "&" : "?") + _v135, _v4 = window.open(_v0, "_blank", `height=${window.innerHeight},width=${window.innerWidth / 1.5},centerscreen=yes,scrolling=yes,scrollbars=yes,resizable=yes`);
            break;
          case _v86.UpgradeWindowOption.NEW_TAB:
            _v0 += (_v0.includes("?") ? "&" : "?") + _v135, _v4 = window.open(_v0, "_blank");
            break;
          case _v86.UpgradeWindowOption.SELF:
          default:
            window.location.href = _v0;
        }
        _v4 && (_v28(!0), setInterval(() => {
          _v4 && _v4.closed && (_v4 = null, _v28(!1));
        }, 0)), window.successfulUpgradeCallback = () => {
          if (_v28(!1), _v5) {
            let _v0 = (0, _v12.loadCookie)(_v84.BI_UPSELL_IS_TRIAL),
              _v1 = (0, _v12.loadCookie)(_v84.BI_UPSELL_PLAN),
              _v2 = _v1 || "all",
              _v3 = _v1 || _v2;
            (0, _v123.trackSuccessfulClientTransaction)(_v2, _v3, _v15, _v34, _v16, _v0 ? "true" === _v0 : _v3, _v26), _v5();
          }
          -1 !== window.location.pathname.indexOf("/create/templates") && window.location.reload();
        };
      }, [_v3, _v34, _v5, _v24, _v6, _v25, _v26, _v16, _v15]),
      _v41 = (0, _v8.useCallback)(() => {
        _v30(!1);
      }, []),
      _v42 = (_v0, _v1) => {
        let _v2 = _v0.find(_v0 => _v0.tier === _v1),
          _v3 = null;
        return (_v3 = _v2 ? _v21?.capabilities?.hasFreeTrialEligibility ? _v2.metadata.interactions.purchase.uri.freeTrial : _v2.metadata.interactions.purchase.uri.annual : "/upgrade") ? _v3 + _v43() : null;
      },
      _v43 = () => {
        if (!_v20) return "";
        let _v0 = Object.entries(_v20).filter(([_v0, _v1]) => "" !== _v1).map(([_v0, _v1]) => `${encodeURIComponent(_v0)}=${encodeURIComponent(_v1)}`).join("&");
        return _v0 ? `?${_v0}` : "";
      },
      {
        capabilities: {
          canSeePerSeatPricingPages: _v44
        }
      } = (0, _v87.useCapability)(["canSeePerSeatPricingPages"]);
    if (!_v38) return null;
    let _v45 = [(0, _v63.translate)({
        singular: "Define brand colors and logos for your team to use",
        dictionary: {
          es: {
            singular: "Defina los colores y logotipos de la marca para que los use su equipo"
          },
          "de-DE": {
            singular: "Definieren Sie Markenfarben und Logos, die Ihr Team verwenden soll."
          },
          "fr-FR": {
            singular: "Définissez les couleurs et les logos de la marque à utiliser par votre équipe"
          },
          "ja-JP": {
            singular: "チームが使用するブランドカラーとロゴを定義"
          },
          "ko-KR": {
            singular: "팀이 사용할 브랜드 색상과 로고를 정의하세요."
          },
          "pt-BR": {
            singular: "Defina as cores e logotipos da marca para sua equipe usar."
          },
          "zh-CN": {
            singular: "为您的团队定义品牌颜色和徽标以供使用"
          }
        }
      }), (0, _v63.translate)({
        singular: "Make sure brand colors and logos stay consistent everywhere",
        dictionary: {
          es: {
            singular: "Asegúrese de que los colores y logotipos de la marca se mantengan consistentes en todas partes"
          },
          "de-DE": {
            singular: "Stellen Sie sicher, dass die Markenfarben und Logos überall konsistent bleiben."
          },
          "fr-FR": {
            singular: "Assurez-vous que les couleurs et les logos de la marque restent cohérents partout"
          },
          "ja-JP": {
            singular: "ブランドカラーとロゴがどこでも一貫していることを確認"
          },
          "ko-KR": {
            singular: "브랜드 색상과 로고가 모든 곳에서 일관성을 갖게 하세요."
          },
          "pt-BR": {
            singular: "Verifique se as cores e os logotipos da marca permanecem consistentes em todos os lugares."
          },
          "zh-CN": {
            singular: "确保品牌颜色和徽标在各处保持一致"
          }
        }
      })],
      _v46 = [(0, _v63.translate)({
        singular: "Edit videos in English the same way you edit text",
        dictionary: {
          es: {
            singular: "Edite videos en inglés de la misma manera que edita texto."
          },
          "de-DE": {
            singular: "Bearbeite Videos auf Englisch genauso wie du Text bearbeitest"
          },
          "fr-FR": {
            singular: "Modifiez des vidéos en anglais de la même manière que vous modifiez du texte"
          },
          "ja-JP": {
            singular: "テキストを編集するのと同じように英語の動画を編集"
          },
          "ko-KR": {
            singular: "텍스트 편집하듯 영어로 동영상 편집"
          },
          "pt-BR": {
            singular: "Edite vídeos em inglês da mesma forma que edita texto."
          },
          "zh-CN": {
            singular: "按编辑文本的方式编辑英语视频"
          }
        }
      }), (0, _v63.translate)({
        singular: "Trim and edit using the transcript",
        dictionary: {
          es: {
            singular: "Recorte y edite utilizando la transcripción."
          },
          "de-DE": {
            singular: "Schneiden und bearbeiten Sie mit Hilfe des Transkripts"
          },
          "fr-FR": {
            singular: "Découpez et modifiez à l'aide de la transcription"
          },
          "ja-JP": {
            singular: "トランスクリプトを使用してトリミングと編集を実行"
          },
          "ko-KR": {
            singular: "스크립트를 사용한 자르기 및 편집"
          },
          "pt-BR": {
            singular: "Ajuste e edite usando a transcrição"
          },
          "zh-CN": {
            singular: "使用转录文稿修剪和编辑"
          }
        }
      }), (0, _v63.translate)({
        singular: "Automatically remove ums, pauses, and filler words",
        dictionary: {
          es: {
            singular: 'Elimine automáticamente los "um", las pausas y las palabras de relleno.'
          },
          "de-DE": {
            singular: "Entferne automatisch „Ähms“, Pausen und Füllwörter"
          },
          "fr-FR": {
            singular: "Éliminez automatiquement les « euh », les pauses et les mots de remplissage"
          },
          "ja-JP": {
            singular: "空白やつなぎ言葉を自動的に削除"
          },
          "ko-KR": {
            singular: "'음', 침묵, 불필요한 단어 자동 제거"
          },
          "pt-BR": {
            singular: "Exclua automaticamente “hums”, pausas e cacoetes"
          },
          "zh-CN": {
            singular: "自动删除“嗯”、停顿和填充词"
          }
        }
      })],
      _v47 = [(0, _v63.translate)({
        singular: "Get access to hundreds of high-quality video clips and images to enhance your video",
        dictionary: {
          es: {
            singular: "Obtenga acceso a cientos de clips de video e imágenes de alta calidad para mejorar su video"
          },
          "de-DE": {
            singular: "Erhalten Sie Zugang zu Hunderten von hochwertigen Videoclips und Bildern, um Ihr Video zu verbessern."
          },
          "fr-FR": {
            singular: "Accédez à des centaines de clips vidéo et d'images de haute qualité pour améliorer votre vidéo."
          },
          "ja-JP": {
            singular: "数百もの高品質のビデオクリップや画像にアクセスして動画を強化"
          },
          "ko-KR": {
            singular: "수백 개의 고품질 동영상 클립과 이미지를 이용하여 동영상을 더 멋지게 완성하세요."
          },
          "pt-BR": {
            singular: "Tenha acesso a centenas de clipes de vídeo e imagens de alta qualidade para aprimorar seu vídeo."
          },
          "zh-CN": {
            singular: "获取数百个高质量的视频剪辑和图像，以增强您的视频效果"
          }
        }
      })],
      _v48 = _v38.map(_v0 => _v0.tier).some(_v0 => _v136.has(_v0)),
      _v49 = _v48 ? "professional" : _v44 ? "standard" : "business",
      _v50 = _v48 ? "professional" : _v44 ? "standard" : "pro",
      _v51 = _v0 => ({
        business: "Business",
        pro: "Pro",
        standard: "Standard",
        professional: "Professional"
      })[_v0] || _v0,
      _v52 = (0, _v63.translate)({
        singular: "Upgrade to {PLAN}",
        replacements: {
          PLAN: _v51(_v50)
        },
        dictionary: {
          es: {
            singular: "Cambiar a {PLAN}"
          },
          "de-DE": {
            singular: "Upgrade auf {PLAN} vornehmen"
          },
          "fr-FR": {
            singular: "Passez à l'abonnement {PLAN}"
          },
          "ja-JP": {
            singular: "{PLAN} にアップグレード"
          },
          "ko-KR": {
            singular: "{PLAN} 요금제로 업그레이드"
          },
          "pt-BR": {
            singular: "Fazer upgrade para {PLAN}"
          },
          "zh-CN": {
            singular: "升级到 {PLAN}"
          }
        }
      }),
      _v53 = (0, _v63.translate)({
        singular: "Upgrade to {PLAN}",
        replacements: {
          PLAN: _v51(_v49)
        },
        dictionary: {
          es: {
            singular: "Cambiar a {PLAN}"
          },
          "de-DE": {
            singular: "Upgrade auf {PLAN} vornehmen"
          },
          "fr-FR": {
            singular: "Passez à l'abonnement {PLAN}"
          },
          "ja-JP": {
            singular: "{PLAN} にアップグレード"
          },
          "ko-KR": {
            singular: "{PLAN} 요금제로 업그레이드"
          },
          "pt-BR": {
            singular: "Fazer upgrade para {PLAN}"
          },
          "zh-CN": {
            singular: "升级到 {PLAN}"
          }
        }
      });
    return _v27 ? (0, _v7.jsxs)(_v76.Modal, {
      isOpen: _v1,
      onClose: _v4,
      size: "md",
      children: [(0, _v7.jsx)(_v80.ModalOverlay, {}), (0, _v7.jsxs)(_v79.ModalContent, {
        children: [(0, _v7.jsx)(_v78.ModalCloseButton, {}), (0, _v7.jsx)(_v77.ModalBody, {
          children: (0, _v7.jsx)(_v131, {})
        })]
      })]
    }) : (0, _v7.jsxs)(_v7.Fragment, {
      children: [_v29 ? (0, _v7.jsx)(_v125, {
        onDismiss: _v41,
        thirdPartyIntegration: _v26
      }) : (0, _v7.jsxs)(_v7.Fragment, {
        children: [[_v96.UpsellType.BRAND].includes(_v2) && (0, _v7.jsx)(_v91.default, {
          apiUrl: _v33?.apiUrl,
          userConfig: {
            jwt: _v33?.jwt,
            userId: _v33?.user?.id
          },
          templateType: "feature",
          onClose: _v4,
          modalConfig: {
            headerText: (0, _v63.translate)({
              singular: "Keep your team consistent with brand kits",
              dictionary: {
                es: {
                  singular: "Mantenga la uniformidad de su equipo con los kits de marca."
                },
                "de-DE": {
                  singular: "Halten Sie Ihr Team mit Marken-Kits einheitlich."
                },
                "fr-FR": {
                  singular: "Assurez la cohérence de votre équipe avec les kits de marque"
                },
                "ja-JP": {
                  singular: "ブランドキットでチームの一貫性を維持"
                },
                "ko-KR": {
                  singular: "브랜드 키트로 팀에서 일관성 유지"
                },
                "pt-BR": {
                  singular: "Mantenha sua equipe consistente com os kits de marca"
                },
                "zh-CN": {
                  singular: "确保您的团队与品牌工具包保持一致"
                }
              }
            }),
            subHeaderText: "",
            imgSrc: "https://i.vimeocdn.com/custom_asset/16b27dda44f589329e5024078f0ee88d",
            body: (0, _v7.jsx)(_v81.VStack, {
              gap: "sm",
              children: _v45.map(_v0 => (0, _v7.jsxs)(_v75.Flex, {
                gap: "sm",
                children: [(0, _v7.jsx)(_v83, {}), (0, _v7.jsx)(_v88.Text, {
                  children: _v0
                })]
              }, _v0))
            }),
            primaryCTAText: _v53,
            primaryCTALink: _v42(_v38, _v49),
            secondaryCTAText: (0, _v63.translate)({
              singular: "Compare all plans",
              dictionary: {
                es: {
                  singular: "Comparar todos los planes"
                },
                "de-DE": {
                  singular: "Alle Pläne vergleichen"
                },
                "fr-FR": {
                  singular: "Comparez tous les plans"
                },
                "ja-JP": {
                  singular: "すべてのプランを比較"
                },
                "ko-KR": {
                  singular: "모든 요금제 확인하기"
                },
                "pt-BR": {
                  singular: "Comparar todos os planos"
                },
                "zh-CN": {
                  singular: "比较所有套餐"
                }
              }
            }),
            secondaryCTALink: (0, _v89.buildUpgradePlanUrl)({
              paywallTrigger: "create_editor_brand_kit_button",
              paywallLocation: "create_editor",
              paywallFeature: "brand_kit"
            })
          },
          tracking: {
            params: {
              feature: _v18,
              location: _v13,
              page: "editor",
              upsell_name: _v19
            },
            paywallTracking: {
              paywallTrigger: "create_editor_brand_kit_button",
              paywallLocation: "create_editor",
              paywallType: "popup",
              paywallFeature: "brand_kit"
            }
          }
        }), [_v96.UpsellType.STOCK].includes(_v2) && (0, _v7.jsx)(_v91.default, {
          apiUrl: _v33?.apiUrl,
          userConfig: {
            jwt: _v33?.jwt,
            userId: _v33?.user?.id
          },
          templateType: "feature",
          onClose: _v4,
          modalConfig: {
            headerText: (0, _v63.translate)({
              singular: "Add stock clips and images to your videos",
              dictionary: {
                es: {
                  singular: "Añada imágenes y clips de archivo a sus videos"
                },
                "de-DE": {
                  singular: "Füge deinen Videos Stock-Clips und Bilder hinzu"
                },
                "fr-FR": {
                  singular: "Ajoutez des images et des clips libres de droits à vos vidéos"
                },
                "ja-JP": {
                  singular: "ストッククリップと画像を動画に追加"
                },
                "ko-KR": {
                  singular: "동영상에 스톡 영상과 이미지를 추가하세요."
                },
                "pt-BR": {
                  singular: "Adicione clipes do acervo e imagens aos seus vídeos"
                },
                "zh-CN": {
                  singular: "将库存剪辑和图片添加到您的视频中"
                }
              }
            }),
            subHeaderText: "",
            imgSrc: "https://i.vimeocdn.com/custom_asset/2b9052492c34630523351ab53c79a128",
            body: (0, _v7.jsx)(_v75.Flex, {
              gap: "sm",
              children: (0, _v7.jsx)(_v88.Text, {
                children: _v47
              })
            }),
            primaryCTAText: _v52,
            primaryCTALink: _v42(_v38, _v50),
            secondaryCTAText: (0, _v63.translate)({
              singular: "Compare all plans",
              dictionary: {
                es: {
                  singular: "Comparar todos los planes"
                },
                "de-DE": {
                  singular: "Alle Pläne vergleichen"
                },
                "fr-FR": {
                  singular: "Comparez tous les plans"
                },
                "ja-JP": {
                  singular: "すべてのプランを比較"
                },
                "ko-KR": {
                  singular: "모든 요금제 확인하기"
                },
                "pt-BR": {
                  singular: "Comparar todos os planos"
                },
                "zh-CN": {
                  singular: "比较所有套餐"
                }
              }
            }),
            secondaryCTALink: (0, _v89.buildUpgradePlanUrl)({
              paywallTrigger: "create_editor_stock_media_button",
              paywallLocation: "create_editor",
              paywallFeature: "stock"
            })
          },
          tracking: {
            params: {
              feature: "stock",
              location: "drawer",
              page: "editor",
              upsell_name: "editor_stock_footage"
            },
            paywallTracking: {
              paywallTrigger: "create_editor_stock_media_button",
              paywallLocation: "create_editor",
              paywallType: "popup",
              paywallFeature: "stock"
            }
          }
        }), [_v96.UpsellType.TVE].includes(_v2) && (0, _v7.jsx)(_v91.default, {
          apiUrl: _v33?.apiUrl,
          userConfig: {
            jwt: _v33?.jwt,
            userId: _v33?.user?.id
          },
          templateType: "feature",
          onClose: _v4,
          modalConfig: {
            headerText: (0, _v63.translate)({
              singular: "Edit with ease using the transcript",
              dictionary: {
                es: {
                  singular: "Edite con facilidad usando la transcripción"
                },
                "de-DE": {
                  singular: "Mit dem Transkript ganz einfach bearbeiten"
                },
                "fr-FR": {
                  singular: "Modifiez facilement à l'aide de la transcription"
                },
                "ja-JP": {
                  singular: "トランスクリプトを使用して簡単に編集"
                },
                "ko-KR": {
                  singular: "스크립트를 사용하여 간편하게 편집"
                },
                "pt-BR": {
                  singular: "Edite com facilidade usando a transcrição"
                },
                "zh-CN": {
                  singular: "使用转录文稿轻松编辑"
                }
              }
            }),
            subHeaderText: "",
            imgSrc: "https://i.vimeocdn.com/custom_asset/54ce00a2cbd92cdab0d8c72f37d7e5ff",
            body: (0, _v7.jsx)("tbody", {
              children: _v46.map(_v0 => (0, _v7.jsxs)(_v75.Flex, {
                gap: "sm",
                children: [(0, _v7.jsx)(_v83, {}), (0, _v7.jsx)(_v88.Text, {
                  children: _v0
                })]
              }, _v0))
            }),
            primaryCTAText: _v52,
            primaryCTALink: _v42(_v38, _v50),
            secondaryCTAText: (0, _v63.translate)({
              singular: "Compare all plans",
              dictionary: {
                es: {
                  singular: "Comparar todos los planes"
                },
                "de-DE": {
                  singular: "Alle Pläne vergleichen"
                },
                "fr-FR": {
                  singular: "Comparez tous les plans"
                },
                "ja-JP": {
                  singular: "すべてのプランを比較"
                },
                "ko-KR": {
                  singular: "모든 요금제 확인하기"
                },
                "pt-BR": {
                  singular: "Comparar todos os planos"
                },
                "zh-CN": {
                  singular: "比较所有套餐"
                }
              }
            }),
            secondaryCTALink: (0, _v89.buildUpgradePlanUrl)({
              paywallTrigger: "create_editor_text_video_edit_button",
              paywallLocation: "create_editor",
              paywallFeature: "text_video_editing"
            })
          },
          tracking: {
            params: {
              feature: "tve",
              location: "drawer",
              page: "editor",
              upsell_name: "editor_tve"
            },
            paywallTracking: {
              paywallTrigger: "create_editor_text_video_edit_button",
              paywallLocation: "create_editor",
              paywallType: "popup",
              paywallFeature: "text_video_editing"
            }
          }
        }), [_v96.UpsellType.TIER_BADGE].includes(_v2) && (0, _v7.jsx)(_v91.default, {
          apiUrl: _v33?.apiUrl,
          userConfig: {
            jwt: _v33?.jwt,
            userId: _v33?.user?.id
          },
          templateType: "default",
          onClose: _v4,
          modalConfig: {
            mkcCode: "create-save-video",
            subHeaderText: ""
          },
          tracking: {
            params: {
              feature: "editor",
              location: "bottom_banner",
              page: "editor",
              upsell_name: "editor_general"
            },
            paywallTracking: {
              paywallTrigger: "create_editor_tier_badge_button",
              paywallLocation: "create_editor",
              paywallType: "popup",
              paywallFeature: "general"
            }
          }
        }), _v2 === _v96.UpsellType.PRO && (0, _v7.jsx)(_v111, {
          onDismiss: _v4,
          handleUpgrade: _v0 => {
            _v40(_v42(_v38, "pro") ?? "/upgrade", _v85.UPSELL_PLAN_TYPES.PRO, _v85.UPSELL_PLAN_TYPES.PRO, _v0), _v39.BigPictureClient.sendEvent(new _v39.Event("click_on_upsell", 15, {
              product: "Vimeo Create",
              path: window.location.pathname,
              type: "click",
              device_id: _v23,
              lang: _v22,
              platform: window.navigator.platform,
              user_id: `${_v21 && _v21.id}`,
              layout_id: null,
              vsid: _v7 || null,
              displayed_plan: _v85.UPSELL_PLAN_TYPES.PRO,
              plan: _v85.UPSELL_PLAN_TYPES.PRO,
              duration: _v97.UpsellDuration.YEARLY,
              location: _v13 ?? "",
              flow: _v14 ?? null,
              cta: _v66.default.StartFreeTrial,
              is_trial: _v0,
              test_layout: null,
              trigger_for_upsell: _v15 ?? null,
              is_blocker: _v17 ?? null,
              current_tier: _v34,
              third_party_integration: _v26,
              trigger_capability: _v16 ?? null,
              ..._v97.NON_WEB_FIELDS
            }));
          },
          onContinueAndUpgradeLater: _v8,
          handleUpgradeFlow: (_v0, _v1) => _v40(_v0, _v85.UPSELL_PLAN_TYPES.PRO, _v85.UPSELL_PLAN_TYPES.PRO, _v1),
          ctaLink: _v42(_v38, "pro") ?? "/upgrade",
          title: _v9,
          pageLocation: _v13,
          flow: _v14,
          upsellTrigger: _v15,
          triggerCapability: _v16,
          isBlocker: _v17,
          thirdPartyIntegration: _v26
        }), [_v96.UpsellType.CREATE_QUOTA_NOTIFICATION].includes(_v2) && (0, _v7.jsx)(_v91.default, {
          apiUrl: _v33?.apiUrl,
          userConfig: {
            jwt: _v33?.jwt,
            userId: _v33?.user?.id
          },
          templateType: "default",
          onClose: _v4,
          modalConfig: {
            headerText: (0, _v63.translate)({
              singular: "You’ve reached the video limit",
              dictionary: {
                es: {
                  singular: "Ha alcanzado el límite de videos"
                },
                "de-DE": {
                  singular: "Du hast das Video-Limit erreicht"
                },
                "fr-FR": {
                  singular: "Vous avez atteint la limite vidéo"
                },
                "ja-JP": {
                  singular: "動画の上限に達しました"
                },
                "ko-KR": {
                  singular: "동영상 한도에 도달했습니다"
                },
                "pt-BR": {
                  singular: "Você atingiu o limite de vídeos"
                },
                "zh-CN": {
                  singular: "您已达到视频限制"
                }
              }
            }),
            subHeaderText: (0, _v63.translate)({
              singular: "To get more videos, upgrade your account",
              dictionary: {
                es: {
                  singular: "Para obtener más videos, actualice su cuenta"
                },
                "de-DE": {
                  singular: "Nimm ein Upgrade vor, um weitere Videos hochzuladen"
                },
                "fr-FR": {
                  singular: "Pour obtenir plus de vidéos, mettez votre compte à niveau."
                },
                "ja-JP": {
                  singular: "動画をさらに視聴するには、アカウントをアップグレードしてください"
                },
                "ko-KR": {
                  singular: "더 많은 동영상을 보려면 계정을 업그레이드하세요"
                },
                "pt-BR": {
                  singular: "Para ter direito a mais vídeos, faça upgrade da sua conta"
                },
                "zh-CN": {
                  singular: "要上传更多视频，请升级您的账户"
                }
              }
            }),
            mkcCode: "create-at-limit"
          },
          tracking: {
            params: {
              feature: "quota",
              location: "main_area",
              page: "editor",
              upsell_name: "at_limit_quota_create_enter_editor"
            },
            paywallTracking: {
              paywallTrigger: "create_editor_quota_limit_button",
              paywallLocation: "create_editor",
              paywallType: "popup",
              paywallFeature: "quota"
            }
          }
        })]
      }), _v39 && _v21 && (0, _v7.jsx)(_v91.default, {
        apiUrl: _v33?.apiUrl,
        userConfig: {
          jwt: _v33?.jwt,
          userId: _v33?.user?.id
        },
        templateType: "default",
        onClose: _v4,
        modalConfig: {
          mkcCode: "create-save-video"
        },
        tracking: {
          params: {
            feature: "quota",
            location: "main_area",
            page: "editor",
            upsell_name: "at_limit_quota_create_save"
          },
          paywallTracking: {
            paywallTrigger: "create_editor_save_blocking_button",
            paywallLocation: "create_editor",
            paywallType: "popup",
            paywallFeature: "quota"
          }
        }
      })]
    });
  }
  var _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0);
  let _v141 = () => Error("Not implemented");
  (_v3 = {})[_v3.Click = 0] = "Click", _v3[_v3.Event = 1] = "Event", _v3[_v3.Impression = 2] = "Impression", _v3[_v3.PageView = 3] = "PageView";
  let _v142 = _v8.default.createContext({
    trackFAEvent: _v141,
    trackBPEvent: _v141
  });
  function _v143({
    children: _v0
  }) {
    let {
      thirdPartyIntegration: _v1
    } = (0, _v8.useContext)(_v99.ConfigContext);
    return (0, _v7.jsx)(_v142.Provider, {
      value: {
        trackFAEvent: (_v0, _v1) => {
          let _v2;
          switch (_v2 = _v1 && void 0 != _v1.keyword ? JSON.stringify({
            ...JSON.parse(_v1.keyword),
            third_party_integration: _v1
          }) : JSON.stringify({
            third_party_integration: _v1
          }), _v0) {
            case 0:
              _v140.FatalAttraction.trackClick({
                ..._v1,
                keyword: _v2
              });
              break;
            case 1:
              _v140.FatalAttraction.trackEvent({
                ..._v1,
                keyword: _v2
              });
              break;
            case 2:
              _v140.FatalAttraction.trackImpression({
                ..._v1,
                keyword: _v2
              });
              break;
            case 3:
              _v140.FatalAttraction.trackPageView();
          }
        },
        trackBPEvent: (_v0, _v1, _v2) => {
          _v39.BigPictureClient.sendEvent(new _v39.Event(_v0, _v1, {
            ..._v2,
            third_party_integration: _v1
          }));
        }
      },
      children: _v0
    });
  }
  var _v144 = _v0.i(0),
    _v145 = _v0.i(0);
  _v0.i(0);
  var _v146 = _v0.i(0),
    _v147 = _v0.i(0);
  _v0.i(0);
  var _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0),
    _v173 = _v0.i(0);
  let _v174 = {
      direction: "column",
      position: "fixed",
      right: "0",
      top: "0",
      align: "center",
      justify: "center",
      margin: "0",
      bg: "color-mix(in srgb, var(--vimeo-colors-vimeoBlue-600) 50%, transparent)",
      backdropFilter: "blur(var(--vimeo-blur-md))",
      border: "4px solid",
      borderColor: "vimeoBlue.400",
      pointerEvents: "none",
      zIndex: 0,
      sx: {
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        },
        animation: "fadeIn 300ms ease-in-out"
      }
    },
    _v175 = (0, _v8.memo)(({
      children: _v0
    }) => {
      let _v1 = (0, _v168.useAppDispatch)(),
        _v2 = (0, _v168.useAppSelector)(_v167.videoSessionIdSelector),
        _v3 = (0, _v8.useContext)(_v161.FlowHooksContext),
        [_v4, _v5] = (0, _v8.useState)(!1),
        {
          initialUploadLocalMediaFile: _v6,
          initialUploadLocalSoundFile: _v7
        } = (0, _v163.useLocalFile)(),
        {
          alertFileTooSmall: _v8,
          alertUploadFailed: _v9,
          alertUploadVideoLowResolution: _v10,
          alertMusicUploadTerms: _v11
        } = (0, _v162.useAlerts)(),
        {
          notifyMaximumFilesUploadsLimit: _v12
        } = (0, _v164.useNotifications)(),
        _v13 = (0, _v8.useCallback)(() => new Promise(_v0 => _v11({
          onPrimaryClick: _v0.bind(null, {
            agree: !0
          }),
          onSecondaryClick: _v0.bind(null, {
            agree: !1
          })
        })), [_v11]),
        _v14 = (0, _v8.useCallback)(async _v0 => {
          (0, _v172.sendTrackUploadMediaFromComputer)({
            location: "filepicker",
            copy: null,
            element: "drag_and_drop"
          });
          let {
            audioFiles: _v1,
            mediaFile: _v2
          } = [...(_v0.dataTransfer?.files ?? [])].reduce((_v0, _v1) => {
            let _v2 = (0, _v173.getUploadTypeBySupportedExtension)(_v1.name);
            return _v2 === _v171.UploadQueueFileType.VIDEO || _v2 === _v171.UploadQueueFileType.IMAGE ? _v0.mediaFile.push(_v1) : _v2 === _v171.UploadQueueFileType.AUDIO && _v0.audioFiles.push(_v1), _v0;
          }, {
            audioFiles: [],
            mediaFile: []
          });
          if (_v2.length > 0 ? (_v1((0, _v166.updateInspectorDataAction)({
            inspectorType: _v169.InspectorType.MEDIA,
            data: {
              tab: _v169.MediaInspectorTabType.UPLOADS
            }
          })), _v1((0, _v166.openInspectorAction)({
            inspectorType: _v169.InspectorType.MEDIA
          }))) : _v1.length > 0 && (_v1((0, _v166.updateInspectorDataAction)({
            inspectorType: _v169.InspectorType.MUSIC,
            data: {
              tab: _v169.MusicInspectorTabType.UPLOADS
            }
          })), _v1((0, _v166.openInspectorAction)({
            inspectorType: _v169.InspectorType.MUSIC
          }))), _v2.length > 0) for (let _v0 of _v2) _v6(_v0).catch(_v0 => {
            _v0.message === _v159.THE_VIDEO_HAS_UNSUPPORTED_RESOLUTION ? _v10() : _v0.message === _v159.THE_VIDEO_FILE_TOO_SMALL ? _v8() : _v0.message === _v159.THE_MAXIMUM_NUMBER_OF_FILES_REACHED ? _v12(_v3?.showQuotaUpsell) : (_v9(_v0.name), _v165.default.sendLog(_v160.FAILED_TO_UPLOAD_MEDIA, _v170.LogComponent.EDITOR_UPLOAD_ERROR, {
              fileName: _v0.name,
              vsid: _v2,
              error: _v0.message
            }));
          });
          if (_v1.length > 0) {
            let {
              agree: _v0
            } = await _v13();
            if (_v0) for (let _v0 of _v1) _v7(_v0).catch(_v0 => {
              let {
                errcode: _v1,
                error: _v2
              } = _v0.data || {};
              _v9(_v0.name), _v165.default.sendLog(_v160.FAILED_TO_UPLOAD_MUSIC, _v170.LogComponent.EDITOR_UPLOAD_ERROR, {
                fileName: _v0.name,
                vsid: _v2,
                error: _v2,
                errcode: _v1
              });
            });
          }
        }, [_v1, _v6, _v9, _v2, _v10, _v8, _v12, _v3?.showQuotaUpsell, _v13, _v7]),
        _v15 = (0, _v8.useCallback)(() => {
          _v5(!1);
        }, []),
        _v16 = (0, _v8.useCallback)(_v0 => {
          _v0.preventDefault(), _v0.currentTarget.contains(_v0.relatedTarget) || _v15();
        }, [_v15]),
        _v17 = (0, _v8.useCallback)(_v0 => {
          _v0.dataTransfer.types.includes("Files") && _v5(!0);
        }, []),
        _v18 = (0, _v8.useCallback)(_v0 => {
          _v14(_v0), _v15();
        }, [_v14, _v15]);
      return (0, _v7.jsxs)(_v7.Fragment, {
        children: [_v4 && (0, _v7.jsx)(_v75.Flex, {
          ..._v174,
          height: window.innerHeight,
          width: window.innerWidth,
          children: (0, _v7.jsxs)(_v75.Flex, {
            direction: "column",
            width: (0, _v156.rem)(200),
            textAlign: "center",
            align: "center",
            gap: "md",
            children: [(0, _v7.jsx)(_v158.Upload, {
              boxSize: "2xl"
            }), (0, _v7.jsx)(_v157.Text, {
              variant: "heading-md",
              whiteSpace: "break-spaces",
              textAlign: "center",
              children: (0, _v63.translate)({
                singular: "Drag and drop files to upload",
                dictionary: {
                  es: {
                    singular: "Arrastrar y soltar archivos para subirlos"
                  },
                  "de-DE": {
                    singular: "Dateien per Drag-and-Drop hochladen"
                  },
                  "fr-FR": {
                    singular: "Glissez-déposez les fichiers à mettre en ligne"
                  },
                  "ja-JP": {
                    singular: "ファイルをドラッグ＆ドロップしてアップロード"
                  },
                  "ko-KR": {
                    singular: "파일을 끌어서 놓아 업로드하세요."
                  },
                  "pt-BR": {
                    singular: "Arraste e solte arquivos para carregar"
                  },
                  "zh-CN": {
                    singular: "拖放文件以上传"
                  }
                }
              })
            })]
          })
        }), (0, _v7.jsx)(_v155.Dropzone, {
          onDragLeave: _v16,
          onDragOver: _v17,
          onChange: _v18,
          width: "100vw",
          height: "100vh",
          position: "fixed",
          border: "none",
          background: "none",
          opacity: _v4 ? "0.25" : "1",
          children: _v0
        })]
      });
    });
  var _v176 = _v0.i(0);
  let _v177 = (0, _v8.memo)(({
    children: _v0
  }) => (0, _v168.useAppSelector)(_v176.isInteractiveSelector) ? (0, _v7.jsx)(_v7.Fragment, {
    children: _v0
  }) : (0, _v7.jsx)(_v175, {
    children: _v0
  }));
  var _v178 = _v0.i(0),
    _v179 = _v0.i(0),
    _v180 = _v0.i(0),
    _v181 = _v0.i(0),
    _v182 = _v0.i(0);
  let _v183 = () => {
    let _v0 = (0, _v168.useAppSelector)(_v166.inspectorWidthSelector);
    return (0, _v168.useAppSelector)(_v182.isTemplateBeingAddedSelector) ? (0, _v7.jsx)(_v180.ContentLoaderContainer, {
      inspectorWidth: _v0,
      "data-testid": _v181.testIds.contentLoader,
      children: (0, _v7.jsx)(_v179.Spinner, {
        size: "xl"
      })
    }) : null;
  };
  var _v184 = _v0.i(0),
    _v185 = _v0.i(0),
    _v186 = _v0.i(0),
    _v187 = _v0.i(0),
    _v188 = _v0.i(0),
    _v189 = _v0.i(0),
    _v190 = _v0.i(0),
    _v191 = _v0.i(0),
    _v192 = _v0.i(0);
  let _v193 = () => {
    let _v0 = (0, _v168.useAppDispatch)(),
      {
        active: _v1,
        title: _v2,
        content: _v3,
        primaryButtonConfig: _v4,
        secondaryButtonConfig: _v5,
        onDismiss: _v6,
        showX: _v7,
        errorName: _v8,
        errorCode: _v9,
        via: _v10,
        notificationName: _v11,
        showAgainConfig: _v12
      } = (0, _v168.useAppSelector)(_v191.alertSelector),
      _v13 = (0, _v8.useRef)(_v12?.value),
      _v14 = (0, _v8.useCallback)(() => {
        (0, _v192.sendTrackViewEditorNotification)({
          notificationName: _v11,
          mainCta: _v4?.content || null,
          errorCode: _v9 || null,
          errorName: _v8 || null,
          via: _v10 || null,
          isCheckbox: void 0 != _v12
        });
      }, [_v9, _v8, _v11, _v4?.content, _v12, _v10]),
      _v15 = (0, _v8.useCallback)(_v0 => {
        (0, _v192.sendTrackSelectEditorNotificationOption)({
          notificationName: _v11,
          mainCta: _v4?.content || null,
          errorCode: _v9 || null,
          errorName: _v8 || null,
          cta: _v0,
          via: _v10 || null,
          isCheckbox: void 0 != _v12,
          isMarkedCheckbox: _v12 ? !_v12.value : null,
          checkboxName: "dont_show_this_massage_again"
        });
      }, [_v9, _v8, _v11, _v4?.content, _v12, _v10]),
      _v16 = (0, _v8.useCallback)(() => {
        _v15("X"), _v0((0, _v191.hideAlertAction)()), _v6?.();
      }, [_v0, _v6, _v15]),
      _v17 = (0, _v8.useCallback)(() => {
        _v5?.content && _v15(_v5?.content), _v0((0, _v191.hideAlertAction)()), _v5?.onClick();
      }, [_v0, _v5, _v15]),
      _v18 = (0, _v8.useCallback)(() => {
        _v4?.content && _v15(_v4?.content), _v0((0, _v191.hideAlertAction)()), _v4?.onClick();
      }, [_v0, _v4, _v15]),
      _v19 = (0, _v8.useCallback)(() => {
        _v12 && (_v12.toggle(!_v13.current), _v13.current = !_v13.current);
      }, [_v12]);
    return (0, _v8.useEffect)(() => {
      _v1 && _v14();
    }, [_v1, _v14]), (0, _v7.jsxs)(_v76.Modal, {
      isOpen: _v1,
      autoFocus: !1,
      onClose: () => _v7 && _v16(),
      children: [(0, _v7.jsx)(_v80.ModalOverlay, {}), (0, _v7.jsxs)(_v79.ModalContent, {
        "data-testid": "alert-container",
        translate: "no",
        className: "notranslate",
        children: [(0, _v7.jsx)(_v190.ModalHeader, {
          children: (0, _v7.jsx)(_v157.Text, {
            variant: "heading-md",
            "data-testid": "alert-title",
            children: _v2
          })
        }), _v7 && (0, _v7.jsx)(_v78.ModalCloseButton, {
          onClick: _v16
        }), (0, _v7.jsxs)(_v77.ModalBody, {
          children: [_v3, _v12 && (0, _v7.jsx)(_v186.Box, {
            children: (0, _v7.jsx)(_v188.Checkbox, {
              marginTop: "10px",
              onChange: _v19,
              children: (0, _v7.jsx)(_v157.Text, {
                variant: "body-sm",
                children: (0, _v63.translate)({
                  singular: "Don't show this message again",
                  dictionary: {
                    es: {
                      singular: "No volver a mostrar este mensaje"
                    },
                    "de-DE": {
                      singular: "Diese Meldung nicht mehr anzeigen"
                    },
                    "fr-FR": {
                      singular: "Ne plus afficher ce message"
                    },
                    "ja-JP": {
                      singular: "次からはこのメッセージを表示しない"
                    },
                    "ko-KR": {
                      singular: "이 메시지를 다시 표시하지 않습니다."
                    },
                    "pt-BR": {
                      singular: "Não exibir esta mensagem novamente"
                    },
                    "zh-CN": {
                      singular: "不再显示此消息"
                    }
                  }
                })
              })
            })
          })]
        }), (0, _v7.jsxs)(_v189.ModalFooter, {
          children: [_v5 && (0, _v7.jsx)(_v187.Button, {
            variant: "tertiary",
            onClick: _v17,
            minWidth: 96,
            "data-testid": "alert-secondary-button",
            children: _v5.content
          }), _v4 && (0, _v7.jsx)(_v187.Button, {
            variant: "primary",
            onClick: _v18,
            minWidth: 96,
            "data-testid": "alert-primary-button",
            children: _v4.content
          })]
        })]
      })]
    });
  };
  var _v194 = _v0.i(0),
    _v195 = _v0.i(0),
    _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0),
    _v199 = _v0.i(0),
    _v200 = _v0.i(0),
    _v201 = _v0.i(0),
    _v202 = _v0.i(0),
    _v203 = _v0.i(0),
    _v204 = _v0.i(0),
    _v205 = _v0.i(0);
  let _v206 = _v10.default.div.withConfig({
      displayName: "RemoveWatermarkBanner__RemoveWatermarkPopoverTrigger",
      componentId: "sc-a1f58c97-0"
    })`
  position: absolute;
  bottom: 12px;
  left: 50%;
  width: 1px;
  height: 1px;
`,
    _v207 = "none",
    _v208 = () => {
      let _v0 = (0, _v168.useAppSelector)(_v167.videoSessionIdSelector),
        [_v1, _v2] = (0, _v8.useState)(!1),
        _v3 = (0, _v8.useRef)(_v207),
        _v4 = (0, _v8.useContext)(_v161.FlowHooksContext),
        {
          canToggleWatermark: _v5
        } = (0, _v8.useContext)(_v203.LabeledCapabilitiesContext) || {},
        {
          canRemoveCreateWatermark: _v6 = !0
        } = (0, _v8.useContext)(_v204.PermissionsContext),
        _v7 = _v4 && !_v6;
      return (0, _v8.useEffect)(() => {
        _v3.current === _v207 && _v7 && (_v3.current = "initial", _v2(!0), (0, _v205.sendTrackWatermarkBannerImpression)()), _v7 || _v2(!1);
      }, [_v7]), (0, _v7.jsxs)(_v197.Popover, {
        placement: "top",
        isOpen: _v1,
        children: [(0, _v7.jsx)(_v201.Portal, {
          children: (0, _v7.jsx)(_v196.LightMode, {
            children: (0, _v7.jsx)(_v199.PopoverContent, {
              color: "#341070",
              bgColor: "#efeafa",
              fontWeight: "500",
              fontSize: "14",
              borderRadius: 10,
              maxWidth: "100%",
              "data-testid": _v181.testIds.upsellBanner,
              children: (0, _v7.jsxs)(_v194.HStack, {
                spacing: 20,
                paddingLeft: 2,
                height: 30,
                children: [(0, _v7.jsx)(_v198.PopoverBody, {
                  children: (0, _v63.translate)({
                    singular: "Remove Vimeo watermark & unlock top-notch tools.",
                    dictionary: {
                      es: {
                        singular: "Quita la marca de agua de Vimeo y accede a herramientas de primera categoría."
                      },
                      "de-DE": {
                        singular: "Vimeo-Wasserzeichen entfernen und erweiterte Tools freischalten"
                      },
                      "fr-FR": {
                        singular: "Supprimez le filigrane Vimeo et débloquez des outils performants."
                      },
                      "ja-JP": {
                        singular: "Vimeoのウォーターマークを削除して、トップクラスのツールを活用しましょう。"
                      },
                      "ko-KR": {
                        singular: "Vimeo 워터마크를 제거하고 최고의 도구를 사용하세요."
                      },
                      "pt-BR": {
                        singular: "Remova a marca d'água do Vimeo e desbloqueie ferramentas de alto nível."
                      },
                      "zh-CN": {
                        singular: "移除 Vimeo 水印并解锁顶级工具。"
                      }
                    }
                  })
                }), (0, _v7.jsx)(_v186.Box, {
                  borderRadius: "5px",
                  as: "button",
                  backgroundColor: "#8a5ee8",
                  fontSize: "12px",
                  padding: "3px 9px 3px 9px",
                  color: "white",
                  fontWeight: "bold",
                  onClick: () => {
                    let _v0;
                    (0, _v205.sendTrackWatermarkBannerTrigger)(), _v5?.tier && (_v0 = _v5.tier), _v0 && _v4?.onSelectWatermarkBannerUpgrade({
                      vsid: _v0,
                      tier: _v0.name
                    });
                  },
                  "data-testid": _v181.testIds.upsellBannerUpgradeButton,
                  children: (0, _v63.translate)({
                    singular: "Upgrade",
                    dictionary: {
                      es: {
                        singular: "Actualizar"
                      },
                      "de-DE": {
                        singular: "Upgraden"
                      },
                      "fr-FR": {
                        singular: "Mettre à niveau"
                      },
                      "ja-JP": {
                        singular: "アップグレード"
                      },
                      "ko-KR": {
                        singular: "업그레이드"
                      },
                      "zh-CN": {
                        singular: "升级"
                      }
                    }
                  })
                }), (0, _v7.jsx)(_v195.IconButton, {
                  "aria-label": "Dismiss",
                  backgroundColor: "transparent",
                  variant: "transparent xs",
                  icon: (0, _v7.jsx)(_v202.CloseX, {}),
                  onClick: () => _v2(!1),
                  "data-testid": _v181.testIds.upsellBannerCloseButton
                })]
              })
            })
          })
        }), (0, _v7.jsx)(_v200.PopoverTrigger, {
          children: (0, _v7.jsx)(_v206, {})
        })]
      });
    };
  var _v209 = _v0.i(0),
    _v210 = _v0.i(0),
    _v211 = _v0.i(0),
    _v212 = _v0.i(0),
    _v213 = _v0.i(0),
    _v214 = _v0.i(0),
    _v215 = _v0.i(0),
    _v216 = _v0.i(0),
    _v217 = _v0.i(0),
    _v218 = _v0.i(0),
    _v219 = _v0.i(0),
    _v220 = _v0.i(0),
    _v221 = _v0.i(0),
    _v222 = _v0.i(0),
    _v223 = _v0.i(0),
    _v224 = _v0.i(0),
    _v225 = _v0.i(0),
    _v226 = _v0.i(0),
    _v227 = _v0.i(0),
    _v228 = _v0.i(0),
    _v229 = _v0.i(0),
    _v230 = _v0.i(0);
  let _v231 = _v10.default.div.withConfig({
      displayName: "UploadRow.style__Container",
      componentId: "sc-e02bf5a6-0"
    })`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 346px;
`,
    _v232 = _v10.default.div.withConfig({
      displayName: "UploadRow.style__ThumbnailWrapper",
      componentId: "sc-e02bf5a6-1"
    })`
  video,
  img,
  div {
    max-width: ${48}px;
    max-height: ${36}px;
    border-radius: 2px;
  }
`,
    _v233 = _v10.default.div.withConfig({
      displayName: "UploadRow.style__RowContent",
      componentId: "sc-e02bf5a6-2"
    })`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-right: 6px;
  overflow: hidden;
`;
  _v10.default.div.withConfig({
    displayName: "UploadRow.style__ErrorIcon",
    componentId: "sc-e02bf5a6-3"
  })`
  transform: rotate(180deg);
`;
  var _v234 = _v0.i(0),
    _v235 = _v0.i(0),
    _v236 = _v0.i(0),
    _v237 = _v0.i(0);
  let _v238 = ({
    uploadingItem: _v0,
    allElements: _v1
  }) => {
    let {
        scrollToLayerOrElementById: _v2,
        animateSeek: _v3
      } = (0, _v185.useTimelineContext)(),
      {
        retryUploadLocalMediaFile: _v4,
        deleteFailedLocalMediaFile: _v5
      } = (0, _v163.useLocalFile)(),
      _v6 = _v0.status === _v234.STATUS.PROGRESS,
      _v7 = _v0.status === _v234.STATUS.ERROR,
      {
        data: _v8
      } = _v0,
      _v9 = (0, _v8.useMemo)(() => {
        let _v0 = _v1.filter(_v0 => (0, _v235.isMediaElement)(_v0) && _v0.sourceHash === _v0.sourceHash).sort((_v0, _v1) => _v0.compositionTiming.start - _v1.compositionTiming.start);
        return 0 === _v0.length ? null : _v0[0];
      }, [_v1, _v0.sourceHash]);
    return (0, _v7.jsxs)(_v231, {
      "data-testid": (_v6 ? "uploading" : "failed") + "-uploads-modal-row",
      children: [(0, _v7.jsx)(_v232, {
        "data-testid": "uploads-modal-row-thumbnail",
        children: (0, _v236.isMediaUploadItem)(_v0) ? (0, _v236.isVideoUploadItem)(_v0.data) ? (0, _v7.jsxs)(_v186.Box, {
          position: "relative",
          children: [(0, _v7.jsx)("video", {
            src: _v8.url,
            crossOrigin: "anonymous"
          }), _v7 && (0, _v7.jsx)(_v237.Overlay, {
            icon: (0, _v7.jsx)(_v227.CircleExclamationFilled, {
              boxSize: "2xs",
              color: "status-destructive-primary"
            }),
            dataTestId: "failure",
            backgroundColor: "var(--vimeo-colors-fill-page-overlay)"
          })]
        }) : (0, _v7.jsx)("img", {
          src: _v8.url,
          alt: _v8.name,
          crossOrigin: "anonymous"
        }) : (0, _v7.jsx)(_v211.Center, {
          bg: "stroke",
          width: 48,
          height: 36,
          children: (0, _v7.jsx)(_v230.Music, {
            boxSize: "2xs"
          })
        })
      }), (0, _v7.jsxs)(_v233, {
        children: [(0, _v7.jsx)(_v157.Text, {
          variant: "heading-xs",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          "data-testid": "uploads-modal-row-title",
          children: _v0.data.name
        }), _v6 && (0, _v7.jsx)(_v157.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: (0, _v63.translate)({
            singular: "Uploading...",
            dictionary: {
              es: {
                singular: "Subiendo..."
              },
              "de-DE": {
                singular: "Hochladevorgang läuft ..."
              },
              "fr-FR": {
                singular: "Transfert..."
              },
              "ja-JP": {
                singular: "アップロード中..."
              },
              "ko-KR": {
                singular: "업로드 중..."
              },
              "pt-BR": {
                singular: "Carregando..."
              },
              "zh-CN": {
                singular: "正在上传..."
              }
            }
          })
        }), _v7 && (0, _v7.jsxs)(_v75.Flex, {
          gap: "3px",
          alignItems: "center",
          children: [(0, _v7.jsx)(_v157.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: (0, _v63.translate)({
              singular: "Failed to upload.",
              dictionary: {
                es: {
                  singular: "No se pudo subir."
                },
                "de-DE": {
                  singular: "Hochladen fehlgeschlagen."
                },
                "fr-FR": {
                  singular: "Échec de la mise en ligne."
                },
                "ja-JP": {
                  singular: "アップロードに失敗しました。"
                },
                "ko-KR": {
                  singular: "업로드에 실패했습니다."
                },
                "pt-BR": {
                  singular: "Falha ao carregar."
                },
                "zh-CN": {
                  singular: "上传失败。"
                }
              }
            })
          }), _v9 && (0, _v7.jsx)(_v228.Link, {
            variant: "inline-secondary",
            fontSize: "12",
            cursor: "pointer",
            onClick: () => {
              if ((0, _v192.sendTrackFindInTimeline)(), !_v9) throw Error(_v159.ELEMENT_NOT_IN_TIMELINE);
              _v2(_v9.id), _v3(_v9.compositionTiming.start, !0);
            },
            "data-testid": "find-in-timeline",
            children: (0, _v63.translate)({
              singular: "Find in timeline",
              dictionary: {
                es: {
                  singular: "Buscar en la línea de tiempo"
                },
                "de-DE": {
                  singular: "In der Chronik finden"
                },
                "fr-FR": {
                  singular: "Rechercher dans la timeline"
                },
                "ja-JP": {
                  singular: "タイムラインで検索"
                },
                "ko-KR": {
                  singular: "타임라인에서 찾기"
                },
                "pt-BR": {
                  singular: "Encontrar na linha do tempo"
                },
                "zh-CN": {
                  singular: "在时间线中查找"
                }
              }
            })
          })]
        })]
      }), _v6 && (0, _v7.jsx)(_v179.Spinner, {
        size: "sm"
      }), _v7 && ((0, _v236.isMediaUploadItem)(_v0) ? (0, _v7.jsxs)(_v75.Flex, {
        gap: "4px",
        children: [(0, _v7.jsx)(_v212.Tooltip, {
          label: (0, _v63.translate)({
            singular: "Remove",
            dictionary: {
              es: {
                singular: "Eliminar"
              },
              "de-DE": {
                singular: "Entfernen"
              },
              "fr-FR": {
                singular: "Supprimer"
              },
              "ja-JP": {
                singular: "削除"
              },
              "ko-KR": {
                singular: "제거"
              },
              "pt-BR": {
                singular: "Remover"
              },
              "zh-CN": {
                singular: "移除"
              }
            }
          }),
          placement: "top",
          children: (0, _v7.jsx)(_v195.IconButton, {
            "aria-label": "close icon button",
            icon: (0, _v7.jsx)(_v229.CloseXSmall, {}),
            size: "xs",
            variant: "tertiary",
            onClick: () => _v5(_v0)
          })
        }), (0, _v7.jsx)(_v187.Button, {
          "aria-label": "retry button",
          size: "xs",
          variant: "secondary",
          onClick: () => _v4(_v0),
          children: (0, _v63.translate)({
            singular: "Retry",
            dictionary: {
              es: {
                singular: "Reintentar"
              },
              "de-DE": {
                singular: "Neuer Versuch"
              },
              "fr-FR": {
                singular: "Réessayer"
              },
              "ja-JP": {
                singular: "再試行"
              },
              "ko-KR": {
                singular: "재시도"
              },
              "pt-BR": {
                singular: "TENTAR NOVAMENTE"
              },
              "zh-CN": {
                singular: "重试"
              }
            }
          })
        })]
      }) : (0, _v7.jsx)(_v212.Tooltip, {
        label: "File could not be uploaded",
        placement: "top",
        children: (0, _v7.jsx)("span", {
          children: (0, _v7.jsx)(_v227.CircleExclamationFilled, {
            boxSize: "xs",
            color: "status-destructive-primary"
          })
        })
      }))]
    });
  };
  var _v239 = _v0.i(0);
  let _v240 = () => {
    let _v0 = (0, _v168.useAppSelector)(_v167.allElementsSelector),
      _v1 = (0, _v168.useAppSelector)(_v239.loadingMediaSelector),
      _v2 = (0, _v168.useAppSelector)(_v239.loadingSoundSelector),
      _v3 = (0, _v8.useMemo)(() => [..._v1, ..._v2].filter(_v0 => _v0.status !== _v234.STATUS.DONE), [_v1, _v2]),
      _v4 = _v3.length,
      _v5 = _v3.filter(_v0 => _v0.status === _v234.STATUS.ERROR).length,
      _v6 = _v3.filter(_v0 => _v0.status === _v234.STATUS.PROGRESS).length,
      _v7 = _v5 > 0;
    return 0 === _v4 ? null : (0, _v7.jsx)(_v75.Flex, {
      position: "relative",
      zIndex: 40,
      gap: "4px",
      children: (0, _v7.jsxs)(_v197.Popover, {
        placement: "bottom-start",
        trigger: "hover",
        children: [(0, _v7.jsx)(_v200.PopoverTrigger, {
          children: (0, _v7.jsxs)(_v194.HStack, {
            "data-testid": "uploads-modal-trigger",
            gap: "4px",
            cursor: "pointer",
            children: [(0, _v7.jsx)(_v158.Upload, {
              color: "text-secondary"
            }), _v7 && (0, _v7.jsx)(_v186.Box, {
              position: "absolute",
              left: "10px",
              bottom: "10px",
              children: (0, _v7.jsx)(_v227.CircleExclamationFilled, {
                boxSize: "2xs",
                color: "status-destructive-primary",
                style: {
                  border: "2px solid #000000",
                  borderRadius: "50%"
                }
              })
            }), (0, _v7.jsx)(_v226.Paragraph, {
              size: "md",
              color: "text-secondary",
              children: _v7 && _v6 > 0 ? (0, _v7.jsx)(_v7.Fragment, {
                children: (0, _v63.translate)({
                  singular: "{ERRORS_AMOUNT}/{TOTAL_UPLOADS} uploads failed",
                  replacements: {
                    ERRORS_AMOUNT: _v5,
                    TOTAL_UPLOADS: _v4
                  },
                  dictionary: {
                    es: {
                      singular: "Error en {ERRORS_AMOUNT}/{TOTAL_UPLOADS} subidas"
                    },
                    "de-DE": {
                      singular: "{ERRORS_AMOUNT}/{TOTAL_UPLOADS} Uploads sind fehlgeschlagen"
                    },
                    "fr-FR": {
                      singular: "La mise en ligne de {ERRORS_AMOUNT}/{TOTAL_UPLOADS} a échoué"
                    },
                    "ja-JP": {
                      singular: "{ERRORS_AMOUNT}/{TOTAL_UPLOADS}件のアップロードに失敗しました"
                    },
                    "ko-KR": {
                      singular: "총 {TOTAL_UPLOADS}개 중 {ERRORS_AMOUNT}개 업로드 실패"
                    },
                    "pt-BR": {
                      singular: "Falha em {ERRORS_AMOUNT}/{TOTAL_UPLOADS} carregamentos"
                    },
                    "zh-CN": {
                      singular: "{ERRORS_AMOUNT}/{TOTAL_UPLOADS} 个上传失败"
                    }
                  }
                })
              }) : _v7 ? (0, _v7.jsx)(_v7.Fragment, {
                children: (0, _v63.translate)({
                  singular: "{ERRORS_AMOUNT} upload failed",
                  plural: "{ERRORS_AMOUNT} uploads failed",
                  replacements: {
                    ERRORS_AMOUNT: _v5
                  },
                  dictionary: {
                    es: {
                      singular: "Error en {ERRORS_AMOUNT} subida",
                      plural: "Error en {ERRORS_AMOUNT} subidas"
                    },
                    "de-DE": {
                      singular: "{ERRORS_AMOUNT} Upload ist fehlgeschlagen",
                      plural: "{ERRORS_AMOUNT} Uploads fehlgeschlagen"
                    },
                    "fr-FR": {
                      singular: "{ERRORS_AMOUNT} échec de mise en ligne",
                      plural: "{ERRORS_AMOUNT} échecs de mise en ligne"
                    },
                    "ja-JP": {
                      singular: "{ERRORS_AMOUNT}件のアップロードに失敗しました",
                      plural: "{ERRORS_AMOUNT}件のアップロードに失敗しました"
                    },
                    "ko-KR": {
                      singular: "{ERRORS_AMOUNT}개 업로드 실패",
                      plural: "{ERRORS_AMOUNT}개 업로드 실패"
                    },
                    "pt-BR": {
                      singular: "Falha em {ERRORS_AMOUNT} carregamento",
                      plural: "Falha em {ERRORS_AMOUNT} carregamentos"
                    },
                    "zh-CN": {
                      singular: "{ERRORS_AMOUNT} 上传失败",
                      plural: "{ERRORS_AMOUNT} 上传失败"
                    }
                  }
                })
              }) : (0, _v7.jsx)(_v7.Fragment, {
                children: (0, _v63.translate)({
                  singular: "Uploading {TOTAL_UPLOADS} file",
                  plural: "Uploading {TOTAL_UPLOADS} files",
                  count: _v4,
                  replacements: {
                    TOTAL_UPLOADS: _v4
                  },
                  dictionary: {
                    es: {
                      singular: "Subiendo {TOTAL_UPLOADS} archivo",
                      plural: "Subiendo {TOTAL_UPLOADS} archivos"
                    },
                    "de-DE": {
                      singular: "{TOTAL_UPLOADS} Datei hochladen",
                      plural: "Hochladen von {TOTAL_UPLOADS} Dateien"
                    },
                    "fr-FR": {
                      singular: "Mise en ligne de {TOTAL_UPLOADS} fichier en cours",
                      plural: "Mise en ligne de {TOTAL_UPLOADS} fichiers en cours"
                    },
                    "ja-JP": {
                      singular: "{TOTAL_UPLOADS}件のファイルをアップロード中",
                      plural: "{TOTAL_UPLOADS}件のファイルをアップロード中"
                    },
                    "ko-KR": {
                      singular: "파일 {TOTAL_UPLOADS}개 업로드 중",
                      plural: "파일 {TOTAL_UPLOADS}개 업로드 중"
                    },
                    "pt-BR": {
                      singular: "Carregamento de {TOTAL_UPLOADS} arquivo",
                      plural: "Carregamento de {TOTAL_UPLOADS} arquivos"
                    },
                    "zh-CN": {
                      singular: "正在上传 {TOTAL_UPLOADS} 个文件",
                      plural: "正在上传 {TOTAL_UPLOADS} 个文件"
                    }
                  }
                })
              })
            })]
          })
        }), (0, _v7.jsx)(_v199.PopoverContent, {
          p: "12px",
          gap: 2,
          zIndex: 0,
          children: _v3.map(_v0 => (0, _v7.jsx)(_v238, {
            uploadingItem: _v0,
            allElements: _v0
          }, _v0.id))
        })]
      })
    });
  };
  var _v241 = _v0.i(0),
    _v242 = _v0.i(0),
    _v243 = _v0.i(0);
  let _v244 = ({
    isEditingOverlay: _v0,
    isSaveOrExitEditorDisabled: _v1,
    onBackButtonClick: _v2
  }) => {
    let _v3 = (0, _v168.useAppSelector)(_v222.hasUnsavedOverlayChangesSelector),
      {
        alertDiscardOverlayChanges: _v4
      } = (0, _v162.useAlerts)(),
      {
        closeOverlayEditor: _v5
      } = (0, _v243.useInteractiveOverlay)();
    return (0, _v7.jsx)(_v195.IconButton, {
      icon: (0, _v7.jsx)(_v241.ArrowLeft, {}),
      "aria-label": "back",
      variant: "secondary",
      onClick: () => {
        _v2 ? _v2(!0, _v242.PRODUCT.EDITOR) : _v0 ? _v3 ? _v4(_v5) : _v5({
          saveChanges: !1
        }) : window.history.back();
      },
      "data-testid": "editor-back-button",
      isDisabled: _v1
    });
  };
  var _v245 = _v0.i(0),
    _v246 = _v0.i(0),
    _v247 = _v0.i(0),
    _v248 = _v0.i(0),
    _v249 = _v0.i(0),
    _v250 = _v0.i(0),
    _v251 = _v0.i(0),
    _v252 = _v0.i(0),
    _v253 = _v0.i(0),
    _v254 = _v0.i(0),
    _v255 = _v0.i(0),
    _v256 = _v0.i(0),
    _v257 = _v0.i(0);
  async function _v258(_v0, {
    signal: _v1
  }) {
    let _v2 = {
        storyboard: (0, _v255.lowerCaseUnderscore)((0, _v256.prepareInteractiveStoryboardForSave)(_v0, _v254.default.originalStoryboard))
      },
      _v3 = (0, _v257.getVimeoVideoId)(),
      _v4 = `https://${_v253.default.vimeoApiUrl}/videos/${_v3}/storyboards/${_v0.id}/viddata/preview`,
      _v5 = await fetch(_v4, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `jwt ${_v253.default.jwt}`
        },
        body: JSON.stringify(_v2),
        signal: _v1
      }),
      _v6 = await _v5.json();
    if (_v1.aborted) throw _v1.reason;
    return _v6;
  }
  let _v259 = {
    fragments: [],
    markers: 1
  };
  var _v260 = _v0.i(0),
    _v261 = _v0.i(0),
    _v262 = _v0.i(0),
    _v263 = _v0.i(0);
  let _v264 = (0, _v156.rem)(16),
    _v265 = "85vw",
    _v266 = "85vh",
    _v267 = (_v0, _v1) => {
      (0, _v192.sendTrackPlayPauseVideo)({
        totalDuration: _v0.duration,
        action: _v1 ? "pause" : "play",
        via: "preview",
        feature: "preview",
        editorFeature: "preview",
        product: "simplified_interactive"
      });
    },
    _v268 = {
      title: 0,
      byline: 0,
      portrait: 0,
      like: 0,
      watch_later: 0,
      share: 0,
      embed: 0,
      fullscreen: 0,
      logo: 0,
      volume: 1,
      custom_logo: null
    },
    _v269 = ({
      clipConfigUrl: _v0,
      clipId: _v1,
      createInteractiveEmbedConfig: _v2,
      interactiveEmbedConfig: _v3,
      style: _v4,
      onReady: _v5
    }) => {
      let _v6 = (0, _v8.useRef)(null),
        _v7 = (0, _v8.useRef)(!1),
        {
          player: _v8
        } = (0, _v250.usePlayer)(_v6, _v1, !0, _v0, !0);
      return (0, _v8.useEffect)(() => {
        !_v0 || !_v2 || _v8?.ready && (_v7.current || (_v8.ready().then(() => {
          _v8.addEventListener("pause", () => _v267(_v8, !0)), _v8.addEventListener("play", () => _v267(_v8, !1)), _v8._setEmbedSettings(_v268), _v8._setCreateInteractive(_v2, _v3), _v5();
        }), _v7.current = !0));
      }, [_v0, _v2, _v3, _v8, _v8?.ready, _v5]), (0, _v7.jsx)("div", {
        className: "player js-player",
        ref: _v6,
        style: _v4
      });
    },
    _v270 = ({
      closePreview: _v0
    }) => {
      let {
          clipId: _v1,
          clipConfigUrl: _v2
        } = function () {
          let _v0 = (0, _v257.getMandatoryVimeoVideoId)(),
            {
              data: _v1
            } = (0, _v260.useGetVideo)({
              where: {
                videoId: _v0
              },
              select: ["embedPlayerConfigUrl"]
            });
          return {
            clipId: _v0,
            clipConfigUrl: _v1?.embedPlayerConfigUrl ?? null
          };
        }(),
        _v3 = function () {
          let [_v0, _v1] = (0, _v8.useState)(),
            _v2 = (0, _v168.useAppSelector)(_v167.storyboardSelector);
          return (0, _v8.useEffect)(function () {
            let _v0 = new AbortController();
            return _v258(_v2, {
              signal: _v0.signal
            }).then(_v0 => {
              _v1({
                interactive: _v259,
                createInteractive: {
                  has_create_interactive: !0,
                  viddata_url: (0, _v257.JSONtoBlobURL)(_v0)
                }
              });
            }), () => {
              _v0.abort("effect teardown");
            };
          }, [_v2]), _v0;
        }(),
        [_v4, _v5] = (0, _v8.useState)(!0),
        _v6 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        _v7 = `calc(${_v265} * ${_v272(_v6, "height")})`;
      return (0, _v7.jsxs)(_v76.Modal, {
        isOpen: !0,
        onClose: _v245.default,
        children: [(0, _v7.jsx)(_v80.ModalOverlay, {
          backdropFilter: "blur(var(--vimeo-blur-md))"
        }), (0, _v7.jsxs)(_v79.ModalContent, {
          width: _v265,
          maxWidth: `calc(${_v266} * ${_v272(_v6, "width")})`,
          height: _v7,
          maxHeight: _v266,
          overflow: "hidden",
          borderRadius: "sm",
          children: [(0, _v7.jsxs)(_v77.ModalBody, {
            position: "relative",
            overflow: "hidden",
            padding: "0",
            borderRadius: "sm",
            children: [_v4 && (0, _v7.jsx)(_v263.Loader, {
              backgroundColor: "transparent",
              size: "xl"
            }), _v2 && _v3 && (0, _v7.jsx)(_v269, {
              clipId: _v1,
              clipConfigUrl: _v2,
              createInteractiveEmbedConfig: _v3.createInteractive,
              interactiveEmbedConfig: _v3.interactive,
              style: {
                height: _v7,
                visibility: _v4 ? "hidden" : void 0
              },
              onReady: () => _v5(!1)
            })]
          }), (0, _v7.jsx)(_v246.CloseButton, {
            "aria-label": (0, _v63.translate)({
              singular: "Close preview modal",
              dictionary: {
                es: {
                  singular: "Cerrar la ventana de vista previa"
                },
                "de-DE": {
                  singular: "Vorschau-Modal schließen"
                },
                "fr-FR": {
                  singular: "Fermer le modal d'aperçu"
                },
                "ja-JP": {
                  singular: "プレビューモーダルを閉じる"
                },
                "ko-KR": {
                  singular: "미리보기 모달 닫기"
                },
                "pt-BR": {
                  singular: "Fechar o modal de visualização prévia"
                },
                "zh-CN": {
                  singular: "关闭预览模态"
                }
              }
            }),
            variant: "blur",
            size: "lg",
            position: "fixed",
            top: _v264,
            right: _v264,
            onClick: _v0
          })]
        })]
      });
    },
    _v271 = (0, _v8.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v168.useAppSelector)(_v261.openModalIdSelector),
        _v3 = (0, _v168.useAppDispatch)(),
        {
          pause: _v4
        } = (0, _v252.useDragonfly)(),
        _v5 = _v251.MODAL_IDS.interactivePreview,
        _v6 = () => {
          _v3((0, _v261.setOpenModalIdAction)(""));
        };
      return ((0, _v8.useImperativeHandle)(_v1, () => ({
        open: () => {
          _v4(), _v3((0, _v261.setOpenModalIdAction)(_v5)), (0, _v192.sendTrackPreviewEditor)();
        },
        close: () => _v6()
      })), _v2 !== _v5) ? null : (0, _v7.jsx)(_v248.PlayerContextProvider, {
        assetUrls: (0, _v247.getPlayerAssetUrls)(),
        type: _v249.PlayerType.VimeoPlayer,
        children: (0, _v7.jsx)(_v270, {
          closePreview: _v6
        })
      });
    }),
    _v272 = (_v0, _v1) => {
      let _v2 = _v262.OrientationRatio[_v0];
      return "width" === _v1 ? _v2 : 1 / _v2;
    };
  var _v273 = _v0.i(0),
    _v274 = _v0.i(0),
    _v275 = _v0.i(0),
    _v276 = _v0.i(0),
    _v277 = _v0.i(0),
    _v278 = _v0.i(0),
    _v279 = _v0.i(0);
  let _v280 = `
    Changing this feature requires reload.
    All unsaved changes (if any) will be lost.
    Do you want to continue?
`,
    _v281 = "vimeo-editor-feature-flags";
  var _v282 = _v0.i(0),
    _v283 = _v0.i(0);
  let _v284 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v217.useIsStaff)(),
        _v2 = (0, _v8.useCallback)((_v0, _v1, _v2 = !0) => {
          let _v3 = JSON.parse(sessionStorage.getItem(_v281) || "{}");
          _v2 && sessionStorage.setItem(_v281, JSON.stringify({
            ..._v3,
            [_v0]: _v1
          })), _v0((0, _v176.setFeatureFlagValueAction)({
            featureFlag: _v0,
            value: _v1
          }));
        }, [_v0]);
      return {
        initFeatureFlags: (0, _v8.useCallback)(async _v0 => {
          let _v1 = JSON.parse(sessionStorage.getItem(_v281) || "{}"),
            _v2 = {},
            _v3 = new URLSearchParams(window.location.search);
          for (let _v0 in _v282.FeatureFlags) {
            let _v0 = _v3.get(_v282.FeatureFlags[_v0]);
            ("true" === _v0 || "false" === _v0) && (_v2[_v282.FeatureFlags[_v0]] = "true" === _v0);
          }
          let _v4 = {
            ..._v1,
            ...(_v1 && _v2)
          };
          sessionStorage.setItem(_v281, JSON.stringify(_v4));
          let _v5 = {
              ..._v0,
              ..._v4
            },
            _v6 = [],
            _v7 = Object.values(_v282.FeatureFlags);
          Object.keys(_v5).forEach(_v0 => {
            (0, _v283.isValueInArray)(_v0, _v7) && _v6.push({
              featureFlag: _v0,
              value: _v5[_v0]
            });
          }), _v0((0, _v176.initFeatureFlagsAction)(_v6));
        }, [_v0, _v1]),
        setFeatureFlagValue: _v2
      };
    },
    _v285 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsx)("svg", {
      ref: _v1,
      ..._v0,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.95631 2.04396C9.48446 1.88249 10.0435 2.17974 10.205 2.70789L10.9346 5.09431C11.2804 5.03234 11.6364 5 12 5C12.3645 5 12.7214 5.0325 13.0679 5.09475L13.7976 2.70789C13.9591 2.17974 14.5182 1.88249 15.0463 2.04396C15.5745 2.20543 15.8717 2.76448 15.7102 3.29264L14.9514 5.77486C16.0767 6.41188 16.9759 7.40195 17.4984 8.59461L19.4789 7.67106C19.9795 7.43766 20.5745 7.65421 20.8079 8.15475C21.0413 8.65529 20.8247 9.25027 20.3242 9.48368L17.9851 10.5744C17.995 10.715 18 10.8569 18 11V12H20.9953C21.5475 12 21.9953 12.4477 21.9953 13C21.9953 13.5523 21.5475 14 20.9953 14H18V15C18 15.1431 17.995 15.285 17.9851 15.4256L20.3242 16.5163C20.8247 16.7497 21.0413 17.3447 20.8079 17.8452C20.5745 18.3458 19.9795 18.5623 19.4789 18.3289L17.4984 17.4054C16.5713 19.5216 14.4583 21 12 21C9.54099 21 7.42748 19.5207 6.5008 17.4036L4.51631 18.3289C4.01577 18.5623 3.42079 18.3458 3.18739 17.8452C2.95398 17.3447 3.17054 16.7497 3.67108 16.5163L6.01471 15.4235C6.00496 15.2836 6 15.1424 6 15V14H3C2.44772 14 2 13.5523 2 13C2 12.4477 2.44772 12 3 12H6V11C6 10.8576 6.00496 10.7164 6.01471 10.5765L3.67109 9.48368C3.17055 9.25027 2.95399 8.65529 3.1874 8.15475C3.4208 7.65421 4.01578 7.43766 4.51632 7.67106L6.50081 8.59644C7.02353 7.40218 7.92389 6.41089 9.05088 5.77359L8.29237 3.29264C8.1309 2.76448 8.42815 2.20543 8.95631 2.04396ZM16 15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15V11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11V15Z",
        fill: "currentcolor"
      })
    })),
    _v286 = () => {
      let _v0 = (0, _v168.useAppSelector)(_v176.featureFlagsSelector),
        _v1 = (0, _v168.useAppSelector)(_v167.videoSessionIdSelector),
        {
          setFeatureFlagValue: _v2
        } = _v284(),
        _v3 = (0, _v8.useCallback)((_v0, _v1 = !1, _v2) => {
          _v1 ? window.confirm(_v280) && (_v2(_v0, _v2), window.location.reload()) : _v2(_v0, _v2);
        }, [_v2]),
        _v4 = _v0 => {
          let _v1 = `/admin/${_v0}`,
            _v2 = "vimeo.com" === window.location.host ? "https://admin.create.vimeo.com" : "https://stage.test.magisto.com";
          return `${_v2}${_v1}`;
        },
        _v5 = Object.entries(_v0).filter(([, {
          value: _v0
        }]) => _v0).map(([_v0]) => _v0);
      return (0, _v7.jsxs)(_v273.Menu, {
        closeOnSelect: !1,
        children: [(0, _v7.jsx)(_v274.MenuButton, {
          as: _v195.IconButton,
          icon: (0, _v7.jsx)(_v285, {}),
          size: "md",
          variant: "secondary"
        }), (0, _v7.jsxs)(_v278.MenuList, {
          children: [(0, _v7.jsx)(_v276.MenuItem, {
            children: (0, _v7.jsx)(_v228.Link, {
              href: window.location.href.replace("edit", "customize"),
              rel: "noopener noreferrer",
              children: (0, _v7.jsx)(_v157.Text, {
                variant: "body-md",
                children: "Open in Editor 1.0"
              })
            })
          }), (0, _v7.jsxs)(_v276.MenuItem, {
            children: [(0, _v7.jsx)(_v157.Text, {
              variant: "body-md",
              marginRight: "4px",
              children: "Admin:"
            }), (0, _v7.jsx)(_v228.Link, {
              href: _v4(`video/videosession/?pk__exact=${_v1}`),
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, _v7.jsx)(_v157.Text, {
                variant: "body-md",
                children: _v1
              })
            })]
          }), (0, _v7.jsxs)(_v276.MenuItem, {
            children: [(0, _v7.jsx)(_v157.Text, {
              variant: "body-md",
              marginRight: "4px",
              children: "Debug Session:"
            }), (0, _v7.jsx)(_v228.Link, {
              href: _v4(`process/debug_session/${_v1}`),
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, _v7.jsx)(_v157.Text, {
                variant: "body-md",
                children: _v1
              })
            })]
          }), (0, _v7.jsx)(_v275.MenuDivider, {}), (0, _v7.jsx)(_v279.MenuOptionGroup, {
            title: "Feature flags",
            type: "checkbox",
            value: _v5,
            children: Object.entries(_v0).map(([_v0, {
              value: _v1,
              displayName: _v2,
              shouldReload: _v3
            }]) => (0, _v7.jsx)(_v277.MenuItemOption, {
              value: _v0,
              paddingLeft: "32px",
              onClick: () => _v3(_v0, _v3, !_v1),
              children: _v2
            }, _v0))
          })]
        })]
      });
    };
  var _v287 = _v0.i(0),
    _v288 = _v0.i(0),
    _v289 = _v0.i(0),
    _v290 = _v0.i(0),
    _v291 = _v0.i(0);
  let _v292 = () => {
      let _v0 = (0, _v219.getTranslations)(),
        _v1 = (0, _v168.useAppDispatch)(),
        _v2 = (0, _v168.useAppSelector)(_v224.getActiveOverlaySelector),
        [_v3, _v4] = (0, _v8.useState)(() => _v0.overlay),
        _v5 = (0, _v8.useMemo)(() => _v2?.name || _v0.overlay, [_v2?.name, _v0.overlay]),
        _v6 = (0, _v8.useCallback)(_v0 => {
          if (!_v0) return void _v4(_v5);
          if (!_v2) throw Error("Can't update overlay name: Overlay not found");
          _v1((0, _v222.updateOverlayNameAction)(_v0));
        }, [_v2, _v1, _v5]);
      return (0, _v8.useEffect)(() => {
        _v4(_v5);
      }, [_v5]), (0, _v7.jsx)(_v291.Input, {
        translate: "no",
        className: "notranslate",
        "data-testid": _v181.testIds.header.interactiveOverlayName,
        backgroundColor: "transparent",
        outline: "none",
        size: "sm",
        onChange: _v0 => _v4(_v0.target.value),
        onBlur: _v0 => _v6(_v0.target.value),
        value: _v3,
        isInvalid: "" === _v3
      });
    },
    _v293 = () => {
      let _v0 = (0, _v219.getTranslations)(),
        _v1 = (0, _v168.useAppSelector)(_v290.folderUriSelector),
        _v2 = (0, _v168.useAppSelector)(_v167.projectNameSelector) || _v0.untitled,
        _v3 = (0, _v168.useAppSelector)(_v222.isEditingInteractiveOverlaySelector),
        [_v4, _v5] = (0, _v289.useGetUserProjectLazy)();
      (0, _v8.useEffect)(() => {
        let _v0 = (0, _v257.getFolderIdFromUri)(_v1);
        _v253.default.teamOwnerId && _v0 && _v4({
          where: {
            userId: _v253.default.teamOwnerId,
            projectId: _v0
          },
          select: ["name"]
        });
      }, [_v1, _v4]);
      let _v6 = _v5?.data,
        _v7 = _v6?.name,
        _v8 = _v1.replace("users", "user").replace("projects", "folder") ?? "#";
      return (0, _v7.jsxs)(_v287.Breadcrumb, {
        children: [_v7 && (0, _v7.jsx)(_v287.BreadcrumbItem, {
          children: (0, _v7.jsx)(_v288.BreadcrumbLink, {
            "data-testid": "video-folder-title",
            href: _v8,
            children: _v7
          })
        }), (0, _v7.jsx)(_v287.BreadcrumbItem, {
          children: (0, _v7.jsx)(_v288.BreadcrumbLink, {
            color: "text-primary",
            _hover: {
              color: "text-primary"
            },
            "data-testid": "video-title",
            children: _v2
          })
        }), _v3 && (0, _v7.jsx)(_v287.BreadcrumbItem, {
          children: (0, _v7.jsx)(_v292, {})
        })]
      });
    };
  var _v294 = _v0.i(0),
    _v295 = _v0.i(0),
    _v296 = _v0.i(0),
    _v297 = _v0.i(0);
  let _v298 = () => {
    let _v0 = (0, _v8.useContext)(_v92.ViewerContext),
      _v1 = _v0?.user?.id || 0,
      _v2 = _v0?.teamUser?.teamId || 0,
      _v3 = `auto-saved-storyboard-${_v1}-${_v2}`,
      [_v4, _v5] = (0, _v297.default)(_v3, null),
      _v6 = (0, _v8.useCallback)(() => _v5(null), [_v5]);
    return {
      savedLocalStoryboardData: _v4,
      setLocalStoryboardData: _v5,
      removeSavedStoryboard: _v6
    };
  };
  var _v299 = _v0.i(0),
    _v300 = _v0.i(0),
    _v301 = _v0.i(0);
  let _v302 = () => {
    let _v0 = (0, _v168.useAppSelector)(_v239.urlMapSelector);
    return {
      resolveStoryboardUrls: (0, _v8.useCallback)(_v0 => {
        let _v1 = [];
        return {
          ..._v0,
          sources: _v0.sources.reduce((_v0, _v1) => {
            if ((0, _v257.isLocalUrl)(_v1.previewUrl)) {
              let _v0 = _v0[_v1.previewUrl];
              _v0 ? _v0.push({
                ..._v1,
                previewUrl: _v0
              }) : _v1.push(_v1.hash);
            } else _v0.push(_v1);
            return _v0;
          }, []),
          ...(_v1.length > 0 && {
            layers: _v0.layers.map(_v0 => ({
              ..._v0,
              composition: _v0.composition.filter(_v0 => !(0, _v235.isMediaElement)(_v0) || !_v1.includes(_v0.sourceHash))
            }))
          })
        };
      }, [_v0])
    };
  };
  var _v303 = _v0.i(0);
  let _v304 = () => {
    let {
      resolveStoryboardUrls: _v0
    } = _v302();
    return {
      validateStoryboard: (0, _v8.useCallback)(_v0 => {
        let _v1 = JSON.parse(JSON.stringify(_v0));
        return _v1.layers.forEach(_v0 => {
          _v0.composition.forEach(_v0 => {
            (0, _v256.isValidRect)(_v0.rect) || (0, _v235.isTransitionElement)(_v0) || _v165.default.sendLog(_v160.INVALID_RECT, _v170.LogComponent.EDITOR_ERROR, {
              storyboardId: _v0.id,
              flow: "save"
            }), (0, _v256.isValidCompositionTiming)(_v0) || (0, _v235.isTransitionElement)(_v0) || _v165.default.sendLog(_v160.TOO_SHORT_COMPOSITION_TIMING, _v170.LogComponent.EDITOR_ERROR, {
              storyboardId: _v0.id,
              flow: "save"
            }), (0, _v256.isNegativeCompositionTiming)(_v0) && _v165.default.sendLog(_v160.INVALID_COMPOSITION_TIMING, _v170.LogComponent.EDITOR_ERROR, {
              storyboardId: _v0.id,
              flow: "save"
            }), ((0, _v235.isSoundElement)(_v0) || (0, _v235.isVideoElement)(_v0)) && !(0, _v256.validateSoundEffects)(_v0) && _v165.default.sendLog(_v160.INVALID_SOUND_EFFECTS_TIMING, _v170.LogComponent.EDITOR_ERROR, {
              storyboardId: _v0.id,
              flow: "save"
            });
          });
        }), (0, _v303.removeStaleCredits)(_v1.layers) && _v165.default.sendLog(_v160.STALE_CREDITS, _v170.LogComponent.EDITOR_ERROR, {
          storyboardId: _v0.id,
          flow: "save"
        }), _v0(_v1);
      }, [_v0])
    };
  };
  var _v305 = _v0.i(0),
    _v306 = _v0.i(0),
    _v307 = _v0.i(0);
  let _v308 = ({
    storyboardFetchResponse: _v0,
    videoHash: _v1,
    isThirdPartyIntegration: _v2
  }) => {
    let _v3 = (0, _v168.useAppDispatch)(),
      _v4 = (0, _v168.useAppSelector)(_v167.storyboardSelector),
      _v5 = (0, _v168.useAppSelector)(_v176.isInteractiveSelector),
      _v6 = (0, _v168.useAppSelector)(_v167.videoSessionIdSelector),
      _v7 = (0, _v168.useAppSelector)(_v0 => _v0.interactiveOverlay),
      _v8 = (0, _v168.useAppSelector)(_v290.folderUriSelector),
      _v9 = (0, _v8.useRef)(null),
      _v10 = (0, _v8.useRef)(!1),
      _v11 = (0, _v8.useRef)(!1),
      _v12 = (0, _v257.getVimeoVideoId)() || _v0?.vimeoVideo?.id || null,
      {
        savedLocalStoryboardData: _v13,
        setLocalStoryboardData: _v14,
        removeSavedStoryboard: _v15
      } = _v298(),
      {
        alertUploadFailed: _v16,
        alertAutoSavedChanges: _v17,
        alertLocalAutoSavedChanges: _v18,
        alertCrossEditingToolAutoSave: _v19
      } = (0, _v162.useAlerts)(),
      {
        validateStoryboard: _v20
      } = _v304(),
      [_v21, {
        isLoading: _v22
      }] = (0, _v296.useSaveStoryboardMutation)(),
      [, {
        isLoading: _v23
      }] = (0, _v296.usePublishInteractiveStoryboardMutation)({
        fixedCacheKey: _v296.SHARED_PUBLISH_INTERACTIVE_KEY
      }),
      [_v24, {
        data: _v25
      }] = (0, _v296.useLazyFetchStoryboardQuery)(),
      {
        loadStoryboard: _v26
      } = (0, _v301.useLoadStoryboard)(),
      {
        resolveStoryboardUrls: _v27
      } = _v302(),
      {
        changeInvalidFonts: _v28
      } = (0, _v300.useFontDeprecation)(),
      [_v29] = (0, _v307.useLazyCreateMediaSourceQuery)(),
      _v30 = _v22 || _v23,
      _v31 = (0, _v8.useCallback)(() => {
        _v10.current = !1;
      }, []),
      _v32 = (0, _v8.useCallback)(({
        storyboard: _v0,
        isAutoSavedVersion: _v1 = !1,
        shouldInitBi: _v2 = !1
      }) => {
        if (_v10.current || !_v0 || !_v0) return;
        let _v3 = _v28(_v0, !0),
          {
            id: _v4,
            videoSessionId: _v5
          } = _v3;
        _v2 && (_v253.default.setVideoHash(_v4), _v306.default.setVideoSessionId(_v5), (0, _v192.sendTrackViewEditor)({
          viewStatus: "enable"
        })), (0, _v192.sendTrackLoadStoryboard)({
          loadedStoryboardId: _v4,
          previousStoryboardId: _v1 ? _v0.storyboard.id : _v4,
          isAutoSavedVersion: _v1
        }), _v26(_v3), _v10.current && _v165.default.sendAction(_v305.RaceCondition, {
          step: "race condition while loading storyboard"
        }), _v10.current = !0, _v253.default.setIsPendoGuideAllowed(!0);
      }, [_v28, _v26, _v0]),
      _v33 = (0, _v8.useCallback)(_v0 => _v0 && "storyboard" in _v0, []),
      _v34 = (0, _v8.useCallback)(_v0 => _v33(_v0) ? _v0.storyboard : _v0, [_v33]),
      _v35 = (0, _v8.useCallback)(async () => {
        if (!_v13) return;
        let _v0 = _v34(_v13);
        _v13.folderUri && _v3((0, _v290.setFolderUriAction)(_v13.folderUri));
        let _v1 = [],
          _v2 = [];
        _v0.layers.flatMap(_v0 => _v0.composition).forEach(_v0 => {
          (0, _v235.isMediaElement)(_v0) ? (0, _v235.isLogo)(_v0) ? _v1.push(_v0.sourceHash) : _v2.push(...(_v0 => {
            let {
              sourceHash: _v1
            } = _v0;
            if ((0, _v235.isImageHotspot)(_v0)) {
              let {
                sourceHash: _v0
              } = _v0.interactiveHotspot.hover;
              if (_v0) return [_v1, _v0];
            }
            return [_v1];
          })(_v0)) : (0, _v235.isSoundElement)(_v0) && _v1.push(_v0.sourceHash);
        });
        let _v3 = (0, _v256.createSourceMap)(_v0.sources),
          _v4 = _v1.filter(_v0 => _v3[_v0]).map(_v0 => _v3[_v0]);
        for (let _v0 of Array.from(new Set(_v2))) if (_v3[_v0]) try {
          let _v0 = (await _v29({
            vsid: _v6,
            fileName: _v3[_v0].name,
            fileSize: _v3[_v0].size,
            isHotspot: !1,
            sourceHash: _v0,
            storyboardId: _v0.id,
            caller: "autosave"
          }).unwrap()).source;
          _v0 && _v4.push(_v0);
        } catch (_v0) {
          _v3[_v0].name && _v16(_v3[_v0].name);
        } else _v165.default.sendAction(_v160.MISSING_SOURCE, {
          step: "load autosaved storyboard",
          status: "missing source",
          hash: _v0
        });
        _v32({
          storyboard: {
            ..._v28(_v0),
            sources: _v4
          },
          shouldInitBi: !0,
          isAutoSavedVersion: !0
        });
      }, [_v13, _v34, _v32, _v28, _v3, _v29, _v6, _v16]),
      _v36 = (0, _v8.useCallback)(() => {
        _v0 && (_v31(), _v32({
          storyboard: _v0.storyboard
        }), _v15());
      }, [_v32, _v15, _v31, _v0]),
      _v37 = (0, _v8.useCallback)(_v0 => {
        _v3((0, _v167.resetStoryboardAction)()), _v24({
          videoHash: _v0,
          isInteractive: _v5,
          useRevision: !0,
          vimeoVideoId: _v12 ? String(_v12) : void 0
        }), _v253.default.setIsPendoGuideAllowed(!0);
      }, [_v3, _v24, _v5, _v12]),
      _v38 = (0, _v8.useCallback)(() => {
        if (_v10.current || _v11.current || !_v0) return;
        let {
          storyboard: _v0,
          lastUserSavedStoryboard: _v1
        } = _v0;
        _v26(_v0), _v11.current = !0, _v17({
          onPrimaryClick: () => _v32({
            storyboard: _v0,
            isAutoSavedVersion: !0,
            shouldInitBi: !0
          }),
          onSecondaryClick: () => {
            _v37(_v1);
          }
        });
      }, [_v0, _v26, _v17, _v32, _v37]),
      _v39 = (0, _v8.useCallback)(() => {
        !_v10.current && !_v11.current && _v13 && _v0 && (_v35(), _v11.current = !0, _v18({
          onPrimaryClick: () => null,
          onSecondaryClick: _v36
        }));
      }, [_v13, _v0, _v18, _v35, _v36]),
      _v40 = (0, _v8.useCallback)(() => {
        if (_v10.current || _v11.current || !_v0) return;
        let {
          storyboard: _v0,
          lastUserSavedStoryboard: _v1
        } = _v0;
        _v26(_v0), _v11.current = !0, _v19({
          onPrimaryClick: () => {
            _v37(_v1);
          },
          onSecondaryClick: () => history.back(),
          isInteractive: _v5
        });
      }, [_v0, _v26, _v19, _v5, _v37]),
      _v41 = (0, _v8.useMemo)(() => {
        if (!_v0) return !1;
        let {
            id: _v0,
            layers: _v1
          } = _v0.storyboard,
          _v2 = 0 === _v1.length,
          _v3 = !!_v1 && _v1 !== _v0 && !_v12,
          _v4 = (0, _v256.isNewStoryboard)(_v0) && (_v2 || _v3) && !_v2;
        return _v253.default.setIsLocalAutoSaveAllowed(_v4), _v4;
      }, [_v2, _v0, _v1, _v12]),
      {
        layers: _v42,
        sources: _v43,
        id: _v44
      } = _v4;
    return (0, _v299.useDebouncedEffect)(() => {
      if (!_v44 || !_v0 || _v253.default.isEditingTeamTemplate || !_v10.current || _v30) return;
      let _v0 = _v5 && 1 === _v42.length,
        _v1 = _v7.isEditingOverlay && _v0;
      if (_v9.current && _v42.some(_v0 => _v0.composition.length)) {
        if (_v41) _v14({
          storyboard: _v27(_v4),
          folderUri: _v8
        });else if (_v12 && !_v1) {
          let _v0 = _v20(_v7?.isEditingOverlay ? (0, _v256.prepareInteractiveOverlayEditorStoryboardForSave)(_v4, _v7) : _v4);
          _v21({
            storyboard: _v5 ? (0, _v256.prepareInteractiveStoryboardForSave)(_v0, _v254.default.originalStoryboard) : _v0,
            vimeoVideoId: _v12,
            isInteractive: _v5
          });
        }
      } else _v9.current = _v0.storyboard;
    }, [_v42, _v43, _v30, _v7], 0), (0, _v8.useEffect)(() => {
      _v25 && _v32({
        storyboard: _v25.storyboard,
        shouldInitBi: !0
      });
    }, [_v32, _v25]), (0, _v8.useMemo)(() => ({
      resetAutoSaveStatus: _v31,
      savedLocalStoryboardData: _v13,
      removeSavedStoryboard: _v15,
      showAutoSaveAlert: _v38,
      showLocalAutoSaveAlert: _v39,
      showCrossEditingToolAlert: _v40,
      loadStoryboardFromResponse: _v32
    }), [_v31, _v13, _v15, _v38, _v39, _v40, _v32]);
  };
  var _v309 = _v0.i(0),
    _v310 = _v0.i(0),
    _v311 = _v0.i(0),
    _v312 = _v0.i(0),
    _v313 = _v0.i(0),
    _v314 = _v0.i(0),
    _v315 = _v0.i(0),
    _v316 = _v0.i(0),
    _v317 = _v0.i(0);
  let _v318 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v9.useHistory)(),
        _v2 = (0, _v168.useAppSelector)(_v167.videoSessionIdSelector),
        _v3 = (0, _v168.useAppSelector)(_v290.folderUriSelector),
        _v4 = (0, _v217.useIsStaff)(),
        _v5 = (0, _v168.useAppSelector)(_v0 => _v0.featureFlags.kiteRender.value) || _v4 || !0,
        _v6 = (0, _v8.useRef)(""),
        [_v7] = (0, _v296.useSaveStoryboardMutation)({
          fixedCacheKey: _v296.SHARED_SAVE_STORYBOARD_KEY
        }),
        [_v8] = (0, _v296.useRenderStoryboardMutation)({
          fixedCacheKey: _v296.SHARED_RENDER_STORYBOARD_KEY
        }),
        {
          alertVideoTooLong: _v9,
          alertFailedToSave: _v10,
          alertConnectivityProblem: _v11,
          alertUnauthorized: _v12,
          alertStoryboardNotFound: _v13,
          alertVideoIsDeleted: _v14
        } = (0, _v162.useAlerts)(),
        {
          updateTotalSavedEdits: _v15
        } = (0, _v309.useEditorCsat)(),
        {
          jwt: _v16
        } = (0, _v152.useGctlConfig)(),
        {
          removeSavedStoryboard: _v17
        } = _v298(),
        {
          validateStoryboard: _v18
        } = _v304(),
        _v19 = (0, _v8.useContext)(_v161.FlowHooksContext),
        _v20 = (0, _v8.useContext)(_v220.PartnershipAppContext),
        {
          canRemoveCreateWatermark: _v21 = !1
        } = (0, _v8.useContext)(_v204.PermissionsContext),
        _v22 = (0, _v8.useCallback)(async (_v0, _v1, _v2, _v3) => {
          if (!window.navigator.onLine) return void _v11({
            onPrimaryClick: _v1
          });
          let _v4 = _v0.data && _v0.data.error_code,
            _v5 = _v0.data?.error;
          if (_v4 === _v312.RESTRICTED_VIDEO_STORAGE_LIMIT_EXCEEDED || _v4 === _v312.UPLOAD_RESTRICTED_STORAGE_LIMIT_EXCEEDED) (0, _v205.sendTrackTriggerQuotaUpsell)(!!_v3), _v19?.showStorageQuotaUpsell ? _v19.showStorageQuotaUpsell() : _v19?.showQuotaUpsell(), (0, _v192.sendTrackViewEditorNotification)({
            notificationName: _v313.notificationName.quoteUpsell,
            mainCta: null,
            errorCode: _v4?.toString() || null,
            errorName: _v0.data?.error || null,
            via: null,
            isCheckbox: null
          });else if (_v4 === _v312.QUOTA_LIMIT || _v4 === _v312.DISK_SIZE_LIMIT || "out of quota" === _v5) (0, _v205.sendTrackTriggerQuotaUpsell)(!!_v3), _v19?.showQuotaUpsell(), (0, _v192.sendTrackViewEditorNotification)({
            notificationName: _v313.notificationName.quoteUpsell,
            mainCta: null,
            errorCode: _v4?.toString() || null,
            errorName: _v0.data?.error || null,
            via: null,
            isCheckbox: null
          });else if (_v4 === _v312.NO_CAPABILITY) _v19?.onBeforeCreate({
            vsid: _v2,
            tier: _v0.data?.tier_name,
            upsellTrigger: "save",
            triggerCapability: "capability",
            pageLocation: "editor_screen"
          }), (0, _v192.sendTrackViewEditorNotification)({
            notificationName: _v313.notificationName.insufficientAccountLevel,
            mainCta: null,
            errorCode: _v4?.toString(),
            errorName: _v0.data?.error || null,
            via: null,
            isCheckbox: null
          });else if (_v4 === _v312.INVALID_STORYBOARD_ID) {
            let _v0,
              _v1 = (_v0 = _v0.data?.error.match(/\b(\w+)$/), _v0?.[0]);
            _v1 && (_v253.default.setVideoHash(_v1), _v0((0, _v167.setStoryboardIdAction)(_v1)), _v2.current = _v1, await _v1());
          } else _v4 === _v312.STORYBOARD_NOT_FOUND ? _v13() : _v0.status === _v312.UNAUTHORIZED ? _v12() : _v0.status === _v312.NOT_FOUND ? _v14() : _v0.status.toString() === _v312.FETCH_ERROR ? _v11({
            onPrimaryClick: _v1
          }) : _v4 === _v312.SESSION_IS_ARCHIVED ? _v14() : _v10(_v0, _v315.default.getState().storyboard);
        }, [_v10, _v11, _v19, _v2, _v0, _v13, _v12, _v14]),
        _v23 = (0, _v8.useCallback)(async _v0 => {
          if ((0, _v317.getDurationFromLayers)(_v315.default.getState().storyboard.layers) > _v314.MAX_VIDEO_DURATION) return void _v9();
          if (!window.navigator.onLine) return void _v11({
            onPrimaryClick: _v23
          });
          let {
              vimeoApiRequestParams: _v1,
              isLocalAutoSaveAllowed: _v2
            } = _v253.default,
            _v3 = (0, _v257.getVimeoVideoId)();
          if (!_v3 && !_v3) try {
            let _v0 = await (0, _v310.postUserProjects)({
              ..._v1,
              headers: {
                Authorization: `jwt ${_v16}`,
                "Content-Type": "application/json"
              },
              where: {
                userId: _v253.default.teamOwnerId || 0
              },
              select: ["uri"],
              variables: {
                name: _v311.DEFAULT_FOLDER_NAME
              }
            });
            _v0((0, _v290.setFolderUriAction)(_v0.uri));
          } catch (_v0) {
            _v165.default.sendLog(_v159.FAILED_TO_CREATE_VIMEO_CREATE_FOLDER, _v170.LogComponent.EDITOR_ERROR, {
              storyboardId: _v315.default.getState().storyboard.id,
              flow: "create folder"
            });
          }
          try {
            let _v0 = _v18(_v315.default.getState().storyboard),
              _v1 = {
                ..._v0,
                ...(_v6.current && {
                  id: _v6.current
                })
              },
              _v2 = await _v7({
                storyboard: _v1,
                vimeoVideoId: _v3,
                isInteractive: !1
              }).unwrap(),
              _v3 = (await _v8({
                storyboardId: _v2.storyboardId,
                userId: _v253.default.teamOwnerId,
                isKiteRender: _v5,
                folderUri: _v3,
                forceCancelWatermark: _v21,
                isNewClip: _v0?.isNewClip,
                title: _v0?.title || _v311.DEFAULT_VIDEO_NAME,
                ...(_v3 && {
                  vimeoVideoId: _v3
                })
              }).unwrap()).vimeoVideoId;
            if (!_v3) return void _v10({
              data: {
                error_code: 0,
                error: _v159.NO_PERMISSIONS_TO_CREATE
              }
            }, _v315.default.getState().storyboard);
            if (_v15(), _v2 && _v17(), _v20?.app) return void (0, _v257.partnerRouteToPreview)(_v2.storyboardId);
            let _v4 = (0, _v316.getMemoryUsage)(_v0);
            _v4 && _v165.default.sendAction(_v305.EditorMemoryUsage, _v4), _v1.push(`${_v295.MANAGE_VIDEO_PATH}${_v3}`);
          } catch (_v0) {
            _v22(_v0, async () => {
              await _v23(_v0);
            }, _v6, _v0?.isNewClip);
          }
        }, [_v3, _v9, _v11, _v16, _v0, _v18, _v7, _v8, _v5, _v15, _v17, _v20?.app, _v21, _v1, _v10, _v22]);
      return {
        saveStoryboard: _v23,
        handleSaveStoryboardError: _v22
      };
    },
    _v319 = "header",
    _v320 = "modal";
  var _v321 = _v0.i(0),
    _v322 = _v0.i(0);
  let _v323 = () => {
    let _v0 = (0, _v168.useAppSelector)(_v224.isLoadingMediaOrApplyingTemplateSelector),
      _v1 = (0, _v168.useAppSelector)(_v239.isLoadingElementInUseSelector),
      _v2 = (0, _v168.useAppSelector)(_v167.durationSelector),
      {
        saveAndPublishInteractiveStoryboard: _v3
      } = (() => {
        let _v0 = (0, _v168.useAppDispatch)(),
          _v1 = (0, _v9.useHistory)(),
          _v2 = (0, _v168.useAppSelector)(_v167.storyboardSelector),
          {
            handleSaveStoryboardError: _v3
          } = _v318(),
          [_v4] = (0, _v296.useSaveStoryboardMutation)({
            fixedCacheKey: _v296.SHARED_SAVE_INTERACTIVE_KEY
          }),
          [_v5] = (0, _v296.usePublishInteractiveStoryboardMutation)({
            fixedCacheKey: _v296.SHARED_PUBLISH_INTERACTIVE_KEY
          }),
          _v6 = (0, _v8.useRef)(""),
          {
            updateTotalSavedEdits: _v7
          } = (0, _v309.useEditorCsat)(),
          {
            removeSavedStoryboard: _v8
          } = _v308({}),
          {
            alertFailedToSave: _v9,
            alertFailedToPublishInteractive: _v10
          } = (0, _v162.useAlerts)(),
          {
            validateStoryboard: _v11
          } = _v304(),
          _v12 = (0, _v8.useCallback)(async () => {
            try {
              let _v0 = _v11(_v2),
                _v1 = {
                  ...(0, _v256.prepareInteractiveStoryboardForSave)(_v0, _v254.default.originalStoryboard),
                  ...(_v6.current && {
                    id: _v6.current
                  })
                },
                _v2 = (0, _v257.getVimeoVideoId)(),
                _v3 = await _v4({
                  storyboard: _v1,
                  vimeoVideoId: _v2,
                  isInteractive: !0
                }).unwrap(),
                _v4 = _v3.storyboardId;
              if (!_v4) return void _v9({
                data: {
                  error_code: 0,
                  error: _v159.NO_PERMISSIONS_TO_CREATE
                }
              }, _v2);
              _v0((0, _v167.setStoryboardIdAction)(_v3.storyboardId)), _v6.current = _v3.storyboardId;
              let _v5 = await _v5({
                vimeoVideoId: _v2,
                storyboardId: _v4
              }).unwrap();
              if (!_v5.vimeoVideoUri) return void _v10();
              _v2 = parseInt(_v5.vimeoVideoUri.split("/")[2], 10), _v7(), _v253.default.isLocalAutoSaveAllowed && _v8(), _v1.push(`${_v295.MANAGE_VIDEO_PATH}${_v2}`);
            } catch (_v0) {
              _v3(_v0, _v12, _v6);
            }
          }, [_v10, _v9, _v0, _v3, _v5, _v8, _v4, _v2, _v1, _v7, _v11]);
        return {
          saveAndPublishInteractiveStoryboard: _v12
        };
      })(),
      _v4 = (0, _v8.useCallback)(async () => {
        (0, _v322.sendTrackSelectSave)({
          copy: _v321.SAVE_COPY.SAVE,
          location: _v319
        }), await _v3();
      }, [_v3]);
    return (0, _v7.jsx)(_v212.Tooltip, {
      label: (0, _v219.getTranslations)().saveWhileLoadingInUse,
      placement: "bottom-end",
      shouldWrapChildren: !0,
      isDisabled: !_v1,
      children: (0, _v7.jsx)(_v187.Button, {
        variant: "primary",
        "data-testid": "header-save-button",
        isDisabled: 0 === _v2 || _v0,
        onClick: _v4,
        children: (0, _v63.translate)({
          singular: "Save",
          dictionary: {
            es: {
              singular: "Guardar"
            },
            "de-DE": {
              singular: "Speichern"
            },
            "fr-FR": {
              singular: "Enregistrer"
            },
            "ja-JP": {
              singular: "保存"
            },
            "ko-KR": {
              singular: "저장"
            },
            "pt-BR": {
              singular: "Salvar"
            },
            "zh-CN": {
              singular: "保存"
            }
          }
        })
      })
    });
  };
  var _v324 = _v0.i(0),
    _v325 = _v0.i(0),
    _v326 = _v0.i(0);
  let _v327 = ({
      text: _v0,
      tooltipText: _v1,
      disabledTooltipText: _v2,
      onClick: _v3,
      isDisabled: _v4 = !1,
      ..._v5
    }) => {
      let _v6 = (0, _v7.jsx)(_v276.MenuItem, {
        onClick: _v3,
        isDisabled: _v4,
        ..._v5,
        children: (0, _v7.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            opacity: _v4 ? .5 : 1
          },
          children: [(0, _v7.jsx)(_v157.Text, {
            variant: "body-md",
            children: _v0
          }), _v1 && !_v4 && (0, _v7.jsx)(_v212.Tooltip, {
            label: _v1,
            children: (0, _v7.jsx)(_v186.Box, {
              children: (0, _v7.jsx)(_v326.CircleInfoSmall, {
                width: "18px",
                height: "18px"
              })
            })
          })]
        })
      });
      return _v4 && _v2 ? (0, _v7.jsx)(_v212.Tooltip, {
        label: _v2,
        placement: "left",
        children: (0, _v7.jsx)("div", {
          children: _v6
        })
      }) : _v6;
    },
    _v328 = _v10.default.div.withConfig({
      displayName: "SaveOptions.style__SaveButtonWithOptions",
      componentId: "sc-d5c866d9-0"
    })`
  display: flex;
  gap: 1px;
`;
  var _v329 = _v0.i(0),
    _v330 = _v0.i(0),
    _v331 = _v0.i(0),
    _v332 = _v0.i(0),
    _v333 = _v0.i(0);
  let _v334 = ({
      navigateToTeamTemplates: _v0
    }) => {
      let _v1 = (0, _v168.useAppDispatch)(),
        _v2 = (0, _v168.useAppSelector)(_v167.storyboardSelector),
        [_v3, _v4] = (0, _v8.useState)(_v2.projectName || "Untitled template"),
        [_v5, {
          isError: _v6
        }] = (0, _v329.useSaveTemplateMutation)(),
        _v7 = () => {
          (0, _v322.sendTrackSelectSaveAsModal)({
            copy: _v321.SAVE_COPY.SAVE_AS_NEW_TEMPLATE
          }), _v1((0, _v294.setIsShowTeamTemplatesModalAction)(!1));
        },
        _v8 = async () => {
          (0, _v322.sendTrackSelectSave)({
            copy: _v321.SAVE_COPY.SAVE_AS_NEW_TEMPLATE,
            location: _v320
          }), _v1((0, _v294.setIsTeamTemplateDoneSavingAction)(!1)), await _v5({
            templateName: _v3,
            storyboard: _v2
          }).unwrap().then(() => {
            _v1((0, _v294.setIsTeamTemplateDoneSavingAction)(!0)), _v1((0, _v294.setIsShowTeamTemplatesModalAction)(!1)), _v0();
          });
        };
      return (0, _v8.useEffect)(() => {
        _v6 && _v1((0, _v294.setIsTeamTemplateDoneSavingAction)(!0));
      }, [_v1, _v6]), (0, _v8.useEffect)(() => {
        (0, _v322.sendTrackViewSaveAsModal)({
          copy: _v321.SAVE_COPY.SAVE_AS_NEW_TEMPLATE
        });
      }, []), (0, _v7.jsxs)(_v76.Modal, {
        isOpen: !0,
        onClose: _v7,
        "data-testid": _v181.testIds.saveAsTeamTemplate.modal,
        children: [(0, _v7.jsx)(_v80.ModalOverlay, {}), (0, _v7.jsxs)(_v79.ModalContent, {
          translate: "no",
          className: "notranslate",
          children: [(0, _v7.jsx)(_v190.ModalHeader, {
            children: _v6 ? (0, _v63.translate)({
              singular: "There was a problem saving this template",
              dictionary: {
                es: {
                  singular: "Hubo un problema al guardar esta plantilla"
                },
                "de-DE": {
                  singular: "Beim Speichern dieser Vorlage ist ein Problem aufgetreten."
                },
                "fr-FR": {
                  singular: "Un problème s'est produit lors de l'enregistrement de ce modèle"
                },
                "ja-JP": {
                  singular: "このテンプレートの保存中に問題が発生しました"
                },
                "ko-KR": {
                  singular: "이 템플릿을 저장하는 중에 문제가 발생했습니다."
                },
                "pt-BR": {
                  singular: "Houve um problema ao salvar este modelo"
                },
                "zh-CN": {
                  singular: "保存此模板时出现问题"
                }
              }
            }) : (0, _v63.translate)({
              singular: "Save a new team template",
              dictionary: {
                es: {
                  singular: "Guardar una nueva plantilla de equipo"
                },
                "de-DE": {
                  singular: "Neue Teamvorlage speichern"
                },
                "fr-FR": {
                  singular: "Enregistrer un nouveau modèle d'équipe"
                },
                "ja-JP": {
                  singular: "新しいチームテンプレートを保存"
                },
                "ko-KR": {
                  singular: "새로운 팀 템플릿을 저장하세요."
                },
                "pt-BR": {
                  singular: "Salvar um modelo de equipe novo"
                },
                "zh-CN": {
                  singular: "保存新团队模板"
                }
              }
            })
          }), !_v6 && (0, _v7.jsxs)(_v77.ModalBody, {
            children: [(0, _v7.jsx)(_v226.Paragraph, {
              size: "md",
              children: (0, _v63.translate)({
                singular: "Your team members can use it to create new videos.",
                dictionary: {
                  es: {
                    singular: "Los miembros de su equipo pueden usarla para crear nuevos videos."
                  },
                  "de-DE": {
                    singular: "Deine Teammitglieder können sie verwenden, um neue Videos zu erstellen."
                  },
                  "fr-FR": {
                    singular: "Les membres de votre équipe peuvent s'en servir pour créer de nouvelles vidéos."
                  },
                  "ja-JP": {
                    singular: "チームメンバーはこれを使用して新しい動画を作成できます。"
                  },
                  "ko-KR": {
                    singular: "팀원은 이 템플릿을 사용하여 새 동영상을 만들 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "As pessoas integrantes da equipe podem usá-lo para criar vídeos novos."
                  },
                  "zh-CN": {
                    singular: "您的团队成员可以使用此模板创建新视频。"
                  }
                }
              })
            }), (0, _v7.jsxs)(_v332.FormControl, {
              marginTop: "sm",
              pos: "relative",
              children: [(0, _v7.jsx)(_v333.FormLabel, {
                size: "sm",
                children: (0, _v63.translate)({
                  singular: "Template name",
                  dictionary: {
                    es: {
                      singular: "Nombre de la plantilla"
                    },
                    "de-DE": {
                      singular: "Name der Vorlage"
                    },
                    "fr-FR": {
                      singular: "Nom du modèle"
                    },
                    "ja-JP": {
                      singular: "テンプレート名"
                    },
                    "ko-KR": {
                      singular: "템플릿 이름"
                    },
                    "pt-BR": {
                      singular: "Nome do modelo"
                    },
                    "zh-CN": {
                      singular: "模板名称"
                    }
                  }
                })
              }), (0, _v7.jsx)(_v291.Input, {
                translate: "no",
                className: "notranslate",
                placeholder: (0, _v63.translate)({
                  singular: "e.g. Custom template",
                  dictionary: {
                    es: {
                      singular: "P. ej., Plantilla personalizada"
                    },
                    "de-DE": {
                      singular: "z. B. Benutzerdefinierte Vorlage"
                    },
                    "fr-FR": {
                      singular: "p. ex. Modèle personnalisé"
                    },
                    "ja-JP": {
                      singular: "例：カスタムテンプレート"
                    },
                    "ko-KR": {
                      singular: "예: 템플릿 커스텀"
                    },
                    "pt-BR": {
                      singular: "p.ex. Modelo customizado"
                    },
                    "zh-CN": {
                      singular: "例如自定义模板"
                    }
                  }
                }),
                maxLength: 100,
                value: _v3,
                onChange: _v0 => _v4(_v0.target.value),
                "data-testid": _v181.testIds.saveAsTeamTemplate.input
              })]
            })]
          }), (0, _v7.jsxs)(_v189.ModalFooter, {
            children: [(0, _v7.jsx)(_v187.Button, {
              onClick: _v7,
              variant: "secondary",
              "data-testid": _v181.testIds.saveAsTeamTemplate.cancelButton,
              children: (0, _v63.translate)({
                singular: "Cancel",
                dictionary: {
                  es: {
                    singular: "Cancelar"
                  },
                  "de-DE": {
                    singular: "Abbrechen"
                  },
                  "fr-FR": {
                    singular: "Annuler"
                  },
                  "ja-JP": {
                    singular: "キャンセル"
                  },
                  "ko-KR": {
                    singular: "취소"
                  },
                  "pt-BR": {
                    singular: "Cancelar"
                  },
                  "zh-CN": {
                    singular: "取消"
                  }
                }
              })
            }), (0, _v7.jsx)(_v187.Button, {
              isDisabled: !_v3.trim(),
              onClick: _v8,
              variant: "primary",
              "data-testid": _v6 ? _v181.testIds.saveAsTeamTemplate.tryagainButton : _v181.testIds.saveAsTeamTemplate.submitButton,
              children: _v6 ? (0, _v63.translate)({
                singular: "Try again",
                dictionary: {
                  es: {
                    singular: "Intentar de nuevo"
                  },
                  "de-DE": {
                    singular: "Nochmal versuchen"
                  },
                  "fr-FR": {
                    singular: "Veuillez réessayer"
                  },
                  "ja-JP": {
                    singular: "再試行してください"
                  },
                  "ko-KR": {
                    singular: "다시 시도하세요"
                  },
                  "pt-BR": {
                    singular: "Tente de novo"
                  },
                  "zh-CN": {
                    singular: "再试一次"
                  }
                }
              }) : (0, _v63.translate)({
                singular: "Save template",
                dictionary: {
                  es: {
                    singular: "Guardar plantilla"
                  },
                  "de-DE": {
                    singular: "Vorlage speichern"
                  },
                  "fr-FR": {
                    singular: "Enregistrer le modèle"
                  },
                  "ja-JP": {
                    singular: "テンプレートを保存"
                  },
                  "ko-KR": {
                    singular: "템플릿 저장"
                  },
                  "pt-BR": {
                    singular: "Salvar modelo"
                  },
                  "zh-CN": {
                    singular: "保存模板"
                  }
                }
              })
            })]
          })]
        })]
      });
    },
    _v335 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v168.useAppSelector)(_v167.storyboardIdSelector),
        {
          trackEditorSaved: _v2
        } = (0, _v325.useEditorTracking)(),
        _v3 = (0, _v168.useAppSelector)(_v167.isElementsLoadingSelector),
        _v4 = (0, _v168.useAppSelector)(_v239.isLoadingElementInUseSelector),
        _v5 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        _v6 = [_v331.Orientation.LANDSCAPE, _v331.Orientation.SQUARE, _v331.Orientation.PORTRAIT].includes(_v5),
        _v7 = (0, _v168.useAppSelector)(_v182.isTemplateBeingAddedSelector),
        _v8 = (0, _v168.useAppSelector)(_v0 => !!_v0.history.undoSnapshots.length),
        _v9 = (0, _v168.useAppSelector)(_v294.editedTeamTemplateHashSelector),
        _v10 = (0, _v168.useAppSelector)(_v167.projectNameSelector),
        _v11 = (0, _v168.useAppSelector)(_v167.someLayersHaveCompositionSelector),
        _v12 = (0, _v168.useAppSelector)(_v330.isUploadsInProgressSelector),
        _v13 = (0, _v168.useAppSelector)(_v0 => _v0.teamTemplates.isShowTeamTemplatesModal),
        {
          exitEditTeamTemplateMode: _v14
        } = (0, _v221.useEditTeamTemplate)(),
        {
          hasCreateTeamTemplateEdit: _v15
        } = (0, _v8.useContext)(_v204.PermissionsContext),
        {
          saveStoryboard: _v16
        } = _v318(),
        {
          alertSaveAs: _v17
        } = (0, _v162.useAlerts)(),
        [_v18] = (0, _v329.useSaveTemplateMutation)(),
        _v19 = (0, _v8.useContext)(_v220.PartnershipAppContext),
        _v20 = _v15 && !_v253.default.isEditingTeamTemplate && !_v19?.app,
        _v21 = _v253.default.isSaveAsAllowed && !_v253.default.isEditingTeamTemplate,
        _v22 = !_v11,
        _v23 = (0, _v8.useRef)(""),
        _v24 = "" !== _v10 ? _v10 : _v311.DEFAULT_VIDEO_NAME,
        _v25 = (0, _v8.useCallback)(() => {
          _v0((0, _v166.openInspectorAction)({
            inspectorType: _v169.InspectorType.TEMPLATES
          })), _v0((0, _v166.updateInspectorDataAction)({
            inspectorType: _v169.InspectorType.TEMPLATES,
            data: {
              tab: _v169.TemplatesInspectorTabType.TEAM
            }
          }));
        }, [_v0]),
        _v26 = (0, _v8.useCallback)(async ({
          copy: _v0,
          location: _v1,
          isNewClip: _v2,
          title: _v3
        }) => {
          _v253.default.isEditingTeamTemplate ? await _v18({
            templateName: _v24.trim(),
            storyboard: _v315.default.getState().storyboard,
            hash: _v9,
            saveAsTeamTemplateFlag: 0
          }).unwrap().then(() => {
            _v25(), _v14();
          }) : ((0, _v322.sendTrackSelectSave)({
            copy: _v0,
            location: _v1
          }), _v2({
            editorSessionId: _v1
          }), await _v16({
            isNewClip: _v2,
            title: _v3
          }));
        }, [_v9, _v14, _v25, _v16, _v18, _v24, _v1, _v2]);
      return (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsxs)(_v328, {
          "data-testid": "header-save-menu-with-options",
          children: [(0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v219.getTranslations)().saveWhileLoadingInUse,
            placement: "bottom-end",
            shouldWrapChildren: !0,
            isDisabled: !_v4,
            children: (0, _v7.jsx)(_v187.Button, {
              variant: "primary",
              "data-testid": "header-save-button",
              isDisabled: _v22 || _v4 || _v3 || _v7 || _v12 || _v253.default.isEditingTeamTemplate && !_v8,
              onClick: () => {
                let _v0 = !(0, _v257.getVimeoVideoId)() && (!_v253.default.hasBeenRendered || _v253.default.isTemplate);
                _v26({
                  copy: _v321.SAVE_COPY.SAVE,
                  location: _v319,
                  isNewClip: _v0
                });
              },
              ...((_v20 || _v21) && {
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0"
              }),
              children: _v15 && _v253.default.isEditingTeamTemplate ? (0, _v63.translate)({
                singular: "Save changes",
                dictionary: {
                  es: {
                    singular: "Guardar cambios"
                  },
                  "de-DE": {
                    singular: "Änderungen speichern"
                  },
                  "fr-FR": {
                    singular: "Enregistrer les modifications"
                  },
                  "ja-JP": {
                    singular: "変更を保存"
                  },
                  "ko-KR": {
                    singular: "변경 사항 저장"
                  },
                  "pt-BR": {
                    singular: "Salvar alterações"
                  },
                  "zh-CN": {
                    singular: "保存更改"
                  }
                }
              }) : (0, _v63.translate)({
                singular: "Save",
                dictionary: {
                  es: {
                    singular: "Guardar"
                  },
                  "de-DE": {
                    singular: "Speichern"
                  },
                  "fr-FR": {
                    singular: "Enregistrer"
                  },
                  "ja-JP": {
                    singular: "保存"
                  },
                  "ko-KR": {
                    singular: "저장"
                  },
                  "pt-BR": {
                    singular: "Salvar"
                  },
                  "zh-CN": {
                    singular: "保存"
                  }
                }
              })
            })
          }), (_v20 || _v21) && (0, _v7.jsxs)(_v273.Menu, {
            children: [(0, _v7.jsx)(_v212.Tooltip, {
              label: (0, _v219.getTranslations)().moreSavingOptions,
              placement: "bottom-end",
              children: (0, _v7.jsx)(_v274.MenuButton, {
                as: _v195.IconButton,
                variant: "primary",
                "data-testid": "header-save-button",
                isDisabled: _v22 || _v3 || _v4,
                icon: (0, _v7.jsx)(_v324.ChevronDownSmall, {}),
                onClick: _v322.sendTrackSelectSaveDropdown,
                borderBottomLeftRadius: "0 !important",
                borderTopLeftRadius: "0 !important"
              })
            }), (0, _v7.jsxs)(_v278.MenuList, {
              children: [_v21 && (0, _v7.jsx)(_v327, {
                "data-testid": "header-save-as-button",
                text: (0, _v63.translate)({
                  singular: "Save as new video",
                  dictionary: {
                    es: {
                      singular: "Guardar como video nuevo"
                    },
                    "de-DE": {
                      singular: "Als neues Video speichern"
                    },
                    "fr-FR": {
                      singular: "Enregistrer en tant que nouvelle vidéo"
                    },
                    "ja-JP": {
                      singular: "新しい動画として保存"
                    },
                    "ko-KR": {
                      singular: "새 동영상으로 저장"
                    },
                    "pt-BR": {
                      singular: "Salvar como novo vídeo"
                    },
                    "zh-CN": {
                      singular: "另存为新视频"
                    }
                  }
                }),
                onClick: () => {
                  (0, _v322.sendTrackSelectSaveAs)({
                    copy: _v321.SAVE_COPY.SAVE_AS_NEW_VIDEO
                  }), _v17({
                    inputValue: _v24 + " (Copy)",
                    onPrimaryClick: () => {
                      _v26({
                        copy: _v321.SAVE_COPY.SAVE_AS_NEW_VIDEO,
                        location: _v320,
                        isNewClip: !0,
                        title: _v23.current
                      });
                    },
                    onInputChange: _v0 => {
                      _v23.current = _v0;
                    },
                    onCancel: () => {
                      (0, _v322.sendTrackSelectSaveAsModal)({
                        copy: _v321.SAVE_COPY.SAVE_AS_NEW_VIDEO
                      }), _v23.current = "";
                    }
                  });
                }
              }), _v20 && (0, _v7.jsx)(_v327, {
                "data-testid": "header-save-as-new-template-button",
                text: (0, _v63.translate)({
                  singular: "Save as new template",
                  dictionary: {
                    es: {
                      singular: "Guardar como nueva plantilla"
                    },
                    "de-DE": {
                      singular: "Als neue Vorlage speichern"
                    },
                    "fr-FR": {
                      singular: "Enregistrer en tant que nouveau modèle"
                    },
                    "ja-JP": {
                      singular: "新しいテンプレートとして保存"
                    },
                    "ko-KR": {
                      singular: "새 템플릿으로 저장"
                    },
                    "pt-BR": {
                      singular: "Salvar como modelo novo"
                    },
                    "zh-CN": {
                      singular: "另存为新模板"
                    }
                  }
                }),
                tooltipText: (0, _v63.translate)({
                  singular: "Team templates can be used by everyone on your team",
                  dictionary: {
                    es: {
                      singular: "Las plantillas del equipo pueden ser utilizadas por todos los miembros del equipo"
                    },
                    "de-DE": {
                      singular: "Teamvorlagen können von jedem in deinem Team verwendet werden"
                    },
                    "fr-FR": {
                      singular: "Les modèles d'équipe peuvent être utilisés par tous les collaborateurs."
                    },
                    "ja-JP": {
                      singular: "チームテンプレートはチームの全員が使用できます"
                    },
                    "ko-KR": {
                      singular: "팀 템플릿은 팀의 모든 사람이 사용할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Os modelos de equipe podem ser usados por todos em sua equipe"
                    },
                    "zh-CN": {
                      singular: "团队模板可供团队中的每个人使用"
                    }
                  }
                }),
                disabledTooltipText: (0, _v63.translate)({
                  singular: "Not supported for this aspect ratio",
                  dictionary: {
                    es: {
                      singular: "No se admite para esta relación de aspecto"
                    },
                    "de-DE": {
                      singular: "Wird für dieses Seitenverhältnis nicht unterstützt"
                    },
                    "fr-FR": {
                      singular: "Non pris en charge pour ce format d'image"
                    },
                    "ja-JP": {
                      singular: "このアスペクト比には対応していません"
                    },
                    "ko-KR": {
                      singular: "이 종횡비에서는 지원되지 않습니다."
                    },
                    "pt-BR": {
                      singular: "Não compatível com esta proporção de tela"
                    },
                    "zh-CN": {
                      singular: "不支持此宽高比"
                    }
                  }
                }),
                isDisabled: !_v6,
                onClick: () => {
                  (0, _v322.sendTrackSelectSaveAs)({
                    copy: _v321.SAVE_COPY.SAVE_AS_NEW_TEMPLATE
                  }), _v0((0, _v294.setIsShowTeamTemplatesModalAction)(!0));
                }
              })]
            })]
          })]
        }), _v13 && (0, _v7.jsx)(_v334, {
          navigateToTeamTemplates: _v25
        })]
      });
    };
  var _v336 = _v0.i(0),
    _v337 = _v0.i(0),
    _v338 = _v0.i(0),
    _v339 = _v0.i(0),
    _v340 = _v0.i(0),
    _v341 = _v0.i(0),
    _v342 = _v0.i(0),
    _v343 = _v0.i(0),
    _v344 = _v0.i(0);
  let _v345 = ({
    setThumbnailId: _v0
  }) => {
    let {
        alertFailedToUploadOverlayThumbnail: _v1
      } = (0, _v162.useAlerts)(),
      [_v2, _v3] = (0, _v8.useState)(null),
      [_v4, _v5] = (0, _v8.useState)(!1),
      [_v6] = (0, _v344.useGetOverlayThumbnailUploadLinkMutation)(),
      _v7 = async _v0 => {
        let _v1 = _v0.target.files ? _v0.target.files[0] : null;
        if (_v1) {
          _v5(!0);
          try {
            let _v0 = await _v6().unwrap();
            if (!_v0?.storageObjectId || !_v0?.upload?.uploadLink) {
              let _v0 = "No overlay thumbnail upload link returned.";
              throw console.error(_v0), Error(_v0);
            }
            let _v1 = await fetch(_v0.upload.uploadLink, {
                method: "PUT",
                headers: {
                  "Content-Type": _v1.type
                },
                body: _v1
              }),
              _v2 = await _v1.json();
            if (!_v1.ok || _v2?.Status !== "success") {
              let _v0 = "Upload via upload link failed.";
              throw console.error(_v0), Error(_v0);
            }
            _v0(_v0.storageObjectId), _v3(URL.createObjectURL(_v1));
          } catch (_v0) {
            console.error(_v0?.message ?? _v0), _v1();
          } finally {
            _v5(!1);
          }
        }
      };
    return (0, _v7.jsx)(_v211.Center, {
      width: "100%",
      aspectRatio: 16 / 9,
      children: _v2 ? (0, _v7.jsx)("img", {
        src: _v2,
        alt: "thumbnail",
        width: "100%"
      }) : (0, _v7.jsx)(_v341.FileInput, {
        label: (0, _v7.jsx)(_v212.Tooltip, {
          label: "Upload Overlay Template Thumbnail",
          children: (0, _v7.jsx)(_v211.Center, {
            padding: "xs",
            width: "100%",
            height: "100%",
            backgroundColor: "darkBlueAlpha.200",
            children: (0, _v7.jsx)(_v342.Plus, {})
          })
        }),
        accept: _v343.ALLOWED_THUMBNAIL_IMAGE_FORMATS.join(","),
        onChange: _v7,
        isDisabled: _v4,
        isLoading: _v4,
        variant: "secondary",
        size: "lg",
        sx: {
          padding: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "darkBlueAlpha.200",
          justifyContent: "center"
        }
      })
    });
  };
  var _v346 = _v0.i(0),
    _v347 = _v0.i(0);
  let _v348 = ({
    active: _v0,
    onConfirm: _v1,
    onDismiss: _v2,
    initialTemplateName: _v3,
    overlayId: _v4
  }) => {
    let {
        saveOverlayAsTemplate: _v5
      } = (0, _v346.useOverlayTemplates)(),
      [_v6, _v7] = (0, _v8.useState)(_v3),
      [_v8, _v9] = (0, _v8.useState)((0, _v347.validateTemplateName)(_v6)),
      [_v10, _v11] = (0, _v8.useState)("");
    return (0, _v7.jsxs)(_v76.Modal, {
      isOpen: _v0,
      onClose: _v2,
      children: [(0, _v7.jsx)(_v80.ModalOverlay, {}), (0, _v7.jsxs)(_v79.ModalContent, {
        children: [(0, _v7.jsx)(_v190.ModalHeader, {
          children: (0, _v7.jsx)(_v157.Text, {
            variant: "heading-md",
            children: (0, _v63.translate)({
              singular: "Save overlay as a new system template",
              dictionary: {
                es: {
                  singular: "Guardar la superposición como una nueva plantilla del sistema"
                },
                "de-DE": {
                  singular: "Overlay als neue Systemvorlage speichern"
                },
                "fr-FR": {
                  singular: "Enregistrez la superposition en tant que nouveau modèle système"
                },
                "ja-JP": {
                  singular: "オーバーレイを新しいシステムテンプレートとして保存"
                },
                "ko-KR": {
                  singular: "오버레이를 새 시스템 템플릿으로 저장하기"
                },
                "pt-BR": {
                  singular: "Salvar sobreposição como um novo modelo de sistema"
                },
                "zh-CN": {
                  singular: "将视频叠加保存为新的系统模板"
                }
              }
            })
          })
        }), (0, _v7.jsxs)(_v77.ModalBody, {
          children: [(0, _v7.jsxs)(_v332.FormControl, {
            isInvalid: !_v8,
            children: [(0, _v7.jsx)(_v333.FormLabel, {
              size: "sm",
              fontWeight: "400",
              marginBottom: (0, _v156.rem)(10),
              children: (0, _v63.translate)({
                singular: "Template name",
                dictionary: {
                  es: {
                    singular: "Nombre de la plantilla"
                  },
                  "de-DE": {
                    singular: "Name der Vorlage"
                  },
                  "fr-FR": {
                    singular: "Nom du modèle"
                  },
                  "ja-JP": {
                    singular: "テンプレート名"
                  },
                  "ko-KR": {
                    singular: "템플릿 이름"
                  },
                  "pt-BR": {
                    singular: "Nome do modelo"
                  },
                  "zh-CN": {
                    singular: "模板名称"
                  }
                }
              })
            }), (0, _v7.jsx)(_v291.Input, {
              translate: "no",
              className: "notranslate",
              onChange: _v0 => {
                let _v1 = _v0.target.value;
                _v7(_v1), _v9((0, _v347.validateTemplateName)(_v1));
              },
              autoFocus: !0,
              defaultValue: _v6,
              maxLength: 256
            })]
          }), (0, _v7.jsxs)(_v332.FormControl, {
            marginTop: "md",
            children: [(0, _v7.jsx)(_v333.FormLabel, {
              size: "sm",
              fontWeight: "400",
              marginBottom: (0, _v156.rem)(10),
              children: (0, _v63.translate)({
                singular: "Upload thumbnail",
                dictionary: {
                  es: {
                    singular: "Subir una miniatura"
                  },
                  "de-DE": {
                    singular: "Miniaturansicht hochladen"
                  },
                  "fr-FR": {
                    singular: "Mettre en ligne une vignette"
                  },
                  "ja-JP": {
                    singular: "サムネイルをアップロード"
                  },
                  "ko-KR": {
                    singular: "섬네일 업로드"
                  },
                  "pt-BR": {
                    singular: "Carregar miniatura"
                  },
                  "zh-CN": {
                    singular: "上传缩略图"
                  }
                }
              })
            }), (0, _v7.jsx)(_v345, {
              setThumbnailId: _v0 => _v11(_v0)
            })]
          })]
        }), (0, _v7.jsxs)(_v189.ModalFooter, {
          children: [(0, _v7.jsx)(_v187.Button, {
            variant: "secondary",
            onClick: _v2,
            children: (0, _v63.translate)({
              singular: "Cancel",
              dictionary: {
                es: {
                  singular: "Cancelar"
                },
                "de-DE": {
                  singular: "Abbrechen"
                },
                "fr-FR": {
                  singular: "Annuler"
                },
                "ja-JP": {
                  singular: "キャンセル"
                },
                "ko-KR": {
                  singular: "취소"
                },
                "pt-BR": {
                  singular: "Cancelar"
                },
                "zh-CN": {
                  singular: "取消"
                }
              }
            })
          }), (0, _v7.jsx)(_v187.Button, {
            isDisabled: !_v8,
            variant: "primary",
            onClick: () => {
              _v1(), _v5({
                templateName: _v6,
                overlayId: _v4,
                ...(_v10 && {
                  thumbnailId: _v10
                }),
                isSystem: !0
              });
            },
            children: (0, _v63.translate)({
              singular: "Save template",
              dictionary: {
                es: {
                  singular: "Guardar plantilla"
                },
                "de-DE": {
                  singular: "Vorlage speichern"
                },
                "fr-FR": {
                  singular: "Enregistrer le modèle"
                },
                "ja-JP": {
                  singular: "テンプレートを保存"
                },
                "ko-KR": {
                  singular: "템플릿 저장"
                },
                "pt-BR": {
                  singular: "Salvar modelo"
                },
                "zh-CN": {
                  singular: "保存模板"
                }
              }
            })
          })]
        })]
      })]
    });
  };
  var _v349 = _v0.i(0);
  let _v350 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v219.getTranslations)(),
        _v2 = (0, _v168.useAppSelector)(_v167.storyboardSelector),
        {
          activeOverlayId: _v3,
          activeOverlayName: _v4
        } = (0, _v168.useAppSelector)(_v0 => _v0.interactiveOverlay),
        _v5 = (0, _v168.useAppSelector)(_v261.openModalIdSelector),
        _v6 = (0, _v168.useAppSelector)(_v224.isLoadingMediaOrApplyingTemplateSelector),
        {
          closeOverlayEditor: _v7
        } = (0, _v243.useInteractiveOverlay)(),
        {
          takeScreenshot: _v8
        } = (0, _v338.useStageScreenshot)(),
        {
          hasCreateInteractiveTeamOverlayTemplateCreate: _v9,
          hasCreateSystemTemplate: _v10
        } = (0, _v8.useContext)(_v204.PermissionsContext),
        _v11 = 1 === _v2.layers.length || _v6,
        _v12 = (0, _v8.useMemo)(() => () => _v0((0, _v261.setOpenModalIdAction)("")), [_v0]),
        _v13 = _v9 && _v5 === _v251.MODAL_IDS.saveAsTeamTemplateModal,
        _v14 = _v10 && _v5 === _v251.MODAL_IDS.saveAsSystemTemplateModal;
      return (0, _v7.jsxs)(_v7.Fragment, {
        children: [_v13 && (0, _v7.jsx)(_v349.SaveOverlayAsTeamTemplateModal, {
          active: !0,
          onConfirm: _v12,
          onDismiss: _v12,
          initialTemplateName: _v4,
          overlayId: _v3
        }), _v14 && (0, _v7.jsx)(_v348, {
          active: !0,
          onConfirm: _v12,
          onDismiss: _v12,
          initialTemplateName: _v4,
          overlayId: _v3
        }), (0, _v7.jsxs)(_v336.SplitButton, {
          variant: "primary",
          children: [(0, _v7.jsx)(_v336.SplitButtonPrimary, {
            isDisabled: _v11,
            onClick: () => void ((0, _v340.sendTrackSaveOverlayElement)(), _v0((0, _v339.setOverlayThumbnailObjectUrlAction)({
              overlayId: _v3,
              objectUrl: ""
            })), _v7({
              saveChanges: !0
            }), setTimeout(() => {
              _v8(_v2.layers, _v3);
            }, 0)),
            children: _v1.saveOverlay
          }), (_v9 || _v10) && (0, _v7.jsxs)(_v273.Menu, {
            placement: "bottom",
            children: [(0, _v7.jsx)(_v336.SplitButtonSecondaryMenu, {
              "aria-label": _v1.saveOptionsMenu,
              isDisabled: _v11,
              onClick: _v340.sendTrackOpenSaveOverlayDropdown
            }), (0, _v7.jsxs)(_v278.MenuList, {
              children: [_v9 && (0, _v7.jsx)(_v276.MenuItem, {
                icon: (0, _v7.jsx)(_v337.OverlayTemplate, {}),
                onClick: () => {
                  (0, _v340.sendTrackOverlaySaveAsAction)("header"), _v0((0, _v261.setOpenModalIdAction)(_v251.MODAL_IDS.saveAsTeamTemplateModal));
                },
                children: _v1.saveOverlayAsTemplate
              }), _v10 && (0, _v7.jsx)(_v276.MenuItem, {
                icon: (0, _v7.jsx)(_v337.OverlayTemplate, {}),
                onClick: () => {
                  _v0((0, _v261.setOpenModalIdAction)(_v251.MODAL_IDS.saveAsSystemTemplateModal));
                },
                children: _v1.saveAsSystemTemplate
              })]
            })]
          })]
        })]
      });
    },
    _v351 = ({
      isEditingOverlay: _v0,
      isInteractive: _v1,
      exitEditTeamTemplateMode: _v2
    }) => {
      let _v3 = (0, _v168.useAppSelector)(_v294.editedTeamTemplateHashSelector);
      return _v0 ? (0, _v7.jsx)(_v350, {}) : _v1 ? (0, _v7.jsx)(_v323, {}) : (0, _v7.jsxs)(_v194.HStack, {
        spacing: "8px",
        children: [(_v253.default.isEditingTeamTemplate || _v3) && (0, _v7.jsx)(_v187.Button, {
          variant: "secondary",
          "data-testid": "header-cancel-button",
          onClick: _v2,
          children: (0, _v63.translate)({
            singular: "Cancel",
            dictionary: {
              es: {
                singular: "Cancelar"
              },
              "de-DE": {
                singular: "Abbrechen"
              },
              "fr-FR": {
                singular: "Annuler"
              },
              "ja-JP": {
                singular: "キャンセル"
              },
              "ko-KR": {
                singular: "취소"
              },
              "pt-BR": {
                singular: "Cancelar"
              },
              "zh-CN": {
                singular: "取消"
              }
            }
          })
        }), (0, _v7.jsx)(_v335, {})]
      });
    };
  var _v352 = _v0.i(0),
    _v353 = _v0.i(0);
  let _v354 = "click",
    _v355 = ({
      isClick: _v0,
      isUndo: _v1
    }) => {
      _v306.default.send({
        eventName: "vimeo.undo_redo_action",
        version: -1,
        contexts: {
          ..._v306.default.buildWebContext(),
          ..._v306.default.buildActionContext(_v0 ? "click" : "keyboard_shortcut"),
          ..._v306.default.buildTeamContext(),
          ..._v306.default.buildProductAnalyticsContext({
            feature: "general",
            location: "header",
            copy: _v1 ? "undo" : "redo"
          })
        }
      });
    },
    _v356 = _v0 => {
      let _v1 = (0, _v168.useAppDispatch)(),
        _v2 = _v0 === _v354;
      return {
        undo: (0, _v8.useCallback)(() => {
          let _v0 = _v315.default.getState().history.undoSnapshots;
          if (!_v0.length) return;
          _v1((0, _v352.addRedoSnapshotAction)(_v315.default.getState().storyboard));
          let _v1 = _v0[_v0.length - 1];
          _v1 && (_v1((0, _v167.updateStoryboardAction)(_v1)), _v1((0, _v352.undoAction)()), _v1((0, _v353.resetOverridesAction)())), _v355({
            isClick: _v2,
            isUndo: !0
          });
        }, [_v1, _v2]),
        redo: (0, _v8.useCallback)(() => {
          let _v0 = _v315.default.getState().history.redoSnapshots;
          if (!_v0.length) return;
          _v1((0, _v352.addUndoSnapshotAction)(_v315.default.getState().storyboard));
          let _v1 = _v0[_v0.length - 1];
          _v1 && (_v1((0, _v167.updateStoryboardAction)(_v1)), _v1((0, _v352.redoAction)()), _v1((0, _v353.resetOverridesAction)())), _v355({
            isClick: _v2,
            isUndo: !1
          });
        }, [_v1, _v2])
      };
    },
    _v357 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsx)("svg", {
      ref: _v1,
      ..._v0,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v7.jsx)("path", {
        d: "M17.5858 9.70247L14.2929 12.9954L15.7071 14.4096L20.7071 9.40958C21.0978 9.01896 21.0976 8.3856 20.7069 7.99512L15.7069 3L14.2932 4.41471L17.5846 7.70247H15V7.69995H9C5.68629 7.69995 3 10.3862 3 13.7V14.7C3 18.0137 5.68629 20.7 9 20.7H15V18.7H9C6.79086 18.7 5 16.9091 5 14.7V13.7C5 11.4908 6.79086 9.69995 9 9.69995H11V9.70247H17.5858Z",
        fill: "currentcolor"
      })
    })),
    _v358 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsx)("svg", {
      ref: _v1,
      ..._v0,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v7.jsx)("path", {
        d: "M6.41421 9.70247L9.70711 12.9954L8.29289 14.4096L3.29289 9.40958C2.90227 9.01896 2.90238 8.3856 3.29314 7.99512L8.29314 3L9.70686 4.41471L6.41541 7.70247H9.00006V7.69995H15C18.3137 7.69995 21 10.3862 21 13.7V14.7C21 18.0137 18.3137 20.7 15 20.7H9.00006V18.7H15C17.2092 18.7 19 16.9091 19 14.7V13.7C19 11.4908 17.2092 9.69995 15 9.69995H13V9.70247H6.41421Z",
        fill: "currentcolor"
      })
    })),
    _v359 = _v10.default.div.withConfig({
      displayName: "UndoRedo__UndoRedoContainer",
      componentId: "sc-9fe76d21-0"
    })`
  display: flex;
  gap: 8px;
`,
    _v360 = () => {
      let _v0 = (0, _v168.useAppSelector)(_v0 => !!_v0.history.undoSnapshots.length),
        _v1 = (0, _v168.useAppSelector)(_v0 => !!_v0.history.redoSnapshots.length),
        {
          undo: _v2,
          redo: _v3
        } = _v356(_v354);
      return (0, _v7.jsxs)(_v359, {
        "data-testid": _v181.testIds.header.undoRedo,
        children: [(0, _v7.jsx)(_v212.Tooltip, {
          label: (0, _v63.translate)({
            singular: "Undo",
            dictionary: {
              es: {
                singular: "Deshacer"
              },
              "de-DE": {
                singular: "Rückgängig machen"
              },
              "fr-FR": {
                singular: "Annuler"
              },
              "ja-JP": {
                singular: "元に戻す"
              },
              "ko-KR": {
                singular: "실행 취소"
              },
              "pt-BR": {
                singular: "Desfazer"
              },
              "zh-CN": {
                singular: "撤销"
              }
            }
          }),
          "data-testid": "tooltip",
          children: (0, _v7.jsx)(_v195.IconButton, {
            "aria-label": "undo",
            variant: "tertiary",
            "data-testid": "undo-header-button",
            icon: (0, _v7.jsx)(_v358, {}),
            isDisabled: !_v0,
            onClick: _v2
          })
        }), (0, _v7.jsx)(_v212.Tooltip, {
          label: (0, _v63.translate)({
            singular: "Redo",
            dictionary: {
              es: {
                singular: "Rehacer"
              },
              "de-DE": {
                singular: "Wiederholen"
              },
              "fr-FR": {
                singular: "Rétablir"
              },
              "ja-JP": {
                singular: "やり直す"
              },
              "ko-KR": {
                singular: "다시 실행"
              },
              "pt-BR": {
                singular: "Refazer"
              },
              "zh-CN": {
                singular: "重做"
              }
            }
          }),
          "data-testid": "tooltip",
          children: (0, _v7.jsx)(_v195.IconButton, {
            "aria-label": "redo",
            variant: "tertiary",
            "data-testid": "redo-header-button",
            icon: (0, _v7.jsx)(_v357, {}),
            isDisabled: !_v1,
            onClick: _v3
          })
        })]
      });
    },
    _v361 = {
      gridArea: "header",
      height: _v180.HEADER_HEIGHT + "px",
      padding: "12px 24px",
      alignItems: "center",
      flexGrow: 1,
      position: "relative"
    };
  (0, _v10.default)(_v215.PlayFilled).withConfig({
    displayName: "Header__PlayPreviewIcon",
    componentId: "sc-fd829d18-0"
  })`
  polygon {
    stroke: ${({
    theme: _v0
  }) => _v0.content.color};
  }
`;
  let _v362 = () => {
    let _v0 = (0, _v210.useDispatch)(),
      _v1 = (0, _v9.useHistory)(),
      _v2 = (0, _v217.useIsStaff)(),
      _v3 = (0, _v168.useAppSelector)(_v176.isInteractiveSelector),
      _v4 = (0, _v168.useAppSelector)(_v224.isLoadingMediaOrApplyingTemplateSelector),
      _v5 = (0, _v8.useContext)(_v220.PartnershipAppContext),
      _v6 = (0, _v168.useAppSelector)(_v222.isEditingInteractiveOverlaySelector),
      {
        colorMode: _v7
      } = (0, _v213.useColorMode)(),
      {
        exitEditTeamTemplateMode: _v8
      } = (0, _v221.useEditTeamTemplate)(),
      _v9 = (0, _v8.useRef)(null),
      _v10 = _v5?.mode === "iframe" || _v6;
    return (0, _v7.jsxs)(_v7.Fragment, {
      children: [(0, _v7.jsx)(_v225.UITransitionContainer, {
        type: _v225.UITransitionType.FADE,
        options: {
          enterDuration: "lg",
          exitDuration: "md"
        },
        children: (0, _v7.jsxs)(_v75.Flex, {
          borderColor: "transparent",
          background: "transparent",
          "data-testid": "editor-header",
          ..._v361,
          children: [(0, _v7.jsxs)(_v75.Flex, {
            height: "100%",
            gap: "0 12px",
            alignItems: "center",
            children: [!_v10 && (0, _v7.jsx)(_v195.IconButton, {
              icon: (0, _v7.jsx)(_v216.VimeoV, {}),
              "aria-label": "logo",
              variant: "secondary",
              onClick: () => {
                _v1.push("/");
              }
            }), (0, _v7.jsx)(_v212.Tooltip, {
              label: (0, _v63.translate)({
                singular: "Back",
                dictionary: {
                  es: {
                    singular: "Atrás"
                  },
                  "de-DE": {
                    singular: "Zurück"
                  },
                  "fr-FR": {
                    singular: "Retour"
                  },
                  "ja-JP": {
                    singular: "戻る"
                  },
                  "ko-KR": {
                    singular: "뒤로"
                  },
                  "pt-BR": {
                    singular: "Voltar"
                  },
                  "zh-CN": {
                    singular: "返回"
                  }
                }
              }),
              children: (0, _v7.jsx)(_v244, {
                isEditingOverlay: _v6,
                isSaveOrExitEditorDisabled: _v4,
                onBackButtonClick: _v5?.iframeModeConfig?.headerConfig?.onBackButtonClick
              })
            }), _v2 && (0, _v7.jsx)(_v286, {}), (0, _v7.jsx)(_v186.Box, {
              padding: "6px",
              children: (0, _v7.jsx)(_v293, {})
            }), (0, _v7.jsx)(_v240, {})]
          }), (0, _v7.jsx)(_v186.Box, {
            flexGrow: "1",
            height: "100%",
            alignItems: "center",
            "data-testid": _v181.testIds.centerHeaderContainer,
            children: _v5?.logo && (0, _v7.jsx)(_v363, {
              $_css: "dark" === _v7 ? "grayscale(1) invert(1);" : "",
              children: _v5.logo
            })
          }), (0, _v7.jsxs)(_v75.Flex, {
            height: "100%",
            gap: "12px",
            children: [(0, _v7.jsx)(_v360, {}), _v3 && !_v6 && (0, _v7.jsx)(_v187.Button, {
              variant: "secondary",
              "data-testid": "header-preview-button",
              isDisabled: _v4,
              onClick: () => _v9.current?.open(),
              leftIcon: (0, _v7.jsx)(_v214.Eye, {}),
              children: _v219.translations.preview
            }), (0, _v7.jsx)(_v351, {
              isEditingOverlay: _v6,
              isInteractive: _v3,
              exitEditTeamTemplateMode: _v8
            }), !_v5?.app && (0, _v7.jsx)(_v186.Box, {
              className: "notranslate",
              children: (0, _v7.jsx)(_v218.AccountMenu, {
                onConfirmTeamSwitch: () => !!confirm(`${(0, _v63.translate)({
                  singular: "Leave site?",
                  dictionary: {
                    es: {
                      singular: "¿Salir del sitio?"
                    },
                    "de-DE": {
                      singular: "Website verlassen?"
                    },
                    "fr-FR": {
                      singular: "Quitter le site ?"
                    },
                    "ja-JP": {
                      singular: "サイトを離れますか？"
                    },
                    "ko-KR": {
                      singular: "사이트에서 나갈까요?"
                    },
                    "pt-BR": {
                      singular: "Sair do site?"
                    },
                    "zh-CN": {
                      singular: "离开网站？"
                    }
                  }
                })} ${(0, _v63.translate)({
                  singular: "Changes you made may not be saved.",
                  dictionary: {
                    es: {
                      singular: "Los cambios realizados pueden no haberse guardado."
                    },
                    "de-DE": {
                      singular: "Deine Änderungen werden eventuell nicht gespeichert."
                    },
                    "fr-FR": {
                      singular: "Vos modifications ne seront peut-être pas enregistrées."
                    },
                    "ja-JP": {
                      singular: "変更内容は保存されない場合があります。"
                    },
                    "ko-KR": {
                      singular: "변경사항이 저장되지 않을 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "As alterações feitas podem não ser salvas."
                    },
                    "zh-CN": {
                      singular: "您所做的更改可能无法保存。"
                    }
                  }
                })}`) && (_v0((0, _v223.setIsTeamSwitchingAction)(!0)), !0)
              })
            })]
          })]
        })
      }), _v3 && (0, _v7.jsx)(_v271, {
        ref: _v9
      })]
    });
  };
  var _v363 = (0, _v10.default)(_v211.Center).withConfig({
      displayName: "Header___StyledCenter",
      componentId: "sc-fd829d18-1"
    })`
                  div {
                    display: flex;
                  }

                  img {
                    filter: ${_v0 => _v0.$_css};
                  }
                `,
    _v364 = _v0.i(0),
    _v365 = _v0.i(0),
    _v366 = _v0.i(0),
    _v367 = _v0.i(0),
    _v368 = _v0.i(0),
    _v369 = _v0.i(0);
  let _v370 = `${(0, _v156.rem)(16)} ${(0, _v156.rem)(16)}`,
    _v371 = () => {
      let _v0 = (0, _v213.useColorModeValue)("gray.200", "gray.700"),
        _v1 = (0, _v213.useColorModeValue)("gray.100", "gray.800"),
        [_v2, _v3] = (0, _v178.useToken)("colors", [_v0, _v1]);
      return (0, _v7.jsx)(_v186.Box, {
        sx: {
          position: "absolute",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          background: `repeating-conic-gradient(${_v2} 0% 25%, ${_v3} 0% 50%) 50% / ${_v370}`,
          borderRadius: "6px",
          pointerEvents: "none"
        }
      });
    };
  var _v372 = _v0.i(0),
    _v373 = _v0.i(0),
    _v374 = _v0.i(0),
    _v375 = _v0.i(0),
    _v376 = _v0.i(0),
    _v377 = _v0.i(0);
  let _v378 = _v10.default.div.withConfig({
      displayName: "StageLoader__LoadingInfoContainer",
      componentId: "sc-2349de63-0"
    })`
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: all 500ms ease;

  ${({
      isVisible: _v0
    }) => _v0 && _v10.css`
      opacity: 1;
    `};
`,
    _v379 = _v10.default.div.withConfig({
      displayName: "StageLoader__LoaderContainer",
      componentId: "sc-2349de63-1"
    })`
  transform: ${({
      isTransformed: _v0
    }) => _v0 ? "translateY(0)" : "translateY(50px)"};
  transition: transform 500ms ease;
`,
    _v380 = _v10.default.div.withConfig({
      displayName: "StageLoader__LoadingContainer",
      componentId: "sc-2349de63-2"
    })`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`,
    _v381 = _v10.default.div.withConfig({
      displayName: "StageLoader__LoadingText",
      componentId: "sc-2349de63-3"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`,
    _v382 = () => {
      let [_v0, _v1] = (0, _v8.useState)(!1),
        _v2 = (0, _v8.useRef)(0),
        _v3 = (0, _v8.useCallback)(() => {
          history.back();
        }, []);
      return (0, _v8.useEffect)(() => (_v2.current = setTimeout(() => {
        _v1(!0);
      }, 0), () => {
        clearTimeout(_v2.current);
      })), (0, _v7.jsxs)(_v380, {
        children: [(0, _v7.jsx)(_v379, {
          isTransformed: _v0,
          children: (0, _v7.jsx)(_v179.Spinner, {
            size: "xl"
          })
        }), (0, _v7.jsxs)(_v378, {
          isVisible: _v0,
          children: [(0, _v7.jsxs)(_v381, {
            children: [(0, _v7.jsx)(_v377.Header, {
              size: "sm",
              mb: 75,
              children: (0, _v63.translate)({
                singular: "Preparing video for editing",
                dictionary: {
                  es: {
                    singular: "Preparando el video para editarlo"
                  },
                  "de-DE": {
                    singular: "Das Video wird für die Bearbeitung vorbereitet"
                  },
                  "fr-FR": {
                    singular: "Préparation de la vidéo pour le montage"
                  },
                  "ja-JP": {
                    singular: "編集用に動画を準備しています"
                  },
                  "ko-KR": {
                    singular: "편집할 영상 준비하기"
                  },
                  "pt-BR": {
                    singular: "Preparando o vídeo para edição"
                  },
                  "zh-CN": {
                    singular: "视频准备中，即将可编辑"
                  }
                }
              })
            }), (0, _v7.jsx)(_v157.Text, {
              variant: "body-md",
              children: (0, _v63.translate)({
                singular: "This shouldn’t take long.",
                dictionary: {
                  es: {
                    singular: "No debería llevar mucho tiempo."
                  },
                  "de-DE": {
                    singular: "Das sollte nicht lange dauern."
                  },
                  "fr-FR": {
                    singular: "Cela ne devrait pas être long."
                  },
                  "ja-JP": {
                    singular: "それほど時間はかかりません。"
                  },
                  "ko-KR": {
                    singular: "오래 걸리지 않습니다."
                  },
                  "pt-BR": {
                    singular: "Não deve demorar muito."
                  },
                  "zh-CN": {
                    singular: "这应该不会花费很长时间。"
                  }
                }
              })
            }), (0, _v7.jsx)(_v157.Text, {
              variant: "body-md",
              children: (0, _v63.translate)({
                singular: "You can wait or come back later.",
                dictionary: {
                  es: {
                    singular: "Puede esperar o volver más tarde."
                  },
                  "de-DE": {
                    singular: "Sie können warten oder später wieder vorbeikommen."
                  },
                  "fr-FR": {
                    singular: "Vous pouvez attendre ou revenir plus tard."
                  },
                  "ja-JP": {
                    singular: "このままお待ちいただくか、後ほどご確認ください。"
                  },
                  "ko-KR": {
                    singular: "기다리거나 나중에 다시 오셔도 됩니다."
                  },
                  "pt-BR": {
                    singular: "Você pode esperar ou voltar mais tarde."
                  },
                  "zh-CN": {
                    singular: "请稍等或稍后再来。"
                  }
                }
              })
            })]
          }), (0, _v7.jsx)(_v187.Button, {
            variant: "tertiary",
            onClick: _v3,
            children: (0, _v63.translate)({
              singular: "Go back",
              dictionary: {
                es: {
                  singular: "Volver"
                },
                "de-DE": {
                  singular: "Zurück"
                },
                "fr-FR": {
                  singular: "Retour"
                },
                "ja-JP": {
                  singular: "戻る"
                },
                "ko-KR": {
                  singular: "돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar"
                },
                "zh-CN": {
                  singular: "返回"
                }
              }
            })
          })]
        })]
      });
    },
    _v383 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v168.useAppSelector)(_v353.overridesSelector),
        _v2 = (0, _v168.useAppSelector)(_v222.isEditingInteractiveOverlaySelector),
        _v3 = (0, _v168.useAppSelector)(_v224.scorecardTimeTriggerSelector),
        _v4 = (0, _v168.useAppSelector)(_v167.durationSelector),
        _v5 = (0, _v168.useAppSelector)(_v167.storyboardSelector),
        _v6 = (0, _v168.useAppSelector)(_v373.fontsSelector),
        {
          currentTime: _v7
        } = (0, _v168.useAppSelector)(_v372.dragonflyStateSelector),
        _v8 = (0, _v168.useAppSelector)(_v239.elementsStatusesSelector),
        _v9 = (0, _v168.useAppSelector)(_v224.pollListSelector),
        _v10 = (0, _v168.useAppSelector)(_v167.quizQuestionProgressSelector),
        {
          DFRef: _v11,
          handleEnded: _v12,
          handleTimeUpdate: _v13
        } = (0, _v252.useDragonfly)(),
        _v14 = (0, _v8.useRef)(null),
        _v15 = _v14.current,
        _v16 = (0, _v8.useMemo)(() => {
          let _v0 = _v10 ? (0, _v376.getDFStoryboardWithQuestionProgress)(_v5, _v4, _v9) : _v5;
          return _v2 ? (0, _v375.getDFStoryboardForOverlayEditor)(_v0) : _v3 && !_v2 && "overlayId" in _v3.action ? (0, _v376.getDFStoryboardWithScorecardOverlay)(_v0, _v3.action.overlayId, _v4) : (0, _v255.lowerCaseUnderscore)(_v0);
        }, [_v2, _v9, _v10, _v3, _v5, _v4]),
        _v17 = (0, _v8.useCallback)(async () => {
          _v14.current = (await _v0.A(0)).default, _v0((0, _v372.setDragonflyInitializedAction)());
        }, [_v0]);
      return (0, _v8.useEffect)(() => {
        _v17();
      }, [_v17]), _v15 && _v6 && _v5.id ? (0, _v7.jsx)(_v15, {
        storyboard: _v16,
        fonts: _v6,
        ref: _v11,
        onEnded: _v12,
        onTimeUpdate: _v13,
        isPosterMode: 0 === _v7,
        compositionOverride: _v1,
        fontFamilyDecorator: _v374.getFontFamily,
        isAssumeFontsLoaded: !0,
        "data-testid": "dragonfly",
        elementsStatuses: _v8,
        loader: (0, _v7.jsx)(_v179.Spinner, {
          size: "xl"
        }),
        isShowLogs: !1
      }) : (0, _v7.jsx)(_v382, {});
    };
  var _v384 = _v0.i(0),
    _v385 = _v0.i(0),
    _v386 = _v0.i(0),
    _v387 = _v0.i(0),
    _v388 = _v0.i(0),
    _v389 = _v0.i(0),
    _v390 = _v0.i(0),
    _v391 = _v0.i(0);
  let _v392 = () => {
    let _v0 = (0, _v168.useAppSelector)(_v390.stageSizeSelector),
      _v1 = (0, _v168.useAppSelector)(_v0 => _v0.featureFlags.dragoniteLogs.value),
      [_v2, _v3] = (0, _v8.useState)(!1),
      _v4 = (0, _v168.useAppSelector)(_v366.currentCropElementIdSelector),
      _v5 = (0, _v168.useAppSelector)(_v372.currentTimeSelector),
      _v6 = (0, _v168.useAppSelector)(_v372.pausedSelector),
      _v7 = (0, _v168.useAppSelector)(_v167.storyboardSelector),
      _v8 = (0, _v168.useAppSelector)(_v239.elementsStatusesSelector),
      _v9 = (0, _v168.useAppSelector)(_v353.overridesSelector),
      _v10 = (0, _v168.useAppSelector)(_v373.fontsSelector),
      _v11 = (0, _v168.useAppSelector)(_v176.shouldShowTestAssetsSelector),
      [_v12, _v13] = (0, _v8.useState)(!1),
      [_v14, _v15] = (0, _v8.useState)(!1),
      _v16 = (0, _v8.useRef)(-1),
      {
        data: _v17
      } = (0, _v388.useFetchAssetsQuery)({
        isTest: _v11,
        select: ["animations", "fonts"]
      }),
      {
        data: _v18
      } = (0, _v389.useFetchTransitionLibraryQuery)(),
      {
        DFRef: _v19,
        handleEnded: _v20,
        handleTimeUpdate: _v21
      } = (0, _v252.useDragonfly)(),
      {
        alertMissingWebGL: _v22
      } = (0, _v162.useAlerts)(),
      _v23 = (0, _v8.useCallback)(() => {
        _v13(!0), setTimeout(() => {
          _v13(!1);
        }, 0);
      }, []),
      _v24 = (0, _v8.useCallback)(() => {
        _v15(!0);
        let _v0 = performance.now();
        _v387.default.setEditorLoadEnd(_v0), -1 !== _v16.current && (_v165.default.sendAction(_v305.EditorLoad, {
          step: "end load dragonite",
          durationMs: (0, _v391.durationSince)(_v16.current)
        }), _v16.current = -1);
        let _v1 = _v387.default.editorLoadStartTime;
        0 !== _v1 && (_v165.default.sendAction(_v305.EditorLoad, {
          step: "end load editor",
          timestamp: Math.round(_v0),
          loadingTime: Math.round(_v0 - _v1),
          ...(_v253.default.isEVV && {
            flow: "edit_vimeo_video"
          })
        }), _v387.default.resetEditorLoadStart());
      }, []),
      _v25 = _v17?.animations && _v10 && _v7.videoSessionId,
      _v26 = Object.entries(_v9).filter(([, _v0]) => "compositionTiming" in _v0).map(([_v0]) => _v0);
    return (0, _v8.useLayoutEffect)(() => {
      _v25 && (_v16.current = performance.now(), _v165.default.sendAction(_v305.EditorLoad, {
        step: "start load dragonite"
      }));
    }, [_v25]), (0, _v8.useLayoutEffect)(() => {
      let _v0 = document.createElement("canvas");
      _v0.getContext("webgl") || _v0.getContext("experimental-webgl") ? _v3(!0) : _v22();
    }, [_v22]), (0, _v7.jsxs)(_v7.Fragment, {
      children: [!_v12 && (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsx)(_v211.Center, {
          opacity: +!!_v14,
          position: "absolute",
          pointerEvents: "none",
          children: _v25 && _v2 && (0, _v7.jsx)(_v386.Dragonite, {
            ref: _v19,
            storyboard: _v7,
            elementsStatuses: _v8,
            width: _v0.width,
            height: _v0.height,
            startTimeOnMount: _v5,
            bodymovinAnimations: _v17?.animations || [],
            transitions: _v18?.items || [],
            fonts: _v10 || {},
            isPlaying: !_v6,
            overrides: _v9,
            trimmingElementIds: _v26,
            cropViewElementId: _v4,
            isShowLogs: _v1,
            isPosterMode: 0 === _v5,
            onEnded: _v20,
            onTimeUpdate: _v21,
            onLoadedData: _v24,
            onWebGLError: _v22
          })
        }), !_v14 && (0, _v7.jsx)(_v382, {})]
      }), _v1 && (0, _v7.jsx)(_v195.IconButton, {
        variant: "secondary",
        size: "xs",
        "aria-label": "reset-dragonite",
        position: "absolute",
        right: 8,
        bottom: 8,
        zIndex: 0,
        icon: (0, _v7.jsx)(_v385.SyncRefresh, {}),
        onClick: _v23
      })]
    });
  };
  var _v393 = _v0.i(0);
  let _v394 = "Vertical",
    _v395 = "Horizontal";
  _v10.default.div.withConfig({
    displayName: "Guides.style__GuidesDropdownContainer",
    componentId: "sc-959faad4-0"
  })`
  width: 140px;
  padding: 8px 0;
`, _v10.default.div.withConfig({
    displayName: "Guides.style__GuidesDropdownRow",
    componentId: "sc-959faad4-1"
  })`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 6px 8px;
  gap: 4px;
  height: 32px;

  &:hover {
    background: ${_v93.bokehTheme.colors.gray["50"]};
  }
`, _v10.default.div.withConfig({
    displayName: "Guides.style__GuidesCheckboxIconContainer",
    componentId: "sc-959faad4-2"
  })`
  width: 16px;
  height: 16px;
`;
  let _v396 = _v10.default.div.withConfig({
      displayName: "Guides.style__GuidesContainer",
      componentId: "sc-959faad4-3"
    })`
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
`,
    _v397 = _v10.default.div.withConfig({
      displayName: "Guides.style__SnapGuideline",
      componentId: "sc-959faad4-4"
    })`
  position: absolute;
  box-sizing: content-box;
  z-index: 500;

  ${({
      top: _v0,
      left: _v1,
      type: _v2,
      isDragging: _v3,
      dragPosition: _v4
    }) => _v2 === _v394 ? _v10.css`
        width: 1px;
        background-color: transparent;
        left: ${_v1 - _v393.GUIDES_BORDER_WIDTH}px;
        top: 0px;
        bottom: 0px;
        ${_v3 && _v4 && `transform: translateX(${_v4.x}px)`};
        border-right: ${_v393.GUIDES_BORDER_WIDTH}px solid transparent;
        border-left: ${_v393.GUIDES_BORDER_WIDTH}px solid transparent;
      ` : _v2 === _v395 ? _v10.css`
        height: 1px;
        background-color: transparent;
        top: ${_v0 - _v393.GUIDES_BORDER_WIDTH}px;
        left: 0px;
        right: 0px;
        ${_v3 && _v4 && `transform: translateY(${_v4.y}px)`};
        border-top: ${_v393.GUIDES_BORDER_WIDTH}px solid transparent;
        border-bottom: ${_v393.GUIDES_BORDER_WIDTH}px solid transparent;
      ` : void 0}
`,
    _v398 = _v10.default.div.withConfig({
      displayName: "Guides.style__Guideline",
      componentId: "sc-959faad4-5"
    })`
  background-color: ${_v93.bokehTheme.colors.blue["500"]};
  height: 100%;
  width: 100%;
`;
  var _v399 = _v0.i(0),
    _v400 = _v0.i(0);
  let _v401 = (_v0, _v1) => {
      let _v2 = {
          ceId: _v1 || null,
          top: 0,
          left: _v0.xMiddle,
          type: _v394,
          isEdge: !1,
          isMiddle: !0,
          id: `guide_${(0, _v400.createUuidV4)()}`
        },
        _v3 = {
          ceId: _v1 || null,
          top: _v0.yMiddle,
          left: 0,
          type: _v395,
          isEdge: !1,
          isMiddle: !0,
          id: `guide_${(0, _v400.createUuidV4)()}`
        };
      return [{
        ceId: _v1 || null,
        top: _v0.top,
        left: 0,
        type: _v395,
        isEdge: !0,
        isMiddle: !1,
        id: `guide_${(0, _v400.createUuidV4)()}`
      }, _v3, {
        ceId: _v1 || null,
        top: _v0.bottom,
        left: 0,
        type: _v395,
        isEdge: !0,
        isMiddle: !1,
        id: `guide_${(0, _v400.createUuidV4)()}`
      }, {
        ceId: _v1 || null,
        top: 0,
        left: _v0.left,
        type: _v394,
        isEdge: !0,
        isMiddle: !1,
        id: `guide_${(0, _v400.createUuidV4)()}`
      }, _v2, {
        ceId: _v1 || null,
        top: 0,
        left: _v0.right,
        type: _v394,
        isEdge: !0,
        isMiddle: !1,
        id: `guide_${(0, _v400.createUuidV4)()}`
      }];
    },
    _v402 = _v0 => {
      let _v1 = (0, _v168.useAppSelector)(_v399.textAnimationsMetadataSelector),
        _v2 = (0, _v168.useAppSelector)(_v366.selectedElementsIdsSelector),
        _v3 = (0, _v168.useAppSelector)(_v224.elementsInCurrentTimeSelector),
        _v4 = (0, _v8.useMemo)(() => {
          if (!_v0) return null;
          let _v0 = _v0.width === _v0.height,
            _v1 = _v0 ? _v0.height * _v393.GUIDES_SQUARE_VERTICAL_PADDING : _v0.height * _v393.GUIDES_VERTICAL_PADDING,
            _v2 = _v0 ? _v0.width * _v393.GUIDES_SQUARE_HORIZONTAL_PADDING : _v0.width * _v393.GUIDES_HORIZONTAL_PADDING;
          return _v401({
            top: _v1,
            left: _v2,
            bottom: _v0.height - _v1,
            right: _v0.width - _v2,
            xMiddle: _v0.width / 2,
            yMiddle: _v0.height / 2
          });
        }, [_v0]),
        _v5 = (0, _v8.useMemo)(() => {
          if (!_v3) return [];
          let _v0 = [];
          return _v3.forEach(_v0 => {
            if (!_v2.includes(_v0.id)) {
              let _v0 = (0, _v235.getPadding)(_v0, _v1),
                _v1 = _v401({
                  left: (_v0.rect.x - (_v0.left || 0) * _v0.rect.width) * _v0.width,
                  right: (_v0.rect.x + _v0.rect.width + (_v0.right || 0) * _v0.rect.width) * _v0.width,
                  top: (_v0.rect.y - (_v0.top || 0) * _v0.rect.height) * _v0.height,
                  bottom: (_v0.rect.y + _v0.rect.height + (_v0.bottom || 0) * _v0.rect.width) * _v0.height,
                  xMiddle: (_v0.rect.x + _v0.rect.width / 2) * _v0.width,
                  yMiddle: (_v0.rect.y + _v0.rect.height / 2) * _v0.height
                }, _v0.id);
              _v0.push(..._v1);
            }
          }), _v0;
        }, [_v3, _v2, _v0.height, _v0.width, _v1]),
        _v6 = (0, _v8.useCallback)(({
          rect: _v0,
          padding: _v1
        }) => {
          let _v2 = _v393.GUIDES_SNAPPING_DISTANCE,
            _v3 = [],
            _v4 = [],
            _v5 = [...(_v4 || []), ..._v5];
          if (!_v5) return {
            snappedRect: _v0,
            activeGuides: [],
            guidingElements: []
          };
          let _v6 = {
              left: _v0.x * _v0.width,
              right: (_v0.x + _v0.width) * _v0.width,
              top: _v0.y * _v0.height,
              bottom: (_v0.y + _v0.height) * _v0.height,
              width: _v0.width * _v0.width,
              height: _v0.height * _v0.height
            },
            _v7 = {
              left: _v1.left * _v6.width || 0,
              right: _v1.right * _v6.width || 0,
              top: _v1.top * _v6.height || 0,
              bottom: _v1.bottom * _v6.height || 0
            };
          return _v5.forEach(_v0 => {
            let {
              isEdge: _v1,
              isMiddle: _v2,
              type: _v3
            } = _v0;
            _v2 && _v3 === _v394 ? Math.abs(_v0.left - (_v6.left + _v6.width / 2)) < _v2 && (_v6.left = _v0.left - _v6.width / 2, _v3.push(_v0), _v0.ceId && _v4.push(_v0.ceId)) : _v2 && _v3 === _v395 ? Math.abs(_v0.top - (_v6.top + _v6.height / 2)) < _v2 && (_v6.top = _v0.top - _v6.height / 2, _v3.push(_v0), _v0.ceId && _v4.push(_v0.ceId)) : _v1 && _v3 === _v394 ? (Math.abs(_v0.left + _v7.left - _v6.left) < _v2 && (_v6.left = _v0.left + _v7.left, _v3.push(_v0), _v0.ceId && _v4.push(_v0.ceId)), Math.abs(_v0.left - _v7.right - _v6.right) < _v2 && (_v6.left = _v0.left - _v7.right - _v6.width, _v3.push(_v0), _v0.ceId && _v4.push(_v0.ceId))) : _v1 && _v3 === _v395 && (Math.abs(_v0.top + _v7.top - _v6.top) < _v2 && (_v6.top = _v0.top + _v7.top, _v3.push(_v0), _v0.ceId && _v4.push(_v0.ceId)), Math.abs(_v0.top - _v7.bottom - _v6.bottom) < _v2 && (_v6.top = _v0.top - _v7.bottom - _v6.height, _v3.push(_v0), _v0.ceId && _v4.push(_v0.ceId)));
          }), {
            snappedRect: {
              ..._v0,
              x: _v6.left / _v0.width,
              y: _v6.top / _v0.height
            },
            activeGuides: _v3,
            guidingElements: _v4
          };
        }, [_v5, _v4, _v0.height, _v0.width]);
      return {
        stageGuides: _v4,
        getSnappingGuidesRect: _v6
      };
    },
    _v403 = () => {
      let _v0 = (0, _v168.useAppSelector)(_v390.stageSizeSelector),
        _v1 = (0, _v168.useAppSelector)(_v390.activeStageGuidesSelector),
        _v2 = (0, _v168.useAppSelector)(_v0 => _v0.stage.guides.isShow),
        {
          stageGuides: _v3
        } = _v402(_v0);
      return (0, _v7.jsxs)(_v396, {
        "data-testid": _v181.testIds.guidesContainer,
        children: [_v3 && _v2 && _v3.map(_v0 => !_v0.isMiddle && (0, _v7.jsx)(_v397, {
          left: _v0.left,
          top: _v0.top,
          type: _v0.type,
          children: (0, _v7.jsx)(_v398, {
            "data-testid": `stage-bounds-${_v0.type}-guide`
          })
        }, _v0.id)), _v1 && _v1.map(_v0 => (0, _v7.jsx)(_v397, {
          left: _v0.left,
          top: _v0.top,
          type: _v0.type,
          children: (0, _v7.jsx)(_v398, {
            "data-testid": `active-${_v0.type}-guide`
          })
        }, _v0.id))]
      });
    };
  var _v404 = _v0.i(0);
  let _v405 = _v10.default.div.withConfig({
      displayName: "Stage.style__StageContainer",
      componentId: "sc-aadc139b-0"
    })`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 0;
`,
    _v406 = _v10.default.div.attrs(({
      size: _v0
    }) => ({
      style: {
        width: `${_v0.width}px`,
        height: `${_v0.height}px`
      }
    })).withConfig({
      displayName: "Stage.style__DragonflyContainer",
      componentId: "sc-aadc139b-1"
    })`
  box-sizing: border-box;
  position: relative;
  border-radius: 6px;

  ${_v0 => _v0.shouldDisplayOverlayEditorEmptyView && `
    outline: var(--vimeo-colors-stroke) solid 1px;
    background-color: var(--vimeo-colors-fill-surface);
    margin: 0 24px 16px;
  `}

  ${({
      isActive: _v0
    }) => _v0 && _v10.css`
      &:after {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        border: ${({
      theme: _v0
    }) => `2px solid ${_v0.formats.secondary}`};
      }

      &:before {
        content: '';
        position: absolute;
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        top: -3px;
        left: -3px;
        border-radius: 9px;
        border: ${({
      theme: _v0
    }) => `3px solid ${_v0.formats.primary}`};
        pointer-events: none;
      }
    `}
`,
    _v407 = _v10.default.div.withConfig({
      displayName: "Stage.style__RoundCorners",
      componentId: "sc-aadc139b-2"
    })`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
`,
    _v408 = _v10.default.div.withConfig({
      displayName: "Stage.style__LogoPlaceholder",
      componentId: "sc-aadc139b-3"
    })`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0.5rem;
  left: 0.5rem;
  min-width: 38px;
  min-height: 38px;
  max-width: 68px;
  max-height: 68px;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  border-radius: 0.25rem;
  fill: white;
  pointer-events: all;
  z-index: ${0};

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`,
    _v409 = _v10.default.div.attrs(({
      orientation: _v0
    }) => {
      let {
        width: _v1,
        height: _v2
      } = _v404.ORIENTATION_MAP[_v0];
      return {
        style: {
          width: `${209 / _v1 * 100}%`,
          height: `${111 / _v2 * 100}%`,
          right: `${32 / _v1 * 100}%`,
          bottom: `${32 / _v2 * 100}%`
        }
      };
    }).withConfig({
      displayName: "Stage.style__WatermarkContainer",
      componentId: "sc-aadc139b-4"
    })`
  position: absolute;
  z-index: ${0};
  border-radius: 10px;
`,
    _v410 = _v10.default.div.attrs(({
      rect: _v0
    }) => ({
      style: {
        left: `${_v0.x}px`,
        top: `${_v0.y}px`,
        width: `${_v0.width}px`,
        height: `${_v0.height}px`
      }
    })).withConfig({
      displayName: "LoadingMediaLayer.style__ResizableRectContainer",
      componentId: "sc-4b11b176-0"
    })`
  position: absolute;
  cursor: move;
  pointer-events: 'none';
  z-index: ${({
      zIndex: _v0
    }) => _v0};

  .single-resizer {
    position: absolute;
    left: 0 !important; /* override react-resizable-rotatable-draggable */
    top: 0 !important; /* override react-resizable-rotatable-draggable */
    z-index: ${0};
    border-color: 'transparent';
    border-style: 'solid';
    border-width: 1px;

    .resizable-handler {
      pointer-events: all;
    }
  }
`,
    _v411 = (0, _v8.memo)(({
      stageSize: _v0,
      rect: _v1,
      backgroundURL: _v2,
      isTransparent: _v3,
      zIndex: _v4
    }) => {
      let {
          x: _v5,
          y: _v6,
          width: _v7,
          height: _v8
        } = _v1,
        _v9 = {
          x: _v5 * _v0.width,
          y: _v6 * _v0.height,
          width: _v7 * _v0.width,
          height: _v8 * _v0.height
        };
      return (0, _v7.jsx)(_v410, {
        rect: _v9,
        zIndex: _v4,
        children: (0, _v7.jsx)(_v211.Center, {
          sx: (({
            backgroundURL: _v0,
            isTransparent: _v1
          }) => ({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            svg: {
              zIndex: 100
            },
            ...(_v0 && {
              _before: {
                content: "''",
                position: "absolute",
                bottom: 0,
                left: 0,
                bgImage: `url(${_v0})`,
                bgPosition: "center",
                bgRepeat: "no-repeat",
                bgSize: "cover",
                width: "100%",
                height: "100%",
                filter: "blur(5px)"
              }
            }),
            backgroundColor: _v0 || _v1 ? void 0 : "darkBlueAlpha.700"
          }))({
            backgroundURL: _v2,
            isTransparent: _v3
          }),
          "data-testid": _v181.testIds.selectionLayerLoaderContainer,
          children: (0, _v7.jsx)(_v179.Spinner, {})
        })
      });
    });
  var _v412 = _v0.i(0);
  let _v413 = () => {
    let _v0 = (0, _v168.useAppSelector)(_v176.isInteractiveSelector),
      _v1 = (0, _v168.useAppSelector)(_v353.overridesSelector),
      _v2 = (0, _v168.useAppSelector)(_v390.stageSizeSelector),
      _v3 = (0, _v168.useAppSelector)(_v167.loadingElementsInCurrentTimeSelector),
      _v4 = (0, _v168.useAppSelector)(_v239.allSourcesStatusSelector);
    return _v3 ? (0, _v7.jsx)(_v7.Fragment, {
      children: _v3.map(_v0 => {
        if (_v4[_v0.sourceHash] === _v234.STATUS.ERROR) return null;
        let _v1 = (0, _v235.getPadding)(_v0),
          _v2 = (0, _v412.getRectWithPadding)(_v1?.[_v0.id]?.rect || _v0.rect, _v1);
        return (0, _v7.jsx)(_v411, {
          rect: _v2,
          stageSize: _v2,
          backgroundURL: _v0 ? _v0.thumbnailUrl : "",
          isTransparent: !_v0,
          zIndex: _v0.zindex || 0
        }, _v0.id);
      })
    }) : null;
  };
  var _v414 = _v0.i(0),
    _v415 = _v0.i(0),
    _v416 = _v0.i(0),
    _v417 = _v0.i(0),
    _v418 = _v0.i(0),
    _v419 = _v0.i(0);
  let _v420 = () => {
    let _v0 = (0, _v168.useAppSelector)(_v353.overridesSelector),
      _v1 = (0, _v168.useAppSelector)(_v390.stageSizeSelector),
      _v2 = (0, _v168.useAppSelector)(_v366.selectedElementsSelector),
      _v3 = (0, _v210.useDispatch)(),
      _v4 = (0, _v8.useCallback)((_v0, _v1) => {
        _v3((0, _v366.setMutationAction)(_v418.Mutation.RECT)), (0, _v415.batch)(() => {
          _v2.forEach(_v0 => {
            (0, _v235.isMediaElement)(_v0) && _v3((0, _v353.addOverrideAction)({
              ceId: _v0.id,
              overrides: {
                rect: _v0,
                sourceFootageRect: _v1
              }
            }));
          });
        });
      }, [_v3, _v2]),
      _v5 = (0, _v8.useCallback)(() => {
        Object.keys(_v0).forEach(_v0 => {
          let {
            rect: _v1,
            sourceFootageRect: _v2
          } = _v0[_v0];
          _v3((0, _v167.updateElementAction)({
            ceId: _v0,
            element: {
              ...(_v2 && {
                sourceFootageRect: _v2
              }),
              ...(_v1 && {
                rect: _v1
              })
            }
          })), _v3((0, _v353.removeOverrideAction)({
            ceId: _v0,
            key: "rect"
          }));
        }), setTimeout(() => {
          _v3((0, _v366.setMutationAction)(null));
        });
      }, [_v3, _v0]);
    return {
      handleCrop: _v4,
      handleCropEnd: _v5,
      handleCropDrag: (0, _v8.useCallback)((_v0, _v1, _v2) => {
        _v3((0, _v366.setMutationAction)(_v418.Mutation.SOURCE_FOOTAGE_RECT)), _v2.forEach(_v0 => {
          let _v1 = _v2.width * _v1.width,
            _v2 = _v2.height * _v1.height,
            _v3 = 1 - _v2.width,
            _v4 = 1 - _v2.height,
            _v5 = Math.min(Math.max(_v2.x - _v0 / _v1, 0), _v3),
            _v6 = Math.min(Math.max(_v2.y - _v1 / _v2, 0), _v4);
          _v3((0, _v353.addOverrideAction)({
            ceId: _v0.id,
            overrides: {
              sourceFootageRect: {
                ..._v2,
                x: _v5,
                y: _v6
              }
            }
          }));
        });
      }, [_v3, _v2, _v1.height, _v1.width]),
      changeCropOrientation: (0, _v8.useCallback)(_v0 => {
        _v2.forEach(_v0 => {
          if (!(0, _v235.isMediaElement)(_v0)) return;
          let _v1 = (0, _v412.getSourceFootageRectRelativeToStage)(_v0.rect, _v0.sourceFootageRect);
          if (_v1) {
            let _v0 = _v262.OrientationRatio[_v0],
              _v1 = _v1.width * _v1.width,
              _v2 = _v1.height * _v1.height,
              _v3 = _v0 * _v2;
            _v3 > _v1 && (_v2 = (_v3 = _v1) / _v0);
            let _v4 = _v1.width - _v3 / _v1.width,
              _v5 = _v1.height - _v2 / _v1.height,
              _v6 = {
                width: _v3 / _v1.width,
                height: _v2 / _v1.height,
                x: _v1.x + _v4 / 2,
                y: _v1.y + _v5 / 2
              };
            _v3((0, _v353.addOverrideAction)({
              ceId: _v0.id,
              overrides: {
                rect: _v6,
                sourceFootageRect: (0, _v419.rectToSourceFootageRect)(_v1, _v6, _v1)
              }
            })), _v3((0, _v167.updateElementAction)({
              ceId: _v0.id,
              element: {
                rect: _v6,
                sourceFootageRect: (0, _v419.rectToSourceFootageRect)(_v1, _v6, _v1)
              }
            }));
          }
        });
      }, [_v3, _v2, _v1])
    };
  };
  var _v421 = _v0.i(0),
    _v422 = _v0.i(0),
    _v423 = _v0.i(0),
    _v424 = _v0.i(0),
    _v425 = _v0.i(0),
    _v426 = _v0.i(0),
    _v427 = _v0.i(0);
  let _v428 = () => {
      let _v0 = (0, _v168.useAppSelector)(_v167.nonHiddenLayersSelector),
        _v1 = (0, _v168.useAppSelector)(_v224.overlayEditorDurationSelector),
        _v2 = (0, _v168.useAppSelector)(_v167.durationSelector),
        _v3 = (0, _v168.useAppSelector)(_v366.computedRectByCEIdSelector),
        _v4 = (0, _v168.useAppSelector)(_v399.textAnimationsMetadataSelector),
        _v5 = _v1 || _v2,
        {
          getCurrentTimeFromRef: _v6
        } = (0, _v252.useDragonfly)(),
        _v7 = (0, _v8.useCallback)((_v0, _v1, _v2) => {
          let _v3,
            _v4 = _v0 === _v5;
          return (0, _v256.getElementsInTime)(_v0, _v0, _v0, _v4).forEach(_v0 => {
            let _v1;
            if (!(0, _v235.isSoundElement)(_v0) && !((_v0.zindex || 0) < (_v3?.zindex || 0))) {
              if ((0, _v425.hasComputedRect)(_v0)) {
                if (!(_v1 = _v3.get(_v0.id))) return;
              } else {
                let _v0 = (0, _v235.getPadding)(_v0, _v4);
                _v1 = (0, _v412.getRectWithPadding)(_v0.rect, _v0);
              }
              if ((0, _v235.isGraphicElement)(_v0) && _v0.rotate) {
                let _v0 = _v1.x + _v1.width / 2,
                  _v1 = _v1.y + _v1.height / 2,
                  _v2 = [{
                    x: _v1.x,
                    y: _v1.y
                  }, {
                    x: _v1.x + _v1.width,
                    y: _v1.y
                  }, {
                    x: _v1.x + _v1.width,
                    y: _v1.y + _v1.height
                  }, {
                    x: _v1.x,
                    y: _v1.y + _v1.height
                  }].map(_v0 => (0, _v412.rotate)(_v0.x, _v0.y, _v0, _v1, _v0.rotate));
                (0, _v412.pointInPolygon)(_v1, _v2, _v2) && (_v3 = _v0);
              } else _v1 >= _v1.x && _v1 <= _v1.x + _v1.width && _v2 >= _v1.y && _v2 <= _v1.y + _v1.height && (_v3 = _v0);
            }
          }), _v3;
        }, [_v3, _v0, _v4, _v5]),
        _v8 = (0, _v8.useCallback)((_v0, _v1) => {
          let _v2 = document.querySelector("[data-testid=canvas]"),
            _v3 = _v2?.getBoundingClientRect(),
            _v4 = _v0,
            _v5 = _v1;
          return _v3 && (_v4 = (_v4 - _v3.x) / _v3.width, _v5 = (_v5 - _v3.y) / _v3.height), _v7(_v6(), _v4, _v5);
        }, [_v6, _v7]);
      return {
        getHighestElementByCoordinates: _v7,
        getCEUnderPointer: _v8
      };
    },
    _v429 = _v0 => {
      let {
          getCEUnderPointer: _v1
        } = _v428(),
        _v2 = (0, _v168.useAppSelector)(_v366.selectedElementsIdsSelector),
        [_v3, _v4] = (0, _v8.useState)(!1),
        _v5 = _v2.includes(_v0);
      return (0, _v8.useEffect)(function () {
        if (!_v5) return;
        _v4(!0);
        let _v0 = (0, _v427.default)(_v0 => {
          let _v1 = _v1(_v0.clientX, _v0.clientY);
          _v1 && _v4(_v1.id === _v0);
        }, 100);
        return document.addEventListener("mousemove", _v0), () => {
          document.removeEventListener("mousemove", _v0);
        };
      }, [_v5, _v0, _v1]), _v3;
    };
  var _v430 = _v0.i(0);
  function _v431(_v0, _v1) {
    if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
  }
  function _v432(_v0, _v1) {
    for (var _v2 = 0; _v2 < _v1.length; _v2++) {
      var _v3 = _v1[_v2];
      _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
    }
  }
  function _v433(_v0, _v1, _v2) {
    return _v1 && _v432(_v0.prototype, _v1), _v2 && _v432(_v0, _v2), _v0;
  }
  function _v434(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v435(_v0, _v1) {
    if ("function" != typeof _v1 && null !== _v1) throw TypeError("Super expression must either be null or a function");
    _v0.prototype = Object.create(_v1 && _v1.prototype, {
      constructor: {
        value: _v0,
        writable: !0,
        configurable: !0
      }
    }), _v1 && _v437(_v0, _v1);
  }
  function _v436(_v0) {
    return (_v436 = Object.setPrototypeOf ? Object.getPrototypeOf : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v437(_v0, _v1) {
    return (_v437 = Object.setPrototypeOf || function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v438(_v0) {
    if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _v0;
  }
  function _v439(_v0, _v1) {
    return _v1 && ("object" == typeof _v1 || "function" == typeof _v1) ? _v1 : _v438(_v0);
  }
  var _v440 = function (_v0, _v1) {
      var _v2 = _v0.x,
        _v3 = _v0.y,
        _v4 = _v1.x,
        _v5 = _v1.y;
      return (Math.atan2(_v2 * _v5 - _v3 * _v4, _v2 * _v4 + _v3 * _v5) / Math.PI * 180 + 360) % 360;
    },
    _v441 = function (_v0) {
      return _v0 * Math.PI / 180;
    },
    _v442 = function (_v0) {
      return Math.cos(_v441(_v0));
    },
    _v443 = function (_v0) {
      return Math.sin(_v441(_v0));
    },
    _v444 = function (_v0, _v1, _v2) {
      var _v3 = _v0 + _v1;
      return _v3 > _v2 ? _v0 = _v3 : (_v1 = _v2 - _v0, _v0 = _v2), {
        width: _v0,
        deltaW: _v1
      };
    },
    _v445 = function (_v0, _v1, _v2) {
      var _v3 = _v0 + _v1;
      return _v3 > _v2 ? _v0 = _v3 : (_v1 = _v2 - _v0, _v0 = _v2), {
        height: _v0,
        deltaH: _v1
      };
    },
    _v446 = function (_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      var _v7 = _v1.width,
        _v8 = _v1.height,
        _v9 = _v1.centerX,
        _v10 = _v1.centerY,
        _v11 = _v1.rotateAngle,
        _v12 = _v7 < 0 ? -1 : 1,
        _v13 = _v8 < 0 ? -1 : 1;
      switch (_v7 = Math.abs(_v7), _v8 = Math.abs(_v8), _v0) {
        case "r":
          var _v14 = _v444(_v7, _v2, _v5);
          _v7 = _v14.width, _v2 = _v14.deltaW, _v4 ? (_v3 = _v2 / _v4, _v8 = _v7 / _v4, _v9 += _v2 / 2 * _v442(_v11) - _v3 / 2 * _v443(_v11), _v10 += _v2 / 2 * _v443(_v11) + _v3 / 2 * _v442(_v11)) : (_v9 += _v2 / 2 * _v442(_v11), _v10 += _v2 / 2 * _v443(_v11));
          break;
        case "tr":
          _v3 = -_v3;
          var _v15 = _v444(_v7, _v2, _v5);
          _v7 = _v15.width, _v2 = _v15.deltaW;
          var _v16 = _v445(_v8, _v3, _v6);
          _v8 = _v16.height, _v3 = _v16.deltaH, _v4 && (_v2 = _v3 * _v4, _v7 = _v8 * _v4), _v9 += _v2 / 2 * _v442(_v11) + _v3 / 2 * _v443(_v11), _v10 += _v2 / 2 * _v443(_v11) - _v3 / 2 * _v442(_v11);
          break;
        case "br":
          var _v17 = _v444(_v7, _v2, _v5);
          _v7 = _v17.width, _v2 = _v17.deltaW;
          var _v18 = _v445(_v8, _v3, _v6);
          _v8 = _v18.height, _v3 = _v18.deltaH, _v4 && (_v2 = _v3 * _v4, _v7 = _v8 * _v4), _v9 += _v2 / 2 * _v442(_v11) - _v3 / 2 * _v443(_v11), _v10 += _v2 / 2 * _v443(_v11) + _v3 / 2 * _v442(_v11);
          break;
        case "b":
          var _v19 = _v445(_v8, _v3, _v6);
          _v8 = _v19.height, _v3 = _v19.deltaH, _v4 ? (_v2 = _v3 * _v4, _v7 = _v8 * _v4, _v9 += _v2 / 2 * _v442(_v11) - _v3 / 2 * _v443(_v11), _v10 += _v2 / 2 * _v443(_v11) + _v3 / 2 * _v442(_v11)) : (_v9 -= _v3 / 2 * _v443(_v11), _v10 += _v3 / 2 * _v442(_v11));
          break;
        case "bl":
          var _v20 = _v444(_v7, _v2 = -_v2, _v5);
          _v7 = _v20.width, _v2 = _v20.deltaW;
          var _v21 = _v445(_v8, _v3, _v6);
          _v8 = _v21.height, _v3 = _v21.deltaH, _v4 && (_v8 = _v7 / _v4, _v3 = _v2 / _v4), _v9 -= _v2 / 2 * _v442(_v11) + _v3 / 2 * _v443(_v11), _v10 -= _v2 / 2 * _v443(_v11) - _v3 / 2 * _v442(_v11);
          break;
        case "l":
          var _v22 = _v444(_v7, _v2 = -_v2, _v5);
          _v7 = _v22.width, _v2 = _v22.deltaW, _v4 ? (_v8 = _v7 / _v4, _v3 = _v2 / _v4, _v9 -= _v2 / 2 * _v442(_v11) + _v3 / 2 * _v443(_v11), _v10 -= _v2 / 2 * _v443(_v11) - _v3 / 2 * _v442(_v11)) : (_v9 -= _v2 / 2 * _v442(_v11), _v10 -= _v2 / 2 * _v443(_v11));
          break;
        case "tl":
          _v3 = -_v3;
          var _v23 = _v444(_v7, _v2 = -_v2, _v5);
          _v7 = _v23.width, _v2 = _v23.deltaW;
          var _v24 = _v445(_v8, _v3, _v6);
          _v8 = _v24.height, _v3 = _v24.deltaH, _v4 && (_v7 = _v8 * _v4, _v2 = _v3 * _v4), _v9 -= _v2 / 2 * _v442(_v11) - _v3 / 2 * _v443(_v11), _v10 -= _v2 / 2 * _v443(_v11) + _v3 / 2 * _v442(_v11);
          break;
        case "t":
          var _v25 = _v445(_v8, _v3 = -_v3, _v6);
          _v8 = _v25.height, _v3 = _v25.deltaH, _v4 ? (_v7 = _v8 * _v4, _v9 += (_v2 = _v3 * _v4) / 2 * _v442(_v11) + _v3 / 2 * _v443(_v11), _v10 += _v2 / 2 * _v443(_v11) - _v3 / 2 * _v442(_v11)) : (_v9 += _v3 / 2 * _v443(_v11), _v10 -= _v3 / 2 * _v442(_v11));
      }
      return {
        position: {
          centerX: _v9,
          centerY: _v10
        },
        size: {
          width: _v7 * _v12,
          height: _v8 * _v13
        }
      };
    },
    _v447 = {
      n: 0,
      ne: 1,
      e: 2,
      se: 3,
      s: 4,
      sw: 5,
      w: 6,
      nw: 7
    },
    _v448 = ["n", "ne", "e", "se", "s", "sw", "w", "nw"],
    _v449 = {
      0: 0,
      1: 1,
      2: 2,
      3: 2,
      4: 3,
      5: 4,
      6: 4,
      7: 5,
      8: 6,
      9: 6,
      10: 7,
      11: 8
    },
    _v450 = function (_v0, _v1) {
      var _v2 = _v449[Math.floor(_v0 / 30)];
      return _v448[(_v447[_v1] + _v2) % 8];
    },
    _v451 = function (_v0) {
      var _v1 = _v0.centerX,
        _v2 = _v0.centerY,
        _v3 = _v0.width,
        _v4 = _v0.height;
      return {
        top: _v2 - _v4 / 2,
        left: _v1 - _v3 / 2,
        width: _v3,
        height: _v4,
        rotateAngle: _v0.rotateAngle
      };
    },
    _v452 = function (_v0) {
      var _v1 = _v0.top,
        _v2 = _v0.left,
        _v3 = _v0.width,
        _v4 = _v0.height;
      return {
        position: {
          centerX: _v2 + _v3 / 2,
          centerY: _v1 + _v4 / 2
        },
        size: {
          width: _v3,
          height: _v4
        },
        transform: {
          rotateAngle: _v0.rotateAngle
        }
      };
    },
    _v453 = _v10.default.div.withConfig({
      displayName: "StyledRect",
      componentId: "sc-1uso172-0"
    })(['position:absolute;border:1px solid #eb5648;.square{position:absolute;width:7px;height:7px;background:white;border:1px solid #eb5648;border-radius:1px;}.resizable-handler{position:absolute;width:14px;height:14px;cursor:pointer;z-index:1;&.tl,&.t,&.tr{top:-7px;}&.tl,&.l,&.bl{left:-7px;}&.bl,&.b,&.br{bottom:-7px;}&.br,&.r,&.tr{right:-7px;}&.l,&.r{margin-top:-7px;}&.t,&.b{margin-left:-7px;}}.rotate{position:absolute;cursor:pointer;left:50%;top:-26px;transform:translateX(-50%);& i{font-size:18px;display:inline-block;width:1em;height:1em;background-size:1em 1em;background-repeat:no-repeat;background-position:center center;background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNOC4zIDUuNEw4IC40bDMuMiAyLjEgMS43IDF6Ii8+PG1hc2sgaWQ9ImIiIHg9IjAiIHk9IjAiIHdpZHRoPSI0LjkiIGhlaWdodD0iNC45IiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2U9IiNGNTVENTQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTExIDkuMkE2IDYgMCAwIDEgMCA2YTYgNiAwIDAgMSAxMC43LTMuOCIvPjx1c2UgbWFzaz0idXJsKCNiKSIgc3Ryb2tlLXdpZHRoPSIyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyMSAwKSIgeGxpbms6aHJlZj0iI2EiLz48L2c+PC9zdmc+Cg==");}}.t,.tl,.tr{top:-3px;}.b,.bl,.br{bottom:-3px;}.r,.tr,.br{right:-3px;}.tl,.l,.bl{left:-3px;}.l,.r{top:50%;margin-top:-3px;}.t,.b{left:50%;margin-left:-3px;}']),
    _v454 = {
      n: "t",
      s: "b",
      e: "r",
      w: "l",
      ne: "tr",
      nw: "tl",
      se: "br",
      sw: "bl"
    },
    _v455 = function (_v0) {
      function _v1() {
        _v431(this, _v1);
        for (var _v0, _v1, _v2 = arguments.length, _v3 = Array(_v2), _v4 = 0; _v4 < _v2; _v4++) _v3[_v4] = arguments[_v4];
        return _v434(_v438(_v438(_v1 = _v439(this, (_v0 = _v436(_v1)).call.apply(_v0, [this].concat(_v3))))), "setElementRef", function (_v0) {
          _v1.$element = _v0;
        }), _v434(_v438(_v438(_v1)), "startDrag", function (_v0) {
          var _v1 = _v0.clientX,
            _v2 = _v0.clientY;
          _v1.props.onDragStart && _v1.props.onDragStart(), _v1._isMouseDown = !0;
          var _v3 = function (_v0) {
            if (_v1._isMouseDown) {
              _v0.stopImmediatePropagation();
              var _v1 = _v0.clientX,
                _v2 = _v0.clientY,
                _v3 = _v1 - _v1,
                _v4 = _v2 - _v2;
              _v1.props.onDrag(_v3, _v4), _v1 = _v1, _v2 = _v2;
            }
          };
          document.addEventListener("mousemove", _v3), document.addEventListener("mouseup", function _v0() {
            document.removeEventListener("mousemove", _v3), document.removeEventListener("mouseup", _v0), _v1._isMouseDown && (_v1._isMouseDown = !1, _v1.props.onDragEnd && _v1.props.onDragEnd());
          });
        }), _v434(_v438(_v438(_v1)), "startRotate", function (_v0) {
          if (0 === _v0.button) {
            var _v1 = _v0.clientX,
              _v2 = _v0.clientY,
              _v3 = _v1.props.styles.transform.rotateAngle,
              _v4 = _v1.$element.getBoundingClientRect(),
              _v5 = {
                x: _v4.left + _v4.width / 2,
                y: _v4.top + _v4.height / 2
              },
              _v6 = {
                x: _v1 - _v5.x,
                y: _v2 - _v5.y
              };
            _v1.props.onRotateStart && _v1.props.onRotateStart(), _v1._isMouseDown = !0;
            var _v7 = function (_v0) {
              if (_v1._isMouseDown) {
                _v0.stopImmediatePropagation();
                var _v1 = _v0.clientX,
                  _v2 = _v0.clientY,
                  _v3 = _v440(_v6, {
                    x: _v1 - _v5.x,
                    y: _v2 - _v5.y
                  });
                _v1.props.onRotate(_v3, _v3);
              }
            };
            document.addEventListener("mousemove", _v7), document.addEventListener("mouseup", function _v0() {
              document.removeEventListener("mousemove", _v7), document.removeEventListener("mouseup", _v0), _v1._isMouseDown && (_v1._isMouseDown = !1, _v1.props.onRotateEnd && _v1.props.onRotateEnd());
            });
          }
        }), _v434(_v438(_v438(_v1)), "startResize", function (_v0, _v1) {
          if (0 === _v0.button) {
            document.body.style.cursor = _v1;
            var _v2 = _v1.props.styles,
              _v3 = _v2.position,
              _v4 = _v3.centerX,
              _v5 = _v3.centerY,
              _v6 = _v2.size,
              _v7 = _v6.width,
              _v8 = _v6.height,
              _v9 = _v2.transform.rotateAngle,
              _v10 = _v0.clientX,
              _v11 = _v0.clientY,
              _v12 = {
                width: _v7,
                height: _v8,
                centerX: _v4,
                centerY: _v5,
                rotateAngle: _v9
              },
              _v13 = _v0.target.getAttribute("class").split(" ")[0];
            _v1.props.onResizeStart && _v1.props.onResizeStart(), _v1._isMouseDown = !0;
            var _v14 = function (_v0) {
              if (_v1._isMouseDown) {
                _v0.stopImmediatePropagation();
                var _v1 = _v0.clientX,
                  _v2 = _v0.clientY,
                  _v3 = _v1 - _v10,
                  _v4 = _v2 - _v11,
                  _v5 = Math.atan2(_v4, _v3),
                  _v6 = Math.sqrt(_v3 * _v3 + _v4 * _v4),
                  _v7 = _v0.shiftKey;
                _v1.props.onResize(_v6, _v5, _v12, _v13, _v7);
              }
            };
            document.addEventListener("mousemove", _v14), document.addEventListener("mouseup", function _v0() {
              document.body.style.cursor = "auto", document.removeEventListener("mousemove", _v14), document.removeEventListener("mouseup", _v0), _v1._isMouseDown && (_v1._isMouseDown = !1, _v1.props.onResizeEnd && _v1.props.onResizeEnd());
            });
          }
        }), _v1;
      }
      return _v435(_v1, _v0), _v433(_v1, [{
        key: "render",
        value: function () {
          var _v0 = this,
            _v1 = this.props,
            _v2 = _v1.styles,
            _v3 = _v2.position,
            _v4 = _v3.centerX,
            _v5 = _v3.centerY,
            _v6 = _v2.size,
            _v7 = _v6.width,
            _v8 = _v6.height,
            _v9 = _v2.transform.rotateAngle,
            _v10 = _v1.zoomable,
            _v11 = _v1.rotatable,
            _v12 = _v1.parentRotateAngle,
            _v13 = _v10.split(",").map(function (_v0) {
              return _v0.trim();
            }).filter(function (_v0) {
              return _v0;
            });
          return _v8.default.createElement(_v453, {
            ref: this.setElementRef,
            onMouseDown: this.startDrag,
            className: "rect single-resizer",
            style: {
              width: Math.abs(_v7),
              height: Math.abs(_v8),
              transform: "rotate(".concat(_v9, "deg)"),
              left: _v4 - Math.abs(_v7) / 2,
              top: _v5 - Math.abs(_v8) / 2
            }
          }, _v11 && _v8.default.createElement("div", {
            className: "rotate",
            onMouseDown: this.startRotate
          }, _v8.default.createElement("i", null)), _v13.map(function (_v0) {
            var _v1 = "".concat(_v450(_v9 + _v12, _v0), "-resize");
            return _v8.default.createElement("div", {
              key: _v0,
              style: {
                cursor: _v1
              },
              className: "".concat(_v454[_v0], " resizable-handler"),
              onMouseDown: function (_v0) {
                return _v0.startResize(_v0, _v1);
              }
            });
          }), _v13.map(function (_v0) {
            return _v8.default.createElement("div", {
              key: _v0,
              className: "".concat(_v454[_v0], " square")
            });
          }));
        }
      }]), _v1;
    }(_v8.PureComponent);
  _v434(_v455, "propTypes", {
    styles: _v430.default.object,
    zoomable: _v430.default.string,
    rotatable: _v430.default.bool,
    onResizeStart: _v430.default.func,
    onResize: _v430.default.func,
    onResizeEnd: _v430.default.func,
    onRotateStart: _v430.default.func,
    onRotate: _v430.default.func,
    onRotateEnd: _v430.default.func,
    onDragStart: _v430.default.func,
    onDrag: _v430.default.func,
    onDragEnd: _v430.default.func,
    parentRotateAngle: _v430.default.number
  });
  var _v456 = function (_v0) {
    function _v1() {
      _v431(this, _v1);
      for (var _v0, _v1, _v2 = arguments.length, _v3 = Array(_v2), _v4 = 0; _v4 < _v2; _v4++) _v3[_v4] = arguments[_v4];
      return _v434(_v438(_v438(_v1 = _v439(this, (_v0 = _v436(_v1)).call.apply(_v0, [this].concat(_v3))))), "handleRotate", function (_v0, _v1) {
        if (_v1.props.onRotate) {
          var _v2 = Math.round(_v1 + _v0);
          _v2 >= 360 ? _v2 -= 360 : _v2 < 0 && (_v2 += 360), _v2 > 356 || _v2 < 4 ? _v2 = 0 : _v2 > 86 && _v2 < 94 ? _v2 = 90 : _v2 > 176 && _v2 < 184 ? _v2 = 180 : _v2 > 266 && _v2 < 274 && (_v2 = 270), _v1.props.onRotate(_v2);
        }
      }), _v434(_v438(_v438(_v1)), "handleResize", function (_v0, _v1, _v2, _v3, _v4) {
        if (_v1.props.onResize) {
          var _v5 = _v1.props,
            _v6 = _v5.rotateAngle,
            _v7 = _v5.aspectRatio,
            _v8 = _v5.minWidth,
            _v9 = _v5.minHeight,
            _v10 = _v1 - _v441(_v6 + _v5.parentRotateAngle),
            _v11 = _v0 * Math.cos(_v10),
            _v12 = _v0 * Math.sin(_v10),
            _v13 = _v4 && !_v7 ? _v2.width / _v2.height : _v7,
            _v14 = _v446(_v3, function (_v0) {
              for (var _v1 = 1; _v1 < arguments.length; _v1++) {
                var _v2 = null != arguments[_v1] ? arguments[_v1] : {},
                  _v3 = Object.keys(_v2);
                "function" == typeof Object.getOwnPropertySymbols && (_v3 = _v3.concat(Object.getOwnPropertySymbols(_v2).filter(function (_v0) {
                  return Object.getOwnPropertyDescriptor(_v2, _v0).enumerable;
                }))), _v3.forEach(function (_v0) {
                  _v434(_v0, _v0, _v2[_v0]);
                });
              }
              return _v0;
            }({}, _v2, {
              rotateAngle: _v6
            }), _v11, _v12, _v13, _v8, _v9),
            _v15 = _v14.position,
            _v16 = _v15.centerX,
            _v17 = _v15.centerY,
            _v18 = _v14.size,
            _v19 = _v18.width,
            _v20 = _v18.height;
          _v1.props.onResize(_v451({
            centerX: _v16,
            centerY: _v17,
            width: _v19,
            height: _v20,
            rotateAngle: _v6
          }), _v4, _v3);
        }
      }), _v434(_v438(_v438(_v1)), "handleDrag", function (_v0, _v1) {
        _v1.props.onDrag && _v1.props.onDrag(_v0, _v1);
      }), _v1;
    }
    return _v435(_v1, _v0), _v433(_v1, [{
      key: "render",
      value: function () {
        var _v0 = this.props,
          _v1 = _v0.top,
          _v2 = _v0.left,
          _v3 = _v0.width,
          _v4 = _v0.height,
          _v5 = _v0.rotateAngle,
          _v6 = _v0.parentRotateAngle,
          _v7 = _v0.zoomable,
          _v8 = _v0.rotatable,
          _v9 = _v0.onRotate,
          _v10 = _v0.onResizeStart,
          _v11 = _v0.onResizeEnd,
          _v12 = _v0.onRotateStart,
          _v13 = _v0.onRotateEnd,
          _v14 = _v0.onDragStart,
          _v15 = _v0.onDragEnd,
          _v16 = _v452({
            top: _v1,
            left: _v2,
            width: _v3,
            height: _v4,
            rotateAngle: _v5
          });
        return _v8.default.createElement(_v455, {
          styles: _v16,
          zoomable: _v7,
          rotatable: !!(_v8 && _v9),
          parentRotateAngle: _v6,
          onResizeStart: _v10,
          onResize: this.handleResize,
          onResizeEnd: _v11,
          onRotateStart: _v12,
          onRotate: this.handleRotate,
          onRotateEnd: _v13,
          onDragStart: _v14,
          onDrag: this.handleDrag,
          onDragEnd: _v15
        });
      }
    }]), _v1;
  }(_v8.Component);
  _v434(_v456, "propTypes", {
    left: _v430.default.number.isRequired,
    top: _v430.default.number.isRequired,
    width: _v430.default.number.isRequired,
    height: _v430.default.number.isRequired,
    rotatable: _v430.default.bool,
    rotateAngle: _v430.default.number,
    parentRotateAngle: _v430.default.number,
    zoomable: _v430.default.string,
    minWidth: _v430.default.number,
    minHeight: _v430.default.number,
    aspectRatio: _v430.default.oneOfType([_v430.default.number, _v430.default.bool]),
    onRotateStart: _v430.default.func,
    onRotate: _v430.default.func,
    onRotateEnd: _v430.default.func,
    onResizeStart: _v430.default.func,
    onResize: _v430.default.func,
    onResizeEnd: _v430.default.func,
    onDragStart: _v430.default.func,
    onDrag: _v430.default.func,
    onDragEnd: _v430.default.func
  }), _v434(_v456, "defaultProps", {
    parentRotateAngle: 0,
    rotateAngle: 0,
    rotatable: !0,
    zoomable: "",
    minWidth: 10,
    minHeight: 10
  });
  let _v457 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsx)("svg", {
      ..._v0,
      ref: _v1,
      width: "17",
      height: "17",
      viewBox: "0 0 17 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v7.jsx)("path", {
        d: "M13.9758 0.0412101L16.9758 0.0415039L16.9745 14.0415C16.9744 15.1461 16.0788 16.0414 14.9743 16.0413L0.974263 16.0399L0.974557 13.0399L13.9746 13.0412L13.9758 0.0412101Z",
        fill: "#17D5FF"
      })
    })),
    _v458 = _v10.default.div.attrs(({
      rect: _v0
    }) => ({
      style: {
        left: `${_v0.x}px`,
        top: `${_v0.y}px`,
        width: `${_v0.width}px`,
        height: `${_v0.height}px`
      }
    })).withConfig({
      displayName: "ResizableRect.style__ResizableRectContainer",
      componentId: "sc-2f292cf2-0"
    })`
  position: absolute;
  cursor: move;
  pointer-events: ${({
      isMultiselect: _v0,
      isSelected: _v1,
      isHovered: _v2
    }) => _v0 || _v1 && !_v2 ? "none" : "all"};

  .single-resizer {
    position: absolute;
    left: 0 !important; /* override react-resizable-rotatable-draggable */
    top: 0 !important; /* override react-resizable-rotatable-draggable */
    z-index: ${({
      isSelected: _v0,
      isMultiselect: _v1
    }) => _v0 || _v1 ? 0 : 990};
    border-color: ${({
      isMultiselect: _v0,
      colorToken: _v1
    }) => _v0 ? _v1 : "transparent"};
    border-style: ${({
      isMultiselect: _v0
    }) => _v0 ? "dashed" : "solid"};
    border-width: 1px;

    .resizable-handler {
      pointer-events: all;
    }

    .square {
      border-radius: 50%;
      opacity: ${({
      isMultiselect: _v0
    }) => +!!_v0};
      ${({
      colorToken: _v0
    }) => `
          width: 8px;
          height: 8px;
          background-color: ${_v0}; border-width: 0;
        `}
    }

    .square {
      &.t {
        top: ${-3.5}px;
        opacity: 0;
      }

      &.l {
        left: ${-3.5}px;
        opacity: 0;
      }

      &.b {
        bottom: ${-3.5}px;
        opacity: 0;
      }

      &.r {
        right: ${-3.5}px;
        opacity: 0;
      }

      &.tl {
        top: ${-3.5}px;
        left: ${-3.5}px;
      }

      &.tr {
        top: ${-3.5}px;
        right: ${-3.5}px;
      }

      &.br {
        bottom: ${-3.5}px;
        right: ${-3.5}px;
      }

      &.bl {
        bottom: ${-3.5}px;
        left: ${-3.5}px;
      }

      &.l,
      &.r {
        top: calc(50% - 1px);
      }
    }

    &:hover {
      border-color: ${({
      colorToken: _v0
    }) => _v0};
      ${({
      isSelected: _v0,
      isMultiselect: _v1
    }) => `border-width: ${_v0 || _v1 ? "1px" : "2px"}`};
    }

    ${({
      isGuidingElement: _v0,
      colorToken: _v1
    }) => _v0 && `border-color: ${_v1}`};

    ${({
      isSelected: _v0,
      isMultiselect: _v1,
      colorToken: _v2
    }) => _v0 && !_v1 && _v10.css`
        border-color: ${_v2};

        .square {
          opacity: 1;
        }
      `}

    ${({
      isShowHandles: _v0
    }) => !_v0 && _v10.css`
        .square,
        .resizable-handler {
          display: none;
          pointer-events: none;
        }
      `}

    ${({
      isMultiselect: _v0
    }) => _v0 && _v10.css`
        .square,
        .resizable-handler {
          &.l,
          &.r,
          &.t,
          &.b {
            display: none;
            pointer-events: none;
          }
        }
      `}

    ${({
      isCrop: _v0,
      isSelected: _v1,
      colorToken: _v2
    }) => _v0 && _v1 && _v10.css`
        border: none;
        outline: 1px dashed ${_v2};
        border-radius: 4px;
        .resizable-handler {
          &.r,
          &.l {
            cursor: ew-resize !important;
            transform: translateY(-8px);
            height: 30px;
          }

          &.t,
          &.b {
            width: 30px;
            transform: translateX(-8px);
            cursor: ns-resize !important;
          }
        }

        .square {
          opacity: 0;
        }
      `}
  }
`,
    _v459 = (0, _v10.default)(_v457).withConfig({
      displayName: "ResizableRect.style__BaseCropHandle",
      componentId: "sc-2f292cf2-1"
    })`
  position: absolute;
  z-index: 1100;
  pointer-events: none;
`,
    _v460 = (0, _v10.default)(_v459).withConfig({
      displayName: "ResizableRect.style__TopLeftCropHandle",
      componentId: "sc-2f292cf2-2"
    })`
  left: -${2.5}px;
  top: -${2.5}px;
  transform: rotate(180deg);
  cursor: nw-resize;
`,
    _v461 = (0, _v10.default)(_v459).withConfig({
      displayName: "ResizableRect.style__BottomLeftCropHandle",
      componentId: "sc-2f292cf2-3"
    })`
  left: -${2.5}px;
  bottom: -${2.5}px;
  transform: rotate(90deg);
  cursor: sw-resize;
`,
    _v462 = (0, _v10.default)(_v459).withConfig({
      displayName: "ResizableRect.style__TopRightCropHandle",
      componentId: "sc-2f292cf2-4"
    })`
  right: -${2.5}px;
  top: -${2.5}px;
  transform: rotate(270deg);
  cursor: ne-resize;
`,
    _v463 = (0, _v10.default)(_v459).withConfig({
      displayName: "ResizableRect.style__BottomRightCropHandle",
      componentId: "sc-2f292cf2-5"
    })`
  right: -${2.5}px;
  bottom: -${2.5}px;
  cursor: se-resize;
`,
    _v464 = ({
      testId: _v0,
      dataSelectionId: _v1,
      dataDragSelectionTag: _v2,
      isSelected: _v3 = !1,
      isHovered: _v4 = !1,
      isMultiselect: _v5 = !1,
      isShowHandles: _v6 = !0,
      isCrop: _v7 = !1,
      rect: _v8,
      isGuidingElement: _v9 = !1,
      rotateAngle: _v10 = 0,
      zoomable: _v11 = "n, w, s, e, nw, ne, se, sw",
      onClick: _v12,
      onDoubleClick: _v13,
      onResizeStart: _v14,
      onResize: _v15,
      onResizeEnd: _v16,
      onDrag: _v17,
      onDragEnd: _v18,
      onDragStart: _v19,
      minWidth: _v20,
      minHeight: _v21
    }) => {
      let [_v22] = (0, _v178.useToken)("colors", ["fill-brand"]),
        _v23 = (0, _v168.useAppSelector)(_v390.stageSizeSelector),
        _v24 = (0, _v412.getRectInPx)(_v8, _v23);
      return (0, _v7.jsxs)(_v458, {
        "data-testid": _v0,
        "data-selection-id": _v1,
        "data-drag-selection-tag": _v2,
        isSelected: _v3,
        isHovered: _v4,
        isMultiselect: _v5,
        colorToken: _v22,
        isCrop: _v7,
        isShowHandles: _v6,
        onClick: _v12,
        onDoubleClick: _v13,
        rect: _v24,
        isGuidingElement: _v9,
        children: [(0, _v7.jsx)(_v456, {
          left: _v24.x,
          top: _v24.y,
          width: _v24.width,
          height: _v24.height,
          rotateAngle: _v10,
          zoomable: _v11,
          onResizeStart: _v14,
          onResize: _v15,
          onResizeEnd: _v16,
          onDrag: _v17,
          onDragStart: _v19,
          onDragEnd: _v18,
          minWidth: _v20,
          minHeight: _v21
        }), _v7 && (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsx)(_v460, {}), (0, _v7.jsx)(_v461, {}), (0, _v7.jsx)(_v462, {}), (0, _v7.jsx)(_v463, {})]
        })]
      });
    },
    _v465 = (0, _v8.memo)(({
      stageSize: _v0,
      rect: _v1,
      sourceFootageRect: _v2,
      ceId: _v3 = "",
      onDrag: _v4,
      onCrop: _v5,
      onCropEnd: _v6
    }) => {
      let _v7 = (0, _v168.useAppSelector)(_v366.selectedElementsIdsSelector),
        _v8 = (0, _v168.useAppSelector)(_v0 => _v0.selection.currentMutation),
        _v9 = (0, _v168.useAppSelector)(_v0 => (0, _v167.elementByIdSelector)(_v0, _v7[0])),
        _v10 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        _v11 = (0, _v168.useAppDispatch)(),
        _v12 = (0, _v8.useRef)(0),
        _v13 = (0, _v8.useRef)(0),
        _v14 = (0, _v8.useRef)(0),
        _v15 = (0, _v8.useRef)(0),
        _v16 = (0, _v8.useRef)(_v10),
        [_v17, _v18] = (0, _v8.useState)({
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }),
        _v19 = _v429(_v3),
        _v20 = _v8 === _v418.Mutation.RECT || _v8 === _v418.Mutation.SOURCE_FOOTAGE_RECT,
        _v21 = (0, _v8.useCallback)((_v0, _v1) => {
          _v4(_v0 * _v2.width, _v1 * _v2.height, _v2);
        }, [_v4, _v2]),
        _v22 = (0, _v8.useCallback)(() => {
          _v20 && _v6();
        }, [_v20, _v6]),
        _v23 = (0, _v8.useCallback)((_v0, _v1, _v2) => {
          if (0 === _v17.width) return;
          let _v3 = (0, _v412.getRoundedRect)((0, _v412.getRectInPercentage)((0, _v412.getRectFromResizableRect)(_v0), _v0)),
            _v4 = (0, _v426.default)(_v17.x + _v17.width, 5),
            _v5 = (0, _v426.default)(_v3.x + _v3.width, 5),
            _v6 = (0, _v426.default)(_v17.y + _v17.height, 5),
            _v7 = (0, _v426.default)(_v3.y + _v3.height, 5);
          _v5 > _v4 && (_v3.width = _v3.width - (_v5 - _v4)), _v7 > _v6 && (_v3.height = _v3.height - (_v7 - _v6)), _v3.width > _v17.width && (_v3.width = _v17.width), _v3.height > _v17.height && (_v3.height = _v17.height), _v3.x < _v17.x && (_v3.x = _v17.x), _v3.y < _v17.y && (_v3.y = _v17.y);
          let _v8 = _v13.current > 0 && _v12.current >= _v3.x && _v3.x <= _v17.x,
            _v9 = _v15.current > 0 && _v14.current >= _v3.y && _v3.y <= _v17.y;
          if ((0, _v419.isLeftDrag)(_v2) && _v8) {
            let _v0 = _v12.current - _v3.x;
            _v3.width = _v13.current + _v0;
          }
          if ((0, _v419.isTopDrag)(_v2) && _v9) {
            let _v0 = _v14.current - _v3.y;
            _v3.height = _v15.current + _v0;
          }
          _v13.current = _v3.width, _v15.current = _v3.height, _v12.current = _v3.x, _v14.current = _v3.y;
          let _v10 = (0, _v419.rectToSourceFootageRect)(_v17, _v3, _v0);
          _v5(_v3, _v10);
        }, [_v17, _v0, _v5]),
        _v24 = (0, _v8.useCallback)(() => {
          _v18((0, _v412.getSourceFootageRectRelativeToStage)(_v1, _v2));
        }, [_v1, _v2]),
        _v25 = (0, _v8.useCallback)(() => {
          _v20 && _v6();
        }, [_v20, _v6]);
      return (0, _v8.useLayoutEffect)(() => {
        _v24();
      }, [_v24, _v9.id, _v2]), (0, _v8.useEffect)(() => {
        if (!_v16.current) {
          _v16.current = _v10;
          return;
        }
        _v16.current === _v10 || _v18((0, _v412.getSourceFootageRectRelativeToStage)(_v1, _v2));
      }, [_v10]), (0, _v8.useEffect)(() => {
        _v11((0, _v353.addOverrideAction)({
          ceId: _v9.id,
          overrides: {
            sourceFootageRect: _v9.sourceFootageRect
          }
        }));
      }, [_v9.sourceFootageRect]), (0, _v7.jsx)(_v464, {
        testId: `crop-layer-${_v3}`,
        rect: _v1,
        onResize: _v23,
        onResizeEnd: _v25,
        onDrag: _v21,
        onDragEnd: _v22,
        minWidth: 75,
        minHeight: 75,
        isSelected: !0,
        isHovered: _v19,
        isShowHandles: !0,
        isCrop: !0
      });
    });
  var _v466 = _v0.i(0),
    _v467 = _v0.i(0);
  let _v468 = _v0 => (0, _v235.isMediaElement)(_v0) && !(0, _v235.isImageHotspot)(_v0),
    _v469 = (0, _v8.memo)(({
      isMultiselect: _v0,
      isShowHandles: _v1 = !0,
      stageSize: _v2,
      rect: _v3,
      originalRect: _v4,
      ceId: _v5 = "",
      rotateAngle: _v6 = 0,
      isGuidingElement: _v7 = !1,
      onDragStart: _v8,
      onDrag: _v9,
      onDragEnd: _v10,
      onResize: _v11,
      onResizeEnd: _v12
    }) => {
      let _v13 = (0, _v168.useAppDispatch)(),
        _v14 = (0, _v168.useAppSelector)(_v366.selectedElementsIdsSelector),
        _v15 = (0, _v168.useAppSelector)(_v366.selectedElementsSelector),
        _v16 = (0, _v168.useAppSelector)(_v0 => _v0.dragonflyState.currentTime),
        _v17 = (0, _v168.useAppSelector)(_v0 => _v0.selection.currentMutation) === _v418.Mutation.RECT,
        {
          getHighestElementByCoordinates: _v18,
          getCEUnderPointer: _v19
        } = _v428(),
        _v20 = _v429(_v5),
        _v21 = 0 === _v14.length,
        _v22 = _v14.includes(_v5),
        _v23 = _v14.length > 1,
        _v24 = (0, _v412.getRectInPx)(_v3, _v2),
        _v25 = (0, _v412.getRectInPx)(_v4, _v2),
        _v26 = (0, _v8.useCallback)(_v0 => {
          if (_v22 && _v23) return;
          let _v1 = _v19(_v0.clientX, _v0.clientY);
          _v1 && _v13((0, _v366.selectCEsAction)({
            ceIds: [_v1.id],
            isMultiSelect: (0, _v467.isMultiSelect)(_v0)
          }));
        }, [_v22, _v23, _v19, _v13]),
        _v27 = (0, _v8.useCallback)((_v0, _v1) => {
          if (_v0) return _v9(_v0, _v1);
          _v21 ? _v13((0, _v366.selectCEsAction)({
            ceIds: [_v5]
          })) : _v22 ? _v9(_v0, _v1) : _v13((0, _v366.resetSelectionAction)());
        }, [_v0, _v9, _v21, _v22, _v13, _v5]),
        _v28 = (0, _v8.useCallback)((_v0, _v1, _v2) => {
          let _v3 = (0, _v412.getDeltaRect)({
            prevRect: _v24,
            nextRect: (0, _v412.getRectFromResizableRect)(_v0)
          });
          _v21 ? _v13((0, _v366.selectCEsAction)({
            ceIds: [_v5]
          })) : _v22 ? _v11(_v3, _v2) : _v13((0, _v366.resetSelectionAction)());
        }, [_v5, _v11, _v24, _v13, _v21, _v22]),
        _v29 = (0, _v8.useCallback)((_v0, _v1, _v2) => {
          let _v3 = (0, _v412.getRectInPercentage)((0, _v412.getRectFromResizableRect)(_v0), _v2),
            _v4 = (0, _v412.getResizedRect)(_v3, _v3, _v2),
            _v5 = (0, _v412.getRectInPx)(_v4, _v2);
          _v11((0, _v412.getDeltaRect)({
            prevRect: _v25,
            nextRect: _v5
          }), _v2);
        }, [_v11, _v25, _v3, _v2]),
        _v30 = (0, _v8.useCallback)(_v0 => {
          _v0.stopPropagation(), _v0.preventDefault();
          let _v1 = document.querySelector("[data-testid=canvas]"),
            _v2 = _v1?.getBoundingClientRect();
          if (_v2) {
            let _v0 = {
                x: (_v0.clientX - _v2.x) / _v2.width,
                y: (_v0.clientY - _v2.y) / _v2.height
              },
              _v1 = _v18(_v16, _v0.x, _v0.y);
            if (_v17 || !_v1) return;
            let _v2 = _v0.button,
              _v3 = (0, _v467.isMultiSelect)(_v0);
            if (_v2 && _v14.includes(_v1.id)) return;
            _v13((0, _v366.selectCEsAction)({
              ceIds: [_v1.id],
              isMultiSelect: _v3
            })), _v3 && _v14.includes(_v1.id) && _v13((0, _v366.deselectCEsAction)({
              ceIdsToRemove: [_v1.id]
            }));
          }
        }, [_v16, _v13, _v18, _v17, _v14]),
        {
          handleElementDoubleClick: _v31
        } = (0, _v466.useElementDoubleClick)({
          isCropAllowed: _v468
        });
      return (0, _v7.jsx)(_v367.default, {
        onContextMenu: _v26,
        children: (0, _v7.jsx)(_v464, {
          testId: `selection-layer-${_v5}${_v22 ? "-selected" : ""}`,
          dataSelectionId: _v5,
          dataDragSelectionTag: _v365.STAGE_DRAG_SELECT_DATA_TAG,
          isSelected: _v22,
          isHovered: _v20,
          isMultiselect: !!_v0,
          isShowHandles: !!_v1,
          onClick: _v30,
          onDoubleClick: () => _v31(_v15[0]),
          rect: _v3,
          isGuidingElement: _v7,
          rotateAngle: _v6,
          onResize: _v0 ? _v29 : _v28,
          onResizeEnd: _v12,
          onDrag: _v27,
          onDragStart: _v8,
          onDragEnd: _v10,
          zoomable: "nw, ne, se, sw"
        })
      });
    }),
    _v470 = ({
      rect: _v0,
      originalRect: _v1,
      stageSize: _v2,
      onDrag: _v3,
      onDragEnd: _v4,
      onResize: _v5,
      onResizeEnd: _v6
    }) => {
      let _v7 = (0, _v8.useCallback)((_v0, _v1) => {
        _v5(_v0, _v1, _v1);
      }, [_v5, _v1]);
      return (0, _v7.jsx)(_v469, {
        isMultiselect: !0,
        isShowHandles: !0,
        rect: _v0,
        originalRect: _v1,
        stageSize: _v2,
        onDrag: _v3,
        onDragEnd: _v4,
        onResize: _v7,
        onResizeEnd: _v6
      });
    },
    _v471 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v168.useAppSelector)(_v390.stageSizeSelector),
        _v2 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        _v3 = (0, _v168.useAppSelector)(_v224.isSomeSelectedElementsInCurrentTimeSelector),
        _v4 = (0, _v168.useAppSelector)(_v224.isSomeSelectedNonSoundElementsInCurrentTimeSelector),
        _v5 = (0, _v168.useAppSelector)(_v353.overridesWithoutTimingSelector, _v416.shallowEqual),
        _v6 = (0, _v168.useAppSelector)(_v167.interactiveOverlaysSelector),
        _v7 = (0, _v168.useAppSelector)(_v366.selectedElementsWithComputedRectsSelector),
        _v8 = (0, _v168.useAppSelector)(_v224.elementsInCurrentTimeSelector, _v416.shallowEqual),
        _v9 = (0, _v168.useAppSelector)(_v366.selectedElementsIdsSelector),
        _v10 = (0, _v168.useAppSelector)(_v399.textAnimationsMetadataSelector),
        _v11 = (0, _v168.useAppSelector)(_v366.computedRectByCEIdSelector),
        _v12 = (0, _v168.useAppSelector)(_v0 => _v0.stage.guides.isSnap),
        _v13 = (0, _v168.useAppSelector)(_v0 => _v0.toolbar.currentToolbar === _v422.ToolbarType.CROP),
        _v14 = (0, _v168.useAppSelector)(_v224.isDraggingAndResizingDisabledSelector),
        [_v15, _v16] = (0, _v8.useState)([]),
        _v17 = (0, _v8.useRef)({
          x: 0,
          y: 0
        }),
        {
          getSnappingGuidesRect: _v18
        } = _v402(_v1),
        {
          handleCrop: _v19,
          handleCropDrag: _v20,
          handleCropEnd: _v21
        } = _v420(),
        _v22 = (0, _v8.useMemo)(() => _v7.filter(_v0 => _v0.type != _v417.CompositionElementType.SOUND), [_v7]),
        _v23 = (0, _v8.useMemo)(() => {
          let _v0 = [],
            _v1 = [],
            _v2 = 0;
          return _v22.forEach(_v0 => {
            let _v1 = _v5?.[_v0.id]?.rect,
              _v2 = (0, _v235.getPadding)(_v0, _v10);
            _v0.push((0, _v412.getRectWithPadding)(_v1 || _v0.rect, _v2)), _v1.push((0, _v412.getRectWithPadding)(_v0.rect, _v2)), _v2 = Math.max(_v0.zindex || 0, _v2);
          }), {
            overridingRect: (0, _v423.getBoundingBoxRect)(_v0),
            originalRect: (0, _v423.getBoundingBoxRect)(_v1),
            zindex: _v2
          };
        }, [_v22, _v5, _v10]),
        _v24 = _v9.length > 1,
        _v25 = () => {
          _v17.current.x = 0, _v17.current.y = 0;
        },
        _v26 = (0, _v8.useCallback)((_v0, _v1) => {
          let _v2 = _v1.rect,
            _v3 = _v0.height / _v2.height,
            _v4 = (0, _v374.getActualFontSize)(_v1.fontSize * _v3, _v2),
            _v5 = (0, _v374.getRelativeFontSize)(_v4, _v2);
          _v0((0, _v353.addOverrideAction)({
            ceId: _v1.id,
            overrides: {
              fontSize: _v5
            }
          }));
        }, [_v0, _v2]),
        _v27 = (0, _v8.useCallback)(_v0 => {
          let _v1 = _v6.find(_v0 => _v0.id === _v0);
          if (!_v1) throw Error(`Overlay with id ${_v0} not found`);
          return (0, _v256.getAllElements)(_v1.interactiveLayers);
        }, [_v6]),
        _v28 = (0, _v8.useCallback)(({
          rect: _v0,
          padding: _v1
        }) => {
          let {
            snappedRect: _v2,
            activeGuides: _v3,
            guidingElements: _v4
          } = _v18({
            rect: _v0,
            padding: _v1
          });
          return _v16(_v4 || []), _v0((0, _v390.setActiveGuidesStageAction)(_v3)), _v2;
        }, [_v0, _v18]),
        _v29 = (0, _v8.useCallback)(({
          deltaRectBeforeSnap: _v0,
          originalRect: _v1,
          compositionElements: _v2
        }) => {
          let _v3,
            _v4 = (0, _v412.getRectWithDelta)({
              rect: _v1,
              deltaRect: _v0
            });
          _v3 = _v12 ? _v28({
            rect: _v4,
            padding: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }
          }) : _v4;
          let _v5 = (0, _v412.getDeltaRect)({
            prevRect: _v1,
            nextRect: _v3
          });
          _v2.forEach(_v0 => {
            let _v1 = (0, _v412.getRectWithDelta)({
              rect: _v0.rect,
              deltaRect: _v5
            });
            _v0((0, _v353.addOverrideAction)({
              ceId: _v0.id,
              overrides: {
                rect: _v1
              }
            }));
          });
        }, [_v0, _v28, _v12]),
        _v30 = (0, _v8.useCallback)(_v0 => {
          let _v1 = _v7.map(_v0 => (0, _v235.isOverlayElement)(_v0) ? [_v0, ..._v27(_v0.overlayId)] : _v0).flat();
          _v29({
            deltaRectBeforeSnap: _v0,
            originalRect: _v23.originalRect,
            compositionElements: _v1
          });
        }, [_v27, _v29, _v23.originalRect, _v7]),
        _v31 = (0, _v8.useCallback)((_v0, _v1) => {
          let _v2 = _v11.get(_v1.id);
          if (!_v2) throw Error(`Computed rect not found for ${_v1.type} element with id ${_v1.id}`);
          _v29({
            deltaRectBeforeSnap: _v0,
            originalRect: _v2,
            compositionElements: [_v1, ..._v27(_v1.overlayId)]
          });
        }, [_v11, _v27, _v29]),
        _v32 = (0, _v8.useCallback)((_v0, _v1) => {
          let _v2;
          if (_v14) return;
          _v0((0, _v366.setMutationAction)(_v418.Mutation.RECT)), _v17.current.x += _v0, _v17.current.y += _v1;
          let _v3 = (0, _v412.getRectInPercentage)({
            ..._v17.current,
            width: 0,
            height: 0
          }, _v1);
          if (_v24) return void _v30(_v3);
          let _v4 = _v7[0];
          if ((0, _v425.hasComputedRect)(_v4)) return void _v31(_v3, _v4);
          let _v5 = (0, _v412.getRectWithDelta)({
            deltaRect: _v3,
            rect: _v4 ? _v4.rect : _v311.DEFAULT_RECT
          });
          _v2 = _v12 ? _v28({
            rect: _v5,
            padding: (0, _v235.getPadding)(_v4, _v10)
          }) : _v5, _v0((0, _v353.addOverrideAction)({
            ceId: _v4.id,
            overrides: {
              rect: _v2
            }
          }));
        }, [_v14, _v0, _v1, _v24, _v7, _v12, _v30, _v31, _v10, _v28]),
        _v33 = (0, _v8.useCallback)((_v0, _v1) => {
          let _v2 = _v11.get(_v0.id);
          if (!_v2) throw Error(`Computed rect not found for overlay with id ${_v0.id}`);
          let _v3 = (0, _v412.getDeltaRect)({
            prevRect: _v2,
            nextRect: _v1
          });
          _v0((0, _v353.addOverrideAction)({
            ceId: _v0.id,
            overrides: {
              rect: _v1
            }
          })), _v27(_v0.overlayId).forEach(_v0 => {
            let _v1 = (0, _v412.getResizedRectByResizedMultiRect)({
              originalRect: _v0.rect,
              originalMultiRect: _v2,
              deltaMultiRect: _v3
            });
            _v0((0, _v353.addOverrideAction)({
              ceId: _v0.id,
              overrides: {
                rect: _v1
              }
            }));
          });
        }, [_v11, _v0, _v27]),
        _v34 = (0, _v8.useCallback)((_v0, _v1) => {
          (0, _v425.hasComputedRect)(_v0) ? _v33(_v0, _v1) : ((0, _v235.isTextElement)(_v0) && _v26(_v1, _v0), _v0((0, _v353.addOverrideAction)({
            ceId: _v0.id,
            overrides: {
              rect: _v1
            }
          })));
        }, [_v26, _v33, _v0]),
        _v35 = (0, _v8.useCallback)((_v0, _v1) => {
          _v14 || (_v0((0, _v366.setMutationAction)(_v418.Mutation.RECT)), (0, _v415.batch)(() => {
            _v7.forEach(_v0 => {
              let _v1 = _v5[_v0.id],
                _v2 = (0, _v412.getRectInPercentage)(_v0, _v1),
                _v3 = {
                  ..._v311.DEFAULT_RECT,
                  ..._v0.rect,
                  ..._v1?.rect
                },
                _v4 = (0, _v412.getRectWithDelta)({
                  rect: _v3,
                  deltaRect: _v2
                }),
                _v5 = _v0.type === _v417.CompositionElementType.SOLID || _v0.type === _v417.CompositionElementType.BUTTON || _v0.type === _v417.CompositionElementType.IFRAME || (0, _v235.isPollElement)(_v0) && _v0.styleId === _v424.POLL_STYLE_ID.resizableBox ? _v4 : (0, _v412.getResizedRect)(_v0?.rect, _v4, _v1);
              _v34(_v0, _v5);
            });
          }));
        }, [_v14, _v0, _v7, _v5, _v1, _v34]),
        _v36 = (0, _v8.useCallback)((_v0, _v1, _v2) => {
          if (_v14) return;
          _v0((0, _v366.setMutationAction)(_v418.Mutation.RECT));
          let _v3 = (0, _v412.getRectInPercentage)(_v0, _v1);
          (0, _v415.batch)(() => {
            _v7.forEach(_v0 => {
              let _v1 = (0, _v412.getResizedRectByResizedMultiRect)({
                originalRect: _v0.rect,
                originalMultiRect: _v2,
                deltaMultiRect: _v3
              });
              _v34(_v0, _v1);
            });
          });
        }, [_v14, _v0, _v1, _v7, _v34]),
        _v37 = (0, _v8.useCallback)(() => {
          _v14 || (_v16([]), _v0((0, _v390.setActiveGuidesStageAction)([])), _v0((_v0, _v1) => {
            let _v2 = _v1(),
              _v3 = (0, _v353.overridesWithoutTimingSelector)(_v2),
              _v4 = (0, _v167.nonHiddenLayersSelector)(_v2),
              _v5 = (0, _v167.interactiveOverlaysSelector)(_v2),
              _v6 = (0, _v167.orientationSelector)(_v2),
              _v7 = (0, _v373.fontsSelector)(_v2),
              _v8 = (0, _v373.languagesSelector)(_v2);
            Object.keys(_v3).forEach(_v0 => {
              let _v1,
                _v2,
                _v3 = _v3[_v0].rect;
              if (!_v3 || (_v0((0, _v353.removeOverrideAction)({
                ceId: _v0,
                key: "rect"
              })), _v0((0, _v353.removeOverrideAction)({
                ceId: _v0,
                key: "fontSize"
              })), (_v2 = (0, _v421.getLayerDataByCeId)(_v0, _v4).layer) || ({
                interactiveOverlay: _v1,
                layer: _v2
              } = (0, _v421.getInteractiveOverlayLayerDataByCeId)(_v0, _v5)), !_v2)) return;
              let _v4 = _v2.composition.find(_v0 => _v0.id === _v0),
                _v5 = _v4?.rect;
              if (_v4 && _v5) if ((0, _v256.isValidRect)(_v3)) {
                let _v0 = {
                  rect: _v3
                };
                if ((0, _v235.isTextElement)(_v4)) {
                  let _v0 = _v3.height / _v5.height;
                  (_v0 = (0, _v235.createPartialTextElement)({
                    textElement: _v4,
                    fontSize: (0, _v374.getActualFontSize)(_v4.fontSize * _v0, _v6),
                    fetchedFonts: _v7,
                    languages: _v8,
                    orientation: _v6
                  })).rect = _v3;
                }
                _v0((0, _v167.updateElementAction)({
                  ceId: _v0,
                  layerId: _v2.id,
                  interactiveOverlayId: _v1?.id,
                  element: _v0
                }));
              } else _v0((0, _v167.deleteElementAction)({
                ceId: _v0,
                interactiveOverlayId: _v1?.id
              })), _v165.default.sendLog(_v160.INVALID_RECT, _v170.LogComponent.EDITOR_ERROR, {
                element: JSON.stringify(_v4),
                newRect: JSON.stringify(_v3),
                flow: "updateRect"
              });
            });
          }), setTimeout(() => {
            _v0((0, _v366.setMutationAction)(null));
          }));
        }, [_v14, _v0]),
        _v38 = (0, _v8.useMemo)(() => {
          let _v0,
            _v1 = _v9.length > 1;
          return (_v0 = _v1 ? _v8 ? (0, _v414.default)([..._v8, ..._v7], (_v0, _v1) => _v0.id === _v1.id) : _v7 : _v8) && 0 !== _v0.length ? _v0.map(_v0 => {
            let _v1 = _v0.type !== _v417.CompositionElementType.TRANSITION && _v0.type !== _v417.CompositionElementType.SOUND,
              _v2 = function ({
                element: _v0,
                isMultiSelect: _v1,
                isSomeSelectedElementsInCurrentTime: _v2,
                selectedCEIds: _v3
              }) {
                return !!((0, _v425.isStageSelectable)(_v0) || _v1 && _v2 && _v3.includes(_v0.id));
              }({
                isMultiSelect: _v1,
                isSomeSelectedElementsInCurrentTime: _v3,
                selectedCEIds: _v9,
                element: _v0
              });
            if (!_v1 || !_v2) return null;
            let _v3 = (0, _v235.getPadding)(_v0, _v10),
              _v4 = (0, _v412.getRectWithPadding)(_v5?.[_v0.id]?.rect ?? _v11.get(_v0.id) ?? _v0.rect, _v3),
              _v5 = _v15.includes(_v0.id),
              _v6 = _v5?.[_v0.id]?.rotate ?? _v0?.rotate ?? 0,
              _v7 = _v9.includes(_v0.id),
              _v8 = (0, _v235.isMediaElement)(_v0);
            return _v13 && _v7 && _v8 ? (0, _v7.jsx)(_v465, {
              isCrop: _v13,
              rect: _v4,
              stageSize: _v1,
              sourceFootageRect: _v5?.[_v0.id]?.sourceFootageRect || _v0.sourceFootageRect,
              ceId: _v0.id,
              onDrag: _v20,
              onCrop: _v19,
              onCropEnd: _v21
            }, _v0.id) : (0, _v7.jsx)(_v469, {
              isShowHandles: 1 === _v9.length,
              rect: _v4,
              originalRect: _v0.rect,
              stageSize: _v1,
              ceId: _v0.id,
              onDragStart: _v25,
              onDrag: _v32,
              onDragEnd: _v37,
              onResize: _v35,
              onResizeEnd: _v37,
              rotateAngle: _v6,
              isGuidingElement: _v5
            }, _v0.id);
          }) : null;
        }, [_v11, _v8, _v15, _v19, _v20, _v21, _v32, _v35, _v13, _v3, _v5, _v9, _v7, _v1, _v10, _v37]);
      return (0, _v7.jsxs)(_v7.Fragment, {
        children: [_v38, _v22.length > 1 && _v4 && (0, _v7.jsx)(_v470, {
          rect: _v23.overridingRect,
          originalRect: _v23.originalRect,
          stageSize: _v1,
          onDrag: _v32,
          onDragEnd: _v37,
          onResize: _v36,
          onResizeEnd: _v37
        })]
      });
    };
  var _v472 = _v0.i(0),
    _v473 = (0, _v8.forwardRef)(function (_v0, _v1) {
      return _v8.default.createElement("svg", (0, _v472.c)({
        viewBox: "0 0 24 24",
        ref: _v1
      }, _v0), _v8.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.5934 1.60272C11.8846 1.45947 12.2271 1.4664 12.5123 1.62131L21.4774 6.49216C21.7995 6.66714 22 7.00431 22 7.37085V16.7535C22 17.1245 21.7946 17.4649 21.4665 17.638L12.4665 22.3845C12.1746 22.5385 11.8254 22.5385 11.5335 22.3845L2.53351 17.638C2.20537 17.4649 2 17.1245 2 16.7535V6.9451C2 6.56401 2.2166 6.21605 2.55854 6.04782L11.5934 1.60272ZM4 7.56758V16.1503L12 20.3695L20 16.1503V7.9656L12.0121 3.62569L4 7.56758ZM8 8H12V10H11V14H14V12.5H16V14V14.5V16H8V14H9V10H8V8Z"
      }));
    });
  _v473.tags = ["brand", "company", "custom", "customization", "customize", "edit", "logo", "logomark", "watermark"];
  var _v474 = _v0.i(0),
    _v475 = _v0.i(0);
  let _v476 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsxs)("svg", {
      ref: _v1,
      ..._v0,
      viewBox: "0 0 100 54",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _v7.jsx)("rect", {
        y: "0.305664",
        width: "100",
        height: "53.0614",
        rx: "10.2041",
        fill: "#FAFCFD"
      }), (0, _v7.jsxs)("g", {
        clipPath: "url(#clip0_2780_32131)",
        children: [(0, _v7.jsx)("path", {
          d: "M27.7861 22.7678C27.7092 24.4346 26.5399 26.7166 24.2769 29.6139C21.9382 32.6394 19.959 34.1521 18.3404 34.1521C17.3377 34.1521 16.4888 33.2311 15.7959 31.3878C15.3325 29.6986 14.8702 28.0094 14.4079 26.3202C13.8936 24.4781 13.3414 23.5559 12.7502 23.5559C12.6214 23.5559 12.1709 23.8253 11.4 24.3628L10.5901 23.3253C11.439 22.5831 12.2773 21.8408 13.1014 21.0974C14.2341 20.1234 15.0842 19.6117 15.6505 19.56C16.9889 19.4317 17.813 20.3434 18.1228 22.2925C18.4574 24.3958 18.688 25.705 18.818 26.2167C19.2046 27.9624 19.6291 28.834 20.0926 28.834C20.4532 28.834 20.9935 28.2682 21.7148 27.1354C22.4348 26.0026 22.8214 25.1416 22.8735 24.5499C22.9763 23.5724 22.5897 23.083 21.7148 23.083C21.3021 23.083 20.8777 23.1771 20.4414 23.3642C21.2868 20.6081 22.903 19.2694 25.2866 19.3459C27.0542 19.3976 27.8878 20.5387 27.7861 22.7689V22.7678Z",
          fill: "#0A0E12"
        }), (0, _v7.jsx)("path", {
          d: "M38.4045 28.167C37.6832 29.5232 36.6924 30.7525 35.4297 31.8535C33.7035 33.338 31.9784 34.0815 30.2534 34.0815C29.4541 34.0815 28.8417 33.825 28.4172 33.3133C27.9928 32.8016 27.7929 32.1358 27.8189 31.3159C27.8438 30.4714 28.1074 29.1656 28.6099 27.3988C29.1124 25.632 29.3643 24.6839 29.3643 24.5557C29.3643 23.8911 29.1314 23.557 28.6691 23.557C28.5142 23.557 28.0767 23.8264 27.3555 24.3639L26.4675 23.3264C27.2916 22.5842 28.1157 21.8419 28.9398 21.0985C30.0477 20.1245 30.8718 19.6128 31.4133 19.5611C32.2622 19.4846 32.8865 19.7328 33.2861 20.308C33.6846 20.8832 33.8323 21.629 33.7307 22.5477C33.3949 24.1052 33.0343 26.0837 32.6476 28.4822C32.6216 29.5809 33.0213 30.129 33.8454 30.129C34.206 30.129 34.8492 29.7503 35.7773 28.9916C36.5494 28.3599 37.1807 27.7658 37.6702 27.2094L38.4045 28.1693V28.167ZM35.0431 14.4994C35.0171 15.137 34.6955 15.7498 34.0771 16.3356C33.3819 16.9979 32.5578 17.3296 31.6048 17.3296C30.1375 17.3296 29.4281 16.6932 29.4801 15.4181C29.505 14.7558 29.8975 14.1171 30.6578 13.5054C31.418 12.8949 32.261 12.5879 33.1892 12.5879C33.7295 12.5879 34.18 12.7996 34.5418 13.2196C34.9024 13.6407 35.0691 14.0677 35.0443 14.4994H35.0431Z",
          fill: "#0A0E12"
        }), (0, _v7.jsx)("path", {
          d: "M62.5305 28.1663C61.8093 29.5226 60.8185 30.7519 59.5558 31.8529C57.8295 33.3374 56.1045 34.0808 54.3795 34.0808C52.6544 34.0808 51.893 33.1598 51.945 31.3153C51.9698 30.4954 52.1318 29.5109 52.4274 28.3581C52.723 27.2053 52.885 26.3089 52.911 25.669C52.937 24.6962 52.6402 24.2092 52.0195 24.2092C51.3479 24.2092 50.5475 25.0044 49.617 26.5924C48.6345 28.2581 48.1048 29.872 48.0279 31.4341C47.9759 32.5375 48.0847 33.3833 48.3531 33.9714C46.5559 34.0232 45.2967 33.7279 44.579 33.088C43.9358 32.5246 43.6414 31.5894 43.6923 30.2825C43.7171 29.4626 43.8436 28.6427 44.0718 27.8228C44.2988 27.003 44.4253 26.2725 44.4513 25.6314C44.5033 24.6833 44.1546 24.2092 43.4073 24.2092C42.7618 24.2092 42.0654 24.9409 41.3181 26.4007C40.5709 27.8605 40.1571 29.3862 40.0802 30.9742C40.0282 32.4093 40.1204 33.408 40.3569 33.9714C38.5893 34.0232 37.3336 33.6526 36.5911 32.8598C35.9751 32.1964 35.6937 31.1871 35.7457 29.8332C35.7706 29.1697 35.8876 28.2428 36.1004 27.0547C36.3132 25.8666 36.4315 24.9409 36.4563 24.2763C36.5072 23.8163 36.3913 23.5869 36.1087 23.5869C35.9538 23.5869 35.5164 23.8469 34.7951 24.3645L33.8682 23.327C33.997 23.2258 34.8069 22.4824 36.3026 21.099C37.3845 20.1004 38.1175 19.5887 38.5041 19.5628C39.1733 19.511 39.7149 19.7863 40.1263 20.3886C40.5389 20.9908 40.7447 21.6896 40.7447 22.4836C40.7447 22.74 40.7187 22.9835 40.6678 23.2141C41.0544 22.6259 41.5049 22.1119 42.0204 21.6766C43.2051 20.652 44.5317 20.0745 45.999 19.9474C47.2606 19.8451 48.1615 20.1392 48.7042 20.8308C49.1405 21.3943 49.3462 22.2024 49.3214 23.2529C49.5023 23.1 49.695 22.9329 49.9019 22.7529C50.4931 22.0613 51.0724 21.5108 51.64 21.1002C52.5929 20.4086 53.5849 20.0239 54.6148 19.9463C55.8515 19.8439 56.7394 20.1368 57.2798 20.8273C57.7421 21.3884 57.949 22.193 57.8981 23.2388C57.8721 23.954 57.6983 24.9938 57.3767 26.3607C57.0539 27.7264 56.8931 28.511 56.8931 28.7145C56.8671 29.2509 56.9191 29.6214 57.048 29.8249C57.1769 30.0296 57.4855 30.1308 57.975 30.1308C58.3356 30.1308 58.9788 29.752 59.9069 28.9933C60.679 28.3616 61.3104 27.7676 61.7999 27.2112L62.5341 28.171L62.5305 28.1663Z",
          fill: "#0A0E12"
        }), (0, _v7.jsx)("path", {
          d: "M77.0164 28.1277C76.2692 29.3569 74.8019 30.5838 72.6122 31.8119C69.8822 33.3728 67.1131 34.1527 64.3062 34.1527C62.2194 34.1527 60.7249 33.4611 59.824 32.0777C59.1808 31.1296 58.871 30.0027 58.897 28.6958C58.9218 26.6208 59.85 24.6493 61.6791 22.7778C63.6879 20.7287 66.0573 19.7041 68.7873 19.7041C71.3116 19.7041 72.65 20.7275 72.8049 22.7719C72.9078 24.0753 72.1866 25.4174 70.6424 26.7973C68.9931 28.3053 66.9192 29.264 64.4221 29.6722C64.8844 30.3109 65.5808 30.6309 66.5078 30.6309C68.3617 30.6309 70.3835 30.1627 72.5732 29.224C74.1433 28.5653 75.3801 27.8795 76.2822 27.1702L77.0164 28.1288V28.1277ZM68.247 24.1141C68.2718 23.4271 67.9892 23.0813 67.3981 23.0813C66.626 23.0813 65.8421 23.6106 65.0452 24.6681C64.2483 25.7256 63.8357 26.7396 63.8108 27.7077C63.7967 27.7077 63.7967 27.8736 63.8108 28.2053C65.0712 27.7465 66.1637 27.0466 67.0895 26.1032C67.8344 25.2881 68.221 24.6246 68.247 24.1141Z",
          fill: "#0A0E12"
        }), (0, _v7.jsx)("path", {
          d: "M87.5037 25.5518C87.3997 27.9056 86.5247 29.9406 84.8765 31.6545C83.2284 33.3684 81.1805 34.2259 78.7343 34.2259C76.6994 34.2259 75.1541 33.573 74.0983 32.2685C73.3262 31.2969 72.9006 30.0817 72.8237 28.6243C72.6937 26.4234 73.4918 24.4025 75.2192 22.5604C77.0731 20.5136 79.4035 19.4902 82.2104 19.4902C84.0122 19.4902 85.3767 20.0925 86.3048 21.2935C87.1809 22.3945 87.5794 23.8144 87.5025 25.5529L87.5037 25.5518ZM83.1385 25.4071C83.1645 24.7142 83.0676 24.0778 82.8488 23.5015C82.6301 22.9251 82.3132 22.6345 81.9029 22.6345C80.5894 22.6345 79.5075 23.3415 78.6586 24.7531C77.9362 25.9094 77.5496 27.141 77.4987 28.449C77.4727 29.0913 77.5886 29.6559 77.8463 30.1441C78.1289 30.7087 78.5285 30.991 79.044 30.991C80.2027 30.991 81.1947 30.3111 82.0188 28.9501C82.714 27.8197 83.0865 26.6399 83.1385 25.4083V25.4071Z",
          fill: "#0A0E12"
        })]
      }), (0, _v7.jsx)("defs", {
        children: (0, _v7.jsx)("clipPath", {
          id: "clip0_2780_32131",
          children: (0, _v7.jsx)("rect", {
            width: "76.9233",
            height: "21.6371",
            fill: "white",
            transform: "translate(10.5901 12.5879)"
          })
        })
      })]
    })),
    _v477 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        _v2 = (0, _v168.useAppSelector)(_v390.stageSizeSelector),
        _v3 = (0, _v168.useAppSelector)(_v176.isInteractiveSelector),
        {
          showUpsell: _v4,
          shouldShowUpsell: _v5
        } = (0, _v474.useBrandUpsell)(),
        {
          hasCreateBrandView: _v6,
          hasCreateBrandApply: _v7,
          canRemoveCreateWatermark: _v8 = !1
        } = (0, _v8.useContext)(_v204.PermissionsContext),
        _v9 = _v6 && !_v7 && !_v3,
        _v10 = (0, _v8.useMemo)(() => ({
          width: .1375 * _v2.height,
          height: .1375 * _v2.height,
          padding: .1375 * _v2.height >= 68 ? 20 : .1375 * _v2.height / 3.4
        }), [_v2]),
        _v11 = (0, _v8.useCallback)(() => {
          _v7 && !_v5 ? _v0((0, _v166.openInspectorAction)({
            inspectorType: _v169.InspectorType.BRAND_KIT
          })) : ((0, _v205.sendTrackLogoPlaceholderTrigger)(), _v4({
            pageLocation: "stage",
            feature: "brand",
            upsellName: "editor_brand",
            trackingFeature: "logo"
          }));
        }, [_v0, _v7, _v5, _v4]);
      return (0, _v475.default)(() => {
        _v5 && (0, _v205.sendTrackLogoPlaceholderImpression)();
      }), (0, _v7.jsxs)(_v186.Box, {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        children: [_v9 && (0, _v7.jsx)(_v212.Tooltip, {
          label: (0, _v63.translate)({
            singular: "Add logo",
            dictionary: {
              es: {
                singular: "Agregar logo"
              },
              "de-DE": {
                singular: "Logo hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter un logo"
              },
              "ja-JP": {
                singular: "ロゴを追加"
              },
              "ko-KR": {
                singular: "로고 추가"
              },
              "pt-BR": {
                singular: "Adicionar logo"
              },
              "zh-CN": {
                singular: "添加徽标"
              }
            }
          }),
          children: (0, _v7.jsx)(_v408, {
            style: _v10,
            onClick: _v11,
            "data-testid": _v181.testIds.logoPlaceholder,
            children: (0, _v7.jsx)(_v473, {})
          })
        }), !_v8 && (0, _v7.jsx)(_v409, {
          orientation: _v1,
          children: (0, _v7.jsx)(_v476, {
            "data-testid": _v181.testIds.watermark
          })
        })]
      });
    };
  var _v478 = _v0.i(0);
  let _v479 = [_v478.DnDItemType.GRID_ELEMENT_MEDIA, _v478.DnDItemType.GRID_ELEMENT_GRAPHIC, _v478.DnDItemType.GRID_ELEMENT_TEXT, _v478.DnDItemType.GRID_ELEMENT_TEMPLATE, _v478.DnDItemType.GRID_ELEMENT_IFRAME],
    _v480 = ({
      children: _v0,
      shouldDisplayOverlayEditorEmptyView: _v1
    }) => {
      let _v2 = (0, _v168.useAppSelector)(_v390.stageSizeSelector),
        {
          isOver: _v3,
          active: _v4,
          setNodeRef: _v5
        } = (0, _v368.useDroppable)({
          id: "stage-droppable",
          data: {
            accepts: _v479,
            type: _v478.DndDropAreaType.STAGE
          }
        }),
        _v6 = _v3 && _v4?.data?.current && _v479.includes(_v4.data.current.type);
      return (0, _v7.jsx)(_v406, {
        size: _v2,
        ref: _v5,
        isActive: _v6,
        shouldDisplayOverlayEditorEmptyView: _v1,
        children: _v0
      });
    };
  var _v481 = _v0.i(0),
    _v482 = _v0.i(0),
    _v483 = _v0.i(0),
    _v484 = _v0.i(0),
    _v485 = _v0.i(0);
  let _v486 = {
      direction: "column",
      alignItems: "center",
      position: "absolute",
      top: "53%",
      transform: "translateY(-50%)",
      maxWidth: (0, _v156.rem)(268)
    },
    _v487 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        _v2 = (0, _v168.useAppSelector)(_v176.isInteractiveSelector),
        _v3 = (0, _v168.useAppSelector)(_v167.storyboardIdSelector),
        _v4 = (0, _v168.useAppSelector)(_v222.hasVisibleLayersOnTimelineSelector),
        _v5 = (0, _v168.useAppSelector)(_v167.isLoadingStoryboardSelector),
        _v6 = (0, _v168.useAppSelector)(_v222.isEditingInteractiveOverlaySelector),
        _v7 = (0, _v8.useRef)(!1),
        _v8 = (0, _v8.useRef)({
          width: 0,
          height: 0
        }),
        {
          getCurrentTimeFromRef: _v9,
          pause: _v10,
          play: _v11,
          DFRef: _v12
        } = (0, _v252.useDragonfly)(),
        {
          isReplacing: _v13
        } = (0, _v483.useReplaceElement)(),
        {
          addElement: _v14
        } = (0, _v481.useAddElement)(),
        _v15 = !_v5 && _v6 && !_v4,
        _v16 = !_v5 && _v6 && _v4,
        _v17 = (0, _v8.useRef)(null),
        _v18 = (0, _v484.default)(_v17),
        _v19 = (0, _v8.useCallback)(async _v0 => {
          let {
              active: _v1,
              over: _v2
            } = _v0,
            _v3 = _v9();
          if (_v2 && _v1.data.current && _v2.data.current?.accepts.includes(_v1.data.current.type) && _v2.data.current.type === _v478.DndDropAreaType.STAGE) {
            let _v0 = _v1.rect.current.translated;
            if (_v0) {
              let _v0 = _v2.rect,
                _v1 = (_v0.top - _v0.top) / _v0.height,
                _v2 = (_v0.left - _v0.left) / _v0.width;
              if (_v1.data.current.createElement) {
                let _v0 = await _v1.data.current.createElement({
                  coordinates: {
                    top: _v1,
                    left: _v2
                  },
                  time: _v3
                });
                _v0 && !_v13 && (_v14(_v0), _v1.data.current.onElementAdded && _v1.data.current.onElementAdded({
                  element: _v0
                }));
              }
              _v1.data.current.onElementDropped && _v1.data.current.onElementDropped({
                time: _v3,
                coordinates: {
                  top: _v1,
                  left: _v2
                }
              });
            }
          }
        }, [_v14, _v9, _v13]);
      return (0, _v8.useEffect)(() => {
        let _v0 = _v262.OrientationRatio[_v1];
        if (_v18.width > 0) {
          let _v0 = _v18.width - 30,
            _v1 = _v18.height - 30,
            _v2 = _v0 * _v1;
          _v2 > _v0 && (_v1 = (_v2 = _v0) / _v0), _v12.current && !_v12.current.paused && (Math.abs(_v2 - _v8.current.width) > 1 || Math.abs(_v1 - _v8.current.height) > 1) && (_v10(), _v7.current = !0), _v8.current = {
            width: _v2,
            height: _v1
          }, _v0((0, _v390.setSizeAction)({
            width: _v2,
            height: _v1
          }));
        }
      }, [_v1, _v18, _v0, _v12, _v10]), (0, _v299.useDebouncedEffect)(() => {
        _v7.current && (_v11(), _v7.current = !1);
      }, [_v18, _v11]), (0, _v8.useEffect)(() => {
        _v6 && (0, _v340.sendTrackViewOverlayEditor)();
      }, [_v6]), (0, _v368.useDndMonitor)({
        onDragEnd: _v19
      }), (0, _v482.useFocusArea)(_v17, _v485.FocusAreaType.STAGE), (0, _v7.jsxs)(_v405, {
        ref: _v17,
        "data-testid": _v181.testIds.stageContainer,
        className: _v365.STAGE_DRAG_SELECT_ALLOWED_CLASS,
        children: [(0, _v7.jsxs)(_v480, {
          shouldDisplayOverlayEditorEmptyView: _v15,
          children: [(0, _v7.jsxs)(_v407, {
            "data-testid": _v181.testIds.canvas,
            className: _v365.STAGE_DRAG_SELECT_ALLOWED_CLASS,
            ...(_v3 && {
              "data-stage-element": _v2 ? "dragonfly" : "dragonite"
            }),
            children: [_v2 ? (0, _v7.jsxs)(_v7.Fragment, {
              children: [_v16 && (0, _v7.jsx)(_v371, {}), (0, _v7.jsx)(_v383, {}), (0, _v7.jsx)(_v384.ScreenshotContainer, {})]
            }) : (0, _v7.jsx)(_v392, {}), (0, _v7.jsx)(_v413, {})]
          }), (0, _v7.jsx)(_v471, {
            "data-testid": "selection-layers"
          }), (0, _v7.jsx)(_v403, {}), (0, _v7.jsx)(_v477, {})]
        }), _v15 && (0, _v7.jsxs)(_v75.Flex, {
          ..._v486,
          children: [(0, _v7.jsx)(_v369.Interactive, {
            boxSize: "xs",
            color: "text-primary"
          }), (0, _v7.jsx)(_v157.Text, {
            variant: "body-md",
            color: "text-primary",
            align: "center",
            marginTop: "sm",
            children: (0, _v63.translate)({
              singular: "Create an overlay by adding hotspots, polls, media, and more",
              dictionary: {
                es: {
                  singular: "Cree una superposición al agregar puntos de acceso, encuestas, archivos multimedia y más."
                },
                "de-DE": {
                  singular: "Erstellen Sie ein Overlay, indem Sie Hotspots, Umfragen, Medien und mehr hinzufügen."
                },
                "fr-FR": {
                  singular: "Créez une superposition en ajoutant des zones interactives, des sondages, des médias, et plus encore."
                },
                "ja-JP": {
                  singular: "ホットスポット、アンケート、メディアなどを追加してオーバーレイを作成します"
                },
                "ko-KR": {
                  singular: "핫스팟, 투표, 미디어 등을 추가하여 오버레이를 생성하세요."
                },
                "pt-BR": {
                  singular: "Crie uma sobreposição, adicionando hotspots, enquetes, mídia e muito mais"
                },
                "zh-CN": {
                  singular: "通过添加热点、投票、媒体等来创建视频叠加"
                }
              }
            })
          })]
        })]
      });
    };
  var _v488 = _v0.i(0),
    _v489 = _v0.i(0);
  let _v490 = ({
    outerRef: _v0
  }) => {
    let _v1 = (0, _v168.useAppDispatch)(),
      _v2 = (0, _v168.useAppSelector)(_v366.selectedElementsIdsSelector),
      _v3 = (0, _v8.useRef)(null),
      _v4 = (0, _v8.useRef)(null),
      _v5 = (0, _v8.useRef)(0),
      [_v6, _v7] = (0, _v8.useState)({
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      }),
      _v8 = (0, _v484.default)(_v3),
      _v9 = (0, _v8.useCallback)(_v0 => ({
        ..._v0,
        x: _v0.x - _v8.x,
        y: _v0.y - _v8.y
      }), [_v8]),
      _v10 = (0, _v8.useCallback)(_v0 => {
        _v3?.current && _v7(_v0 => ({
          ..._v0,
          x2: _v0.clientX,
          y2: _v0.clientY
        }));
      }, []),
      _v11 = (0, _v8.useCallback)(() => {
        document.removeEventListener("mouseup", _v11, !0), _v0.current?.removeEventListener("mousemove", _v10, !0), _v4.current = null, _v7({
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0
        });
      }, [_v10, _v0]),
      _v12 = (0, _v8.useCallback)(_v0 => {
        if (!_v3?.current) return;
        let _v1 = _v0.target.className;
        "string" == typeof _v1 && _v1.indexOf(_v365.STAGE_DRAG_SELECT_ALLOWED_CLASS) > -1 && (document.addEventListener("mouseup", _v11, !0), _v0.current?.addEventListener("mousemove", _v10, !0), _v1((0, _v366.resetSelectionAction)()), _v4.current = document.querySelectorAll(`[data-drag-selection-tag*="${_v365.STAGE_DRAG_SELECT_DATA_TAG}"]`), _v7({
          x1: _v0.clientX,
          y1: _v0.clientY,
          x2: _v0.clientX,
          y2: _v0.clientY
        }));
      }, [_v11, _v0, _v10, _v1]),
      _v13 = (0, _v427.default)(_v0 => {
        let _v1 = _v0.y,
          _v2 = _v1 + _v0.height,
          _v3 = _v0.x,
          _v4 = _v3 + _v0.width,
          _v5 = [];
        _v4.current?.forEach(_v0 => {
          let {
            y: _v1,
            x: _v2,
            width: _v3,
            height: _v4
          } = _v0.getBoundingClientRect();
          if ((_v1 + _v4 > _v1 && _v1 + _v4 <= _v2 || _v1 >= _v1 && _v1 <= _v2 || _v1 < _v1 && _v1 + _v4 > _v2) && (_v2 + _v3 > _v3 && _v2 + _v3 <= _v4 || _v2 >= _v3 && _v2 <= _v4 || _v2 < _v3 && _v2 + _v3 > _v4)) {
            let _v0 = _v0.getAttribute("data-selection-id") || "";
            _v0.length > 0 && _v5.push(_v0);
          }
          window.cancelAnimationFrame(_v5.current), _v5.current = window.requestAnimationFrame(() => {
            let _v0 = _v2.slice();
            _v5.forEach(_v0 => {
              _v2.includes(_v0) || _v1((0, _v366.selectCEsAction)({
                ceIds: [_v0],
                isMultiSelect: !0
              })), _v0.splice(_v0.indexOf(_v0), 1);
            }), _v0.length > 0 && _v1((0, _v366.deselectCEsAction)({
              ceIdsToRemove: _v0
            })), window.cancelAnimationFrame(_v5.current);
          });
        });
      }, 100);
    return (0, _v8.useEffect)(() => {
      _v0.current?.addEventListener("mousedown", _v12, !0);
      let _v0 = _v0.current;
      return () => {
        _v0 && _v0.removeEventListener("mousedown", _v12, !0);
      };
    }, [_v12, _v10, _v11, _v0]), (0, _v8.useEffect)(() => {
      (0, _v488.isCoordinatesBelowMovementThreshold)(_v6) || _v13((0, _v488.getRectFromAreaCoordinates)(_v6));
    }, [_v6, _v13]), (0, _v7.jsx)(_v489.DragSelectionContainer, {
      ref: _v3,
      children: !(0, _v488.isCoordinatesBelowMovementThreshold)(_v6) && (0, _v7.jsx)(_v489.DragSelectionRect, {
        ..._v9((0, _v488.getRectFromAreaCoordinates)(_v6))
      })
    });
  };
  var _v491 = _v0.i(0),
    _v492 = _v0.i(0),
    _v493 = _v0.i(0),
    _v494 = _v0.i(0);
  let _v495 = ({
    height: _v0
  }) => (0, _v7.jsx)(_v186.Box, {
    display: "inline-block",
    alignSelf: "center",
    backgroundColor: "stroke",
    width: "1px",
    height: _v0 ? `${_v0}px` : "100%"
  });
  var _v496 = _v0.i(0),
    _v497 = _v0.i(0),
    _v498 = _v0.i(0),
    _v499 = _v0.i(0),
    _v500 = _v0.i(0),
    _v501 = _v0.i(0);
  let _v502 = ({
      variant: _v0,
      size: _v1,
      className: _v2,
      icon: _v3,
      dataTestId: _v4,
      color: _v5,
      multiColor: _v6,
      isActive: _v7
    }) => (0, _v7.jsx)(_v7.Fragment, {
      children: (0, _v7.jsx)(_v187.Button, {
        "aria-label": _v4 || "color-button",
        variant: _v0,
        size: _v1,
        className: _v2,
        leftIcon: _v3,
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        sx: {
          span: {
            margin: 0
          }
        },
        gap: "1px",
        padding: "2px 6px",
        isActive: _v7,
        children: (0, _v7.jsx)(_v186.Box, {
          "data-testid": _v4,
          height: 2,
          width: 18,
          borderRadius: "xs",
          borderWidth: "0.05px",
          borderColor: "input-stroke",
          background: _v6 ? "upsell-primary" : _v5
        })
      })
    }),
    _v503 = _v10.default.div.withConfig({
      displayName: "ColorPicker.style__DynamicColorIcon",
      componentId: "sc-5ebcb88f-0"
    })`
  display: flex;
  ${({
      color: _v0,
      theme: _v1
    }) => `svg { 
    circle {
      fill: ${_v0}
    }
    path {
      fill: ${_v1.content.color2}
    }
  }`};
`;
  var _v504 = _v0.i(0),
    _v505 = _v0.i(0),
    _v506 = _v0.i(0);
  let _v507 = (0, _v8.memo)(({
    icon: _v0,
    value: _v1,
    bgAlpha: _v2,
    iconColor: _v3,
    onChange: _v4,
    onOpacityChange: _v5,
    onChangeEnd: _v6,
    onOpacityChangeEnd: _v7,
    onOpen: _v8,
    onClose: _v9,
    testid: _v10,
    multiColor: _v11 = !1,
    text: _v12,
    allowOpacity: _v13 = !1,
    isActive: _v14,
    showButtonBorder: _v15 = !0,
    title: _v16
  }) => {
    let _v17 = (0, _v168.useAppSelector)(_v167.brandColorsSelector),
      _v18 = (0, _v505.useThrottledCallback)(_v4, [_v4], 150),
      _v19 = (0, _v505.useThrottledCallback)(_v0 => {
        _v5 && _v5(_v0);
      }, [_v5], 150),
      _v20 = (0, _v8.useRef)((0, _v500.parseColor)(_v1)),
      _v21 = (0, _v8.useRef)(!1),
      _v22 = (0, _v8.useRef)(!1),
      _v23 = (0, _v8.useRef)(_v2),
      [_v24, _v25] = (0, _v8.useState)(!1),
      [_v26, _v27] = (0, _v8.useState)(!_v13 || 0 !== _v2),
      _v28 = [_v17.primary, _v17.secondary, _v17.default],
      _v29 = () => {
        _v25(!1), _v9?.();
      },
      _v30 = (0, _v8.useCallback)(_v0 => {
        _v20.current = _v0.value, _v6(_v0.value.toString("hex")), _v13 && _v7?.((0, _v506.hexToOpacityPercentage)(_v0.value.toString("hexa")));
      }, [_v13, _v6, _v7]),
      _v31 = (0, _v8.useCallback)(_v0 => {
        if (_v22.current) {
          _v22.current = !1, _v30(_v0);
          return;
        }
        if (_v20.current = _v0.value, _v21.current) {
          _v21.current = !1;
          return;
        }
        _v18(_v0.value.toString("hex")), _v13 && _v5 && _v19((0, _v506.hexToOpacityPercentage)(_v0.value.toString("hexa")));
      }, [_v13, _v30, _v5, _v18, _v19]),
      _v32 = (0, _v8.useCallback)(_v0 => {
        if ("key" in _v0 && _v0.key === _v504.KEYBOARD_KEYS.ENTER || "type" in _v0 && "blur" === _v0.type) {
          let _v0 = _v0.target.value;
          _v21.current = !0, (0, _v506.isHexColor)(_v0) ? _v6?.(_v0) : _v6?.(_v1.slice(0, 7));
        }
      }, [_v6, _v1]),
      _v33 = (0, _v8.useCallback)(_v0 => {
        if ([_v504.KEYBOARD_KEYS.DOWN, _v504.KEYBOARD_KEYS.UP].includes(_v0.key)) {
          let _v0 = (0, _v496.default)(100 * _v0.target.value, 0, 100);
          _v21.current = !0, _v0.repeat ? _v5?.(_v0) : _v7?.(_v0);
        }
      }, [_v5, _v7]),
      _v34 = (0, _v8.useCallback)(_v0 => {
        if ("key" in _v0 && [_v504.KEYBOARD_KEYS.DOWN, _v504.KEYBOARD_KEYS.UP, _v504.KEYBOARD_KEYS.ENTER].includes(_v0.key) || "type" in _v0 && "blur" === _v0.type) {
          let _v0 = (0, _v496.default)(100 * _v0.target.value, 0, 100);
          _v21.current = !0, _v7?.(_v0);
        }
      }, [_v7]),
      _v35 = (0, _v8.useCallback)(_v0 => {
        _v0.preventDefault(), _v0.stopPropagation();
        let _v1 = 100 * !!_v0.target.checked;
        _v7?.(_v1), _v27(_v0.target.checked);
      }, [_v7]),
      _v36 = () => {
        _v22.current = !0, _v29();
      };
    (0, _v8.useEffect)(() => {
      _v23.current = _v2;
    }, [_v2]);
    let _v37 = _v20.current.toString("hex"),
      _v38 = _v20.current.toString("hexa");
    return (0, _v8.useEffect)(() => {
      _v37 === _v1 || _v13 || (_v20.current = (0, _v500.parseColor)(_v1)), _v38 !== _v1 && _v13 && (_v20.current = (0, _v500.parseColor)(_v1));
    }, [_v13, _v37, _v38, _v1]), (0, _v7.jsxs)(_v497.ColorPickerRoot, {
      defaultValue: (0, _v500.parseColor)((0, _v506.hex2Rgba)(_v1, _v2 ? _v2 / 100 : 1)),
      onValueChange: _v31,
      onValueChangeEnd: _v30,
      positioning: {
        placement: "bottom"
      },
      unmountOnExit: !0,
      open: _v24,
      onOpenChange: ({
        open: _v0
      }) => {
        _v0 ? (_v25(!0), _v8?.()) : (_v29(), _v27(!_v13 || 0 !== _v23.current));
      },
      children: [(0, _v7.jsx)(_v498.ColorPickerControl, {
        children: (0, _v7.jsx)(_v497.ColorPickerTrigger, {
          children: (0, _v7.jsx)("span", {
            children: _v12 ? (0, _v7.jsxs)(_v75.Flex, {
              "data-testid": `${_v10}-color-picker`,
              gap: "sm",
              p: "10px",
              h: "40",
              width: "115px",
              cursor: "pointer",
              borderRadius: "6px",
              ...(!_v24 && _v15 && {
                outline: "1px solid"
              }),
              ...(!_v24 && _v15 && {
                outlineColor: "stroke"
              }),
              children: [(0, _v7.jsx)(_v503, {
                color: _v3,
                children: _v0
              }), (0, _v7.jsx)(_v157.Text, {
                variant: "body-md",
                children: _v12.toUpperCase()
              })]
            }) : (0, _v7.jsx)(_v502, {
              multiColor: _v11,
              variant: "tertiary",
              size: "sm",
              className: "color-picker-button",
              icon: _v0,
              dataTestId: `${_v10}-color-picker`,
              color: _v3,
              isActive: _v14
            })
          })
        })
      }), (0, _v7.jsx)(_v201.Portal, {
        children: (0, _v7.jsx)(_v497.ColorPickerPositioner, {
          children: (0, _v7.jsxs)(_v497.ColorPickerContent, {
            style: {
              height: "max-content",
              width: 236
            },
            children: [_v16 && (0, _v7.jsxs)(_v75.Flex, {
              justifyContent: "space-between",
              children: [(0, _v7.jsx)(_v157.Text, {
                variant: "heading-xs",
                children: _v16
              }), _v13 && (0, _v7.jsx)(_v501.Switch, {
                size: "sm",
                isChecked: _v26,
                onChange: _v35,
                onFocus: () => {
                  window.getSelection()?.removeAllRanges();
                }
              })]
            }), _v26 && (0, _v7.jsxs)(_v7.Fragment, {
              children: [(0, _v7.jsx)(_v497.ColorPickerArea, {
                style: {
                  height: 120
                }
              }), (0, _v7.jsxs)(_v499.Grid, {
                gap: "200",
                gridTemplateColumns: "1fr " + (_v13 ? "max-content" : ""),
                children: [(0, _v7.jsxs)(_v75.Flex, {
                  width: "100%",
                  direction: "column",
                  gap: "200",
                  justifyContent: "center",
                  children: [(0, _v7.jsxs)(_v497.ColorPickerChannelSlider, {
                    channel: "hue",
                    children: [(0, _v7.jsx)(_v497.ColorPickerChannelSliderTrack, {}), (0, _v7.jsx)(_v497.ColorPickerChannelSliderThumb, {})]
                  }), _v13 && (0, _v7.jsxs)(_v497.ColorPickerChannelSlider, {
                    channel: "alpha",
                    children: [(0, _v7.jsx)(_v497.ColorPickerTransparencyGrid, {}), (0, _v7.jsx)(_v497.ColorPickerChannelSliderTrack, {}), (0, _v7.jsx)(_v497.ColorPickerChannelSliderThumb, {})]
                  })]
                }), _v13 && (0, _v7.jsx)(_v497.ColorPickerEyeDropperTrigger, {
                  size: "md",
                  onClick: _v36
                })]
              }), (0, _v7.jsxs)(_v499.Grid, {
                width: "100%",
                gap: "200",
                gridTemplateColumns: "auto " + (_v13 ? "auto" : "32px"),
                children: [(0, _v7.jsx)(_v497.ColorPickerChannelInput, {
                  channel: "hex",
                  onKeyDown: _v32,
                  onBlur: _v32,
                  style: {
                    padding: "0 12px"
                  }
                }), _v13 ? (0, _v7.jsx)(_v508, {
                  onKeyDown: _v33,
                  onKeyUp: _v34,
                  onBlur: _v34,
                  style: {
                    padding: "0 12px"
                  }
                }) : (0, _v7.jsx)(_v497.ColorPickerEyeDropperTrigger, {
                  size: "sm",
                  onClick: _v36
                })]
              }), (0, _v7.jsx)(_v186.Box, {
                width: "100%",
                children: (0, _v7.jsxs)(_v497.ColorPickerSwatchGroup, {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%"
                  },
                  children: [(0, _v7.jsx)(_v157.Text, {
                    variant: "heading-2xs",
                    whiteSpace: "nowrap",
                    children: (0, _v63.translate)({
                      singular: "Project Colors",
                      dictionary: {
                        es: {
                          singular: "Colores del proyecto"
                        },
                        "de-DE": {
                          singular: "Projekt Farben"
                        },
                        "fr-FR": {
                          singular: "Couleurs du projet"
                        },
                        "ja-JP": {
                          singular: "プロジェクトの色"
                        },
                        "ko-KR": {
                          singular: "프로젝트 색상"
                        },
                        "pt-BR": {
                          singular: "Cores do projeto"
                        },
                        "zh-CN": {
                          singular: "项目颜色"
                        }
                      }
                    })
                  }), (0, _v7.jsx)(_v75.Flex, {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    children: _v28.map(_v0 => (0, _v7.jsx)(_v497.ColorPickerSwatchTrigger, {
                      style: {
                        marginLeft: "10px"
                      },
                      value: _v0,
                      onClick: () => _v6(_v0),
                      children: (0, _v7.jsx)(_v497.ColorPickerSwatch, {
                        value: _v0,
                        boxSize: "xs",
                        sx: {
                          cursor: "pointer",
                          border: "1px solid stroke"
                        }
                      })
                    }, _v0))
                  })]
                })
              })]
            })]
          })
        })
      })]
    });
  });
  var _v508 = (0, _v10.default)(_v497.ColorPickerChannelInputAlpha).withConfig({
      displayName: "ColorPicker___StyledColorPickerChannelInputAlpha",
      componentId: "sc-aedd1206-0"
    })({
      "::-webkit-outer-spin-button, ::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
      },
      "-moz-appearance": "textfield"
    }),
    _v509 = _v0.i(0);
  (0, _v10.default)(_v509.Highlight).withConfig({
    displayName: "Toolbar.style__HighlightIcon",
    componentId: "sc-927f95ea-0"
  })`
  margin-bottom: -4px;
  margin-top: 2px;
  width: 17px !important;
  height: 17px !important;
`;
  var _v510 = _v0.i(0),
    _v511 = _v0.i(0),
    _v512 = _v0.i(0),
    _v513 = _v0.i(0),
    _v514 = _v0.i(0),
    _v515 = _v0.i(0);
  let _v516 = ({
      aspectConfig: _v0,
      width: _v1 = 20,
      height: _v2 = 20,
      boxSize: _v3,
      darker: _v4 = !1,
      ..._v5
    }) => {
      let _v6 = _v1,
        _v7 = _v2;
      if (_v3) {
        let _v0 = "string" == typeof _v3 ? {
          xs: 16,
          sm: 18,
          md: 20,
          lg: 24,
          xl: 32
        }[_v3] || Number(_v3) : _v3;
        _v6 = _v0, _v7 = _v0;
      }
      return (0, _v7.jsx)("svg", {
        width: _v6,
        height: _v7,
        viewBox: "0 0 20 20",
        fill: "none",
        ..._v5,
        children: (0, _v7.jsx)("rect", {
          rx: "0.20",
          ..._v0,
          stroke: "currentColor",
          fill: "none",
          strokeWidth: _v4 ? 1.5 : 1,
          style: {
            transition: "stroke 0.2s ease"
          }
        })
      });
    },
    _v517 = {
      x: 4,
      y: 1,
      width: 12,
      height: 15
    },
    _v518 = {
      x: 2,
      y: 4,
      width: 16,
      height: 10
    },
    _v519 = {
      x: 4,
      y: 2,
      width: 12,
      height: 16
    },
    _v520 = {
      x: 5,
      y: 2,
      width: 10,
      height: 15
    },
    _v521 = {
      x: 2,
      y: 4,
      width: 16,
      height: 12
    },
    _v522 = {
      x: 1,
      y: 5,
      width: 18,
      height: 9
    },
    _v523 = ({
      children: _v0,
      ..._v1
    }) => (0, _v7.jsx)(_v157.Text, {
      p: "4px 4px 12px",
      variant: "heading-xs",
      ..._v1,
      children: _v0
    }),
    _v524 = {
      [_v331.Orientation.LANDSCAPE]: {
        icon: (0, _v7.jsx)(_v512.FormatLandscape, {
          width: "20",
          height: "20",
          "data-testid": "canvas-ratio-menu-landscape-option"
        }),
        label: _v262.OrientationRatioString[_v331.Orientation.LANDSCAPE],
        tooltip: (0, _v63.translate)({
          singular: "Good for Vimeo, YouTube\nand widescreen TVs.",
          dictionary: {
            es: {
              singular: "Ideal para Vimeo, YouTube\ny televisores panorámicos."
            },
            "de-DE": {
              singular: "Gut für Vimeo, YouTube\nund Breitbild-TVs."
            },
            "fr-FR": {
              singular: "Adapté à Vimeo, YouTube\net aux téléviseurs à écran large."
            },
            "ja-JP": {
              singular: "Vimeo、YouTube、ワイドスクリーンテレビでの\n視聴に適しています。"
            },
            "ko-KR": {
              singular: "Vimeo, YouTube 및\n와이드스크린 TV에 적합합니다."
            },
            "pt-BR": {
              singular: "Ideal para Vimeo, YouTube\ne TVs widescreen."
            },
            "zh-CN": {
              singular: "适合 Vimeo、YouTube 及宽屏电视观看。"
            }
          }
        })
      },
      [_v331.Orientation.SQUARE]: {
        icon: (0, _v7.jsx)(_v514.FormatSquare, {
          width: "20",
          height: "20",
          "data-testid": "canvas-ratio-menu-square-option"
        }),
        label: _v262.OrientationRatioString[_v331.Orientation.SQUARE],
        tooltip: (0, _v63.translate)({
          singular: "Ideal for Instagram\nand Facebook feeds.",
          dictionary: {
            es: {
              singular: "Ideal para publicaciones de Instagram\ny Facebook."
            },
            "de-DE": {
              singular: "Ideal für Instagram- und Facebook-Feeds."
            },
            "fr-FR": {
              singular: "Idéal pour les flux Instagram\net Facebook."
            },
            "ja-JP": {
              singular: "Instagramや\nFacebookのフィードに最適です。"
            },
            "ko-KR": {
              singular: "Instagram 및\nFacebook 피드에 이상적입니다."
            },
            "pt-BR": {
              singular: "Ideal para feeds do Instagram\ne do Facebook."
            },
            "zh-CN": {
              singular: "非常适合 Instagram 和 Facebook 信息流。"
            }
          }
        })
      },
      [_v331.Orientation.PORTRAIT]: {
        icon: (0, _v7.jsx)(_v513.FormatPortrait, {
          width: "20",
          height: "20",
          "data-testid": "canvas-ratio-menu-portrait-option"
        }),
        label: _v262.OrientationRatioString[_v331.Orientation.PORTRAIT],
        tooltip: (0, _v63.translate)({
          singular: "Best for TikTok, Instagram Reels,\nand mobile viewing.",
          dictionary: {
            es: {
              singular: "Ideal para TikTok, Instagram Reels\ny visualización en dispositivos móviles."
            },
            "de-DE": {
              singular: "Am besten für TikTok, Instagram Reels\nund mobile Ansicht."
            },
            "fr-FR": {
              singular: "Idéal pour TikTok, les Reels Instagram,\net le visionnage sur mobile."
            },
            "ja-JP": {
              singular: "TikTok、Instagramリール、\nモバイルでの視聴に最適です。"
            },
            "ko-KR": {
              singular: "TikTok, Instagram Reels 및\n모바일 시청에 가장 적합합니다."
            },
            "pt-BR": {
              singular: "Ideal para TikTok, Reels do Instagram\ne visualização em dispositivos móveis."
            },
            "zh-CN": {
              singular: "最适合 TikTok、Instagram Reels 和移动观看。"
            }
          }
        })
      },
      [_v331.Orientation.OR_2_3]: {
        icon: (0, _v7.jsx)(_v0 => (0, _v7.jsx)(_v516, {
          aspectConfig: _v520,
          darker: !0,
          ..._v0
        }), {
          width: "20",
          height: "20"
        }),
        label: "2:3",
        tooltip: (0, _v63.translate)({
          singular: "Good for Pinterest\nphotos and social media.",
          dictionary: {
            es: {
              singular: "Ideal para fotos de Pinterest\ny redes sociales."
            },
            "de-DE": {
              singular: "Gut für Pinterest-Fotos\nund Social Media."
            },
            "fr-FR": {
              singular: "Adapté aux photos Pinterest\net aux réseaux sociaux."
            },
            "ja-JP": {
              singular: "Pinterestの写真や\nソーシャルメディアに適しています。"
            },
            "ko-KR": {
              singular: "Pinterest 사진 및\n소셜 미디어 콘텐츠에 적합합니다."
            },
            "pt-BR": {
              singular: "Ideal para fotos no Pinterest\ne redes sociais."
            },
            "zh-CN": {
              singular: "适合 Pinterest 照片和社交媒体。"
            }
          }
        })
      },
      [_v331.Orientation.OR_3_4]: {
        icon: (0, _v7.jsx)(_v0 => (0, _v7.jsx)(_v516, {
          aspectConfig: _v519,
          darker: !0,
          ..._v0
        }), {
          width: "20",
          height: "20"
        }),
        label: "3:4",
        tooltip: (0, _v63.translate)({
          singular: "Good for Twitter portrait,\nsocial posts.",
          dictionary: {
            es: {
              singular: "Ideal para publicaciones verticales en Twitter\ny redes sociales."
            },
            "de-DE": {
              singular: "Gut für Twitter-Porträts,\nSocial-Media-Beiträge."
            },
            "fr-FR": {
              singular: "Adapté au format portrait sur Twitter\net aux publications sur les réseaux sociaux."
            },
            "ja-JP": {
              singular: "Twitterのポートレートや\nソーシャル投稿に適しています。"
            },
            "ko-KR": {
              singular: "Twitter 세로형 콘텐츠 및\n소셜 게시물에 적합합니다."
            },
            "pt-BR": {
              singular: "Ideal para retratos no Twitter\ne posts em redes sociais."
            },
            "zh-CN": {
              singular: "适合 Twitter 竖屏内容及社交帖子。"
            }
          }
        })
      },
      [_v331.Orientation.OR_4_5]: {
        icon: (0, _v7.jsx)(_v0 => (0, _v7.jsx)(_v516, {
          aspectConfig: _v517,
          darker: !0,
          ..._v0
        }), {
          width: "20",
          height: "20"
        }),
        label: "4:5",
        tooltip: (0, _v63.translate)({
          singular: "Good for Instagram posts,\nengaging mobile viewers.",
          dictionary: {
            es: {
              singular: "Ideal para publicaciones de Instagram\ny visualización en dispositivos móviles."
            },
            "de-DE": {
              singular: "Gut für Instagram-Posts,\nAnsprache mobiler Nutzer."
            },
            "fr-FR": {
              singular: "Adapté aux publications Instagram,\npour impliquer les spectateurs sur mobile."
            },
            "ja-JP": {
              singular: "Instagram投稿や、モバイル\n視聴者との交流に適しています。"
            },
            "ko-KR": {
              singular: "Instagram 게시물에 적합하며\n모바일 사용자의 관심을 끌기에 좋습니다."
            },
            "pt-BR": {
              singular: "Ideal para posts no Instagram\npara engajamento móvel."
            },
            "zh-CN": {
              singular: "适合 Instagram 帖子，吸引移动观众。"
            }
          }
        })
      },
      [_v331.Orientation.OR_4_3]: {
        icon: (0, _v7.jsx)(_v0 => (0, _v7.jsx)(_v516, {
          aspectConfig: _v521,
          darker: !0,
          ..._v0
        }), {
          width: "20",
          height: "20"
        }),
        label: "4:3",
        tooltip: (0, _v63.translate)({
          singular: "Good for Linkedin and Facebook\nads standard format.",
          dictionary: {
            es: {
              singular: "Ideal para el formato estándar de anuncios\nde Linkedin y Facebook."
            },
            "de-DE": {
              singular: "Gut für das Standardformat von\nLinkedIn- und Facebook-Anzeigen."
            },
            "fr-FR": {
              singular: "Adapté au format standard\ndes publicités LinkedIn et Facebook."
            },
            "ja-JP": {
              singular: "LinkedInやFacebook広告の\n標準フォーマットに適しています。"
            },
            "ko-KR": {
              singular: "LinkedIn 및 Facebook\n광고 표준 형식에 적합합니다."
            },
            "pt-BR": {
              singular: "Ideal para formatos padrão de anúncios\nno LinkedIn e no Facebook."
            },
            "zh-CN": {
              singular: "适合 LinkedIn 和 Facebook 标准广告格式。"
            }
          }
        })
      },
      [_v331.Orientation.OR_16_10]: {
        icon: (0, _v7.jsx)(_v0 => (0, _v7.jsx)(_v516, {
          aspectConfig: _v518,
          darker: !0,
          ..._v0
        }), {
          width: "20",
          height: "20"
        }),
        label: "16:10",
        tooltip: (0, _v63.translate)({
          singular: "Good for wider landscape format\nfor MacBook displays.",
          dictionary: {
            es: {
              singular: "Ideal para el formato horizontal más amplio\nde pantallas MacBook."
            },
            "de-DE": {
              singular: "Gut geeignet für ein breiteres Querformat\nfür MacBook-Displays."
            },
            "fr-FR": {
              singular: "Adapté au format paysage plus large\npour les écrans MacBook."
            },
            "ja-JP": {
              singular: "MacBookディスプレイの\n横長フォーマットに適しています。"
            },
            "ko-KR": {
              singular: "MacBook 디스플레이에 적합한\n넓은 가로형 화면 형식입니다."
            },
            "pt-BR": {
              singular: "Ideal para formato paisagem mais amplo,\ncomo telas de MacBook."
            },
            "zh-CN": {
              singular: "适合更宽的横向格式，适用于 MacBook 显示器。"
            }
          }
        })
      },
      [_v331.Orientation.OR_2_1]: {
        icon: (0, _v7.jsx)(_v0 => (0, _v7.jsx)(_v516, {
          aspectConfig: _v522,
          darker: !0,
          ..._v0
        }), {
          width: "20",
          height: "20"
        }),
        label: "2:1",
        tooltip: (0, _v63.translate)({
          singular: "Good for cinematic widescreen\nfor an immersive experience.",
          dictionary: {
            es: {
              singular: "Ideal para el formato panorámico cinematográfico\ny una experiencia inmersiva."
            },
            "de-DE": {
              singular: "Gut für kinoreifen Breitbildschirm für ein immersives Erlebnis."
            },
            "fr-FR": {
              singular: "Adapté aux écrans larges de cinéma\npour une expérience immersive."
            },
            "ja-JP": {
              singular: "没入体験を得られるシネマティックな\nワイド映像に適しています。"
            },
            "ko-KR": {
              singular: "시네마 와이드스크린 형식에 적합하며\n몰입감 있는 시청 경험을 제공합니다."
            },
            "pt-BR": {
              singular: "Ideal para telas de cinema widescreen\ne experiências imersivas."
            },
            "zh-CN": {
              singular: "适合电影宽银幕，带来身临其境的体验。"
            }
          }
        })
      }
    },
    _v525 = ({
      selectedOrientation: _v0,
      onChange: _v1
    }) => {
      let _v2 = (0, _v168.useAppSelector)(_v167.storyboardIdSelector),
        {
          trackEditorAspectRatioChanged: _v3
        } = (0, _v325.useEditorTracking)(),
        _v4 = (0, _v8.useRef)(null),
        _v5 = _v524[_v0],
        {
          isOpen: _v6,
          onOpen: _v7,
          onClose: _v8
        } = (0, _v510.useDisclosure)(),
        {
          isOpen: _v9,
          onOpen: _v10,
          onClose: _v11
        } = (0, _v510.useDisclosure)(),
        _v12 = (0, _v213.useColorModeValue)("blackAlpha.200", "whiteAlpha.200"),
        _v13 = () => {
          _v7(), (0, _v192.sendTrackOpenOrientationDropdown)({
            location: "top_toolbar",
            copy: _v5.label
          });
        },
        _v14 = [_v331.Orientation.LANDSCAPE, _v331.Orientation.SQUARE, _v331.Orientation.PORTRAIT],
        _v15 = [_v331.Orientation.OR_2_1, _v331.Orientation.OR_16_10, _v331.Orientation.OR_4_3, _v331.Orientation.OR_4_5, _v331.Orientation.OR_3_4, _v331.Orientation.OR_2_3],
        _v16 = (_v0, _v1 = !1) => {
          let _v2 = _v524[_v0],
            _v3 = (0, _v7.jsxs)(_v75.Flex, {
              gap: "sm",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              children: [(0, _v7.jsxs)(_v75.Flex, {
                alignItems: "center",
                gap: "sm",
                children: [_v2.icon, (0, _v7.jsx)(_v186.Box, {
                  fontSize: _v1 ? "0.9em" : void 0,
                  children: _v2.label
                })]
              }), _v0 === _v0 && (0, _v7.jsx)(_v511.CheckSmall, {
                width: "20px",
                height: "20px"
              })]
            }),
            _v4 = _v0 => {
              _v0.preventDefault(), _v0.stopPropagation(), _v1(_v0), (0, _v192.sendTrackSelectCanvasSize)({
                location: "top_toolbar",
                copy: _v5.label,
                prevSize: _v262.OrientationRatioString[_v0],
                newSize: _v262.OrientationRatioString[_v0]
              }), _v3({
                editorSessionId: _v2,
                editorNewAspectRatio: _v262.OrientationRatioString[_v0].replace(":", "_")
              });
            },
            _v5 = _v1 ? (0, _v7.jsx)(_v186.Box, {
              as: "button",
              width: "100%",
              padding: "8px",
              border: "none",
              background: "none",
              cursor: "pointer",
              textAlign: "left",
              borderRadius: "sm",
              onClick: _v4,
              "data-testid": `orientation-${_v0}`,
              _hover: {
                backgroundColor: _v12
              },
              children: _v3
            }, _v0) : (0, _v7.jsx)(_v276.MenuItem, {
              icon: _v2.icon,
              onClick: _v4,
              "data-testid": `orientation-${_v0}`,
              closeOnSelect: !1,
              children: (0, _v7.jsxs)(_v75.Flex, {
                gap: "sm",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                children: [(0, _v7.jsx)(_v186.Box, {
                  children: _v2.label
                }), _v0 === _v0 && (0, _v7.jsx)(_v511.CheckSmall, {
                  width: "20px",
                  height: "20px"
                })]
              })
            }, _v0);
          return (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v7.jsx)(_v186.Box, {
              whiteSpace: "pre-line",
              textAlign: "left",
              children: _v2.tooltip
            }),
            placement: "right",
            children: _v5
          }, _v0);
        };
      return (0, _v7.jsxs)(_v273.Menu, {
        closeOnSelect: !1,
        onOpen: _v13,
        onClose: () => {
          _v9 || _v8();
        },
        isOpen: _v6,
        children: [(0, _v7.jsx)(_v274.MenuButton, {
          "data-testid": _v181.testIds.canvasRationButton,
          as: _v187.Button,
          leftIcon: _v5.icon,
          variant: "tertiary",
          size: "sm",
          ref: _v4,
          onClick: () => {
            _v6 ? _v8() : _v13();
          },
          children: _v5.label
        }), (0, _v7.jsxs)(_v278.MenuList, {
          "data-testid": "canvas-ratio-menu",
          onClick: _v0 => _v0.stopPropagation(),
          children: [(0, _v7.jsx)(_v523, {
            children: (0, _v63.translate)({
              singular: "Ratio",
              dictionary: {
                es: {
                  singular: "Proporción"
                },
                "de-DE": {
                  singular: "Verhältnis"
                },
                "fr-FR": {
                  singular: "Rapport"
                },
                "ja-JP": {
                  singular: "比率"
                },
                "ko-KR": {
                  singular: "비율"
                },
                "pt-BR": {
                  singular: "Proporção"
                },
                "zh-CN": {
                  singular: "比率"
                }
              }
            })
          }), (0, _v7.jsxs)(_v186.Box, {
            marginTop: "4px",
            children: [_v14.map(_v0 => _v16(_v0)), (0, _v7.jsx)(_v275.MenuDivider, {
              marginY: 2
            }), (0, _v7.jsxs)(_v197.Popover, {
              trigger: "hover",
              placement: "right-start",
              openDelay: 100,
              closeDelay: 300,
              onOpen: () => {
                _v10();
              },
              onClose: () => {
                _v11();
              },
              offset: [-8, -4],
              closeOnBlur: !1,
              closeOnEsc: !1,
              children: [(0, _v7.jsx)(_v200.PopoverTrigger, {
                children: (0, _v7.jsx)(_v186.Box, {
                  as: "button",
                  width: "100%",
                  padding: "8px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  children: (0, _v7.jsxs)(_v75.Flex, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [(0, _v7.jsx)(_v157.Text, {
                      fontSize: "0.9em",
                      variant: "body-xl",
                      children: (0, _v63.translate)({
                        singular: "More options",
                        dictionary: {
                          es: {
                            singular: "Más opciones"
                          },
                          "de-DE": {
                            singular: "Mehr Optionen"
                          },
                          "fr-FR": {
                            singular: "Plus d'options"
                          },
                          "ja-JP": {
                            singular: "その他のオプション"
                          },
                          "ko-KR": {
                            singular: "옵션 더 보기"
                          },
                          "pt-BR": {
                            singular: "Mais opções"
                          },
                          "zh-CN": {
                            singular: "更多选项"
                          }
                        }
                      })
                    }), (0, _v7.jsx)(_v515.ChevronRightSmall, {})]
                  })
                })
              }), (0, _v7.jsx)(_v201.Portal, {
                children: (0, _v7.jsx)(_v199.PopoverContent, {
                  zIndex: 0,
                  width: "160px",
                  minWidth: "auto",
                  onMouseEnter: _v0 => _v0.stopPropagation(),
                  onMouseLeave: _v0 => _v0.stopPropagation(),
                  onClick: _v0 => _v0.stopPropagation(),
                  children: (0, _v7.jsx)(_v198.PopoverBody, {
                    padding: "4px",
                    children: _v15.map(_v0 => _v16(_v0, !0))
                  })
                })
              })]
            })]
          })]
        })]
      });
    },
    _v526 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v168.useAppSelector)(_v353.overridesWithoutRectSelector, _v416.shallowEqual),
        _v2 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        _v3 = (0, _v168.useAppSelector)(_v494.selectedToolbarButtonSelector),
        _v4 = (0, _v168.useAppSelector)(_v0 => _v0.storyboard.canvas.color),
        _v5 = _v1?.canvas?.color,
        _v6 = (0, _v8.useCallback)(_v0 => {
          _v0((0, _v353.addGlobalOverrideAction)({
            key: "canvas",
            value: {
              color: _v0
            }
          }));
        }, [_v0]),
        _v7 = (0, _v8.useCallback)(_v0 => {
          _v0((0, _v353.removeGlobalOverrideAction)("canvas")), _v0((0, _v167.setCanvasColorAction)({
            color: _v0
          }));
        }, [_v0]),
        _v8 = (0, _v8.useCallback)(_v0 => {
          _v2 !== _v0 && (_v0((0, _v167.updateOrientationAction)(_v0)), _v0((0, _v182.setTemplatesOrientationAction)(_v0)), _v0((0, _v294.setTeamTemplatesOrientationAction)(_v0)));
        }, [_v0, _v2]),
        _v9 = (0, _v8.useCallback)(() => _v0((0, _v494.selectToolbarButtonAction)(_v493.ToolbarButtons.CANVAS_COLOR)), [_v0]),
        _v10 = (0, _v8.useCallback)(() => _v0((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.CANVAS_COLOR)), [_v0]);
      return (0, _v7.jsxs)(_v75.Flex, {
        "data-testid": _v181.testIds.canvasToolbar,
        gap: "8px",
        children: [(0, _v7.jsx)(_v212.Tooltip, {
          label: (0, _v63.translate)({
            singular: "Canvas color",
            dictionary: {
              es: {
                singular: "Color del lienzo"
              },
              "de-DE": {
                singular: "Hintergrundfarbe"
              },
              "fr-FR": {
                singular: "Couleur de la toile"
              },
              "ja-JP": {
                singular: "キャンバスの色"
              },
              "ko-KR": {
                singular: "캔버스 색상"
              },
              "pt-BR": {
                singular: "Cor da tela"
              },
              "zh-CN": {
                singular: "画布颜色"
              }
            }
          }),
          placement: "bottom",
          "data-testid": _v181.testIds.canvasTooltip,
          isDisabled: _v3 === _v493.ToolbarButtons.CANVAS_COLOR,
          children: (0, _v7.jsx)("span", {
            children: (0, _v7.jsx)(_v507, {
              icon: (0, _v7.jsx)(_v492.FillPaintBucket, {}),
              value: _v5 || _v4,
              title: (0, _v63.translate)({
                singular: "Canvas color",
                dictionary: {
                  es: {
                    singular: "Color del lienzo"
                  },
                  "de-DE": {
                    singular: "Hintergrundfarbe"
                  },
                  "fr-FR": {
                    singular: "Couleur de la toile"
                  },
                  "ja-JP": {
                    singular: "キャンバスの色"
                  },
                  "ko-KR": {
                    singular: "캔버스 색상"
                  },
                  "pt-BR": {
                    singular: "Cor da tela"
                  },
                  "zh-CN": {
                    singular: "画布颜色"
                  }
                }
              }),
              iconColor: _v5 || _v4,
              testid: "canvas",
              onOpen: _v9,
              onClose: _v10,
              onChange: _v6,
              onChangeEnd: _v7,
              isActive: _v3 === _v493.ToolbarButtons.CANVAS_COLOR
            })
          })
        }), (0, _v7.jsx)(_v495, {
          height: 24
        }), (0, _v7.jsx)(_v525, {
          selectedOrientation: _v2,
          onChange: _v8
        })]
      });
    },
    _v527 = ({
      children: _v0,
      isVisible: _v1,
      currentToolbar: _v2,
      testId: _v3
    }) => (0, _v7.jsx)(_v211.Center, {
      height: "40px",
      minHeight: "40px",
      minWidth: "40px",
      zIndex: 9,
      opacity: +!!_v1,
      backgroundColor: "fill-surface",
      borderRadius: "md",
      border: "1px solid",
      borderColor: "fill-surface",
      padding: 1,
      marginTop: 4,
      gap: "4px",
      "data-testid": _v3,
      "data-current-toolbar": _v2,
      children: _v0
    });
  var _v528 = _v0.i(0);
  let _v529 = _v0 => (0, _v7.jsx)(_v82.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v7.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m12.074 5-2.998 7.5h5.928L12.081 5h-.007Zm5.333 8.159a1.064 1.064 0 0 0-.017-.043l-3.577-9.179v-.002A1.474 1.474 0 0 0 12.44 3h-.723c-.605 0-1.148.37-1.37.931l-3.67 9.177a1 1 0 0 0-.016.042l-2.59 6.479a1 1 0 1 0 1.857.742L8.276 14.5h7.508l2.284 5.863a1 1 0 0 0 1.864-.726l-2.525-6.478Z",
      fill: "currentColor"
    })
  });
  var _v530 = _v0.i(0),
    _v531 = _v0.i(0),
    _v532 = _v0.i(0),
    _v533 = _v0.i(0);
  let _v534 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsxs)("svg", {
      ref: _v1,
      ..._v0,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.0005 8C22.0005 4.68629 19.3142 2 16.0005 2C12.6868 2 10.0005 4.68629 10.0005 8C10.0005 11.3137 12.6868 14 16.0005 14C19.3142 14 22.0005 11.3137 22.0005 8ZM20.0005 8C20.0005 5.79086 18.2096 4 16.0005 4C13.7913 4 12.0005 5.79086 12.0005 8C12.0005 10.2091 13.7913 12 16.0005 12C18.2096 12 20.0005 10.2091 20.0005 8Z",
        fill: "currentcolor"
      }), (0, _v7.jsx)("path", {
        d: "M8.35296 10.3558C8.12651 10.8573 8.00047 11.4139 8.00047 12C8.00047 14.2091 9.79133 16 12.0005 16C12.5865 16 13.1432 15.874 13.6447 15.6475C14.3895 15.8767 15.1806 16 16.0005 16C16.1634 16 16.3251 15.9951 16.4856 15.9855C15.3866 17.2214 13.7844 18 12.0005 18C8.68676 18 6.00047 15.3137 6.00047 12C6.00047 10.216 6.77905 8.6139 8.01494 7.51488C8.00534 7.67536 8.00047 7.83711 8.00047 8C8.00047 8.81991 8.12381 9.61101 8.35296 10.3558Z",
        fill: "currentcolor"
      }), (0, _v7.jsx)("path", {
        d: "M12.0005 20C11.1804 20 10.3892 19.8766 9.64437 19.6474C9.14278 19.8739 8.58611 20 8 20C5.79086 20 4 18.2091 4 16C4 15.4137 4.12614 14.8568 4.35276 14.3551C4.12374 13.6105 4.00047 12.8197 4.00047 12C4.00047 11.8369 4.00535 11.675 4.01497 11.5144C2.77878 12.6134 2 14.2157 2 16C2 19.3137 4.68629 22 8 22C9.78394 22 11.386 21.2214 12.4851 19.9856C12.3248 19.9951 12.1632 20 12.0005 20Z",
        fill: "currentcolor"
      })]
    })),
    _v535 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.293 11.293a1 1 0 0 1 1.414 0L11 16.586V5a1 1 0 1 1 2 0v11.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z",
        fill: "currentColor"
      })
    }),
    _v536 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.707 4.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z",
        fill: "currentColor"
      })
    });
  var _v537 = _v0.i(0),
    _v538 = _v0.i(0),
    _v539 = _v0.i(0),
    _v540 = _v0.i(0),
    _v541 = _v0.i(0),
    _v542 = _v0.i(0),
    _v543 = _v0.i(0);
  let _v544 = _v8.default.forwardRef((_v0, _v1) => (0, _v7.jsx)(_v75.Flex, {
    direction: "column",
    p: "0 4px 4px",
    gap: "8px",
    ref: _v1,
    ..._v0
  }));
  var _v545 = _v0.i(0);
  function _v546({
    buttons: _v0,
    tooltipPlacement: _v1 = "bottom",
    maxItemsPerRow: _v2
  }) {
    let _v3 = _v2 ? (0, _v283.splitToSubArraysByN)(_v0, _v2) : [_v0];
    return (0, _v7.jsx)(_v186.Box, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8",
      children: _v3.map((_v0, _v1) => (0, _v7.jsx)(_v186.Box, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8",
        children: _v0.map(({
          key: _v0,
          tooltipText: _v1,
          isSelected: _v2,
          icon: _v3,
          onClick: _v4,
          testId: _v5
        }) => (0, _v7.jsx)(_v212.Tooltip, {
          label: _v1,
          placement: _v1,
          "data-testid": "tooltip",
          isDisabled: !_v1,
          children: (0, _v7.jsx)("span", {
            children: (0, _v7.jsx)(_v545.SelectionBorder, {
              isSelected: _v2,
              children: (0, _v7.jsx)(_v195.IconButton, {
                "aria-label": _v5,
                variant: "secondary",
                size: "sm",
                icon: _v3,
                onClick: _v4,
                "data-testid": _v5
              })
            })
          })
        }, _v0 ?? _v5))
      }, `row-${_v1}`))
    });
  }
  let _v547 = ({
    title: _v0,
    buttons: _v1,
    maxItemsPerRow: _v2
  }) => (0, _v7.jsxs)(_v7.Fragment, {
    children: [(0, _v7.jsx)(_v523, {
      children: _v0
    }), (0, _v7.jsx)(_v544, {
      children: (0, _v7.jsx)(_v546, {
        buttons: _v1,
        maxItemsPerRow: _v2
      })
    })]
  });
  function _v548({
    validatedElements: _v0,
    title: _v1,
    animationKeyName: _v2
  }) {
    let _v3 = (0, _v168.useAppDispatch)(),
      {
        currentTime: _v4
      } = (0, _v168.useAppSelector)(_v372.dragonflyStateSelector),
      {
        seek: _v5,
        play: _v6,
        pause: _v7
      } = (0, _v252.useDragonfly)(),
      _v8 = (0, _v153.shouldShowInDevelopmentFeature)("slideAnimation", !0),
      _v9 = (0, _v8.useRef)(!1),
      _v10 = _v0[0];
    if ((0, _v8.useEffect)(() => {
      _v4 >= _v10?.compositionTiming.start + 1 && _v7();
    }, [_v4, _v7, _v10]), (0, _v8.useEffect)(() => () => {
      _v9.current && _v7();
    }, [_v7]), !_v0) return null;
    let _v11 = _v0 => {
        _v0.forEach(_v0 => {
          _v3((0, _v167.updateElementAction)({
            ceId: _v0.id,
            element: {
              [_v2]: _v0
            }
          }));
        }), _v5(_v10.compositionTiming.start), _v6(), _v9.current = !0;
      },
      _v12 = _v10?.[_v2] ?? _v543.AnimationType.NONE,
      _v13 = void 0 === _v12 || _v12 === _v543.AnimationType.NONE,
      _v14 = [{
        tooltipText: (0, _v63.translate)({
          singular: "None",
          dictionary: {
            es: {
              singular: "Ninguno"
            },
            "de-DE": {
              singular: "Kein"
            },
            "fr-FR": {
              singular: "Aucune"
            },
            "ja-JP": {
              singular: "なし"
            },
            "ko-KR": {
              singular: "없음"
            },
            "pt-BR": {
              singular: "Nenhum"
            },
            "zh-CN": {
              singular: "无"
            }
          }
        }),
        isSelected: _v13,
        icon: (0, _v7.jsx)(_v542.StopBanRight, {}),
        onClick: () => _v11(_v543.AnimationType.NONE),
        testId: `${_v543.AnimationType.NONE}-animation-button`
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Fade",
          dictionary: {
            es: {
              singular: "Atenuar"
            },
            "de-DE": {
              singular: "Ausblenden"
            },
            "fr-FR": {
              singular: "Fondu"
            },
            "ja-JP": {
              singular: "フェード"
            },
            "ko-KR": {
              singular: "페이드"
            },
            "pt-BR": {
              singular: "Atenuar"
            },
            "zh-CN": {
              singular: "淡入淡出"
            }
          }
        }),
        isSelected: _v12 === _v543.AnimationType.FADE,
        icon: (0, _v7.jsx)(_v539.Blur, {}),
        onClick: () => _v11(_v543.AnimationType.FADE),
        testId: `${_v543.AnimationType.FADE}-animation-button`
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Stamp",
          dictionary: {
            es: {
              singular: "Sello"
            },
            "de-DE": {
              singular: "Stempel"
            },
            "fr-FR": {
              singular: "Tampon"
            },
            "ja-JP": {
              singular: "スタンプ"
            },
            "ko-KR": {
              singular: "스탬프"
            },
            "pt-BR": {
              singular: "Carimbo"
            },
            "zh-CN": {
              singular: "戳记"
            }
          }
        }),
        isSelected: _v12 === _v543.AnimationType.STAMP,
        icon: (0, _v7.jsx)(_v540.CompressArrows, {}),
        onClick: () => _v11(_v543.AnimationType.STAMP),
        testId: `${_v543.AnimationType.STAMP}-animation-button`
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Pop",
          dictionary: {
            "fr-FR": {
              singular: "Éclat"
            },
            "ja-JP": {
              singular: "ポップ"
            },
            "ko-KR": {
              singular: "팝"
            },
            "zh-CN": {
              singular: "流行音乐"
            }
          }
        }),
        isSelected: _v12 === _v543.AnimationType.POP,
        icon: (0, _v7.jsx)(_v541.ExpandArrowsAlt, {}),
        onClick: () => _v11(_v543.AnimationType.POP),
        testId: `${_v543.AnimationType.POP}-animation-button`
      }, ...(_v8 ? [{
        tooltipText: (0, _v63.translate)({
          singular: "Slide Right",
          dictionary: {
            es: {
              singular: "Deslizar a la derecha"
            },
            "de-DE": {
              singular: "Nach rechts schieben"
            },
            "fr-FR": {
              singular: "Glisser vers la droite"
            },
            "ja-JP": {
              singular: "右にスライド"
            },
            "ko-KR": {
              singular: "오른쪽으로 슬라이드"
            },
            "pt-BR": {
              singular: "Deslize para a direita"
            },
            "zh-CN": {
              singular: "向右滑动"
            }
          }
        }),
        isSelected: _v12 === _v543.AnimationType.SLIDE_RIGHT,
        icon: (0, _v7.jsx)(_v537.ArrowRightFilled, {}),
        onClick: () => _v11(_v543.AnimationType.SLIDE_RIGHT),
        testId: `${_v543.AnimationType.SLIDE_RIGHT}-animation-button`
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Slide Left",
          dictionary: {
            es: {
              singular: "Deslizar a la izquierda"
            },
            "de-DE": {
              singular: "Nach links wischen"
            },
            "fr-FR": {
              singular: "Glisser vers la gauche"
            },
            "ja-JP": {
              singular: "左にスライド"
            },
            "ko-KR": {
              singular: "왼쪽으로 슬라이드"
            },
            "pt-BR": {
              singular: "Deslize para a esquerda"
            },
            "zh-CN": {
              singular: "向左滑动"
            }
          }
        }),
        isSelected: _v12 === _v543.AnimationType.SLIDE_LEFT,
        icon: (0, _v7.jsx)(_v536, {}),
        onClick: () => _v11(_v543.AnimationType.SLIDE_LEFT),
        testId: `${_v543.AnimationType.SLIDE_LEFT}-animation-button`
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Slide Bottom",
          dictionary: {
            es: {
              singular: "Deslizar a la parte inferior"
            },
            "de-DE": {
              singular: "Nach unten schieben"
            },
            "fr-FR": {
              singular: "Glisser vers le bas"
            },
            "ja-JP": {
              singular: "スライドの下部"
            },
            "ko-KR": {
              singular: "슬라이드 하단"
            },
            "pt-BR": {
              singular: "Parte Inferior do Slide"
            },
            "zh-CN": {
              singular: "向下滑动"
            }
          }
        }),
        isSelected: _v12 === _v543.AnimationType.SLIDE_BOTTOM,
        icon: (0, _v7.jsx)(_v535, {}),
        onClick: () => _v11(_v543.AnimationType.SLIDE_BOTTOM),
        testId: `${_v543.AnimationType.SLIDE_BOTTOM}-animation-button`
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Slide Top",
          dictionary: {
            es: {
              singular: "Deslizar a la parte superior"
            },
            "de-DE": {
              singular: "Nach oben schieben"
            },
            "ja-JP": {
              singular: "スライドの上部"
            },
            "ko-KR": {
              singular: "슬라이드 상단"
            },
            "pt-BR": {
              singular: "Topo do Slide"
            },
            "zh-CN": {
              singular: "向上滑动"
            }
          }
        }),
        isSelected: _v12 === _v543.AnimationType.SLIDE_TOP,
        icon: (0, _v7.jsx)(_v538.ArrowUpFilled, {}),
        onClick: () => _v11(_v543.AnimationType.SLIDE_TOP),
        testId: `${_v543.AnimationType.SLIDE_TOP}-animation-button`
      }] : [])];
    return (0, _v7.jsx)(_v547, {
      title: _v1,
      buttons: _v14,
      maxItemsPerRow: 4
    });
  }
  var _v549 = _v0.i(0);
  let _v550 = {
      lineHeight: "1.8",
      fontSize: "0.875rem"
    },
    _v551 = ({
      isActive: _v0,
      ariaLabel: _v1,
      icon: _v2,
      testId: _v3,
      onClick: _v4,
      title: _v5,
      iconPosition: _v6,
      isDisabled: _v7,
      variant: _v8
    }) => {
      let _v9 = _v8 || "tertiary";
      return _v5 ? (0, _v7.jsx)(_v187.Button, {
        variant: _v9,
        size: "sm",
        "data-testid": _v3,
        onClick: _v4,
        isActive: _v0,
        isDisabled: _v7,
        ...("left" === _v6 ? {
          leftIcon: _v2
        } : {
          rightIcon: _v2
        }),
        children: _v5
      }) : (0, _v7.jsx)(_v195.IconButton, {
        "aria-label": _v1 ?? "toolbar button",
        variant: _v9,
        size: "sm",
        "data-testid": _v3,
        onClick: _v4,
        isActive: _v0,
        icon: _v2,
        isDisabled: _v7
      });
    },
    _v552 = ({
      buttonId: _v0,
      content: _v1,
      icon: _v2,
      testId: _v3,
      tooltipText: _v4 = "",
      tooltipTestId: _v5 = "tooltip",
      title: _v6,
      popOverStyle: _v7 = {
        minWidth: "fit-content"
      },
      iconPosition: _v8 = "left",
      onClick: _v9,
      closeOnBlur: _v10 = !0,
      isDisabled: _v11 = !1
    }) => {
      let _v12 = (0, _v168.useAppDispatch)(),
        _v13 = (0, _v168.useAppSelector)(_v0 => _v0.toolbar.selectedToolbarButton === _v0),
        _v14 = !_v4 || _v13;
      return (0, _v7.jsxs)(_v197.Popover, {
        onOpen: () => {
          _v12((0, _v494.selectToolbarButtonAction)(_v0)), _v9?.();
        },
        onClose: () => _v12((0, _v494.deselectToolbarButtonAction)(_v0)),
        isOpen: _v13,
        isLazy: !0,
        closeOnBlur: _v10,
        children: [(0, _v7.jsx)(_v212.Tooltip, {
          label: _v4,
          sx: _v550,
          "data-testid": _v5,
          isDisabled: _v14,
          children: (0, _v7.jsx)(_v186.Box, {
            display: "inline-block",
            children: (0, _v7.jsx)(_v200.PopoverTrigger, {
              children: (0, _v7.jsx)(_v186.Box, {
                children: (0, _v7.jsx)(_v551, {
                  ...(_v8 && {
                    iconPosition: _v8
                  }),
                  ...(_v6 && {
                    title: _v6
                  }),
                  isActive: _v13,
                  icon: _v2,
                  onClick: function () {
                    _v13 ? _v12((0, _v494.deselectToolbarButtonAction)(_v0)) : _v12((0, _v494.selectToolbarButtonAction)(_v0));
                  },
                  isDisabled: _v11,
                  testId: _v3
                })
              })
            })
          })
        }), (0, _v7.jsx)(_v201.Portal, {
          children: (0, _v7.jsx)(_v199.PopoverContent, {
            style: _v7,
            children: _v13 ? _v1 : null
          })
        })]
      });
    };
  var _v553 = _v0.i(0),
    _v554 = _v0.i(0),
    _v555 = _v0.i(0),
    _v556 = _v0.i(0);
  let _v557 = ({
      title: _v0,
      value: _v1,
      onChange: _v2
    }) => (0, _v7.jsx)(_v547, {
      title: _v0,
      buttons: [{
        tooltipText: (0, _v63.translate)({
          singular: "None",
          dictionary: {
            es: {
              singular: "Ninguno"
            },
            "de-DE": {
              singular: "Kein"
            },
            "fr-FR": {
              singular: "Aucune"
            },
            "ja-JP": {
              singular: "なし"
            },
            "ko-KR": {
              singular: "없음"
            },
            "pt-BR": {
              singular: "Nenhum"
            },
            "zh-CN": {
              singular: "无"
            }
          }
        }),
        isSelected: _v1 === _v556.DropShadow.NONE,
        icon: (0, _v7.jsx)(_v542.StopBanRight, {}),
        onClick: () => _v2(_v556.DropShadow.NONE),
        testId: _v181.testIds.dropShadowController.noneButton
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Soft",
          dictionary: {
            es: {
              singular: "Suave"
            },
            "de-DE": {
              singular: "Weich"
            },
            "fr-FR": {
              singular: "Douce"
            },
            "ja-JP": {
              singular: "ソフト"
            },
            "ko-KR": {
              singular: "부드럽게"
            },
            "pt-BR": {
              singular: "Suave"
            },
            "zh-CN": {
              singular: "柔和"
            }
          }
        }),
        isSelected: _v1 === _v556.DropShadow.SOFT,
        icon: (0, _v7.jsx)(_v554.DropShadowSoft, {}),
        onClick: () => _v2(_v556.DropShadow.SOFT),
        testId: _v181.testIds.dropShadowController.softButton
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Normal",
          dictionary: {
            "fr-FR": {
              singular: "Normale"
            },
            "ja-JP": {
              singular: "普通"
            },
            "ko-KR": {
              singular: "보통"
            },
            "zh-CN": {
              singular: "正常"
            }
          }
        }),
        isSelected: _v1 === _v556.DropShadow.NORMAL,
        icon: (0, _v7.jsx)(_v553.DropShadowDefault, {}),
        onClick: () => _v2(_v556.DropShadow.NORMAL),
        testId: _v181.testIds.dropShadowController.normalButton
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Strong",
          dictionary: {
            es: {
              singular: "Fuerte"
            },
            "de-DE": {
              singular: "Stark"
            },
            "fr-FR": {
              singular: "Marquée"
            },
            "ja-JP": {
              singular: "濃い"
            },
            "ko-KR": {
              singular: "강하게"
            },
            "pt-BR": {
              singular: "Forte"
            },
            "zh-CN": {
              singular: "粗体"
            }
          }
        }),
        isSelected: _v1 === _v556.DropShadow.SHARP,
        icon: (0, _v7.jsx)(_v555.DropShadowStrong, {}),
        onClick: () => _v2(_v556.DropShadow.SHARP),
        testId: _v181.testIds.dropShadowController.strongButton
      }]
    }),
    _v558 = ({
      buttonId: _v0,
      testId: _v1,
      value: _v2,
      onChange: _v3,
      onClick: _v4
    }) => (0, _v7.jsx)(_v552, {
      buttonId: _v0,
      content: (0, _v7.jsx)(_v557, {
        value: _v2,
        onChange: _v3,
        title: (0, _v63.translate)({
          singular: "Drop shadow",
          dictionary: {
            es: {
              singular: "Sombra paralela"
            },
            "de-DE": {
              singular: "Schlagschatten"
            },
            "fr-FR": {
              singular: "Ombre portée"
            },
            "ja-JP": {
              singular: "ドロップシャドウ"
            },
            "ko-KR": {
              singular: "그림자 효과"
            },
            "pt-BR": {
              singular: "Sombra"
            },
            "zh-CN": {
              singular: "添加阴影"
            }
          }
        })
      }),
      icon: (0, _v7.jsx)(_v549.DropShadow, {}),
      testId: _v1,
      tooltipText: (0, _v63.translate)({
        singular: "Drop shadow",
        dictionary: {
          es: {
            singular: "Sombra paralela"
          },
          "de-DE": {
            singular: "Schlagschatten"
          },
          "fr-FR": {
            singular: "Ombre portée"
          },
          "ja-JP": {
            singular: "ドロップシャドウ"
          },
          "ko-KR": {
            singular: "그림자 효과"
          },
          "pt-BR": {
            singular: "Sombra"
          },
          "zh-CN": {
            singular: "添加阴影"
          }
        }
      }),
      onClick: _v4
    });
  var _v559 = _v0.i(0);
  let _v560 = "__brand__";
  function _v561({
    selectedFont: _v0,
    inspectorType: _v1,
    handleClick: _v2
  }) {
    let _v3 = (0, _v168.useAppSelector)(_v166.currentInspectorSelector),
      _v4 = (0, _v168.useAppSelector)(_v373.fontsSelector),
      _v5 = _v4?.[_v0],
      _v6 = (0, _v8.useMemo)(() => _v5 ? _v5.family + (_v5.style ? " " + _v5.style : "") : _v0.indexOf(_v560) > -1 ? _v0.substring(0, _v0.indexOf(_v560)) : _v0, [_v0, _v5]);
    return (0, _v7.jsx)(_v212.Tooltip, {
      label: (0, _v63.translate)({
        singular: "Font",
        dictionary: {
          es: {
            singular: "Fuente"
          },
          "de-DE": {
            singular: "Schriftart"
          },
          "fr-FR": {
            singular: "Police"
          },
          "ja-JP": {
            singular: "フォント"
          },
          "ko-KR": {
            singular: "폰트"
          },
          "pt-BR": {
            singular: "Fonte"
          },
          "zh-CN": {
            singular: "字体"
          }
        }
      }),
      placement: "bottom",
      "data-testid": "tooltip",
      "aria-disabled": !1,
      isDisabled: _v3 === _v1,
      children: (0, _v7.jsx)(_v187.Button, {
        variant: "tertiary",
        size: "sm",
        "data-testid": _v181.testIds.fontController,
        onClick: () => {
          (0, _v559.sendTrackSelectFontOptions)({
            fontBefore: _v5?.name || ""
          }), _v2();
        },
        fontFamily: _v5?.name ? (0, _v374.getFontFamily)(_v5.name) : "",
        isActive: _v3 === _v1,
        children: _v6
      })
    });
  }
  var _v562 = _v0.i(0);
  let _v563 = [32, 40, 48, 72, 80, 96, 120, 140, 180, 220],
    _v564 = ({
      onChange: _v0,
      value: _v1,
      valueOverride: _v2,
      buttonId: _v3
    }) => {
      let _v4 = (0, _v168.useAppDispatch)(),
        [_v5, _v6] = (0, _v8.useState)(0),
        _v7 = (0, _v8.useRef)(null),
        _v8 = (0, _v8.useRef)(null),
        _v9 = (0, _v8.useRef)(null),
        {
          isOpen: _v10,
          onClose: _v11,
          onOpen: _v12
        } = (0, _v510.useDisclosure)(),
        _v13 = (0, _v8.useCallback)((_v0, _v1) => {
          _v6(_v0), _v0(_v0, _v1), _v10 && _v9.current?.focus();
        }, [_v10, _v0]),
        _v14 = (0, _v8.useMemo)(() => _v563.map(_v0 => (0, _v7.jsx)(_v187.Button, {
          width: "100%",
          variant: "tertiary",
          size: "sm",
          "data-testid": `text-drop-down-${_v0}-size`,
          onClick: () => _v13(_v0, "dropdown"),
          isActive: _v0 === _v5,
          children: _v0
        }, _v0)), [_v5, _v13]),
        _v15 = (0, _v8.useCallback)(() => {
          _v4((0, _v494.deselectToolbarButtonAction)(_v3)), _v11();
        }, [_v3, _v4, _v11]);
      return (0, _v8.useEffect)(() => {
        _v6(_v1);
      }, [_v1]), (0, _v8.useEffect)(() => {
        let _v0 = _v0 => {
          _v0.target && _v7.current && !_v7.current.contains(_v0.target) && _v8.current && !_v8.current.contains(_v0.target) && _v15();
        };
        return document.addEventListener("mousedown", _v0), () => {
          document.removeEventListener("mousedown", _v0);
        };
      }, [_v15]), (0, _v7.jsx)(_v211.Center, {
        children: (0, _v7.jsxs)(_v197.Popover, {
          initialFocusRef: _v7,
          onOpen: () => {
            _v4((0, _v494.selectToolbarButtonAction)(_v3)), _v12();
          },
          onClose: _v15,
          isOpen: _v10,
          children: [(0, _v7.jsx)("span", {
            ref: _v7,
            children: (0, _v7.jsxs)(_v562.NumberInput, {
              size: "sm",
              border: 1,
              borderRadius: "button",
              variant: "default",
              allowMouseWheel: !0,
              defaultValue: _v2 || _v5,
              value: _v2 || _v5,
              onChange: _v0 => _v13(Number(_v0), "numberInput"),
              "data-group": !0,
              min: 0,
              max: 0,
              keepWithinRange: !0,
              clampValueOnBlur: !0,
              "data-testid": "text-size-input",
              children: [(0, _v7.jsx)(_v200.PopoverTrigger, {
                children: (0, _v7.jsx)(_v562.NumberInputField, {
                  ref: _v9,
                  height: "sm",
                  width: `${4 === _v5.toString().length ? 82 : 76}px`,
                  borderRadius: "button"
                })
              }), (0, _v7.jsxs)(_v562.NumberInputStepper, {
                width: "xs",
                marginRight: 0,
                height: "calc(100% - 1px)",
                borderBottomRightRadius: "button",
                borderTopRightRadius: "button",
                children: [(0, _v7.jsx)(_v562.NumberIncrementStepper, {
                  "data-testid": "text-size-control-up"
                }), (0, _v7.jsx)(_v562.NumberDecrementStepper, {
                  "data-testid": "text-size-control-down"
                })]
              })]
            })
          }), (0, _v7.jsx)(_v201.Portal, {
            children: (0, _v7.jsx)(_v199.PopoverContent, {
              minWidth: "fit-content",
              padding: "4px",
              ref: _v8,
              children: _v14
            })
          })]
        })
      });
    },
    _v565 = ({
      testId: _v0,
      buttonId: _v1,
      value: _v2,
      valueOverride: _v3,
      onChange: _v4
    }) => {
      let _v5 = (0, _v168.useAppSelector)(_v494.selectedToolbarButtonSelector);
      return (0, _v7.jsx)(_v212.Tooltip, {
        label: (0, _v63.translate)({
          singular: "Font Size",
          dictionary: {
            es: {
              singular: "Tamaño de fuente"
            },
            "de-DE": {
              singular: "Schriftgröße"
            },
            "fr-FR": {
              singular: "Taille de la police"
            },
            "ja-JP": {
              singular: "フォントサイズ"
            },
            "ko-KR": {
              singular: "폰트 크기"
            },
            "pt-BR": {
              singular: "Tamanho da fonte"
            },
            "zh-CN": {
              singular: "字体大小"
            }
          }
        }),
        placement: "bottom",
        "data-testid": "tooltip",
        "aria-disabled": !1,
        isDisabled: _v1 === _v5,
        children: (0, _v7.jsx)("span", {
          "data-testid": _v0,
          children: (0, _v7.jsx)(_v564, {
            value: _v2,
            valueOverride: _v3,
            onChange: _v4,
            buttonId: _v1
          })
        })
      });
    },
    _v566 = {
      height: "unset",
      width: "unset"
    },
    _v567 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsx)("svg", {
      ref: _v1,
      width: "16",
      height: "17",
      viewBox: "0 0 16 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _v566,
      ..._v0,
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.46782 3.86482e-05C8.03224 -0.00807617 9.29644 1.26273 9.29644 2.82286V4.7907L12.5778 5.85063C12.593 5.85556 12.6082 5.86085 12.6232 5.8665C13.4489 6.17777 14.1819 6.62966 14.707 7.29742C15.243 7.97916 15.4986 8.80509 15.4986 9.73926V12.8216C15.4986 15.103 13.6492 16.9524 11.3678 16.9524H9.03178C7.46783 16.9524 5.965 16.3426 4.8455 15.2473C3.72813 14.1541 2.21563 12.6699 1.26256 11.7168L1.26085 11.7151C0.38492 10.8349 0.249872 9.45809 0.936045 8.42384C1.55876 7.48524 2.66146 7.09775 3.66831 7.32034L3.66831 2.82286C3.66831 1.27407 4.91484 0.00809433 6.46782 3.86482e-05ZM3.66831 8.55319C3.66781 8.56086 3.66831 8.56126 3.66831 8.55319V8.55319ZM7.29644 2.82286C7.29644 2.36216 6.92483 1.99769 6.4782 2.00001C6.03476 2.00231 5.66831 2.36553 5.66831 2.82286V8.55319C5.66831 8.7241 5.64827 8.95391 5.5471 9.18361C5.43606 9.43574 5.20265 9.72761 4.80252 9.83853C4.43949 9.93917 4.13032 9.83559 3.95717 9.75067C3.77578 9.6617 3.6328 9.54139 3.52843 9.43652C3.26028 9.16707 2.81462 9.20997 2.60261 9.52953C2.44099 9.77313 2.47344 10.0978 2.67793 10.3038C3.62227 11.2481 5.12654 12.7242 6.24419 13.8177C6.98835 14.5458 7.98844 14.9524 9.03179 14.9525H11.3678C12.5446 14.9525 13.4986 13.9984 13.4986 12.8216V9.73926C13.4986 9.18703 13.3553 8.81403 13.1348 8.53365C12.9061 8.2428 12.5313 7.97238 11.9391 7.74609L7.29644 6.24642V2.82286Z",
        fill: "currentColor"
      })
    }));
  var _v568 = _v0.i(0);
  let _v569 = _v8.default.forwardRef(({
    addPaddingBottom: _v0,
    ..._v1
  }, _v2) => {
    let _v3 = `4px 4px ${_v0 ? "4px" : "0"} 4px`;
    return (0, _v7.jsx)(_v544, {
      padding: _v3,
      ref: _v2,
      gap: "xs",
      ..._v1
    });
  });
  var _v570 = _v0.i(0);
  function _v571({
    validatedElements: _v0,
    sourceHashPropertyPath: _v1,
    opacityPropertyPath: _v2,
    zoomPropertyPath: _v3,
    opacityOverriddenPropertyPath: _v4,
    zoomOverriddenPropertyPath: _v5,
    sourceHashOverriddenPropertyPath: _v6
  }) {
    let _v7 = (0, _v168.useAppDispatch)(),
      _v8 = (0, _v8.useRef)(null),
      _v9 = _v0[0],
      _v10 = _v9?.id,
      _v11 = _v9 ? (0, _v255.getValueByPath)(_v9, _v2) ?? 100 : 100,
      _v12 = (_v9 ? (0, _v255.getValueByPath)(_v9, _v3) ?? 1 : 1) * 100,
      _v13 = _v9 && _v1 ? (0, _v255.getValueByPath)(_v9, _v1) : void 0,
      [_v14, _v15] = (0, _v8.useState)(_v11),
      [_v16, _v17] = (0, _v8.useState)(_v12),
      [_v18] = (0, _v8.useState)(_v9?.rect || null);
    (0, _v568.useOnClickOutside)(_v8, () => {
      _v7((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.HOVER_STATE_CONTROLLER));
    }, !0);
    let _v19 = (0, _v8.useCallback)(_v0 => {
        _v10 && _v7((0, _v167.updateElementAction)({
          ceId: _v10,
          element: (0, _v255.createNestedObject)(_v2, _v0)
        }));
      }, [_v7, _v10, _v2]),
      _v20 = (0, _v8.useCallback)(_v0 => {
        _v10 && _v7((0, _v167.updateElementAction)({
          ceId: _v10,
          element: (0, _v255.createNestedObject)(_v3, _v0 / 100)
        }));
      }, [_v7, _v10, _v3]);
    (0, _v8.useEffect)(function () {
      return () => {
        (_v14 !== _v11 || _v16 !== _v12) && (0, _v415.batch)(() => {
          _v19(_v14), _v20(_v16);
        });
      };
    }, [_v11, _v12, _v14, _v16, _v19, _v20]);
    let _v21 = (0, _v8.useCallback)(_v0 => {
      let _v1 = [_v4, "rect"];
      _v5 && _v1.push(_v5), _v6 && _v1.push(_v6), _v7((0, _v353.removeOverridesAction)({
        ceIds: [_v0],
        keys: _v1
      }));
    }, [_v7, _v4, _v6, _v5]);
    (0, _v8.useEffect)(() => {
      if (_v9 && _v10) {
        let _v0 = (0, _v255.createNestedObject)(_v4, _v11),
          _v1 = _v5 ? {
            [_v5]: _v12 / 100
          } : {},
          _v2 = _v6 ? (0, _v255.createNestedObject)(_v6, _v13) : {};
        _v18 && _v7((0, _v353.addOverrideAction)({
          ceId: _v10,
          overrides: {
            ..._v0,
            rect: _v572(_v18, _v12),
            ..._v1,
            ..._v2
          }
        }));
      }
    }, [_v7, _v10, _v12, _v11, _v4, _v2, _v9, _v18, _v5, _v13, _v1, _v6]), (0, _v8.useEffect)(() => () => {
      _v10 && _v21(_v10);
    }, [_v10, _v21]);
    let _v22 = (0, _v8.useCallback)(_v0 => {
        if (!_v10) return;
        _v15(_v0);
        let _v1 = (0, _v255.createNestedObject)(_v4, _v0);
        _v7((0, _v353.addOverrideAction)({
          ceId: _v10,
          overrides: {
            ..._v1
          }
        }));
      }, [_v7, _v10, _v4]),
      _v23 = (0, _v8.useCallback)(_v0 => {
        if (!_v9 || !_v10) return;
        _v17(_v0);
        let _v1 = {
          rect: _v572(_v9.rect, _v0),
          ...(_v5 && {
            [_v5]: _v0 / 100
          })
        };
        _v7((0, _v353.addOverrideAction)({
          ceId: _v10,
          overrides: _v1
        }));
      }, [_v7, _v9, _v10, _v5]);
    return (0, _v7.jsxs)(_v569, {
      addPaddingBottom: !0,
      ref: _v8,
      width: 240,
      children: [(0, _v7.jsxs)(_v81.VStack, {
        spacing: 50,
        align: "flex-start",
        children: [(0, _v7.jsx)(_v157.Text, {
          variant: "body-md",
          marginBottom: "4px",
          children: _v219.translations.hoverOpacity
        }), (0, _v7.jsx)(_v194.HStack, {
          spacing: 200,
          width: "100%",
          children: (0, _v7.jsx)(_v570.NumericSliderInput, {
            min: 0,
            max: 100,
            id: "top",
            onChange: _v22,
            defaultValue: _v11,
            value: _v14,
            sliderDataTestId: _v181.testIds.hotspotHoverOpacitySlider,
            sliderThumbDataTestId: _v181.testIds.hotspotHoverOpacitySliderHandle,
            sliderInputTestId: _v181.testIds.hotspotHoverOpacityInputSlider
          })
        })]
      }), (0, _v7.jsxs)(_v81.VStack, {
        spacing: 50,
        align: "flex-start",
        children: [(0, _v7.jsx)(_v157.Text, {
          variant: "body-md",
          marginBottom: "4px",
          children: _v219.translations.hoverSize
        }), (0, _v7.jsx)(_v194.HStack, {
          spacing: 200,
          width: "100%",
          children: (0, _v7.jsx)(_v570.NumericSliderInput, {
            min: 0,
            max: 200,
            id: "bottom",
            onChange: _v23,
            value: _v16,
            defaultValue: _v12,
            sliderDataTestId: _v181.testIds.hoverSizeSlider,
            sliderThumbDataTestId: _v181.testIds.hoverSizeSliderHandle,
            sliderInputTestId: _v181.testIds.hotspotHoverSizeInputSlider
          })
        })]
      })]
    });
  }
  function _v572(_v0, _v1) {
    return {
      width: _v0.width * (_v1 / 100),
      height: _v0.height * (_v1 / 100),
      x: _v0.x - _v0.width * (_v1 / 100 - 1) / 2,
      y: _v0.y - _v0.height * (_v1 / 100 - 1) / 2
    };
  }
  function _v573({
    validatedElements: _v0,
    opacityOverriddenPropertyPath: _v1,
    opacityPropertyPath: _v2,
    zoomPropertyPath: _v3,
    zoomOverriddenPropertyPath: _v4,
    sourceHashPropertyPath: _v5,
    sourceHashOverriddenPropertyPath: _v6
  }) {
    return (0, _v7.jsx)(_v552, {
      buttonId: _v493.ToolbarButtons.HOVER_STATE_CONTROLLER,
      content: (0, _v7.jsx)(_v571, {
        validatedElements: _v0,
        opacityPropertyPath: _v2,
        zoomPropertyPath: _v3,
        opacityOverriddenPropertyPath: _v1,
        zoomOverriddenPropertyPath: _v4,
        sourceHashPropertyPath: _v5,
        sourceHashOverriddenPropertyPath: _v6
      }),
      icon: (0, _v7.jsx)(_v567, {}),
      testId: _v181.testIds.hoverStateToolbarButton,
      tooltipText: (0, _v63.translate)({
        singular: "Hover state",
        dictionary: {
          es: {
            singular: "Estado del desplazamiento"
          },
          "de-DE": {
            singular: "Hover-Zustand"
          },
          "fr-FR": {
            singular: "Statut au survol"
          },
          "ja-JP": {
            singular: "ホバー状態"
          },
          "ko-KR": {
            singular: "호버 상태"
          },
          "pt-BR": {
            singular: "Estado do hover"
          },
          "zh-CN": {
            singular: "悬停状态"
          }
        }
      })
    });
  }
  let _v574 = ({
    inspectorId: _v0,
    icon: _v1,
    testId: _v2,
    title: _v3,
    tooltipText: _v4 = "",
    tooltipTestId: _v5 = "tooltip",
    iconPosition: _v6 = "left",
    toggleInspectorOptions: _v7 = {}
  }) => {
    let _v8 = (0, _v168.useAppSelector)(_v166.currentInspectorSelector),
      {
        toggleInspector: _v9
      } = (0, _v533.useInspector)(),
      _v10 = _v8 === _v0,
      _v11 = !_v4 || _v10;
    return (0, _v7.jsx)(_v212.Tooltip, {
      label: _v4,
      sx: _v550,
      "data-testid": _v5,
      isDisabled: _v11,
      children: (0, _v7.jsx)("span", {
        children: (0, _v7.jsx)(_v551, {
          isActive: _v10,
          icon: _v1,
          onClick: function () {
            _v9(_v0, _v7);
          },
          testId: _v2,
          iconPosition: _v6,
          title: _v3
        })
      })
    });
  };
  var _v575 = _v0.i(0),
    _v576 = _v0.i(0);
  let _v577 = _v0 => (0, _v7.jsx)(_v82.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v7.jsx)("path", {
      d: "M12.71 6.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1.003 1.003 0 1 0 1.42 1.42L11 9.41V21a1 1 0 0 0 2 0V9.41l2.29 2.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-4-4ZM19 2H5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2Z",
      fill: "currentColor"
    })
  });
  var _v578 = _v0.i(0),
    _v579 = _v0.i(0);
  let _v580 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsxs)("svg", {
      ref: _v1,
      ..._v0,
      width: "16",
      height: "20",
      viewBox: "0 0 16 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _v7.jsx)("path", {
        d: "M15 9H1C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11H15C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9Z",
        fill: "currentColor"
      }), (0, _v7.jsx)("path", {
        d: "M7.00409 16.405L6.21409 17.205C6.02579 17.3933 5.77039 17.4991 5.50409 17.4991C5.23779 17.4991 4.9824 17.3933 4.79409 17.205C4.60579 17.0167 4.5 16.7613 4.5 16.495C4.5 16.2287 4.60579 15.9733 4.79409 15.785L7.29409 13.285C7.38919 13.194 7.50134 13.1226 7.62409 13.075C7.86755 12.975 8.14063 12.975 8.38409 13.075C8.50684 13.1226 8.61899 13.194 8.71409 13.285L11.2141 15.785C11.3078 15.878 11.3822 15.9886 11.433 16.1104C11.4838 16.2323 11.5099 16.363 11.5099 16.495C11.5099 16.627 11.4838 16.7577 11.433 16.8796C11.3822 17.0014 11.3078 17.112 11.2141 17.205C11.1211 17.2987 11.0105 17.3731 10.8887 17.4239C10.7668 17.4747 10.6361 17.5008 10.5041 17.5008C10.3721 17.5008 10.2414 17.4747 10.1195 17.4239C9.99766 17.3731 9.88705 17.2987 9.79409 17.205L9.00409 16.405V18.995C9.00409 19.2602 8.89873 19.5146 8.7112 19.7021C8.52366 19.8897 8.26931 19.995 8.00409 19.995C7.73887 19.995 7.48452 19.8897 7.29698 19.7021C7.10945 19.5146 7.00409 19.2602 7.00409 18.995V16.405Z",
        fill: "currentColor"
      }), (0, _v7.jsx)("path", {
        d: "M8.99591 3.59499L9.78591 2.79499C9.97421 2.60668 10.2296 2.50089 10.4959 2.50089C10.7622 2.50089 11.0176 2.60668 11.2059 2.79499C11.3942 2.98329 11.5 3.23868 11.5 3.50499C11.5 3.77129 11.3942 4.02668 11.2059 4.21499L8.70591 6.71499C8.6108 6.80603 8.49866 6.87739 8.37591 6.92499C8.13245 7.025 7.85937 7.025 7.61591 6.92499C7.49316 6.87739 7.38101 6.80603 7.28591 6.71499L4.78591 4.21499C4.69218 4.12202 4.61779 4.01142 4.56702 3.88956C4.51625 3.7677 4.49011 3.637 4.49011 3.50499C4.49011 3.37297 4.51625 3.24227 4.56702 3.12041C4.61779 2.99855 4.69218 2.88795 4.78591 2.79499C4.87887 2.70126 4.98947 2.62686 5.11133 2.57609C5.23319 2.52533 5.3639 2.49919 5.49591 2.49919C5.62792 2.49919 5.75863 2.52533 5.88049 2.57609C6.00235 2.62686 6.11295 2.70126 6.20591 2.79499L6.99591 3.59499V1.00499C6.99591 0.739769 7.10127 0.485415 7.2888 0.297879C7.47634 0.110343 7.73069 0.00498579 7.99591 0.00498581C8.26113 0.00498583 8.51548 0.110343 8.70302 0.297879C8.89055 0.485416 8.99591 0.73977 8.99591 1.00499L8.99591 3.59499Z",
        fill: "currentColor"
      })]
    })),
    _v581 = ({
      title: _v0,
      ce: _v1
    }) => {
      let _v2 = (0, _v168.useAppDispatch)(),
        _v3 = _v1.verticalAlign ?? _v579.VerticalAlignment.MIDDLE,
        _v4 = _v1.textAlign ?? _v579.Alignment.CENTER,
        _v5 = (0, _v8.useCallback)(_v0 => {
          _v2((0, _v167.updateElementAction)({
            ceId: _v1.id,
            element: {
              textAlign: _v0
            }
          }));
        }, [_v2, _v1.id]),
        _v6 = (0, _v8.useCallback)(_v0 => {
          _v2((0, _v167.updateElementAction)({
            ceId: _v1.id,
            element: {
              verticalAlign: _v0
            }
          }));
        }, [_v2, _v1.id]);
      return (0, _v7.jsxs)(_v544, {
        children: [(0, _v7.jsx)(_v523, {
          children: _v0
        }), (0, _v7.jsx)(_v546, {
          buttons: [{
            tooltipText: (0, _v63.translate)({
              singular: "Left",
              dictionary: {
                es: {
                  singular: "Izquierda"
                },
                "de-DE": {
                  singular: "Links"
                },
                "fr-FR": {
                  singular: "Gauche"
                },
                "ja-JP": {
                  singular: "左揃え"
                },
                "ko-KR": {
                  singular: "왼쪽"
                },
                "pt-BR": {
                  singular: "Esquerda"
                },
                "zh-CN": {
                  singular: "左"
                }
              }
            }),
            isSelected: _v4 === _v579.Alignment.LEFT,
            icon: (0, _v7.jsx)(_v528.AlignLeft, {}),
            onClick: () => _v5(_v579.Alignment.LEFT),
            testId: _v181.testIds.button.toolbar.alignmentController.leftButton
          }, {
            tooltipText: (0, _v63.translate)({
              singular: "Center",
              dictionary: {
                es: {
                  singular: "Centro"
                },
                "de-DE": {
                  singular: "Mitte"
                },
                "fr-FR": {
                  singular: "Centre"
                },
                "ja-JP": {
                  singular: "中央揃え"
                },
                "ko-KR": {
                  singular: "가운데"
                },
                "pt-BR": {
                  singular: "Centro"
                },
                "zh-CN": {
                  singular: "中心"
                }
              }
            }),
            isSelected: _v4 === _v579.Alignment.CENTER,
            icon: (0, _v7.jsx)(_v575.AlignCenter, {}),
            onClick: () => _v5(_v579.Alignment.CENTER),
            testId: _v181.testIds.button.toolbar.alignmentController.centerButton
          }, {
            tooltipText: (0, _v63.translate)({
              singular: "Right",
              dictionary: {
                es: {
                  singular: "Derecha"
                },
                "de-DE": {
                  singular: "Rechts"
                },
                "fr-FR": {
                  singular: "Droite"
                },
                "ja-JP": {
                  singular: "右揃え"
                },
                "ko-KR": {
                  singular: "오른쪽"
                },
                "pt-BR": {
                  singular: "Direita"
                },
                "zh-CN": {
                  singular: "右"
                }
              }
            }),
            isSelected: _v4 === _v579.Alignment.RIGHT,
            icon: (0, _v7.jsx)(_v576.AlignRight, {}),
            onClick: () => _v5(_v579.Alignment.RIGHT),
            testId: _v181.testIds.button.toolbar.alignmentController.rightButton
          }]
        }), (0, _v7.jsx)(_v546, {
          buttons: [{
            tooltipText: (0, _v63.translate)({
              singular: "Top",
              dictionary: {
                es: {
                  singular: "Arriba"
                },
                "de-DE": {
                  singular: "Oben"
                },
                "fr-FR": {
                  singular: "Haut"
                },
                "ja-JP": {
                  singular: "トップ"
                },
                "ko-KR": {
                  singular: "맨 위로"
                },
                "pt-BR": {
                  singular: "Topo"
                },
                "zh-CN": {
                  singular: "顶部"
                }
              }
            }),
            isSelected: _v3 === _v579.VerticalAlignment.TOP,
            icon: (0, _v7.jsx)(_v577, {}),
            onClick: () => _v6(_v579.VerticalAlignment.TOP),
            testId: _v181.testIds.button.toolbar.alignmentController.topButton
          }, {
            tooltipText: (0, _v63.translate)({
              singular: "Middle",
              dictionary: {
                es: {
                  singular: "Centro"
                },
                "de-DE": {
                  singular: "Mitte"
                },
                "fr-FR": {
                  singular: "Milieu"
                },
                "ja-JP": {
                  singular: "中央"
                },
                "ko-KR": {
                  singular: "가운데"
                },
                "pt-BR": {
                  singular: "Meio"
                },
                "zh-CN": {
                  singular: "中间"
                }
              }
            }),
            isSelected: _v3 === _v579.VerticalAlignment.MIDDLE,
            icon: (0, _v7.jsx)(_v580, {}),
            onClick: () => _v6(_v579.VerticalAlignment.MIDDLE),
            testId: _v181.testIds.button.toolbar.alignmentController.middleButton
          }, {
            tooltipText: (0, _v63.translate)({
              singular: "Bottom",
              dictionary: {
                es: {
                  singular: "Parte inferior"
                },
                "de-DE": {
                  singular: "Unten"
                },
                "fr-FR": {
                  singular: "Bas"
                },
                "ja-JP": {
                  singular: "下"
                },
                "ko-KR": {
                  singular: "아래"
                },
                "pt-BR": {
                  singular: "Inferior"
                },
                "zh-CN": {
                  singular: "底部"
                }
              }
            }),
            isSelected: _v3 === _v579.VerticalAlignment.BOTTOM,
            icon: (0, _v7.jsx)(_v578.ArrowToBottom, {}),
            onClick: () => _v6(_v579.VerticalAlignment.BOTTOM),
            testId: _v181.testIds.button.toolbar.alignmentController.bottomButton
          }]
        })]
      });
    },
    _v582 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.578 2.422a4 4 0 0 1 0 5.656l-13.5 13.5a4 4 0 0 1-5.656-5.656l13.5-13.5a4 4 0 0 1 5.656 0Z",
        fill: "currentColor"
      })
    });
  var _v583 = _v0.i(0),
    _v584 = _v0.i(0);
  let _v585 = (0, _v8.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v10.useTheme)(),
        _v3 = _v2?.name === "dark";
      return (0, _v7.jsx)(_v7.Fragment, {
        children: _v3 ? (0, _v7.jsxs)("svg", {
          ref: _v1,
          ..._v0,
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, _v7.jsx)("circle", {
            cx: "9.99996",
            cy: "10",
            r: "8.33333",
            fill: "white"
          }), (0, _v7.jsx)("path", {
            fillOpacity: "0.4",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 3.33331C6.31814 3.33331 3.33337 6.31808 3.33337 9.99998C3.33337 13.6819 6.31814 16.6666 10 16.6666C13.6819 16.6666 16.6667 13.6819 16.6667 9.99998C16.6667 6.31808 13.6819 3.33331 10 3.33331ZM10 1.66665C5.39767 1.66665 1.66671 5.39761 1.66671 9.99998C1.66671 14.6024 5.39767 18.3333 10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 9.99998C18.3334 5.39761 14.6024 1.66665 10 1.66665Z"
          })]
        }) : (0, _v7.jsxs)("svg", {
          ref: _v1,
          ..._v0,
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, _v7.jsx)("circle", {
            cx: "9.99996",
            cy: "10",
            r: "8.33333",
            fill: "white"
          }), (0, _v7.jsx)("path", {
            fillOpacity: "0.2",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 3.33331C6.31814 3.33331 3.33337 6.31808 3.33337 9.99998C3.33337 13.6819 6.31814 16.6666 10 16.6666C13.6819 16.6666 16.6667 13.6819 16.6667 9.99998C16.6667 6.31808 13.6819 3.33331 10 3.33331ZM10 1.66665C5.39767 1.66665 1.66671 5.39761 1.66671 9.99998C1.66671 14.6024 5.39767 18.3333 10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 9.99998C18.3334 5.39761 14.6024 1.66665 10 1.66665Z"
          })]
        })
      });
    }),
    _v586 = ({
      title: _v0,
      ce: _v1,
      showPreset: _v2 = !0
    }) => {
      let _v3 = (0, _v168.useAppDispatch)(),
        _v4 = _v1.borderWidth,
        _v5 = _v1.borderColor,
        _v6 = (0, _v8.useCallback)(_v0 => {
          _v3((0, _v167.updateElementAction)({
            ceId: _v1.id,
            element: {
              borderWidth: _v0
            }
          }));
        }, [_v3, _v1.id]),
        _v7 = (0, _v8.useCallback)(_v0 => {
          _v3((0, _v167.updateElementAction)({
            ceId: _v1.id,
            element: {
              borderColor: _v0
            }
          }));
        }, [_v3, _v1.id]);
      return (0, _v7.jsxs)(_v544, {
        width: 240,
        children: [(0, _v7.jsx)(_v186.Box, {
          mb: 2,
          children: (0, _v7.jsx)(_v523, {
            children: _v0
          })
        }), _v2 && (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsx)(_v546, {
            buttons: [{
              tooltipText: (0, _v63.translate)({
                singular: "None",
                dictionary: {
                  es: {
                    singular: "Ninguno"
                  },
                  "de-DE": {
                    singular: "Kein"
                  },
                  "fr-FR": {
                    singular: "Aucune"
                  },
                  "ja-JP": {
                    singular: "なし"
                  },
                  "ko-KR": {
                    singular: "없음"
                  },
                  "pt-BR": {
                    singular: "Nenhum"
                  },
                  "zh-CN": {
                    singular: "无"
                  }
                }
              }),
              isSelected: 0 === _v4,
              icon: (0, _v7.jsx)(_v542.StopBanRight, {}),
              onClick: () => _v6(0),
              testId: _v181.testIds.button.toolbar.borderController.noneButton
            }, {
              tooltipText: (0, _v63.translate)({
                singular: "Light",
                dictionary: {
                  es: {
                    singular: "Claro"
                  },
                  "de-DE": {
                    singular: "Hell"
                  },
                  "fr-FR": {
                    singular: "Clair"
                  },
                  "ja-JP": {
                    singular: "ライト"
                  },
                  "ko-KR": {
                    singular: "밝음"
                  },
                  "pt-BR": {
                    singular: "Claro"
                  },
                  "zh-CN": {
                    singular: "浅色"
                  }
                }
              }),
              isSelected: 2 === _v4,
              icon: (0, _v7.jsx)(_v583.LineShape, {}),
              onClick: () => _v6(2),
              testId: _v181.testIds.button.toolbar.borderController.lightButton
            }, {
              tooltipText: (0, _v63.translate)({
                singular: "Middleweight",
                dictionary: {
                  es: {
                    singular: "Medio"
                  },
                  "de-DE": {
                    singular: "Mittelgewicht"
                  },
                  "fr-FR": {
                    singular: "Poids moyen"
                  },
                  "ja-JP": {
                    singular: "中太"
                  },
                  "ko-KR": {
                    singular: "중간 굵기(비주얼 디자인 요소)"
                  },
                  "pt-BR": {
                    singular: "Média"
                  },
                  "zh-CN": {
                    singular: "中量级"
                  }
                }
              }),
              isSelected: 8 === _v4,
              icon: (0, _v7.jsx)(_v584.MediumStroke, {}),
              onClick: () => _v6(8),
              testId: _v181.testIds.button.toolbar.borderController.middleweightButton
            }, {
              tooltipText: (0, _v63.translate)({
                singular: "Heavy",
                dictionary: {
                  es: {
                    singular: "Fuerte"
                  },
                  "de-DE": {
                    singular: "Schwer"
                  },
                  "fr-FR": {
                    singular: "Élevé"
                  },
                  "ja-JP": {
                    singular: "極太"
                  },
                  "ko-KR": {
                    singular: "굵은 굵기(비주얼 디자인 요소)"
                  },
                  "pt-BR": {
                    singular: "Grande"
                  },
                  "zh-CN": {
                    singular: "重"
                  }
                }
              }),
              isSelected: 24 === _v4,
              icon: (0, _v7.jsx)(_v582, {}),
              onClick: () => _v6(24),
              testId: _v181.testIds.button.toolbar.borderController.heavyButton
            }]
          }), (0, _v7.jsx)(_v186.Box, {
            mt: 2,
            children: (0, _v7.jsx)(_v523, {
              children: (0, _v63.translate)({
                singular: "Weight",
                dictionary: {
                  es: {
                    singular: "Peso"
                  },
                  "de-DE": {
                    singular: "Gewicht"
                  },
                  "fr-FR": {
                    singular: "Poids"
                  },
                  "ja-JP": {
                    singular: "太さ"
                  },
                  "ko-KR": {
                    singular: "선 굵기(line weight)"
                  },
                  "pt-BR": {
                    singular: "Espessura"
                  },
                  "zh-CN": {
                    singular: "重量"
                  }
                }
              })
            })
          })]
        }), (0, _v7.jsx)(_v570.NumericSliderInput, {
          max: 48,
          numberInputMax: 999,
          min: 0,
          onChange: _v6,
          value: _v4,
          sliderMinWidth: 20,
          mt: 2
        }), (0, _v7.jsx)(_v186.Box, {
          mt: "15px",
          mx: "auto",
          w: "100",
          children: (0, _v7.jsx)(_v507, {
            testid: _v181.testIds.button.toolbar.borderController.borderColor,
            icon: (0, _v7.jsx)(_v585, {}),
            value: _v5,
            text: _v5,
            iconColor: _v5,
            onChange: _v0 => _v7(_v0),
            onChangeEnd: _v0 => _v7(_v0),
            showButtonBorder: !1
          }, _v1.id)
        })]
      });
    },
    _v587 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsx)("svg", {
      ref: _v1,
      ..._v0,
      width: "21",
      height: "20",
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 4.16665C3 3.70641 3.3731 3.33331 3.83333 3.33331H17.1667C17.6269 3.33331 18 3.70641 18 4.16665C18 4.62688 17.6269 4.99998 17.1667 4.99998H3.83333C3.3731 4.99998 3 4.62688 3 4.16665ZM3 15C3 14.0795 3.74619 13.3333 4.66667 13.3333H16.3333C17.2538 13.3333 18 14.0795 18 15C18 15.9205 17.2538 16.6666 16.3333 16.6666H4.66667C3.74619 16.6666 3 15.9205 3 15ZM4.25 7.91665C3.55964 7.91665 3 8.47629 3 9.16665C3 9.857 3.55964 10.4166 4.25 10.4166H16.75C17.4404 10.4166 18 9.857 18 9.16665C18 8.47629 17.4404 7.91665 16.75 7.91665H4.25Z",
        fill: "currentColor"
      })
    })),
    _v588 = ({
      buttonId: _v0,
      testId: _v1,
      ce: _v2,
      onClick: _v3,
      showPresets: _v4
    }) => (0, _v7.jsx)(_v552, {
      buttonId: _v0,
      content: (0, _v7.jsx)(_v586, {
        ce: _v2,
        title: (0, _v63.translate)({
          singular: "Border",
          dictionary: {
            es: {
              singular: "Borde"
            },
            "de-DE": {
              singular: "Rahmen"
            },
            "fr-FR": {
              singular: "Frontière"
            },
            "ja-JP": {
              singular: "境界"
            },
            "ko-KR": {
              singular: "테두리"
            },
            "pt-BR": {
              singular: "Borda"
            },
            "zh-CN": {
              singular: "边界"
            }
          }
        }),
        showPreset: _v4
      }),
      icon: (0, _v7.jsx)(_v587, {}),
      testId: _v1,
      tooltipText: (0, _v63.translate)({
        singular: "Border",
        dictionary: {
          es: {
            singular: "Borde"
          },
          "de-DE": {
            singular: "Rahmen"
          },
          "fr-FR": {
            singular: "Frontière"
          },
          "ja-JP": {
            singular: "境界"
          },
          "ko-KR": {
            singular: "테두리"
          },
          "pt-BR": {
            singular: "Borda"
          },
          "zh-CN": {
            singular: "边界"
          }
        }
      }),
      onClick: _v3,
      closeOnBlur: !1
    }),
    _v589 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 5a3 3 0 0 0-3 3v1a1 1 0 0 1-2 0V8a5 5 0 0 1 5-5h1a1 1 0 0 1 0 2H8Zm6-1a1 1 0 0 1 1-1h1a5 5 0 0 1 5 5v1a1 1 0 1 1-2 0V8a3 3 0 0 0-3-3h-1a1 1 0 0 1-1-1ZM4 14a1 1 0 0 1 1 1v1a3 3 0 0 0 3 3h1a1 1 0 1 1 0 2H8a5 5 0 0 1-5-5v-1a1 1 0 0 1 1-1Zm16 0a1 1 0 0 1 1 1v1a5 5 0 0 1-5 5h-1a1 1 0 1 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 1-1Z",
        fill: "currentColor"
      })
    });
  var _v590 = _v0.i(0);
  let _v591 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        d: "M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Zm3 13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8Z",
        fill: "currentColor"
      })
    }),
    _v592 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        d: "M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1Zm-1 16H5V5h14v14Z",
        fill: "currentColor"
      })
    }),
    _v593 = ({
      title: _v0,
      value: _v1,
      onChange: _v2,
      showPresets: _v3
    }) => (0, _v7.jsxs)(_v544, {
      width: 240,
      children: [(0, _v7.jsx)(_v186.Box, {
        mb: 2,
        children: (0, _v7.jsx)(_v523, {
          children: _v0
        })
      }), _v3 && (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsx)(_v546, {
          buttons: [{
            tooltipText: (0, _v63.translate)({
              singular: "Sharp",
              dictionary: {
                "de-DE": {
                  singular: "Scharf"
                },
                "fr-FR": {
                  singular: "Nette"
                },
                "ja-JP": {
                  singular: "シャープ"
                },
                "ko-KR": {
                  singular: "선명하게"
                },
                "pt-BR": {
                  singular: "Forte"
                },
                "zh-CN": {
                  singular: "锐利"
                }
              }
            }),
            isSelected: 0 === _v1,
            icon: (0, _v7.jsx)(_v592, {}),
            onClick: () => _v2(0),
            testId: _v181.testIds.button.toolbar.cornerRadiusController.rectangleButton
          }, {
            tooltipText: (0, _v63.translate)({
              singular: "Rounded",
              dictionary: {
                es: {
                  singular: "Redondeado"
                },
                "de-DE": {
                  singular: "Abgerundet"
                },
                "fr-FR": {
                  singular: "Arrondi"
                },
                "ja-JP": {
                  singular: "角丸"
                },
                "ko-KR": {
                  singular: "원형"
                },
                "pt-BR": {
                  singular: "Arredondada"
                },
                "zh-CN": {
                  singular: "圆角"
                }
              }
            }),
            isSelected: 25 === _v1,
            icon: (0, _v7.jsx)(_v591, {}),
            onClick: () => _v2(25),
            testId: _v181.testIds.button.toolbar.cornerRadiusController.softButton
          }, {
            tooltipText: (0, _v63.translate)({
              singular: "Pill",
              dictionary: {
                es: {
                  singular: "Píldora"
                },
                "de-DE": {
                  singular: "Pille"
                },
                "fr-FR": {
                  singular: "Pilule"
                },
                "ja-JP": {
                  singular: "ピル"
                },
                "ko-KR": {
                  singular: "알약 모양의 비주얼 디자인 요소"
                },
                "pt-BR": {
                  singular: "Pílula"
                },
                "zh-CN": {
                  singular: "丸形"
                }
              }
            }),
            isSelected: 50 === _v1,
            icon: (0, _v7.jsx)(_v590.CircleShape, {}),
            onClick: () => _v2(50),
            testId: _v181.testIds.button.toolbar.cornerRadiusController.circleButton
          }]
        }), (0, _v7.jsx)(_v186.Box, {
          mt: 2,
          children: (0, _v7.jsx)(_v523, {
            children: (0, _v63.translate)({
              singular: "Radius",
              dictionary: {
                es: {
                  singular: "Radio"
                },
                "fr-FR": {
                  singular: "Rayon"
                },
                "ja-JP": {
                  singular: "半径"
                },
                "ko-KR": {
                  singular: "반경"
                },
                "pt-BR": {
                  singular: "Raio"
                },
                "zh-CN": {
                  singular: "半径"
                }
              }
            })
          })
        })]
      }), (0, _v7.jsx)(_v570.NumericSliderInput, {
        max: 400,
        numberInputMax: 999,
        min: 0,
        onChange: _v2,
        value: _v1,
        sliderMinWidth: 20
      })]
    }),
    _v594 = ({
      buttonId: _v0,
      testId: _v1,
      value: _v2,
      onChange: _v3,
      onClick: _v4,
      showPresets: _v5
    }) => (0, _v7.jsx)(_v552, {
      buttonId: _v0,
      content: (0, _v7.jsx)(_v593, {
        value: _v2,
        onChange: _v3,
        title: (0, _v63.translate)({
          singular: "Corners",
          dictionary: {
            es: {
              singular: "Esquinas"
            },
            "de-DE": {
              singular: "Ecken"
            },
            "fr-FR": {
              singular: "Coins"
            },
            "ja-JP": {
              singular: "角"
            },
            "ko-KR": {
              singular: "코너"
            },
            "pt-BR": {
              singular: "Cantos"
            },
            "zh-CN": {
              singular: "角落"
            }
          }
        }),
        showPresets: _v5
      }),
      icon: (0, _v7.jsx)(_v589, {}),
      testId: _v1,
      tooltipText: (0, _v63.translate)({
        singular: "Corners",
        dictionary: {
          es: {
            singular: "Esquinas"
          },
          "de-DE": {
            singular: "Ecken"
          },
          "fr-FR": {
            singular: "Coins"
          },
          "ja-JP": {
            singular: "角"
          },
          "ko-KR": {
            singular: "코너"
          },
          "pt-BR": {
            singular: "Cantos"
          },
          "zh-CN": {
            singular: "角落"
          }
        }
      }),
      onClick: _v4
    });
  var _v595 = _v0.i(0),
    _v596 = _v0.i(0),
    _v597 = _v0.i(0);
  let _v598 = (0, _v10.default)(_v512.FormatLandscape).withConfig({
    displayName: "OrientationDropdown.style__FormatPortrait",
    componentId: "sc-2aa866c2-0"
  })`
  transform: rotate(90deg);
`;
  _v10.default.div.withConfig({
    displayName: "OrientationDropdown.style__TooltipContainer",
    componentId: "sc-2aa866c2-1"
  })`
  display: flex;
  flex-direction: column;
  width: 235px;
  gap: 4px;
`;
  let _v599 = ({
      children: _v0,
      testId: _v1
    }) => (0, _v7.jsx)(_v211.Center, {
      gap: "8px",
      "data-testid": _v1,
      children: _v0
    }),
    _v600 = "graphicsMultiColor",
    _v601 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsx)("svg", {
      ref: _v1,
      ..._v0,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2C11.4477 2 11 2.44772 11 3V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V3C13 2.44772 12.5523 2 12 2ZM2.82741 6.66243C2.73696 6.59001 2.62397 6.55049 2.50743 6.55049C2.22718 6.55049 2 6.77434 2 7.05049V17.9495C2 18.0644 2.04012 18.1757 2.11361 18.2648C2.29033 18.4791 2.60991 18.5117 2.82741 18.3376L9.63419 12.8881C9.66128 12.8664 9.68602 12.842 9.70803 12.8153C9.88475 12.601 9.85169 12.2861 9.63419 12.1119L2.82741 6.66243ZM4.02972 14.798V10.201L6.89975 12.5L4.02972 14.798ZM21.4926 6.55049C21.376 6.55049 21.263 6.59002 21.1726 6.66243L14.3658 12.1119C14.1483 12.2861 14.1153 12.601 14.292 12.8153C14.314 12.842 14.3387 12.8664 14.3658 12.8881L21.1726 18.3376C21.3901 18.5117 21.7097 18.4791 21.8864 18.2648C21.9599 18.1757 22 18.0644 22 17.9495V7.05049C22 6.77435 21.7728 6.55049 21.4926 6.55049Z",
        fill: "currentcolor"
      })
    }));
  var _v602 = _v0.i(0);
  let _v603 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsx)("svg", {
      ref: _v1,
      ..._v0,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 12C22 11.4477 21.5523 11 21 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L21 13C21.5523 13 22 12.5523 22 12ZM17.4492 2.50743C17.4492 2.62397 17.4097 2.73696 17.3373 2.82741L11.8878 9.63419C11.7136 9.85169 11.3987 9.88475 11.1844 9.70803C11.1577 9.68602 11.1333 9.66128 11.1116 9.63419L5.66213 2.82741C5.488 2.60991 5.52057 2.29033 5.73489 2.11361C5.82402 2.04012 5.93535 2 6.05019 2L16.9492 2C17.2254 2 17.4492 2.22718 17.4492 2.50743ZM17.3373 21.1726C17.4097 21.263 17.4492 21.376 17.4492 21.4926C17.4492 21.7728 17.2254 22 16.9492 22L6.05019 22C5.93535 22 5.82402 21.9599 5.73489 21.8864C5.52057 21.7097 5.488 21.3901 5.66213 21.1726L11.1116 14.3658C11.1333 14.3387 11.1577 14.314 11.1844 14.292C11.3987 14.1152 11.7136 14.1483 11.8878 14.3658L17.3373 21.1726ZM9.20171 19.9703L13.7987 19.9703L11.4997 17.1002L9.20171 19.9703Z",
        fill: "currentcolor"
      })
    })),
    _v604 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsx)("svg", {
      ref: _v1,
      ..._v0,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2C11.4477 2 11 2.44772 11 3V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V3C13 2.44772 12.5523 2 12 2ZM2.50743 6.55078C2.62397 6.55078 2.73696 6.59031 2.82741 6.66272L9.63419 12.1122C9.85169 12.2864 9.88475 12.6013 9.70803 12.8156C9.68602 12.8423 9.66128 12.8667 9.63419 12.8884L2.82741 18.3379C2.60991 18.512 2.29033 18.4794 2.11361 18.2651C2.04012 18.176 2 18.0646 2 17.9498V7.05078C2 6.77464 2.22718 6.55078 2.50743 6.55078ZM21.1726 6.66272C21.263 6.59031 21.376 6.55078 21.4926 6.55078C21.7728 6.55078 22 6.77464 22 7.05078V17.9498C22 18.0646 21.9599 18.176 21.8864 18.2651C21.7097 18.4794 21.3901 18.512 21.1726 18.3379L14.3658 12.8884C14.3387 12.8667 14.314 12.8423 14.292 12.8156C14.1152 12.6013 14.1483 12.2864 14.3658 12.1122L21.1726 6.66272ZM19.9703 14.7983V10.2013L17.1002 12.5003L19.9703 14.7983Z",
        fill: "currentcolor"
      })
    })),
    _v605 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsx)("svg", {
      ref: _v1,
      ..._v0,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 12C22 12.5523 21.5523 13 21 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11L21 11C21.5523 11 22 11.4477 22 12ZM17.4492 21.4926C17.4492 21.376 17.4097 21.263 17.3373 21.1726L11.8878 14.3658C11.7136 14.1483 11.3987 14.1152 11.1844 14.292C11.1577 14.314 11.1333 14.3387 11.1116 14.3658L5.66213 21.1726C5.488 21.3901 5.52057 21.7097 5.73489 21.8864C5.82402 21.9599 5.93535 22 6.05019 22L16.9492 22C17.2254 22 17.4492 21.7728 17.4492 21.4926ZM17.3373 2.82741C17.4097 2.73696 17.4492 2.62397 17.4492 2.50743C17.4492 2.22718 17.2254 2 16.9492 2L6.05019 2C5.93535 2 5.82402 2.04012 5.73489 2.11361C5.52057 2.29033 5.488 2.60991 5.66213 2.82741L11.1116 9.63419C11.1333 9.66128 11.1577 9.68602 11.1844 9.70803C11.3987 9.88475 11.7136 9.85169 11.8878 9.63419L17.3373 2.82741ZM9.20171 4.02972L13.7987 4.02972L11.4997 6.89975L9.20171 4.02972Z",
        fill: "currentcolor"
      })
    })),
    _v606 = ({
      validatedElements: _v0,
      title: _v1
    }) => {
      let _v2 = (0, _v168.useAppDispatch)();
      if (!_v0) return null;
      let _v3 = _v0 => {
        _v0.forEach(_v0 => {
          let _v1 = {
            horizontal: _v0.flip.horizontal,
            vertical: _v0.flip.vertical
          };
          _v0 === _v602.FlipType.HORIZONTAL ? _v1.horizontal = !_v1.horizontal : _v1.vertical = !_v1.vertical, _v2((0, _v167.updateElementAction)({
            ceId: _v0.id,
            element: {
              flip: _v1
            }
          }));
        });
      };
      return (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsx)(_v523, {
          children: _v1
        }), (0, _v7.jsx)(_v544, {
          children: (0, _v7.jsxs)(_v194.HStack, {
            children: [(0, _v7.jsx)(_v212.Tooltip, {
              label: (0, _v63.translate)({
                singular: "Flip horizontally",
                dictionary: {
                  es: {
                    singular: "Girar a la posición horizontal"
                  },
                  "de-DE": {
                    singular: "Horizontal drehen"
                  },
                  "fr-FR": {
                    singular: "Basculer horizontalement"
                  },
                  "ja-JP": {
                    singular: "水平に反転"
                  },
                  "ko-KR": {
                    singular: "좌우대칭"
                  },
                  "pt-BR": {
                    singular: "Girar horizontalmente"
                  },
                  "zh-CN": {
                    singular: "水平翻转"
                  }
                }
              }),
              placement: "bottom",
              "data-testid": "tooltip",
              children: (0, _v7.jsx)(_v195.IconButton, {
                variant: "secondary",
                "aria-label": _v181.testIds.horizontalFlipButton,
                size: "sm",
                icon: _v0[0]?.flip.horizontal ? (0, _v7.jsx)(_v604, {}) : (0, _v7.jsx)(_v601, {}),
                onClick: () => _v3(_v602.FlipType.HORIZONTAL),
                "data-testid": _v181.testIds.horizontalFlipButton,
                "data-flipped": _v0[0]?.flip.horizontal
              })
            }), (0, _v7.jsx)(_v212.Tooltip, {
              label: (0, _v63.translate)({
                singular: "Flip vertically",
                dictionary: {
                  es: {
                    singular: "Girar a la posición vertical"
                  },
                  "de-DE": {
                    singular: "Vertikal drehen"
                  },
                  "fr-FR": {
                    singular: "Basculer verticalement"
                  },
                  "ja-JP": {
                    singular: "垂直に反転"
                  },
                  "ko-KR": {
                    singular: "상하대칭"
                  },
                  "pt-BR": {
                    singular: "Girar verticalmente"
                  },
                  "zh-CN": {
                    singular: "垂直翻转"
                  }
                }
              }),
              placement: "bottom",
              "data-testid": "tooltip",
              children: (0, _v7.jsx)(_v195.IconButton, {
                "aria-label": _v181.testIds.verticalFlipButton,
                variant: "secondary",
                size: "sm",
                icon: _v0[0]?.flip.vertical ? (0, _v7.jsx)(_v603, {}) : (0, _v7.jsx)(_v605, {}),
                onClick: () => _v3(_v602.FlipType.VERTICAL),
                "data-testid": _v181.testIds.verticalFlipButton,
                "data-flipped": _v0[0]?.flip.vertical
              })
            })]
          })
        })]
      });
    },
    _v607 = ({
      validatedElements: _v0,
      testId: _v1
    }) => (0, _v7.jsx)(_v552, {
      buttonId: _v493.ToolbarButtons.GRAPHICS_FLIP,
      content: (0, _v7.jsx)(_v606, {
        validatedElements: _v0,
        title: (0, _v63.translate)({
          singular: "Flip",
          dictionary: {
            es: {
              singular: "Girar"
            },
            "de-DE": {
              singular: "Umdrehen"
            },
            "fr-FR": {
              singular: "Inverser"
            },
            "ja-JP": {
              singular: "反転"
            },
            "ko-KR": {
              singular: "대칭 이동"
            },
            "zh-CN": {
              singular: "翻转"
            }
          }
        })
      }),
      icon: (0, _v7.jsx)(_v601, {}),
      testId: _v1,
      tooltipText: (0, _v63.translate)({
        singular: "Flip",
        dictionary: {
          es: {
            singular: "Girar"
          },
          "de-DE": {
            singular: "Umdrehen"
          },
          "fr-FR": {
            singular: "Inverser"
          },
          "ja-JP": {
            singular: "反転"
          },
          "ko-KR": {
            singular: "대칭 이동"
          },
          "zh-CN": {
            singular: "翻转"
          }
        }
      })
    }),
    _v608 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        d: "M17.66 8 12 2.35 6.34 8A8.02 8.02 0 0 0 4 13.64c0 2 .78 4.11 2.34 5.67a7.991 7.991 0 0 0 11.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8ZM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6Z",
        fill: "currentColor"
      })
    }),
    _v609 = ({
      validatedElements: _v0,
      title: _v1,
      name: _v2,
      minValue: _v3 = 0,
      maxValue: _v4 = 100,
      icon: _v5,
      buttonDataTestId: _v6,
      onClick: _v7
    }) => {
      let _v8 = (0, _v168.useAppDispatch)(),
        _v9 = (0, _v168.useAppSelector)(_v353.overridesWithoutRectAndTimingSelector, _v416.shallowEqual),
        _v10 = _v0[0],
        _v11 = _v9[_v10?.id]?.[_v2] ?? _v10?.[_v2],
        _v12 = (0, _v8.useRef)(_v11),
        _v13 = (0, _v8.useCallback)(_v0 => {
          _v0.forEach(_v0 => {
            _v0 !== _v10?.[_v2] && _v8((0, _v167.updateElementAction)({
              ceId: _v0.id,
              element: {
                [_v2]: _v0
              }
            }));
          }), _v8((0, _v353.resetOverridesAction)());
        }, [_v8, _v2, _v10, _v0]),
        _v14 = (0, _v8.useCallback)(_v0 => {
          _v2 && _v0.forEach(_v0 => {
            _v8((0, _v353.addOverrideAction)({
              ceId: _v0.id,
              overrides: {
                [_v2]: _v0
              }
            }));
          });
        }, [_v0, _v8, _v2]),
        _v15 = (0, _v8.useCallback)(_v0 => {
          _v0 !== _v11 && (_v12.current = _v0, _v14(_v0));
        }, [_v11, _v14]);
      return (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsx)(_v523, {
          children: _v1
        }), (0, _v7.jsxs)(_v544, {
          width: 240,
          children: [_v5 && (0, _v7.jsx)(_v195.IconButton, {
            variant: "tertiary",
            size: "sm",
            icon: _v5,
            onClick: _v7,
            "aria-label": _v6 || "icon-button"
          }), (0, _v7.jsx)(_v570.NumericSliderInput, {
            min: _v3,
            max: _v4,
            value: _v11,
            onChange: _v15,
            onChangeEnd: _v13,
            sliderInputTestId: `${_v181.testIds.toolbarSliderInput}-${_v2}`,
            sliderThumbDataTestId: `${_v181.testIds.toolbarSliderHandle}-${_v2}`,
            sliderDataTestId: _v181.testIds.toolbarSlider
          })]
        })]
      });
    },
    _v610 = ({
      validatedElements: _v0,
      buttonId: _v1,
      testId: _v2,
      propertyName: _v3 = "bgAlpha"
    }) => (0, _v7.jsx)(_v552, {
      buttonId: _v1,
      content: (0, _v7.jsx)(_v609, {
        validatedElements: _v0,
        title: _v219.translations.opacity,
        name: _v3
      }),
      tooltipText: _v219.translations.opacity,
      icon: (0, _v7.jsx)(_v608, {}),
      testId: _v2
    }),
    _v611 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "currentColor",
      children: (0, _v7.jsx)("path", {
        d: "M12 4C7.58172 4 4 7.58172 4 12H6C6 8.68629 8.68629 6 12 6C13.6549 6 15.1518 6.6687 16.2383 7.75302C16.3232 7.83774 16.4057 7.92008 16.4857 8H15C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4C18.4477 4 18 4.44772 18 5V6.68569C17.8887 6.57453 17.7723 6.45836 17.6511 6.33737C16.2049 4.89414 14.2059 4 12 4ZM5 14C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20C5.55228 20 6 19.5523 6 19V17.3689L6.29424 17.6626C7.7404 19.1059 9.7394 20 11.9453 20C16.3636 20 19.9453 16.4183 19.9453 12H17.9453C17.9453 15.3137 15.259 18 11.9453 18C10.2904 18 8.79354 17.3313 7.70701 16.247L7.45958 16H9C9.55228 16 10 15.5523 10 15C10 14.4477 9.55228 14 9 14H5Z"
      })
    }),
    _v612 = ({
      validatedElements: _v0
    }) => {
      let {
          enterReplaceMode: _v1
        } = (0, _v483.useReplaceElement)(),
        _v2 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        _v3 = (0, _v168.useAppSelector)(_v167.storyboardIdSelector),
        {
          trackEditorClipReplaced: _v4
        } = (0, _v325.useEditorTracking)(),
        _v5 = _v0[0];
      return (0, _v7.jsx)(_v212.Tooltip, {
        label: _v219.translations.replaceElement.media,
        placement: "bottom",
        children: (0, _v7.jsx)(_v187.Button, {
          variant: "tertiary",
          size: "sm",
          onClick: () => {
            _v1(_v5), (0, _v559.sendTrackSelectReplaceOption)({
              orientation: _v2
            }), _v4({
              editorSessionId: _v3
            });
          },
          leftIcon: (0, _v7.jsx)(_v611, {
            marginBottom: "-2px"
          }),
          "data-testid": _v181.testIds.replaceButton,
          children: _v219.translations.replace
        })
      });
    };
  var _v613 = _v0.i(0);
  let _v614 = ({
      validatedElements: _v0,
      testId: _v1
    }) => (0, _v7.jsx)(_v552, {
      buttonId: _v493.ToolbarButtons.GRAPHICS_ROTATION,
      content: (0, _v7.jsx)(_v609, {
        validatedElements: _v0,
        title: (0, _v63.translate)({
          singular: "Rotate",
          dictionary: {
            es: {
              singular: "Rotar"
            },
            "de-DE": {
              singular: "Drehen"
            },
            "fr-FR": {
              singular: "Rotation"
            },
            "ja-JP": {
              singular: "回転"
            },
            "ko-KR": {
              singular: "회전"
            },
            "pt-BR": {
              singular: "Rotação"
            },
            "zh-CN": {
              singular: "旋转"
            }
          }
        }),
        name: "rotate",
        maxValue: 360
      }),
      icon: (0, _v7.jsx)(_v613.Reset, {}),
      testId: _v1,
      tooltipText: (0, _v63.translate)({
        singular: "Rotate",
        dictionary: {
          es: {
            singular: "Rotar"
          },
          "de-DE": {
            singular: "Drehen"
          },
          "fr-FR": {
            singular: "Rotation"
          },
          "ja-JP": {
            singular: "回転"
          },
          "ko-KR": {
            singular: "회전"
          },
          "pt-BR": {
            singular: "Rotação"
          },
          "zh-CN": {
            singular: "旋转"
          }
        }
      })
    }),
    _v615 = "primary",
    _v616 = "secondary",
    _v617 = [],
    _v618 = function ({
      selectedCE: _v0,
      keys: _v1,
      headers: _v2 = _v617,
      testIdPrefix: _v3,
      handleColorChange: _v4,
      handleColorChangeEnd: _v5
    }) {
      let _v6 = (0, _v168.useAppDispatch)(),
        _v7 = (0, _v168.useAppSelector)(_v353.overridesWithoutRectSelector, _v416.shallowEqual),
        [_v8, _v9] = (0, _v8.useState)("");
      return (0, _v7.jsx)(_v544, {
        p: "4px",
        children: _v1.map((_v0, _v1) => {
          let _v2 = _v0 + "Color",
            _v3 = _v7[_v0?.id]?.[_v2] ?? _v0[_v2] ?? "#000000",
            _v4 = _v2[_v1];
          return (0, _v7.jsxs)(_v186.Box, {
            minW: "115px",
            children: [_v4 && (0, _v7.jsx)(_v377.Header, {
              size: "2xs",
              mb: "8",
              children: _v4
            }), (0, _v7.jsx)(_v545.SelectionBorder, {
              isSelected: _v8 === _v0,
              children: (0, _v7.jsx)(_v186.Box, {
                children: (0, _v7.jsx)(_v507, {
                  testid: `multi-${_v3}-${_v0}`,
                  icon: (0, _v7.jsx)(_v585, {}),
                  value: _v3,
                  text: _v3,
                  iconColor: _v3,
                  onOpen: () => {
                    _v6((0, _v494.showToolbarColorPickerAction)(_v600)), _v9(_v0);
                  },
                  onClose: () => void (_v9(""), _v6((0, _v494.hideToolbarColorPickerAction)())),
                  onChange: _v0 => _v4(_v0, _v0),
                  onChangeEnd: _v0 => _v5(_v0, _v0),
                  showButtonBorder: !1
                }, _v0)
              })
            })]
          }, _v0);
        })
      });
    },
    _v619 = [_v615, _v616],
    _v620 = ({
      selectedCE: _v0
    }) => {
      let _v1 = (0, _v168.useAppDispatch)(),
        _v2 = (0, _v168.useAppSelector)(_v353.overridesWithoutRectAndTimingSelector, _v416.shallowEqual),
        _v3 = (0, _v168.useAppSelector)(_v494.selectedToolbarColorPickerSelector),
        _v4 = (0, _v168.useAppSelector)(_v494.selectedToolbarButtonSelector),
        _v5 = _v2[_v0.id],
        {
          primaryColor: _v6 = "#000000"
        } = {
          ..._v0,
          ..._v5
        },
        _v7 = !!_v0.secondaryColor && !!_v0.primaryColor,
        _v8 = (0, _v8.useCallback)((_v0, _v1) => {
          let _v2 = (0, _v506.getColorKeyName)(_v1);
          _v0[_v2] !== _v0 && _v1((0, _v353.addOverrideAction)({
            ceId: _v0.id,
            overrides: {
              [_v2]: _v0
            }
          }));
        }, [_v1, _v0]),
        _v9 = (0, _v8.useCallback)((_v0, _v1) => {
          let _v2 = (0, _v506.getColorKeyName)(_v1);
          _v1((0, _v353.removeOverrideAction)({
            ceId: _v0.id,
            key: _v2
          })), _v0[_v2] !== _v0 && _v1((0, _v167.updateElementAction)({
            ceId: _v0.id,
            element: {
              [_v2]: _v0
            }
          }));
        }, [_v1, _v0]),
        _v10 = (0, _v8.useCallback)(_v0 => _v8(_v0, _v615), [_v8]);
      return (0, _v7.jsx)(_v7.Fragment, {
        children: _v7 ? (0, _v7.jsxs)(_v197.Popover, {
          onClose: () => _v1((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.GRAPHICS_COLOR)),
          onOpen: () => _v1((0, _v494.selectToolbarButtonAction)(_v493.ToolbarButtons.GRAPHICS_COLOR)),
          isOpen: !!_v3 || void 0,
          children: [(0, _v7.jsx)(_v186.Box, {
            display: "inline-block",
            children: (0, _v7.jsx)(_v200.PopoverTrigger, {
              children: (0, _v7.jsx)(_v186.Box, {
                children: (0, _v7.jsx)(_v502, {
                  multiColor: !0,
                  variant: "tertiary",
                  size: "sm",
                  className: "color-circle-button",
                  icon: (0, _v7.jsx)(_v492.FillPaintBucket, {}),
                  dataTestId: "graphic-multi-color-menu",
                  isActive: _v4 === _v493.ToolbarButtons.GRAPHICS_COLOR
                })
              })
            })
          }), (0, _v7.jsx)(_v199.PopoverContent, {
            children: (0, _v7.jsx)(_v618, {
              selectedCE: _v0,
              handleColorChange: _v8,
              handleColorChangeEnd: _v9,
              keys: _v619,
              testIdPrefix: "graphics"
            })
          })]
        }) : (0, _v7.jsx)(_v507, {
          icon: (0, _v7.jsx)(_v492.FillPaintBucket, {}),
          value: _v6,
          iconColor: _v6,
          testid: "graphics",
          onOpen: () => _v1((0, _v494.selectToolbarButtonAction)(_v493.ToolbarButtons.GRAPHICS_COLOR)),
          onClose: () => _v1((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.GRAPHICS_COLOR)),
          onChange: _v10,
          onChangeEnd: _v0 => _v9(_v0, _v615),
          isActive: _v4 === _v493.ToolbarButtons.GRAPHICS_COLOR
        }, _v0.id)
      });
    };
  var _v621 = _v0.i(0),
    _v622 = _v0.i(0),
    _v623 = _v0.i(0),
    _v624 = _v0.i(0);
  let _v625 = ({
    validatedElements: _v0,
    validateURL: _v1,
    handleUserInputSrc: _v2
  }) => {
    let _v3 = (0, _v168.useAppDispatch)(),
      _v4 = (0, _v8.useRef)(_v0[0]?.userProvidedUrl ?? ""),
      _v5 = _v0 => _v1 ? _v1(_v0) : (0, _v624.isValidUrl)(_v0).isValid,
      [_v6, _v7] = (0, _v8.useState)(!_v5(_v4.current)),
      _v8 = (0, _v623.useDebounce)(() => {
        let _v0 = _v4.current;
        _v5(_v0) ? _v0.forEach(_v0 => {
          _v3((0, _v167.updateElementAction)({
            ceId: _v0.id,
            element: {
              userProvidedUrl: _v0,
              ...(_v2 ? _v2(_v0) : {
                src: _v0
              })
            }
          }));
        }) : _v7(!0);
      }, 300);
    return (0, _v7.jsxs)(_v544, {
      width: 240,
      children: [(0, _v7.jsx)(_v523, {
        pb: 0,
        children: (0, _v63.translate)({
          singular: "URL",
          dictionary: {
            "pt-BR": {
              singular: "customizada"
            }
          }
        })
      }), (0, _v7.jsx)(_v291.Input, {
        translate: "no",
        className: "notranslate",
        size: "xs",
        defaultValue: _v4.current,
        onChange: _v0 => {
          _v4.current = _v0.target.value;
          let _v1 = (0, _v624.isValidUrl)(_v4.current).isValid;
          _v7(!_v1), _v1 && _v8();
        },
        isInvalid: _v6
      })]
    });
  };
  var _v626 = _v0.i(0),
    _v627 = _v0.i(0);
  let _v628 = _v0 => `${_v0}%`,
    _v629 = ({
      validatedElements: _v0
    }) => {
      let _v1 = (0, _v168.useAppDispatch)(),
        _v2 = _v0[0],
        _v3 = (0, _v8.useMemo)(() => (0, _v627.parseLocationFromMapUrl)(_v2.src ?? ""), [_v2.src]),
        [_v4, _v5] = (0, _v8.useState)(_v3.zoom),
        [_v6, _v7] = (0, _v8.useState)(_v3.location),
        _v8 = (0, _v623.useDebounce)(() => {
          _v0.forEach(_v0 => {
            let _v1 = (0, _v627.buildMapUrl)(_v6 || _v627.DEFAULT_LOCATION, _v4);
            _v1((0, _v167.updateElementAction)({
              ceId: _v0.id,
              element: {
                src: _v1
              }
            }));
          });
        }, 300),
        _v9 = _v0 => {
          _v5(Math.round(_v0 / 100 * _v627.GOOGLE_MAPS_MAX_ZOOM)), _v8();
        },
        _v10 = Math.round(_v4 / _v627.GOOGLE_MAPS_MAX_ZOOM * 100);
      return (0, _v7.jsx)(_v552, {
        buttonId: _v493.ToolbarButtons.IFRAME_LOCATION,
        content: (0, _v7.jsxs)(_v544, {
          width: 240,
          children: [(0, _v7.jsx)(_v523, {
            pb: 0,
            children: (0, _v63.translate)({
              singular: "Location",
              dictionary: {
                es: {
                  singular: "Ubicación"
                },
                "de-DE": {
                  singular: "Ort"
                },
                "fr-FR": {
                  singular: "Localisation"
                },
                "ja-JP": {
                  singular: "位置情報"
                },
                "ko-KR": {
                  singular: "위치"
                },
                "pt-BR": {
                  singular: "Local"
                },
                "zh-CN": {
                  singular: "位置"
                }
              }
            })
          }), (0, _v7.jsx)(_v291.Input, {
            size: "xs",
            value: _v6,
            onChange: _v0 => {
              _v7(_v0.target.value), _v8();
            },
            isInvalid: !_v6,
            translate: "no",
            className: "notranslate"
          }), (0, _v7.jsx)(_v523, {
            pb: 0,
            children: (0, _v63.translate)({
              singular: "Zoom",
              dictionary: {
                "ja-JP": {
                  singular: "ズーム"
                },
                "zh-CN": {
                  singular: "缩放"
                }
              }
            })
          }), (0, _v7.jsx)(_v570.NumericSliderInput, {
            id: "map-zoom",
            max: 100,
            min: 1,
            step: _v627.GOOGLE_MAPS_ZOOM_INPUT_STEP,
            onChange: _v9,
            onChangeEnd: _v9,
            value: _v10,
            format: _v628
          })]
        }),
        icon: (0, _v7.jsx)(_v626.SearchMagnifier, {}),
        title: _v3.location ?? _v627.DEFAULT_LOCATION,
        testId: _v181.testIds.iframe.toolbar.linkButton
      });
    };
  var _v630 = _v0.i(0);
  let _v631 = ({
      name: _v0,
      value: _v1,
      onChange: _v2
    }) => (0, _v7.jsxs)(_v75.Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      children: [(0, _v7.jsx)(_v157.Text, {
        variant: "body-md",
        whiteSpace: "nowrap",
        children: _v0
      }), (0, _v7.jsx)(_v501.Switch, {
        size: "sm",
        ml: "md",
        isChecked: _v1,
        onChange: _v2
      })]
    }),
    _v632 = ({
      validatedElements: _v0
    }) => {
      let _v1 = (0, _v168.useAppDispatch)(),
        _v2 = (0, _v219.getTranslations)(),
        _v3 = _v0[0],
        _v4 = (_v0, _v1) => {
          _v0.forEach(_v0 => {
            let _v1 = (0, _v627.updateVimeoVideoSrcParams)(_v0.src, _v0, _v1);
            _v1((0, _v167.updateElementAction)({
              ceId: _v0.id,
              element: {
                settings: {
                  [_v0]: _v1
                },
                src: _v1
              }
            }));
          });
        };
      return (0, _v7.jsxs)(_v544, {
        minWidth: 172,
        pt: "4px",
        children: [(0, _v7.jsx)(_v631, {
          name: _v2[_v630.VIDEO_BEHAVIOR_FIELDS.AUTO_PLAY],
          value: _v3.settings.autoPlay,
          onChange: () => _v4(_v630.VIDEO_BEHAVIOR_FIELDS.AUTO_PLAY, !_v3.settings.autoPlay)
        }), (0, _v7.jsx)(_v631, {
          name: _v2[_v630.VIDEO_BEHAVIOR_FIELDS.LOOP],
          value: _v3.settings.loop,
          onChange: () => _v4(_v630.VIDEO_BEHAVIOR_FIELDS.LOOP, !_v3.settings.loop)
        }), (0, _v7.jsx)(_v631, {
          name: _v2[_v630.VIDEO_BEHAVIOR_FIELDS.SHOW_CONTROLS],
          value: _v3.settings.showControls,
          onChange: () => _v4(_v630.VIDEO_BEHAVIOR_FIELDS.SHOW_CONTROLS, !_v3.settings.showControls)
        })]
      });
    },
    _v633 = ({
      validatedElements: _v0
    }) => (0, _v7.jsx)(_v552, {
      buttonId: _v493.ToolbarButtons.IFRAME_URL,
      content: (0, _v7.jsx)(_v625, {
        validatedElements: _v0,
        validateURL: _v627.isValidVideoUrl,
        handleUserInputSrc: _v627.createVimeoVideoUrlUpdate
      }),
      icon: (0, _v7.jsx)(_v621.Link, {}),
      title: (0, _v63.translate)({
        singular: "Link",
        dictionary: {
          es: {
            singular: "Vínculo"
          },
          "fr-FR": {
            singular: "Lien"
          },
          "ja-JP": {
            singular: "リンク"
          },
          "ko-KR": {
            singular: "링크"
          },
          "zh-CN": {
            singular: "链接"
          }
        }
      }),
      testId: _v181.testIds.iframe.toolbar.linkButton
    });
  var _v634 = _v0.i(0);
  let _v635 = (0, _v8.forwardRef)((_v0, _v1) => (0, _v7.jsxs)("svg", {
      ref: _v1,
      ..._v0,
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _v7.jsx)("g", {
        clipPath: "url(#clip0_409_11862)",
        children: (0, _v7.jsx)("path", {
          d: "M14.1663 12.5007H15.833V5.83398C15.833 4.91732 15.083 4.16732 14.1663 4.16732H7.49967V5.83398H14.1663V12.5007ZM5.83301 14.1673V0.833984H4.16634V4.16732H0.833008V5.83398H4.16634V14.1673C4.16634 15.084 4.91634 15.834 5.83301 15.834H14.1663V19.1673H15.833V15.834H19.1663V14.1673H5.83301Z",
          fill: "currentColor"
        })
      }), (0, _v7.jsx)("defs", {
        children: (0, _v7.jsx)("clipPath", {
          id: "clip0_409_11862",
          children: (0, _v7.jsx)("rect", {
            width: "20",
            height: "20",
            fill: "white"
          })
        })
      })]
    })),
    _v636 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v168.useAppSelector)(_v494.selectedToolbarButtonSelector),
        _v2 = (0, _v168.useAppSelector)(_v366.firstSelectedElementSelector);
      return (0, _v7.jsx)(_v212.Tooltip, {
        label: (0, _v63.translate)({
          singular: "Crop",
          dictionary: {
            es: {
              singular: "Recortar"
            },
            "de-DE": {
              singular: "Zuschneiden"
            },
            "fr-FR": {
              singular: "Recadrer"
            },
            "ja-JP": {
              singular: "クロップ"
            },
            "ko-KR": {
              singular: "크롭"
            },
            "pt-BR": {
              singular: "Recortar"
            },
            "zh-CN": {
              singular: "裁切"
            }
          }
        }),
        placement: "bottom",
        children: (0, _v7.jsx)(_v195.IconButton, {
          "aria-label": "crop",
          variant: "tertiary",
          size: "sm",
          onClick: () => {
            _v0((0, _v494.showToolbarAction)(_v422.ToolbarType.CROP)), (0, _v597.trackSelectCrop)({
              mediaType: _v2?.type ?? "",
              cropRatio: "",
              actionCTA: "crop_icon"
            }), (0, _v235.isMediaElement)(_v2) && _v0((0, _v353.addOverrideAction)({
              ceId: _v2.id,
              overrides: {
                sourceFootageRect: _v2.sourceFootageRect,
                rect: _v2.rect
              }
            }));
          },
          icon: (0, _v7.jsx)(_v635, {}),
          "data-testid": _v181.testIds.cropButton,
          isActive: _v1 === _v493.ToolbarButtons.CROP
        })
      });
    };
  var _v637 = _v0.i(0);
  let _v638 = _v0 => (0, _v7.jsx)(_v82.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v7.jsx)("path", {
      d: "M21.92 11.62a1.001 1.001 0 0 0-.21-.33l-2.5-2.5a1.004 1.004 0 0 0-1.42 1.42l.8.79H14a1 1 0 0 0 0 2h4.59l-.8.79a1.001 1.001 0 0 0 .325 1.639 1 1 0 0 0 1.095-.22l2.5-2.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76ZM10 11H5.41l.8-.79a1.004 1.004 0 1 0-1.42-1.42l-2.5 2.5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2.5 2.5a.998.998 0 0 0 1.42 0 .999.999 0 0 0 0-1.42l-.8-.79H10a1 1 0 1 0 0-2Z",
      fill: "currentColor"
    })
  });
  var _v639 = _v0.i(0);
  let _v640 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        _v2 = (0, _v168.useAppSelector)(_v167.storyboardIdSelector),
        {
          trackEditorClipFitTypeChanged: _v3
        } = (0, _v325.useEditorTracking)(),
        _v4 = (0, _v168.useAppSelector)(_v366.selectedElementsSelector).filter(_v235.isMediaElement),
        _v5 = () => {
          if (0 === _v4.length) return "";
          let _v0 = new Set(_v4.map(_v0 => _v0.type));
          return _v0.has(_v417.CompositionElementType.IMAGE) && _v0.has(_v417.CompositionElementType.VIDEO) ? "mixed_media" : _v4[0].type;
        },
        _v6 = async () => {
          (0, _v415.batch)(() => {
            _v4.forEach(_v0 => {
              if (_v0?.rect) {
                let _v0, _v1;
                _v0.rect.width < _v0.rect.height ? (_v1 = 1, _v0 = _v0.rect.width * (1 / _v0.rect.height)) : (_v0 = 1, _v1 = _v0.rect.height * (1 / _v0.rect.width));
                let _v2 = (0, _v423.recenterRect)(_v311.DEFAULT_RECT, _v0, _v1);
                _v0((0, _v167.updateElementAction)({
                  ceId: _v0.id,
                  element: {
                    rect: _v2
                  }
                }));
              }
            });
          }), _v4.length > 0 && ((0, _v559.sendTrackSelectFitType)({
            orientation: _v1,
            elementType: _v5(),
            fitType: "fit_to_canvas",
            numberOfElements: _v4.length
          }), _v3({
            editorSessionId: _v2,
            editorClipFitType: "fit"
          }));
        },
        _v7 = async () => {
          (0, _v415.batch)(() => {
            _v4.forEach(_v0 => {
              if (_v0?.rect) {
                let _v0, _v1;
                _v0.rect.width > _v0.rect.height ? (_v1 = 1, _v0 = _v0.rect.width * (1 / _v0.rect.height)) : (_v0 = 1, _v1 = _v0.rect.height * (1 / _v0.rect.width));
                let _v2 = (0, _v423.recenterRect)(_v311.DEFAULT_RECT, _v0, _v1);
                _v0((0, _v167.updateElementAction)({
                  ceId: _v0.id,
                  element: {
                    rect: _v2
                  }
                }));
              }
            });
          }), _v4.length > 0 && ((0, _v559.sendTrackSelectFitType)({
            orientation: _v1,
            elementType: _v5(),
            fitType: "fill_canvas",
            numberOfElements: _v4.length
          }), _v3({
            editorSessionId: _v2,
            editorClipFitType: "fill"
          }));
        };
      return (0, _v7.jsx)(_v547, {
        title: "Fit types",
        buttons: [{
          tooltipText: (0, _v63.translate)({
            singular: "Fill canvas",
            dictionary: {
              es: {
                singular: "Rellenar lienzo"
              },
              "de-DE": {
                singular: "Leinwand füllen"
              },
              "fr-FR": {
                singular: "Remplir la toile"
              },
              "ja-JP": {
                singular: "キャンバスを塗りつぶす"
              },
              "ko-KR": {
                singular: "캔버스 채우기"
              },
              "pt-BR": {
                singular: "Preencher tela"
              },
              "zh-CN": {
                singular: "填充画布"
              }
            }
          }),
          isSelected: !1,
          icon: (0, _v7.jsx)(_v639.Fullscreen, {}),
          onClick: _v7,
          testId: "fill-canvas-button"
        }, {
          tooltipText: (0, _v63.translate)({
            singular: "Fit to canvas",
            dictionary: {
              es: {
                singular: "Ajustar al lienzo"
              },
              "de-DE": {
                singular: "An die Leinwand anpassen"
              },
              "fr-FR": {
                singular: "Ajuster à la toile"
              },
              "ja-JP": {
                singular: "キャンバスに合わせる"
              },
              "ko-KR": {
                singular: "캔버스에 맞추기"
              },
              "pt-BR": {
                singular: "Ajustar à tela"
              },
              "zh-CN": {
                singular: "适合画布"
              }
            }
          }),
          isSelected: !1,
          icon: (0, _v7.jsx)(_v638, {}),
          onClick: _v6,
          testId: "fit-canvas-button"
        }]
      });
    },
    _v641 = () => {
      let _v0 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        _v1 = (0, _v168.useAppSelector)(_v366.selectedElementsSelector);
      return (0, _v7.jsx)(_v552, {
        buttonId: _v493.ToolbarButtons.FIT_TYPE,
        content: (0, _v7.jsx)(_v640, {}),
        icon: (0, _v7.jsx)(_v637.ExpandAlt, {}),
        testId: "fit-type-button-image-toolbar",
        tooltipText: (0, _v63.translate)({
          singular: "Fit types",
          dictionary: {
            es: {
              singular: "Tipos de ajuste"
            },
            "de-DE": {
              singular: "Fit-Typen"
            },
            "fr-FR": {
              singular: "Types d'ajustement"
            },
            "ja-JP": {
              singular: "フィットの種類"
            },
            "ko-KR": {
              singular: "맞춤 유형"
            },
            "pt-BR": {
              singular: "Tipos de ajuste"
            },
            "zh-CN": {
              singular: "适合类型"
            }
          }
        }),
        onClick: () => (0, _v559.sendTrackSelectFitTypeOptions)({
          orientation: _v0,
          elementType: (() => {
            if (0 === _v1.length) return "";
            let _v0 = new Set(_v1.map(_v0 => _v0.type));
            return _v0.has(_v417.CompositionElementType.IMAGE) && _v0.has(_v417.CompositionElementType.VIDEO) ? "mixed_media" : _v1[0].type;
          })(),
          numberOfElements: _v1.length
        })
      });
    };
  var _v642 = _v0.i(0),
    _v643 = _v0.i(0),
    _v644 = _v0.i(0);
  let _v645 = {
      display: "flex",
      flexDirection: "column",
      padding: 12,
      gap: 12
    },
    _v646 = {
      width: 156,
      display: "block"
    },
    _v647 = {
      display: "flex",
      flexDirection: "column",
      gap: 6
    },
    _v648 = ({
      validatedElements: _v0
    }) => {
      let _v1 = (0, _v168.useAppDispatch)(),
        _v2 = _v0[0],
        _v3 = _v2?.interactiveHotspot.altText ?? "";
      return _v2 ? (0, _v7.jsx)(_v186.Box, {
        sx: _v645,
        children: (0, _v7.jsxs)(_v186.Box, {
          children: [(0, _v7.jsx)(_v157.Text, {
            variant: "body-md",
            pb: 6,
            children: (0, _v63.translate)({
              singular: "Alternative text",
              dictionary: {
                es: {
                  singular: "Texto alternativo"
                },
                "de-DE": {
                  singular: "Alternativtext"
                },
                "fr-FR": {
                  singular: "Texte alternatif"
                },
                "ja-JP": {
                  singular: "代替テキスト"
                },
                "ko-KR": {
                  singular: "대체 텍스트"
                },
                "pt-BR": {
                  singular: "Texto alternativo"
                }
              }
            })
          }), (0, _v7.jsxs)(_v186.Box, {
            sx: _v647,
            children: [(0, _v7.jsx)(_v642.Textarea, {
              placeholder: (0, _v63.translate)({
                singular: "Enter alternative text",
                dictionary: {
                  es: {
                    singular: "Escriba un texto alternativo"
                  },
                  "de-DE": {
                    singular: "Geben Sie alternativen Text ein"
                  },
                  "fr-FR": {
                    singular: "Entrez le texte alternatif"
                  },
                  "ja-JP": {
                    singular: "代替テキストを入力"
                  },
                  "ko-KR": {
                    singular: "대체 텍스트를 입력하세요."
                  },
                  "pt-BR": {
                    singular: "Digite o texto alternativo"
                  }
                }
              }),
              resize: "both",
              value: _v3,
              isInvalid: _v3.length > _v643.ALT_TEXT_MAX_LENGTH,
              onChange: _v0 => {
                if (!_v2?.id) return;
                let _v1 = _v0.target.value.slice(0, _v643.ALT_TEXT_MAX_LENGTH);
                _v1 !== _v3 && _v1((0, _v167.updateElementAction)({
                  ceId: _v2.id,
                  element: {
                    interactiveHotspot: {
                      altText: _v1
                    }
                  }
                }));
              },
              sx: _v646
            }), (0, _v7.jsx)(_v644.CharacterCounter, {
              currentLength: _v3.length,
              maxLength: _v643.ALT_TEXT_MAX_LENGTH
            })]
          })]
        })
      }) : null;
    },
    _v649 = [_v615, _v616],
    _v650 = ({
      validatedElements: _v0
    }) => {
      let _v1 = (0, _v168.useAppDispatch)(),
        _v2 = (0, _v168.useAppSelector)(_v353.overridesWithoutRectAndTimingSelector),
        _v3 = (0, _v168.useAppSelector)(_v494.selectedToolbarColorPickerSelector),
        _v4 = (0, _v168.useAppSelector)(_v494.selectedToolbarButtonSelector),
        _v5 = _v0[0],
        _v6 = _v2[_v5?.id],
        _v7 = {
          [_v615]: _v6?.primaryColor || "",
          [_v616]: _v6?.secondaryColor || ""
        },
        _v8 = _v5?.primaryColor || "",
        _v9 = !!_v5?.secondaryColor && !!_v8,
        _v10 = (0, _v8.useCallback)((_v0, _v1) => {
          let _v2 = (0, _v506.getColorKeyName)(_v1);
          _v1((0, _v353.addOverrideAction)({
            ceId: _v5.id,
            overrides: {
              [_v2]: _v0
            }
          }));
        }, [_v1, _v5?.id]),
        _v11 = (0, _v8.useCallback)((_v0, _v1) => {
          let _v2 = (0, _v506.getColorKeyName)(_v1);
          _v1((0, _v353.removeOverrideAction)({
            ceId: _v5.id,
            key: _v2
          })), _v5[_v2] !== _v0 && _v1((0, _v167.updateElementAction)({
            ceId: _v5.id,
            element: {
              [_v2]: _v0
            }
          }));
        }, [_v1, _v5]),
        _v12 = (0, _v8.useCallback)(() => _v1((0, _v494.selectToolbarButtonAction)(_v493.ToolbarButtons.HOTSPOT_COLORS)), [_v1]),
        _v13 = (0, _v8.useCallback)(() => _v1((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.HOTSPOT_COLORS)), [_v1]),
        _v14 = (0, _v8.useCallback)(_v0 => _v10(_v0, _v615), [_v10]),
        _v15 = _v4 === _v493.ToolbarButtons.HOTSPOT_COLORS;
      return (0, _v235.isImageHotspot)(_v5) && _v5.primaryColor ? (0, _v7.jsx)(_v212.Tooltip, {
        label: (0, _v63.translate)({
          singular: "Colors",
          dictionary: {
            es: {
              singular: "Colores"
            },
            "de-DE": {
              singular: "Farben"
            },
            "fr-FR": {
              singular: "Couleurs"
            },
            "ja-JP": {
              singular: "色"
            },
            "ko-KR": {
              singular: "색상"
            },
            "pt-BR": {
              singular: "Cores"
            },
            "zh-CN": {
              singular: "颜色"
            }
          }
        }),
        placement: "bottom",
        "data-testid": "tooltip",
        isDisabled: _v15,
        children: (0, _v7.jsx)("span", {
          children: _v9 ? (0, _v7.jsxs)(_v197.Popover, {
            onClose: _v13,
            onOpen: _v12,
            isOpen: !!_v3 || void 0,
            children: [(0, _v7.jsx)(_v186.Box, {
              display: "inline-block",
              children: (0, _v7.jsx)(_v200.PopoverTrigger, {
                children: (0, _v7.jsx)(_v186.Box, {
                  children: (0, _v7.jsx)(_v502, {
                    multiColor: !0,
                    variant: "tertiary",
                    size: "sm",
                    className: "color-circle-button",
                    icon: (0, _v7.jsx)(_v492.FillPaintBucket, {}),
                    dataTestId: "hotspot-multi-color-menu",
                    isActive: _v15
                  })
                })
              })
            }), (0, _v7.jsx)(_v199.PopoverContent, {
              children: (0, _v7.jsx)(_v618, {
                selectedCE: _v5,
                handleColorChange: _v10,
                handleColorChangeEnd: _v11,
                keys: _v649,
                testIdPrefix: "hotspot"
              })
            })]
          }) : (0, _v7.jsx)(_v507, {
            icon: (0, _v7.jsx)(_v492.FillPaintBucket, {}),
            value: _v7[_v615] || _v8 || "#000000",
            iconColor: _v7[_v615] || _v8,
            testid: "hotspot",
            onOpen: _v12,
            onClose: _v13,
            onChange: _v14,
            onChangeEnd: _v0 => _v11(_v0, _v615),
            isActive: _v15
          }, _v5.id)
        })
      }) : null;
    };
  var _v651 = _v0.i(0);
  let _v652 = ({
      children: _v0,
      testId: _v1
    }) => (0, _v7.jsx)(_v211.Center, {
      gap: "8px",
      "data-testid": _v1,
      children: _v0
    }),
    _v653 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        d: "M3.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0h7A3 3 0 1 0 13 3.4a1 1 0 1 0 1 1.73 1.09 1.09 0 0 1 .5-.13 1 1 0 1 1 0 2h-7a1 1 0 0 0 0 2Zm-4 4h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2Zm17-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2 2h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6Zm-6 4h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2 1.089 1.089 0 0 1-.5-.13 1 1 0 1 0-1 1.73 3 3 0 1 0 1.5-5.6Zm-8 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z",
        fill: "currentColor"
      })
    });
  var _v654 = _v0.i(0);
  let _v655 = ({
    validatedElements: _v0
  }) => {
    let {
        play: _v1,
        pause: _v2,
        seek: _v3
      } = (0, _v252.useDragonfly)(),
      _v4 = (0, _v168.useAppDispatch)(),
      _v5 = (0, _v8.useRef)(null),
      _v6 = (0, _v8.useRef)(null),
      _v7 = _v0[0]?.animationMid || _v543.AnimationMid.NONE,
      _v8 = () => {
        _v5.current && (clearTimeout(_v5.current), _v5.current = null), _v6.current && (clearTimeout(_v6.current), _v6.current = null);
      };
    (0, _v8.useEffect)(() => () => _v8(), []);
    let _v9 = _v0 => {
      if (_v0[0]) {
        _v8(), _v4((0, _v167.updateElementAction)({
          ceId: _v0[0].id,
          element: {
            animationMid: _v0
          }
        }));
        let _v0 = (_v0 => {
          let {
              start: _v1,
              end: _v2
            } = _v0.compositionTiming,
            _v3 = (_v2 - _v1) * 0;
          _v2(), _v3(_v1);
          let _v4 = null;
          return {
            playTimeout: setTimeout(() => {
              _v1(), _v4 = setTimeout(() => {
                _v2();
              }, Math.min(0, _v3));
            }, 100),
            pauseTimeout: _v4
          };
        })(_v0[0]);
        _v5.current = _v0.playTimeout, _v6.current = _v0.pauseTimeout;
      }
    };
    return (0, _v7.jsx)(_v547, {
      title: (0, _v63.translate)({
        singular: "Effects",
        dictionary: {
          es: {
            singular: "Efectos"
          },
          "de-DE": {
            singular: "Effekte"
          },
          "fr-FR": {
            singular: "Effets"
          },
          "ja-JP": {
            singular: "効果"
          },
          "ko-KR": {
            singular: "효과"
          },
          "pt-BR": {
            singular: "Efeitos"
          },
          "zh-CN": {
            singular: "作用"
          }
        }
      }),
      buttons: [{
        tooltipText: (0, _v63.translate)({
          singular: "None",
          dictionary: {
            es: {
              singular: "Ninguno"
            },
            "de-DE": {
              singular: "Kein"
            },
            "fr-FR": {
              singular: "Aucune"
            },
            "ja-JP": {
              singular: "なし"
            },
            "ko-KR": {
              singular: "없음"
            },
            "pt-BR": {
              singular: "Nenhum"
            },
            "zh-CN": {
              singular: "无"
            }
          }
        }),
        isSelected: _v7 === _v543.AnimationMid.NONE,
        icon: (0, _v7.jsx)(_v654.StopBanLeft, {}),
        onClick: () => _v9(_v543.AnimationMid.NONE),
        testId: _v181.testIds.breathAnimation.noneOption
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Breath",
          dictionary: {
            es: {
              singular: "Respiración"
            },
            "de-DE": {
              singular: "Atem"
            },
            "fr-FR": {
              singular: "Respiration"
            },
            "ja-JP": {
              singular: "呼吸"
            },
            "ko-KR": {
              singular: "호흡"
            },
            "pt-BR": {
              singular: "Respiração"
            },
            "zh-CN": {
              singular: "呼吸"
            }
          }
        }),
        isSelected: _v7 === _v543.AnimationMid.BREATH,
        icon: (0, _v7.jsx)(_v653, {}),
        onClick: () => _v9(_v543.AnimationMid.BREATH),
        testId: _v181.testIds.breathAnimation.breathOption
      }]
    });
  };
  var _v656 = _v0.i(0),
    _v657 = _v0.i(0),
    _v658 = _v0.i(0),
    _v659 = _v0.i(0);
  let _v660 = ({
    validatedElements: _v0,
    title: _v1
  }) => {
    let _v2,
      _v3 = (0, _v168.useAppDispatch)(),
      _v4 = _v0[0],
      {
        updateBreathEffect: _v5
      } = (_v2 = (0, _v168.useAppSelector)(_v167.nonHiddenLayersSelector), {
        updateBreathEffect: (0, _v8.useCallback)(({
          ceId: _v0,
          newScale: _v1,
          newCompositionTiming: _v2
        }) => (0, _v657.getUpdatedBreathEffect)({
          ceId: _v0,
          layers: _v2,
          newScale: _v1,
          newCompositionTiming: _v2
        }), [_v2])
      }),
      _v6 = (0, _v168.useAppSelector)(_v167.orientationSelector),
      _v7 = (0, _v8.useMemo)(() => {
        let _v0 = _v4?.layers[0]?.effects,
          _v1 = _v0?.find(_v0 => _v0.name === _v658.ImageEffectName.breath);
        return (!_v1 || 1 !== _v1.options.transformsFromFootageRect[0].transform.scale) && !0;
      }, [_v4?.layers]),
      _v8 = _v0 => {
        let _v1 = _v656.BREATH_EFFECT_SCALES[(0, _v659.getUpperSnakeCase)(_v0)],
          _v2 = _v5({
            ceId: _v4.id,
            newScale: _v1
          });
        _v3((0, _v167.updateElementAction)({
          ceId: _v4.id,
          element: _v2
        })), (0, _v559.sendTrackChangeMotionEffect)({
          orientation: _v6,
          elementType: _v4.type,
          motionEffectValue: _v0
        });
      };
    return (0, _v7.jsx)(_v547, {
      title: _v1,
      buttons: [{
        tooltipText: (0, _v63.translate)({
          singular: "None",
          dictionary: {
            es: {
              singular: "Ninguno"
            },
            "de-DE": {
              singular: "Kein"
            },
            "fr-FR": {
              singular: "Aucune"
            },
            "ja-JP": {
              singular: "なし"
            },
            "ko-KR": {
              singular: "없음"
            },
            "pt-BR": {
              singular: "Nenhum"
            },
            "zh-CN": {
              singular: "无"
            }
          }
        }),
        isSelected: !_v7,
        icon: (0, _v7.jsx)(_v654.StopBanLeft, {}),
        onClick: () => _v8(_v658.ImageBreathEffect.NONE),
        testId: "none-motion-effect"
      }, {
        tooltipText: (0, _v63.translate)({
          singular: "Zoom in",
          dictionary: {
            es: {
              singular: "Acercar"
            },
            "de-DE": {
              singular: "Vergrößern"
            },
            "fr-FR": {
              singular: "Zoomer"
            },
            "ja-JP": {
              singular: "ズームイン"
            },
            "ko-KR": {
              singular: "확대"
            },
            "pt-BR": {
              singular: "Ampliar"
            },
            "zh-CN": {
              singular: "放大"
            }
          }
        }),
        isSelected: _v7,
        icon: (0, _v7.jsx)(_v541.ExpandArrowsAlt, {}),
        onClick: () => _v8(_v658.ImageBreathEffect.ZOOM_IN),
        testId: "zoom-in-motion-effect"
      }]
    });
  };
  var _v661 = _v0.i(0);
  let _v662 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        d: "M15 2a7 7 0 0 0-6.88 5.74A6 6 0 0 0 5 12.41 5 5 0 1 0 11.59 19a6 6 0 0 0 4.67-3.09A7 7 0 0 0 15 2Zm-5 15.43c0 .1 0 .2-.07.31a3 3 0 1 1-3.64-3.64l.28-.1A2.94 2.94 0 0 1 10 17.43Zm5-3.67a1.8 1.8 0 0 1-.05.19 4 4 0 0 1-2.87 2.94c0-.18 0-.35-.06-.53-.06-.18 0-.27 0-.4s-.12-.38-.18-.57c-.06-.19-.07-.24-.12-.36a4.219 4.219 0 0 0-.3-.55c0-.09-.09-.19-.15-.28a5.307 5.307 0 0 0-.6-.73l-.2-.17a5.544 5.544 0 0 0-.53-.43 2.906 2.906 0 0 0-.34-.19 4.013 4.013 0 0 0-.5-.27 2.35 2.35 0 0 0-.4-.13 3.138 3.138 0 0 0-.52-.16c-.14 0-.29 0-.44-.06L7.13 12a4 4 0 0 1 2.92-2.87l.2-.05c.247-.052.498-.079.75-.08a4 4 0 0 1 4 4 3.85 3.85 0 0 1-.08.76H15Zm2-.16V13a6 6 0 0 0-6-6h-.6a5 5 0 1 1 6.6 6.6Z",
        fill: "currentColor"
      })
    }),
    _v663 = () => (0, _v7.jsxs)(_v186.Box, {
      display: "flex",
      flexDir: "column",
      alignItems: "center",
      gap: "1px",
      children: [(0, _v7.jsx)(_v529, {}), (0, _v7.jsx)(_v186.Box, {
        height: 2,
        width: 18,
        borderRadius: "xs",
        borderColor: "input-stroke",
        backgroundColor: "text-primary"
      })]
    }),
    _v664 = ({
      pollElement: _v0
    }) => {
      let _v1 = (0, _v168.useAppDispatch)(),
        _v2 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        {
          keys: _v3,
          headers: _v4
        } = (0, _v8.useMemo)(() => {
          if (!_v0) return {
            keys: [],
            headers: []
          };
          let _v0 = ["answerBackground"],
            _v1 = [(0, _v63.translate)({
              singular: "Button",
              dictionary: {
                es: {
                  singular: "Botón"
                },
                "fr-FR": {
                  singular: "Bouton"
                },
                "ja-JP": {
                  singular: "ボタン"
                },
                "ko-KR": {
                  singular: "버튼"
                },
                "pt-BR": {
                  singular: "Botão"
                },
                "zh-CN": {
                  singular: "按钮"
                }
              }
            })],
            _v2 = _v424.POLL_STYLES[_v0.styleId][_v2];
          return _v2.hasQuestionBackgroundColor && (_v0.push("questionBackground"), _v1.push((0, _v63.translate)({
            singular: "Question Background",
            dictionary: {
              es: {
                singular: "Antecedentes de la pregunta"
              },
              "de-DE": {
                singular: "Hintergrund der Frage"
              },
              "fr-FR": {
                singular: "Contexte de la question"
              },
              "ja-JP": {
                singular: "質問の背景"
              },
              "ko-KR": {
                singular: "질문 배경"
              },
              "pt-BR": {
                singular: "Contexto da pergunta"
              },
              "zh-CN": {
                singular: "问题背景"
              }
            }
          }))), _v2.hasBackgroundColor && (_v0.push("background"), _v1.push((0, _v63.translate)({
            singular: "Background",
            dictionary: {
              es: {
                singular: "Fondo"
              },
              "de-DE": {
                singular: "Hintergrund:"
              },
              "fr-FR": {
                singular: "Arrière-plan"
              },
              "ja-JP": {
                singular: "背景"
              },
              "ko-KR": {
                singular: "배경"
              },
              "pt-BR": {
                singular: "Fundo"
              },
              "zh-CN": {
                singular: "背景"
              }
            }
          }))), {
            keys: _v0,
            headers: _v1
          };
        }, [_v2, _v0]);
      return _v0 ? (0, _v7.jsx)(_v618, {
        selectedCE: _v0,
        handleColorChange: (_v0, _v1) => {
          _v1((0, _v353.addOverrideAction)({
            ceId: _v0.id,
            overrides: {
              [(0, _v506.getColorKeyName)(_v1)]: _v0
            }
          }));
        },
        handleColorChangeEnd: (_v0, _v1) => {
          let _v2 = (0, _v506.getColorKeyName)(_v1);
          _v1((0, _v353.removeOverrideAction)({
            ceId: _v0.id,
            key: _v2
          })), _v0[_v2] !== _v0 && _v1((0, _v167.updateElementAction)({
            ceId: _v0.id,
            element: {
              [_v2]: _v0
            }
          }));
        },
        keys: _v3,
        headers: _v4,
        testIdPrefix: "poll"
      }) : null;
    },
    _v665 = ["questionText", "answerText"],
    _v666 = ({
      validatedElements: _v0
    }) => {
      let _v1 = (0, _v8.useMemo)(() => [(0, _v63.translate)({
          singular: "Question",
          dictionary: {
            es: {
              singular: "Pregunta"
            },
            "de-DE": {
              singular: "Frage"
            },
            "ja-JP": {
              singular: "質問"
            },
            "ko-KR": {
              singular: "질문"
            },
            "pt-BR": {
              singular: "Pergunta"
            },
            "zh-CN": {
              singular: "疑问"
            }
          }
        }), (0, _v63.translate)({
          singular: "Answer",
          dictionary: {
            es: {
              singular: "Responder"
            },
            "de-DE": {
              singular: "Antworten"
            },
            "fr-FR": {
              singular: "Répondre"
            },
            "ja-JP": {
              singular: "回答"
            },
            "ko-KR": {
              singular: "답변하기"
            },
            "pt-BR": {
              singular: "Responder"
            },
            "zh-CN": {
              singular: "回答"
            }
          }
        })], []),
        _v2 = (0, _v168.useAppDispatch)(),
        _v3 = _v0[0];
      return _v3 ? (0, _v7.jsx)(_v618, {
        selectedCE: _v3,
        handleColorChange: (_v0, _v1) => {
          let _v2 = (0, _v506.getColorKeyName)(_v1);
          _v3[_v2] !== _v0 && _v2((0, _v353.addOverrideAction)({
            ceId: _v3.id,
            overrides: {
              [_v2]: _v0
            }
          }));
        },
        handleColorChangeEnd: (_v0, _v1) => {
          let _v2 = (0, _v506.getColorKeyName)(_v1);
          _v2((0, _v353.removeOverrideAction)({
            ceId: _v3.id,
            key: _v2
          })), _v3[_v2] !== _v0 && _v2((0, _v167.updateElementAction)({
            ceId: _v3.id,
            element: {
              [_v2]: _v0
            }
          }));
        },
        keys: _v665,
        headers: _v1,
        testIdPrefix: "poll"
      }) : null;
    },
    _v667 = _v10.default.div.withConfig({
      displayName: "ReplaceToolbar__ReplaceToolbarContainer",
      componentId: "sc-cd8e1ec5-0"
    })`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${8}px;
`;
  var _v668 = _v0.i(0),
    _v669 = _v0.i(0),
    _v670 = _v0.i(0);
  let _v671 = _v0 => {
    let _v1 = (0, _v168.useAppDispatch)(),
      _v2 = (0, _v8.useMemo)(() => {
        if (!_v0.effects) return 0;
        let _v0 = (0, _v657.getVolumeEffect)(_v0.effects);
        return _v0 ? 100 * _v0.level : 0;
      }, [_v0]),
      _v3 = (0, _v8.useMemo)(() => {
        if (!_v0.effects) return 0;
        let _v0 = (0, _v657.getFadeInEffect)(_v0.effects);
        return _v0 ? (_v0.endTime - _v0.startTime) * 0 : 0;
      }, [_v0]),
      _v4 = (0, _v8.useMemo)(() => {
        if (!_v0.effects) return 0;
        let _v0 = (0, _v657.getFadeOutEffect)(_v0.effects);
        return _v0 ? (_v0.endTime - _v0.startTime) * 0 : 0;
      }, [_v0]),
      _v5 = (0, _v8.useMemo)(() => 0 * Math.min(_v0.compositionTiming.end - _v0.compositionTiming.start, 5), [_v0]),
      _v6 = (0, _v8.useCallback)(() => {
        _v1((0, _v167.updateElementAction)({
          ceId: _v0.id,
          element: {
            muted: !_v0.muted
          }
        }));
      }, [_v1, _v0]),
      _v7 = (0, _v8.useCallback)(_v0 => {
        _v1((0, _v353.addOverrideAction)({
          ceId: _v0.id,
          overrides: {
            muted: 0 === _v0,
            effects: [{
              type: _v670.SoundEffectType.volume,
              level: _v0 / 100,
              startTime: 0,
              endTime: _v0.compositionTiming.end - _v0.compositionTiming.start
            }]
          }
        }));
      }, [_v1, _v0]),
      _v8 = (0, _v8.useCallback)(_v0 => {
        let {
          fadeInEffect: _v1 = null,
          volumeEffect: _v2 = (0, _v657.getDefaultVolumeEffect)(_v0),
          fadeOutEffect: _v3 = null
        } = _v0.effects ? (0, _v657.deconstructSoundEffects)(_v0) : {};
        _v0 /= 100, _v1((0, _v353.removeOverrideAction)({
          ceId: _v0.id
        }));
        let _v4 = [];
        _v1 && _v4.push({
          ..._v1,
          level: _v0
        }), _v4.push({
          ..._v2,
          level: _v0
        }), _v3 && _v4.push({
          ..._v3,
          fromLevel: _v0
        }), _v1((0, _v167.updateElementAction)({
          ceId: _v0.id,
          element: {
            muted: 0 === _v0,
            effects: _v4
          }
        }));
      }, [_v1, _v0]);
    return {
      volume: _v2,
      fadeIn: _v3,
      fadeOut: _v4,
      maxFade: _v5,
      overrideVolume: _v7,
      updateVolume: _v8,
      updateFadeIn: (0, _v8.useCallback)(_v0 => {
        let _v1,
          _v2 = _v0.compositionTiming.end - _v0.compositionTiming.start,
          _v3 = (0, _v317.toNearestFrame)(_v0 / 0);
        if (_v3 > _v2 || _v3 < 0) throw Error(_v159.WRONG_DURATION);
        let {
            volumeEffect: _v4 = (0, _v657.getDefaultVolumeEffect)(_v0),
            fadeOutEffect: _v5 = null
          } = _v0.effects ? (0, _v657.deconstructSoundEffects)(_v0) : {},
          _v6 = [];
        _v3 > 0 && _v6.push({
          type: _v670.SoundEffectType.fade,
          fromLevel: 0,
          level: _v4.level,
          startTime: 0,
          endTime: _v3
        }), _v5 && _v2 - _v3 > 0 && (_v1 = {
          ..._v5,
          startTime: Math.max(_v5.startTime, _v3),
          endTime: _v2
        }), _v6.push({
          ..._v4,
          startTime: _v3,
          endTime: _v3 === _v1?.startTime ? _v3 : Math.min(_v2, Math.max(_v4.endTime, _v3))
        }), _v1 && _v6.push(_v1), _v1((0, _v167.updateElementAction)({
          ceId: _v0.id,
          element: {
            effects: _v6
          }
        }));
      }, [_v1, _v0]),
      updateFadeOut: (0, _v8.useCallback)(_v0 => {
        let _v1,
          _v2 = _v0.compositionTiming.end - _v0.compositionTiming.start,
          _v3 = (0, _v317.toNearestFrame)(_v0 / 0);
        if (_v3 > _v2 || _v3 < 0) throw Error(_v159.WRONG_DURATION);
        let {
            fadeInEffect: _v4 = null,
            volumeEffect: _v5 = (0, _v657.getDefaultVolumeEffect)(_v0)
          } = _v0.effects ? (0, _v657.deconstructSoundEffects)(_v0) : {},
          _v6 = (0, _v317.toNearestFrame)(_v2 - _v3),
          _v7 = [];
        _v4 && _v6 > 0 && (_v1 = {
          ..._v4,
          startTime: 0,
          endTime: Math.min(_v4.endTime, _v6)
        }, _v7.push(_v1)), _v7.push({
          ..._v5,
          startTime: _v6 === _v1?.endTime ? _v6 : Math.min(_v2, Math.min(_v5.startTime, _v6)),
          endTime: _v6
        }), _v3 > 0 && _v7.push({
          type: _v670.SoundEffectType.fade,
          fromLevel: _v5.level,
          level: 0,
          startTime: _v6,
          endTime: _v2
        }), _v1((0, _v167.updateElementAction)({
          ceId: _v0.id,
          element: {
            effects: _v7
          }
        }));
      }, [_v1, _v0]),
      muteVolume: _v6
    };
  };
  var _v672 = _v0.i(0);
  let _v673 = _v0 => `${Number(_v0).toFixed(1)}s`,
    _v674 = (0, _v8.forwardRef)(({
      volume: _v0,
      fadeIn: _v1,
      fadeOut: _v2,
      onVolumeChange: _v3,
      onVolumeChangeEnd: _v4,
      onFadeInChangeEnd: _v5,
      onFadeOutChangeEnd: _v6,
      onClick: _v7,
      icon: _v8,
      buttonDataTestId: _v9
    }, _v10) => (0, _v7.jsx)(_v544, {
      "data-testid": "popover-sound-controls",
      ref: _v10,
      p: "4px",
      children: (0, _v7.jsxs)(_v81.VStack, {
        spacing: 100,
        children: [(0, _v7.jsxs)(_v81.VStack, {
          spacing: 50,
          align: "flex-start",
          children: [(0, _v7.jsx)(_v377.Header, {
            size: "2xs",
            mb: 2,
            children: (0, _v63.translate)({
              singular: "Volume",
              dictionary: {
                es: {
                  singular: "Volumen"
                },
                "de-DE": {
                  singular: "Lautstärke"
                },
                "ja-JP": {
                  singular: "音量"
                },
                "ko-KR": {
                  singular: "음량"
                },
                "zh-CN": {
                  singular: "音量"
                }
              }
            })
          }), (0, _v7.jsxs)(_v194.HStack, {
            spacing: 100,
            children: [(0, _v7.jsx)(_v195.IconButton, {
              "aria-label": "audio volume",
              variant: "tertiary",
              size: "sm",
              icon: _v8,
              onClick: _v7,
              "data-testid": _v9
            }), (0, _v7.jsx)(_v194.HStack, {
              spacing: 200,
              children: (0, _v7.jsx)(_v570.NumericSliderInput, {
                min: 0,
                max: _v0.maxValue,
                step: 1,
                onChange: _v3,
                onChangeEnd: _v4,
                value: _v0.value,
                sliderDataTestId: "volume-slider"
              })
            })]
          })]
        }), (0, _v7.jsx)(_v672.default, {}), (0, _v7.jsxs)(_v186.Box, {
          width: "100%",
          children: [(0, _v7.jsx)(_v377.Header, {
            size: "2xs",
            mb: 2,
            children: (0, _v63.translate)({
              singular: "Fade in",
              dictionary: {
                es: {
                  singular: "Intensificación"
                },
                "de-DE": {
                  singular: "Einblenden"
                },
                "fr-FR": {
                  singular: "Fondu entrant"
                },
                "ja-JP": {
                  singular: "フェードイン"
                },
                "ko-KR": {
                  singular: "페이드인"
                },
                "pt-BR": {
                  singular: "Aparecer gradualmente (fade in)"
                },
                "zh-CN": {
                  singular: "淡入"
                }
              }
            })
          }), (0, _v7.jsx)(_v194.HStack, {
            spacing: "16px",
            justifyContent: "space-between",
            children: (0, _v7.jsx)(_v570.NumericSliderInput, {
              min: 0,
              max: _v1.maxValue / 0,
              numberInputMax: _v1.maxValue / 0,
              onChange: _v0 => _v5(0 * Number(_v0)),
              value: _v1.value / 0,
              sliderDataTestId: "fadein-slider",
              sliderInputTestId: "fadein-slider-input",
              step: .1,
              format: _v673
            })
          })]
        }), (0, _v7.jsxs)(_v186.Box, {
          width: "100%",
          children: [(0, _v7.jsx)(_v377.Header, {
            size: "2xs",
            mb: 2,
            children: (0, _v63.translate)({
              singular: "Fade out",
              dictionary: {
                es: {
                  singular: "Atenuación"
                },
                "de-DE": {
                  singular: "Ausblenden"
                },
                "fr-FR": {
                  singular: "Fondu sortant"
                },
                "ja-JP": {
                  singular: "フェードアウト"
                },
                "ko-KR": {
                  singular: "페이드아웃"
                },
                "pt-BR": {
                  singular: "Desaparecer gradualmente (fade out)"
                },
                "zh-CN": {
                  singular: "淡出"
                }
              }
            })
          }), (0, _v7.jsx)(_v570.NumericSliderInput, {
            min: 0,
            max: _v2.maxValue / 0,
            numberInputMax: _v2.maxValue / 0,
            onChange: _v0 => _v6(0 * Number(_v0)),
            value: _v2.value / 0,
            sliderDataTestId: "fadeout-slider",
            sliderInputTestId: "fadeout-slider-input",
            format: _v673,
            step: .1
          })]
        })]
      })
    })),
    _v675 = (0, _v8.memo)(_v674),
    _v676 = _v0 => (0, _v7.jsx)(_v82.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v7.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m7.012 14.626.184.182-3.342 3.34a.5.5 0 0 0 .354.854h4.58a.5.5 0 0 0 .352-.146l1.079-1.075a2 2 0 0 0 2.801-.026l6.035-6.03a4.002 4.002 0 0 0-.004-5.664l-.359-.353a4 4 0 0 0-5.632.023L7 11.786a2 2 0 0 0 .012 2.84ZM8.414 13.2l3.193 3.14 1.632-1.631-3.166-3.166L8.414 13.2Zm3.074-3.071 3.166 3.166 2.987-2.986a2 2 0 0 0 .103-2.718l-.114-.122-.34-.335a2 2 0 0 0-2.817.011l-2.985 2.984Z",
        fill: "currentColor"
      })
    });
  var _v677 = _v0.i(0);
  let _v678 = "fontColor",
    _v679 = "colorOne",
    _v680 = "highlight",
    _v681 = ({
      validatedElements: _v0,
      title: _v1
    }) => {
      let _v2 = (0, _v168.useAppDispatch)();
      if (!_v0) return null;
      let _v3 = _v0[0],
        _v4 = _v0 => {
          _v0.forEach(_v0 => {
            (0, _v559.sendTrackSelectTextAlignment)({
              alignmentBefore: _v3?.align,
              alignmentAfter: _v0
            }), _v2((0, _v167.updateElementAction)({
              ceId: _v0.id,
              element: {
                align: _v0
              }
            }));
          });
        };
      return (0, _v7.jsx)(_v547, {
        title: _v1,
        buttons: [{
          tooltipText: (0, _v63.translate)({
            singular: "Left",
            dictionary: {
              es: {
                singular: "Izquierda"
              },
              "de-DE": {
                singular: "Links"
              },
              "fr-FR": {
                singular: "Gauche"
              },
              "ja-JP": {
                singular: "左揃え"
              },
              "ko-KR": {
                singular: "왼쪽"
              },
              "pt-BR": {
                singular: "Esquerda"
              },
              "zh-CN": {
                singular: "左"
              }
            }
          }),
          isSelected: _v3?.align === _v579.Alignment.LEFT,
          icon: (0, _v7.jsx)(_v528.AlignLeft, {}),
          onClick: () => _v4(_v579.Alignment.LEFT),
          testId: "align-left-button"
        }, {
          tooltipText: (0, _v63.translate)({
            singular: "Center",
            dictionary: {
              es: {
                singular: "Centro"
              },
              "de-DE": {
                singular: "Mitte"
              },
              "fr-FR": {
                singular: "Centre"
              },
              "ja-JP": {
                singular: "中央揃え"
              },
              "ko-KR": {
                singular: "가운데"
              },
              "pt-BR": {
                singular: "Centro"
              },
              "zh-CN": {
                singular: "中心"
              }
            }
          }),
          isSelected: _v3?.align === _v579.Alignment.CENTER,
          icon: (0, _v7.jsx)(_v575.AlignCenter, {}),
          onClick: () => _v4(_v579.Alignment.CENTER),
          testId: "align-center-button"
        }, {
          tooltipText: (0, _v63.translate)({
            singular: "Right",
            dictionary: {
              es: {
                singular: "Derecha"
              },
              "de-DE": {
                singular: "Rechts"
              },
              "fr-FR": {
                singular: "Droite"
              },
              "ja-JP": {
                singular: "右揃え"
              },
              "ko-KR": {
                singular: "오른쪽"
              },
              "pt-BR": {
                singular: "Direita"
              },
              "zh-CN": {
                singular: "右"
              }
            }
          }),
          isSelected: _v3?.align === _v579.Alignment.RIGHT,
          icon: (0, _v7.jsx)(_v576.AlignRight, {}),
          onClick: () => _v4(_v579.Alignment.RIGHT),
          testId: "align-right-button"
        }]
      });
    },
    _v682 = ({
      validatedElements: _v0
    }) => {
      let _v1 = _v0[0],
        _v2 = (0, _v168.useAppDispatch)();
      return (0, _v7.jsx)(_v558, {
        buttonId: _v493.ToolbarButtons.TEXT_DROP_SHADOW,
        value: _v1.dropShadow,
        onChange: _v0 => {
          _v0.forEach(_v0 => {
            _v2((0, _v167.updateElementAction)({
              ceId: _v0.id,
              element: {
                dropShadow: _v0
              }
            })), (0, _v559.sendTrackSelectTextDropShadow)({
              shadowBefore: _v1?.dropShadow,
              shadowAfter: _v0
            });
          });
        },
        testId: "drop-shadow-button-text-toolbar",
        onClick: _v559.sendTrackSelectTextDropShadowOptions
      });
    };
  var _v683 = _v0.i(0);
  let _v684 = ({
      ce: _v0,
      elementOverrides: _v1
    }) => {
      let _v2 = (0, _v168.useAppDispatch)(),
        _v3 = (0, _v168.useAppSelector)(_v167.orientationSelector),
        {
          createPartial: _v4
        } = (0, _v683.useTextElement)(),
        _v5 = _v0?.fontSize || 0,
        _v6 = _v0 && _v1?.rect?.height,
        _v7 = _v0?.rect?.height,
        _v8 = (0, _v8.useMemo)(() => Math.round((0, _v374.getActualFontSize)(_v5, _v3)), [_v3, _v5]),
        _v9 = (0, _v8.useMemo)(() => {
          if (_v6 && _v7) return Math.round(_v6 / _v7 * _v8);
        }, [_v6, _v7, _v8]),
        _v10 = (0, _v8.useCallback)((_v0, _v1) => {
          if ((0, _v559.sendTrackChangeFontSize)({
            fontSizeAfter: _v0,
            fontSizeBefore: _v8,
            action: _v1
          }), _v0) {
            let _v0 = _v4({
              textElement: _v0,
              fontSize: _v0
            });
            _v0 && _v2((0, _v167.updateElementAction)({
              ceId: _v0.id,
              element: _v0
            }));
          }
        }, [_v4, _v2, _v0, _v8]);
      return (0, _v7.jsx)(_v565, {
        testId: "font-size-text-toolbar",
        buttonId: _v493.ToolbarButtons.TEXT_FONT_SIZE,
        value: _v8,
        valueOverride: _v9,
        onChange: _v10
      });
    },
    _v685 = {
      [_v422.ToolbarType.GRAPHICS]: ({
        validatedElements: _v0
      }) => {
        let _v1 = (0, _v168.useAppSelector)(_v494.selectedToolbarColorPickerSelector),
          _v2 = (0, _v168.useAppSelector)(_v176.isInteractiveSelector),
          _v3 = (0, _v168.useAppSelector)(_v494.selectedToolbarButtonSelector),
          _v4 = (0, _v168.useAppSelector)(_v166.currentInspectorSelector),
          {
            toggleInspector: _v5
          } = (0, _v533.useInspector)(),
          _v6 = _v0[0];
        return (0, _v7.jsxs)(_v7.Fragment, {
          children: [_v6.isEditable && (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v63.translate)({
              singular: "Colors",
              dictionary: {
                es: {
                  singular: "Colores"
                },
                "de-DE": {
                  singular: "Farben"
                },
                "fr-FR": {
                  singular: "Couleurs"
                },
                "ja-JP": {
                  singular: "色"
                },
                "ko-KR": {
                  singular: "색상"
                },
                "pt-BR": {
                  singular: "Cores"
                },
                "zh-CN": {
                  singular: "颜色"
                }
              }
            }),
            placement: "bottom",
            "data-testid": "tooltip",
            isDisabled: _v3 === _v493.ToolbarButtons.GRAPHICS_COLOR || _v1 === _v600,
            children: (0, _v7.jsx)("span", {
              children: (0, _v7.jsx)(_v620, {
                selectedCE: _v6
              })
            })
          }), (0, _v7.jsx)(_v614, {
            validatedElements: _v0,
            testId: "rotate-button-graphic-toolbar"
          }), (0, _v7.jsx)(_v607, {
            validatedElements: _v0,
            testId: _v181.testIds.flipButtonGraphicToolbar
          }), (0, _v7.jsx)(_v610, {
            validatedElements: _v0,
            buttonId: _v493.ToolbarButtons.GRAPHICS_OPACITY,
            testId: "opacity-button-graphic-toolbar"
          }), _v2 ? (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.GRAPHICS_ANIMATIONS,
            content: (0, _v7.jsx)(_v548, {
              validatedElements: _v0,
              title: (0, _v63.translate)({
                singular: "Animation",
                dictionary: {
                  es: {
                    singular: "Animación"
                  },
                  "ja-JP": {
                    singular: "アニメーション"
                  },
                  "ko-KR": {
                    singular: "애니메이션"
                  },
                  "pt-BR": {
                    singular: "Animação"
                  },
                  "zh-CN": {
                    singular: "动画"
                  }
                }
              }),
              animationKeyName: "style"
            }),
            icon: (0, _v7.jsx)(_v534, {}),
            testId: "animation-button-graphic-toolbar",
            tooltipText: (0, _v63.translate)({
              singular: "Animation",
              dictionary: {
                es: {
                  singular: "Animación"
                },
                "ja-JP": {
                  singular: "アニメーション"
                },
                "ko-KR": {
                  singular: "애니메이션"
                },
                "pt-BR": {
                  singular: "Animação"
                },
                "zh-CN": {
                  singular: "动画"
                }
              }
            })
          }) : (0, _v7.jsx)(_v7.Fragment, {
            children: (0, _v7.jsx)(_v195.IconButton, {
              "aria-label": (0, _v63.translate)({
                singular: "Animation",
                dictionary: {
                  es: {
                    singular: "Animación"
                  },
                  "ja-JP": {
                    singular: "アニメーション"
                  },
                  "ko-KR": {
                    singular: "애니메이션"
                  },
                  "pt-BR": {
                    singular: "Animação"
                  },
                  "zh-CN": {
                    singular: "动画"
                  }
                }
              }),
              variant: "tertiary",
              size: "sm",
              icon: (0, _v7.jsx)(_v534, {}),
              "data-testid": "animation-button-graphic-toolbar",
              onClick: () => {
                (0, _v192.trackOpenAnimationsInspector)({
                  type: "graphics"
                }), _v5(_v169.InspectorType.MEDIA_ANIMATIONS);
              },
              isActive: _v4 === _v169.InspectorType.MEDIA_ANIMATIONS
            })
          }), (0, _v7.jsx)(_v495, {
            height: 24
          }), (0, _v7.jsx)(_v612, {
            validatedElements: _v0
          })]
        });
      },
      [_v422.ToolbarType.VIDEO]: ({
        validatedElements: _v0
      }) => {
        let _v1 = (0, _v168.useAppDispatch)(),
          _v2 = (0, _v168.useAppSelector)(_v0 => _v0.toolbar?.selectedToolbarButton),
          _v3 = (0, _v168.useAppSelector)(_v176.isInteractiveSelector),
          _v4 = (0, _v168.useAppSelector)(_v353.overridesWithoutRectSelector, _v416.shallowEqual),
          _v5 = (0, _v168.useAppSelector)(_v166.currentInspectorSelector),
          _v6 = (0, _v168.useAppSelector)(_v167.sourceMapSelector),
          _v7 = (0, _v168.useAppSelector)(_v167.storyboardIdSelector),
          {
            trackEditorClipVolumeChanged: _v8
          } = (0, _v325.useEditorTracking)(),
          _v9 = (0, _v8.useRef)(void 0),
          _v10 = (0, _v8.useRef)(void 0),
          _v11 = (0, _v8.useRef)(void 0),
          _v12 = (0, _v8.useRef)(_v8);
        _v12.current = _v8, (0, _v8.useEffect)(() => () => {
          clearTimeout(_v9.current), clearTimeout(_v10.current), clearTimeout(_v11.current);
        }, []);
        let {
            toggleInspector: _v13
          } = (0, _v533.useInspector)(),
          [_v14, _v15] = (0, _v8.useState)(!1),
          _v16 = (0, _v8.useRef)(null),
          _v17 = _v0.length > 1,
          _v18 = _v0[0],
          _v19 = _v4[_v18.id],
          _v20 = _v6[_v18.sourceHash],
          _v21 = _v20?.hasAudio,
          _v22 = _v18.muted,
          _v23 = _v18.effects && (0, _v657.getVolumeEffect)(_v18.effects),
          _v24 = _v19?.effects && (0, _v657.getVolumeEffect)(_v19.effects),
          _v25 = 100 * (_v24 ?? _v23 ?? (0, _v657.getDefaultVolumeEffect)(_v18)).level,
          _v26 = _v24 && 100 * _v24.level,
          {
            volume: _v27,
            fadeIn: _v28,
            fadeOut: _v29,
            maxFade: _v30,
            overrideVolume: _v31,
            updateVolume: _v32,
            updateFadeIn: _v33,
            updateFadeOut: _v34,
            muteVolume: _v35
          } = _v671(_v18),
          _v36 = (0, _v8.useMemo)(() => _v22 || !_v21 ? (0, _v7.jsx)(_v668.VolumeOff, {}) : (0, _v7.jsx)(_v669.VolumeOn, {}), [_v22, _v21]),
          _v37 = (0, _v8.useCallback)(_v0 => {
            _v31(_v0);
          }, [_v31]),
          _v38 = (0, _v8.useCallback)(_v0 => {
            (0, _v559.sendTrackChangeAudioFadeIn)({
              fadeInBefore: (_v28 / 0).toFixed(1),
              fadeInAfter: (_v0 / 0).toFixed(1)
            }), clearTimeout(_v10.current), _v10.current = setTimeout(() => {
              _v12.current({
                editorSessionId: _v7,
                editorClipVolumeSetting: "fade_in"
              });
            }, 0), _v33(_v0);
          }, [_v28, _v7, _v33]),
          _v39 = (0, _v8.useCallback)(_v0 => {
            (0, _v559.sendTrackChangeAudioFadeOut)({
              fadeOutBefore: (_v29 / 0).toFixed(1),
              fadeOutAfter: (_v0 / 0).toFixed(1)
            }), clearTimeout(_v11.current), _v11.current = setTimeout(() => {
              _v12.current({
                editorSessionId: _v7,
                editorClipVolumeSetting: "fade_out"
              });
            }, 0), _v34(_v0);
          }, [_v29, _v7, _v34]),
          _v40 = (0, _v8.useCallback)(_v0 => {
            (0, _v559.sendTrackChangeAudioVolume)({
              volumeBefore: _v27,
              volumeAfter: _v0
            }), clearTimeout(_v9.current), _v9.current = setTimeout(() => {
              _v12.current({
                editorSessionId: _v7,
                editorClipVolumeSetting: "volume"
              });
            }, 0), _v32(_v0);
          }, [_v7, _v32, _v27]),
          _v41 = (0, _v8.useCallback)(() => {
            _v14 || (0, _v559.sendTrackSelectMediaSoundOptions)(), _v15(!_v14);
          }, [_v14]),
          _v42 = (0, _v8.useCallback)(() => {
            _v35(), _v1((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.VIDEO_VOLUME));
          }, [_v1, _v35]);
        return (0, _v7.jsxs)(_v652, {
          testId: _v181.testIds.videoToolbar,
          children: [!_v17 && (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.VIDEO_VOLUME,
            testId: _v22 ? "unmute-button-video-toolbar" : "mute-button-video-toolbar",
            icon: _v36,
            onClick: _v41,
            tooltipText: _v21 ? (0, _v63.translate)({
              singular: "Media sound",
              dictionary: {
                es: {
                  singular: "Sonido multimedia"
                },
                "de-DE": {
                  singular: "Medienton"
                },
                "fr-FR": {
                  singular: "Son des médias"
                },
                "ja-JP": {
                  singular: "メディアサウンド"
                },
                "ko-KR": {
                  singular: "미디어 사운드"
                },
                "pt-BR": {
                  singular: "Som da mídia"
                },
                "zh-CN": {
                  singular: "媒体声音"
                }
              }
            }) : (0, _v63.translate)({
              singular: "Media has no sound",
              dictionary: {
                es: {
                  singular: "Los archivos no tienen sonido"
                },
                "de-DE": {
                  singular: "Medien haben keinen Ton"
                },
                "fr-FR": {
                  singular: "Le média n'a pas de son"
                },
                "ja-JP": {
                  singular: "メディアに音声がありません"
                },
                "ko-KR": {
                  singular: "미디어에 소리가 없습니다."
                },
                "pt-BR": {
                  singular: "Mídia sem som"
                },
                "zh-CN": {
                  singular: "媒体没有声音"
                }
              }
            }),
            isDisabled: !_v21,
            tooltipTestId: "tooltip",
            content: _v18 && _v2 === _v493.ToolbarButtons.VIDEO_VOLUME ? (0, _v7.jsx)(_v675, {
              volume: {
                value: _v26 ?? (_v22 ? 0 : _v25),
                maxValue: 100
              },
              fadeIn: {
                value: _v28,
                maxValue: _v30
              },
              fadeOut: {
                value: _v29,
                maxValue: _v30
              },
              onVolumeChange: _v37,
              onVolumeChangeEnd: _v40,
              onFadeInChangeEnd: _v38,
              onFadeOutChangeEnd: _v39,
              onClick: _v42,
              icon: _v36,
              buttonDataTestId: _v22 || !_v21 ? _v181.testIds.button.toolbar.soundController.unmuteButton : _v181.testIds.button.toolbar.soundController.muteButton,
              ref: _v16
            }) : null
          }), !_v17 && (0, _v7.jsx)(_v636, {}), (0, _v7.jsx)(_v641, {}), !_v3 && !_v17 && (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v63.translate)({
              singular: "Animation",
              dictionary: {
                es: {
                  singular: "Animación"
                },
                "ja-JP": {
                  singular: "アニメーション"
                },
                "ko-KR": {
                  singular: "애니메이션"
                },
                "pt-BR": {
                  singular: "Animação"
                },
                "zh-CN": {
                  singular: "动画"
                }
              }
            }),
            children: (0, _v7.jsx)(_v195.IconButton, {
              "aria-label": (0, _v63.translate)({
                singular: "Animation",
                dictionary: {
                  es: {
                    singular: "Animación"
                  },
                  "ja-JP": {
                    singular: "アニメーション"
                  },
                  "ko-KR": {
                    singular: "애니메이션"
                  },
                  "pt-BR": {
                    singular: "Animação"
                  },
                  "zh-CN": {
                    singular: "动画"
                  }
                }
              }),
              variant: "tertiary",
              size: "sm",
              icon: (0, _v7.jsx)(_v534, {}),
              "data-testid": "animation-button-video-toolbar",
              onClick: () => {
                (0, _v192.trackOpenAnimationsInspector)({
                  type: "media"
                }), _v13(_v169.InspectorType.MEDIA_ANIMATIONS);
              },
              isActive: _v5 === _v169.InspectorType.MEDIA_ANIMATIONS
            })
          }), !_v17 && (0, _v7.jsxs)(_v7.Fragment, {
            children: [(0, _v7.jsx)(_v495, {
              height: 24
            }), (0, _v7.jsx)(_v612, {
              validatedElements: _v0
            })]
          })]
        });
      },
      [_v422.ToolbarType.REPLACE]: ({
        validatedElements: _v0
      }) => {
        let _v1 = (0, _v168.useAppSelector)(_v372.pausedSelector),
          {
            exitReplaceMode: _v2
          } = (0, _v483.useReplaceElement)(),
          _v3 = _v0[0],
          _v4 = (0, _v8.useCallback)(() => {
            _v2(_v3);
          }, [_v2, _v3]);
        return (0, _v8.useEffect)(() => {
          let _v0 = _v0 => {
            (_v0.key === _v504.KEYBOARD_KEYS.ESC || _v0.key === _v504.KEYBOARD_KEYS.ENTER) && (_v4(), _v0.stopPropagation());
          };
          return document.addEventListener("keydown", _v0), () => document.removeEventListener("keydown", _v0);
        }, [_v4]), (0, _v8.useEffect)(() => {
          _v1 || _v4();
        }, [_v1, _v4]), (0, _v7.jsxs)(_v667, {
          "data-testid": _v181.testIds.replaceToolbar,
          children: [(0, _v7.jsx)(_v377.Header, {
            size: "xs",
            padding: [0, 2],
            children: _v219.translations.replace
          }), (0, _v7.jsx)(_v195.IconButton, {
            size: "sm",
            variant: "primary",
            "aria-label": _v181.testIds.confirmReplaceButton,
            icon: (0, _v7.jsx)(_v595.Checkmark, {}),
            onClick: _v4,
            "data-testid": _v181.testIds.confirmReplaceButton
          })]
        });
      },
      [_v422.ToolbarType.IMAGE]: ({
        validatedElements: _v0
      }) => {
        let _v1 = (0, _v168.useAppSelector)(_v176.isInteractiveSelector),
          _v2 = (0, _v168.useAppSelector)(_v167.orientationSelector),
          _v3 = (0, _v168.useAppSelector)(_v166.currentInspectorSelector),
          _v4 = (0, _v168.useAppSelector)(_v366.selectedElementsSelector),
          {
            toggleInspector: _v5
          } = (0, _v533.useInspector)();
        return _v4.length > 1 && _v4.every(_v0 => _v0.type === _v417.CompositionElementType.IMAGE || _v0.type === _v417.CompositionElementType.VIDEO) ? (0, _v7.jsx)(_v652, {
          testId: _v181.testIds.imageToolbar,
          children: (0, _v7.jsx)(_v641, {})
        }) : (0, _v7.jsxs)(_v652, {
          testId: _v181.testIds.imageToolbar,
          children: [_v1 && (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.IMAGE_MOTION_EFFECT,
            content: (0, _v7.jsx)(_v660, {
              validatedElements: _v0,
              title: (0, _v63.translate)({
                singular: "Motion effect",
                dictionary: {
                  es: {
                    singular: "Efecto de movimiento"
                  },
                  "de-DE": {
                    singular: "Motion-Effekt"
                  },
                  "fr-FR": {
                    singular: "Animation"
                  },
                  "ja-JP": {
                    singular: "モーションエフェクト"
                  },
                  "ko-KR": {
                    singular: "모션 효과"
                  },
                  "pt-BR": {
                    singular: "Efeito de movimento"
                  },
                  "zh-CN": {
                    singular: "动画效果"
                  }
                }
              })
            }),
            icon: (0, _v7.jsx)(_v534, {}),
            testId: "motion-effect-button-image-toolbar",
            tooltipText: (0, _v63.translate)({
              singular: "Motion effect",
              dictionary: {
                es: {
                  singular: "Efecto de movimiento"
                },
                "de-DE": {
                  singular: "Motion-Effekt"
                },
                "fr-FR": {
                  singular: "Animation"
                },
                "ja-JP": {
                  singular: "モーションエフェクト"
                },
                "ko-KR": {
                  singular: "모션 효과"
                },
                "pt-BR": {
                  singular: "Efeito de movimento"
                },
                "zh-CN": {
                  singular: "动画效果"
                }
              }
            }),
            onClick: () => {
              (0, _v559.sendTrackSelectMotionEffectOptions)({
                orientation: _v2,
                elementType: _v0[0].type
              });
            }
          }), (0, _v7.jsx)(_v636, {}), (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.BREATH_ANIMATION,
            content: (0, _v7.jsx)(_v655, {
              validatedElements: _v0
            }),
            icon: (0, _v7.jsx)(_v651.MagicWand, {}),
            testId: _v181.testIds.breathAnimation.menu,
            tooltipText: (0, _v63.translate)({
              singular: "Effects",
              dictionary: {
                es: {
                  singular: "Efectos"
                },
                "de-DE": {
                  singular: "Effekte"
                },
                "fr-FR": {
                  singular: "Effets"
                },
                "ja-JP": {
                  singular: "効果"
                },
                "ko-KR": {
                  singular: "효과"
                },
                "pt-BR": {
                  singular: "Efeitos"
                },
                "zh-CN": {
                  singular: "作用"
                }
              }
            })
          }), (0, _v7.jsx)(_v641, {}), (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v63.translate)({
              singular: "Animation",
              dictionary: {
                es: {
                  singular: "Animación"
                },
                "ja-JP": {
                  singular: "アニメーション"
                },
                "ko-KR": {
                  singular: "애니메이션"
                },
                "pt-BR": {
                  singular: "Animação"
                },
                "zh-CN": {
                  singular: "动画"
                }
              }
            }),
            children: (0, _v7.jsx)(_v195.IconButton, {
              "aria-label": (0, _v63.translate)({
                singular: "Animation",
                dictionary: {
                  es: {
                    singular: "Animación"
                  },
                  "ja-JP": {
                    singular: "アニメーション"
                  },
                  "ko-KR": {
                    singular: "애니메이션"
                  },
                  "pt-BR": {
                    singular: "Animação"
                  },
                  "zh-CN": {
                    singular: "动画"
                  }
                }
              }),
              variant: "tertiary",
              size: "sm",
              icon: (0, _v7.jsx)(_v534, {}),
              "data-testid": _v181.testIds.animation.imageToolbarButton,
              onClick: () => {
                (0, _v192.trackOpenAnimationsInspector)({
                  type: "media"
                }), _v5(_v169.InspectorType.MEDIA_ANIMATIONS);
              },
              isActive: _v3 === _v169.InspectorType.MEDIA_ANIMATIONS
            })
          }), (0, _v7.jsx)(_v495, {
            height: 24
          }), (0, _v7.jsx)(_v612, {
            validatedElements: _v0
          })]
        });
      },
      [_v422.ToolbarType.IMAGE_HOTSPOT]: ({
        validatedElements: _v0
      }) => {
        let _v1 = (0, _v168.useAppSelector)(_v0 => !!_v0.featureFlags.hotspotColors?.value),
          _v2 = _v0[0],
          _v3 = _v2?.interactiveHotspot?.action?.type !== _v532.HotspotActionType.NONE;
        return (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsx)(_v574, {
            icon: (0, _v7.jsx)(_v531.SettingsGear, {}),
            inspectorId: _v169.InspectorType.HOTSPOTS_SETTINGS,
            testId: _v181.testIds.hotspots.toolbar.hotspotSettingsButton,
            tooltipText: (0, _v63.translate)({
              singular: "Settings",
              dictionary: {
                es: {
                  singular: "Configuración"
                },
                "de-DE": {
                  singular: "Einstellungen"
                },
                "fr-FR": {
                  singular: "Paramètres"
                },
                "ja-JP": {
                  singular: "設定"
                },
                "ko-KR": {
                  singular: "설정"
                },
                "pt-BR": {
                  singular: "Configurações"
                },
                "zh-CN": {
                  singular: "设置"
                }
              }
            })
          }), (0, _v7.jsx)(_v495, {
            height: 24
          }), (0, _v7.jsx)(_v641, {}), _v1 && (0, _v7.jsx)(_v650, {
            validatedElements: _v0
          }), (0, _v7.jsx)(_v607, {
            validatedElements: _v0,
            testId: _v181.testIds.hotspots.toolbar.flipButton
          }), (0, _v7.jsx)(_v614, {
            validatedElements: _v0,
            testId: _v181.testIds.hotspots.toolbar.rotateButton
          }), (0, _v7.jsx)(_v610, {
            validatedElements: _v0,
            buttonId: _v493.ToolbarButtons.HOTSPOT_OPACITY,
            testId: "opacity-button-hotspot-toolbar"
          }), (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.HOTSPOT_ANIMATION,
            content: (0, _v7.jsx)(_v548, {
              validatedElements: _v0,
              title: (0, _v63.translate)({
                singular: "Animation",
                dictionary: {
                  es: {
                    singular: "Animación"
                  },
                  "ja-JP": {
                    singular: "アニメーション"
                  },
                  "ko-KR": {
                    singular: "애니메이션"
                  },
                  "pt-BR": {
                    singular: "Animação"
                  },
                  "zh-CN": {
                    singular: "动画"
                  }
                }
              }),
              animationKeyName: "animationName"
            }),
            icon: (0, _v7.jsx)(_v534, {}),
            testId: "animation-button-hotspot-toolbar",
            tooltipText: (0, _v63.translate)({
              singular: "Animation",
              dictionary: {
                es: {
                  singular: "Animación"
                },
                "ja-JP": {
                  singular: "アニメーション"
                },
                "ko-KR": {
                  singular: "애니메이션"
                },
                "pt-BR": {
                  singular: "Animação"
                },
                "zh-CN": {
                  singular: "动画"
                }
              }
            })
          }), _v3 && (0, _v7.jsx)(_v573, {
            validatedElements: _v0,
            opacityPropertyPath: "interactiveHotspot.hover.bgAlpha",
            zoomPropertyPath: "interactiveHotspot.hover.zoom",
            opacityOverriddenPropertyPath: "bgAlpha",
            sourceHashPropertyPath: "interactiveHotspot.hover.sourceHash",
            sourceHashOverriddenPropertyPath: "sourceHash"
          }), (0, _v7.jsx)(_v636, {}), (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.HOTSPOT_MORE,
            content: (0, _v7.jsx)(_v648, {
              validatedElements: _v0
            }),
            icon: (0, _v7.jsx)(_v634.EllipsisV, {}),
            testId: _v181.testIds.hotspots.toolbar.moreButton,
            tooltipText: (0, _v63.translate)({
              singular: "More",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr"
                },
                "fr-FR": {
                  singular: "Plus"
                },
                "ja-JP": {
                  singular: "詳細"
                },
                "ko-KR": {
                  singular: "더 보기"
                },
                "pt-BR": {
                  singular: "Mais"
                },
                "zh-CN": {
                  singular: "更多"
                }
              }
            })
          }), (0, _v7.jsx)(_v495, {
            height: 24
          }), (0, _v7.jsx)(_v612, {
            validatedElements: _v0
          })]
        });
      },
      [_v422.ToolbarType.BUTTON]: ({
        validatedElements: _v0,
        showPresets: _v1 = !1
      }) => {
        let _v2 = (0, _v168.useAppDispatch)(),
          _v3 = (0, _v168.useAppSelector)(_v494.selectedToolbarButtonSelector),
          _v4 = (0, _v168.useAppSelector)(_v353.overridesWithoutRectAndTimingSelector, _v416.shallowEqual),
          _v5 = _v0[0],
          _v6 = _v5?.textContent?.length > 0,
          _v7 = _v4[_v5.id],
          _v8 = _v7?.bgAlpha ?? _v5.bgAlpha ?? 100,
          _v9 = _v7?.backgroundColor ?? _v5.backgroundColor,
          _v10 = _v7?.textColor ?? _v5.textColor,
          _v11 = _v5?.interactiveHotspot?.action?.type !== _v532.HotspotActionType.NONE,
          {
            toggleInspector: _v12
          } = (0, _v533.useInspector)(),
          _v13 = (0, _v8.useCallback)(_v0 => {
            _v2((0, _v167.updateElementAction)({
              ceId: _v5.id,
              element: {
                fontSize: _v0
              }
            }));
          }, [_v2, _v5.id]),
          _v14 = (0, _v8.useCallback)(_v0 => {
            _v2((0, _v167.updateElementAction)({
              ceId: _v5.id,
              element: {
                borderRadius: _v0
              }
            }));
          }, [_v2, _v5.id]),
          _v15 = (0, _v8.useCallback)((_v0, _v1, _v2) => {
            _v2((0, _v167.updateElementAction)({
              ceId: _v0,
              element: {
                [_v1]: _v2
              }
            })), _v2((0, _v353.removeOverrideAction)({
              ceId: _v0,
              key: _v1
            }));
          }, [_v2]),
          _v16 = (0, _v8.useCallback)((_v0, _v1, _v2) => {
            _v2((0, _v353.addOverrideAction)({
              ceId: _v0,
              overrides: {
                [_v1]: _v2
              }
            }));
          }, [_v2]);
        return (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsx)(_v574, {
            icon: (0, _v7.jsx)(_v531.SettingsGear, {}),
            inspectorId: _v169.InspectorType.HOTSPOTS_SETTINGS,
            testId: _v181.testIds.hotspots.toolbar.hotspotSettingsButton,
            tooltipText: (0, _v63.translate)({
              singular: "Settings",
              dictionary: {
                es: {
                  singular: "Configuración"
                },
                "de-DE": {
                  singular: "Einstellungen"
                },
                "fr-FR": {
                  singular: "Paramètres"
                },
                "ja-JP": {
                  singular: "設定"
                },
                "ko-KR": {
                  singular: "설정"
                },
                "pt-BR": {
                  singular: "Configurações"
                },
                "zh-CN": {
                  singular: "设置"
                }
              }
            })
          }), (0, _v7.jsx)(_v495, {
            height: 24
          }), _v6 && (0, _v7.jsxs)(_v7.Fragment, {
            children: [(0, _v7.jsx)(_v561, {
              selectedFont: _v5.font,
              inspectorType: _v169.InspectorType.BUTTON_FONT_EDIT,
              handleClick: () => _v12(_v169.InspectorType.BUTTON_FONT_EDIT)
            }), (0, _v7.jsx)(_v565, {
              buttonId: _v493.ToolbarButtons.BUTTON_FONT_SIZE,
              testId: _v181.testIds.button.toolbar.fontSizeButton,
              value: _v5.fontSize,
              onChange: _v13
            }), (0, _v7.jsx)(_v212.Tooltip, {
              label: (0, _v63.translate)({
                singular: "Text color",
                dictionary: {
                  es: {
                    singular: "Color del texto"
                  },
                  "de-DE": {
                    singular: "Textfarbe"
                  },
                  "fr-FR": {
                    singular: "Couleur du texte"
                  },
                  "ja-JP": {
                    singular: "テキストの色"
                  },
                  "ko-KR": {
                    singular: "텍스트 색상"
                  },
                  "pt-BR": {
                    singular: "Cor do texto"
                  },
                  "zh-CN": {
                    singular: "文字颜色"
                  }
                }
              }),
              placement: "bottom",
              isDisabled: _v3 === _v493.ToolbarButtons.TEXT_COLOR,
              children: (0, _v7.jsx)("span", {
                children: (0, _v7.jsx)(_v507, {
                  icon: (0, _v7.jsx)(_v529, {}),
                  value: _v10,
                  title: (0, _v63.translate)({
                    singular: "Text color",
                    dictionary: {
                      es: {
                        singular: "Color del texto"
                      },
                      "de-DE": {
                        singular: "Textfarbe"
                      },
                      "fr-FR": {
                        singular: "Couleur du texte"
                      },
                      "ja-JP": {
                        singular: "テキストの色"
                      },
                      "ko-KR": {
                        singular: "텍스트 색상"
                      },
                      "pt-BR": {
                        singular: "Cor do texto"
                      },
                      "zh-CN": {
                        singular: "文字颜色"
                      }
                    }
                  }),
                  iconColor: _v10,
                  onOpen: () => {
                    _v2((0, _v494.selectToolbarButtonAction)(_v493.ToolbarButtons.TEXT_COLOR));
                  },
                  onClose: () => _v2((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.TEXT_COLOR)),
                  onChange: _v0 => _v16(_v5.id, "textColor", _v0),
                  onChangeEnd: _v0 => _v15(_v5.id, "textColor", _v0),
                  isActive: _v3 === _v493.ToolbarButtons.TEXT_COLOR,
                  testid: "button-text"
                }, _v5.id)
              })
            })]
          }), (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v63.translate)({
              singular: "Background color",
              dictionary: {
                es: {
                  singular: "Color de fondo"
                },
                "de-DE": {
                  singular: "Hintergrundfarbe"
                },
                "fr-FR": {
                  singular: "Couleur de fond"
                },
                "ja-JP": {
                  singular: "背景色"
                },
                "ko-KR": {
                  singular: "배경색"
                },
                "pt-BR": {
                  singular: "Cor do fundo"
                },
                "zh-CN": {
                  singular: "背景颜色"
                }
              }
            }),
            placement: "bottom",
            isDisabled: _v3 === _v493.ToolbarButtons.TEXT_FILL_COLOR,
            children: (0, _v7.jsx)("span", {
              children: (0, _v7.jsx)(_v507, {
                icon: (0, _v7.jsx)(_v492.FillPaintBucket, {}),
                title: (0, _v63.translate)({
                  singular: "Background color",
                  dictionary: {
                    es: {
                      singular: "Color de fondo"
                    },
                    "de-DE": {
                      singular: "Hintergrundfarbe"
                    },
                    "fr-FR": {
                      singular: "Couleur de fond"
                    },
                    "ja-JP": {
                      singular: "背景色"
                    },
                    "ko-KR": {
                      singular: "배경색"
                    },
                    "pt-BR": {
                      singular: "Cor do fundo"
                    },
                    "zh-CN": {
                      singular: "背景颜色"
                    }
                  }
                }),
                value: _v9 + (0, _v506.opacityPercentageToHex)(_v8),
                iconColor: _v9,
                onOpen: () => {
                  _v2((0, _v494.selectToolbarButtonAction)(_v493.ToolbarButtons.TEXT_FILL_COLOR));
                },
                onClose: () => _v2((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.TEXT_FILL_COLOR)),
                onChange: _v0 => _v16(_v5.id, "backgroundColor", _v0),
                onChangeEnd: _v0 => _v15(_v5.id, "backgroundColor", _v0),
                allowOpacity: !0,
                bgAlpha: _v8,
                onOpacityChange: _v0 => _v16(_v5.id, "bgAlpha", _v0),
                onOpacityChangeEnd: _v0 => _v15(_v5.id, "bgAlpha", _v0),
                isActive: _v3 === _v493.ToolbarButtons.TEXT_FILL_COLOR,
                testid: "button-background"
              }, _v5.id)
            })
          }), _v6 && (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.BUTTON_ALIGNMENT,
            content: (0, _v7.jsx)(_v581, {
              ce: _v5,
              title: (0, _v63.translate)({
                singular: "Alignment",
                dictionary: {
                  es: {
                    singular: "Alineación"
                  },
                  "de-DE": {
                    singular: "Ausrichtung"
                  },
                  "fr-FR": {
                    singular: "Alignement"
                  },
                  "ja-JP": {
                    singular: "アライメント"
                  },
                  "ko-KR": {
                    singular: "정렬"
                  },
                  "pt-BR": {
                    singular: "Alinhamento"
                  },
                  "zh-CN": {
                    singular: "对齐"
                  }
                }
              })
            }),
            icon: (0, _v7.jsx)(_v528.AlignLeft, {}),
            testId: _v181.testIds.button.toolbar.alignmentButton,
            tooltipText: (0, _v63.translate)({
              singular: "Alignment",
              dictionary: {
                es: {
                  singular: "Alineación"
                },
                "de-DE": {
                  singular: "Ausrichtung"
                },
                "fr-FR": {
                  singular: "Alignement"
                },
                "ja-JP": {
                  singular: "アライメント"
                },
                "ko-KR": {
                  singular: "정렬"
                },
                "pt-BR": {
                  singular: "Alinhamento"
                },
                "zh-CN": {
                  singular: "对齐"
                }
              }
            }),
            closeOnBlur: !1
          }), (0, _v7.jsx)(_v594, {
            testId: _v181.testIds.button.toolbar.borderRadiusButton,
            buttonId: _v493.ToolbarButtons.BUTTON_BORDER_RADIUS,
            value: _v5.borderRadius,
            onChange: _v14,
            showPresets: _v1
          }), (0, _v7.jsx)(_v588, {
            testId: _v181.testIds.button.toolbar.borderButton,
            buttonId: _v493.ToolbarButtons.BUTTON_BORDER,
            ce: _v5,
            showPresets: _v1
          }), (0, _v7.jsx)(_v558, {
            buttonId: _v493.ToolbarButtons.BUTTON_DROP_SHADOW,
            testId: _v181.testIds.button.toolbar.dropShadowButton,
            value: _v5.dropShadow,
            onChange: _v0 => _v2((0, _v167.updateElementAction)({
              ceId: _v5.id,
              element: {
                dropShadow: _v0
              }
            }))
          }), (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.BUTTON_ANIMATION,
            content: (0, _v7.jsx)(_v548, {
              validatedElements: _v0,
              title: (0, _v63.translate)({
                singular: "Animation",
                dictionary: {
                  es: {
                    singular: "Animación"
                  },
                  "ja-JP": {
                    singular: "アニメーション"
                  },
                  "ko-KR": {
                    singular: "애니메이션"
                  },
                  "pt-BR": {
                    singular: "Animação"
                  },
                  "zh-CN": {
                    singular: "动画"
                  }
                }
              }),
              animationKeyName: "animationName"
            }),
            icon: (0, _v7.jsx)(_v534, {}),
            testId: _v181.testIds.button.toolbar.animationButton,
            tooltipText: (0, _v63.translate)({
              singular: "Animation",
              dictionary: {
                es: {
                  singular: "Animación"
                },
                "ja-JP": {
                  singular: "アニメーション"
                },
                "ko-KR": {
                  singular: "애니메이션"
                },
                "pt-BR": {
                  singular: "Animação"
                },
                "zh-CN": {
                  singular: "动画"
                }
              }
            })
          }), _v11 && (0, _v7.jsx)(_v573, {
            validatedElements: _v0,
            opacityPropertyPath: "interactiveHotspot.hover.opacity",
            zoomPropertyPath: "interactiveHotspot.hover.zoom",
            opacityOverriddenPropertyPath: "opacity",
            zoomOverriddenPropertyPath: "zoom"
          }), (0, _v7.jsx)(_v495, {
            height: 24
          }), (0, _v7.jsx)(_v574, {
            inspectorId: _v169.InspectorType.BUTTON_TEXT_EDIT,
            icon: (0, _v7.jsx)(_v530.EditPencil, {}),
            testId: _v181.testIds.button.toolbar.textButton,
            tooltipText: (0, _v63.translate)({
              singular: "Edit text",
              dictionary: {
                es: {
                  singular: "Editar el texto"
                },
                "de-DE": {
                  singular: "Text bearbeiten"
                },
                "fr-FR": {
                  singular: "Modifier le texte"
                },
                "ja-JP": {
                  singular: "テキストを編集"
                },
                "ko-KR": {
                  singular: "텍스트 편집"
                },
                "pt-BR": {
                  singular: "Editar texto"
                },
                "zh-CN": {
                  singular: "编辑文本"
                }
              }
            })
          })]
        });
      },
      [_v422.ToolbarType.CANVAS]: _v526,
      [_v422.ToolbarType.TEXT]: ({
        validatedElements: _v0
      }) => {
        let _v1 = (0, _v168.useAppDispatch)(),
          _v2 = (0, _v168.useAppSelector)(_v166.currentInspectorSelector),
          {
            toggleInspector: _v3
          } = (0, _v533.useInspector)(),
          _v4 = (0, _v168.useAppSelector)(_v353.overridesWithoutRectAndTimingSelector, _v416.shallowEqual),
          _v5 = (0, _v168.useAppSelector)(_v494.selectedToolbarButtonSelector),
          {
            saveUserBgAlphaSelection: _v6
          } = (0, _v677.useStoryboardMetadata)(),
          _v7 = _v0[0],
          _v8 = _v4[_v7.id],
          {
            fontColor: _v9,
            colorOne: _v10,
            highlight: _v11
          } = {
            ..._v7.colors,
            ..._v8?.colors
          },
          _v12 = _v8?.bgAlpha || _v7.bgAlpha,
          _v13 = (0, _v8.useCallback)((_v0, _v1) => {
            _v7.colors[_v1] !== _v0 && _v1((0, _v353.addOverrideAction)({
              ceId: _v7.id,
              overrides: {
                colors: {
                  [_v1]: _v0
                }
              }
            }));
          }, [_v1, _v7.colors, _v7.id]),
          _v14 = (0, _v8.useCallback)((_v0, _v1) => {
            _v1((0, _v353.removeOverrideAction)({
              ceId: _v7.id,
              key: "colors"
            })), _v7.colors[_v1] !== _v0 && _v1((0, _v167.updateElementAction)({
              ceId: _v7.id,
              element: {
                colors: {
                  [_v1]: _v0
                }
              }
            }));
          }, [_v1, _v7.colors, _v7.id]),
          _v15 = (0, _v8.useCallback)(_v0 => {
            _v7.bgAlpha !== _v0 && _v1((0, _v353.addOverrideAction)({
              ceId: _v7.id,
              overrides: {
                bgAlpha: _v0
              }
            }));
          }, [_v1, _v7]),
          _v16 = (0, _v8.useCallback)(_v0 => {
            _v1((0, _v353.removeOverrideAction)({
              ceId: _v7.id,
              key: "bgAlpha"
            })), _v7.bgAlpha !== _v0 && (_v6(_v7.id), _v1((0, _v167.updateElementAction)({
              ceId: _v7.id,
              element: {
                bgAlpha: _v0
              }
            })));
          }, [_v1, _v7.bgAlpha, _v7.id, _v6]),
          _v17 = (0, _v8.useCallback)(_v0 => _v13(_v0, _v678), [_v13]),
          _v18 = (0, _v8.useCallback)(_v0 => _v13(_v0, _v679), [_v13]),
          _v19 = (0, _v8.useCallback)(_v0 => _v13(_v0, _v680), [_v13]),
          _v20 = (0, _v8.useMemo)(() => {
            switch (_v7.align) {
              case _v579.Alignment.CENTER:
                return (0, _v7.jsx)(_v575.AlignCenter, {});
              case _v579.Alignment.LEFT:
                return (0, _v7.jsx)(_v528.AlignLeft, {});
              case _v579.Alignment.RIGHT:
                return (0, _v7.jsx)(_v576.AlignRight, {});
            }
          }, [_v7.align]);
        return (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsx)(_v561, {
            selectedFont: _v7.font,
            inspectorType: _v169.InspectorType.FONT_EDIT,
            handleClick: () => _v3(_v169.InspectorType.FONT_EDIT)
          }), (0, _v7.jsx)(_v684, {
            ce: _v7,
            elementOverrides: _v8
          }), (0, _v7.jsx)(_v495, {
            height: 24
          }), (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v63.translate)({
              singular: "Text color",
              dictionary: {
                es: {
                  singular: "Color del texto"
                },
                "de-DE": {
                  singular: "Textfarbe"
                },
                "fr-FR": {
                  singular: "Couleur du texte"
                },
                "ja-JP": {
                  singular: "テキストの色"
                },
                "ko-KR": {
                  singular: "텍스트 색상"
                },
                "pt-BR": {
                  singular: "Cor do texto"
                },
                "zh-CN": {
                  singular: "文字颜色"
                }
              }
            }),
            placement: "bottom",
            "data-testid": "tooltip",
            isDisabled: _v5 === _v493.ToolbarButtons.TEXT_COLOR,
            children: (0, _v7.jsx)("span", {
              children: (0, _v7.jsx)(_v507, {
                icon: (0, _v7.jsx)(_v529, {}),
                value: _v9,
                title: (0, _v63.translate)({
                  singular: "Text color",
                  dictionary: {
                    es: {
                      singular: "Color del texto"
                    },
                    "de-DE": {
                      singular: "Textfarbe"
                    },
                    "fr-FR": {
                      singular: "Couleur du texte"
                    },
                    "ja-JP": {
                      singular: "テキストの色"
                    },
                    "ko-KR": {
                      singular: "텍스트 색상"
                    },
                    "pt-BR": {
                      singular: "Cor do texto"
                    },
                    "zh-CN": {
                      singular: "文字颜色"
                    }
                  }
                }),
                iconColor: _v9,
                testid: "text",
                onOpen: () => {
                  (0, _v559.sendTrackSelectTextColorOptions)({
                    colorType: "text_color"
                  }), _v1((0, _v494.selectToolbarButtonAction)(_v493.ToolbarButtons.TEXT_COLOR));
                },
                onClose: () => _v1((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.TEXT_COLOR)),
                onChange: _v17,
                onChangeEnd: _v0 => _v14(_v0, _v678),
                isActive: _v5 === _v493.ToolbarButtons.TEXT_COLOR
              }, _v7.id)
            })
          }), (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v63.translate)({
              singular: "Background color",
              dictionary: {
                es: {
                  singular: "Color de fondo"
                },
                "de-DE": {
                  singular: "Hintergrundfarbe"
                },
                "fr-FR": {
                  singular: "Couleur de fond"
                },
                "ja-JP": {
                  singular: "背景色"
                },
                "ko-KR": {
                  singular: "배경색"
                },
                "pt-BR": {
                  singular: "Cor do fundo"
                },
                "zh-CN": {
                  singular: "背景颜色"
                }
              }
            }),
            placement: "bottom",
            "data-testid": "tooltip",
            isDisabled: _v5 === _v493.ToolbarButtons.TEXT_FILL_COLOR,
            children: (0, _v7.jsx)("span", {
              children: (0, _v7.jsx)(_v507, {
                icon: (0, _v7.jsx)(_v492.FillPaintBucket, {}),
                title: (0, _v63.translate)({
                  singular: "Background color",
                  dictionary: {
                    es: {
                      singular: "Color de fondo"
                    },
                    "de-DE": {
                      singular: "Hintergrundfarbe"
                    },
                    "fr-FR": {
                      singular: "Couleur de fond"
                    },
                    "ja-JP": {
                      singular: "背景色"
                    },
                    "ko-KR": {
                      singular: "배경색"
                    },
                    "pt-BR": {
                      singular: "Cor do fundo"
                    },
                    "zh-CN": {
                      singular: "背景颜色"
                    }
                  }
                }),
                value: _v10 + (0, _v506.opacityPercentageToHex)(_v12),
                iconColor: _v10,
                testid: "text-fill-color-picker",
                onOpen: () => {
                  (0, _v559.sendTrackSelectTextColorOptions)({
                    colorType: "fill_color"
                  }), _v1((0, _v494.selectToolbarButtonAction)(_v493.ToolbarButtons.TEXT_FILL_COLOR));
                },
                onClose: () => _v1((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.TEXT_FILL_COLOR)),
                onChange: _v18,
                onChangeEnd: _v0 => _v14(_v0, _v679),
                allowOpacity: !0,
                bgAlpha: _v12,
                isActive: _v5 === _v493.ToolbarButtons.TEXT_FILL_COLOR,
                onOpacityChange: _v15,
                onOpacityChangeEnd: _v16
              }, _v7.id)
            })
          }), (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v63.translate)({
              singular: "Highlight color",
              dictionary: {
                es: {
                  singular: "Color de realce"
                },
                "de-DE": {
                  singular: "Farbe für Textmarkierungen"
                },
                "fr-FR": {
                  singular: "Couleur du texte"
                },
                "ja-JP": {
                  singular: "ハイライト・カラー"
                },
                "ko-KR": {
                  singular: "강조색"
                },
                "pt-BR": {
                  singular: "Cor de Destaque"
                },
                "zh-CN": {
                  singular: "突出显示颜色"
                }
              }
            }),
            placement: "bottom",
            "data-testid": "tooltip",
            isDisabled: _v5 === _v493.ToolbarButtons.TEXT_HIGHLIGHT_COLOR,
            children: (0, _v7.jsx)("span", {
              children: (0, _v7.jsx)(_v507, {
                icon: (0, _v7.jsx)(_v676, {}),
                value: _v11,
                title: (0, _v63.translate)({
                  singular: "Highlight color",
                  dictionary: {
                    es: {
                      singular: "Color de realce"
                    },
                    "de-DE": {
                      singular: "Farbe für Textmarkierungen"
                    },
                    "fr-FR": {
                      singular: "Couleur du texte"
                    },
                    "ja-JP": {
                      singular: "ハイライト・カラー"
                    },
                    "ko-KR": {
                      singular: "강조색"
                    },
                    "pt-BR": {
                      singular: "Cor de Destaque"
                    },
                    "zh-CN": {
                      singular: "突出显示颜色"
                    }
                  }
                }),
                iconColor: _v11,
                testid: "text-highlight",
                onOpen: () => {
                  (0, _v559.sendTrackSelectTextColorOptions)({
                    colorType: "highlight_color"
                  }), _v1((0, _v494.selectToolbarButtonAction)(_v493.ToolbarButtons.TEXT_HIGHLIGHT_COLOR));
                },
                onClose: () => _v1((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.TEXT_HIGHLIGHT_COLOR)),
                onChange: _v19,
                onChangeEnd: _v0 => _v14(_v0, _v680),
                isActive: _v5 === _v493.ToolbarButtons.TEXT_HIGHLIGHT_COLOR
              }, _v7.id)
            })
          }), (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.TEXT_ALIGNMENT,
            content: (0, _v7.jsx)(_v681, {
              validatedElements: _v0,
              title: (0, _v63.translate)({
                singular: "Alignment",
                dictionary: {
                  es: {
                    singular: "Alineación"
                  },
                  "de-DE": {
                    singular: "Ausrichtung"
                  },
                  "fr-FR": {
                    singular: "Alignement"
                  },
                  "ja-JP": {
                    singular: "アライメント"
                  },
                  "ko-KR": {
                    singular: "정렬"
                  },
                  "pt-BR": {
                    singular: "Alinhamento"
                  },
                  "zh-CN": {
                    singular: "对齐"
                  }
                }
              })
            }),
            icon: _v20,
            testId: "alignment-button-text-toolbar",
            tooltipText: (0, _v63.translate)({
              singular: "Alignment",
              dictionary: {
                es: {
                  singular: "Alineación"
                },
                "de-DE": {
                  singular: "Ausrichtung"
                },
                "fr-FR": {
                  singular: "Alignement"
                },
                "ja-JP": {
                  singular: "アライメント"
                },
                "ko-KR": {
                  singular: "정렬"
                },
                "pt-BR": {
                  singular: "Alinhamento"
                },
                "zh-CN": {
                  singular: "对齐"
                }
              }
            }),
            onClick: _v559.sendTrackSelectAlignmentOptions
          }), (0, _v7.jsx)(_v682, {
            validatedElements: _v0
          }), (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v63.translate)({
              singular: "Animation",
              dictionary: {
                es: {
                  singular: "Animación"
                },
                "ja-JP": {
                  singular: "アニメーション"
                },
                "ko-KR": {
                  singular: "애니메이션"
                },
                "pt-BR": {
                  singular: "Animação"
                },
                "zh-CN": {
                  singular: "动画"
                }
              }
            }),
            placement: "bottom",
            "data-testid": "tooltip",
            isDisabled: _v2 === _v169.InspectorType.TEXT_ANIMATIONS,
            children: (0, _v7.jsx)(_v195.IconButton, {
              "aria-label": (0, _v63.translate)({
                singular: "Animation",
                dictionary: {
                  es: {
                    singular: "Animación"
                  },
                  "ja-JP": {
                    singular: "アニメーション"
                  },
                  "ko-KR": {
                    singular: "애니메이션"
                  },
                  "pt-BR": {
                    singular: "Animação"
                  },
                  "zh-CN": {
                    singular: "动画"
                  }
                }
              }),
              variant: "tertiary",
              size: "sm",
              icon: (0, _v7.jsx)(_v534, {}),
              "data-testid": "animation-button-text-toolbar",
              onClick: () => {
                (0, _v559.sendTrackSelectTextAnimation)(), _v3(_v169.InspectorType.TEXT_ANIMATIONS);
              },
              isActive: _v2 === _v169.InspectorType.TEXT_ANIMATIONS
            })
          }), (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v63.translate)({
              singular: "Edit text",
              dictionary: {
                es: {
                  singular: "Editar el texto"
                },
                "de-DE": {
                  singular: "Text bearbeiten"
                },
                "fr-FR": {
                  singular: "Modifier le texte"
                },
                "ja-JP": {
                  singular: "テキストを編集"
                },
                "ko-KR": {
                  singular: "텍스트 편집"
                },
                "pt-BR": {
                  singular: "Editar texto"
                },
                "zh-CN": {
                  singular: "编辑文本"
                }
              }
            }),
            placement: "bottom",
            "data-testid": "tooltip",
            isDisabled: _v2 === _v169.InspectorType.TEXT_EDIT,
            children: (0, _v7.jsx)(_v195.IconButton, {
              variant: "tertiary",
              size: "sm",
              icon: (0, _v7.jsx)(_v530.EditPencil, {}),
              "data-testid": "edit-text-button-text-toolbar",
              "aria-label": "edit-text-button-text-toolbar",
              onClick: () => {
                (0, _v559.sendTrackSelectTextEdit)(), _v3(_v169.InspectorType.TEXT_EDIT);
              },
              isActive: _v2 === _v169.InspectorType.TEXT_EDIT
            })
          })]
        });
      },
      [_v422.ToolbarType.SOLID]: ({
        validatedElements: _v0
      }) => {
        let _v1 = (0, _v168.useAppDispatch)(),
          _v2 = (0, _v168.useAppSelector)(_v353.overridesWithoutRectSelector, _v416.shallowEqual),
          _v3 = (0, _v168.useAppSelector)(_v494.selectedToolbarButtonSelector),
          _v4 = _v0[0],
          _v5 = _v2[_v4?.id],
          _v6 = _v5?.fill || _v4?.fill;
        return (0, _v7.jsx)("div", {
          "data-testid": _v181.testIds.solidToolbar,
          children: (0, _v7.jsx)(_v212.Tooltip, {
            label: (0, _v63.translate)({
              singular: "Colors",
              dictionary: {
                es: {
                  singular: "Colores"
                },
                "de-DE": {
                  singular: "Farben"
                },
                "fr-FR": {
                  singular: "Couleurs"
                },
                "ja-JP": {
                  singular: "色"
                },
                "ko-KR": {
                  singular: "색상"
                },
                "pt-BR": {
                  singular: "Cores"
                },
                "zh-CN": {
                  singular: "颜色"
                }
              }
            }),
            placement: "bottom",
            "data-testid": "tooltip",
            children: (0, _v7.jsx)("span", {
              children: (0, _v7.jsx)(_v507, {
                icon: (0, _v7.jsx)(_v492.FillPaintBucket, {}),
                value: _v6,
                iconColor: _v6,
                testid: "solid",
                onOpen: () => _v1((0, _v494.selectToolbarButtonAction)(_v493.ToolbarButtons.SOLID_COLOR)),
                onClose: () => _v1((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.SOLID_COLOR)),
                onChange: _v0 => {
                  _v1((0, _v353.addOverrideAction)({
                    ceId: _v4.id,
                    overrides: {
                      fill: _v0
                    }
                  }));
                },
                onChangeEnd: _v0 => {
                  _v1((0, _v353.removeOverrideAction)({
                    ceId: _v4.id,
                    key: "fill"
                  })), _v1((0, _v167.updateElementAction)({
                    ceId: _v4.id,
                    element: {
                      fill: _v0
                    }
                  }));
                },
                isActive: _v3 === _v493.ToolbarButtons.SOLID_COLOR
              }, _v4.id)
            })
          })
        });
      },
      [_v422.ToolbarType.SOUND]: ({
        validatedElements: _v0
      }) => {
        let _v1 = (0, _v168.useAppDispatch)(),
          _v2 = (0, _v168.useAppSelector)(_v353.overridesWithoutRectSelector, _v416.shallowEqual),
          _v3 = (0, _v168.useAppSelector)(_v0 => _v0.toolbar?.selectedToolbarButton),
          _v4 = (0, _v8.useRef)(null),
          _v5 = _v0[0],
          _v6 = _v2[_v5?.id],
          _v7 = _v5.muted,
          _v8 = _v5.effects && (0, _v657.getVolumeEffect)(_v5.effects),
          _v9 = _v6?.effects && (0, _v657.getVolumeEffect)(_v6.effects),
          _v10 = 100 * (_v9 ?? _v8 ?? (0, _v657.getDefaultVolumeEffect)(_v5)).level,
          _v11 = _v9 && 100 * _v9.level,
          {
            fadeIn: _v12,
            fadeOut: _v13,
            maxFade: _v14,
            overrideVolume: _v15,
            updateVolume: _v16,
            updateFadeIn: _v17,
            updateFadeOut: _v18,
            muteVolume: _v19
          } = _v671(_v5),
          _v20 = (0, _v8.useMemo)(() => _v5?.muted ? (0, _v7.jsx)(_v668.VolumeOff, {}) : (0, _v7.jsx)(_v669.VolumeOn, {}), [_v5]),
          _v21 = (0, _v8.useCallback)(() => {
            _v19(), _v1((0, _v494.deselectToolbarButtonAction)(_v493.ToolbarButtons.SOUND_VOLUME));
          }, [_v1, _v19]);
        return (0, _v7.jsx)(_v186.Box, {
          "data-testid": _v181.testIds.soundToolbar,
          children: (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.SOUND_VOLUME,
            testId: "sound-toolbar-button",
            icon: _v20,
            tooltipText: (0, _v63.translate)({
              singular: "Audio volume",
              dictionary: {
                es: {
                  singular: "Volumen de audio"
                },
                "de-DE": {
                  singular: "Lautstärke"
                },
                "fr-FR": {
                  singular: "Volume audio"
                },
                "ja-JP": {
                  singular: "音量"
                },
                "ko-KR": {
                  singular: "오디오 볼륨"
                },
                "pt-BR": {
                  singular: "Volume do áudio"
                },
                "zh-CN": {
                  singular: "音频音量"
                }
              }
            }),
            tooltipTestId: "tooltip",
            content: _v5 && _v3 === _v493.ToolbarButtons.SOUND_VOLUME ? (0, _v7.jsx)(_v675, {
              volume: {
                value: _v11 ?? (_v7 ? 0 : _v10),
                maxValue: 100
              },
              fadeIn: {
                value: _v12,
                maxValue: _v14
              },
              fadeOut: {
                value: _v13,
                maxValue: _v14
              },
              onVolumeChange: _v15,
              onVolumeChangeEnd: _v16,
              onFadeInChangeEnd: _v17,
              onFadeOutChangeEnd: _v18,
              onClick: _v21,
              icon: _v20,
              buttonDataTestId: _v5?.muted ? "unmute-button" : "mute-button",
              ref: _v4
            }) : null
          })
        });
      },
      [_v422.ToolbarType.CROP]: ({
        validatedElements: _v0
      }) => {
        let _v1 = (0, _v168.useAppDispatch)(),
          _v2 = (0, _v168.useAppSelector)(_v390.stageSizeSelector),
          _v3 = (0, _v168.useAppSelector)(_v353.overridesSelector),
          _v4 = (0, _v168.useAppSelector)(_v372.pausedSelector),
          _v5 = (0, _v168.useAppSelector)(_v167.storyboardIdSelector),
          {
            trackEditorClipCropRatioChanged: _v6
          } = (0, _v325.useEditorTracking)(),
          {
            changeCropOrientation: _v7
          } = _v420(),
          _v8 = _v0[0],
          _v9 = (0, _v8.useRef)(_v0[0]),
          _v10 = (0, _v8.useMemo)(() => {
            let _v0 = {
                ..._v8?.rect,
                ..._v3[_v8?.id]?.rect
              },
              _v1 = (0, _v412.getRectInPx)(_v0, _v2);
            return (0, _v419.getCropRatio)(_v1);
          }, [_v3, _v8?.id, _v8?.rect, _v2]),
          _v11 = (0, _v8.useCallback)(() => {
            if (!_v8) throw Error(_v159.CE_NOT_FOUND);
            _v1((0, _v353.resetOverridesAction)()), _v1((0, _v494.showToolbarAction)((0, _v235.getToolbarTypeForElement)(_v8)));
          }, [_v1, _v8]),
          _v12 = (0, _v8.useCallback)(() => {
            (0, _v597.trackApplyCrop)({
              mediaType: _v8.type,
              cropRatio: _v10,
              actionCTA: "V"
            }), _v11();
          }, [_v10, _v11, _v8]),
          _v13 = _v0 => {
            _v7(_v0), (0, _v597.trackChangeCropFormat)({
              mediaType: _v8.type,
              cropRatio: _v0
            }), _v0 !== _v10 && _v6({
              editorSessionId: _v5,
              orientation: _v0
            });
          };
        return (0, _v8.useEffect)(() => {
          let _v0 = _v0 => {
            (_v0.key === _v504.KEYBOARD_KEYS.ESC || _v0.key === _v504.KEYBOARD_KEYS.ENTER) && ((0, _v597.trackApplyCrop)({
              mediaType: _v8.type,
              cropRatio: _v10,
              actionCTA: `keyboard_${_v0.key}`
            }), _v11());
          };
          return document.addEventListener("keydown", _v0), () => {
            document.removeEventListener("keydown", _v0);
          };
        }, [_v8, _v11, _v10]), (0, _v8.useEffect)(() => {
          _v4 || _v11();
        }, [_v4, _v11]), (0, _v8.useEffect)(() => {
          _v8.id !== _v9.current?.id && (_v1((0, _v353.resetOverridesAction)()), (0, _v597.trackApplyCrop)({
            mediaType: _v8.type,
            cropRatio: _v10,
            actionCTA: "outside_the_box"
          }));
        }, [_v10, _v1, _v11, _v8]), (0, _v8.useEffect)(() => () => {
          _v1((0, _v353.resetOverridesAction)()), (0, _v597.trackApplyCrop)({
            mediaType: _v8.type,
            cropRatio: _v10,
            actionCTA: "outside_the_box"
          });
        }, [_v1]), (0, _v7.jsxs)(_v599, {
          testId: _v181.testIds.replaceToolbar,
          children: [(0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.CROP_RATIO,
            content: (0, _v7.jsx)(_v547, {
              title: (0, _v63.translate)({
                singular: "Crop ratio",
                dictionary: {
                  es: {
                    singular: "Proporción de recorte"
                  },
                  "de-DE": {
                    singular: "Seitenverhältnis"
                  },
                  "fr-FR": {
                    singular: "Ratio de recadrage"
                  },
                  "ja-JP": {
                    singular: "トリミング比率"
                  },
                  "ko-KR": {
                    singular: "자르기 비율"
                  },
                  "pt-BR": {
                    singular: "Proporção de recorte"
                  },
                  "zh-CN": {
                    singular: "裁切比例"
                  }
                }
              }),
              buttons: [{
                isSelected: _v10 === _v331.Orientation.LANDSCAPE,
                icon: (0, _v7.jsx)(_v512.FormatLandscape, {}),
                onClick: () => _v13(_v331.Orientation.LANDSCAPE),
                testId: "crop-landscape-ratio",
                tooltipText: "16:9"
              }, {
                isSelected: _v10 === _v331.Orientation.SQUARE,
                icon: (0, _v7.jsx)(_v514.FormatSquare, {}),
                onClick: () => _v13(_v331.Orientation.SQUARE),
                testId: "crop-square-ratio",
                tooltipText: "1:1"
              }, {
                isSelected: _v10 === _v331.Orientation.PORTRAIT,
                icon: (0, _v7.jsx)(_v598, {}),
                onClick: () => _v13(_v331.Orientation.PORTRAIT),
                testId: "crop-portrait-ratio",
                tooltipText: "9:16"
              }]
            }),
            icon: (0, _v7.jsx)(_v596.ChevronDown, {}),
            iconPosition: "right",
            title: (0, _v63.translate)({
              singular: "Crop ratio",
              dictionary: {
                es: {
                  singular: "Proporción de recorte"
                },
                "de-DE": {
                  singular: "Seitenverhältnis"
                },
                "fr-FR": {
                  singular: "Ratio de recadrage"
                },
                "ja-JP": {
                  singular: "トリミング比率"
                },
                "ko-KR": {
                  singular: "자르기 비율"
                },
                "pt-BR": {
                  singular: "Proporção de recorte"
                },
                "zh-CN": {
                  singular: "裁切比例"
                }
              }
            }),
            testId: "crop-ratio-toolbar"
          }), (0, _v7.jsx)(_v495, {
            height: 24
          }), (0, _v7.jsx)(_v551, {
            ariaLabel: "crop-confirm",
            variant: "primary",
            icon: (0, _v7.jsx)(_v595.Checkmark, {}),
            onClick: _v12,
            testId: _v181.testIds.confirmReplaceButton
          })]
        });
      },
      [_v422.ToolbarType.POLL]: ({
        validatedElements: _v0
      }) => {
        let {
          toggleInspector: _v1
        } = (0, _v533.useInspector)();
        return 0 === _v0.length ? null : (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsx)(_v561, {
            selectedFont: _v0[0]?.font,
            inspectorType: _v169.InspectorType.POLL_FONT_EDIT,
            handleClick: () => _v1(_v169.InspectorType.POLL_FONT_EDIT)
          }), (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.POLL_TEXT_COLOR,
            content: (0, _v7.jsx)(_v666, {
              validatedElements: _v0
            }),
            icon: (0, _v7.jsx)(_v663, {}),
            testId: _v181.testIds.polls.toolbar.textColorButton,
            tooltipText: (0, _v63.translate)({
              singular: "Text colors",
              dictionary: {
                es: {
                  singular: "Colores del texto"
                },
                "de-DE": {
                  singular: "Farbe des Texts"
                },
                "fr-FR": {
                  singular: "Couleurs du texte"
                },
                "ja-JP": {
                  singular: "テキストの色"
                },
                "ko-KR": {
                  singular: "텍스트 색상"
                },
                "pt-BR": {
                  singular: "Cores do texto"
                },
                "zh-CN": {
                  singular: "文字颜色"
                }
              }
            }),
            closeOnBlur: !1
          }, _v0[0].id + _v493.ToolbarButtons.POLL_TEXT_COLOR), (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.POLL_BACKGROUND_COLOR,
            content: (0, _v7.jsx)(_v664, {
              pollElement: _v0[0]
            }),
            icon: (0, _v7.jsx)(_v492.FillPaintBucket, {}),
            testId: _v181.testIds.polls.toolbar.backgroundColorButton,
            tooltipText: (0, _v63.translate)({
              singular: "Background colors",
              dictionary: {
                es: {
                  singular: "Colores de fondo"
                },
                "de-DE": {
                  singular: "Hintergrundfarben"
                },
                "fr-FR": {
                  singular: "Couleurs d'arrière-plan"
                },
                "ja-JP": {
                  singular: "背景色"
                },
                "ko-KR": {
                  singular: "배경색"
                },
                "pt-BR": {
                  singular: "Cores de fundo"
                },
                "zh-CN": {
                  singular: "背景颜色"
                }
              }
            }),
            closeOnBlur: !1
          }, _v0[0].id + _v493.ToolbarButtons.POLL_BACKGROUND_COLOR), (0, _v7.jsx)(_v614, {
            validatedElements: _v0,
            testId: _v181.testIds.polls.toolbar.rotateButton
          }), (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.GRAPHICS_ANIMATIONS,
            content: (0, _v7.jsx)(_v548, {
              validatedElements: _v0,
              title: (0, _v63.translate)({
                singular: "Animation",
                dictionary: {
                  es: {
                    singular: "Animación"
                  },
                  "ja-JP": {
                    singular: "アニメーション"
                  },
                  "ko-KR": {
                    singular: "애니메이션"
                  },
                  "pt-BR": {
                    singular: "Animação"
                  },
                  "zh-CN": {
                    singular: "动画"
                  }
                }
              }),
              animationKeyName: "animationName"
            }),
            icon: (0, _v7.jsx)(_v662, {}),
            testId: _v181.testIds.polls.toolbar.animationButton,
            tooltipText: (0, _v63.translate)({
              singular: "Animation",
              dictionary: {
                es: {
                  singular: "Animación"
                },
                "ja-JP": {
                  singular: "アニメーション"
                },
                "ko-KR": {
                  singular: "애니메이션"
                },
                "pt-BR": {
                  singular: "Animação"
                },
                "zh-CN": {
                  singular: "动画"
                }
              }
            })
          }), (0, _v7.jsx)(_v574, {
            inspectorId: _v169.InspectorType.POLL_EDIT,
            icon: (0, _v7.jsx)(_v530.EditPencil, {}),
            tooltipText: (0, _v63.translate)({
              singular: "Edit",
              dictionary: {
                es: {
                  singular: "Editar"
                },
                "de-DE": {
                  singular: "Bearbeiten"
                },
                "fr-FR": {
                  singular: "Modifier"
                },
                "ja-JP": {
                  singular: "編集"
                },
                "ko-KR": {
                  singular: "편집"
                },
                "pt-BR": {
                  singular: "Editar"
                },
                "zh-CN": {
                  singular: "编辑"
                }
              }
            }),
            testId: _v181.testIds.polls.toolbar.settingsButton
          }, _v0[0]?.id + _v493.ToolbarButtons.POLL_SETTINGS)]
        });
      },
      [_v422.ToolbarType.OVERLAY]: ({
        validatedElements: _v0
      }) => {
        let _v1 = (0, _v168.useAppDispatch)(),
          _v2 = (0, _v168.useAppSelector)(_v261.openModalIdSelector),
          _v3 = (0, _v168.useAppSelector)(_v224.isLoadingMediaOrApplyingTemplateSelector),
          {
            editOverlay: _v4,
            editBlankTimeTriggeredOverlay: _v5
          } = (0, _v243.useInteractiveOverlay)(),
          _v6 = _v0[0],
          _v7 = (0, _v168.useAppSelector)(_v0 => (0, _v167.selectInteractiveOverlayById)(_v0, _v6.overlayId)),
          {
            hasCreateInteractiveTeamOverlayTemplateCreate: _v8,
            hasCreateSystemTemplate: _v9
          } = (0, _v8.useContext)(_v204.PermissionsContext),
          _v10 = (0, _v8.useMemo)(() => () => _v1((0, _v261.setOpenModalIdAction)("")), [_v1]),
          _v11 = _v8 && _v7 && _v2 === _v251.MODAL_IDS.saveAsTeamTemplateModal,
          _v12 = _v9 && _v7 && _v2 === _v251.MODAL_IDS.saveAsSystemTemplateModal;
        return (0, _v7.jsxs)(_v7.Fragment, {
          children: [_v7 && (0, _v7.jsx)(_v661.RenameOverlayModal, {
            overlayId: _v6.overlayId
          }), _v11 && (0, _v7.jsx)(_v349.SaveOverlayAsTeamTemplateModal, {
            active: !0,
            onConfirm: _v10,
            onDismiss: _v10,
            initialTemplateName: _v7.name,
            overlayId: _v6.overlayId
          }), _v12 && (0, _v7.jsx)(_v348, {
            active: !0,
            onConfirm: _v10,
            onDismiss: _v10,
            initialTemplateName: _v7.name,
            overlayId: _v6.overlayId
          }), (0, _v7.jsx)(_v551, {
            testId: _v181.testIds.overlay.toolbar.editButton,
            icon: (0, _v7.jsx)(_v530.EditPencil, {}),
            onClick: () => {
              (0, _v340.sendTrackSelectEditOverlay)(), _v6.overlayId ? _v4({
                overlayId: _v6.overlayId,
                linkedElementId: _v6.id
              }) : _v5(_v6.id);
            },
            title: (0, _v63.translate)({
              singular: "Edit overlay",
              dictionary: {
                es: {
                  singular: "Editar superposición"
                },
                "de-DE": {
                  singular: "Overlay bearbeiten"
                },
                "fr-FR": {
                  singular: "Modifier la superposition"
                },
                "ja-JP": {
                  singular: "オーバーレイを編集"
                },
                "ko-KR": {
                  singular: "오버레이 편집"
                },
                "pt-BR": {
                  singular: "Editar sobreposição"
                },
                "zh-CN": {
                  singular: "编辑视频叠加"
                }
              }
            }),
            iconPosition: "left",
            isDisabled: _v3
          }), (0, _v7.jsxs)(_v273.Menu, {
            placement: "bottom",
            autoSelect: !1,
            children: [(0, _v7.jsx)(_v212.Tooltip, {
              label: (0, _v63.translate)({
                singular: "More options",
                dictionary: {
                  es: {
                    singular: "Más opciones"
                  },
                  "de-DE": {
                    singular: "Mehr Optionen"
                  },
                  "fr-FR": {
                    singular: "Plus d'options"
                  },
                  "ja-JP": {
                    singular: "その他のオプション"
                  },
                  "ko-KR": {
                    singular: "옵션 더 보기"
                  },
                  "pt-BR": {
                    singular: "Mais opções"
                  },
                  "zh-CN": {
                    singular: "更多选项"
                  }
                }
              }),
              placement: "top",
              children: (0, _v7.jsx)(_v274.MenuButton, {
                as: _v195.IconButton,
                "aria-label": (0, _v63.translate)({
                  singular: "More options",
                  dictionary: {
                    es: {
                      singular: "Más opciones"
                    },
                    "de-DE": {
                      singular: "Mehr Optionen"
                    },
                    "fr-FR": {
                      singular: "Plus d'options"
                    },
                    "ja-JP": {
                      singular: "その他のオプション"
                    },
                    "ko-KR": {
                      singular: "옵션 더 보기"
                    },
                    "pt-BR": {
                      singular: "Mais opções"
                    },
                    "zh-CN": {
                      singular: "更多选项"
                    }
                  }
                }),
                icon: (0, _v7.jsx)(_v634.EllipsisV, {}),
                variant: "tertiary",
                size: "sm",
                onClick: _v340.sendTrackSelectOverlayMoreOptions,
                isDisabled: _v3
              })
            }), (0, _v7.jsxs)(_v278.MenuList, {
              children: [_v8 && (0, _v7.jsx)(_v276.MenuItem, {
                icon: (0, _v7.jsx)(_v337.OverlayTemplate, {
                  boxSize: "xs"
                }),
                onClick: () => {
                  (0, _v340.sendTrackOverlaySaveAsAction)("top_toolbar"), _v1((0, _v261.setOpenModalIdAction)(_v251.MODAL_IDS.saveAsTeamTemplateModal));
                },
                children: (0, _v63.translate)({
                  singular: "Save overlay as template",
                  dictionary: {
                    es: {
                      singular: "Guardar superposición como plantilla"
                    },
                    "de-DE": {
                      singular: "Overlay als Vorlage speichern"
                    },
                    "fr-FR": {
                      singular: "Enregistrer la superposition en tant que modèle"
                    },
                    "ja-JP": {
                      singular: "オーバーレイをテンプレートとして保存"
                    },
                    "ko-KR": {
                      singular: "오버레이를 템플릿으로 저장"
                    },
                    "pt-BR": {
                      singular: "Salvar sobreposição como modelo"
                    },
                    "zh-CN": {
                      singular: "将视频叠加保存为模板"
                    }
                  }
                })
              }), _v9 && (0, _v7.jsx)(_v276.MenuItem, {
                icon: (0, _v7.jsx)(_v337.OverlayTemplate, {}),
                onClick: () => {
                  _v1((0, _v261.setOpenModalIdAction)(_v251.MODAL_IDS.saveAsSystemTemplateModal));
                },
                children: (0, _v63.translate)({
                  singular: "Save overlay as system template",
                  dictionary: {
                    es: {
                      singular: "Guardar la superposición como una plantilla del sistema"
                    },
                    "de-DE": {
                      singular: "Overlay als Systemvorlage speichern"
                    },
                    "fr-FR": {
                      singular: "Enregistrer la superposition en tant que modèle système"
                    },
                    "ja-JP": {
                      singular: "オーバーレイをシステムテンプレートとして保存"
                    },
                    "ko-KR": {
                      singular: "오버레이를 시스템 템플릿으로 저장"
                    },
                    "pt-BR": {
                      singular: "Salvar sobreposição como modelo de sistema"
                    },
                    "zh-CN": {
                      singular: "将视频叠加保存为系统模板"
                    }
                  }
                })
              }), (0, _v7.jsx)(_v276.MenuItem, {
                icon: (0, _v7.jsx)(_v530.EditPencil, {}),
                onClick: () => _v1((0, _v261.setOpenModalIdAction)(_v251.MODAL_IDS.renameOverlayModal)),
                children: (0, _v63.translate)({
                  singular: "Rename",
                  dictionary: {
                    es: {
                      singular: "Cambiar de nombre"
                    },
                    "de-DE": {
                      singular: "Neu benennen"
                    },
                    "fr-FR": {
                      singular: "Renommer"
                    },
                    "ja-JP": {
                      singular: "名前を変更"
                    },
                    "ko-KR": {
                      singular: "이름 변경"
                    },
                    "pt-BR": {
                      singular: "Renomear"
                    },
                    "zh-CN": {
                      singular: "重新命名"
                    }
                  }
                })
              })]
            })]
          })]
        });
      },
      [_v422.ToolbarType.IFRAME]: ({
        validatedElements: _v0
      }) => {
        let _v1 = _v0[0],
          _v2 = (0, _v235.isIframeVimeoVideoElement)(_v1),
          _v3 = (0, _v235.isIframeUrlElement)(_v1),
          _v4 = (0, _v235.isIframeGoogleMapsElement)(_v1),
          _v5 = _v0.filter(_v235.isIframeVimeoVideoElement);
        return (0, _v7.jsxs)(_v7.Fragment, {
          children: [_v3 && (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.IFRAME_URL,
            content: (0, _v7.jsx)(_v625, {
              validatedElements: _v0
            }),
            icon: (0, _v7.jsx)(_v621.Link, {}),
            title: (0, _v63.translate)({
              singular: "Link",
              dictionary: {
                es: {
                  singular: "Vínculo"
                },
                "fr-FR": {
                  singular: "Lien"
                },
                "ja-JP": {
                  singular: "リンク"
                },
                "ko-KR": {
                  singular: "링크"
                },
                "zh-CN": {
                  singular: "链接"
                }
              }
            }),
            testId: _v181.testIds.iframe.toolbar.linkButton
          }), _v2 && (0, _v7.jsx)(_v633, {
            validatedElements: _v5
          }), _v4 && (0, _v7.jsx)(_v629, {
            validatedElements: _v0
          }), (0, _v7.jsx)(_v495, {
            height: 24
          }), _v2 && (0, _v7.jsxs)(_v7.Fragment, {
            children: [(0, _v7.jsx)(_v552, {
              buttonId: _v493.ToolbarButtons.IFRAME_VIDEO_BEHAVIOR,
              content: (0, _v7.jsx)(_v632, {
                validatedElements: _v5
              }),
              icon: (0, _v7.jsx)(_v622.VideoBehavior, {}),
              tooltipText: (0, _v63.translate)({
                singular: "Video behavior",
                dictionary: {
                  es: {
                    singular: "Comportamiento del video"
                  },
                  "de-DE": {
                    singular: "Wiedergabe-Einstellungen"
                  },
                  "fr-FR": {
                    singular: "Comportement vidéo"
                  },
                  "ja-JP": {
                    singular: "動画の動作"
                  },
                  "ko-KR": {
                    singular: "비디오 동작"
                  },
                  "pt-BR": {
                    singular: "Comportamento do vídeo"
                  },
                  "zh-CN": {
                    singular: "视频行为"
                  }
                }
              }),
              testId: _v181.testIds.iframe.toolbar.linkButton
            }), (0, _v7.jsx)(_v495, {
              height: 24
            })]
          }), (0, _v7.jsx)(_v610, {
            validatedElements: _v0,
            buttonId: _v493.ToolbarButtons.IFRAME_OPACITY,
            testId: "opacity-button-graphic-toolbar",
            propertyName: "opacity"
          }), (0, _v7.jsx)(_v552, {
            buttonId: _v493.ToolbarButtons.IFRAME_ANIMATION,
            content: (0, _v7.jsx)(_v548, {
              validatedElements: _v0,
              title: (0, _v63.translate)({
                singular: "Animation",
                dictionary: {
                  es: {
                    singular: "Animación"
                  },
                  "ja-JP": {
                    singular: "アニメーション"
                  },
                  "ko-KR": {
                    singular: "애니메이션"
                  },
                  "pt-BR": {
                    singular: "Animação"
                  },
                  "zh-CN": {
                    singular: "动画"
                  }
                }
              }),
              animationKeyName: "animationName"
            }),
            icon: (0, _v7.jsx)(_v534, {}),
            testId: _v181.testIds.iframe.toolbar.animationButton,
            tooltipText: (0, _v63.translate)({
              singular: "Animation",
              dictionary: {
                es: {
                  singular: "Animación"
                },
                "ja-JP": {
                  singular: "アニメーション"
                },
                "ko-KR": {
                  singular: "애니메이션"
                },
                "pt-BR": {
                  singular: "Animação"
                },
                "zh-CN": {
                  singular: "动画"
                }
              }
            })
          })]
        });
      }
    };
  var _v686 = _v0.i(0);
  let _v687 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        {
          isReplacing: _v1
        } = (0, _v483.useReplaceElement)(),
        _v2 = (0, _v168.useAppSelector)(_v366.selectedElementsIdsSelector),
        _v3 = (0, _v168.useAppSelector)(_v366.selectedElementsSelector),
        _v4 = (0, _v168.useAppSelector)(_v176.isInteractiveSelector),
        _v5 = (0, _v168.useAppSelector)(_v167.isLoadingStoryboardSelector),
        _v6 = (0, _v8.useRef)({
          selectedCEIds: _v2
        }),
        _v7 = (0, _v491.default)(_v6.current.selectedCEIds, _v2),
        _v8 = (0, _v168.useAppSelector)(_v494.currentToolbarSelector),
        _v9 = _v8 === _v422.ToolbarType.GRAPHICS ? [_v417.CompositionElementCategoryType.GRAPHICS] : _v8 === _v422.ToolbarType.VIDEO ? [_v417.CompositionElementCategoryType.VIDEO] : _v8 === _v422.ToolbarType.IMAGE_HOTSPOT ? [_v417.CompositionElementCategoryType.IMAGE_HOTSPOT] : _v8 === _v422.ToolbarType.IMAGE ? [_v417.CompositionElementCategoryType.IMAGE] : _v8 === _v422.ToolbarType.TEXT ? [_v417.CompositionElementCategoryType.TEXT] : _v8 === _v422.ToolbarType.SOLID ? [_v417.CompositionElementCategoryType.SOLID] : _v8 === _v422.ToolbarType.SOUND ? [_v417.CompositionElementCategoryType.SOUND] : _v8 === _v422.ToolbarType.POLL ? [_v417.CompositionElementCategoryType.POLL] : _v8 === _v422.ToolbarType.BUTTON ? [_v417.CompositionElementCategoryType.BUTTON] : _v8 === _v422.ToolbarType.OVERLAY ? [_v417.CompositionElementCategoryType.OVERLAY] : _v8 === _v422.ToolbarType.IFRAME ? [_v417.CompositionElementCategoryType.IFRAME] : _v8 === _v422.ToolbarType.CROP ? [_v417.CompositionElementCategoryType.VIDEO, _v417.CompositionElementCategoryType.IMAGE, _v417.CompositionElementCategoryType.IMAGE_HOTSPOT] : _v8 === _v422.ToolbarType.REPLACE ? [_v417.CompositionElementCategoryType.VIDEO, _v417.CompositionElementCategoryType.IMAGE, _v417.CompositionElementCategoryType.GRAPHICS, _v417.CompositionElementCategoryType.IMAGE_HOTSPOT] : [],
        _v10 = (0, _v8.useMemo)(() => _v3.filter(_v0 => {
          let _v1 = (0, _v235.getCategoryType)({
            type: _v0.type,
            interactiveHotspot: (0, _v235.isImageHotspot)(_v0)
          });
          return _v9.includes(_v1);
        }), [_v3, _v9]);
      (0, _v686.default)(({
        selectionType: _v0,
        isMultiSelect: _v1
      }) => {
        if (_v1 && (0, _v235.isReplaceableType)(_v0) && _v7) return;
        let _v2 = _v0 => {
          _v0 !== _v8 && _v0((0, _v494.showToolbarAction)(_v0));
        };
        (_v6.current.selectedCEIds = _v2, _v0 === _v417.CompositionElementCategoryType.TIME_TRIGGER) ? _v0((0, _v494.hideToolbarAction)()) : _v0 === _v417.CompositionElementCategoryType.MIXED && _v1 && _v3.map(_v0 => (0, _v235.getCategoryType)({
          type: _v0.type,
          interactiveHotspot: (0, _v235.isImageHotspot)(_v0)
        })).every(_v0 => _v0 === _v417.CompositionElementCategoryType.IMAGE || _v0 === _v417.CompositionElementCategoryType.VIDEO) ? _v2(_v422.ToolbarType.IMAGE) : _v0 === _v417.CompositionElementCategoryType.VIDEO ? _v2(_v422.ToolbarType.VIDEO) : _v0 !== _v417.CompositionElementCategoryType.IMAGE_HOTSPOT || _v1 ? _v0 !== _v417.CompositionElementCategoryType.BUTTON || _v1 ? _v0 === _v417.CompositionElementCategoryType.IMAGE ? _v2(_v422.ToolbarType.IMAGE) : _v0 !== _v417.CompositionElementCategoryType.TEXT || _v1 ? _v0 !== _v417.CompositionElementCategoryType.GRAPHICS || _v1 ? _v0 === _v417.CompositionElementCategoryType.EMPTY ? _v2(_v422.ToolbarType.CANVAS) : _v0 !== _v417.CompositionElementCategoryType.SOLID || _v1 ? _v0 !== _v417.CompositionElementCategoryType.POLL || _v1 ? _v0 !== _v417.CompositionElementCategoryType.SOUND || _v1 ? _v0 !== _v417.CompositionElementCategoryType.OVERLAY || _v1 ? _v0 !== _v417.CompositionElementCategoryType.IFRAME || _v1 ? (_v0 === _v417.CompositionElementCategoryType.MIXED || _v1) && _v0((0, _v494.hideToolbarAction)()) : _v2(_v422.ToolbarType.IFRAME) : _v2(_v422.ToolbarType.OVERLAY) : _v2(_v422.ToolbarType.SOUND) : _v2(_v422.ToolbarType.POLL) : _v2(_v422.ToolbarType.SOLID) : _v2(_v422.ToolbarType.GRAPHICS) : _v2(_v422.ToolbarType.TEXT) : _v2(_v422.ToolbarType.BUTTON) : _v2(_v422.ToolbarType.IMAGE_HOTSPOT);
      });
      let _v11 = _v8 ? _v685[_v8] : null;
      _v10.length || (_v11 = _v526);
      let _v12 = !!_v8 && !_v5 && !(_v4 && !_v3.length);
      return (0, _v7.jsx)(_v527, {
        testId: "toolbar",
        isVisible: _v12,
        currentToolbar: _v8,
        children: _v11 && _v12 && (0, _v7.jsx)(_v11, {
          validatedElements: _v10
        })
      });
    },
    _v688 = {
      height: "100%",
      width: "100%",
      background: "transparent",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      position: "relative"
    },
    _v689 = () => {
      let _v0 = (0, _v168.useAppDispatch)(),
        _v1 = (0, _v168.useAppSelector)(_v222.isEditorUITransitioningSelector),
        _v2 = (0, _v8.useRef)(null),
        _v3 = (0, _v8.useCallback)(() => {
          _v0((0, _v366.resetSelectionAction)());
        }, [_v0]);
      return (0, _v7.jsx)(_v367.default, {
        onContextMenu: _v3,
        children: (0, _v7.jsxs)(_v75.Flex, {
          "data-testid": _v181.testIds.mainContainer,
          ref: _v2,
          className: _v365.STAGE_DRAG_SELECT_ALLOWED_CLASS,
          ..._v688,
          ...{
            opacity: +!_v1,
            transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out"
          },
          children: [(0, _v7.jsx)(_v687, {}), (0, _v7.jsx)(_v487, {}), (0, _v7.jsx)(_v490, {
            outerRef: _v2
          })]
        })
      });
    };
  var _v690 = _v0.i(0);
  let _v691 = () => (0, _v7.jsxs)(_v76.Modal, {
      isOpen: !0,
      onClose: () => null,
      children: [(0, _v7.jsx)(_v80.ModalOverlay, {}), (0, _v7.jsx)(_v79.ModalContent, {
        backgroundColor: "transparent !important",
        boxShadow: "none",
        width: "fit-content",
        children: (0, _v7.jsx)(_v179.Spinner, {
          size: "xl"
        })
      })]
    }),
    _v692 = (0, _v8.lazy)(() => _v0.A(0).then(({
      RecordStudio: _v0
    }) => ({
      default: _v0
    }))),
    _v693 = (0, _v8.memo)(() => {
      let {
          isShown: _v0,
          integrationConfiguration: _v1
        } = (0, _v690.useRecord)(),
        _v2 = (0, _v168.useAppSelector)(_v290.folderUriSelector);
      return _v0 ? (0, _v7.jsx)(_v8.Suspense, {
        fallback: (0, _v7.jsx)(_v691, {}),
        children: (0, _v7.jsx)(_v692, {
          zIndex: 200,
          mode: "integration",
          sessionId: _v253.default.videoHash,
          uploadToAccountId: _v253.default.teamOwnerId,
          uploadToFolderUri: _v2,
          integrationConfiguration: _v1
        })
      }) : null;
    }),
    _v694 = _v10.default.div.withConfig({
      displayName: "DraggedOverlayElement__DraggedElement",
      componentId: "sc-5bf33c3c-0"
    })`
  .dragged {
    &:before,
    &:after {
      display: none;
    }

    pointer-events: none;

    position: static;
    opacity: 40%;

    img {
      opacity: 1;
    }

    video {
      opacity: 0;
    }
  }
`,
    _v695 = ({
      elementNode: _v0
    }) => {
      let _v1 = (0, _v8.useRef)(null);
      return (0, _v8.useEffect)(() => {
        _v0 ? (_v0.removeAttribute("data-id"), _v0.removeAttribute("id"), _v0.classList.add("dragged"), _v1?.current?.appendChild(_v0)) : _v1?.current?.hasChildNodes() && _v1?.current?.removeChild(_v1?.current?.firstChild);
      }, [_v0]), (0, _v7.jsx)(_v694, {
        ref: _v1
      });
    };
  var _v696 = _v0.i(0);
  let _v697 = "playhead";
  var _v698 = _v0.i(0),
    _v699 = _v0.i(0),
    _v700 = _v0.i(0),
    _v701 = _v0.i(0);
  let _v702 = {
      cursor: "not-allowed"
    },
    _v703 = (_v0, _v1) => _v0.data.current?.accepts.includes(_v1.data.current?.type) && _v0.data.current.type === _v478.DndDropAreaType.TIMELINE,
    _v704 = (_v0, _v1) => _v1.length > 1 && _v1.includes(_v0),
    _v705 = _v0 => {
      let _v1 = _v0?.cloneNode(!0),
        _v2 = _v0?.querySelector("canvas");
      if (_v0 && null !== _v2) {
        let _v0 = _v1.querySelector("canvas");
        _v2 && _v0 && _v0.getContext("2d")?.drawImage(_v2, 0, 0);
      }
      return _v1;
    },
    _v706 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v168.useAppDispatch)(),
        _v2 = (0, _v168.useAppSelector)(_v0 => _v0.timeline.secondsPerPixel),
        _v3 = (0, _v168.useAppSelector)(_v0 => _v0.timeline.guides.isSnap),
        _v4 = (0, _v168.useAppSelector)(_v0 => _v0.timeline.isDropAllowed),
        _v5 = (0, _v168.useAppSelector)(_v366.selectedElementsIdsSelector),
        _v6 = (0, _v8.useRef)({}),
        _v7 = (0, _v8.useRef)(null),
        _v8 = (0, _v8.useRef)(null),
        _v9 = (0, _v8.useRef)(0),
        _v10 = (0, _v8.useRef)(-1),
        [_v11, _v12] = (0, _v8.useState)([]),
        [_v13, _v14] = (0, _v8.useState)([]),
        [_v15, _v16] = (0, _v8.useState)({
          node: null
        }),
        {
          getTimePoints: _v17,
          getLayerTimePoints: _v18,
          getPlayheadTimePoint: _v19
        } = ((_v0, _v1) => {
          let _v2 = (0, _v168.useAppSelector)(_v167.nonHiddenLayersSelector),
            {
              getCurrentTimeFromRef: _v3
            } = (0, _v252.useDragonfly)(),
            _v4 = (0, _v8.useMemo)(() => _v0 ? [] : (0, _v699.layersToTimepoints)(_v2), [_v0, _v2]);
          return {
            getTimePoints: (0, _v8.useCallback)((_v0, _v1) => {
              if (!_v4) return [];
              let _v2 = _v4.filter(_v0 => {
                let _v1 = !0;
                return _v0.ceId && (_v1 = _v1 && !_v0.includes(_v0.ceId)), _v1;
              });
              if (_v4.sort((_v0, _v1) => _v0.value - _v1.value), _v1.includes(_v697)) {
                let _v0 = void 0 !== _v1 && _v1 > -1 ? _v1 : _v3();
                _v2.unshift({
                  value: _v0,
                  type: _v698.SnapTimePointType.PLAYHEAD
                });
              }
              return _v2;
            }, [_v4, _v1, _v3]),
            getLayerTimePoints: (0, _v8.useCallback)((_v0, _v1, _v2 = [_v698.SnapTimePointType.START, _v698.SnapTimePointType.END]) => _v4 ? _v4.filter(_v0 => {
              let _v1 = _v0.layerId === _v1;
              return _v1 = _v1 && _v2.includes(_v0.type), _v0.ceId && (_v1 = _v1 && !_v0.includes(_v0.ceId)), _v1;
            }) : [], [_v4]),
            getPlayheadTimePoint: () => ({
              value: _v3(),
              type: _v698.SnapTimePointType.PLAYHEAD
            })
          };
        })(!_v3, (0, _v8.useMemo)(() => [_v697, "storyboard_elements"], [])),
        _v20 = (0, _v368.useSensor)(_v368.MouseSensor, {
          activationConstraint: _v311.DEFAULT_DND_CONSTRAINTS
        }),
        _v21 = (0, _v368.useSensors)(_v20),
        _v22 = (0, _v8.useCallback)(_v0 => {
          let _v1,
            _v2 = _v0.active.id,
            _v3 = _v0.active.data.current?.type;
          _v1 = _v3 === _v478.DnDItemType.TIMELINE_ELEMENT ? `[data-testid="${_v181.testIds.timelineContainer}"]` : "body";
          let _v4 = document.querySelector(_v1);
          if (_v3 !== _v478.DnDItemType.INTERACTIVE_TIMESTAMP && _v4) if (_v704(_v2, _v5)) {
            let _v0 = _v4.querySelector(`[data-id="${_v2}"]`),
              _v1 = _v0?.getBoundingClientRect();
            if (!_v1) return;
            let _v2 = [..._v4.querySelectorAll(`[data-testid="${_v181.testIds.timeline.transition}"]`)],
              _v3 = [],
              _v4 = {};
            _v5.forEach(_v0 => {
              let _v1 = _v4.querySelector(`[data-id="${_v0}"]`);
              if (!_v1) return null;
              let _v2 = _v2 === _v0,
                _v3 = _v1.getBoundingClientRect(),
                _v4 = 0,
                _v5 = _v705(_v1);
              _v2 ? _v4 = 0 : (_v5.style.top = `${_v3.top - _v1.top}px`, _v4 = _v3.left - _v1.left), _v5.style.left = `${_v4}px`;
              let [_v6, _v7, _v8] = ((_v0, _v1, _v2) => {
                let _v3 = _v1.find(_v0 => {
                  let _v1 = _v0.getAttribute("data-elements");
                  return !!_v1 && _v1.indexOf(_v0) > -1;
                });
                if (_v3) {
                  let _v0 = !1,
                    _v1 = !1,
                    _v2 = _v3.getAttribute("data-elements");
                  if (_v2) {
                    let _v0 = _v2.split("-"),
                      _v1 = _v0[0],
                      _v2 = _v0[1];
                    if (!_v1 || !_v2) return [null, "", !1];
                    if (_v0 = _v2.includes(_v1) && _v2.includes(_v2), _v1 = _v0 === _v1, _v0) return [_v705(_v3), _v2, _v1];
                  }
                }
                return [null, "", !1];
              })(_v0, _v2, _v5);
              _v6 && !_v4[_v7] && (_v6.style.top = _v5.style.top, _v6.style.left = _v8 ? `${_v4 + _v3.width}px` : _v5.style.left, _v4[_v7] = _v6), _v3.push(_v5);
            });
            let _v5 = document.createElement("div");
            _v5.append(..._v3), _v5.append(...Object.values(_v4)), _v16({
              node: _v5
            });
          } else _v16({
            node: _v705(_v4.querySelector(`[data-id="${_v2}"]`))
          });
        }, [_v5]),
        _v23 = (0, _v8.useCallback)(_v0 => {
          let {
              active: _v1,
              over: _v2
            } = _v0,
            _v3 = _v0.active.id;
          if (_v2?.data.current && _v1?.data.current && _v703(_v2, _v1) && !_v704(_v3, _v5) && _v13.length > 0) {
            let {
                type: _v0,
                ceType: _v1
              } = _v1.data.current,
              _v2 = _v315.default.getState().storyboard.layers.find(_v0 => _v0.id === _v2.data.current?.layerId),
              _v3 = _v2 && (0, _v421.isMixingSoundAndVisual)(_v2.type, _v1 || _v0),
              _v4 = _v1.rect.current.translated,
              _v5 = _v2.rect;
            if (_v4 && _v5 && !_v3) {
              let _v0 = _v29(_v1.data.current.id || _v1.data.current.elementId),
                _v1 = null !== _v0 ? _v0 : _v4.left - _v5.left,
                _v2 = _v1 + _v4.width,
                _v3 = _v19(),
                {
                  snapPoint: _v4,
                  collisionProps: _v5
                } = (0, _v701.getCollisionElement)(_v1, _v2, _v13, _v3, _v2, _v10.current);
              (_v5?.elementId !== _v8.current?.elementId || _v5?.elementOffset !== _v8.current?.elementOffset) && (_v4 ? _v1((0, _v700.setCollisionPointsTimelineAction)([_v4])) : _v1((0, _v700.setCollisionPointsTimelineAction)([]))), _v5 ? _v8.current = {
                elementId: _v5.elementId,
                elementOffset: _v5.elementOffset,
                layerId: _v5.layerId
              } : _v8.current = null;
            }
          } else _v8.current = null, _v1((0, _v700.setCollisionPointsTimelineAction)([]));
          _v2?.data.current && _v1?.data.current && _v703(_v2, _v1) && (_v7.current && !_v8.current ? _v1((0, _v700.setSnapPointsTimelineAction)([_v7.current])) : _v1((0, _v700.setSnapPointsTimelineAction)([])));
        }, [_v1, _v19, _v13, _v2, _v5]),
        _v24 = (0, _v8.useCallback)(() => {
          _v16({
            node: null
          }), _v12([]), _v14([]), _v1((0, _v700.setCollisionPointsTimelineAction)([])), _v1((0, _v700.setSnapPointsTimelineAction)([])), _v1((0, _v700.setIsTimelineVerticalScrollDisabled)(!1));
        }, [_v1]),
        _v25 = (0, _v8.useCallback)(_v0 => {
          let {
            over: _v1,
            active: _v2
          } = _v0;
          if (_v1?.data.current && _v2?.data.current && _v703(_v1, _v2)) {
            if (_v3) {
              let _v0 = _v2.data.current.elementId,
                _v1 = _v0 ? [_v0] : [];
              _v704(_v0, _v5) && (_v1 = _v5), _v12(_v17(_v1));
            }
            _v1.data.current.layerId && !_v1.data.current.layerOffset ? _v14(_v18(_v2.data.current.elementId ? [_v2.data.current.elementId] : [], _v1.data.current.layerId, [_v698.SnapTimePointType.START])) : _v14([]);
          } else _v12([]), _v14([]), _v1((0, _v700.setSnapPointsTimelineAction)([]));
        }, [_v1, _v18, _v17, _v3, _v5]),
        _v26 = (0, _v8.useCallback)(({
          transform: _v0,
          over: _v1,
          active: _v2
        }) => {
          let _v3 = _v0.x;
          if (_v1?.data.current && _v2?.data.current && _v703(_v1, _v2) && _v11.length > 0) {
            let _v0 = _v2.data.current?.type,
              _v1 = _v2.rect.current.translated,
              _v2 = _v1.rect,
              _v3 = _v1.left - _v2.rect.current.initial.left,
              _v4 = _v1.left - _v2.left,
              _v5 = _v1.left + _v1.width - _v2.left,
              {
                snapPoint: _v6,
                pxPositionSnapped: _v7
              } = (0, _v701.getSnappedPxValue)(_v4, _v11, _v2),
              _v8 = Math.abs(_v7 - _v4),
              _v9 = 0,
              _v10 = 0,
              _v11 = null;
            if (_v0 === _v478.DnDItemType.TIMELINE_ELEMENT) {
              let {
                snapPoint: _v0,
                pxPositionSnapped: _v1
              } = (0, _v701.getSnappedPxValue)(_v5, _v11, _v2);
              _v9 = Math.abs(_v1 - _v5), _v10 = _v1 - _v5, _v11 = _v0;
            }
            if (_v8 > 0 || _v9 > 0) {
              let _v0 = 0;
              _v8 > 0 && 0 == _v9 || _v8 > 0 && _v9 > 0 && _v8 < _v9 ? (_v0 = _v7 - _v4, _v6 && (_v7.current = _v6)) : (_v9 > 0 && 0 == _v8 || _v9 > 0 && _v8 > 0 && _v9 < _v8) && (_v0 = _v10, _v11 && (_v7.current = _v11)), _v3 = _v3 + _v0, _v6.current = {
                [_v2?.data.current.id || _v2?.data.current.elementId]: _v4 + _v0
              };
            } else _v6.current = {}, _v7.current = null;
          }
          return _v9.current !== _v0.x && (_v10.current = _v9.current > _v0.x ? -1 : 1), _v9.current = _v0.x, {
            ..._v0,
            x: _v3
          };
        }, [_v11, _v2]),
        _v27 = (0, _v8.useCallback)(({
          active: _v0,
          transform: _v1
        }) => {
          let _v2 = _v0?.data.current?.ceType || _v0?.data.current?.type;
          return _v2 !== _v417.CompositionElementType.TIME_TRIGGER && _v2 !== _v478.DnDItemType.INTERACTIVE_TIMESTAMP ? _v1 : (_v1((0, _v700.setIsTimelineVerticalScrollDisabled)(!0)), {
            ..._v1,
            y: 0
          });
        }, [_v1]),
        _v28 = (0, _v8.useMemo)(() => [_v26, _v27], [_v27, _v26]),
        _v29 = _v0 => _v6.current.hasOwnProperty(_v0) ? _v6.current[_v0] : null;
      return (0, _v7.jsxs)(_v368.DndContext, {
        sensors: _v21,
        collisionDetection: _v368.pointerWithin,
        onDragStart: _v22,
        onDragEnd: _v24,
        onDragOver: _v25,
        onDragMove: _v23,
        measuring: {
          droppable: {
            strategy: _v368.MeasuringStrategy.Always
          }
        },
        children: [(0, _v7.jsx)(_v696.DndProviderContext.Provider, {
          value: {
            getOverrideForId: _v29,
            resetDragValues: () => {
              _v6.current = {}, _v8.current = null;
            },
            getCollisionElementProps: () => _v8.current
          },
          children: _v0
        }), (0, _v7.jsx)(_v368.DragOverlay, {
          dropAnimation: null,
          modifiers: _v28,
          style: _v4 ? void 0 : _v702,
          children: _v15.node ? (0, _v7.jsx)(_v695, {
            elementNode: _v15.node
          }) : null
        })]
      });
    },
    _v707 = () => {
      let _v0 = (0, _v168.useAppSelector)(_v0 => _v0.teamTemplates.isTeamTemplateDoneSaving),
        _v1 = (0, _v168.useAppSelector)(_v222.isSavingOverlayTemplateSelector);
      return (0, _v168.useAppSelector)(_v296.isStoryboardSavingOrSavedSelector) || _v1 || !_v0 ? (0, _v7.jsx)(_v691, {}) : null;
    };
  var _v708 = _v0.i(0),
    _v709 = _v0.i(0);
  let _v710 = () => {
      let {
          notifications: _v0
        } = (0, _v168.useAppSelector)(_v0 => _v0.notifications),
        _v1 = (0, _v708.useToast)(),
        _v2 = (0, _v168.useAppDispatch)();
      return (0, _v8.useEffect)(() => {
        _v0.forEach(_v0 => {
          _v1(_v0);
        }), _v0.length && _v2((0, _v709.clearNotificationsAction)());
      }, [_v2, _v0, _v1]), null;
    },
    _v711 = (0, _v8.lazy)(() => _v0.A(0)),
    _v712 = (0, _v8.lazy)(() => _v0.A(0)),
    _v713 = (0, _v8.memo)(() => {
      let [_v0] = (0, _v178.useToken)("colors", ["background"]);
      return (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsxs)(_v180.EditorContainer, {
          backgroundColor: _v0,
          children: [(0, _v7.jsx)(_v706, {
            children: (0, _v7.jsx)(_v184.FocusAreaProvider, {
              children: (0, _v7.jsxs)(_v185.TimelineProvider, {
                children: [(0, _v7.jsx)(_v362, {}), (0, _v7.jsxs)(_v180.Body, {
                  children: [(0, _v7.jsx)(_v711, {}), (0, _v7.jsx)(_v364.InspectorManager, {}), (0, _v7.jsxs)(_v180.Content, {
                    children: [(0, _v7.jsx)(_v209.ReplaceOverlay, {}), (0, _v7.jsx)(_v689, {}), (0, _v7.jsx)(_v712, {}), (0, _v7.jsx)(_v208, {}), (0, _v7.jsx)(_v183, {})]
                  })]
                })]
              })
            })
          }), (0, _v7.jsx)(_v193, {}), (0, _v7.jsx)(_v693, {}), (0, _v7.jsx)(_v710, {}), (0, _v7.jsx)(_v707, {})]
        }), (0, _v7.jsx)(_v180.GlobalStyles, {})]
      });
    });
  _v0.i(0);
  var _v714 = _v0.i(0),
    _v715 = _v0.i(0),
    _v716 = _v0.i(0),
    _v717 = _v0.i(0),
    _v718 = _v0.i(0),
    _v719 = _v0.i(0),
    _v720 = _v0.i(0),
    _v721 = _v0.i(0),
    _v722 = _v0.i(0),
    _v723 = _v0.i(0),
    _v724 = _v0.i(0),
    _v725 = _v0.i(0),
    _v726 = _v0.i(0),
    _v727 = _v0.i(0),
    _v728 = _v0.i(0),
    _v729 = _v0.i(0),
    _v730 = _v0.i(0),
    _v731 = _v0.i(0);
  let _v732 = function () {
    let _v0 = (0, _v168.useAppSelector)(_v0 => !!_v0.history.undoSnapshots.length),
      _v1 = (0, _v168.useAppSelector)(_v0 => _v0.teamTemplates.isShowTeamTemplatesModal),
      _v2 = (0, _v168.useAppSelector)(_v0 => _v0.history.undoSnapshots.length > 0),
      _v3 = (0, _v168.useAppSelector)(_v296.isStoryboardSavedSelector),
      _v4 = (0, _v168.useAppSelector)(_v223.teamSwitcherSelector),
      _v5 = (0, _v168.useAppSelector)(_v0 => _v0.alert.notificationName),
      _v6 = _v5 === _v313.notificationName.partnerConnect;
    (0, _v8.useEffect)(() => {
      let _v0 = _v0 => {
        !_v0 || !_v2 || _v3 || _v1 || _v4 || _v6 || (_v0.preventDefault(), _v0 && (_v0.returnValue = `${(0, _v63.translate)({
          singular: "Leave site?",
          dictionary: {
            es: {
              singular: "¿Salir del sitio?"
            },
            "de-DE": {
              singular: "Website verlassen?"
            },
            "fr-FR": {
              singular: "Quitter le site ?"
            },
            "ja-JP": {
              singular: "サイトを離れますか？"
            },
            "ko-KR": {
              singular: "사이트에서 나갈까요?"
            },
            "pt-BR": {
              singular: "Sair do site?"
            },
            "zh-CN": {
              singular: "离开网站？"
            }
          }
        })} 
 ${(0, _v63.translate)({
          singular: "Changes you made may not be saved.",
          dictionary: {
            es: {
              singular: "Los cambios realizados pueden no haberse guardado."
            },
            "de-DE": {
              singular: "Deine Änderungen werden eventuell nicht gespeichert."
            },
            "fr-FR": {
              singular: "Vos modifications ne seront peut-être pas enregistrées."
            },
            "ja-JP": {
              singular: "変更内容は保存されない場合があります。"
            },
            "ko-KR": {
              singular: "변경사항이 저장되지 않을 수 있습니다."
            },
            "pt-BR": {
              singular: "As alterações feitas podem não ser salvas."
            },
            "zh-CN": {
              singular: "您所做的更改可能无法保存。"
            }
          }
        })}`));
      };
      return window.addEventListener("beforeunload", _v0), () => {
        window.removeEventListener("beforeunload", _v0);
      };
    }, [_v5, _v0, _v2, _v6, _v1, _v3, _v4]);
  };
  var _v733 = _v0.i(0),
    _v734 = _v0.i(0),
    _v735 = _v0.i(0);
  let _v736 = ({
      videoHash: _v0,
      useRevision: _v1 = !1,
      vimeoVideoId: _v2,
      featureFlags: _v3,
      videoVersionId: _v4,
      videoUploadAttemptId: _v5,
      isThirdPartyIntegration: _v6
    }) => {
      let _v7 = (0, _v168.useAppDispatch)();
      return (({
        videoHash: _v0,
        useRevision: _v1,
        vimeoVideoId: _v2,
        featureFlags: _v3,
        videoVersionId: _v4,
        videoUploadAttemptId: _v5,
        isThirdPartyIntegration: _v6
      }) => {
        let _v7 = (0, _v168.useAppDispatch)(),
          _v8 = (0, _v8.useContext)(_v92.ViewerContext)?.jwt,
          _v9 = (0, _v168.useAppSelector)(_v167.videoSessionIdSelector),
          _v10 = (0, _v168.useAppSelector)(_v373.fontsSelector),
          {
            trackEditorPageDisplayed: _v11
          } = (0, _v325.useEditorTracking)(),
          _v12 = (0, _v168.useAppSelector)(_v176.isInteractiveSelector),
          _v13 = (0, _v217.useIsStaff)(),
          {
            initFeatureFlags: _v14
          } = _v284(),
          [_v15, {
            data: _v16,
            isSuccess: _v17
          }] = (0, _v296.useLazyFetchStoryboardQuery)(),
          [_v18] = (0, _v296.useLazyInitStoryboardQuery)(),
          [_v19] = (0, _v296.useLazyInitStoryboardFromClipQuery)(),
          [_v20] = (0, _v735.useLazyFetchGraphicsCategoriesQuery)(),
          [_v21, {
            isUninitialized: _v22
          }] = (0, _v734.useLazyFetchFontsQuery)(),
          {
            handleKeyboardShortcuts: _v23
          } = (() => {
            let _v0 = (0, _v168.useAppDispatch)(),
              _v1 = (0, _v168.useAppSelector)(_v366.selectedElementsIdsSelector),
              _v2 = (0, _v168.useAppSelector)(_v366.selectedElementsSelector),
              _v3 = (0, _v168.useAppSelector)(_v728.clipboardElementsSelector),
              _v4 = (0, _v168.useAppSelector)(_v372.pausedSelector),
              {
                isShown: _v5
              } = (0, _v168.useAppSelector)(_v729.recordSelector),
              {
                active: _v6
              } = (0, _v168.useAppSelector)(_v0 => _v0.alert),
              _v7 = "" !== (0, _v168.useAppSelector)(_v261.openModalIdSelector),
              {
                undo: _v8,
                redo: _v9
              } = _v356("keyboard"),
              {
                DFRef: _v10,
                play: _v11,
                pause: _v12,
                seek: _v13
              } = (0, _v252.useDragonfly)(),
              _v14 = (0, _v168.useAppSelector)(_v726.focusAreaSelector),
              {
                selectedTransition: _v15,
                deleteSelectedTransitionElement: _v16
              } = (0, _v722.default)(),
              _v17 = (0, _v168.useAppSelector)(_v167.storyboardIdSelector),
              {
                trackEditorAssetDeleted: _v18
              } = (0, _v325.useEditorTracking)(),
              _v19 = (0, _v8.useRef)(!1),
              _v20 = (0, _v8.useCallback)(() => {
                _v19.current = !1, window.removeEventListener("mouseup", _v20);
              }, []),
              _v21 = (0, _v8.useCallback)((_v0, _v1) => {
                _v0((({
                  ceId: _v0,
                  direction: _v1
                }) => (_v0, _v1) => {
                  let _v2 = _v1(),
                    _v3 = (0, _v726.focusAreaSelector)(_v2),
                    _v4 = (0, _v167.elementByIdSelector)(_v2, _v0),
                    _v5 = (0, _v390.stageSizeSelector)(_v2);
                  if (!_v4 || _v3 === _v485.FocusAreaType.TRANSCRIPT) return;
                  let _v6 = 1 / (_v1 === _v504.KEYBOARD_KEYS.UP || _v1 === _v504.KEYBOARD_KEYS.DOWN ? _v5.height : _v5.width),
                    _v7 = {
                      ..._v4.rect,
                      ...(_v1 === _v504.KEYBOARD_KEYS.UP && {
                        y: _v4.rect.y - _v6
                      }),
                      ...(_v1 === _v504.KEYBOARD_KEYS.DOWN && {
                        y: _v4.rect.y + _v6
                      }),
                      ...(_v1 === _v504.KEYBOARD_KEYS.RIGHT && {
                        x: _v4.rect.x + _v6
                      }),
                      ...(_v1 === _v504.KEYBOARD_KEYS.LEFT && {
                        x: _v4.rect.x - _v6
                      })
                    };
                  _v0((0, _v167.updateElementAction)({
                    ceId: _v0,
                    element: {
                      rect: _v7
                    }
                  }));
                })({
                  ceId: _v0,
                  direction: _v1
                }));
              }, [_v0]),
              _v22 = (0, _v8.useCallback)(_v0 => {
                let {
                    metaKey: _v1,
                    shiftKey: _v2,
                    ctrlKey: _v3,
                    code: _v4,
                    target: _v5
                  } = _v0,
                  _v6 = _v315.default.getState().storyboard.layers,
                  _v7 = (0, _v317.getDurationFromLayers)(_v6);
                if (!_v5 && !_v7 && !_v6) {
                  if ((_v4 === _v504.KEYBOARD_KEYS.TAB && (_v19.current = !0, window.removeEventListener("mouseup", _v20), window.addEventListener("mouseup", _v20)), !_v5.classList?.contains("ql-editor")) && !_v723.INPUT_TAGS.includes(_v5.tagName)) {
                    if (_v4 !== _v504.KEYBOARD_KEYS.SPACE || 0 === _v7 || _v19.current || (_v0.stopPropagation(), _v0.preventDefault(), document.activeElement?.blur(), _v4 ? (_v7 === _v10.current?.currentTime && _v13(0), _v11(), (0, _v192.sendTrackPlayPauseVideo)({
                      totalDuration: _v7,
                      action: "play",
                      via: "keyboard"
                    })) : (_v12(), (0, _v192.sendTrackPlayPauseVideo)({
                      totalDuration: _v7,
                      action: "pause",
                      via: "keyboard"
                    }))), _v4 === _v504.KEYBOARD_KEYS.ESC && (_v19.current = !1, window.removeEventListener("mouseup", _v20), document.activeElement?.blur()), _v723.TAB_TRIGGERED_TAGS.includes(_v5.tagName) && !_v19.current && _v4 !== _v504.KEYBOARD_KEYS.M) {
                      _v0.stopPropagation(), _v0.preventDefault();
                      return;
                    }
                    if ((_v1 || _v3) && !_v2 && "KeyZ" === _v4 && _v8(), (_v1 && _v2 && "KeyZ" === _v4 || _v3 && "KeyY" === _v4) && _v9(), _v1 && _v1.length > 0) {
                      if ((_v1 && "KeyF" === _v4 || _v3 && "KeyF" === _v4) && (_v0.preventDefault(), _v0((0, _v167.changeElementLayerByOffsetAction)({
                        ceIds: _v1,
                        offset: 1 / 0
                      }))), _v4 === _v504.KEYBOARD_KEYS.UP && (_v1 || _v3 ? _v0((0, _v167.changeElementLayerByOffsetAction)({
                        ceIds: _v1,
                        offset: 1
                      })) : _v1.forEach(_v0 => {
                        _v21(_v0, _v504.KEYBOARD_KEYS.UP);
                      })), _v4 === _v504.KEYBOARD_KEYS.DOWN && (_v1 || _v2 ? _v0((0, _v167.changeElementLayerByOffsetAction)({
                        ceIds: _v1,
                        offset: -1
                      })) : _v1.forEach(_v0 => {
                        _v21(_v0, _v504.KEYBOARD_KEYS.DOWN);
                      })), _v4 === _v504.KEYBOARD_KEYS.LEFT && _v1.forEach(_v0 => {
                        _v21(_v0, _v504.KEYBOARD_KEYS.LEFT);
                      }), _v4 === _v504.KEYBOARD_KEYS.RIGHT && _v1.forEach(_v0 => {
                        _v21(_v0, _v504.KEYBOARD_KEYS.RIGHT);
                      }), (_v1 && "KeyB" === _v4 || _v3 && "KeyB" === _v4) && _v0((0, _v167.changeElementLayerByOffsetAction)({
                        ceIds: _v1,
                        offset: -1 / 0
                      })), (_v1 && "KeyC" === _v4 || _v3 && "KeyC" === _v4) && _v0((0, _v728.copySelectedCEsAction)()), _v4 === _v504.KEYBOARD_KEYS.M) {
                        _v0.stopPropagation(), _v0.preventDefault();
                        let _v0 = _v2.filter(_v0 => _v0.type === _v417.CompositionElementType.SOUND || _v0.type === _v417.CompositionElementType.VIDEO),
                          _v1 = !0;
                        _v0.map(_v0 => {
                          let _v1 = (_v0.type === _v417.CompositionElementType.SOUND, _v0);
                          return _v1.muted || (_v1 = !1), _v1;
                        }).forEach(_v0 => {
                          _v0((0, _v167.updateElementAction)({
                            ceId: _v0.id,
                            element: {
                              muted: !_v1
                            }
                          }));
                        });
                      }
                      (_v4 === _v504.KEYBOARD_KEYS.BACKSPACE || _v4 === _v504.KEYBOARD_KEYS.DELETE) && _v14 !== _v485.FocusAreaType.TRANSCRIPT && ((0, _v730.trackDeleteElements)({
                        ceIds: _v1,
                        via: "keyboard",
                        layers: _v6
                      }), _v2.forEach(_v0 => _v18({
                        editorSessionId: _v17,
                        assetType: _v0.type
                      })), _v0((0, _v724.deleteSelectedCEsAction)()));
                    }
                    if (_v15 && (_v4 === _v504.KEYBOARD_KEYS.BACKSPACE || _v4 === _v504.KEYBOARD_KEYS.DELETE) && _v14 !== _v485.FocusAreaType.TRANSCRIPT && ((0, _v730.trackDeleteElements)({
                      ceIds: [_v15.id],
                      via: "footer_top_bar",
                      layers: _v6
                    }), _v18({
                      editorSessionId: _v17,
                      assetType: "transition"
                    }), _v16()), _v3.length > 0 && (_v1 && "KeyV" === _v4 || _v3 && "KeyV" === _v4) && _v0((0, _v727.pasteCopiedElementsThunkAction)()), _v1.length > 0 && (_v1 && "KeyD" === _v4 || _v3 && "KeyD" === _v4) && (_v0.preventDefault(), _v0((0, _v725.duplicateSelectedElementsThunkAction)())), (_v1 || _v3) && "KeyA" === _v4) {
                      _v0.preventDefault();
                      let _v0 = (0, _v425.getAllSelectableElements)(_v6).map(_v0 => _v0.id);
                      _v0.length > 0 && _v0((0, _v366.selectCEsAction)({
                        ceIds: _v0,
                        isMultiSelect: !1
                      }));
                    }
                  }
                }
              }, [_v5, _v7, _v6, _v1, _v15, _v3.length, _v20, _v4, _v10, _v13, _v11, _v12, _v8, _v9, _v14, _v21, _v2, _v0, _v16, _v17, _v18]);
            return (0, _v8.useEffect)(() => () => {
              window.removeEventListener("mouseup", _v20);
            }, [_v20]), {
              handleKeyboardShortcuts: _v22
            };
          })(),
          {
            alertProblemOccurred: _v24,
            alertConnectivityProblem: _v25,
            alertLowResolution: _v26,
            alertNoPermissionsToEdit: _v27,
            alertVideoIsDeletedForLoad: _v28
          } = (0, _v162.useAlerts)(),
          {
            isOnline: _v29
          } = (() => {
            let [_v0, _v1] = (0, _v8.useState)(navigator.onLine);
            return (0, _v8.useEffect)(() => {
              let _v0 = () => {
                  _v1(!0);
                },
                _v1 = () => {
                  _v1(!1);
                };
              return window.addEventListener("online", _v0), window.addEventListener("offline", _v1), () => {
                window.removeEventListener("online", _v0), window.removeEventListener("offline", _v1);
              };
            }, []), {
              isOnline: _v0
            };
          })(),
          [_v30] = (0, _v297.default)(_v393.SHOW_GUIDES_LOCAL_STORAGE_KEY, !1),
          [_v31] = (0, _v297.default)(_v393.SNAP_GUIDES_LOCAL_STORAGE_KEY, !0),
          [_v32, _v33] = (0, _v297.default)(_v393.SAVE_AS_GUIDE_LOCAL_STORAGE_KEY, !0),
          {
            resetAutoSaveStatus: _v34,
            savedLocalStoryboardData: _v35,
            removeSavedStoryboard: _v36,
            loadStoryboardFromResponse: _v37,
            showAutoSaveAlert: _v38,
            showLocalAutoSaveAlert: _v39,
            showCrossEditingToolAlert: _v40
          } = _v308({
            storyboardFetchResponse: _v16,
            videoHash: _v0,
            isThirdPartyIntegration: _v6
          });
        (0, _v720.default)(), (() => {
          let _v0 = (0, _v168.useAppDispatch)(),
            _v1 = (0, _v168.useAppSelector)(_v224.hasQuizzesSelector),
            _v2 = (0, _v168.useAppSelector)(_v224.hasTimeTriggerScorecardSelector),
            {
              notifyResultScreenRemoved: _v3
            } = (0, _v164.useNotifications)(),
            _v4 = (0, _v8.useRef)(null),
            _v5 = (0, _v8.useRef)(!1);
          (0, _v8.useEffect)(() => {
            if (_v2) return _v5.current && !_v1 && (_v4.current = setTimeout(() => {
              _v3(), _v0((0, _v731.deleteScorecardThunkAction)()), _v4.current = null;
            }, 0)), _v5.current = _v1, () => {
              _v4.current && (clearTimeout(_v4.current), _v4.current = null);
            };
          }, [_v3, _v1, _v2, _v0]);
        })();
        let {
            totalSavedEdits: _v41
          } = (0, _v309.useEditorCsat)(),
          _v42 = (0, _v153.shouldShowInDevelopmentFeature)("hideSidebar"),
          _v43 = (0, _v153.shouldShowInDevelopmentFeature)("transcript"),
          _v44 = _v253.default.isShopifyUser,
          _v45 = (0, _v8.useCallback)(async () => {
            let {
              default: _v0
            } = await _v0.A(0);
            _v7((0, _v399.initTextAnimationsAction)(_v0));
          }, [_v7]),
          _v46 = (0, _v8.useCallback)(async (_v0, _v1) => {
            let _v2 = "",
              _v3 = !1;
            try {
              let _v0 = performance.now();
              _v165.default.sendAction(_v305.EditorLoad, {
                step: "start fetch storyboard"
              });
              let _v1 = await _v0().unwrap();
              _v3 = !0, _v165.default.sendAction(_v305.EditorLoad, {
                step: "end fetch storyboard",
                durationMs: (0, _v391.durationSince)(_v0)
              });
              let {
                createdBy: _v2,
                storyboard: _v3,
                vimeoVideo: _v4
              } = _v1 ?? {};
              if (_v3) {
                _v253.default.setVideoHash(_v3.videoHash || _v3.id), _v306.default.setVideoSessionId(_v3.videoSessionId), _v306.default.setFlow(_v3.id, _v2);
                let {
                  id: _v0
                } = _v3;
                _v2 = _v0, _v253.default.setIsTemplate((0, _v256.isTemplate)(_v0, _v2)), _v253.default.setHasBeenRendered(!!_v4?.id), _v4?.id && (0, _v257.replaceUrlParams)("vid", _v4.id.toString());
                let _v1 = !_v12 && (null !== (0, _v257.getVimeoVideoId)() || !!_v253.default.hasBeenRendered && !_v253.default.isTemplate);
                _v253.default.setIsSaveAsAllowed(_v1), 0 === _v41 ? _v33(!1) : _v1 && _v32 && (_v714.PendoClient.showGuideById(_v718.EDITOR_SAVE_AS_GUIDE_ID), _v33(!1));
              }
              return _v1;
            } catch (_v0) {
              _v3 || _v165.default.sendAction(_v305.EditorLoad, {
                step: "fetch storyboard failed",
                error: _v0.data?.error_code || _v0.status || "unknown"
              });
              let _v1 = _v0.data?.error_code;
              if (_v29) {
                if (_v1 === _v312.SESSION_IS_ARCHIVED) throw _v0;else _v1 === _v312.LOW_QUALITY_VIDEO ? _v26(_v2) : _v1 === _v312.STILL_TRANSCODING_IN_VIMEO ? setTimeout(() => {
                  _v46(_v0, _v1);
                }, 0) : _v0.status === _v312.FORBIDDEN ? _v27(_v253.default.teams.length > 1) : _v0.status === _v312.NOT_FOUND || _v1 === _v312.VIDEO_NOT_FOUND ? _v28() : _v24({
                  onPrimaryClick: _v0,
                  error: _v0
                });
              } else _v25({
                onPrimaryClick: _v0
              });
            } finally {
              _v1 && (0, _v192.sendTrackViewEditor)({
                viewStatus: "enable"
              }), _v1 && _v2 && _v11(_v2);
            }
          }, [_v41, _v32, _v12, _v33, _v29, _v25, _v26, _v2, _v27, _v28, _v24, _v11]);
        !function () {
          let _v0 = (0, _v168.useAppSelector)(_v167.sourcesSelector),
            [_v1] = (0, _v307.useLazyGetThumbnailsForSourceQuery)(),
            _v2 = (0, _v8.useMemo)(() => _v0.filter(_v0 => (_v0.previewUrl && !(0, _v257.isLocalUrl)(_v0.previewUrl) || !_v0.previewUrl) && _v0.type === _v721.SourceType.CLIP), [_v0]);
          (0, _v8.useEffect)(function () {
            _v2.forEach(_v0 => {
              _v1({
                sourceHash: _v0.hash,
                userId: _v253.default.teamOwnerId
              }, !0);
            });
          }, [_v2, _v1]);
        }(), (0, _v8.useEffect)(() => {
          let _v0 = () => {
            let _v0 = {
              storyboards: {}
            };
            try {
              let _v0 = window.localStorage.getItem(_v719.TVE_IGNORED_SOURCES_KEY);
              _v0 && (_v0 = JSON.parse(_v0));
            } catch (_v0) {}
            let _v1 = {
                storyboards: {}
              },
              _v2 = Date.now();
            Object.keys(_v0.storyboards).forEach(_v0 => {
              let _v1 = _v0.storyboards[_v0];
              (_v2 - _v1.lastModified) / 0 < _v719.TVE_IGNORED_SOURCES_CACHE_KEEP_DAYS && (_v1.storyboards[_v0] = _v1);
            }), window.localStorage.setItem(_v719.TVE_IGNORED_SOURCES_KEY, JSON.stringify(_v1));
          };
          return window.addEventListener("beforeunload", _v0), () => {
            window.removeEventListener("beforeunload", _v0);
          };
        }, []), _v732(), (0, _v8.useEffect)(() => {
          _v9 || _v17 || (_v0 ? (_v253.default.setHasBeenRendered(!!_v2), _v46(() => _v15({
            videoHash: _v0,
            useRevision: _v1,
            videoVersionId: _v4,
            videoUploadAttemptId: _v5,
            isInteractive: _v12,
            vimeoVideoId: _v2
          }), !0).catch(_v0 => {
            if (_v0.data.error_code === _v312.SESSION_IS_ARCHIVED) return _v46(() => _v18({
              vimeoVideoId: _v2
            })).then(({
              storyboardId: _v0
            }) => {
              _v36(), (0, _v257.replaceUrlParams)("hash", _v0);
            });
          })) : (_v253.default.setIsEVV(!!_v2), _v2 ? _v46(() => _v19({
            vimeoVideoId: _v2
          })).then(({
            storyboard: _v0,
            storyboardId: _v1
          }) => {
            let _v2 = _v1 || _v0?.id;
            _v46(() => _v15({
              videoHash: _v2,
              isInteractive: _v12,
              vimeoVideoId: _v2
            }), !0), (0, _v257.setHashUrlParam)(_v2);
          }) : _v46(() => _v18({})).then(({
            storyboardId: _v0
          }) => {
            _v46(() => _v15({
              videoHash: _v0,
              isInteractive: _v12
            }), !0), (0, _v257.setHashUrlParam)(_v0);
          })));
        }, [_v46, _v15, _v0, _v2, _v4, _v5, _v18, _v9, _v21, _v12, _v36, _v13, _v17, _v19, _v1]), (0, _v8.useEffect)(() => {
          if (!_v16 || !_v10) return void _v34();
          let {
              lastUserSavedStoryboard: _v0,
              editingTool: _v1,
              storyboard: _v2
            } = _v16,
            _v3 = _v35 && _v253.default.isLocalAutoSaveAllowed && !_v253.default.isEditingTeamTemplate,
            _v4 = _v0 && !_v253.default.isLocalAutoSaveAllowed;
          _v3 ? _v39() : _v4 ? _v1 === _v715.EditingToolType.INTERACTIVE && !_v12 || _v1 === _v715.EditingToolType.EDITOR && _v12 ? _v40() : _v38() : _v37({
            storyboard: _v2
          });
        }, [_v10, _v37, _v39, _v35, _v16, _v12, _v40, _v38, _v34]), (0, _v8.useLayoutEffect)(() => {
          if (_v8 && _v22) {
            _v20({
              tag: _v12 ? _v733.GraphicsTag.INTERACTIVE : _v733.GraphicsTag.EDITOR
            });
            let _v0 = performance.now();
            _v165.default.sendAction(_v305.EditorLoad, {
              step: "start fetch fonts"
            }), _v21().unwrap().then(() => {
              _v165.default.sendAction(_v305.EditorLoad, {
                step: "end fetch fonts",
                durationMs: (0, _v391.durationSince)(_v0)
              }), (0, _v374.loadFont)(_v716.CREDITS_FONT);
            }).catch(_v0 => {
              _v165.default.sendAction(_v305.EditorLoad, {
                step: "fetch fonts failed",
                error: _v0?.status || "unknown",
                durationMs: (0, _v391.durationSince)(_v0)
              });
            });
          }
        }, [_v20, _v21, _v12, _v22, _v8]), (0, _v8.useLayoutEffect)(() => {
          _v7((0, _v166.setInspectorInitialWidthAction)(_v44 ? _v717.INSPECTOR_WIDTH_LG : _v717.INSPECTOR_WIDTH));
        }, [_v7, _v44]), (0, _v475.default)(() => {
          _v14(_v3), _v7((0, _v390.setIsShowGuidesStageAction)(_v30)), _v7((0, _v390.setIsSnapStageAction)(_v31)), _v306.default.setIsStaff(_v13), _v165.default.sendPageView();
        }), (0, _v8.useLayoutEffect)(() => {
          _v45();
        }, [_v7, _v45]), (0, _v8.useEffect)(() => (window.addEventListener("keydown", _v23), () => {
          window.removeEventListener("keydown", _v23);
        }), [_v23]), (0, _v8.useLayoutEffect)(() => {
          _v42 || (_v6 ? _v7((0, _v166.initInspectorAction)({
            inspectorType: _v169.InspectorType.TEMPLATES
          })) : _v12 ? _v7((0, _v166.initInspectorAction)({
            inspectorType: _v169.InspectorType.HOTSPOTS
          })) : _v43 ? _v7((0, _v166.initInspectorAction)({
            inspectorType: _v169.InspectorType.TRANSCRIPT
          })) : _v7((0, _v166.initInspectorAction)({
            inspectorType: _v169.InspectorType.MEDIA
          })));
        }, [_v7, _v42, _v43, _v12, _v6]);
      })({
        videoHash: _v0,
        useRevision: _v1,
        vimeoVideoId: _v2,
        featureFlags: _v3,
        videoVersionId: _v4,
        videoUploadAttemptId: _v5,
        isThirdPartyIntegration: _v6
      }), (0, _v8.useEffect)(() => () => {
        _v7((0, _v315.appResetAction)());
      }, [_v7]), null;
    },
    _v737 = ({
      partnerApp: _v0,
      redirectUri: _v1,
      handleUpgrade: _v2,
      handleBack: _v3
    }) => {
      let {
          alertPartnerConnect: _v4
        } = (0, _v162.useAlerts)(),
        _v5 = (0, _v8.useCallback)(() => {
          _v2("", _v242.PRODUCT.EDITOR, !0);
        }, [_v2]),
        _v6 = (0, _v8.useCallback)(async () => {
          (await _v2(_v1 || "", _v242.PRODUCT.EDITOR, !0)) && _v4(_v0, _v5, _v3 ? () => _v3(!0, _v242.PRODUCT.EDITOR) : void 0);
        }, [_v4, _v3, _v2, _v5, _v0, _v1]);
      return (0, _v8.useLayoutEffect)(() => {
        _v6();
      }, [_v6]), null;
    };
  var _v738 = _v0.i(0),
    _v739 = _v0.i(0),
    _v740 = _v0.i(0),
    _v741 = _v0.i(0),
    _v742 = _v0.i(0);
  let _v743 = _v0 => {
      let {
          baseUrl: _v1,
          jwt: _v2,
          xVimeoPage: _v3,
          locale: _v4
        } = (0, _v152.useGctlConfig)(),
        _v5 = (0, _v8.useMemo)(() => ({
          baseUrl: (0, _v153.shouldShowInDevelopmentFeature)("useMasterCiApi", !0) ? _v738.MASTER_CI_API : _v1,
          jwt: _v2,
          xVimeoPage: _v3,
          locale: _v4
        }), [_v1, _v2, _v3, _v4]);
      return (0, _v7.jsx)(_v152.GctlProvider, {
        ..._v5,
        children: (0, _v7.jsx)(_v746, {
          ..._v0
        })
      });
    },
    _v744 = () => {
      _v165.default.sendAction(_v305.EditorLoad, {
        step: "start fetch auth"
      });
    },
    _v745 = () => {
      _v165.default.sendAction(_v305.EditorLoad, {
        step: "end fetch auth"
      });
    },
    _v746 = ({
      serverUrl: _v0,
      vimeoSessionId: _v1,
      history: _v2,
      featureFlags: _v3,
      thirdPartyIntegration: _v4,
      partnershipsConfig: _v5,
      isShopifyUser: _v6,
      flowHooks: _v7,
      labeledCapabilities: _v8,
      authenticate: _v9
    }) => {
      let _v10 = (0, _v8.useContext)(_v92.ViewerContext);
      return _v253.default.init({
        serverUrl: _v0,
        vimeoSessionId: _v1,
        isShopifyUser: _v6,
        authenticate: _v9,
        logAuthStart: _v744,
        logAuthEnd: _v745
      }), (({
        vimeoVideoId: _v0
      }) => {
        let [_v1, _v2] = (0, _v739.useGetUserFoldersPrivateToMeLazy)(),
          [_v3, _v4] = (0, _v740.useGetUserProjectsLazy)(),
          [_v5, _v6] = (0, _v740.useGetUserProjectsLazy)(),
          [_v7, _v8] = (0, _v741.useGetUserTeamsLazy)(),
          [_v9, _v10] = (0, _v289.useGetUserProjectLazy)(),
          _v11 = (0, _v8.useRef)(!!_v0),
          _v12 = (0, _v8.useContext)(_v92.ViewerContext),
          _v13 = _v12?.teamUser?.ownerId ?? _v12?.user?.id;
        _v253.default.setUserId(_v12?.user?.id || 0), _v253.default.setTeamOwnerId(_v13 || _v12?.user?.id || 0), _v253.default.setVimeoApiUrl(_v12?.apiUrl || ""), _v253.default.setJwt(_v12?.jwt || ""), (0, _v8.useEffect)(() => {
          let _v0,
            _v1 = _v2?.data?.uri;
          _v4?.data?.data.length && (_v0 = _v4?.data?.data?.reduce((_v0, _v1) => new Date(_v0.modifiedTime) > new Date(_v1.modifiedTime) ? _v0 : _v1)?.uri);
          let _v2 = _v8?.data?.data?.find(_v0 => _v0.teamData.ownerId === _v13),
            _v3 = _v6?.data?.data?.find(_v0 => _v0.name === _v311.DEFAULT_FOLDER_NAME)?.uri;
          if (_v253.default.setPrivateToMeFolderUri(_v1 || ""), _v253.default.setUserRoleInSharedFolder(_v2?.userRole), _v8?.data?.data && _v253.default.setTeams(_v8.data.data), _v11.current) {
            let _v0, _v1;
            return void (_v0 = _v315.default.dispatch, _v1 = Number(_v0), _v0(_v742.videoParentFolderApi.endpoints.fetchVideoParentFolder.initiate(_v1, {
              forceRefetch: !0
            })).unwrap()).then(_v0 => {
              _v315.default.dispatch((0, _v290.setFolderUriAction)(_v0 ?? ""));
            });
          }
          _v10.data?.metadata?.interactions?.uploadVideo ? _v315.default.dispatch((0, _v290.setFolderUriAction)(_v10.data?.uri || "")) : _v315.default.dispatch((0, _v290.setFolderUriAction)((_v12?.teamUser?.ownerId ? _v1 || _v0 : _v3) || ""));
        }, [_v2, _v6, _v4, _v8, _v13, _v12?.teamUser?.ownerId, _v10.data, _v0]), (0, _v475.default)(() => {
          let _v0 = new URLSearchParams(window.location.search),
            _v1 = _v0.get("hash"),
            _v2 = "true" === _v0.get("et"),
            _v3 = (0, _v257.getFolderId)();
          _v1 && _v253.default.setVideoHash(_v1), _v253.default.setIsEditingTeamTemplate(_v2), _v1({
            where: {
              ownerId: _v13 || 0
            },
            select: ["uri"]
          }), _v3({
            where: {
              userId: _v13 || 0
            },
            select: ["uri"],
            query: {
              page: 1
            }
          });
          let _v4 = _v12?.user?.id;
          _v4 && (_v5({
            where: {
              userId: _v4
            },
            select: ["uri", "name"],
            query: {
              page: 1,
              topLevelOnly: !0
            }
          }), _v7({
            where: {
              userId: _v4
            },
            select: ["teamData.ownerId", "teamData.uri", "teamData.teamName", "userRole", "owner.uri", "owner.name"]
          }), _v3 && _v9({
            where: {
              userId: _v4,
              projectId: _v3
            },
            select: ["uri", "metadata.interactions.uploadVideo"]
          }));
        });
      })({
        vimeoVideoId: _v2.location.query?.vid
      }), (0, _v475.default)(() => {
        if (_v253.default.logInitialAuth(), _v3.interactive || (0, _v151.initScripts)(), 0 === _v387.default.editorLoadStartTime) {
          let _v0 = !_v2.location.query?.hash && _v2.location.query?.vid,
            _v1 = performance.now();
          _v387.default.setEditorLoadStart(_v1), _v165.default.sendAction(_v305.EditorLoad, {
            step: "start load editor",
            timestamp: Math.round(_v1),
            ...(_v0 && {
              flow: "edit_vimeo_video"
            })
          });
        }
        _v306.default.init({
          query: _v2.location.query,
          thirdPartyIntegration: _v4,
          teamUser: _v10?.teamUser,
          product: _v3.interactive ? _v242.PRODUCT.SIMPLIFIED_INTERACTIVE : _v242.PRODUCT.EDITOR
        });
      }), (0, _v7.jsx)(_v8.Suspense, {
        children: (0, _v7.jsxs)(_v148.Provider, {
          store: _v315.default,
          children: [(0, _v7.jsx)(_v154.default, {
            children: (0, _v7.jsx)(_v149.default, {
              children: (0, _v7.jsx)(_v252.DragonflyProvider, {
                children: (0, _v7.jsx)(_v677.StoryboardLocalStorageProvider, {
                  children: (0, _v7.jsx)(_v220.PartnershipAppContext.Provider, {
                    value: _v5,
                    children: (0, _v7.jsx)(_v161.FlowHooksContext.Provider, {
                      value: _v7,
                      children: (0, _v7.jsx)(_v203.LabeledCapabilitiesContext.Provider, {
                        value: _v8,
                        children: (0, _v7.jsx)(_v204.PermissionsProvider, {
                          children: (0, _v7.jsxs)(_v7.Fragment, {
                            children: [(0, _v7.jsx)(_v177, {
                              children: (0, _v7.jsx)(_v713, {})
                            }), (0, _v7.jsx)(_v736, {
                              videoHash: _v2.location.query?.hash,
                              useRevision: _v2.location.state?.useRevision ?? _v2.location.query?.useRevision === "true",
                              videoVersionId: _v2.location.query?.version_id,
                              videoUploadAttemptId: _v2.location.query?.upload_attempt_id,
                              vimeoVideoId: _v2.location.query?.vid,
                              featureFlags: _v3,
                              isThirdPartyIntegration: !!_v4
                            }), !!_v4 && !!_v10?.user && _v5?.app && (0, _v7.jsx)(_v737, {
                              partnerApp: _v5.app,
                              redirectUri: _v5?.iframeModeConfig?.redirectUri,
                              handleUpgrade: _v5?.handleUpgrade,
                              handleBack: _v5?.iframeModeConfig?.headerConfig?.onBackButtonClick
                            })]
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          }), (0, _v7.jsx)(_v150.MazeScript, {})]
        })
      });
    };
  var _v747 = _v0.i(0),
    _v748 = _v0.i(0),
    _v749 = _v0.i(0);
  function _v750({
    history: _v0,
    isShopifyUser: _v1,
    routes: _v2,
    isInteractive: _v3
  }) {
    let _v4 = _v0.location.query.vid,
      [_v5, _v6] = (0, _v8.useState)(!1),
      {
        data: _v7
      } = (0, _v260.useGetVideo)(() => _v4 ? {
        where: {
          videoId: parseInt(_v4)
        },
        select: ["metadata.isVimeoCreate"]
      } : null),
      _v8 = _v7?.metadata?.isVimeoCreate,
      {
        hasReachedQuotaLimit: _v9
      } = (0, _v749.default)(),
      {
        auth: _v10,
        authenticate: _v11
      } = (0, _v8.useContext)(_v100.MagistoSessionContext),
      {
        partnerConfig: _v12,
        teamUser: _v13
      } = (0, _v8.useContext)(_v99.ConfigContext),
      {
        user: _v14
      } = (0, _v8.useContext)(_v92.ViewerContext) || {
        locale: "en"
      },
      {
        showUpsellIfRequired: _v15,
        onPlanUpgrade: _v16
      } = (0, _v8.useContext)(_v144.UpsellContext),
      _v17 = (0, _v8.useContext)(_v92.ViewerContext),
      {
        capabilities: {
          labeledCapabilities: _v18
        }
      } = (0, _v8.useContext)(_v139.CreationCapabilityContext),
      _v19 = _v1 ? _v146.FLOW_NAMES.SHOPIFY : _v146.FLOW_NAMES.EDITOR,
      _v20 = _v0.location.query.hash,
      _v21 = _v0.location.query.vsid,
      _v22 = !!_v0.location.query.blank,
      _v23 = _v17?.user?.capabilities?.hasCreation,
      _v24 = !_v4,
      _v25 = (0, _v8.useMemo)(() => ({
        interactive: !!_v3
      }), [_v3]),
      _v26 = (0, _v8.useCallback)(() => {
        _v15({
          context: _v86.Context.CREATE_QUOTA_NOTIFICATION,
          bpLocation: _v146.FLOW_NAMES.EDITOR,
          pageLocation: "editor_screen",
          flow: _v19,
          upsellTrigger: "Quota",
          isBlocker: !1
        });
      }, [_v19, _v15]),
      _v27 = (0, _v8.useCallback)(() => {
        _v15({
          context: _v86.Context.STORAGE_QUOTA,
          bpLocation: _v146.FLOW_NAMES.EDITOR,
          pageLocation: "editor_screen",
          flow: _v19,
          upsellTrigger: "use_quota_limit",
          triggerCapability: "quota",
          isBlocker: !1
        });
      }, [_v19, _v15]),
      {
        capabilities: _v28,
        loading: _v29
      } = (0, _v87.useCapability)(["hasUpsellsForFlatRateTiers", "canCreateCustomTemplates", "canUseFaceDetection", "hasCreateBrandView", "hasCreateBrandEdit", "hasCreateBrandApply", "hasCreateTeamTemplateView", "hasCreateTeamTemplateApply", "hasCreateTeamTemplateEdit"], `users/${_v13?.ownerId || _v14?.id}`),
      _v30 = !_v28.hasUpsellsForFlatRateTiers;
    (0, _v8.useEffect)(() => {
      !_v5 && !_v29 && _v30 && _v9 && (_v24 || !_v8) && (_v6(!0), _v26());
    }, [_v9, _v29, _v5, _v24, _v19, _v8, _v15, _v26, _v28.hasUpsellsForFlatRateTiers, _v30]), (0, _v8.useEffect)(() => {
      _v32 && _v0.push(_v3 ? _v2.home() : "/upload/videos");
    }, [_v0, _v2, _v3]);
    let _v31 = (0, _v8.useMemo)(() => {
      let _v0 = (0, _v748.upsellFlowHookFactory)(_v15);
      return {
        onSelectWatermarkBannerUpgrade: _v0(({
          vsid: _v0,
          tier: _v1
        }) => ({
          context: _v86.Context.TIER_BADGE,
          shouldUpgradeIn: _v86.UpgradeWindowOption.NEW_WINDOW,
          pageLocation: "editor_screen",
          flow: _v19,
          upsellTrigger: "view_blue_banner",
          triggerCapability: "duration",
          isBlocker: !1,
          vsid: _v0,
          tier: _v1,
          trackingParams: {
            upsell: "editor_general_bottom_banner",
            integration: "none",
            feature: "watermark",
            bpEventVersion: 41
          }
        })),
        onSelectGetty: _v0(({
          vsid: _v0,
          tier: _v1,
          upsellTitle: _v2
        }) => ({
          context: _v86.Context.STOCK,
          shouldUpgradeIn: _v86.UpgradeWindowOption.NEW_WINDOW,
          pageLocation: "media_modal",
          flow: _v19,
          upsellTrigger: "use_stock_asset",
          triggerCapability: "stock",
          isBlocker: !1,
          vsid: _v0,
          tier: _v1,
          upsellTitle: _v2,
          trackingParams: {
            upsell: "editor_stock_footage",
            integration: "none",
            feature: "stock",
            bpEventVersion: 41
          }
        })),
        onOpenBrand: _v0(({
          vsid: _v0,
          tier: _v1,
          upsellTitle: _v2,
          pageLocation: _v3,
          upsellTrigger: _v4,
          feature: _v5,
          upsellName: _v6,
          trackingParams: _v7
        }) => ({
          context: _v86.Context.BRAND,
          shouldUpgradeIn: _v86.UpgradeWindowOption.NEW_WINDOW,
          pageLocation: _v3 || "editor_screen",
          flow: _v19,
          upsellTrigger: _v4 || "use_brand",
          triggerCapability: "brand",
          isBlocker: !0,
          vsid: _v0,
          tier: _v1,
          upsellTitle: _v2,
          feature: _v5,
          upsellName: _v6,
          trackingParams: _v7
        })),
        onBeforeCreate: _v0(({
          vsid: _v0,
          tier: _v1,
          pageLocation: _v2,
          upsellTrigger: _v3,
          triggerCapability: _v4
        }) => ({
          context: _v86.Context.CREATE_BLOCKER,
          shouldUpgradeIn: _v86.UpgradeWindowOption.NEW_WINDOW,
          pageLocation: _v2,
          flow: _v19,
          upsellTrigger: _v3,
          triggerCapability: _v4,
          isBlocker: !0,
          vsid: _v0,
          tier: _v747.blockingTier[_v1]
        })),
        onSelectTve: _v0(({
          vsid: _v0,
          tier: _v1
        }) => ({
          context: _v86.Context.TVE,
          shouldUpgradeIn: _v86.UpgradeWindowOption.NEW_WINDOW,
          pageLocation: "media_modal",
          flow: _v19,
          upsellTrigger: "use_tve",
          triggerCapability: "tve",
          isBlocker: !1,
          vsid: _v0,
          tier: _v1,
          trackingParams: {
            upsell: "editor_tve",
            integration: "none",
            feature: "tve"
          }
        })),
        onPlanUpgrade: _v16,
        showQuotaUpsell: _v26,
        showStorageQuotaUpsell: _v27
      };
    }, [_v15, _v26, _v27, _v19, _v16]);
    _v20 || _v21 || _v4 || _v22 || _v0.push(_v3 ? _v2.home() : "/upload/videos"), _v23 || _v0.push("/manage/videos");
    let _v32 = (0, _v8.useMemo)(() => /iphone|ipod|ipad|android|webos|blackberry|windows phone|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, []),
      _v33 = (0, _v8.useMemo)(() => {
        let {
          apiProdUrl: _v0,
          apiDevUrl: _v1
        } = (0, _v147.getMagistoResourceUrls)();
        return `//${_v0}`;
      }, []),
      _v34 = _v12 ? {
        app: _v12?.app,
        iframeModeConfig: _v12?.iframeModeConfig,
        mode: _v12?.mode,
        logo: _v12?.logo,
        handleUpgrade: _v12?.handleUpgrade,
        orientation: _v12?.orientation
      } : void 0;
    return (0, _v7.jsx)(_v7.Fragment, {
      children: (0, _v7.jsx)(_v743, {
        serverUrl: _v33,
        history: _v0,
        vimeoSessionId: _v10?.sessionId || "",
        authenticate: _v11,
        featureFlags: _v25,
        partnershipsConfig: _v34,
        thirdPartyIntegration: _v12?.bigPictureConfig.thirdPartyIntegration,
        isShopifyUser: _v1,
        flowHooks: _v31,
        labeledCapabilities: _v18?.capabilities
      })
    });
  }
  var _v751 = _v0.i(0);
  let _v752 = (0, _v8.lazy)(() => _v0.A(0).then(({
      TemplateGallery: _v0
    }) => ({
      default: _v0
    }))),
    _v753 = (0, _v8.lazy)(() => _v0.A(0)),
    _v754 = (0, _v8.lazy)(() => _v0.A(0)),
    _v755 = (0, _v8.lazy)(() => _v0.A(0)),
    _v756 = (0, _v8.lazy)(() => _v0.A(0)),
    _v757 = (0, _v8.lazy)(() => _v0.A(0)),
    _v758 = (0, _v8.lazy)(() => _v0.A(0)),
    _v759 = (0, _v8.lazy)(() => _v0.A(0)),
    _v760 = (0, _v8.lazy)(() => _v0.A(0));
  function _v761({
    viewer: _v0,
    history: _v1,
    playerAssetUrls: _v2,
    routes: _v3,
    partnerConfig: _v4
  }) {
    return _v0 ? (0, _v7.jsx)(_v99.default, {
      playerAssetUrls: _v2,
      ..._v0,
      partnerConfig: _v4,
      children: (0, _v7.jsx)(_v100.default, {
        viewer: _v0,
        partnerConfig: _v4,
        children: (0, _v7.jsx)(_v139.default, {
          user: _v0.user,
          children: (0, _v7.jsx)(_v143, {
            children: (0, _v7.jsx)(_v763, {
              history: _v1,
              routes: _v3
            })
          })
        })
      })
    }) : null;
  }
  let _v762 = ({
    children: _v0,
    canCreateUnlimitedDraftVideos: _v1,
    canSaveDraftVideos: _v2,
    canUpgradeToPro: _v3,
    draftsLimit: _v4,
    sessionId: _v5,
    draftsState: _v6,
    teamUser: _v7
  }) => {
    let _v8 = (0, _v8.useContext)(_v99.ConfigContext);
    return (0, _v7.jsx)(_v99.ConfigContext.Provider, {
      value: _v8,
      children: (0, _v7.jsx)(_v144.UpsellContextProvider, {
        canCreateUnlimitedDraftVideos: _v1,
        canSaveDraftVideos: _v2,
        canUpgradeToPro: _v3,
        DRAFTS_LIMIT: _v4,
        sessionId: _v5,
        draftsState: _v6,
        teamUser: _v7,
        children: (0, _v7.jsxs)(_v7.Fragment, {
          children: [_v0, (0, _v7.jsx)(_v144.UpsellContext.Consumer, {
            children: ({
              showUpsell: _v0,
              upsellType: _v1,
              bpLocation: _v2,
              onDismissModal: _v3,
              onPlanUpgrade: _v4,
              onContinueAndUpgradeLater: _v5,
              shouldUpgradeIn: _v6,
              vsid: _v7,
              upsellTitle: _v8,
              pageLocation: _v9,
              flow: _v10,
              upsellTrigger: _v11,
              triggerCapability: _v12,
              isBlocker: _v13,
              contentText: _v14,
              ctaText: _v15,
              canUpgradeFromQuotaNotification: _v16,
              feature: _v17,
              upsellName: _v18,
              trackingParams: _v19
            }) => _v0 && (0, _v7.jsx)(_v137, {
              showUpsell: _v0,
              upsellType: _v1,
              bpLocation: _v2,
              onDismissModal: _v3,
              onPlanUpgrade: _v4,
              onContinueAndUpgradeLater: _v5,
              shouldUpgradeIn: _v6,
              isPaidUser: !0,
              vsid: _v7?.toString() !== "-1" && _v7?.toString() || void 0,
              upsellTitle: _v8,
              pageLocation: _v9,
              flow: _v10,
              upsellTrigger: _v11,
              triggerCapability: _v12,
              isBlocker: _v13,
              contentText: _v14,
              ctaText: _v15,
              canUpgradeFromQuotaNotification: _v16,
              feature: _v17,
              upsellName: _v18,
              trackingParams: _v19
            })
          })]
        })
      })
    });
  };
  function _v763({
    history: _v0,
    routes: _v1
  }) {
    let _v2 = (0, _v8.useContext)(_v99.ConfigContext),
      {
        user: _v3,
        magistoApiHost: _v4,
        xsrft: _v5,
        playerAssetUrls: _v6,
        vuid: _v7,
        teamUser: _v8,
        partnerConfig: _v9,
        jwt: _v10,
        apiUrl: _v11
      } = _v2,
      {
        sessionId: _v12,
        auth: _v13,
        loading: _v14,
        authError: _v15
      } = (0, _v8.useContext)(_v100.MagistoSessionContext),
      _v16 = _v13?.response?.user?.videoMigrationStatus === 2,
      _v17 = _v0.location.pathname.includes("/create/edit") || _v0.location.pathname.includes("/create/interactive"),
      {
        shopifyShops: _v18,
        isShopifyUser: _v19
      } = function (_v0, _v1 = !1) {
        let {
            apiUrl: _v2,
            jwt: _v3,
            user: _v4,
            teamUser: _v5,
            currentShopifyContext: _v6,
            updateShopifyContext: _v7
          } = (0, _v8.useContext)(_v99.ConfigContext),
          [_v8, _v9] = (0, _v8.useState)({
            called: !1,
            loading: !1,
            shops: []
          }),
          _v10 = (0, _v8.useMemo)(() => _v8.shops.length > 0, [_v8.shops.length]);
        (0, _v8.useEffect)(() => {
          if (_v4?.uri) {
            let _v0;
            _v9(_v0 => ({
              ..._v0,
              loading: !0
            }));
            let _v1 = _v5?.plainTextPermissionLevel;
            _v5 && (_v1 === _v61.TeamUserPermissionLevel.Contributor || _v1 === _v61.TeamUserPermissionLevel.ContributorPlus || _v1 === _v61.TeamUserPermissionLevel.Admin) && (_v0 = _v5.ownerId), _v145.default.getShopifyShopsIfConnected(_v2, _v3, _v0).then(_v0 => {
              let _v1 = _v0 && _v0.map(({
                thirdPartyShopUrl: _v0
              }) => ({
                thirdPartyShopUrl: _v0
              })) || [];
              _v9(_v0 => ({
                loading: !1,
                called: !0,
                shops: _v0?.shops ? [..._v0?.shops, ..._v1] : _v1
              }));
            }).catch(() => {
              _v9(_v0 => ({
                ..._v0,
                loading: !1,
                called: !0
              }));
            });
          } else _v9(_v0 => ({
            ..._v0,
            called: !0
          }));
        }, [_v2, _v3, _v4, _v5]);
        let _v11 = _v0.location.search,
          {
            hmac: _v12,
            code: _v13,
            state: _v14,
            timestamp: _v15,
            shop: _v16
          } = _v0.location.query,
          _v17 = _v12 && _v13 && _v14 && _v15 && _v16;
        if (_v16) (0, _v12.saveCookie)({
          name: _v138.SHOPIFY_CONTEXT,
          value: JSON.stringify({
            shop: _v16
          }),
          path: "/"
        });else if (_v8.shops.length > 0 && null === (0, _v12.loadCookie)(_v138.SHOPIFY_CONTEXT)) {
          let _v0 = {
            shop: _v8.shops[0].thirdPartyShopUrl.replace(/(^\w+:|^)\/\//, "")
          };
          (0, _v12.saveCookie)({
            name: _v138.SHOPIFY_CONTEXT,
            value: JSON.stringify(_v0),
            path: "/"
          }), _v6 || _v7(_v0);
        }
        return ((0, _v8.useEffect)(() => {
          let _v0 = !!_v8.shops.find(_v0 => _v0.thirdPartyShopUrl === _v16);
          _v4?.uri && _v17 && !_v0 && _v145.default.completeShopifyConnection(_v3, _v11).then(() => {
            _v9(_v0 => ({
              ..._v0,
              shops: _v0?.shops ? [..._v0?.shops, {
                thirdPartyShopUrl: _v16
              }] : [{
                thirdPartyShopUrl: _v16
              }]
            }));
          });
        }, [_v3, _v17, _v11, _v16, _v8.shops, _v4]), _v1) ? {
          isShopifyUser: !1,
          shopifyShops: {
            shops: [],
            called: !0,
            loading: !1
          },
          setShopifyShops: _v9
        } : {
          isShopifyUser: _v10,
          shopifyShops: _v8,
          setShopifyShops: _v9
        };
      }(_v0, void 0 !== _v9),
      _v20 = !_v3 && (!!_v0.location.query[_v96.SHOPIFY_LP_URLPARAM] || localStorage.getItem(_v96.SHOPIFY_LP_KEY) === _v96.SHOPIFY_LP_FIRST_SO || localStorage.getItem(_v96.SHOPIFY_LP_KEY) === _v96.SHOPIFY_LP_SECOND_SO),
      [_v21, _v22] = (0, _v8.useState)(!!_v3 && window.location.href.includes("/create/templates") && (!!_v0.location.query[_v96.SHOPIFY_LP_URLPARAM] || !!localStorage.getItem(_v96.SHOPIFY_LP_KEY))),
      _v23 = "1" === _v0.location.query.fl,
      _v24 = (_v20 || !!_v23) && !_v3,
      {
        shop: _v25
      } = _v0.location.query,
      _v26 = "true" === _v0.location.query[_v96.DIRECT_CUSTOMIZE_URLPARAM] || !!_v0.location.query[_v96.LP_ONBOARDING_ID_URLPARAM],
      _v27 = _v24 && _v25 || _v20,
      [_v28, _v29] = (0, _v8.useState)({
        isShowing: _v24,
        hideDismissButton: _v23
      });
    (0, _v8.useEffect)(() => {
      !_v3 && _v0.location.query[_v96.SHOPIFY_LP_URLPARAM] ? (localStorage.setItem(_v96.SHOPIFY_LP_KEY, _v96.SHOPIFY_LP_FIRST_SO), window.history.replaceState(null, "", window.location.pathname)) : _v3 || localStorage.getItem(_v96.SHOPIFY_LP_KEY) !== _v96.SHOPIFY_LP_FIRST_SO ? _v3 || localStorage.getItem(_v96.SHOPIFY_LP_KEY) !== _v96.SHOPIFY_LP_SECOND_SO || localStorage.setItem(_v96.SHOPIFY_LP_KEY, _v96.SHOPIFY_LP_FIRST_SI) : localStorage.setItem(_v96.SHOPIFY_LP_KEY, _v96.SHOPIFY_LP_SECOND_SO), _v3 && (_v0.location.query[_v96.SHOPIFY_LP_URLPARAM] || localStorage.getItem(_v96.SHOPIFY_LP_KEY)) && (window.history.replaceState(null, "", window.location.pathname), localStorage.getItem(_v96.SHOPIFY_LP_KEY) === _v96.SHOPIFY_LP_SECOND_SI ? localStorage.removeItem(_v96.SHOPIFY_LP_KEY) : localStorage.setItem(_v96.SHOPIFY_LP_KEY, _v96.SHOPIFY_LP_SECOND_SI)), _v20 && _v29(_v0 => ({
        ..._v0,
        redirectUrl: "/create/templates"
      }));
    }, [_v0.location.query, _v20, _v3]);
    let _v30 = _v13 && _v13.response && _v13.response.activePackage && _v13.response.activePackage.maxMoviesAllowed,
      {
        called: _v31,
        error: _v32,
        capabilities: _v33
      } = (0, _v8.useContext)(_v139.CreationCapabilityContext),
      {
        canCreateUnlimitedDraftVideos: _v34,
        canSaveDraftVideos: _v35,
        canUpgradeToPro: _v36
      } = _v33,
      _v37 = (0, _v8.useRef)(void 0),
      [{
        draftsState: _v38
      }, _v39] = (0, _v8.useState)({
        draftsState: {
          loadingDrafts: !1,
          errorLoadingDrafts: !1
        },
        showFbConnectModal: !1
      });
    (0, _v8.useEffect)(() => {
      _v12 && _v13 && !_v16 && (_v39(_v0 => ({
        ..._v0,
        draftsState: {
          loadingDrafts: !0,
          errorLoadingDrafts: !1
        }
      })), _v751.default.getDrafts(1, _v4, _v12).then(_v0 => {
        _v39(_v0 => ({
          ..._v0,
          draftsState: {
            draftsCount: _v0.totalItems,
            loadingDrafts: !1,
            errorLoadingDrafts: !1
          }
        }));
      }).catch(() => {
        _v39(_v0 => ({
          ..._v0,
          draftsState: {
            loadingDrafts: !1,
            errorLoadingDrafts: !0
          }
        }));
      }));
    }, [_v13, _v16, _v4, _v12]);
    let _v40 = "true" === new URLSearchParams(window.location.search).get("msg_loader"),
      _v41 = (0, _v8.useCallback)((_v0, _v1, _v2, _v3) => _v3 ? Promise.resolve(void 0) : (_v29({
        creationPath: _v1,
        redirectUrl: _v2,
        queryParams: _v3,
        isShowing: !0
      }), new Promise(_v0 => {
        _v37.current = _v0;
      })), [_v3]),
      _v42 = !_v14 && !_v15 && _v31 && (!_v3 || _v3 && !_v32) && !_v38.loadingDrafts && !_v38.errorLoadingDrafts && _v18.called,
      _v43 = (0, _v8.useCallback)(() => {
        let _v0 = `${_v28.redirectUrl ?? ""}`,
          {
            queryParams: _v1
          } = _v28;
        return _v1?.action && (window.location.search ? _v0 += `${window.location.search}&action=${_v1.action}` : _v0 += `?action=${_v1.action}`), _v1?.orientation && (_v0 += `&orientation=${_v1.orientation}`), _v1?.bpLocation && (_v0 += `&bp=${_v1.bpLocation}`), _v1?.tier && (_v0 += `&tier=${_v1.tier}`), _v0;
      }, [_v28]),
      _v44 = _v9?.iframeModeConfig?.succesfullConnectCallback;
    (0, _v8.useEffect)(() => {
      let _v0 = _v43(),
        _v1 = _v0 ? () => window.location.href = _v0 : () => window.location.reload();
      _v44 && _v44(_v1);
    }, [_v44, _v43, _v9?.app]);
    let _v45 = {
      canCreateUnlimitedDraftVideos: _v34,
      canSaveDraftVideos: _v35,
      canUpgradeToPro: _v36,
      draftsLimit: _v30,
      sessionId: _v12,
      draftsState: _v38,
      teamUser: _v8
    };
    return _v17 ? (0, _v7.jsx)(_v762, {
      ..._v45,
      children: (0, _v7.jsxs)(_v9.Switch, {
        children: [(0, _v7.jsx)(_v9.Route, {
          path: _v1.paths.edit,
          render: () => (0, _v7.jsx)(_v72, {
            children: (0, _v7.jsx)(_v750, {
              history: _v0,
              routes: _v1.values,
              isShopifyUser: _v19
            })
          })
        }), (0, _v7.jsx)(_v9.Route, {
          path: _v1.paths.interactive,
          render: () => (0, _v7.jsx)(_v72, {
            children: (0, _v7.jsx)(_v750, {
              history: _v0,
              routes: _v1.values,
              isShopifyUser: _v19,
              isInteractive: !0
            })
          })
        })]
      })
    }) : _v42 ? (0, _v7.jsx)(_v762, {
      ..._v45,
      children: (0, _v7.jsxs)(_v7.Fragment, {
        children: [(0, _v7.jsx)(_v45, {
          isShowing: _v21 && _v18?.called && !_v18?.loading && _v18?.shops?.length == 0,
          onClose: () => {
            _v22(!1);
          },
          callback: () => {
            localStorage.removeItem(_v96.SHOPIFY_LP_KEY), window.location.href = "/create/templates";
          }
        }), (0, _v7.jsx)(_v59.LoginJoinModal, {
          type: "join",
          xsrft: _v5,
          showFBCreativeConnectJoinModal: -1 !== document.cookie.indexOf("create_fb_context=1") || _v9?.app === _v60.PartnerApp.FacebookCCM || _v9?.app === _v60.PartnerApp.FACEBOOK_CCM_VARIANT,
          target: _v9?.iframeModeConfig?.authenticationInNewTab ? "_blank" : "_self",
          onSuccess: _v0 => {
            if (_v9?.eventCollector?.triggerEvent(_v0?.signup ? _v60.FlowEvent.USER_REGISTRATION : _v60.FlowEvent.USER_LOGIN), _v0?.signup && _v28.redirectUrl && !_v27) {
              window.location.href = `/welcome-survey?type=segment&vimeoHref=${encodeURIComponent(_v43())}`;
              return;
            }
            _v37.current ? _v37.current((0, _v11.camelizeDeep)(_v0)) : window.location.reload();
          },
          faContainer: _v28.creationPath === _v96.CreationPath.Customize ? "customize_template" : _v28.creationPath === _v96.CreationPath.StartFromScratch ? "start_from_scratch" : _v28.creationPath === _v96.CreationPath.ProBadge ? "pro_badge" : void 0,
          redirectUrl: _v9?.iframeModeConfig?.redirectUri ? _v9?.iframeModeConfig?.redirectUri : _v28.redirectUrl && !_v27 ? `/welcome-survey?type=segment&vimeoHref=${encodeURIComponent(_v43())}` : _v28.redirectUrl,
          redirectUrlAfterSocialLogin: _v9?.iframeModeConfig?.redirectUri ?? _v28.redirectUrl,
          isShowing: _v28.isShowing,
          disableDismiss: _v28.hideDismissButton,
          onDismiss: () => {
            _v29(_v0 => ({
              ..._v0,
              isShowing: !1
            }));
          },
          children: _v0 => (0, _v7.jsx)(_v8.Suspense, {
            fallback: (0, _v7.jsx)("div", {}),
            children: (0, _v7.jsxs)(_v9.Switch, {
              children: [(0, _v7.jsx)(_v9.Route, {
                path: _v1.paths.preview,
                render: _v0 => (0, _v7.jsx)(_v72, {
                  children: (0, _v7.jsx)(_v756, {
                    hash: _v0.match.params.videoHash ?? "",
                    history: _v0,
                    canSaveDraftVideos: _v35 || !1,
                    routes: _v1.values,
                    isShopifyUser: _v19,
                    teamUser: _v8
                  })
                })
              }), (0, _v7.jsx)(_v9.Route, {
                path: [_v1.paths.subCategory, _v1.paths.category],
                render: _v0 => {
                  let _v1 = _v0.match.params.category,
                    _v2 = _v0.match.params.subcategory;
                  if (!_v1) return _v0.push(_v1.values.home()), null;
                  let _v3 = {
                    keywords: `${_v1}${_v2 ? "," + _v2 : ""}`
                  };
                  return (0, _v7.jsx)(_v144.UpsellContext.Consumer, {
                    children: ({
                      showUpsellIfRequired: _v0,
                      checkIfNeedUpgrade: _v1
                    }) => (0, _v7.jsxs)(_v764, {
                      children: [_v9?.mode === _v60.PartnerAppMode.IFRAME && _v9?.iframeModeConfig?.headerConfig && (0, _v7.jsx)(_v74.default, {
                        location: "create_homepage"
                      }), (0, _v7.jsx)(_v752, {
                        ..._v2,
                        checkIfNeedUpgrade: _v1,
                        query: _v3,
                        playerAssetUrls: _v6,
                        magistoSessionLoading: _v14,
                        magistoSessionId: _v12 || "",
                        capabilities: _v33,
                        history: _v0,
                        showUpsellIfRequired: _v0,
                        forceLogin: _v24,
                        toggleLoginModal: (_v0, _v1, _v2) => _v41(_v0, _v0, _v1, _v2),
                        draftsCount: _v38.draftsCount,
                        routes: _v1.values,
                        translations: _v66.default,
                        featureFlags: _v96.FEATURE_FLAGS,
                        userId: `${_v3 && _v3.id}`,
                        deviceId: _v7,
                        isShopifyUser: _v19 || _v20 || _v21,
                        isShopifyLoading: _v18.loading,
                        user: _v3
                      })]
                    })
                  });
                }
              }), (0, _v7.jsx)(_v9.Route, {
                exact: !0,
                path: _v1.paths.home,
                render: () => (0, _v7.jsx)(_v144.UpsellContext.Consumer, {
                  children: ({
                    showUpsellIfRequired: _v0,
                    checkIfNeedUpgrade: _v1
                  }) => (0, _v7.jsxs)(_v764, {
                    children: [_v9?.mode === _v60.PartnerAppMode.IFRAME && _v9?.iframeModeConfig?.headerConfig && (0, _v7.jsx)(_v74.default, {
                      location: "create_homepage"
                    }), (0, _v7.jsx)(_v752, {
                      ..._v2,
                      checkIfNeedUpgrade: _v1,
                      playerAssetUrls: _v6,
                      magistoSessionLoading: _v14,
                      magistoSessionId: _v12 || "",
                      capabilities: _v33,
                      history: _v0,
                      showUpsellIfRequired: _v0,
                      forceLogin: _v24,
                      toggleLoginModal: (_v0, _v1, _v2) => _v41(_v0, _v0, _v1, _v2),
                      draftsCount: _v38.draftsCount,
                      routes: _v1.values,
                      translations: _v66.default,
                      featureFlags: _v96.FEATURE_FLAGS,
                      userId: `${_v3 && _v3.id}`,
                      deviceId: _v7,
                      isShopifyUser: _v19 || _v20 || _v21,
                      isShopifyLoading: _v18.loading,
                      user: _v3
                    })]
                  })
                })
              }), (0, _v7.jsx)(_v9.Route, {
                path: _v1.paths.wizard,
                render: () => (0, _v7.jsx)(_v72, {
                  children: (0, _v7.jsx)(_v753, {
                    history: _v0,
                    canSaveDraftVideos: _v35 || !1,
                    routes: _v1.values,
                    isShopifyUser: _v19
                  })
                })
              }), (0, _v7.jsx)(_v9.Route, {
                path: _v1.paths.script,
                render: () => (0, _v7.jsx)(_v72, {
                  children: (0, _v7.jsx)(_v757, {
                    history: _v0,
                    canSaveDraftVideos: _v35 || !1,
                    draftsCount: _v38.draftsCount,
                    canCreateUnlimitedDraftVideos: _v34,
                    draftsLimit: _v30,
                    isShopifyUser: _v19,
                    routes: _v1.values
                  })
                })
              }), (0, _v7.jsx)(_v9.Route, {
                path: _v1.paths.customize,
                render: () => (0, _v7.jsx)(_v72, {
                  children: (0, _v7.jsx)(_v754, {
                    history: _v0,
                    canSaveDraftVideos: _v35 || !1,
                    routes: _v1.values,
                    isShopifyUser: _v19
                  })
                })
              }), (0, _v7.jsx)(_v9.Route, {
                path: _v1.paths.trimmer,
                render: () => (0, _v7.jsx)(_v72, {
                  children: (0, _v7.jsx)(_v755, {
                    history: _v0,
                    routes: _v1.values
                  })
                })
              }), (0, _v7.jsx)(_v9.Route, {
                path: _v1.paths.template,
                render: _v0 => (0, _v7.jsxs)(_v7.Fragment, {
                  children: [_v9?.mode === _v60.PartnerAppMode.IFRAME && _v9?.iframeModeConfig?.headerConfig && (0, _v7.jsx)(_v74.default, {
                    location: "create_homepage"
                  }), (0, _v7.jsxs)("div", {
                    children: [_v26 && (0, _v7.jsx)(_v765, {
                      children: (0, _v7.jsx)(_v766, {
                        children: (0, _v7.jsx)(_v73.Loader, {})
                      })
                    }), (0, _v7.jsx)(_v758, {
                      templateUri: _v0.match.params.template ?? "",
                      history: _v0,
                      magistoSessionLoading: _v14,
                      magistoSessionId: _v12 || "",
                      capabilities: _v33,
                      toggleLoginModal: (_v0, _v1, _v2) => _v41(_v0, _v0, _v1, _v2),
                      routes: _v1.values,
                      isShopifyUser: _v19 || _v20 || _v21,
                      isShopifyLoading: _v18.loading,
                      directCustomize: _v26
                    })]
                  })]
                })
              }), (0, _v7.jsx)(_v9.Route, {
                path: "/create/fb-permissions-check",
                render: () => (0, _v7.jsx)(_v759, {})
              }), (0, _v7.jsx)(_v9.Route, {
                path: "/create/shopify",
                render: () => (0, _v7.jsx)(_v760, {
                  history: _v0
                })
              }), (0, _v7.jsx)(_v9.Route, {
                path: "/create/fb",
                render: () => {
                  let _v0 = _v8?.plainTextPermissionLevel === _v61.TeamUserPermissionLevel.Admin,
                    _v1 = _v8?.plainTextPermissionLevel === _v61.TeamUserPermissionLevel.Contributor || _v8?.plainTextPermissionLevel === _v61.TeamUserPermissionLevel.ContributorPlus;
                  return _v8 && (_v0 || _v1) ? (_v1 && (0, _v12.clearCookie)(_v138.FB_CONTEXT), _v0 && _v145.default.getFBConnectedApp(_v11, _v10, _v8?.ownerId).then(() => {
                    (0, _v12.saveCookie)({
                      name: _v138.FB_CONTEXT,
                      value: "1",
                      path: "/"
                    });
                  }).catch(() => {
                    (0, _v12.clearCookie)(_v138.FB_CONTEXT);
                  })) : (0, _v12.saveCookie)({
                    name: _v138.FB_CONTEXT,
                    value: "1",
                    path: "/"
                  }), (0, _v7.jsx)(_v9.Redirect, {
                    to: {
                      pathname: _v1.values.subCategory("facebook", "ads")
                    }
                  });
                }
              })]
            })
          })
        })]
      })
    }) : (0, _v7.jsx)(_v73.Loader, {
      loaderWithMessage: _v40
    });
  }
  let _v764 = _v10.default.div.withConfig({
      displayName: "video-creation__TemplateGalleryWrapper",
      componentId: "sc-1b6984f2-0"
    })`
  min-height: calc(100vh - 60px);
`,
    _v765 = _v10.default.div.withConfig({
      displayName: "video-creation__TotalOverlay",
      componentId: "sc-1b6984f2-1"
    })`
  position: fixed;
  z-index: 1000;
  background-color: white;
  cursor: default;
  width: 100%;
  height: 100%;
  opacity: 1;
  top: 61px;
  left: 0;
  overflow: hidden;
  display: block;
`,
    _v766 = _v10.default.div.withConfig({
      displayName: "video-creation__InnerOverlay",
      componentId: "sc-1b6984f2-2"
    })`
  position: fixed;
  cursor: default;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: block;
`;
  function _v767(_v0, _v1) {
    _v1 || (_v1 = window.location.href);
    let _v2 = RegExp("[?&]" + (_v0 = _v0.replace(/[\[\]]/g, "\\$&")) + "(=([^&#]*)|&|#|$)").exec(_v1);
    return _v2 ? _v2[2] ? decodeURIComponent(_v2[2].replace(/\+/g, " ")) : "" : null;
  }
  let _v768 = {
    paths: {
      preview: "/preview/:videoHash",
      category: "/create/templates/category/:category",
      subCategory: "/create/templates/category/:category/:subcategory",
      home: "/create/templates",
      wizard: "/create/new",
      script: "/create/script",
      customize: "/create/customize",
      edit: "/create/edit",
      interactive: "/create/interactive",
      trimmer: "/create/trimmer",
      template: "/create/templates/:template",
      video: "/manage/videos/:videoId",
      blankCustomize: "/create/customize?blank=true",
      blankEdit: "/create/edit?blank=true"
    },
    values: {
      home: _v0 => `/create/templates${_v0 ? "?show_quota_upsell=true" : ""}`,
      wizard: "/create/new",
      editor: (_v0, _v1) => `/create/customize?hash=${_v0}${_v1 ? "&et=true" : ""}`,
      edit: (_v0, _v1) => `/create/edit?hash=${_v0}${_v1 ? "&et=true" : ""}`,
      interactive: _v0 => `/create/interactive?hash=${_v0}`,
      trimmer: "/create/trimmer",
      template: _v0 => `/create/templates/${_v0}`,
      appStore: function (_v0) {
        let _v1,
          _v2 = "",
          _v3 = "?pid=";
        _v1 = _v767("af_c") ? _v767("af_c") : _v767("utm_campaign") ? _v767("utm_campaign") : document.getElementsByTagName("title")[0] ? document.getElementsByTagName("title")[0].innerText : "unknown";
        let _v4 = "&c=",
          _v5 = "&af_sub1=",
          _v6 = _v767("gclid"),
          _v7 = "&af_keywords=",
          _v8 = "",
          _v9 = _v767("keyword");
        if (_v767("af_pid") ? _v8 = _v767("af_pid") : _v767("utm_source") && (_v8 = _v767("utm_source")), _v8 && ["twitter_int", "facebook_int", "snapchat_int", "doubleclick_int", "yahoogemini_int", "yahoojapan_int"].includes(_v8)) return void alert("DO NOT USE NAMES OF SRNS IN af_pid or utm_source - use the names listed in Other SRNs: Add Parameter section in the landing page article\nhttps://support.appsflyer.com/hc/en-us/articles/360000677217#other-srns-add-parameter");
        if (!_v767("af_redirect")) return _v6 ? (_v3 += "google_lp", _v4 += _v1, _v5 += _v6, _v9) ? (_v7 += _v9, _v2 = _v0 + _v3 + _v4 + _v5 + _v7) : _v2 = _v0 + _v3 + _v4 + _v5 : _v8 ? (_v4 += _v1, _v3 += _v8, _v2 = _v0 + _v3 + _v4) : document.referrer && "" != document.referrer && document.referrer.toLowerCase().includes("facebook") ? " " : (_v4 += _v1, _v3 += "website", _v2 = _v0 + _v3 + _v4);
      }("/mobileredirects?type=store&app=vimeo_create&pid=VC_template_page&c=Mobile_web_template_page&af_web_dp=https%3A%2F%2Fvimeo.com%2Fcreate%2Fvideo-maker") || "",
      category: _v0 => `/create/templates/category/${_v0}`,
      subCategory: (_v0, _v1) => `/create/templates/category/${_v0}/${_v1 || ""}`,
      search: _v96.QUERY,
      preview: _v0 => `/preview/${_v0}`,
      script: (_v0, _v1) => `/create/script?hash=${_v0}&ornt=${_v1}`,
      video: _v0 => `/manage/videos/${_v0}`,
      blankCustomize: "/create/customize?blank=true",
      blankEdit: "/create/edit?blank=true"
    }
  };
  _v0.s(["VimeoCreateDefaultSetup", 0, function ({
    history: _v0,
    playerAssetUrls: _v1
  }) {
    let _v2 = (0, _v8.useContext)(_v92.ViewerContext);
    return (0, _v7.jsx)(_v761, {
      playerAssetUrls: _v1,
      history: _v0,
      viewer: _v2,
      routes: _v768
    });
  }], 0);
}