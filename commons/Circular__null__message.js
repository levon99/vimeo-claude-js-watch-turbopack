{
  var _v3 = _v0.i(0),
    _v4 = Object.getOwnPropertyDescriptors || function (_v0) {
      for (var _v1 = Object.keys(_v0), _v2 = {}, _v3 = 0; _v3 < _v1.length; _v3++) _v2[_v1[_v3]] = Object.getOwnPropertyDescriptor(_v0, _v1[_v3]);
      return _v2;
    },
    _v5 = /%[sdj%]/g;
  _v2.format = function (_v0) {
    if (!_v19(_v0)) {
      for (var _v1 = [], _v2 = 0; _v2 < arguments.length; _v2++) _v1.push(_v9(arguments[_v2]));
      return _v1.join(" ");
    }
    for (var _v2 = 1, _v3 = arguments, _v4 = _v3.length, _v5 = String(_v0).replace(_v5, function (_v0) {
        if ("%%" === _v0) return "%";
        if (_v2 >= _v4) return _v0;
        switch (_v0) {
          case "%s":
            return String(_v3[_v2++]);
          case "%d":
            return Number(_v3[_v2++]);
          case "%j":
            try {
              return JSON.stringify(_v3[_v2++]);
            } catch (_v0) {
              return "[Circular]";
            }
          default:
            return _v0;
        }
      }), _v6 = _v3[_v2]; _v2 < _v4; _v6 = _v3[++_v2]) _v17(_v6) || !_v22(_v6) ? _v5 += " " + _v6 : _v5 += " " + _v9(_v6);
    return _v5;
  }, _v2.deprecate = function (_v0, _v1) {
    if (void 0 !== _v3.default && !0 === _v3.default.noDeprecation) return _v0;
    if (void 0 === _v3.default) return function () {
      return _v2.deprecate(_v0, _v1).apply(this, arguments);
    };
    var _v2 = !1;
    return function () {
      if (!_v2) {
        if (_v3.default.throwDeprecation) throw Error(_v1);
        _v3.default.traceDeprecation ? console.trace(_v1) : console.error(_v1), _v2 = !0;
      }
      return _v0.apply(this, arguments);
    };
  };
  var _v6 = {},
    _v7 = /^$/;
  if (_v3.default.env.NODE_DEBUG) {
    var _v8 = _v3.default.env.NODE_DEBUG;
    _v7 = RegExp("^" + (_v8 = _v8.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase()) + "$", "i");
  }
  function _v9(_v0, _v1) {
    var _v2 = {
      seen: [],
      stylize: _v11
    };
    return arguments.length >= 3 && (_v2.depth = arguments[2]), arguments.length >= 4 && (_v2.colors = arguments[3]), _v16(_v1) ? _v2.showHidden = _v1 : _v1 && _v2._extend(_v2, _v1), _v20(_v2.showHidden) && (_v2.showHidden = !1), _v20(_v2.depth) && (_v2.depth = 2), _v20(_v2.colors) && (_v2.colors = !1), _v20(_v2.customInspect) && (_v2.customInspect = !0), _v2.colors && (_v2.stylize = _v10), _v12(_v2, _v0, _v2.depth);
  }
  function _v10(_v0, _v1) {
    var _v2 = _v9.styles[_v1];
    return _v2 ? "\x1b[" + _v9.colors[_v2][0] + "m" + _v0 + "\x1b[" + _v9.colors[_v2][1] + "m" : _v0;
  }
  function _v11(_v0, _v1) {
    return _v0;
  }
  function _v12(_v0, _v1, _v2) {
    if (_v0.customInspect && _v1 && _v25(_v1.inspect) && _v1.inspect !== _v2.inspect && !(_v1.constructor && _v1.constructor.prototype === _v1)) {
      var _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9 = _v1.inspect(_v2, _v0);
      return _v19(_v9) || (_v9 = _v12(_v0, _v9, _v2)), _v9;
    }
    var _v10 = function (_v0, _v1) {
      if (_v20(_v1)) return _v0.stylize("undefined", "undefined");
      if (_v19(_v1)) {
        var _v2 = "'" + JSON.stringify(_v1).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return _v0.stylize(_v2, "string");
      }
      return _v18(_v1) ? _v0.stylize("" + _v1, "number") : _v16(_v1) ? _v0.stylize("" + _v1, "boolean") : _v17(_v1) ? _v0.stylize("null", "null") : void 0;
    }(_v0, _v1);
    if (_v10) return _v10;
    var _v11 = Object.keys(_v1),
      _v12 = (_v7 = {}, _v11.forEach(function (_v0, _v1) {
        _v7[_v0] = !0;
      }), _v7);
    if (_v0.showHidden && (_v11 = Object.getOwnPropertyNames(_v1)), _v24(_v1) && (_v11.indexOf("message") >= 0 || _v11.indexOf("description") >= 0)) return _v13(_v1);
    if (0 === _v11.length) {
      if (_v25(_v1)) {
        var _v13 = _v1.name ? ": " + _v1.name : "";
        return _v0.stylize("[Function" + _v13 + "]", "special");
      }
      if (_v21(_v1)) return _v0.stylize(RegExp.prototype.toString.call(_v1), "regexp");
      if (_v23(_v1)) return _v0.stylize(Date.prototype.toString.call(_v1), "date");
      if (_v24(_v1)) return _v13(_v1);
    }
    var _v14 = "",
      _v15 = !1,
      _v16 = ["{", "}"];
    if (_v15(_v1) && (_v15 = !0, _v16 = ["[", "]"]), _v25(_v1) && (_v14 = " [Function" + (_v1.name ? ": " + _v1.name : "") + "]"), _v21(_v1) && (_v14 = " " + RegExp.prototype.toString.call(_v1)), _v23(_v1) && (_v14 = " " + Date.prototype.toUTCString.call(_v1)), _v24(_v1) && (_v14 = " " + _v13(_v1)), 0 === _v11.length && (!_v15 || 0 == _v1.length)) return _v16[0] + _v14 + _v16[1];
    if (_v2 < 0) if (_v21(_v1)) return _v0.stylize(RegExp.prototype.toString.call(_v1), "regexp");else return _v0.stylize("[Object]", "special");
    return _v0.seen.push(_v1), _v8 = _v15 ? function (_v0, _v1, _v2, _v3, _v4) {
      for (var _v5 = [], _v6 = 0, _v7 = _v1.length; _v6 < _v7; ++_v6) _v29(_v1, String(_v6)) ? _v5.push(_v14(_v0, _v1, _v2, _v3, String(_v6), !0)) : _v5.push("");
      return _v4.forEach(function (_v0) {
        _v0.match(/^\d+$/) || _v5.push(_v14(_v0, _v1, _v2, _v3, _v0, !0));
      }), _v5;
    }(_v0, _v1, _v2, _v12, _v11) : _v11.map(function (_v0) {
      return _v14(_v0, _v1, _v2, _v12, _v0, _v15);
    }), _v0.seen.pop(), _v3 = _v8, _v4 = _v14, _v5 = _v16, _v6 = 0, _v3.reduce(function (_v0, _v1) {
      return _v6++, _v1.indexOf("\n") >= 0 && _v6++, _v0 + _v1.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) > 60 ? _v5[0] + ("" === _v4 ? "" : _v4 + "\n ") + " " + _v3.join(",\n  ") + " " + _v5[1] : _v5[0] + _v4 + " " + _v3.join(", ") + " " + _v5[1];
  }
  function _v13(_v0) {
    return "[" + Error.prototype.toString.call(_v0) + "]";
  }
  function _v14(_v0, _v1, _v2, _v3, _v4, _v5) {
    var _v6, _v7, _v8;
    if ((_v8 = Object.getOwnPropertyDescriptor(_v1, _v4) || {
      value: _v1[_v4]
    }).get ? _v7 = _v8.set ? _v0.stylize("[Getter/Setter]", "special") : _v0.stylize("[Getter]", "special") : _v8.set && (_v7 = _v0.stylize("[Setter]", "special")), _v29(_v3, _v4) || (_v6 = "[" + _v4 + "]"), !_v7 && (0 > _v0.seen.indexOf(_v8.value) ? (_v7 = _v17(_v2) ? _v12(_v0, _v8.value, null) : _v12(_v0, _v8.value, _v2 - 1)).indexOf("\n") > -1 && (_v7 = _v5 ? _v7.split("\n").map(function (_v0) {
      return "  " + _v0;
    }).join("\n").slice(2) : "\n" + _v7.split("\n").map(function (_v0) {
      return "   " + _v0;
    }).join("\n")) : _v7 = _v0.stylize("[Circular]", "special")), _v20(_v6)) {
      if (_v5 && _v4.match(/^\d+$/)) return _v7;
      (_v6 = JSON.stringify("" + _v4)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (_v6 = _v6.slice(1, -1), _v6 = _v0.stylize(_v6, "name")) : (_v6 = _v6.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), _v6 = _v0.stylize(_v6, "string"));
    }
    return _v6 + ": " + _v7;
  }
  function _v15(_v0) {
    return Array.isArray(_v0);
  }
  function _v16(_v0) {
    return "boolean" == typeof _v0;
  }
  function _v17(_v0) {
    return null === _v0;
  }
  function _v18(_v0) {
    return "number" == typeof _v0;
  }
  function _v19(_v0) {
    return "string" == typeof _v0;
  }
  function _v20(_v0) {
    return void 0 === _v0;
  }
  function _v21(_v0) {
    return _v22(_v0) && "[object RegExp]" === _v26(_v0);
  }
  function _v22(_v0) {
    return "object" == typeof _v0 && null !== _v0;
  }
  function _v23(_v0) {
    return _v22(_v0) && "[object Date]" === _v26(_v0);
  }
  function _v24(_v0) {
    return _v22(_v0) && ("[object Error]" === _v26(_v0) || _v0 instanceof Error);
  }
  function _v25(_v0) {
    return "function" == typeof _v0;
  }
  function _v26(_v0) {
    return Object.prototype.toString.call(_v0);
  }
  function _v27(_v0) {
    return _v0 < 10 ? "0" + _v0.toString(10) : _v0.toString(10);
  }
  _v2.debuglog = function (_v0) {
    if (!_v6[_v0 = _v0.toUpperCase()]) if (_v7.test(_v0)) {
      var _v1 = _v3.default.pid;
      _v6[_v0] = function () {
        var _v0 = _v2.format.apply(_v2, arguments);
        console.error("%s %d: %s", _v0, _v1, _v0);
      };
    } else _v6[_v0] = function () {};
    return _v6[_v0];
  }, _v2.inspect = _v9, _v9.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }, _v9.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
  }, _v2.types = _v0.r(0), _v2.isArray = _v15, _v2.isBoolean = _v16, _v2.isNull = _v17, _v2.isNullOrUndefined = function (_v0) {
    return null == _v0;
  }, _v2.isNumber = _v18, _v2.isString = _v19, _v2.isSymbol = function (_v0) {
    return "symbol" == typeof _v0;
  }, _v2.isUndefined = _v20, _v2.isRegExp = _v21, _v2.types.isRegExp = _v21, _v2.isObject = _v22, _v2.isDate = _v23, _v2.types.isDate = _v23, _v2.isError = _v24, _v2.types.isNativeError = _v24, _v2.isFunction = _v25, _v2.isPrimitive = function (_v0) {
    return null === _v0 || "boolean" == typeof _v0 || "number" == typeof _v0 || "string" == typeof _v0 || "symbol" == typeof _v0 || void 0 === _v0;
  }, _v2.isBuffer = _v0.r(0);
  var _v28 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function _v29(_v0, _v1) {
    return Object.prototype.hasOwnProperty.call(_v0, _v1);
  }
  _v2.log = function () {
    var _v0, _v1;
    console.log("%s - %s", (_v1 = [_v27((_v0 = new Date()).getHours()), _v27(_v0.getMinutes()), _v27(_v0.getSeconds())].join(":"), [_v0.getDate(), _v28[_v0.getMonth()], _v1].join(" ")), _v2.format.apply(_v2, arguments));
  }, _v2.inherits = _v0.r(0), _v2._extend = function (_v0, _v1) {
    if (!_v1 || !_v22(_v1)) return _v0;
    for (var _v2 = Object.keys(_v1), _v3 = _v2.length; _v3--;) _v0[_v2[_v3]] = _v1[_v2[_v3]];
    return _v0;
  };
  var _v30 = "u" > typeof Symbol ? Symbol("util.promisify.custom") : void 0;
  function _v31(_v0, _v1) {
    if (!_v0) {
      var _v2 = Error("Promise was rejected with a falsy value");
      _v2.reason = _v0, _v0 = _v2;
    }
    return _v1(_v0);
  }
  _v2.promisify = function (_v0) {
    if ("function" != typeof _v0) throw TypeError('The "original" argument must be of type Function');
    if (_v30 && _v0[_v30]) {
      var _v1 = _v0[_v30];
      if ("function" != typeof _v1) throw TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(_v1, _v30, {
        value: _v1,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), _v1;
    }
    function _v1() {
      for (var _v0, _v1, _v2 = new Promise(function (_v0, _v1) {
          _v0 = _v0, _v1 = _v1;
        }), _v3 = [], _v4 = 0; _v4 < arguments.length; _v4++) _v3.push(arguments[_v4]);
      _v3.push(function (_v0, _v1) {
        _v0 ? _v1(_v0) : _v0(_v1);
      });
      try {
        _v0.apply(this, _v3);
      } catch (_v0) {
        _v1(_v0);
      }
      return _v2;
    }
    return Object.setPrototypeOf(_v1, Object.getPrototypeOf(_v0)), _v30 && Object.defineProperty(_v1, _v30, {
      value: _v1,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), Object.defineProperties(_v1, _v4(_v0));
  }, _v2.promisify.custom = _v30, _v2.callbackify = function (_v0) {
    if ("function" != typeof _v0) throw TypeError('The "original" argument must be of type Function');
    function _v1() {
      for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0.push(arguments[_v1]);
      var _v2 = _v0.pop();
      if ("function" != typeof _v2) throw TypeError("The last argument must be of type Function");
      var _v3 = this,
        _v4 = function () {
          return _v2.apply(_v3, arguments);
        };
      _v0.apply(this, _v0).then(function (_v0) {
        _v3.default.nextTick(_v4.bind(null, null, _v0));
      }, function (_v0) {
        _v3.default.nextTick(_v31.bind(null, _v0, _v4));
      });
    }
    return Object.setPrototypeOf(_v1, Object.getPrototypeOf(_v0)), Object.defineProperties(_v1, _v4(_v0)), _v1;
  };
}