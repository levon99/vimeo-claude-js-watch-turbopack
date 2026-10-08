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
    _v17 = ["type", "layout", "connectNulls", "ref"],
    _v18 = ["key"];
  function _v19(_v0) {
    return (_v19 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v20(_v0, _v1) {
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
  function _v21() {
    return (_v21 = Object.assign.bind()).apply(this, arguments);
  }
  function _v22(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v23(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v22(Object(_v2), !0).forEach(function (_v0) {
        _v30(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v22(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v24(_v0) {
    return function (_v0) {
      if (Array.isArray(_v0)) return _v25(_v0);
    }(_v0) || function (_v0) {
      if ("u" > typeof Symbol && null != _v0[Symbol.iterator] || null != _v0["@@iterator"]) return Array.from(_v0);
    }(_v0) || function (_v0) {
      if (_v0) {
        if ("string" == typeof _v0) return _v25(_v0, void 0);
        var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
        if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
        if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v25(_v0, void 0);
      }
    }(_v0) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _v25(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  function _v26(_v0, _v1) {
    for (var _v2 = 0; _v2 < _v1.length; _v2++) {
      var _v3 = _v1[_v2];
      _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v31(_v3.key), _v3);
    }
  }
  function _v27() {
    try {
      var _v0 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (_v0) {}
    return (_v27 = function () {
      return !!_v0;
    })();
  }
  function _v28(_v0) {
    return (_v28 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v29(_v0, _v1) {
    return (_v29 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v30(_v0, _v1, _v2) {
    return (_v1 = _v31(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v31(_v0) {
    var _v1 = function (_v0, _v1) {
      if ("object" != _v19(_v0) || !_v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" != _v19(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v0, "string");
    return "symbol" == _v19(_v1) ? _v1 : _v1 + "";
  }
  var _v32 = function (_v0) {
    var _v1, _v2;
    function _v3() {
      var _v0, _v1, _v2;
      if (!(this instanceof _v3)) throw TypeError("Cannot call a class as a function");
      for (var _v3 = arguments.length, _v4 = Array(_v3), _v5 = 0; _v5 < _v3; _v5++) _v4[_v5] = arguments[_v5];
      return _v1 = _v3, _v2 = [].concat(_v4), _v1 = _v28(_v1), _v30(_v0 = function (_v0, _v1) {
        if (_v1 && ("object" === _v19(_v1) || "function" == typeof _v1)) return _v1;
        if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
        var _v2 = _v0;
        if (void 0 === _v2) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _v2;
      }(this, _v27() ? Reflect.construct(_v1, _v2 || [], _v28(this).constructor) : _v1.apply(this, _v2)), "state", {
        isAnimationFinished: !0,
        totalLength: 0
      }), _v30(_v0, "generateSimpleStrokeDasharray", function (_v0, _v1) {
        return "".concat(_v1, "px ").concat(_v0 - _v1, "px");
      }), _v30(_v0, "getStrokeDasharray", function (_v0, _v1, _v2) {
        var _v3 = _v2.reduce(function (_v0, _v1) {
          return _v0 + _v1;
        });
        if (!_v3) return _v0.generateSimpleStrokeDasharray(_v1, _v0);
        for (var _v4 = Math.floor(_v0 / _v3), _v5 = _v0 % _v3, _v6 = _v1 - _v0, _v7 = [], _v8 = 0, _v9 = 0; _v8 < _v2.length; _v9 += _v2[_v8], ++_v8) if (_v9 + _v2[_v8] > _v5) {
          _v7 = [].concat(_v24(_v2.slice(0, _v8)), [_v5 - _v9]);
          break;
        }
        var _v10 = _v7.length % 2 == 0 ? [0, _v6] : [_v6];
        return [].concat(_v24(_v3.repeat(_v2, _v4)), _v24(_v7), _v10).map(function (_v0) {
          return "".concat(_v0, "px");
        }).join(", ");
      }), _v30(_v0, "id", (0, _v13.uniqueId)("recharts-line-")), _v30(_v0, "pathRef", function (_v0) {
        _v0.mainCurve = _v0;
      }), _v30(_v0, "handleAnimationEnd", function () {
        _v0.setState({
          isAnimationFinished: !0
        }), _v0.props.onAnimationEnd && _v0.props.onAnimationEnd();
      }), _v30(_v0, "handleAnimationStart", function () {
        _v0.setState({
          isAnimationFinished: !1
        }), _v0.props.onAnimationStart && _v0.props.onAnimationStart();
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
    }), _v0 && _v29(_v3, _v0), _v1 = [{
      key: "componentDidMount",
      value: function () {
        if (this.props.isAnimationActive) {
          var _v0 = this.getTotalLength();
          this.setState({
            totalLength: _v0
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        if (this.props.isAnimationActive) {
          var _v0 = this.getTotalLength();
          _v0 !== this.state.totalLength && this.setState({
            totalLength: _v0
          });
        }
      }
    }, {
      key: "getTotalLength",
      value: function () {
        var _v0 = this.mainCurve;
        try {
          return _v0 && _v0.getTotalLength && _v0.getTotalLength() || 0;
        } catch (_v0) {
          return 0;
        }
      }
    }, {
      key: "renderErrorBar",
      value: function (_v0, _v1) {
        if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
        var _v2 = this.props,
          _v3 = _v2.points,
          _v4 = _v2.xAxis,
          _v5 = _v2.yAxis,
          _v6 = _v2.layout,
          _v7 = _v2.children,
          _v8 = (0, _v14.findAllByType)(_v7, _v12.ErrorBar);
        if (!_v8) return null;
        var _v9 = function (_v0, _v1) {
          return {
            x: _v0.x,
            y: _v0.y,
            value: _v0.value,
            errorVal: (0, _v16.getValueByDataKey)(_v0.payload, _v1)
          };
        };
        return _v2.default.createElement(_v10.Layer, {
          clipPath: _v0 ? "url(#clipPath-".concat(_v1, ")") : null
        }, _v8.map(function (_v0) {
          return _v2.default.cloneElement(_v0, {
            key: "bar-".concat(_v0.props.dataKey),
            data: _v3,
            xAxis: _v4,
            yAxis: _v5,
            layout: _v6,
            dataPointFormatter: _v9
          });
        }));
      }
    }, {
      key: "renderDots",
      value: function (_v0, _v1, _v2) {
        if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
        var _v3 = this.props,
          _v4 = _v3.dot,
          _v5 = _v3.points,
          _v6 = _v3.dataKey,
          _v7 = (0, _v14.filterProps)(this.props, !1),
          _v8 = (0, _v14.filterProps)(_v4, !0),
          _v9 = _v5.map(function (_v0, _v1) {
            var _v2 = _v23(_v23(_v23({
              key: "dot-".concat(_v1),
              r: 3
            }, _v7), _v8), {}, {
              index: _v1,
              cx: _v0.x,
              cy: _v0.y,
              value: _v0.value,
              dataKey: _v6,
              payload: _v0.payload,
              points: _v5
            });
            return _v3.renderDotItem(_v4, _v2);
          }),
          _v10 = {
            clipPath: _v0 ? "url(#clipPath-".concat(_v1 ? "" : "dots-").concat(_v2, ")") : null
          };
        return _v2.default.createElement(_v10.Layer, _v21({
          className: "recharts-line-dots",
          key: "dots"
        }, _v10), _v9);
      }
    }, {
      key: "renderCurveStatically",
      value: function (_v0, _v1, _v2, _v3) {
        var _v4 = this.props,
          _v5 = _v4.type,
          _v6 = _v4.layout,
          _v7 = _v4.connectNulls,
          _v8 = (_v4.ref, _v20(_v4, _v17)),
          _v9 = _v23(_v23(_v23({}, (0, _v14.filterProps)(_v8, !0)), {}, {
            fill: "none",
            className: "recharts-line-curve",
            clipPath: _v1 ? "url(#clipPath-".concat(_v2, ")") : null,
            points: _v0
          }, _v3), {}, {
            type: _v5,
            layout: _v6,
            connectNulls: _v7
          });
        return _v2.default.createElement(_v8.Curve, _v21({}, _v9, {
          pathRef: this.pathRef
        }));
      }
    }, {
      key: "renderCurveWithAnimation",
      value: function (_v0, _v1) {
        var _v2 = this,
          _v3 = this.props,
          _v4 = _v3.points,
          _v5 = _v3.strokeDasharray,
          _v6 = _v3.isAnimationActive,
          _v7 = _v3.animationBegin,
          _v8 = _v3.animationDuration,
          _v9 = _v3.animationEasing,
          _v10 = _v3.animationId,
          _v11 = _v3.animateNewValues,
          _v12 = _v3.width,
          _v13 = _v3.height,
          _v14 = this.state,
          _v15 = _v14.prevPoints,
          _v16 = _v14.totalLength;
        return _v2.default.createElement(_v3.default, {
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
          key: "line-".concat(_v10),
          onAnimationEnd: this.handleAnimationEnd,
          onAnimationStart: this.handleAnimationStart
        }, function (_v0) {
          var _v1,
            _v2 = _v0.t;
          if (_v15) {
            var _v3 = _v15.length / _v4.length,
              _v4 = _v4.map(function (_v0, _v1) {
                var _v2 = Math.floor(_v1 * _v3);
                if (_v15[_v2]) {
                  var _v3 = _v15[_v2],
                    _v4 = (0, _v13.interpolateNumber)(_v3.x, _v0.x),
                    _v5 = (0, _v13.interpolateNumber)(_v3.y, _v0.y);
                  return _v23(_v23({}, _v0), {}, {
                    x: _v4(_v2),
                    y: _v5(_v2)
                  });
                }
                if (_v11) {
                  var _v6 = (0, _v13.interpolateNumber)(2 * _v12, _v0.x),
                    _v7 = (0, _v13.interpolateNumber)(_v13 / 2, _v0.y);
                  return _v23(_v23({}, _v0), {}, {
                    x: _v6(_v2),
                    y: _v7(_v2)
                  });
                }
                return _v23(_v23({}, _v0), {}, {
                  x: _v0.x,
                  y: _v0.y
                });
              });
            return _v2.renderCurveStatically(_v4, _v0, _v1);
          }
          var _v5 = (0, _v13.interpolateNumber)(0, _v16)(_v2);
          if (_v5) {
            var _v6 = "".concat(_v5).split(/[,\s]+/gim).map(function (_v0) {
              return parseFloat(_v0);
            });
            _v1 = _v2.getStrokeDasharray(_v5, _v16, _v6);
          } else _v1 = _v2.generateSimpleStrokeDasharray(_v16, _v5);
          return _v2.renderCurveStatically(_v4, _v0, _v1, {
            strokeDasharray: _v1
          });
        });
      }
    }, {
      key: "renderCurve",
      value: function (_v0, _v1) {
        var _v2 = this.props,
          _v3 = _v2.points,
          _v4 = _v2.isAnimationActive,
          _v5 = this.state,
          _v6 = _v5.prevPoints,
          _v7 = _v5.totalLength;
        return _v4 && _v3 && _v3.length && (!_v6 && _v7 > 0 || !(0, _v6.default)(_v6, _v3)) ? this.renderCurveWithAnimation(_v0, _v1) : this.renderCurveStatically(_v3, _v0, _v1);
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
          _v6 = _v1.xAxis,
          _v7 = _v1.yAxis,
          _v8 = _v1.top,
          _v9 = _v1.left,
          _v10 = _v1.width,
          _v11 = _v1.height,
          _v12 = _v1.isAnimationActive,
          _v13 = _v1.id;
        if (_v2 || !_v4 || !_v4.length) return null;
        var _v14 = this.state.isAnimationFinished,
          _v15 = 1 === _v4.length,
          _v16 = (0, _v7.default)("recharts-line", _v5),
          _v17 = _v6 && _v6.allowDataOverflow,
          _v18 = _v7 && _v7.allowDataOverflow,
          _v19 = _v17 || _v18,
          _v20 = (0, _v5.default)(_v13) ? this.id : _v13,
          _v21 = null != (_v0 = (0, _v14.filterProps)(_v3, !1)) ? _v0 : {
            r: 3,
            strokeWidth: 2
          },
          _v22 = _v21.r,
          _v23 = _v21.strokeWidth,
          _v24 = ((0, _v14.hasClipDot)(_v3) ? _v3 : {}).clipDot,
          _v25 = void 0 === _v24 || _v24,
          _v26 = 2 * (void 0 === _v22 ? 3 : _v22) + (void 0 === _v23 ? 2 : _v23);
        return _v2.default.createElement(_v10.Layer, {
          className: _v16
        }, _v17 || _v18 ? _v2.default.createElement("defs", null, _v2.default.createElement("clipPath", {
          id: "clipPath-".concat(_v20)
        }, _v2.default.createElement("rect", {
          x: _v17 ? _v9 : _v9 - _v10 / 2,
          y: _v18 ? _v8 : _v8 - _v11 / 2,
          width: _v17 ? _v10 : 2 * _v10,
          height: _v18 ? _v11 : 2 * _v11
        })), !_v25 && _v2.default.createElement("clipPath", {
          id: "clipPath-dots-".concat(_v20)
        }, _v2.default.createElement("rect", {
          x: _v9 - _v26 / 2,
          y: _v8 - _v26 / 2,
          width: _v10 + _v26,
          height: _v11 + _v26
        }))) : null, !_v15 && this.renderCurve(_v19, _v20), this.renderErrorBar(_v19, _v20), (_v15 || _v3) && this.renderDots(_v19, _v25, _v20), (!_v12 || _v14) && _v11.LabelList.renderCallByParent(this.props, _v4));
      }
    }], _v2 = [{
      key: "getDerivedStateFromProps",
      value: function (_v0, _v1) {
        return _v0.animationId !== _v1.prevAnimationId ? {
          prevAnimationId: _v0.animationId,
          curPoints: _v0.points,
          prevPoints: _v1.curPoints
        } : _v0.points !== _v1.curPoints ? {
          curPoints: _v0.points
        } : null;
      }
    }, {
      key: "repeat",
      value: function (_v0, _v1) {
        for (var _v2 = _v0.length % 2 != 0 ? [].concat(_v24(_v0), [0]) : _v0, _v3 = [], _v4 = 0; _v4 < _v1; ++_v4) _v3 = [].concat(_v24(_v3), _v24(_v2));
        return _v3;
      }
    }, {
      key: "renderDotItem",
      value: function (_v0, _v1) {
        var _v2;
        if (_v2.default.isValidElement(_v0)) _v2 = _v2.default.cloneElement(_v0, _v1);else if ((0, _v4.default)(_v0)) _v2 = _v0(_v1);else {
          var _v3 = _v1.key,
            _v4 = _v20(_v1, _v18),
            _v5 = (0, _v7.default)("recharts-line-dot", "boolean" != typeof _v0 ? _v0.className : "");
          _v2 = _v2.default.createElement(_v9.Dot, _v21({
            key: _v3
          }, _v4, {
            className: _v5
          }));
        }
        return _v2;
      }
    }], _v1 && _v26(_v3.prototype, _v1), _v2 && _v26(_v3, _v2), Object.defineProperty(_v3, "prototype", {
      writable: !1
    }), _v3;
  }(_v2.PureComponent);
  _v30(_v32, "displayName", "Line"), _v30(_v32, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: !1,
    activeDot: !0,
    dot: !0,
    legendType: "line",
    stroke: "#3182bd",
    strokeWidth: 1,
    fill: "#fff",
    points: [],
    isAnimationActive: !_v15.Global.isSsr,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 0,
    animationEasing: "ease",
    hide: !1,
    label: !1
  }), _v30(_v32, "getComposedData", function (_v0) {
    var _v1 = _v0.props,
      _v2 = _v0.xAxis,
      _v3 = _v0.yAxis,
      _v4 = _v0.xAxisTicks,
      _v5 = _v0.yAxisTicks,
      _v6 = _v0.dataKey,
      _v7 = _v0.bandSize,
      _v8 = _v0.displayedData,
      _v9 = _v0.offset,
      _v10 = _v1.layout;
    return _v23({
      points: _v8.map(function (_v0, _v1) {
        var _v2 = (0, _v16.getValueByDataKey)(_v0, _v6);
        return "horizontal" === _v10 ? {
          x: (0, _v16.getCateCoordinateOfLine)({
            axis: _v2,
            ticks: _v4,
            bandSize: _v7,
            entry: _v0,
            index: _v1
          }),
          y: (0, _v5.default)(_v2) ? null : _v3.scale(_v2),
          value: _v2,
          payload: _v0
        } : {
          x: (0, _v5.default)(_v2) ? null : _v2.scale(_v2),
          y: (0, _v16.getCateCoordinateOfLine)({
            axis: _v3,
            ticks: _v5,
            bandSize: _v7,
            entry: _v0,
            index: _v1
          }),
          value: _v2,
          payload: _v0
        };
      }),
      layout: _v10
    }, _v9);
  }), _v0.s(["Line", 0, _v32], 0);
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = (0, _v1.generateCategoricalChart)({
      chartName: "LineChart",
      GraphicalChild: _v32,
      axisComponents: [{
        axisType: "xAxis",
        AxisComp: _v33.XAxis
      }, {
        axisType: "yAxis",
        AxisComp: _v34.YAxis
      }],
      formatAxisMap: _v35.formatAxisMap
    });
  _v0.s(["LineChart", 0, _v36], 0);
}