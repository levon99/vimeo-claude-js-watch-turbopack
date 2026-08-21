{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0) {
    return (_v6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v7() {
    return (_v7 = Object.assign.bind()).apply(this, arguments);
  }
  function _v8(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v9(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v8(Object(_v2), !0).forEach(function (_v0) {
        var _v1, _v2, _v3;
        _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = function (_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" != _v6(_v0) || !_v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" != _v6(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === _v1 ? String : Number)(_v0);
          }(_v0, "string");
          return "symbol" == _v6(_v1) ? _v1 : _v1 + "";
        }(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
          value: _v3,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _v1[_v2] = _v3;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v8(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  var _v10 = function (_v0) {
      var _v1 = _v0.cx,
        _v2 = _v0.cy,
        _v3 = _v0.radius,
        _v4 = _v0.angle,
        _v5 = _v0.sign,
        _v6 = _v0.isExternal,
        _v7 = _v0.cornerRadius,
        _v8 = _v0.cornerIsExternal,
        _v9 = _v7 * (_v6 ? 1 : -1) + _v3,
        _v10 = Math.asin(_v7 / _v9) / _v4.RADIAN,
        _v11 = _v8 ? _v4 : _v4 + _v5 * _v10;
      return {
        center: (0, _v4.polarToCartesian)(_v1, _v2, _v9, _v11),
        circleTangency: (0, _v4.polarToCartesian)(_v1, _v2, _v3, _v11),
        lineTangency: (0, _v4.polarToCartesian)(_v1, _v2, _v9 * Math.cos(_v10 * _v4.RADIAN), _v8 ? _v4 - _v5 * _v10 : _v4),
        theta: _v10
      };
    },
    _v11 = function (_v0) {
      var _v1 = _v0.cx,
        _v2 = _v0.cy,
        _v3 = _v0.innerRadius,
        _v4 = _v0.outerRadius,
        _v5 = _v0.startAngle,
        _v6 = _v0.endAngle,
        _v7 = (0, _v5.mathSign)(_v6 - _v5) * Math.min(Math.abs(_v6 - _v5), 359.999),
        _v8 = _v5 + _v7,
        _v9 = (0, _v4.polarToCartesian)(_v1, _v2, _v4, _v5),
        _v10 = (0, _v4.polarToCartesian)(_v1, _v2, _v4, _v8),
        _v11 = "M ".concat(_v9.x, ",").concat(_v9.y, "\n    A ").concat(_v4, ",").concat(_v4, ",0,\n    ").concat(+(Math.abs(_v7) > 180), ",").concat(+(_v5 > _v8), ",\n    ").concat(_v10.x, ",").concat(_v10.y, "\n  ");
      if (_v3 > 0) {
        var _v12 = (0, _v4.polarToCartesian)(_v1, _v2, _v3, _v5),
          _v13 = (0, _v4.polarToCartesian)(_v1, _v2, _v3, _v8);
        _v11 += "L ".concat(_v13.x, ",").concat(_v13.y, "\n            A ").concat(_v3, ",").concat(_v3, ",0,\n            ").concat(+(Math.abs(_v7) > 180), ",").concat(+(_v5 <= _v8), ",\n            ").concat(_v12.x, ",").concat(_v12.y, " Z");
      } else _v11 += "L ".concat(_v1, ",").concat(_v2, " Z");
      return _v11;
    },
    _v12 = function (_v0) {
      var _v1 = _v0.cx,
        _v2 = _v0.cy,
        _v3 = _v0.innerRadius,
        _v4 = _v0.outerRadius,
        _v5 = _v0.cornerRadius,
        _v6 = _v0.forceCornerRadius,
        _v7 = _v0.cornerIsExternal,
        _v8 = _v0.startAngle,
        _v9 = _v0.endAngle,
        _v10 = (0, _v5.mathSign)(_v9 - _v8),
        _v11 = _v10({
          cx: _v1,
          cy: _v2,
          radius: _v4,
          angle: _v8,
          sign: _v10,
          cornerRadius: _v5,
          cornerIsExternal: _v7
        }),
        _v12 = _v11.circleTangency,
        _v13 = _v11.lineTangency,
        _v14 = _v11.theta,
        _v15 = _v10({
          cx: _v1,
          cy: _v2,
          radius: _v4,
          angle: _v9,
          sign: -_v10,
          cornerRadius: _v5,
          cornerIsExternal: _v7
        }),
        _v16 = _v15.circleTangency,
        _v17 = _v15.lineTangency,
        _v18 = _v15.theta,
        _v19 = _v7 ? Math.abs(_v8 - _v9) : Math.abs(_v8 - _v9) - _v14 - _v18;
      if (_v19 < 0) return _v6 ? "M ".concat(_v13.x, ",").concat(_v13.y, "\n        a").concat(_v5, ",").concat(_v5, ",0,0,1,").concat(2 * _v5, ",0\n        a").concat(_v5, ",").concat(_v5, ",0,0,1,").concat(-(2 * _v5), ",0\n      ") : _v11({
        cx: _v1,
        cy: _v2,
        innerRadius: _v3,
        outerRadius: _v4,
        startAngle: _v8,
        endAngle: _v9
      });
      var _v20 = "M ".concat(_v13.x, ",").concat(_v13.y, "\n    A").concat(_v5, ",").concat(_v5, ",0,0,").concat(+(_v10 < 0), ",").concat(_v12.x, ",").concat(_v12.y, "\n    A").concat(_v4, ",").concat(_v4, ",0,").concat(+(_v19 > 180), ",").concat(+(_v10 < 0), ",").concat(_v16.x, ",").concat(_v16.y, "\n    A").concat(_v5, ",").concat(_v5, ",0,0,").concat(+(_v10 < 0), ",").concat(_v17.x, ",").concat(_v17.y, "\n  ");
      if (_v3 > 0) {
        var _v21 = _v10({
            cx: _v1,
            cy: _v2,
            radius: _v3,
            angle: _v8,
            sign: _v10,
            isExternal: !0,
            cornerRadius: _v5,
            cornerIsExternal: _v7
          }),
          _v22 = _v21.circleTangency,
          _v23 = _v21.lineTangency,
          _v24 = _v21.theta,
          _v25 = _v10({
            cx: _v1,
            cy: _v2,
            radius: _v3,
            angle: _v9,
            sign: -_v10,
            isExternal: !0,
            cornerRadius: _v5,
            cornerIsExternal: _v7
          }),
          _v26 = _v25.circleTangency,
          _v27 = _v25.lineTangency,
          _v28 = _v25.theta,
          _v29 = _v7 ? Math.abs(_v8 - _v9) : Math.abs(_v8 - _v9) - _v24 - _v28;
        if (_v29 < 0 && 0 === _v5) return "".concat(_v20, "L").concat(_v1, ",").concat(_v2, "Z");
        _v20 += "L".concat(_v27.x, ",").concat(_v27.y, "\n      A").concat(_v5, ",").concat(_v5, ",0,0,").concat(+(_v10 < 0), ",").concat(_v26.x, ",").concat(_v26.y, "\n      A").concat(_v3, ",").concat(_v3, ",0,").concat(+(_v29 > 180), ",").concat(+(_v10 > 0), ",").concat(_v22.x, ",").concat(_v22.y, "\n      A").concat(_v5, ",").concat(_v5, ",0,0,").concat(+(_v10 < 0), ",").concat(_v23.x, ",").concat(_v23.y, "Z");
      } else _v20 += "L".concat(_v1, ",").concat(_v2, "Z");
      return _v20;
    },
    _v13 = {
      cx: 0,
      cy: 0,
      innerRadius: 0,
      outerRadius: 0,
      startAngle: 0,
      endAngle: 0,
      cornerRadius: 0,
      forceCornerRadius: !1,
      cornerIsExternal: !1
    };
  _v0.s(["Sector", 0, function (_v0) {
    var _v1,
      _v2 = _v9(_v9({}, _v13), _v0),
      _v3 = _v2.cx,
      _v4 = _v2.cy,
      _v5 = _v2.innerRadius,
      _v6 = _v2.outerRadius,
      _v7 = _v2.cornerRadius,
      _v8 = _v2.forceCornerRadius,
      _v9 = _v2.cornerIsExternal,
      _v10 = _v2.startAngle,
      _v11 = _v2.endAngle,
      _v12 = _v2.className;
    if (_v6 < _v5 || _v10 === _v11) return null;
    var _v13 = (0, _v2.default)("recharts-sector", _v12),
      _v14 = _v6 - _v5,
      _v15 = (0, _v5.getPercentValue)(_v7, _v14, 0, !0);
    return _v1 = _v15 > 0 && 360 > Math.abs(_v10 - _v11) ? _v12({
      cx: _v3,
      cy: _v4,
      innerRadius: _v5,
      outerRadius: _v6,
      cornerRadius: Math.min(_v15, _v14 / 2),
      forceCornerRadius: _v8,
      cornerIsExternal: _v9,
      startAngle: _v10,
      endAngle: _v11
    }) : _v11({
      cx: _v3,
      cy: _v4,
      innerRadius: _v5,
      outerRadius: _v6,
      startAngle: _v10,
      endAngle: _v11
    }), _v1.default.createElement("path", _v7({}, (0, _v3.filterProps)(_v2, !0), {
      className: _v13,
      d: _v1,
      role: "img"
    }));
  }]);
}