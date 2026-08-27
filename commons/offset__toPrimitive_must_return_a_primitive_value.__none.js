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
    _v10 = ["x1", "y1", "x2", "y2", "key"],
    _v11 = ["offset"];
  function _v12(_v0) {
    return (_v12 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
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
        var _v1, _v2, _v3;
        _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = function (_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" != _v12(_v0) || !_v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" != _v12(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === _v1 ? String : Number)(_v0);
          }(_v0, "string");
          return "symbol" == _v12(_v1) ? _v1 : _v1 + "";
        }(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
          value: _v3,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _v1[_v2] = _v3;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v13(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v15() {
    return (_v15 = Object.assign.bind()).apply(this, arguments);
  }
  function _v16(_v0, _v1) {
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
  var _v17 = function (_v0) {
    var _v1 = _v0.fill;
    if (!_v1 || "none" === _v1) return null;
    var _v2 = _v0.fillOpacity,
      _v3 = _v0.x,
      _v4 = _v0.y,
      _v5 = _v0.width,
      _v6 = _v0.height,
      _v7 = _v0.ry;
    return _v1.default.createElement("rect", {
      x: _v3,
      y: _v4,
      ry: _v7,
      width: _v5,
      height: _v6,
      stroke: "none",
      fill: _v1,
      fillOpacity: _v2,
      className: "recharts-cartesian-grid-bg"
    });
  };
  function _v18(_v0, _v1) {
    var _v2;
    if (_v1.default.isValidElement(_v0)) _v2 = _v1.default.cloneElement(_v0, _v1);else if ((0, _v2.default)(_v0)) _v2 = _v0(_v1);else {
      var _v3 = _v1.x1,
        _v4 = _v1.y1,
        _v5 = _v1.x2,
        _v6 = _v1.y2,
        _v7 = _v1.key,
        _v8 = _v16(_v1, _v10),
        _v9 = (0, _v5.filterProps)(_v8, !1),
        _v10 = (_v9.offset, _v16(_v9, _v11));
      _v2 = _v1.default.createElement("line", _v15({}, _v10, {
        x1: _v3,
        y1: _v4,
        x2: _v5,
        y2: _v6,
        fill: "none",
        key: _v7
      }));
    }
    return _v2;
  }
  function _v19(_v0) {
    var _v1 = _v0.x,
      _v2 = _v0.width,
      _v3 = _v0.horizontal,
      _v4 = void 0 === _v3 || _v3,
      _v5 = _v0.horizontalPoints;
    if (!_v4 || !_v5 || !_v5.length) return null;
    var _v6 = _v5.map(function (_v0, _v1) {
      return _v18(_v4, _v14(_v14({}, _v0), {}, {
        x1: _v1,
        y1: _v0,
        x2: _v1 + _v2,
        y2: _v0,
        key: "line-".concat(_v1),
        index: _v1
      }));
    });
    return _v1.default.createElement("g", {
      className: "recharts-cartesian-grid-horizontal"
    }, _v6);
  }
  function _v20(_v0) {
    var _v1 = _v0.y,
      _v2 = _v0.height,
      _v3 = _v0.vertical,
      _v4 = void 0 === _v3 || _v3,
      _v5 = _v0.verticalPoints;
    if (!_v4 || !_v5 || !_v5.length) return null;
    var _v6 = _v5.map(function (_v0, _v1) {
      return _v18(_v4, _v14(_v14({}, _v0), {}, {
        x1: _v0,
        y1: _v1,
        x2: _v0,
        y2: _v1 + _v2,
        key: "line-".concat(_v1),
        index: _v1
      }));
    });
    return _v1.default.createElement("g", {
      className: "recharts-cartesian-grid-vertical"
    }, _v6);
  }
  function _v21(_v0) {
    var _v1 = _v0.horizontalFill,
      _v2 = _v0.fillOpacity,
      _v3 = _v0.x,
      _v4 = _v0.y,
      _v5 = _v0.width,
      _v6 = _v0.height,
      _v7 = _v0.horizontalPoints,
      _v8 = _v0.horizontal;
    if (!(void 0 === _v8 || _v8) || !_v1 || !_v1.length) return null;
    var _v9 = _v7.map(function (_v0) {
      return Math.round(_v0 + _v4 - _v4);
    }).sort(function (_v0, _v1) {
      return _v0 - _v1;
    });
    _v4 !== _v9[0] && _v9.unshift(0);
    var _v10 = _v9.map(function (_v0, _v1) {
      var _v2 = _v9[_v1 + 1] ? _v9[_v1 + 1] - _v0 : _v4 + _v6 - _v0;
      if (_v2 <= 0) return null;
      var _v3 = _v1 % _v1.length;
      return _v1.default.createElement("rect", {
        key: "react-".concat(_v1),
        y: _v0,
        x: _v3,
        height: _v2,
        width: _v5,
        stroke: "none",
        fill: _v1[_v3],
        fillOpacity: _v2,
        className: "recharts-cartesian-grid-bg"
      });
    });
    return _v1.default.createElement("g", {
      className: "recharts-cartesian-gridstripes-horizontal"
    }, _v10);
  }
  function _v22(_v0) {
    var _v1 = _v0.vertical,
      _v2 = _v0.verticalFill,
      _v3 = _v0.fillOpacity,
      _v4 = _v0.x,
      _v5 = _v0.y,
      _v6 = _v0.width,
      _v7 = _v0.height,
      _v8 = _v0.verticalPoints;
    if (!(void 0 === _v1 || _v1) || !_v2 || !_v2.length) return null;
    var _v9 = _v8.map(function (_v0) {
      return Math.round(_v0 + _v4 - _v4);
    }).sort(function (_v0, _v1) {
      return _v0 - _v1;
    });
    _v4 !== _v9[0] && _v9.unshift(0);
    var _v10 = _v9.map(function (_v0, _v1) {
      var _v2 = _v9[_v1 + 1] ? _v9[_v1 + 1] - _v0 : _v4 + _v6 - _v0;
      if (_v2 <= 0) return null;
      var _v3 = _v1 % _v2.length;
      return _v1.default.createElement("rect", {
        key: "react-".concat(_v1),
        x: _v0,
        y: _v5,
        width: _v2,
        height: _v7,
        stroke: "none",
        fill: _v2[_v3],
        fillOpacity: _v3,
        className: "recharts-cartesian-grid-bg"
      });
    });
    return _v1.default.createElement("g", {
      className: "recharts-cartesian-gridstripes-vertical"
    }, _v10);
  }
  var _v23 = function (_v0, _v1) {
      var _v2 = _v0.xAxis,
        _v3 = _v0.width,
        _v4 = _v0.height,
        _v5 = _v0.offset;
      return (0, _v6.getCoordinatesOfGrid)((0, _v7.getTicks)(_v14(_v14(_v14({}, _v8.CartesianAxis.defaultProps), _v2), {}, {
        ticks: (0, _v6.getTicksOfAxis)(_v2, !0),
        viewBox: {
          x: 0,
          y: 0,
          width: _v3,
          height: _v4
        }
      })), _v5.left, _v5.left + _v5.width, _v1);
    },
    _v24 = function (_v0, _v1) {
      var _v2 = _v0.yAxis,
        _v3 = _v0.width,
        _v4 = _v0.height,
        _v5 = _v0.offset;
      return (0, _v6.getCoordinatesOfGrid)((0, _v7.getTicks)(_v14(_v14(_v14({}, _v8.CartesianAxis.defaultProps), _v2), {}, {
        ticks: (0, _v6.getTicksOfAxis)(_v2, !0),
        viewBox: {
          x: 0,
          y: 0,
          width: _v3,
          height: _v4
        }
      })), _v5.top, _v5.top + _v5.height, _v1);
    },
    _v25 = [],
    _v26 = [];
  function _v27(_v0) {
    var _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7 = (0, _v9.useChartWidth)(),
      _v8 = (0, _v9.useChartHeight)(),
      _v9 = (0, _v9.useOffset)(),
      _v10 = _v14(_v14({}, _v0), {}, {
        stroke: null != (_v1 = _v0.stroke) ? _v1 : "#ccc",
        fill: null != (_v2 = _v0.fill) ? _v2 : "none",
        horizontal: null == (_v3 = _v0.horizontal) || _v3,
        horizontalFill: null != (_v4 = _v0.horizontalFill) ? _v4 : _v26,
        vertical: null == (_v5 = _v0.vertical) || _v5,
        verticalFill: null != (_v6 = _v0.verticalFill) ? _v6 : _v25,
        x: (0, _v4.isNumber)(_v0.x) ? _v0.x : _v9.left,
        y: (0, _v4.isNumber)(_v0.y) ? _v0.y : _v9.top,
        width: (0, _v4.isNumber)(_v0.width) ? _v0.width : _v9.width,
        height: (0, _v4.isNumber)(_v0.height) ? _v0.height : _v9.height
      }),
      _v11 = _v10.x,
      _v12 = _v10.y,
      _v13 = _v10.width,
      _v14 = _v10.height,
      _v15 = _v10.syncWithTicks,
      _v16 = _v10.horizontalValues,
      _v17 = _v10.verticalValues,
      _v18 = (0, _v9.useArbitraryXAxis)(),
      _v19 = (0, _v9.useYAxisWithFiniteDomainOrRandom)();
    if (!(0, _v4.isNumber)(_v13) || _v13 <= 0 || !(0, _v4.isNumber)(_v14) || _v14 <= 0 || !(0, _v4.isNumber)(_v11) || _v11 !== +_v11 || !(0, _v4.isNumber)(_v12) || _v12 !== +_v12) return null;
    var _v20 = _v10.verticalCoordinatesGenerator || _v23,
      _v21 = _v10.horizontalCoordinatesGenerator || _v24,
      _v22 = _v10.horizontalPoints,
      _v23 = _v10.verticalPoints;
    if ((!_v22 || !_v22.length) && (0, _v2.default)(_v21)) {
      var _v24 = _v16 && _v16.length,
        _v25 = _v21({
          yAxis: _v19 ? _v14(_v14({}, _v19), {}, {
            ticks: _v24 ? _v16 : _v19.ticks
          }) : void 0,
          width: _v7,
          height: _v8,
          offset: _v9
        }, !!_v24 || _v15);
      (0, _v3.warn)(Array.isArray(_v25), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(_v12(_v25), "]")), Array.isArray(_v25) && (_v22 = _v25);
    }
    if ((!_v23 || !_v23.length) && (0, _v2.default)(_v20)) {
      var _v26 = _v17 && _v17.length,
        _v27 = _v20({
          xAxis: _v18 ? _v14(_v14({}, _v18), {}, {
            ticks: _v26 ? _v17 : _v18.ticks
          }) : void 0,
          width: _v7,
          height: _v8,
          offset: _v9
        }, !!_v26 || _v15);
      (0, _v3.warn)(Array.isArray(_v27), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(_v12(_v27), "]")), Array.isArray(_v27) && (_v23 = _v27);
    }
    return _v1.default.createElement("g", {
      className: "recharts-cartesian-grid"
    }, _v1.default.createElement(_v17, {
      fill: _v10.fill,
      fillOpacity: _v10.fillOpacity,
      x: _v10.x,
      y: _v10.y,
      width: _v10.width,
      height: _v10.height,
      ry: _v10.ry
    }), _v1.default.createElement(_v19, _v15({}, _v10, {
      offset: _v9,
      horizontalPoints: _v22,
      xAxis: _v18,
      yAxis: _v19
    })), _v1.default.createElement(_v20, _v15({}, _v10, {
      offset: _v9,
      verticalPoints: _v23,
      xAxis: _v18,
      yAxis: _v19
    })), _v1.default.createElement(_v21, _v15({}, _v10, {
      horizontalPoints: _v22
    })), _v1.default.createElement(_v22, _v15({}, _v10, {
      verticalPoints: _v23
    })));
  }
  _v27.displayName = "CartesianGrid", _v0.s(["CartesianGrid", 0, _v27]);
}