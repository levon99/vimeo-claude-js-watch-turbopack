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
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23(_v0) {
    return (_v23 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v24() {
    return (_v24 = Object.assign.bind()).apply(this, arguments);
  }
  function _v25(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v26(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v25(Object(_v2), !0).forEach(function (_v0) {
        var _v1, _v2, _v3;
        _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = function (_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" != _v23(_v0) || !_v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" != _v23(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === _v1 ? String : Number)(_v0);
          }(_v0, "string");
          return "symbol" == _v23(_v1) ? _v1 : _v1 + "";
        }(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
          value: _v3,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _v1[_v2] = _v3;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v25(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  var _v27 = {
      curveBasisClosed: _v4.curveBasisClosed,
      curveBasisOpen: _v5.curveBasisOpen,
      curveBasis: _v6.curveBasis,
      curveBumpX: _v7.curveBumpX,
      curveBumpY: _v8.curveBumpY,
      curveLinearClosed: _v9.curveLinearClosed,
      curveLinear: _v10.curveLinear,
      curveMonotoneX: _v11.curveMonotoneX,
      curveMonotoneY: _v12.curveMonotoneY,
      curveNatural: _v13.curveNatural,
      curveStep: _v14.curveStep,
      curveStepAfter: _v15.curveStepAfter,
      curveStepBefore: _v16.curveStepBefore
    },
    _v28 = function (_v0) {
      return _v0.x === +_v0.x && _v0.y === +_v0.y;
    },
    _v29 = function (_v0) {
      return _v0.x;
    },
    _v30 = function (_v0) {
      return _v0.y;
    },
    _v31 = function (_v0, _v1) {
      if ((0, _v18.default)(_v0)) return _v0;
      var _v2 = "curve".concat((0, _v17.default)(_v0));
      return ("curveMonotone" === _v2 || "curveBump" === _v2) && _v1 ? _v27["".concat(_v2).concat("vertical" === _v1 ? "Y" : "X")] : _v27[_v2] || _v10.curveLinear;
    },
    _v32 = function (_v0) {
      var _v1,
        _v2 = _v0.type,
        _v3 = _v0.points,
        _v4 = void 0 === _v3 ? [] : _v3,
        _v5 = _v0.baseLine,
        _v6 = _v0.layout,
        _v7 = _v0.connectNulls,
        _v8 = void 0 !== _v7 && _v7,
        _v9 = _v31(void 0 === _v2 ? "linear" : _v2, _v6),
        _v10 = _v8 ? _v4.filter(function (_v0) {
          return _v28(_v0);
        }) : _v4;
      if (Array.isArray(_v5)) {
        var _v11 = _v8 ? _v5.filter(function (_v0) {
            return _v28(_v0);
          }) : _v5,
          _v12 = _v10.map(function (_v0, _v1) {
            return _v26(_v26({}, _v0), {}, {
              base: _v11[_v1]
            });
          });
        return (_v1 = "vertical" === _v6 ? (0, _v3.area)().y(_v30).x1(_v29).x0(function (_v0) {
          return _v0.base.x;
        }) : (0, _v3.area)().x(_v29).y1(_v30).y0(function (_v0) {
          return _v0.base.y;
        })).defined(_v28).curve(_v9), _v1(_v12);
      }
      return (_v1 = "vertical" === _v6 && (0, _v22.isNumber)(_v5) ? (0, _v3.area)().y(_v30).x1(_v29).x0(_v5) : (0, _v22.isNumber)(_v5) ? (0, _v3.area)().x(_v29).y1(_v30).y0(_v5) : (0, _v2.line)().x(_v29).y(_v30)).defined(_v28).curve(_v9), _v1(_v10);
    };
  _v0.s(["Curve", 0, function (_v0) {
    var _v1 = _v0.className,
      _v2 = _v0.points,
      _v3 = _v0.path,
      _v4 = _v0.pathRef;
    if ((!_v2 || !_v2.length) && !_v3) return null;
    var _v5 = _v2 && _v2.length ? _v32(_v0) : _v3;
    return _v1.createElement("path", _v24({}, (0, _v21.filterProps)(_v0, !1), (0, _v20.adaptEventHandlers)(_v0), {
      className: (0, _v19.default)("recharts-curve", _v1),
      d: _v5,
      ref: _v4
    }));
  }]);
}