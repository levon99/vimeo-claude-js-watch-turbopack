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
    _v10 = _v0.i(0);
  function _v11(_v0) {
    return (_v11 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v12() {
    return (_v12 = Object.assign.bind()).apply(this, arguments);
  }
  function _v13(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v14(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v13(Object(_v2), !0).forEach(function (_v0) {
        _v19(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v13(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v15(_v0, _v1) {
    for (var _v2 = 0; _v2 < _v1.length; _v2++) {
      var _v3 = _v1[_v2];
      _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v20(_v3.key), _v3);
    }
  }
  function _v16() {
    try {
      var _v0 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (_v0) {}
    return (_v16 = function () {
      return !!_v0;
    })();
  }
  function _v17(_v0) {
    return (_v17 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v18(_v0, _v1) {
    return (_v18 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v19(_v0, _v1, _v2) {
    return (_v1 = _v20(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v20(_v0) {
    var _v1 = function (_v0, _v1) {
      if ("object" != _v11(_v0) || !_v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" != _v11(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v0, "string");
    return "symbol" == _v11(_v1) ? _v1 : _v1 + "";
  }
  var _v21 = Math.PI / 180,
    _v22 = function (_v0) {
      var _v1, _v2;
      function _v3() {
        var _v0, _v1;
        if (!(this instanceof _v3)) throw TypeError("Cannot call a class as a function");
        return _v0 = _v3, _v1 = arguments, _v0 = _v17(_v0), function (_v0, _v1) {
          if (_v1 && ("object" === _v11(_v1) || "function" == typeof _v1)) return _v1;
          if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
          var _v2 = _v0;
          if (void 0 === _v2) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return _v2;
        }(this, _v16() ? Reflect.construct(_v0, _v1 || [], _v17(this).constructor) : _v0.apply(this, _v1));
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
      }), _v0 && _v18(_v3, _v0), _v1 = [{
        key: "getTickLineCoord",
        value: function (_v0) {
          var _v1 = this.props,
            _v2 = _v1.cx,
            _v3 = _v1.cy,
            _v4 = _v1.radius,
            _v5 = _v1.orientation,
            _v6 = _v1.tickSize,
            _v7 = (0, _v10.polarToCartesian)(_v2, _v3, _v4, _v0.coordinate),
            _v8 = (0, _v10.polarToCartesian)(_v2, _v3, _v4 + ("inner" === _v5 ? -1 : 1) * (_v6 || 8), _v0.coordinate);
          return {
            x1: _v7.x,
            y1: _v7.y,
            x2: _v8.x,
            y2: _v8.y
          };
        }
      }, {
        key: "getTickTextAnchor",
        value: function (_v0) {
          var _v1 = this.props.orientation,
            _v2 = Math.cos(-_v0.coordinate * _v21);
          return _v2 > 1e-5 ? "outer" === _v1 ? "start" : "end" : _v2 < -1e-5 ? "outer" === _v1 ? "end" : "start" : "middle";
        }
      }, {
        key: "renderAxisLine",
        value: function () {
          var _v0 = this.props,
            _v1 = _v0.cx,
            _v2 = _v0.cy,
            _v3 = _v0.radius,
            _v4 = _v0.axisLine,
            _v5 = _v0.axisLineType,
            _v6 = _v14(_v14({}, (0, _v9.filterProps)(this.props, !1)), {}, {
              fill: "none"
            }, (0, _v9.filterProps)(_v4, !1));
          if ("circle" === _v5) return _v1.default.createElement(_v5.Dot, _v12({
            className: "recharts-polar-angle-axis-line"
          }, _v6, {
            cx: _v1,
            cy: _v2,
            r: _v3
          }));
          var _v7 = this.props.ticks.map(function (_v0) {
            return (0, _v10.polarToCartesian)(_v1, _v2, _v3, _v0.coordinate);
          });
          return _v1.default.createElement(_v6.Polygon, _v12({
            className: "recharts-polar-angle-axis-line"
          }, _v6, {
            points: _v7
          }));
        }
      }, {
        key: "renderTicks",
        value: function () {
          var _v0 = this,
            _v1 = this.props,
            _v2 = _v1.ticks,
            _v3 = _v1.tick,
            _v4 = _v1.tickLine,
            _v5 = _v1.tickFormatter,
            _v6 = _v1.stroke,
            _v7 = (0, _v9.filterProps)(this.props, !1),
            _v8 = (0, _v9.filterProps)(_v3, !1),
            _v9 = _v14(_v14({}, _v7), {}, {
              fill: "none"
            }, (0, _v9.filterProps)(_v4, !1)),
            _v10 = _v2.map(function (_v0, _v1) {
              var _v2 = _v0.getTickLineCoord(_v0),
                _v3 = _v14(_v14(_v14({
                  textAnchor: _v0.getTickTextAnchor(_v0)
                }, _v7), {}, {
                  stroke: "none",
                  fill: _v6
                }, _v8), {}, {
                  index: _v1,
                  payload: _v0,
                  x: _v2.x2,
                  y: _v2.y2
                });
              return _v1.default.createElement(_v4.Layer, _v12({
                className: (0, _v3.default)("recharts-polar-angle-axis-tick", (0, _v10.getTickClassName)(_v3)),
                key: "tick-".concat(_v0.coordinate)
              }, (0, _v8.adaptEventsOfChild)(_v0.props, _v0, _v1)), _v4 && _v1.default.createElement("line", _v12({
                className: "recharts-polar-angle-axis-tick-line"
              }, _v9, _v2)), _v3 && _v3.renderTickItem(_v3, _v3, _v5 ? _v5(_v0.value, _v1) : _v0.value));
            });
          return _v1.default.createElement(_v4.Layer, {
            className: "recharts-polar-angle-axis-ticks"
          }, _v10);
        }
      }, {
        key: "render",
        value: function () {
          var _v0 = this.props,
            _v1 = _v0.ticks,
            _v2 = _v0.radius,
            _v3 = _v0.axisLine;
          return !(_v2 <= 0) && _v1 && _v1.length ? _v1.default.createElement(_v4.Layer, {
            className: (0, _v3.default)("recharts-polar-angle-axis", this.props.className)
          }, _v3 && this.renderAxisLine(), this.renderTicks()) : null;
        }
      }], _v2 = [{
        key: "renderTickItem",
        value: function (_v0, _v1, _v2) {
          return _v1.default.isValidElement(_v0) ? _v1.default.cloneElement(_v0, _v1) : (0, _v2.default)(_v0) ? _v0(_v1) : _v1.default.createElement(_v7.Text, _v12({}, _v1, {
            className: "recharts-polar-angle-axis-tick-value"
          }), _v2);
        }
      }], _v1 && _v15(_v3.prototype, _v1), _v2 && _v15(_v3, _v2), Object.defineProperty(_v3, "prototype", {
        writable: !1
      }), _v3;
    }(_v1.PureComponent);
  _v19(_v22, "displayName", "PolarAngleAxis"), _v19(_v22, "axisType", "angleAxis"), _v19(_v22, "defaultProps", {
    type: "category",
    angleAxisId: 0,
    scale: "auto",
    cx: 0,
    cy: 0,
    orientation: "outer",
    axisLine: !0,
    tickLine: !0,
    tickSize: 8,
    tick: !0,
    hide: !1,
    allowDuplicatedCategory: !0
  }), _v0.s(["PolarAngleAxis", 0, _v22]);
}