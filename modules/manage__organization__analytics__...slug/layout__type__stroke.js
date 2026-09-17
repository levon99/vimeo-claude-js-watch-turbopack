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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
    _v19 = ["key"];
  function _v20(_v0) {
    return (_v20 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v21(_v0, _v1) {
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
  function _v22() {
    return (_v22 = Object.assign.bind()).apply(this, arguments);
  }
  function _v23(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v24(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v23(Object(_v2), !0).forEach(function (_v0) {
        _v29(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v23(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v25(_v0, _v1) {
    for (var _v2 = 0; _v2 < _v1.length; _v2++) {
      var _v3 = _v1[_v2];
      _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v30(_v3.key), _v3);
    }
  }
  function _v26() {
    try {
      var _v0 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (_v0) {}
    return (_v26 = function () {
      return !!_v0;
    })();
  }
  function _v27(_v0) {
    return (_v27 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v28(_v0, _v1) {
    return (_v28 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v29(_v0, _v1, _v2) {
    return (_v1 = _v30(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v30(_v0) {
    var _v1 = function (_v0, _v1) {
      if ("object" != _v20(_v0) || !_v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" != _v20(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v0, "string");
    return "symbol" == _v20(_v1) ? _v1 : _v1 + "";
  }
  var _v31 = function (_v0) {
    var _v1, _v2;
    function _v3() {
      var _v0, _v1, _v2;
      if (!(this instanceof _v3)) throw TypeError("Cannot call a class as a function");
      for (var _v3 = arguments.length, _v4 = Array(_v3), _v5 = 0; _v5 < _v3; _v5++) _v4[_v5] = arguments[_v5];
      return _v1 = _v3, _v2 = [].concat(_v4), _v1 = _v27(_v1), _v29(_v0 = function (_v0, _v1) {
        if (_v1 && ("object" === _v20(_v1) || "function" == typeof _v1)) return _v1;
        if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
        var _v2 = _v0;
        if (void 0 === _v2) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _v2;
      }(this, _v26() ? Reflect.construct(_v1, _v2 || [], _v27(this).constructor) : _v1.apply(this, _v2)), "state", {
        isAnimationFinished: !0
      }), _v29(_v0, "id", (0, _v15.uniqueId)("recharts-area-")), _v29(_v0, "handleAnimationEnd", function () {
        var _v0 = _v0.props.onAnimationEnd;
        _v0.setState({
          isAnimationFinished: !0
        }), (0, _v5.default)(_v0) && _v0();
      }), _v29(_v0, "handleAnimationStart", function () {
        var _v0 = _v0.props.onAnimationStart;
        _v0.setState({
          isAnimationFinished: !1
        }), (0, _v5.default)(_v0) && _v0();
      }), _v0;
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
    }), _v0 && _v28(_v3, _v0), _v1 = [{
      key: "renderDots",
      value: function (_v0, _v1, _v2) {
        var _v3 = this.props.isAnimationActive,
          _v4 = this.state.isAnimationFinished;
        if (_v3 && !_v4) return null;
        var _v5 = this.props,
          _v6 = _v5.dot,
          _v7 = _v5.points,
          _v8 = _v5.dataKey,
          _v9 = (0, _v17.filterProps)(this.props, !1),
          _v10 = (0, _v17.filterProps)(_v6, !0),
          _v11 = _v7.map(function (_v0, _v1) {
            var _v2 = _v24(_v24(_v24({
              key: "dot-".concat(_v1),
              r: 3
            }, _v9), _v10), {}, {
              index: _v1,
              cx: _v0.x,
              cy: _v0.y,
              dataKey: _v8,
              value: _v0.value,
              payload: _v0.payload,
              points: _v7
            });
            return _v3.renderDotItem(_v6, _v2);
          }),
          _v12 = {
            clipPath: _v0 ? "url(#clipPath-".concat(_v1 ? "" : "dots-").concat(_v2, ")") : null
          };
        return _v2.default.createElement(_v12.Layer, _v22({
          className: "recharts-area-dots"
        }, _v12), _v11);
      }
    }, {
      key: "renderHorizontalRect",
      value: function (_v0) {
        var _v1 = this.props,
          _v2 = _v1.baseLine,
          _v3 = _v1.points,
          _v4 = _v1.strokeWidth,
          _v5 = _v3[0].x,
          _v6 = _v3[_v3.length - 1].x,
          _v7 = _v0 * Math.abs(_v5 - _v6),
          _v8 = (0, _v6.default)(_v3.map(function (_v0) {
            return _v0.y || 0;
          }));
        return ((0, _v15.isNumber)(_v2) && "number" == typeof _v2 ? _v8 = Math.max(_v2, _v8) : _v2 && Array.isArray(_v2) && _v2.length && (_v8 = Math.max((0, _v6.default)(_v2.map(function (_v0) {
          return _v0.y || 0;
        })), _v8)), (0, _v15.isNumber)(_v8)) ? _v2.default.createElement("rect", {
          x: _v5 < _v6 ? _v5 : _v5 - _v7,
          y: 0,
          width: _v7,
          height: Math.floor(_v8 + (_v4 ? parseInt("".concat(_v4), 10) : 1))
        }) : null;
      }
    }, {
      key: "renderVerticalRect",
      value: function (_v0) {
        var _v1 = this.props,
          _v2 = _v1.baseLine,
          _v3 = _v1.points,
          _v4 = _v1.strokeWidth,
          _v5 = _v3[0].y,
          _v6 = _v3[_v3.length - 1].y,
          _v7 = _v0 * Math.abs(_v5 - _v6),
          _v8 = (0, _v6.default)(_v3.map(function (_v0) {
            return _v0.x || 0;
          }));
        return ((0, _v15.isNumber)(_v2) && "number" == typeof _v2 ? _v8 = Math.max(_v2, _v8) : _v2 && Array.isArray(_v2) && _v2.length && (_v8 = Math.max((0, _v6.default)(_v2.map(function (_v0) {
          return _v0.x || 0;
        })), _v8)), (0, _v15.isNumber)(_v8)) ? _v2.default.createElement("rect", {
          x: 0,
          y: _v5 < _v6 ? _v5 : _v5 - _v7,
          width: _v8 + (_v4 ? parseInt("".concat(_v4), 10) : 1),
          height: Math.floor(_v7)
        }) : null;
      }
    }, {
      key: "renderClipRect",
      value: function (_v0) {
        return "vertical" === this.props.layout ? this.renderVerticalRect(_v0) : this.renderHorizontalRect(_v0);
      }
    }, {
      key: "renderAreaStatically",
      value: function (_v0, _v1, _v2, _v3) {
        var _v4 = this.props,
          _v5 = _v4.layout,
          _v6 = _v4.type,
          _v7 = _v4.stroke,
          _v8 = _v4.connectNulls,
          _v9 = _v4.isRange,
          _v10 = (_v4.ref, _v21(_v4, _v18));
        return _v2.default.createElement(_v12.Layer, {
          clipPath: _v2 ? "url(#clipPath-".concat(_v3, ")") : null
        }, _v2.default.createElement(_v10.Curve, _v22({}, (0, _v17.filterProps)(_v10, !0), {
          points: _v0,
          connectNulls: _v8,
          type: _v6,
          baseLine: _v1,
          layout: _v5,
          stroke: "none",
          className: "recharts-area-area"
        })), "none" !== _v7 && _v2.default.createElement(_v10.Curve, _v22({}, (0, _v17.filterProps)(this.props, !1), {
          className: "recharts-area-curve",
          layout: _v5,
          type: _v6,
          connectNulls: _v8,
          fill: "none",
          points: _v0
        })), "none" !== _v7 && _v9 && _v2.default.createElement(_v10.Curve, _v22({}, (0, _v17.filterProps)(this.props, !1), {
          className: "recharts-area-curve",
          layout: _v5,
          type: _v6,
          connectNulls: _v8,
          fill: "none",
          points: _v1
        })));
      }
    }, {
      key: "renderAreaWithAnimation",
      value: function (_v0, _v1) {
        var _v2 = this,
          _v3 = this.props,
          _v4 = _v3.points,
          _v5 = _v3.baseLine,
          _v6 = _v3.isAnimationActive,
          _v7 = _v3.animationBegin,
          _v8 = _v3.animationDuration,
          _v9 = _v3.animationEasing,
          _v10 = _v3.animationId,
          _v11 = this.state,
          _v12 = _v11.prevPoints,
          _v13 = _v11.prevBaseLine;
        return _v2.default.createElement(_v4.default, {
          begin: _v7,
          duration: _v8,
          isActive: _v6,
          easing: _v9,
          from: {
            t: 0
          },
          to: {
            t: 1
          },
          key: "area-".concat(_v10),
          onAnimationEnd: this.handleAnimationEnd,
          onAnimationStart: this.handleAnimationStart
        }, function (_v0) {
          var _v1 = _v0.t;
          if (_v12) {
            var _v2,
              _v3 = _v12.length / _v4.length,
              _v4 = _v4.map(function (_v0, _v1) {
                var _v2 = Math.floor(_v1 * _v3);
                if (_v12[_v2]) {
                  var _v3 = _v12[_v2],
                    _v4 = (0, _v15.interpolateNumber)(_v3.x, _v0.x),
                    _v5 = (0, _v15.interpolateNumber)(_v3.y, _v0.y);
                  return _v24(_v24({}, _v0), {}, {
                    x: _v4(_v1),
                    y: _v5(_v1)
                  });
                }
                return _v0;
              });
            return _v2 = (0, _v15.isNumber)(_v5) && "number" == typeof _v5 ? (0, _v15.interpolateNumber)(_v13, _v5)(_v1) : (0, _v7.default)(_v5) || (0, _v8.default)(_v5) ? (0, _v15.interpolateNumber)(_v13, 0)(_v1) : _v5.map(function (_v0, _v1) {
              var _v2 = Math.floor(_v1 * _v3);
              if (_v13[_v2]) {
                var _v3 = _v13[_v2],
                  _v4 = (0, _v15.interpolateNumber)(_v3.x, _v0.x),
                  _v5 = (0, _v15.interpolateNumber)(_v3.y, _v0.y);
                return _v24(_v24({}, _v0), {}, {
                  x: _v4(_v1),
                  y: _v5(_v1)
                });
              }
              return _v0;
            }), _v2.renderAreaStatically(_v4, _v2, _v0, _v1);
          }
          return _v2.default.createElement(_v12.Layer, null, _v2.default.createElement("defs", null, _v2.default.createElement("clipPath", {
            id: "animationClipPath-".concat(_v1)
          }, _v2.renderClipRect(_v1))), _v2.default.createElement(_v12.Layer, {
            clipPath: "url(#animationClipPath-".concat(_v1, ")")
          }, _v2.renderAreaStatically(_v4, _v5, _v0, _v1)));
        });
      }
    }, {
      key: "renderArea",
      value: function (_v0, _v1) {
        var _v2 = this.props,
          _v3 = _v2.points,
          _v4 = _v2.baseLine,
          _v5 = _v2.isAnimationActive,
          _v6 = this.state,
          _v7 = _v6.prevPoints,
          _v8 = _v6.prevBaseLine,
          _v9 = _v6.totalLength;
        return _v5 && _v3 && _v3.length && (!_v7 && _v9 > 0 || !(0, _v9.default)(_v7, _v3) || !(0, _v9.default)(_v8, _v4)) ? this.renderAreaWithAnimation(_v0, _v1) : this.renderAreaStatically(_v3, _v4, _v0, _v1);
      }
    }, {
      key: "render",
      value: function () {
        var _v0,
          _v1 = this.props,
          _v2 = _v1.hide,
          _v3 = _v1.dot,
          _v4 = _v1.points,
          _v5 = _v1.className,
          _v6 = _v1.top,
          _v7 = _v1.left,
          _v8 = _v1.xAxis,
          _v9 = _v1.yAxis,
          _v10 = _v1.width,
          _v11 = _v1.height,
          _v12 = _v1.isAnimationActive,
          _v13 = _v1.id;
        if (_v2 || !_v4 || !_v4.length) return null;
        var _v14 = this.state.isAnimationFinished,
          _v15 = 1 === _v4.length,
          _v16 = (0, _v3.default)("recharts-area", _v5),
          _v17 = _v8 && _v8.allowDataOverflow,
          _v18 = _v9 && _v9.allowDataOverflow,
          _v19 = _v17 || _v18,
          _v20 = (0, _v7.default)(_v13) ? this.id : _v13,
          _v21 = null != (_v0 = (0, _v17.filterProps)(_v3, !1)) ? _v0 : {
            r: 3,
            strokeWidth: 2
          },
          _v22 = _v21.r,
          _v23 = _v21.strokeWidth,
          _v24 = ((0, _v17.hasClipDot)(_v3) ? _v3 : {}).clipDot,
          _v25 = void 0 === _v24 || _v24,
          _v26 = 2 * (void 0 === _v22 ? 3 : _v22) + (void 0 === _v23 ? 2 : _v23);
        return _v2.default.createElement(_v12.Layer, {
          className: _v16
        }, _v17 || _v18 ? _v2.default.createElement("defs", null, _v2.default.createElement("clipPath", {
          id: "clipPath-".concat(_v20)
        }, _v2.default.createElement("rect", {
          x: _v17 ? _v7 : _v7 - _v10 / 2,
          y: _v18 ? _v6 : _v6 - _v11 / 2,
          width: _v17 ? _v10 : 2 * _v10,
          height: _v18 ? _v11 : 2 * _v11
        })), !_v25 && _v2.default.createElement("clipPath", {
          id: "clipPath-dots-".concat(_v20)
        }, _v2.default.createElement("rect", {
          x: _v7 - _v26 / 2,
          y: _v6 - _v26 / 2,
          width: _v10 + _v26,
          height: _v11 + _v26
        }))) : null, _v15 ? null : this.renderArea(_v19, _v20), (_v3 || _v15) && this.renderDots(_v19, _v25, _v20), (!_v12 || _v14) && _v13.LabelList.renderCallByParent(this.props, _v4));
      }
    }], _v2 = [{
      key: "getDerivedStateFromProps",
      value: function (_v0, _v1) {
        return _v0.animationId !== _v1.prevAnimationId ? {
          prevAnimationId: _v0.animationId,
          curPoints: _v0.points,
          curBaseLine: _v0.baseLine,
          prevPoints: _v1.curPoints,
          prevBaseLine: _v1.curBaseLine
        } : _v0.points !== _v1.curPoints || _v0.baseLine !== _v1.curBaseLine ? {
          curPoints: _v0.points,
          curBaseLine: _v0.baseLine
        } : null;
      }
    }], _v1 && _v25(_v3.prototype, _v1), _v2 && _v25(_v3, _v2), Object.defineProperty(_v3, "prototype", {
      writable: !1
    }), _v3;
  }(_v2.PureComponent);
  _v29(_v31, "displayName", "Area"), _v29(_v31, "defaultProps", {
    stroke: "#3182bd",
    fill: "#3182bd",
    fillOpacity: .6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: "line",
    connectNulls: !1,
    points: [],
    dot: !1,
    activeDot: !0,
    hide: !1,
    isAnimationActive: !_v14.Global.isSsr,
    animationBegin: 0,
    animationDuration: 0,
    animationEasing: "ease"
  }), _v29(_v31, "getBaseValue", function (_v0, _v1, _v2, _v3) {
    var _v4 = _v0.layout,
      _v5 = _v0.baseValue,
      _v6 = _v1.props.baseValue,
      _v7 = null != _v6 ? _v6 : _v5;
    if ((0, _v15.isNumber)(_v7) && "number" == typeof _v7) return _v7;
    var _v8 = "horizontal" === _v4 ? _v3 : _v2,
      _v9 = _v8.scale.domain();
    if ("number" === _v8.type) {
      var _v10 = Math.max(_v9[0], _v9[1]),
        _v11 = Math.min(_v9[0], _v9[1]);
      return "dataMin" === _v7 ? _v11 : "dataMax" === _v7 || _v10 < 0 ? _v10 : Math.max(Math.min(_v9[0], _v9[1]), 0);
    }
    return "dataMin" === _v7 ? _v9[0] : "dataMax" === _v7 ? _v9[1] : _v9[0];
  }), _v29(_v31, "getComposedData", function (_v0) {
    var _v1,
      _v2 = _v0.props,
      _v3 = _v0.item,
      _v4 = _v0.xAxis,
      _v5 = _v0.yAxis,
      _v6 = _v0.xAxisTicks,
      _v7 = _v0.yAxisTicks,
      _v8 = _v0.bandSize,
      _v9 = _v0.dataKey,
      _v10 = _v0.stackedData,
      _v11 = _v0.dataStartIndex,
      _v12 = _v0.displayedData,
      _v13 = _v0.offset,
      _v14 = _v2.layout,
      _v15 = _v10 && _v10.length,
      _v16 = _v31.getBaseValue(_v2, _v3, _v4, _v5),
      _v17 = "horizontal" === _v14,
      _v18 = !1,
      _v19 = _v12.map(function (_v0, _v1) {
        _v15 ? _v2 = _v10[_v11 + _v1] : Array.isArray(_v2 = (0, _v16.getValueByDataKey)(_v0, _v9)) ? _v18 = !0 : _v2 = [_v16, _v2];
        var _v2,
          _v3 = null == _v2[1] || _v15 && null == (0, _v16.getValueByDataKey)(_v0, _v9);
        return _v17 ? {
          x: (0, _v16.getCateCoordinateOfLine)({
            axis: _v4,
            ticks: _v6,
            bandSize: _v8,
            entry: _v0,
            index: _v1
          }),
          y: _v3 ? null : _v5.scale(_v2[1]),
          value: _v2,
          payload: _v0
        } : {
          x: _v3 ? null : _v4.scale(_v2[1]),
          y: (0, _v16.getCateCoordinateOfLine)({
            axis: _v5,
            ticks: _v7,
            bandSize: _v8,
            entry: _v0,
            index: _v1
          }),
          value: _v2,
          payload: _v0
        };
      });
    return _v1 = _v15 || _v18 ? _v19.map(function (_v0) {
      var _v1 = Array.isArray(_v0.value) ? _v0.value[0] : null;
      return _v17 ? {
        x: _v0.x,
        y: null != _v1 && null != _v0.y ? _v5.scale(_v1) : null
      } : {
        x: null != _v1 ? _v4.scale(_v1) : null,
        y: _v0.y
      };
    }) : _v17 ? _v5.scale(_v16) : _v4.scale(_v16), _v24({
      points: _v19,
      baseLine: _v1,
      layout: _v14,
      isRange: _v18
    }, _v13);
  }), _v29(_v31, "renderDotItem", function (_v0, _v1) {
    var _v2;
    if (_v2.default.isValidElement(_v0)) _v2 = _v2.default.cloneElement(_v0, _v1);else if ((0, _v5.default)(_v0)) _v2 = _v0(_v1);else {
      var _v3 = (0, _v3.default)("recharts-area-dot", "boolean" != typeof _v0 ? _v0.className : ""),
        _v4 = _v1.key,
        _v5 = _v21(_v1, _v19);
      _v2 = _v2.default.createElement(_v11.Dot, _v22({}, _v5, {
        key: _v4,
        className: _v3
      }));
    }
    return _v2;
  }), _v0.s(["Area", 0, _v31], 0);
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = (0, _v1.generateCategoricalChart)({
      chartName: "AreaChart",
      GraphicalChild: _v31,
      axisComponents: [{
        axisType: "xAxis",
        AxisComp: _v32.XAxis
      }, {
        axisType: "yAxis",
        AxisComp: _v33.YAxis
      }],
      formatAxisMap: _v34.formatAxisMap
    });
  _v0.s(["AreaChart", 0, _v35], 0);
}