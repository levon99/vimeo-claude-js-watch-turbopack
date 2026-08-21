{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    return (_v5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v6() {
    return (_v6 = Object.assign.bind()).apply(this, arguments);
  }
  function _v7(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
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
            if ("object" != _v5(_v0) || !_v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" != _v5(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === _v1 ? String : Number)(_v0);
          }(_v0, "string");
          return "symbol" == _v5(_v1) ? _v1 : _v1 + "";
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
  var _v10 = function (_v0, _v1, _v2, _v3, _v4) {
      var _v5,
        _v6 = Math.min(Math.abs(_v2) / 2, Math.abs(_v3) / 2),
        _v7 = _v3 >= 0 ? 1 : -1,
        _v8 = _v2 >= 0 ? 1 : -1,
        _v9 = +(_v3 >= 0 && _v2 >= 0 || _v3 < 0 && _v2 < 0);
      if (_v6 > 0 && _v4 instanceof Array) {
        for (var _v10 = [0, 0, 0, 0], _v11 = 0; _v11 < 4; _v11++) _v10[_v11] = _v4[_v11] > _v6 ? _v6 : _v4[_v11];
        _v5 = "M".concat(_v0, ",").concat(_v1 + _v7 * _v10[0]), _v10[0] > 0 && (_v5 += "A ".concat(_v10[0], ",").concat(_v10[0], ",0,0,").concat(_v9, ",").concat(_v0 + _v8 * _v10[0], ",").concat(_v1)), _v5 += "L ".concat(_v0 + _v2 - _v8 * _v10[1], ",").concat(_v1), _v10[1] > 0 && (_v5 += "A ".concat(_v10[1], ",").concat(_v10[1], ",0,0,").concat(_v9, ",\n        ").concat(_v0 + _v2, ",").concat(_v1 + _v7 * _v10[1])), _v5 += "L ".concat(_v0 + _v2, ",").concat(_v1 + _v3 - _v7 * _v10[2]), _v10[2] > 0 && (_v5 += "A ".concat(_v10[2], ",").concat(_v10[2], ",0,0,").concat(_v9, ",\n        ").concat(_v0 + _v2 - _v8 * _v10[2], ",").concat(_v1 + _v3)), _v5 += "L ".concat(_v0 + _v8 * _v10[3], ",").concat(_v1 + _v3), _v10[3] > 0 && (_v5 += "A ".concat(_v10[3], ",").concat(_v10[3], ",0,0,").concat(_v9, ",\n        ").concat(_v0, ",").concat(_v1 + _v3 - _v7 * _v10[3])), _v5 += "Z";
      } else if (_v6 > 0 && _v4 === +_v4 && _v4 > 0) {
        var _v12 = Math.min(_v6, _v4);
        _v5 = "M ".concat(_v0, ",").concat(_v1 + _v7 * _v12, "\n            A ").concat(_v12, ",").concat(_v12, ",0,0,").concat(_v9, ",").concat(_v0 + _v8 * _v12, ",").concat(_v1, "\n            L ").concat(_v0 + _v2 - _v8 * _v12, ",").concat(_v1, "\n            A ").concat(_v12, ",").concat(_v12, ",0,0,").concat(_v9, ",").concat(_v0 + _v2, ",").concat(_v1 + _v7 * _v12, "\n            L ").concat(_v0 + _v2, ",").concat(_v1 + _v3 - _v7 * _v12, "\n            A ").concat(_v12, ",").concat(_v12, ",0,0,").concat(_v9, ",").concat(_v0 + _v2 - _v8 * _v12, ",").concat(_v1 + _v3, "\n            L ").concat(_v0 + _v8 * _v12, ",").concat(_v1 + _v3, "\n            A ").concat(_v12, ",").concat(_v12, ",0,0,").concat(_v9, ",").concat(_v0, ",").concat(_v1 + _v3 - _v7 * _v12, " Z");
      } else _v5 = "M ".concat(_v0, ",").concat(_v1, " h ").concat(_v2, " v ").concat(_v3, " h ").concat(-_v2, " Z");
      return _v5;
    },
    _v11 = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      radius: 0,
      isAnimationActive: !1,
      isUpdateAnimationActive: !1,
      animationBegin: 0,
      animationDuration: 0,
      animationEasing: "ease"
    };
  _v0.s(["Rectangle", 0, function (_v0) {
    var _v1,
      _v2 = _v9(_v9({}, _v11), _v0),
      _v3 = (0, _v1.useRef)(),
      _v4 = function (_v0) {
        if (Array.isArray(_v0)) return _v0;
      }(_v1 = (0, _v1.useState)(-1)) || function (_v0) {
        var _v1 = null == _v0 ? null : "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
        if (null != _v1) {
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6 = [],
            _v7 = !0,
            _v8 = !1;
          try {
            _v4 = (_v1 = _v1.call(_v0)).next, !1;
            for (; !(_v7 = (_v2 = _v4.call(_v1)).done) && (_v6.push(_v2.value), 2 !== _v6.length); _v7 = !0);
          } catch (_v0) {
            _v8 = !0, _v3 = _v0;
          } finally {
            try {
              if (!_v7 && null != _v1.return && (_v5 = _v1.return(), Object(_v5) !== _v5)) return;
            } finally {
              if (_v8) throw _v3;
            }
          }
          return _v6;
        }
      }(_v1) || function (_v0) {
        if (_v0) {
          if ("string" == typeof _v0) return _v7(_v0, 2);
          var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
          if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
          if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v7(_v0, 2);
        }
      }(_v1) || function () {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }(),
      _v5 = _v4[0],
      _v6 = _v4[1];
    (0, _v1.useEffect)(function () {
      if (_v3.current && _v3.current.getTotalLength) try {
        var _v0 = _v3.current.getTotalLength();
        _v0 && _v6(_v0);
      } catch (_v0) {}
    }, []);
    var _v7 = _v2.x,
      _v8 = _v2.y,
      _v9 = _v2.width,
      _v10 = _v2.height,
      _v11 = _v2.radius,
      _v12 = _v2.className,
      _v13 = _v2.animationEasing,
      _v14 = _v2.animationDuration,
      _v15 = _v2.animationBegin,
      _v16 = _v2.isAnimationActive,
      _v17 = _v2.isUpdateAnimationActive;
    if (_v7 !== +_v7 || _v8 !== +_v8 || _v9 !== +_v9 || _v10 !== +_v10 || 0 === _v9 || 0 === _v10) return null;
    var _v18 = (0, _v2.default)("recharts-rectangle", _v12);
    return _v17 ? _v1.default.createElement(_v3.default, {
      canBegin: _v5 > 0,
      from: {
        width: _v9,
        height: _v10,
        x: _v7,
        y: _v8
      },
      to: {
        width: _v9,
        height: _v10,
        x: _v7,
        y: _v8
      },
      duration: _v14,
      animationEasing: _v13,
      isActive: _v17
    }, function (_v0) {
      var _v1 = _v0.width,
        _v2 = _v0.height,
        _v3 = _v0.x,
        _v4 = _v0.y;
      return _v1.default.createElement(_v3.default, {
        canBegin: _v5 > 0,
        from: "0px ".concat(-1 === _v5 ? 1 : _v5, "px"),
        to: "".concat(_v5, "px 0px"),
        attributeName: "strokeDasharray",
        begin: _v15,
        duration: _v14,
        isActive: _v16,
        easing: _v13
      }, _v1.default.createElement("path", _v6({}, (0, _v4.filterProps)(_v2, !0), {
        className: _v18,
        d: _v10(_v3, _v4, _v1, _v2, _v11),
        ref: _v3
      })));
    }) : _v1.default.createElement("path", _v6({}, (0, _v4.filterProps)(_v2, !0), {
      className: _v18,
      d: _v10(_v7, _v8, _v9, _v10, _v11)
    }));
  }, "isInRectangle", 0, function (_v0, _v1) {
    if (!_v0 || !_v1) return !1;
    var _v2 = _v0.x,
      _v3 = _v0.y,
      _v4 = _v1.x,
      _v5 = _v1.y,
      _v6 = _v1.width,
      _v7 = _v1.height;
    if (Math.abs(_v6) > 0 && Math.abs(_v7) > 0) {
      var _v8 = Math.min(_v4, _v4 + _v6),
        _v9 = Math.max(_v4, _v4 + _v6),
        _v10 = Math.min(_v5, _v5 + _v7),
        _v11 = Math.max(_v5, _v5 + _v7);
      return _v2 >= _v8 && _v2 <= _v9 && _v3 >= _v10 && _v3 <= _v11;
    }
    return !1;
  }]);
}