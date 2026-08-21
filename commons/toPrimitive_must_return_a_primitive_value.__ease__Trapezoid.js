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
      var _v5 = _v2 - _v3;
      return "M ".concat(_v0, ",").concat(_v1) + "L ".concat(_v0 + _v2, ",").concat(_v1) + "L ".concat(_v0 + _v2 - _v5 / 2, ",").concat(_v1 + _v4) + "L ".concat(_v0 + _v2 - _v5 / 2 - _v3, ",").concat(_v1 + _v4) + "L ".concat(_v0, ",").concat(_v1, " Z");
    },
    _v11 = {
      x: 0,
      y: 0,
      upperWidth: 0,
      lowerWidth: 0,
      height: 0,
      isUpdateAnimationActive: !1,
      animationBegin: 0,
      animationDuration: 0,
      animationEasing: "ease"
    };
  _v0.s(["Trapezoid", 0, function (_v0) {
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
      _v9 = _v2.upperWidth,
      _v10 = _v2.lowerWidth,
      _v11 = _v2.height,
      _v12 = _v2.className,
      _v13 = _v2.animationEasing,
      _v14 = _v2.animationDuration,
      _v15 = _v2.animationBegin,
      _v16 = _v2.isUpdateAnimationActive;
    if (_v7 !== +_v7 || _v8 !== +_v8 || _v9 !== +_v9 || _v10 !== +_v10 || _v11 !== +_v11 || 0 === _v9 && 0 === _v10 || 0 === _v11) return null;
    var _v17 = (0, _v2.default)("recharts-trapezoid", _v12);
    return _v16 ? _v1.default.createElement(_v3.default, {
      canBegin: _v5 > 0,
      from: {
        upperWidth: 0,
        lowerWidth: 0,
        height: _v11,
        x: _v7,
        y: _v8
      },
      to: {
        upperWidth: _v9,
        lowerWidth: _v10,
        height: _v11,
        x: _v7,
        y: _v8
      },
      duration: _v14,
      animationEasing: _v13,
      isActive: _v16
    }, function (_v0) {
      var _v1 = _v0.upperWidth,
        _v2 = _v0.lowerWidth,
        _v3 = _v0.height,
        _v4 = _v0.x,
        _v5 = _v0.y;
      return _v1.default.createElement(_v3.default, {
        canBegin: _v5 > 0,
        from: "0px ".concat(-1 === _v5 ? 1 : _v5, "px"),
        to: "".concat(_v5, "px 0px"),
        attributeName: "strokeDasharray",
        begin: _v15,
        duration: _v14,
        easing: _v13
      }, _v1.default.createElement("path", _v6({}, (0, _v4.filterProps)(_v2, !0), {
        className: _v17,
        d: _v10(_v4, _v5, _v1, _v2, _v3),
        ref: _v3
      })));
    }) : _v1.default.createElement("g", null, _v1.default.createElement("path", _v6({}, (0, _v4.filterProps)(_v2, !0), {
      className: _v17,
      d: _v10(_v7, _v8, _v9, _v10, _v11)
    })));
  }]);
}