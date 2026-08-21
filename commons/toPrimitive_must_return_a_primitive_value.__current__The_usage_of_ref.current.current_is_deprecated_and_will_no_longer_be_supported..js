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
  function _v10(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  var _v11 = (0, _v2.forwardRef)(function (_v0, _v1) {
    var _v2,
      _v3 = _v0.aspect,
      _v4 = _v0.initialDimension,
      _v5 = void 0 === _v4 ? {
        width: -1,
        height: -1
      } : _v4,
      _v6 = _v0.width,
      _v7 = void 0 === _v6 ? "100%" : _v6,
      _v8 = _v0.height,
      _v9 = void 0 === _v8 ? "100%" : _v8,
      _v10 = _v0.minWidth,
      _v11 = void 0 === _v10 ? 0 : _v10,
      _v12 = _v0.minHeight,
      _v13 = _v0.maxHeight,
      _v14 = _v0.children,
      _v15 = _v0.debounce,
      _v16 = void 0 === _v15 ? 0 : _v15,
      _v17 = _v0.id,
      _v18 = _v0.className,
      _v19 = _v0.onResize,
      _v20 = _v0.style,
      _v21 = (0, _v2.useRef)(null),
      _v22 = (0, _v2.useRef)();
    _v22.current = _v19, (0, _v2.useImperativeHandle)(_v1, function () {
      return Object.defineProperty(_v21.current, "current", {
        get: function () {
          return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), _v21.current;
        },
        configurable: !0
      });
    });
    var _v23 = function (_v0) {
        if (Array.isArray(_v0)) return _v0;
      }(_v2 = (0, _v2.useState)({
        containerWidth: _v5.width,
        containerHeight: _v5.height
      })) || function (_v0) {
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
      }(_v2) || function (_v0) {
        if (_v0) {
          if ("string" == typeof _v0) return _v10(_v0, 2);
          var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
          if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
          if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v10(_v0, 2);
        }
      }(_v2) || function () {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }(),
      _v24 = _v23[0],
      _v25 = _v23[1],
      _v26 = (0, _v2.useCallback)(function (_v0, _v1) {
        _v25(function (_v0) {
          var _v1 = Math.round(_v0),
            _v2 = Math.round(_v1);
          return _v0.containerWidth === _v1 && _v0.containerHeight === _v2 ? _v0 : {
            containerWidth: _v1,
            containerHeight: _v2
          };
        });
      }, []);
    (0, _v2.useEffect)(function () {
      var _v0 = function (_v0) {
        var _v1,
          _v2 = _v0[0].contentRect,
          _v3 = _v2.width,
          _v4 = _v2.height;
        _v26(_v3, _v4), null == (_v1 = _v22.current) || _v1.call(_v22, _v3, _v4);
      };
      _v16 > 0 && (_v0 = (0, _v3.default)(_v0, _v16, {
        trailing: !0,
        leading: !1
      }));
      var _v1 = new ResizeObserver(_v0),
        _v2 = _v21.current.getBoundingClientRect();
      return _v26(_v2.width, _v2.height), _v1.observe(_v21.current), function () {
        _v1.disconnect();
      };
    }, [_v26, _v16]);
    var _v27 = (0, _v2.useMemo)(function () {
      var _v0 = _v24.containerWidth,
        _v1 = _v24.containerHeight;
      if (_v0 < 0 || _v1 < 0) return null;
      (0, _v5.warn)((0, _v4.isPercent)(_v7) || (0, _v4.isPercent)(_v9), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", _v7, _v9), (0, _v5.warn)(!_v3 || _v3 > 0, "The aspect(%s) must be greater than zero.", _v3);
      var _v2 = (0, _v4.isPercent)(_v7) ? _v0 : _v7,
        _v3 = (0, _v4.isPercent)(_v9) ? _v1 : _v9;
      _v3 && _v3 > 0 && (_v2 ? _v3 = _v2 / _v3 : _v3 && (_v2 = _v3 * _v3), _v13 && _v3 > _v13 && (_v3 = _v13)), (0, _v5.warn)(_v2 > 0 || _v3 > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", _v2, _v3, _v7, _v9, _v11, _v12, _v3);
      var _v4 = !Array.isArray(_v14) && (0, _v6.getDisplayName)(_v14.type).endsWith("Chart");
      return _v2.default.Children.map(_v14, function (_v0) {
        return _v2.default.isValidElement(_v0) ? (0, _v2.cloneElement)(_v0, _v9({
          width: _v2,
          height: _v3
        }, _v4 ? {
          style: _v9({
            height: "100%",
            width: "100%",
            maxHeight: _v3,
            maxWidth: _v2
          }, _v0.props.style)
        } : {})) : _v0;
      });
    }, [_v3, _v14, _v9, _v13, _v12, _v11, _v24, _v7]);
    return _v2.default.createElement("div", {
      id: _v17 ? "".concat(_v17) : void 0,
      className: (0, _v1.default)("recharts-responsive-container", _v18),
      style: _v9(_v9({}, void 0 === _v20 ? {} : _v20), {}, {
        width: _v7,
        height: _v9,
        minWidth: _v11,
        minHeight: _v12,
        maxHeight: _v13
      }),
      ref: _v21
    }, _v27);
  });
  _v0.s(["ResponsiveContainer", 0, _v11]);
}