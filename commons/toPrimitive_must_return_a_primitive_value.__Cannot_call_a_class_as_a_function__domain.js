{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7(_v0) {
    return (_v7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v8(_v0, _v1) {
    for (var _v2 = 0; _v2 < _v1.length; _v2++) {
      var _v3 = _v1[_v2];
      _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v12(_v3.key), _v3);
    }
  }
  function _v9(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v10(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v9(Object(_v2), !0).forEach(function (_v0) {
        _v11(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v9(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v11(_v0, _v1, _v2) {
    return (_v1 = _v12(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v12(_v0) {
    var _v1 = function (_v0, _v1) {
      if ("object" != _v7(_v0) || !_v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" != _v7(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v0, "string");
    return "symbol" == _v7(_v1) ? _v1 : _v1 + "";
  }
  var _v13 = function (_v0, _v1) {
      var _v2 = _v0.x,
        _v3 = _v0.y,
        _v4 = _v1.x,
        _v5 = _v1.y;
      return {
        x: Math.min(_v2, _v4),
        y: Math.min(_v3, _v5),
        width: Math.abs(_v4 - _v2),
        height: Math.abs(_v5 - _v3)
      };
    },
    _v14 = function () {
      var _v0, _v1;
      function _v2(_v0) {
        if (!(this instanceof _v2)) throw TypeError("Cannot call a class as a function");
        this.scale = _v0;
      }
      return _v0 = [{
        key: "domain",
        get: function () {
          return this.scale.domain;
        }
      }, {
        key: "range",
        get: function () {
          return this.scale.range;
        }
      }, {
        key: "rangeMin",
        get: function () {
          return this.range()[0];
        }
      }, {
        key: "rangeMax",
        get: function () {
          return this.range()[1];
        }
      }, {
        key: "bandwidth",
        get: function () {
          return this.scale.bandwidth;
        }
      }, {
        key: "apply",
        value: function (_v0) {
          var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            _v2 = _v1.bandAware,
            _v3 = _v1.position;
          if (void 0 !== _v0) {
            if (_v3) switch (_v3) {
              case "start":
              default:
                return this.scale(_v0);
              case "middle":
                var _v4 = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(_v0) + _v4;
              case "end":
                var _v5 = this.bandwidth ? this.bandwidth() : 0;
                return this.scale(_v0) + _v5;
            }
            if (_v2) {
              var _v6 = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(_v0) + _v6;
            }
            return this.scale(_v0);
          }
        }
      }, {
        key: "isInRange",
        value: function (_v0) {
          var _v1 = this.range(),
            _v2 = _v1[0],
            _v3 = _v1[_v1.length - 1];
          return _v2 <= _v3 ? _v0 >= _v2 && _v0 <= _v3 : _v0 >= _v3 && _v0 <= _v2;
        }
      }], _v1 = [{
        key: "create",
        value: function (_v0) {
          return new _v2(_v0);
        }
      }], _v0 && _v8(_v2.prototype, _v0), _v1 && _v8(_v2, _v1), Object.defineProperty(_v2, "prototype", {
        writable: !1
      }), _v2;
    }();
  _v11(_v14, "EPS", 1e-4), _v0.s(["createLabeledScales", 0, function (_v0) {
    var _v1 = Object.keys(_v0).reduce(function (_v0, _v1) {
      return _v10(_v10({}, _v0), {}, _v11({}, _v1, _v14.create(_v0[_v1])));
    }, {});
    return _v10(_v10({}, _v1), {}, {
      apply: function (_v0) {
        var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          _v2 = _v1.bandAware,
          _v3 = _v1.position;
        return (0, _v1.default)(_v0, function (_v0, _v1) {
          return _v1[_v1].apply(_v0, {
            bandAware: _v2,
            position: _v3
          });
        });
      },
      isInRange: function (_v0) {
        return (0, _v2.default)(_v0, function (_v0, _v1) {
          return _v1[_v1].isInRange(_v0);
        });
      }
    });
  }, "formatAxisMap", 0, function (_v0, _v1, _v2, _v3, _v4) {
    var _v5 = _v0.width,
      _v6 = _v0.height,
      _v7 = _v0.layout,
      _v8 = _v0.children,
      _v9 = Object.keys(_v1),
      _v10 = {
        left: _v2.left,
        leftMirror: _v2.left,
        right: _v5 - _v2.right,
        rightMirror: _v5 - _v2.right,
        top: _v2.top,
        topMirror: _v2.top,
        bottom: _v6 - _v2.bottom,
        bottomMirror: _v6 - _v2.bottom
      },
      _v11 = !!(0, _v4.findChildByType)(_v8, _v6.Bar);
    return _v9.reduce(function (_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = _v1[_v1],
        _v8 = _v7.orientation,
        _v9 = _v7.domain,
        _v10 = _v7.padding,
        _v11 = void 0 === _v10 ? {} : _v10,
        _v12 = _v7.mirror,
        _v13 = _v7.reversed,
        _v14 = "".concat(_v8).concat(_v12 ? "Mirror" : "");
      if ("number" === _v7.type && ("gap" === _v7.padding || "no-gap" === _v7.padding)) {
        var _v15 = _v9[1] - _v9[0],
          _v16 = 1 / 0,
          _v17 = _v7.categoricalDomain.sort(_v5.compareValues);
        if (_v17.forEach(function (_v0, _v1) {
          _v1 > 0 && (_v16 = Math.min((_v0 || 0) - (_v17[_v1 - 1] || 0), _v16));
        }), Number.isFinite(_v16)) {
          var _v18 = _v16 / _v15,
            _v19 = "vertical" === _v7.layout ? _v2.height : _v2.width;
          if ("gap" === _v7.padding && (_v2 = _v18 * _v19 / 2), "no-gap" === _v7.padding) {
            var _v20 = (0, _v5.getPercentValue)(_v0.barCategoryGap, _v18 * _v19),
              _v21 = _v18 * _v19 / 2;
            _v2 = _v21 - _v20 - (_v21 - _v20) / _v19 * _v20;
          }
        }
      }
      _v3 = "xAxis" === _v3 ? [_v2.left + (_v11.left || 0) + (_v2 || 0), _v2.left + _v2.width - (_v11.right || 0) - (_v2 || 0)] : "yAxis" === _v3 ? "horizontal" === _v7 ? [_v2.top + _v2.height - (_v11.bottom || 0), _v2.top + (_v11.top || 0)] : [_v2.top + (_v11.top || 0) + (_v2 || 0), _v2.top + _v2.height - (_v11.bottom || 0) - (_v2 || 0)] : _v7.range, _v13 && (_v3 = [_v3[1], _v3[0]]);
      var _v22 = (0, _v3.parseScale)(_v7, _v4, _v11),
        _v23 = _v22.scale,
        _v24 = _v22.realScaleType;
      _v23.domain(_v9).range(_v3), (0, _v3.checkDomainOfScale)(_v23);
      var _v25 = (0, _v3.getTicksOfScale)(_v23, _v10(_v10({}, _v7), {}, {
        realScaleType: _v24
      }));
      "xAxis" === _v3 ? (_v6 = "top" === _v8 && !_v12 || "bottom" === _v8 && _v12, _v4 = _v2.left, _v5 = _v10[_v14] - _v6 * _v7.height) : "yAxis" === _v3 && (_v6 = "left" === _v8 && !_v12 || "right" === _v8 && _v12, _v4 = _v10[_v14] - _v6 * _v7.width, _v5 = _v2.top);
      var _v26 = _v10(_v10(_v10({}, _v7), _v25), {}, {
        realScaleType: _v24,
        x: _v4,
        y: _v5,
        scale: _v23,
        width: "xAxis" === _v3 ? _v2.width : _v7.width,
        height: "yAxis" === _v3 ? _v2.height : _v7.height
      });
      return _v26.bandSize = (0, _v3.getBandSizeOfAxis)(_v26, _v25), _v7.hide || "xAxis" !== _v3 ? _v7.hide || (_v10[_v14] += (_v6 ? -1 : 1) * _v26.width) : _v10[_v14] += (_v6 ? -1 : 1) * _v26.height, _v10(_v10({}, _v0), {}, _v11({}, _v1, _v26));
    }, {});
  }, "getAngledRectangleWidth", 0, function (_v0) {
    var _v1 = _v0.width,
      _v2 = _v0.height,
      _v3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      _v4 = (_v3 % 180 + 180) % 180 * Math.PI / 180,
      _v5 = Math.atan(_v2 / _v1);
    return Math.abs(_v4 > _v5 && _v4 < Math.PI - _v5 ? _v2 / Math.sin(_v4) : _v1 / Math.cos(_v4));
  }, "rectWithCoords", 0, function (_v0) {
    return _v13({
      x: _v0.x1,
      y: _v0.y1
    }, {
      x: _v0.x2,
      y: _v0.y2
    });
  }, "rectWithPoints", 0, _v13]);
}