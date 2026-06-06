{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = Math.cos,
    _v10 = Math.sin,
    _v11 = Math.sqrt,
    _v12 = Math.PI,
    _v13 = 2 * _v12;
  _v11(3);
  let _v14 = {
      draw(_v0, _v1) {
        let _v2 = _v11(_v1 / _v12);
        _v0.moveTo(_v2, 0), _v0.arc(0, 0, _v2, 0, _v13);
      }
    },
    _v15 = _v11(1 / 3),
    _v16 = 2 * _v15,
    _v17 = _v10(_v12 / 10) / _v10(7 * _v12 / 10),
    _v18 = _v10(_v13 / 10) * _v17,
    _v19 = -_v9(_v13 / 10) * _v17,
    _v20 = _v11(3);
  _v11(3);
  let _v21 = _v11(3) / 2,
    _v22 = 1 / _v11(12),
    _v23 = (_v22 / 2 + 1) * 3;
  var _v24 = _v0.i(0);
  function _v25(_v0) {
    return (_v25 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  var _v26 = ["type", "size", "sizeType"];
  function _v27() {
    return (_v27 = Object.assign.bind()).apply(this, arguments);
  }
  function _v28(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v29(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v28(Object(_v2), !0).forEach(function (_v0) {
        var _v1, _v2, _v3;
        _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = function (_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" != _v25(_v0) || !_v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" != _v25(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === _v1 ? String : Number)(_v0);
          }(_v0, "string");
          return "symbol" == _v25(_v1) ? _v1 : _v1 + "";
        }(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
          value: _v3,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _v1[_v2] = _v3;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v28(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  var _v30 = {
      symbolCircle: _v14,
      symbolCross: {
        draw(_v0, _v1) {
          let _v2 = _v11(_v1 / 5) / 2;
          _v0.moveTo(-3 * _v2, -_v2), _v0.lineTo(-_v2, -_v2), _v0.lineTo(-_v2, -3 * _v2), _v0.lineTo(_v2, -3 * _v2), _v0.lineTo(_v2, -_v2), _v0.lineTo(3 * _v2, -_v2), _v0.lineTo(3 * _v2, _v2), _v0.lineTo(_v2, _v2), _v0.lineTo(_v2, 3 * _v2), _v0.lineTo(-_v2, 3 * _v2), _v0.lineTo(-_v2, _v2), _v0.lineTo(-3 * _v2, _v2), _v0.closePath();
        }
      },
      symbolDiamond: {
        draw(_v0, _v1) {
          let _v2 = _v11(_v1 / _v16),
            _v3 = _v2 * _v15;
          _v0.moveTo(0, -_v2), _v0.lineTo(_v3, 0), _v0.lineTo(0, _v2), _v0.lineTo(-_v3, 0), _v0.closePath();
        }
      },
      symbolSquare: {
        draw(_v0, _v1) {
          let _v2 = _v11(_v1),
            _v3 = -_v2 / 2;
          _v0.rect(_v3, _v3, _v2, _v2);
        }
      },
      symbolStar: {
        draw(_v0, _v1) {
          let _v2 = _v11(.8908130915292852 * _v1),
            _v3 = _v18 * _v2,
            _v4 = _v19 * _v2;
          _v0.moveTo(0, -_v2), _v0.lineTo(_v3, _v4);
          for (let _v0 = 1; _v0 < 5; ++_v0) {
            let _v0 = _v13 * _v0 / 5,
              _v1 = _v9(_v0),
              _v2 = _v10(_v0);
            _v0.lineTo(_v2 * _v2, -_v1 * _v2), _v0.lineTo(_v1 * _v3 - _v2 * _v4, _v2 * _v3 + _v1 * _v4);
          }
          _v0.closePath();
        }
      },
      symbolTriangle: {
        draw(_v0, _v1) {
          let _v2 = -_v11(_v1 / (3 * _v20));
          _v0.moveTo(0, 2 * _v2), _v0.lineTo(-_v20 * _v2, -_v2), _v0.lineTo(_v20 * _v2, -_v2), _v0.closePath();
        }
      },
      symbolWye: {
        draw(_v0, _v1) {
          let _v2 = _v11(_v1 / _v23),
            _v3 = _v2 / 2,
            _v4 = _v2 * _v22,
            _v5 = _v2 * _v22 + _v2,
            _v6 = -_v3;
          _v0.moveTo(_v3, _v4), _v0.lineTo(_v3, _v5), _v0.lineTo(_v6, _v5), _v0.lineTo(-.5 * _v3 - _v21 * _v4, _v21 * _v3 + -.5 * _v4), _v0.lineTo(-.5 * _v3 - _v21 * _v5, _v21 * _v3 + -.5 * _v5), _v0.lineTo(-.5 * _v6 - _v21 * _v5, _v21 * _v6 + -.5 * _v5), _v0.lineTo(-.5 * _v3 + _v21 * _v4, -.5 * _v4 - _v21 * _v3), _v0.lineTo(-.5 * _v3 + _v21 * _v5, -.5 * _v5 - _v21 * _v3), _v0.lineTo(-.5 * _v6 + _v21 * _v5, -.5 * _v5 - _v21 * _v6), _v0.closePath();
        }
      }
    },
    _v31 = Math.PI / 180,
    _v32 = function (_v0, _v1, _v2) {
      if ("area" === _v1) return _v0;
      switch (_v2) {
        case "cross":
          return 5 * _v0 * _v0 / 9;
        case "diamond":
          return .5 * _v0 * _v0 / Math.sqrt(3);
        case "square":
          return _v0 * _v0;
        case "star":
          var _v3 = 18 * _v31;
          return 1.25 * _v0 * _v0 * (Math.tan(_v3) - Math.tan(2 * _v3) * Math.pow(Math.tan(_v3), 2));
        case "triangle":
          return Math.sqrt(3) * _v0 * _v0 / 4;
        case "wye":
          return (21 - 10 * Math.sqrt(3)) * _v0 * _v0 / 8;
        default:
          return Math.PI * _v0 * _v0 / 4;
      }
    },
    _v33 = function (_v0) {
      var _v1,
        _v2 = _v0.type,
        _v3 = void 0 === _v2 ? "circle" : _v2,
        _v4 = _v0.size,
        _v5 = void 0 === _v4 ? 64 : _v4,
        _v6 = _v0.sizeType,
        _v7 = void 0 === _v6 ? "area" : _v6,
        _v8 = _v29(_v29({}, function (_v0, _v1) {
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
        }(_v0, _v26)), {}, {
          type: _v3,
          size: _v5,
          sizeType: _v7
        }),
        _v9 = _v8.className,
        _v10 = _v8.cx,
        _v11 = _v8.cy,
        _v12 = (0, _v24.filterProps)(_v8, !0);
      return _v10 === +_v10 && _v11 === +_v11 && _v5 === +_v5 ? _v1.default.createElement("path", _v27({}, _v12, {
        className: (0, _v3.default)("recharts-symbols", _v9),
        transform: "translate(".concat(_v10, ", ").concat(_v11, ")"),
        d: (_v1 = _v30["symbol".concat((0, _v6.default)(_v3))] || _v14, function (_v0, _v1) {
          let _v2 = null,
            _v3 = (0, _v8.withPath)(_v4);
          function _v4() {
            let _v0;
            if (_v2 || (_v2 = _v0 = _v3()), _v0.apply(this, arguments).draw(_v2, +_v1.apply(this, arguments)), _v0) return _v2 = null, _v0 + "" || null;
          }
          return _v0 = "function" == typeof _v0 ? _v0 : (0, _v7.default)(_v0 || _v14), _v1 = "function" == typeof _v1 ? _v1 : (0, _v7.default)(void 0 === _v1 ? 64 : +_v1), _v4.type = function (_v0) {
            return arguments.length ? (_v0 = "function" == typeof _v0 ? _v0 : (0, _v7.default)(_v0), _v4) : _v0;
          }, _v4.size = function (_v0) {
            return arguments.length ? (_v1 = "function" == typeof _v0 ? _v0 : (0, _v7.default)(+_v0), _v4) : _v1;
          }, _v4.context = function (_v0) {
            return arguments.length ? (_v2 = null == _v0 ? null : _v0, _v4) : _v2;
          }, _v4;
        }().type(_v1).size(_v32(_v5, _v7, _v3))())
      })) : null;
    };
  _v33.registerSymbol = function (_v0, _v1) {
    _v30["symbol".concat((0, _v6.default)(_v0))] = _v1;
  }, _v0.s(["Symbols", 0, _v33], 0);
  var _v34 = _v0.i(0);
  function _v35(_v0) {
    return (_v35 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v36() {
    return (_v36 = Object.assign.bind()).apply(this, arguments);
  }
  function _v37(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v38() {
    try {
      var _v0 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (_v0) {}
    return (_v38 = function () {
      return !!_v0;
    })();
  }
  function _v39(_v0) {
    return (_v39 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v40(_v0, _v1) {
    return (_v40 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v41(_v0, _v1, _v2) {
    return (_v1 = _v42(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v42(_v0) {
    var _v1 = function (_v0, _v1) {
      if ("object" != _v35(_v0) || !_v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" != _v35(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v0, "string");
    return "symbol" == _v35(_v1) ? _v1 : _v1 + "";
  }
  var _v43 = function (_v0) {
    var _v1;
    function _v2() {
      var _v0, _v1;
      if (!(this instanceof _v2)) throw TypeError("Cannot call a class as a function");
      return _v0 = _v2, _v1 = arguments, _v0 = _v39(_v0), function (_v0, _v1) {
        if (_v1 && ("object" === _v35(_v1) || "function" == typeof _v1)) return _v1;
        if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
        var _v2 = _v0;
        if (void 0 === _v2) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _v2;
      }(this, _v38() ? Reflect.construct(_v0, _v1 || [], _v39(this).constructor) : _v0.apply(this, _v1));
    }
    if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
    return _v2.prototype = Object.create(_v0 && _v0.prototype, {
      constructor: {
        value: _v2,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(_v2, "prototype", {
      writable: !1
    }), _v0 && _v40(_v2, _v0), _v1 = [{
      key: "renderIcon",
      value: function (_v0) {
        var _v1 = this.props.inactiveColor,
          _v2 = 32 / 6,
          _v3 = 32 / 3,
          _v4 = _v0.inactive ? _v1 : _v0.color;
        if ("plainline" === _v0.type) return _v1.default.createElement("line", {
          strokeWidth: 4,
          fill: "none",
          stroke: _v4,
          strokeDasharray: _v0.payload.strokeDasharray,
          x1: 0,
          y1: 16,
          x2: 32,
          y2: 16,
          className: "recharts-legend-icon"
        });
        if ("line" === _v0.type) return _v1.default.createElement("path", {
          strokeWidth: 4,
          fill: "none",
          stroke: _v4,
          d: "M0,".concat(16, "h").concat(_v3, "\n            A").concat(_v2, ",").concat(_v2, ",0,1,1,").concat(2 * _v3, ",").concat(16, "\n            H").concat(32, "M").concat(2 * _v3, ",").concat(16, "\n            A").concat(_v2, ",").concat(_v2, ",0,1,1,").concat(_v3, ",").concat(16),
          className: "recharts-legend-icon"
        });
        if ("rect" === _v0.type) return _v1.default.createElement("path", {
          stroke: "none",
          fill: _v4,
          d: "M0,".concat(4, "h").concat(32, "v").concat(24, "h").concat(-32, "z"),
          className: "recharts-legend-icon"
        });
        if (_v1.default.isValidElement(_v0.legendIcon)) {
          var _v5 = function (_v0) {
            for (var _v1 = 1; _v1 < arguments.length; _v1++) {
              var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
              _v1 % 2 ? _v37(Object(_v2), !0).forEach(function (_v0) {
                _v41(_v0, _v0, _v2[_v0]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v37(Object(_v2)).forEach(function (_v0) {
                Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
              });
            }
            return _v0;
          }({}, _v0);
          return delete _v5.legendIcon, _v1.default.cloneElement(_v0.legendIcon, _v5);
        }
        return _v1.default.createElement(_v33, {
          fill: _v4,
          cx: 16,
          cy: 16,
          size: 32,
          sizeType: "diameter",
          type: _v0.type
        });
      }
    }, {
      key: "renderItems",
      value: function () {
        var _v0 = this,
          _v1 = this.props,
          _v2 = _v1.payload,
          _v3 = _v1.iconSize,
          _v4 = _v1.layout,
          _v5 = _v1.formatter,
          _v6 = _v1.inactiveColor,
          _v7 = {
            x: 0,
            y: 0,
            width: 32,
            height: 32
          },
          _v8 = {
            display: "horizontal" === _v4 ? "inline-block" : "block",
            marginRight: 10
          },
          _v9 = {
            display: "inline-block",
            verticalAlign: "middle",
            marginRight: 4
          };
        return _v2.map(function (_v0, _v1) {
          var _v2 = _v0.formatter || _v5,
            _v3 = (0, _v3.default)(_v41(_v41({
              "recharts-legend-item": !0
            }, "legend-item-".concat(_v1), !0), "inactive", _v0.inactive));
          if ("none" === _v0.type) return null;
          var _v4 = (0, _v2.default)(_v0.value) ? null : _v0.value;
          (0, _v4.warn)(!(0, _v2.default)(_v0.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
          var _v5 = _v0.inactive ? _v6 : _v0.color;
          return _v1.default.createElement("li", _v36({
            className: _v3,
            style: _v8,
            key: "legend-item-".concat(_v1)
          }, (0, _v34.adaptEventsOfChild)(_v0.props, _v0, _v1)), _v1.default.createElement(_v5.Surface, {
            width: _v3,
            height: _v3,
            viewBox: _v7,
            style: _v9
          }, _v0.renderIcon(_v0)), _v1.default.createElement("span", {
            className: "recharts-legend-item-text",
            style: {
              color: _v5
            }
          }, _v2 ? _v2(_v4, _v0, _v1) : _v4));
        });
      }
    }, {
      key: "render",
      value: function () {
        var _v0 = this.props,
          _v1 = _v0.payload,
          _v2 = _v0.layout,
          _v3 = _v0.align;
        return _v1 && _v1.length ? _v1.default.createElement("ul", {
          className: "recharts-default-legend",
          style: {
            padding: 0,
            margin: 0,
            textAlign: "horizontal" === _v2 ? _v3 : "left"
          }
        }, this.renderItems()) : null;
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v42(_v3.key), _v3);
      }
    }(_v2.prototype, _v1), Object.defineProperty(_v2, "prototype", {
      writable: !1
    }), _v2;
  }(_v1.PureComponent);
  _v41(_v43, "displayName", "Legend"), _v41(_v43, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    inactiveColor: "#ccc"
  }), _v0.s(["DefaultLegendContent", 0, _v43], 0);
}