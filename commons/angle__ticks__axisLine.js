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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = ["cx", "cy", "angle", "ticks", "axisLine"],
    _v13 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
  function _v14(_v0) {
    return (_v14 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v15() {
    return (_v15 = Object.assign.bind()).apply(this, arguments);
  }
  function _v16(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v17(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v16(Object(_v2), !0).forEach(function (_v0) {
        _v23(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v16(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v18(_v0, _v1) {
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
  function _v19(_v0, _v1) {
    for (var _v2 = 0; _v2 < _v1.length; _v2++) {
      var _v3 = _v1[_v2];
      _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v24(_v3.key), _v3);
    }
  }
  function _v20() {
    try {
      var _v0 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (_v0) {}
    return (_v20 = function () {
      return !!_v0;
    })();
  }
  function _v21(_v0) {
    return (_v21 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v22(_v0, _v1) {
    return (_v22 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v23(_v0, _v1, _v2) {
    return (_v1 = _v24(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v24(_v0) {
    var _v1 = function (_v0, _v1) {
      if ("object" != _v14(_v0) || !_v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" != _v14(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v0, "string");
    return "symbol" == _v14(_v1) ? _v1 : _v1 + "";
  }
  var _v25 = function (_v0) {
    var _v1, _v2;
    function _v3() {
      var _v0, _v1;
      if (!(this instanceof _v3)) throw TypeError("Cannot call a class as a function");
      return _v0 = _v3, _v1 = arguments, _v0 = _v21(_v0), function (_v0, _v1) {
        if (_v1 && ("object" === _v14(_v1) || "function" == typeof _v1)) return _v1;
        if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
        var _v2 = _v0;
        if (void 0 === _v2) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _v2;
      }(this, _v20() ? Reflect.construct(_v0, _v1 || [], _v21(this).constructor) : _v0.apply(this, _v1));
    }
    if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
    return _v3.prototype = Object.create(_v0 && _v0.prototype, {
      constructor: {
        value: _v3,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(_v3, "prototype", {
      writable: !1
    }), _v0 && _v22(_v3, _v0), _v1 = [{
      key: "getTickValueCoord",
      value: function (_v0) {
        var _v1 = _v0.coordinate,
          _v2 = this.props,
          _v3 = _v2.angle,
          _v4 = _v2.cx,
          _v5 = _v2.cy;
        return (0, _v9.polarToCartesian)(_v4, _v5, _v1, _v3);
      }
    }, {
      key: "getTickTextAnchor",
      value: function () {
        var _v0;
        switch (this.props.orientation) {
          case "left":
            _v0 = "end";
            break;
          case "right":
            _v0 = "start";
            break;
          default:
            _v0 = "middle";
        }
        return _v0;
      }
    }, {
      key: "getViewBox",
      value: function () {
        var _v0 = this.props,
          _v1 = _v0.cx,
          _v2 = _v0.cy,
          _v3 = _v0.angle,
          _v4 = _v0.ticks,
          _v5 = (0, _v2.default)(_v4, function (_v0) {
            return _v0.coordinate || 0;
          });
        return {
          cx: _v1,
          cy: _v2,
          startAngle: _v3,
          endAngle: _v3,
          innerRadius: (0, _v3.default)(_v4, function (_v0) {
            return _v0.coordinate || 0;
          }).coordinate || 0,
          outerRadius: _v5.coordinate || 0
        };
      }
    }, {
      key: "renderAxisLine",
      value: function () {
        var _v0 = this.props,
          _v1 = _v0.cx,
          _v2 = _v0.cy,
          _v3 = _v0.angle,
          _v4 = _v0.ticks,
          _v5 = _v0.axisLine,
          _v6 = _v18(_v0, _v12),
          _v7 = _v4.reduce(function (_v0, _v1) {
            return [Math.min(_v0[0], _v1.coordinate), Math.max(_v0[1], _v1.coordinate)];
          }, [1 / 0, -1 / 0]),
          _v8 = (0, _v9.polarToCartesian)(_v1, _v2, _v7[0], _v3),
          _v9 = (0, _v9.polarToCartesian)(_v1, _v2, _v7[1], _v3),
          _v10 = _v17(_v17(_v17({}, (0, _v11.filterProps)(_v6, !1)), {}, {
            fill: "none"
          }, (0, _v11.filterProps)(_v5, !1)), {}, {
            x1: _v8.x,
            y1: _v8.y,
            x2: _v9.x,
            y2: _v9.y
          });
        return _v1.default.createElement("line", _v15({
          className: "recharts-polar-radius-axis-line"
        }, _v10));
      }
    }, {
      key: "renderTicks",
      value: function () {
        var _v0 = this,
          _v1 = this.props,
          _v2 = _v1.ticks,
          _v3 = _v1.tick,
          _v4 = _v1.angle,
          _v5 = _v1.tickFormatter,
          _v6 = _v1.stroke,
          _v7 = _v18(_v1, _v13),
          _v8 = this.getTickTextAnchor(),
          _v9 = (0, _v11.filterProps)(_v7, !1),
          _v10 = (0, _v11.filterProps)(_v3, !1),
          _v11 = _v2.map(function (_v0, _v1) {
            var _v2 = _v0.getTickValueCoord(_v0),
              _v3 = _v17(_v17(_v17(_v17({
                textAnchor: _v8,
                transform: "rotate(".concat(90 - _v4, ", ").concat(_v2.x, ", ").concat(_v2.y, ")")
              }, _v9), {}, {
                stroke: "none",
                fill: _v6
              }, _v10), {}, {
                index: _v1
              }, _v2), {}, {
                payload: _v0
              });
            return _v1.default.createElement(_v8.Layer, _v15({
              className: (0, _v5.default)("recharts-polar-radius-axis-tick", (0, _v9.getTickClassName)(_v3)),
              key: "tick-".concat(_v0.coordinate)
            }, (0, _v10.adaptEventsOfChild)(_v0.props, _v0, _v1)), _v3.renderTickItem(_v3, _v3, _v5 ? _v5(_v0.value, _v1) : _v0.value));
          });
        return _v1.default.createElement(_v8.Layer, {
          className: "recharts-polar-radius-axis-ticks"
        }, _v11);
      }
    }, {
      key: "render",
      value: function () {
        var _v0 = this.props,
          _v1 = _v0.ticks,
          _v2 = _v0.axisLine,
          _v3 = _v0.tick;
        return _v1 && _v1.length ? _v1.default.createElement(_v8.Layer, {
          className: (0, _v5.default)("recharts-polar-radius-axis", this.props.className)
        }, _v2 && this.renderAxisLine(), _v3 && this.renderTicks(), _v7.Label.renderCallByParent(this.props, this.getViewBox())) : null;
      }
    }], _v2 = [{
      key: "renderTickItem",
      value: function (_v0, _v1, _v2) {
        return _v1.default.isValidElement(_v0) ? _v1.default.cloneElement(_v0, _v1) : (0, _v4.default)(_v0) ? _v0(_v1) : _v1.default.createElement(_v6.Text, _v15({}, _v1, {
          className: "recharts-polar-radius-axis-tick-value"
        }), _v2);
      }
    }], _v1 && _v19(_v3.prototype, _v1), _v2 && _v19(_v3, _v2), Object.defineProperty(_v3, "prototype", {
      writable: !1
    }), _v3;
  }(_v1.PureComponent);
  _v23(_v25, "displayName", "PolarRadiusAxis"), _v23(_v25, "axisType", "radiusAxis"), _v23(_v25, "defaultProps", {
    type: "number",
    radiusAxisId: 0,
    cx: 0,
    cy: 0,
    angle: 0,
    orientation: "right",
    stroke: "#ccc",
    axisLine: !0,
    tick: !0,
    tickCount: 5,
    allowDataOverflow: !1,
    scale: "auto",
    allowDuplicatedCategory: !0
  }), _v0.s(["PolarRadiusAxis", 0, _v25]);
}