{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8(_v0) {
    return (_v8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v9(_v0, _v1) {
    return function (_v0) {
      if (Array.isArray(_v0)) return _v0;
    }(_v0) || function (_v0, _v1) {
      var _v2 = null == _v0 ? null : "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
      if (null != _v2) {
        var _v3,
          _v4,
          _v5,
          _v6,
          _v7 = [],
          _v8 = !0,
          _v9 = !1;
        try {
          if (_v5 = (_v2 = _v2.call(_v0)).next, 0 === _v1) {
            if (Object(_v2) !== _v2) return;
            _v8 = !1;
          } else for (; !(_v8 = (_v3 = _v5.call(_v2)).done) && (_v7.push(_v3.value), _v7.length !== _v1); _v8 = !0);
        } catch (_v0) {
          _v9 = !0, _v4 = _v0;
        } finally {
          try {
            if (!_v8 && null != _v2.return && (_v6 = _v2.return(), Object(_v6) !== _v6)) return;
          } finally {
            if (_v9) throw _v4;
          }
        }
        return _v7;
      }
    }(_v0, _v1) || function (_v0, _v1) {
      if (_v0) {
        if ("string" == typeof _v0) return _v10(_v0, _v1);
        var _v2 = Object.prototype.toString.call(_v0).slice(8, -1);
        if ("Object" === _v2 && _v0.constructor && (_v2 = _v0.constructor.name), "Map" === _v2 || "Set" === _v2) return Array.from(_v0);
        if ("Arguments" === _v2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v2)) return _v10(_v0, _v1);
      }
    }(_v0, _v1) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _v10(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  function _v11(_v0, _v1) {
    for (var _v2 = 0; _v2 < _v1.length; _v2++) {
      var _v3 = _v1[_v2];
      _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, function (_v0) {
        var _v1 = function (_v0, _v1) {
          if ("object" != _v8(_v0) || !_v0) return _v0;
          var _v2 = _v0[Symbol.toPrimitive];
          if (void 0 !== _v2) {
            var _v3 = _v2.call(_v0, _v1 || "default");
            if ("object" != _v8(_v3)) return _v3;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === _v1 ? String : Number)(_v0);
        }(_v0, "string");
        return "symbol" == _v8(_v1) ? _v1 : _v1 + "";
      }(_v3.key), _v3);
    }
  }
  var _v12 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
    _v13 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
    _v14 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
    _v15 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
    _v16 = {
      cm: 96 / 2.54,
      mm: 96 / 25.4,
      pt: 96 / 72,
      pc: 16,
      in: 96,
      Q: 96 / 101.6,
      px: 1
    },
    _v17 = Object.keys(_v16),
    _v18 = function () {
      var _v0, _v1;
      function _v2(_v0, _v1) {
        if (!(this instanceof _v2)) throw TypeError("Cannot call a class as a function");
        this.num = _v0, this.unit = _v1, this.num = _v0, this.unit = _v1, Number.isNaN(_v0) && (this.unit = ""), "" === _v1 || _v14.test(_v1) || (this.num = NaN, this.unit = ""), _v17.includes(_v1) && (this.num = _v0 * _v16[_v1], this.unit = "px");
      }
      return _v0 = [{
        key: "add",
        value: function (_v0) {
          return this.unit !== _v0.unit ? new _v2(NaN, "") : new _v2(this.num + _v0.num, this.unit);
        }
      }, {
        key: "subtract",
        value: function (_v0) {
          return this.unit !== _v0.unit ? new _v2(NaN, "") : new _v2(this.num - _v0.num, this.unit);
        }
      }, {
        key: "multiply",
        value: function (_v0) {
          return "" !== this.unit && "" !== _v0.unit && this.unit !== _v0.unit ? new _v2(NaN, "") : new _v2(this.num * _v0.num, this.unit || _v0.unit);
        }
      }, {
        key: "divide",
        value: function (_v0) {
          return "" !== this.unit && "" !== _v0.unit && this.unit !== _v0.unit ? new _v2(NaN, "") : new _v2(this.num / _v0.num, this.unit || _v0.unit);
        }
      }, {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        }
      }, {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        }
      }], _v1 = [{
        key: "parse",
        value: function (_v0) {
          var _v1,
            _v2 = _v9(null != (_v1 = _v15.exec(_v0)) ? _v1 : [], 3),
            _v3 = _v2[1],
            _v4 = _v2[2];
          return new _v2(parseFloat(_v3), null != _v4 ? _v4 : "");
        }
      }], _v0 && _v11(_v2.prototype, _v0), _v1 && _v11(_v2, _v1), Object.defineProperty(_v2, "prototype", {
        writable: !1
      }), _v2;
    }();
  function _v19(_v0) {
    if (_v0.includes("NaN")) return "NaN";
    for (var _v1 = _v0; _v1.includes("*") || _v1.includes("/");) {
      var _v2,
        _v3 = _v9(null != (_v2 = _v12.exec(_v1)) ? _v2 : [], 4),
        _v4 = _v3[1],
        _v5 = _v3[2],
        _v6 = _v3[3],
        _v7 = _v18.parse(null != _v4 ? _v4 : ""),
        _v8 = _v18.parse(null != _v6 ? _v6 : ""),
        _v9 = "*" === _v5 ? _v7.multiply(_v8) : _v7.divide(_v8);
      if (_v9.isNaN()) return "NaN";
      _v1 = _v1.replace(_v12, _v9.toString());
    }
    for (; _v1.includes("+") || /.-\d+(?:\.\d+)?/.test(_v1);) {
      var _v10,
        _v11 = _v9(null != (_v10 = _v13.exec(_v1)) ? _v10 : [], 4),
        _v12 = _v11[1],
        _v13 = _v11[2],
        _v14 = _v11[3],
        _v15 = _v18.parse(null != _v12 ? _v12 : ""),
        _v16 = _v18.parse(null != _v14 ? _v14 : ""),
        _v17 = "+" === _v13 ? _v15.add(_v16) : _v15.subtract(_v16);
      if (_v17.isNaN()) return "NaN";
      _v1 = _v1.replace(_v13, _v17.toString());
    }
    return _v1;
  }
  var _v20 = /\(([^()]*)\)/;
  function _v21(_v0) {
    var _v1 = function (_v0) {
      try {
        var _v1;
        return _v1 = _v0.replace(/\s+/g, ""), _v1 = function (_v0) {
          for (var _v1 = _v0; _v1.includes("(");) {
            var _v2 = _v9(_v20.exec(_v1), 2)[1];
            _v1 = _v1.replace(_v20, _v19(_v2));
          }
          return _v1;
        }(_v1), _v1 = _v19(_v1);
      } catch (_v0) {
        return "NaN";
      }
    }(_v0.slice(5, -1));
    return "NaN" === _v1 ? "" : _v1;
  }
  var _v22 = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
    _v23 = ["dx", "dy", "angle", "className", "breakAll"];
  function _v24() {
    return (_v24 = Object.assign.bind()).apply(this, arguments);
  }
  function _v25(_v0, _v1) {
    if (null == _v0) return {};
    var _v2,
      _v3,
      _v4 = function (_v0, _v1) {
        if (null == _v0) return {};
        var _v2 = {};
        for (var _v3 in _v0) if (Object.prototype.hasOwnProperty.call(_v0, _v3)) {
          if (_v1.indexOf(_v3) >= 0) continue;
          _v2[_v3] = _v0[_v3];
        }
        return _v2;
      }(_v0, _v1);
    if (Object.getOwnPropertySymbols) {
      var _v5 = Object.getOwnPropertySymbols(_v0);
      for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], !(_v1.indexOf(_v2) >= 0) && Object.prototype.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
    }
    return _v4;
  }
  function _v26(_v0, _v1) {
    return function (_v0) {
      if (Array.isArray(_v0)) return _v0;
    }(_v0) || function (_v0, _v1) {
      var _v2 = null == _v0 ? null : "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
      if (null != _v2) {
        var _v3,
          _v4,
          _v5,
          _v6,
          _v7 = [],
          _v8 = !0,
          _v9 = !1;
        try {
          if (_v5 = (_v2 = _v2.call(_v0)).next, 0 === _v1) {
            if (Object(_v2) !== _v2) return;
            _v8 = !1;
          } else for (; !(_v8 = (_v3 = _v5.call(_v2)).done) && (_v7.push(_v3.value), _v7.length !== _v1); _v8 = !0);
        } catch (_v0) {
          _v9 = !0, _v4 = _v0;
        } finally {
          try {
            if (!_v8 && null != _v2.return && (_v6 = _v2.return(), Object(_v6) !== _v6)) return;
          } finally {
            if (_v9) throw _v4;
          }
        }
        return _v7;
      }
    }(_v0, _v1) || function (_v0, _v1) {
      if (_v0) {
        if ("string" == typeof _v0) return _v27(_v0, _v1);
        var _v2 = Object.prototype.toString.call(_v0).slice(8, -1);
        if ("Object" === _v2 && _v0.constructor && (_v2 = _v0.constructor.name), "Map" === _v2 || "Set" === _v2) return Array.from(_v0);
        if ("Arguments" === _v2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v2)) return _v27(_v0, _v1);
      }
    }(_v0, _v1) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _v27(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  var _v28 = /[ \f\n\r\t\v\u2028\u2029]+/,
    _v29 = function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.breakAll,
        _v3 = _v0.style;
      try {
        var _v4 = [];
        (0, _v2.default)(_v1) || (_v4 = _v2 ? _v1.toString().split("") : _v1.toString().split(_v28));
        var _v5 = _v4.map(function (_v0) {
            return {
              word: _v0,
              width: (0, _v7.getStringSize)(_v0, _v3).width
            };
          }),
          _v6 = _v2 ? 0 : (0, _v7.getStringSize)(" ", _v3).width;
        return {
          wordsWithComputedWidth: _v5,
          spaceWidth: _v6
        };
      } catch (_v0) {
        return null;
      }
    },
    _v30 = function (_v0, _v1, _v2, _v3, _v4) {
      var _v5,
        _v6 = _v0.maxLines,
        _v7 = _v0.children,
        _v8 = _v0.style,
        _v9 = _v0.breakAll,
        _v10 = (0, _v4.isNumber)(_v6),
        _v11 = function () {
          var _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return _v0.reduce(function (_v0, _v1) {
            var _v2 = _v1.word,
              _v3 = _v1.width,
              _v4 = _v0[_v0.length - 1];
            return _v4 && (null == _v3 || _v4 || _v4.width + _v3 + _v2 < Number(_v3)) ? (_v4.words.push(_v2), _v4.width += _v3 + _v2) : _v0.push({
              words: [_v2],
              width: _v3
            }), _v0;
          }, []);
        },
        _v12 = _v11(_v1);
      if (!_v10) return _v12;
      for (var _v13 = function (_v0) {
          var _v1 = _v11(_v29({
            breakAll: _v9,
            style: _v8,
            children: _v7.slice(0, _v0) + "…"
          }).wordsWithComputedWidth);
          return [_v1.length > _v6 || _v1.reduce(function (_v0, _v1) {
            return _v0.width > _v1.width ? _v0 : _v1;
          }).width > Number(_v3), _v1];
        }, _v14 = 0, _v15 = _v7.length - 1, _v16 = 0; _v14 <= _v15 && _v16 <= _v7.length - 1;) {
        var _v17 = Math.floor((_v14 + _v15) / 2),
          _v18 = _v26(_v13(_v17 - 1), 2),
          _v19 = _v18[0],
          _v20 = _v18[1],
          _v21 = _v26(_v13(_v17), 1)[0];
        if (_v19 || _v21 || (_v14 = _v17 + 1), _v19 && _v21 && (_v15 = _v17 - 1), !_v19 && _v21) {
          _v5 = _v20;
          break;
        }
        _v16++;
      }
      return _v5 || _v12;
    },
    _v31 = function (_v0) {
      return [{
        words: (0, _v2.default)(_v0) ? [] : _v0.toString().split(_v28)
      }];
    },
    _v32 = function (_v0) {
      var _v1 = _v0.width,
        _v2 = _v0.scaleToFit,
        _v3 = _v0.children,
        _v4 = _v0.style,
        _v5 = _v0.breakAll,
        _v6 = _v0.maxLines;
      if ((_v1 || _v2) && !_v5.Global.isSsr) {
        var _v7 = _v29({
          breakAll: _v5,
          children: _v3,
          style: _v4
        });
        if (!_v7) return _v31(_v3);
        var _v8 = _v7.wordsWithComputedWidth,
          _v9 = _v7.spaceWidth;
        return _v30({
          breakAll: _v5,
          children: _v3,
          maxLines: _v6,
          style: _v4
        }, _v8, _v9, _v1, _v2);
      }
      return _v31(_v3);
    },
    _v33 = "#808080";
  _v0.s(["Text", 0, function (_v0) {
    var _v1,
      _v2 = _v0.x,
      _v3 = void 0 === _v2 ? 0 : _v2,
      _v4 = _v0.y,
      _v5 = void 0 === _v4 ? 0 : _v4,
      _v6 = _v0.lineHeight,
      _v7 = void 0 === _v6 ? "1em" : _v6,
      _v8 = _v0.capHeight,
      _v9 = void 0 === _v8 ? "0.71em" : _v8,
      _v10 = _v0.scaleToFit,
      _v11 = void 0 !== _v10 && _v10,
      _v12 = _v0.textAnchor,
      _v13 = _v0.verticalAnchor,
      _v14 = _v0.fill,
      _v15 = void 0 === _v14 ? _v33 : _v14,
      _v16 = _v25(_v0, _v22),
      _v17 = (0, _v1.useMemo)(function () {
        return _v32({
          breakAll: _v16.breakAll,
          children: _v16.children,
          maxLines: _v16.maxLines,
          scaleToFit: _v11,
          style: _v16.style,
          width: _v16.width
        });
      }, [_v16.breakAll, _v16.children, _v16.maxLines, _v11, _v16.style, _v16.width]),
      _v18 = _v16.dx,
      _v19 = _v16.dy,
      _v20 = _v16.angle,
      _v21 = _v16.className,
      _v22 = _v16.breakAll,
      _v23 = _v25(_v16, _v23);
    if (!(0, _v4.isNumOrStr)(_v3) || !(0, _v4.isNumOrStr)(_v5)) return null;
    var _v24 = _v3 + ((0, _v4.isNumber)(_v18) ? _v18 : 0),
      _v25 = _v5 + ((0, _v4.isNumber)(_v19) ? _v19 : 0);
    switch (void 0 === _v13 ? "end" : _v13) {
      case "start":
        _v1 = _v21("calc(".concat(_v9, ")"));
        break;
      case "middle":
        _v1 = _v21("calc(".concat((_v17.length - 1) / 2, " * -").concat(_v7, " + (").concat(_v9, " / 2))"));
        break;
      default:
        _v1 = _v21("calc(".concat(_v17.length - 1, " * -").concat(_v7, ")"));
    }
    var _v26 = [];
    if (_v11) {
      var _v27 = _v17[0].width,
        _v28 = _v16.width;
      _v26.push("scale(".concat(((0, _v4.isNumber)(_v28) ? _v28 / _v27 : 1) / _v27, ")"));
    }
    return _v20 && _v26.push("rotate(".concat(_v20, ", ").concat(_v24, ", ").concat(_v25, ")")), _v26.length && (_v23.transform = _v26.join(" ")), _v1.default.createElement("text", _v24({}, (0, _v6.filterProps)(_v23, !0), {
      x: _v24,
      y: _v25,
      className: (0, _v3.default)("recharts-text", _v21),
      textAnchor: void 0 === _v12 ? "start" : _v12,
      fill: _v15.includes("url") ? _v33 : _v15
    }), _v17.map(function (_v0, _v1) {
      var _v2 = _v0.words.join(_v22 ? "" : " ");
      return _v1.default.createElement("tspan", {
        x: _v24,
        dy: 0 === _v1 ? _v1 : _v7,
        key: "".concat(_v2, "-").concat(_v1)
      }, _v2);
    }));
  }], 0);
}