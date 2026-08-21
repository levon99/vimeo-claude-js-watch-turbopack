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
    _v11 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
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
  function _v15(_v0) {
    var _v1 = _v0.shapeType,
      _v2 = _v0.elementProps;
    switch (_v1) {
      case "rectangle":
        return _v1.default.createElement(_v6.Rectangle, _v2);
      case "trapezoid":
        return _v1.default.createElement(_v7.Trapezoid, _v2);
      case "sector":
        return _v1.default.createElement(_v8.Sector, _v2);
      case "symbols":
        if ("symbols" === _v1) return _v1.default.createElement(_v10.Symbols, _v2);
        break;
      default:
        return null;
    }
  }
  function _v16(_v0) {
    return (0, _v1.isValidElement)(_v0) ? _v0.props : _v0;
  }
  function _v17(_v0, _v1) {
    return null != _v1 && "trapezoids" in _v0.props;
  }
  function _v18(_v0, _v1) {
    return null != _v1 && "sectors" in _v0.props;
  }
  function _v19(_v0, _v1) {
    return null != _v1 && "points" in _v0.props;
  }
  function _v20(_v0, _v1) {
    var _v2,
      _v3,
      _v4 = _v0.x === (null == _v1 || null == (_v2 = _v1.labelViewBox) ? void 0 : _v2.x) || _v0.x === _v1.x,
      _v5 = _v0.y === (null == _v1 || null == (_v3 = _v1.labelViewBox) ? void 0 : _v3.y) || _v0.y === _v1.y;
    return _v4 && _v5;
  }
  function _v21(_v0, _v1) {
    var _v2 = _v0.endAngle === _v1.endAngle,
      _v3 = _v0.startAngle === _v1.startAngle;
    return _v2 && _v3;
  }
  function _v22(_v0, _v1) {
    var _v2 = _v0.x === _v1.x,
      _v3 = _v0.y === _v1.y,
      _v4 = _v0.z === _v1.z;
    return _v2 && _v3 && _v4;
  }
  _v0.s(["Shape", 0, function (_v0) {
    var _v1,
      _v2 = _v0.option,
      _v3 = _v0.shapeType,
      _v4 = _v0.propTransformer,
      _v5 = _v0.activeClassName,
      _v6 = _v0.isActive,
      _v7 = function (_v0, _v1) {
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
      }(_v0, _v11);
    if ((0, _v1.isValidElement)(_v2)) _v1 = (0, _v1.cloneElement)(_v2, _v14(_v14({}, _v7), _v16(_v2)));else if ((0, _v2.default)(_v2)) _v1 = _v2(_v7);else if ((0, _v3.default)(_v2) && !(0, _v4.default)(_v2)) {
      var _v8 = (void 0 === _v4 ? function (_v0, _v1) {
        return _v14(_v14({}, _v1), _v0);
      } : _v4)(_v2, _v7);
      _v1 = _v1.default.createElement(_v15, {
        shapeType: _v3,
        elementProps: _v8
      });
    } else _v1 = _v1.default.createElement(_v15, {
      shapeType: _v3,
      elementProps: _v7
    });
    return _v6 ? _v1.default.createElement(_v9.Layer, {
      className: void 0 === _v5 ? "recharts-active-shape" : _v5
    }, _v1) : _v1;
  }, "getActiveShapeIndexForTooltip", 0, function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4 = _v0.activeTooltipItem,
      _v5 = _v0.graphicalItem,
      _v6 = _v0.itemData,
      _v7 = (_v17(_v5, _v4) ? _v1 = "trapezoids" : _v18(_v5, _v4) ? _v1 = "sectors" : _v19(_v5, _v4) && (_v1 = "points"), _v1),
      _v8 = _v17(_v5, _v4) ? null == (_v2 = _v4.tooltipPayload) || null == (_v2 = _v2[0]) || null == (_v2 = _v2.payload) ? void 0 : _v2.payload : _v18(_v5, _v4) ? null == (_v3 = _v4.tooltipPayload) || null == (_v3 = _v3[0]) || null == (_v3 = _v3.payload) ? void 0 : _v3.payload : _v19(_v5, _v4) ? _v4.payload : {},
      _v9 = _v6.filter(function (_v0, _v1) {
        var _v2 = (0, _v5.default)(_v8, _v0),
          _v3 = _v5.props[_v7].filter(function (_v0) {
            var _v1;
            return (_v17(_v5, _v4) ? _v1 = _v20 : _v18(_v5, _v4) ? _v1 = _v21 : _v19(_v5, _v4) && (_v1 = _v22), _v1)(_v0, _v4);
          }),
          _v4 = _v5.props[_v7].indexOf(_v3[_v3.length - 1]);
        return _v2 && _v1 === _v4;
      });
    return _v6.indexOf(_v9[_v9.length - 1]);
  }, "getPropsFromShapeOption", 0, _v16, "isFunnel", 0, _v17, "isPie", 0, _v18, "isScatter", 0, _v19]);
}