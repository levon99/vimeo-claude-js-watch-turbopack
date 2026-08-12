{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  function _v10(_v0) {
    return (_v10 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v11(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v12(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v11(Object(_v2), !0).forEach(function (_v0) {
        _v13(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v11(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v13(_v0, _v1, _v2) {
    var _v3;
    return (_v3 = function (_v0, _v1) {
      if ("object" != _v10(_v0) || !_v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" != _v10(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v1, "string"), (_v1 = "symbol" == _v10(_v3) ? _v3 : _v3 + "") in _v0) ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v14(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  var _v15 = Math.PI / 180,
    _v16 = function (_v0, _v1, _v2, _v3) {
      return {
        x: _v0 + Math.cos(-_v15 * _v3) * _v2,
        y: _v1 + Math.sin(-_v15 * _v3) * _v2
      };
    },
    _v17 = function (_v0, _v1) {
      var _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      return Math.min(Math.abs(_v0 - (_v2.left || 0) - (_v2.right || 0)), Math.abs(_v1 - (_v2.top || 0) - (_v2.bottom || 0))) / 2;
    },
    _v18 = function (_v0, _v1) {
      var _v2 = _v0.x,
        _v3 = _v0.y;
      return Math.sqrt(Math.pow(_v2 - _v1.x, 2) + Math.pow(_v3 - _v1.y, 2));
    },
    _v19 = function (_v0, _v1) {
      var _v2 = _v0.x,
        _v3 = _v0.y,
        _v4 = _v1.cx,
        _v5 = _v1.cy,
        _v6 = _v18({
          x: _v2,
          y: _v3
        }, {
          x: _v4,
          y: _v5
        });
      if (_v6 <= 0) return {
        radius: _v6
      };
      var _v7 = Math.acos((_v2 - _v4) / _v6);
      return _v3 > _v5 && (_v7 = 2 * Math.PI - _v7), {
        radius: _v6,
        angle: 180 * _v7 / Math.PI,
        angleInRadian: _v7
      };
    },
    _v20 = function (_v0) {
      var _v1 = _v0.startAngle,
        _v2 = _v0.endAngle,
        _v3 = Math.min(Math.floor(_v1 / 360), Math.floor(_v2 / 360));
      return {
        startAngle: _v1 - 360 * _v3,
        endAngle: _v2 - 360 * _v3
      };
    };
  function _v21(_v0) {
    return (_v21 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  _v0.s(["RADIAN", 0, _v15, "formatAxisMap", 0, function (_v0, _v1, _v2, _v3, _v4) {
    var _v5 = _v0.width,
      _v6 = _v0.height,
      _v7 = _v0.startAngle,
      _v8 = _v0.endAngle,
      _v9 = (0, _v8.getPercentValue)(_v0.cx, _v5, _v5 / 2),
      _v10 = (0, _v8.getPercentValue)(_v0.cy, _v6, _v6 / 2),
      _v11 = _v17(_v5, _v6, _v2),
      _v12 = (0, _v8.getPercentValue)(_v0.innerRadius, _v11, 0),
      _v13 = (0, _v8.getPercentValue)(_v0.outerRadius, _v11, .8 * _v11);
    return Object.keys(_v1).reduce(function (_v0, _v1) {
      var _v2,
        _v3 = _v1[_v1],
        _v4 = _v3.domain,
        _v5 = _v3.reversed;
      if ((0, _v2.default)(_v3.range)) "angleAxis" === _v3 ? _v2 = [_v7, _v8] : "radiusAxis" === _v3 && (_v2 = [_v12, _v13]), _v5 && (_v2 = [_v2[1], _v2[0]]);else {
        var _v6,
          _v7 = function (_v0) {
            if (Array.isArray(_v0)) return _v0;
          }(_v6 = _v2 = _v3.range) || function (_v0) {
            var _v1 = null == _v0 ? null : "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
            if (null != _v1) {
              var _v2,
                _v3,
                _v4,
                _v5,
                _v6 = [],
                _v7 = !0,
                _v8 = !1;
              try {
                _v4 = (_v1 = _v1.call(_v0)).next, !1;
                for (; !(_v7 = (_v2 = _v4.call(_v1)).done) && (_v6.push(_v2.value), 2 !== _v6.length); _v7 = !0);
              } catch (_v0) {
                _v8 = !0, _v3 = _v0;
              } finally {
                try {
                  if (!_v7 && null != _v1.return && (_v5 = _v1.return(), Object(_v5) !== _v5)) return;
                } finally {
                  if (_v8) throw _v3;
                }
              }
              return _v6;
            }
          }(_v6) || function (_v0) {
            if (_v0) {
              if ("string" == typeof _v0) return _v14(_v0, 2);
              var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
              if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
              if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v14(_v0, 2);
            }
          }(_v6) || function () {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        _v7 = _v7[0], _v8 = _v7[1];
      }
      var _v8 = (0, _v9.parseScale)(_v3, _v4),
        _v9 = _v8.realScaleType,
        _v10 = _v8.scale;
      _v10.domain(_v4).range(_v2), (0, _v9.checkDomainOfScale)(_v10);
      var _v11 = (0, _v9.getTicksOfScale)(_v10, _v12(_v12({}, _v3), {}, {
          realScaleType: _v9
        })),
        _v12 = _v12(_v12(_v12({}, _v3), _v11), {}, {
          range: _v2,
          radius: _v13,
          realScaleType: _v9,
          scale: _v10,
          cx: _v9,
          cy: _v10,
          innerRadius: _v12,
          outerRadius: _v13,
          startAngle: _v7,
          endAngle: _v8
        });
      return _v12(_v12({}, _v0), {}, _v13({}, _v1, _v12));
    }, {});
  }, "getMaxRadius", 0, _v17, "getTickClassName", 0, function (_v0) {
    return (0, _v1.isValidElement)(_v0) || (0, _v3.default)(_v0) || "boolean" == typeof _v0 ? "" : _v0.className;
  }, "inRangeOfSector", 0, function (_v0, _v1) {
    var _v2,
      _v3 = _v19({
        x: _v0.x,
        y: _v0.y
      }, _v1),
      _v4 = _v3.radius,
      _v5 = _v3.angle,
      _v6 = _v1.innerRadius,
      _v7 = _v1.outerRadius;
    if (_v4 < _v6 || _v4 > _v7) return !1;
    if (0 === _v4) return !0;
    var _v8 = _v20(_v1),
      _v9 = _v8.startAngle,
      _v10 = _v8.endAngle,
      _v11 = _v5;
    if (_v9 <= _v10) {
      for (; _v11 > _v10;) _v11 -= 360;
      for (; _v11 < _v9;) _v11 += 360;
      _v2 = _v11 >= _v9 && _v11 <= _v10;
    } else {
      for (; _v11 > _v9;) _v11 -= 360;
      for (; _v11 < _v10;) _v11 += 360;
      _v2 = _v11 >= _v10 && _v11 <= _v9;
    }
    return _v2 ? _v12(_v12({}, _v1), {}, {
      radius: _v4,
      angle: _v11 + 360 * Math.min(Math.floor(_v1.startAngle / 360), Math.floor(_v1.endAngle / 360))
    }) : null;
  }, "polarToCartesian", 0, _v16], 0);
  var _v22 = ["offset"];
  function _v23(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  function _v24(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v25(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v24(Object(_v2), !0).forEach(function (_v0) {
        var _v1, _v2, _v3;
        _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = function (_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" != _v21(_v0) || !_v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" != _v21(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === _v1 ? String : Number)(_v0);
          }(_v0, "string");
          return "symbol" == _v21(_v1) ? _v1 : _v1 + "";
        }(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
          value: _v3,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _v1[_v2] = _v3;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v24(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v26() {
    return (_v26 = Object.assign.bind()).apply(this, arguments);
  }
  var _v27 = function (_v0) {
      var _v1 = _v0.value,
        _v2 = _v0.formatter,
        _v3 = (0, _v2.default)(_v0.children) ? _v1 : _v0.children;
      return (0, _v3.default)(_v2) ? _v2(_v3) : _v3;
    },
    _v28 = function (_v0, _v1, _v2) {
      var _v3,
        _v4,
        _v5 = _v0.position,
        _v6 = _v0.viewBox,
        _v7 = _v0.offset,
        _v8 = _v0.className,
        _v9 = _v6.cx,
        _v10 = _v6.cy,
        _v11 = _v6.innerRadius,
        _v12 = _v6.outerRadius,
        _v13 = _v6.startAngle,
        _v14 = _v6.endAngle,
        _v15 = _v6.clockWise,
        _v16 = (_v11 + _v12) / 2,
        _v17 = (0, _v8.mathSign)(_v14 - _v13) * Math.min(Math.abs(_v14 - _v13), 360),
        _v18 = _v17 >= 0 ? 1 : -1;
      "insideStart" === _v5 ? (_v3 = _v13 + _v18 * _v7, _v4 = _v15) : "insideEnd" === _v5 ? (_v3 = _v14 - _v18 * _v7, _v4 = !_v15) : "end" === _v5 && (_v3 = _v14 + _v18 * _v7, _v4 = _v15), _v4 = _v17 <= 0 ? _v4 : !_v4;
      var _v19 = _v16(_v9, _v10, _v16, _v3),
        _v20 = _v16(_v9, _v10, _v16, _v3 + (_v4 ? 1 : -1) * 359),
        _v21 = "M".concat(_v19.x, ",").concat(_v19.y, "\n    A").concat(_v16, ",").concat(_v16, ",0,1,").concat(+!_v4, ",\n    ").concat(_v20.x, ",").concat(_v20.y),
        _v22 = (0, _v2.default)(_v0.id) ? (0, _v8.uniqueId)("recharts-radial-line-") : _v0.id;
      return _v1.default.createElement("text", _v26({}, _v2, {
        dominantBaseline: "central",
        className: (0, _v5.default)("recharts-radial-bar-label", _v8)
      }), _v1.default.createElement("defs", null, _v1.default.createElement("path", {
        id: _v22,
        d: _v21
      })), _v1.default.createElement("textPath", {
        xlinkHref: "#".concat(_v22)
      }, _v1));
    },
    _v29 = function (_v0) {
      var _v1 = _v0.viewBox,
        _v2 = _v0.offset,
        _v3 = _v0.position,
        _v4 = _v1.cx,
        _v5 = _v1.cy,
        _v6 = _v1.innerRadius,
        _v7 = _v1.outerRadius,
        _v8 = (_v1.startAngle + _v1.endAngle) / 2;
      if ("outside" === _v3) {
        var _v9 = _v16(_v4, _v5, _v7 + _v2, _v8),
          _v10 = _v9.x;
        return {
          x: _v10,
          y: _v9.y,
          textAnchor: _v10 >= _v4 ? "start" : "end",
          verticalAnchor: "middle"
        };
      }
      if ("center" === _v3) return {
        x: _v4,
        y: _v5,
        textAnchor: "middle",
        verticalAnchor: "middle"
      };
      if ("centerTop" === _v3) return {
        x: _v4,
        y: _v5,
        textAnchor: "middle",
        verticalAnchor: "start"
      };
      if ("centerBottom" === _v3) return {
        x: _v4,
        y: _v5,
        textAnchor: "middle",
        verticalAnchor: "end"
      };
      var _v11 = _v16(_v4, _v5, (_v6 + _v7) / 2, _v8);
      return {
        x: _v11.x,
        y: _v11.y,
        textAnchor: "middle",
        verticalAnchor: "middle"
      };
    },
    _v30 = function (_v0) {
      var _v1 = _v0.viewBox,
        _v2 = _v0.parentViewBox,
        _v3 = _v0.offset,
        _v4 = _v0.position,
        _v5 = _v1.x,
        _v6 = _v1.y,
        _v7 = _v1.width,
        _v8 = _v1.height,
        _v9 = _v8 >= 0 ? 1 : -1,
        _v10 = _v9 * _v3,
        _v11 = _v9 > 0 ? "end" : "start",
        _v12 = _v9 > 0 ? "start" : "end",
        _v13 = _v7 >= 0 ? 1 : -1,
        _v14 = _v13 * _v3,
        _v15 = _v13 > 0 ? "end" : "start",
        _v16 = _v13 > 0 ? "start" : "end";
      if ("top" === _v4) return _v25(_v25({}, {
        x: _v5 + _v7 / 2,
        y: _v6 - _v9 * _v3,
        textAnchor: "middle",
        verticalAnchor: _v11
      }), _v2 ? {
        height: Math.max(_v6 - _v2.y, 0),
        width: _v7
      } : {});
      if ("bottom" === _v4) return _v25(_v25({}, {
        x: _v5 + _v7 / 2,
        y: _v6 + _v8 + _v10,
        textAnchor: "middle",
        verticalAnchor: _v12
      }), _v2 ? {
        height: Math.max(_v2.y + _v2.height - (_v6 + _v8), 0),
        width: _v7
      } : {});
      if ("left" === _v4) {
        var _v17 = {
          x: _v5 - _v14,
          y: _v6 + _v8 / 2,
          textAnchor: _v15,
          verticalAnchor: "middle"
        };
        return _v25(_v25({}, _v17), _v2 ? {
          width: Math.max(_v17.x - _v2.x, 0),
          height: _v8
        } : {});
      }
      if ("right" === _v4) {
        var _v18 = {
          x: _v5 + _v7 + _v14,
          y: _v6 + _v8 / 2,
          textAnchor: _v16,
          verticalAnchor: "middle"
        };
        return _v25(_v25({}, _v18), _v2 ? {
          width: Math.max(_v2.x + _v2.width - _v18.x, 0),
          height: _v8
        } : {});
      }
      var _v19 = _v2 ? {
        width: _v7,
        height: _v8
      } : {};
      return "insideLeft" === _v4 ? _v25({
        x: _v5 + _v14,
        y: _v6 + _v8 / 2,
        textAnchor: _v16,
        verticalAnchor: "middle"
      }, _v19) : "insideRight" === _v4 ? _v25({
        x: _v5 + _v7 - _v14,
        y: _v6 + _v8 / 2,
        textAnchor: _v15,
        verticalAnchor: "middle"
      }, _v19) : "insideTop" === _v4 ? _v25({
        x: _v5 + _v7 / 2,
        y: _v6 + _v10,
        textAnchor: "middle",
        verticalAnchor: _v12
      }, _v19) : "insideBottom" === _v4 ? _v25({
        x: _v5 + _v7 / 2,
        y: _v6 + _v8 - _v10,
        textAnchor: "middle",
        verticalAnchor: _v11
      }, _v19) : "insideTopLeft" === _v4 ? _v25({
        x: _v5 + _v14,
        y: _v6 + _v10,
        textAnchor: _v16,
        verticalAnchor: _v12
      }, _v19) : "insideTopRight" === _v4 ? _v25({
        x: _v5 + _v7 - _v14,
        y: _v6 + _v10,
        textAnchor: _v15,
        verticalAnchor: _v12
      }, _v19) : "insideBottomLeft" === _v4 ? _v25({
        x: _v5 + _v14,
        y: _v6 + _v8 - _v10,
        textAnchor: _v16,
        verticalAnchor: _v11
      }, _v19) : "insideBottomRight" === _v4 ? _v25({
        x: _v5 + _v7 - _v14,
        y: _v6 + _v8 - _v10,
        textAnchor: _v15,
        verticalAnchor: _v11
      }, _v19) : (0, _v4.default)(_v4) && ((0, _v8.isNumber)(_v4.x) || (0, _v8.isPercent)(_v4.x)) && ((0, _v8.isNumber)(_v4.y) || (0, _v8.isPercent)(_v4.y)) ? _v25({
        x: _v5 + (0, _v8.getPercentValue)(_v4.x, _v7),
        y: _v6 + (0, _v8.getPercentValue)(_v4.y, _v8),
        textAnchor: "end",
        verticalAnchor: "end"
      }, _v19) : _v25({
        x: _v5 + _v7 / 2,
        y: _v6 + _v8 / 2,
        textAnchor: "middle",
        verticalAnchor: "middle"
      }, _v19);
    };
  function _v31(_v0) {
    var _v1,
      _v2 = _v0.offset,
      _v3 = _v25({
        offset: void 0 === _v2 ? 5 : _v2
      }, function (_v0, _v1) {
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
      }(_v0, _v22)),
      _v4 = _v3.viewBox,
      _v5 = _v3.position,
      _v6 = _v3.value,
      _v7 = _v3.children,
      _v8 = _v3.content,
      _v9 = _v3.className,
      _v10 = _v3.textBreakAll;
    if (!_v4 || (0, _v2.default)(_v6) && (0, _v2.default)(_v7) && !(0, _v1.isValidElement)(_v8) && !(0, _v3.default)(_v8)) return null;
    if ((0, _v1.isValidElement)(_v8)) return (0, _v1.cloneElement)(_v8, _v3);
    if ((0, _v3.default)(_v8)) {
      if (_v1 = (0, _v1.createElement)(_v8, _v3), (0, _v1.isValidElement)(_v1)) return _v1;
    } else _v1 = _v27(_v3);
    var _v11 = "cx" in _v4 && (0, _v8.isNumber)(_v4.cx),
      _v12 = (0, _v7.filterProps)(_v3, !0);
    if (_v11 && ("insideStart" === _v5 || "insideEnd" === _v5 || "end" === _v5)) return _v28(_v3, _v1, _v12);
    var _v13 = _v11 ? _v29(_v3) : _v30(_v3);
    return _v1.default.createElement(_v6.Text, _v26({
      className: (0, _v5.default)("recharts-label", void 0 === _v9 ? "" : _v9)
    }, _v12, _v13, {
      breakAll: _v10
    }), _v1);
  }
  _v31.displayName = "Label";
  var _v32 = function (_v0) {
    var _v1 = _v0.cx,
      _v2 = _v0.cy,
      _v3 = _v0.angle,
      _v4 = _v0.startAngle,
      _v5 = _v0.endAngle,
      _v6 = _v0.r,
      _v7 = _v0.radius,
      _v8 = _v0.innerRadius,
      _v9 = _v0.outerRadius,
      _v10 = _v0.x,
      _v11 = _v0.y,
      _v12 = _v0.top,
      _v13 = _v0.left,
      _v14 = _v0.width,
      _v15 = _v0.height,
      _v16 = _v0.clockWise,
      _v17 = _v0.labelViewBox;
    if (_v17) return _v17;
    if ((0, _v8.isNumber)(_v14) && (0, _v8.isNumber)(_v15)) {
      if ((0, _v8.isNumber)(_v10) && (0, _v8.isNumber)(_v11)) return {
        x: _v10,
        y: _v11,
        width: _v14,
        height: _v15
      };
      if ((0, _v8.isNumber)(_v12) && (0, _v8.isNumber)(_v13)) return {
        x: _v12,
        y: _v13,
        width: _v14,
        height: _v15
      };
    }
    return (0, _v8.isNumber)(_v10) && (0, _v8.isNumber)(_v11) ? {
      x: _v10,
      y: _v11,
      width: 0,
      height: 0
    } : (0, _v8.isNumber)(_v1) && (0, _v8.isNumber)(_v2) ? {
      cx: _v1,
      cy: _v2,
      startAngle: _v4 || _v3 || 0,
      endAngle: _v5 || _v3 || 0,
      innerRadius: _v8 || 0,
      outerRadius: _v9 || _v7 || _v6 || 0,
      clockWise: _v16
    } : _v0.viewBox ? _v0.viewBox : {};
  };
  _v31.parseViewBox = _v32, _v31.renderCallByParent = function (_v0, _v1) {
    var _v2,
      _v3,
      _v4 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (!_v0 || !_v0.children && _v4 && !_v0.label) return null;
    var _v5 = _v0.children,
      _v6 = _v32(_v0),
      _v7 = (0, _v7.findAllByType)(_v5, _v31).map(function (_v0, _v1) {
        return (0, _v1.cloneElement)(_v0, {
          viewBox: _v1 || _v6,
          key: "label-".concat(_v1)
        });
      });
    if (!_v4) return _v7;
    return [(_v2 = _v0.label, _v3 = _v1 || _v6, !_v2 ? null : !0 === _v2 ? _v1.default.createElement(_v31, {
      key: "label-implicit",
      viewBox: _v3
    }) : (0, _v8.isNumOrStr)(_v2) ? _v1.default.createElement(_v31, {
      key: "label-implicit",
      viewBox: _v3,
      value: _v2
    }) : (0, _v1.isValidElement)(_v2) ? _v2.type === _v31 ? (0, _v1.cloneElement)(_v2, {
      key: "label-implicit",
      viewBox: _v3
    }) : _v1.default.createElement(_v31, {
      key: "label-implicit",
      content: _v2,
      viewBox: _v3
    }) : (0, _v3.default)(_v2) ? _v1.default.createElement(_v31, {
      key: "label-implicit",
      content: _v2,
      viewBox: _v3
    }) : (0, _v4.default)(_v2) ? _v1.default.createElement(_v31, _v26({
      viewBox: _v3
    }, _v2, {
      key: "label-implicit"
    })) : null)].concat(function (_v0) {
      if (Array.isArray(_v0)) return _v23(_v0);
    }(_v7) || function (_v0) {
      if ("u" > typeof Symbol && null != _v0[Symbol.iterator] || null != _v0["@@iterator"]) return Array.from(_v0);
    }(_v7) || function (_v0) {
      if (_v0) {
        if ("string" == typeof _v0) return _v23(_v0, void 0);
        var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
        if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
        if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v23(_v0, void 0);
      }
    }(_v7) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }());
  }, _v0.s(["Label", 0, _v31], 0);
}