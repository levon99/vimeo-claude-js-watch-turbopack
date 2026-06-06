{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v6.keyframes)(_v1 || (_v1 = (0, _v5.a)(["\n  0% { opacity: 0 }\n  100% { opacity: 1 }\n"], ["\n  0% { opacity: 0 }\n  100% { opacity: 1 }\n"]))),
    _v8 = _v6.default.div(_v2 || (_v2 = (0, _v5.a)(["\n  cursor: pointer;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(50, 50, 50, 0.667);\n  z-index: 1999;\n  transition: 200ms;\n  animation: ", " 150ms ease-in-out;\n"], ["\n  cursor: pointer;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(50, 50, 50, 0.667);\n  z-index: 1999;\n  transition: 200ms;\n  animation: ", " 150ms ease-in-out;\n"])), _v7);
  _v0.s(["Screen", 0, _v8], 0);
  var _v9 = _v0.i(0),
    _v10 = "u" < typeof window ? _v9.useEffect : _v9.useLayoutEffect;
  function _v11(_v0, _v1) {
    if (_v0.current) for (var _v2 in _v1) _v0.current.style[_v2] = _v1[_v2];
  }
  var _v12 = {
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d"
    },
    _v13 = {
      backfaceVisibility: "unset",
      willChange: "unset",
      transformStyle: "unset"
    };
  function _v14(_v0, _v1) {
    return void 0 === _v0 && (_v0 = null), void 0 === _v1 && (_v1 = null), function (_v0) {
      _v0 && _v0(_v0), _v1 && _v1(_v0);
    };
  }
  var _v15 = {
      active: !1,
      exiting: !1,
      duration: .3
    },
    _v16 = function (_v0, _v1) {
      return (0, _v5.c)((0, _v5.c)({}, _v0), {
        transition: Object.keys(_v0).map(function (_v0) {
          return _v0 + " " + _v1 + "s";
        }).join(", ")
      });
    },
    _v17 = {
      enter: {
        opacity: 1
      },
      exit: {
        opacity: 0
      }
    };
  _v0.s(["useMountAnimations", 0, function (_v0, _v1) {
    var _v2 = _v0.onOpen,
      _v3 = _v0.onClose,
      _v4 = _v0.forceActive,
      _v5 = _v0.animation,
      _v6 = void 0 === _v5 ? _v17 : _v5,
      _v7 = _v1.childRef,
      _v8 = _v1.screenRef,
      _v9 = (0, _v5._)((0, _v9.useState)(_v15), 2),
      _v10 = _v9[0],
      _v11 = _v9[1],
      _v12 = _v10.active,
      _v13 = _v10.exiting,
      _v14 = _v10.duration,
      _v15 = (0, _v9.useRef)(_v4),
      _v16 = _v7.current,
      _v17 = !0 === _v4 || !1 === _v4,
      _v18 = !_v4 && _v15.current;
    _v10(function () {
      if (_v16) {
        var _v0,
          _v1,
          _v2 = parseFloat((_v0 = ["animation-duration"], _v1 = getComputedStyle(_v16), Object.assign.apply(Object, (0, _v5.e)([{}], (0, _v5._)(_v0.map(function (_v0) {
            var _v1;
            return (_v1 = {})[_v0] = _v1.getPropertyValue(_v0), _v1;
          })), !1)))["animation-duration"]);
        _v2 && _v14 !== _v2 && _v11(function (_v0) {
          return (0, _v5.c)((0, _v5.c)({}, _v0), {
            duration: _v2
          });
        });
      }
    }, [_v14, _v16]);
    var _v19 = (0, _v9.useMemo)(function () {
      return function (_v0, _v1) {
        var _v2,
          _v3,
          _v4,
          _v5 = _v1.enter,
          _v6 = _v1.exit;
        _v2 = _v16(_v5, _v14), _v4 = Object.keys(_v3 = _v16(_v6, _v14)).join(" "), requestAnimationFrame(function () {
          _v11(_v0, (0, _v5.c)((0, _v5.c)((0, _v5.c)({}, _v2), _v12), {
            willChange: _v4
          })), requestAnimationFrame(function () {
            _v11(_v0, (0, _v5.c)((0, _v5.c)({}, _v3), _v13));
          });
        });
      };
    }, [_v14]);
    _v10(function () {
      !_v17 && _v16 && _v13 && (_v19(_v7, _v6), screen && _v19(_v8, _v17)), _v17 && (_v18 && (_v19(_v7, _v6), screen && _v19(_v8, _v17), _v11(function (_v0) {
        return (0, _v5.c)((0, _v5.c)({}, _v0), {
          exiting: !0
        });
      })), _v15.current = _v4);
    }, [_v19, _v6, _v7, _v17, _v16, _v13, _v4, _v18, _v8]);
    var _v20 = _v14(function () {
        _v12 || _v11(function (_v0) {
          return (0, _v5.c)((0, _v5.c)({}, _v0), {
            exiting: !1,
            active: !0
          });
        });
      }, _v2),
      _v21 = _v14(function () {
        _v12 && _v11(function (_v0) {
          return (0, _v5.c)((0, _v5.c)({}, _v0), {
            active: !0,
            exiting: !0
          });
        });
      }, _v3);
    function _v22() {
      _v13 && _v11(function (_v0) {
        return (0, _v5.c)((0, _v5.c)({}, _v0), {
          exiting: !1,
          active: !1
        });
      });
    }
    var _v23 = {
      onAnimationStart: function () {
        return _v11(function (_v0) {
          return (0, _v5.c)((0, _v5.c)({}, _v0), {
            active: !0
          });
        });
      },
      onTransitionEnd: function () {
        return _v22();
      },
      onAnimationEnd: function () {
        return _v22();
      }
    };
    if (_v17) if (_v13 || _v18) return {
      open: _v20,
      close: _v21,
      active: !0,
      animationProps: _v23
    };else return {
      open: _v20,
      close: _v21,
      active: _v4,
      animationProps: _v23
    };
    return {
      open: _v20,
      close: _v21,
      active: _v12,
      animationProps: _v23
    };
  }], 0);
  var _v18 = function (_v0) {
    return _v0.map(function (_v0) {
      return Math.min(100, Math.max(0, _v0));
    });
  };
  _v0.s(["coordinates", 0, function (_v0, _v1) {
    if ("string" == typeof _v0 && !_v1) switch (_v0) {
      case "top":
        return [[0, 50], [100, 50]];
      case "topRight":
        return [[0, 100], [100, 0]];
      case "right":
        return [[50, 100], [50, 0]];
      case "bottomRight":
        return [[100, 100], [0, 0]];
      case "bottom":
        return [[100, 50], [0, 50]];
      case "bottomLeft":
        return [[100, 0], [0, 100]];
      case "left":
        return [[50, 0], [50, 100]];
      case "topLeft":
        return [[0, 0], [100, 100]];
    }
    if ("string" == typeof _v0 && _v1) switch (_v0) {
      case "top":
        return [[0, 50], [0, 50]];
      case "topRight":
        return [[0, 100], [100, 100]];
      case "right":
        return [[50, 100], [100, 100]];
      case "bottomRight":
        return [[100, 100], [100, 100]];
      case "bottom":
        return [[100, 50], [100, 50]];
      case "bottomLeft":
        return [[100, 0], [100, 0]];
      case "left":
        return [[50, 0], [100, 0]];
      case "topLeft":
        return [[0, 0], [0, 0]];
    }
    return _v0 && _v0.flatMap(function (_v0) {
      return _v0;
    }).some(function (_v0) {
      return _v0 < 0 || _v0 > 100;
    }) ? (console.error("Invalid coordinates: ".concat(_v0, ". Values must be 0 - 100.")), _v0.map(_v18)) : _v0;
  }], 0);
  var _v19 = _v0.i(0);
  function _v20(_v0, _v1) {
    var _v2 = void 0 === _v1 ? {} : _v1,
      _v3 = _v2.scrollX,
      _v4 = _v2.scrollY;
    if (_v0 && _v0.current) {
      var _v5 = _v0.current,
        _v6 = _v5.offsetHeight,
        _v7 = _v5.offsetWidth,
        _v8 = _v0.current.getBoundingClientRect(),
        _v9 = _v8.x,
        _v10 = _v8.y,
        _v11 = _v9 + (void 0 === _v3 ? 0 : _v3),
        _v12 = _v10 + (void 0 === _v4 ? 0 : _v4);
      return {
        bottom: _v12 + _v6,
        height: _v6,
        left: _v11,
        right: _v11 + _v7,
        top: _v12,
        width: _v7
      };
    }
    return null;
  }
  var _v21 = _v6.default.div(_v4 || (_v4 = (0, _v5.a)(["\n  position: fixed;\n  margin: ", ";\n  overflow: visible;\n  max-width: calc(100vw - 1.5rem) !important;\n\n  ", "\n"], ["\n  position: fixed;\n  margin: ", ";\n  overflow: visible;\n  max-width: calc(100vw - 1.5rem) !important;\n\n  ", "\n"])), function (_v0) {
    return (0, _v19.rem)(_v0.margin);
  }, function (_v0) {
    return !_v0.anchorToWindow && (0, _v6.css)(_v3 || (_v3 = (0, _v5.a)(["\n      position: absolute;\n\n      > div {\n        max-width: 100%;\n\n        > div {\n          max-width: 100%;\n\n          > * {\n            max-width: 100%;\n          }\n        }\n      }\n    "], ["\n      position: absolute;\n\n      > div {\n        max-width: 100%;\n\n        > div {\n          max-width: 100%;\n\n          > * {\n            max-width: 100%;\n          }\n        }\n      }\n    "])));
  });
  _v0.s(["Anchor", 0, function (_v0) {
    var _v1 = _v0.anchor,
      _v2 = _v0.anchorToWindow,
      _v3 = _v0.attach,
      _v4 = _v0.childRef,
      _v5 = _v0.children,
      _v6 = _v0.margin,
      _v7 = _v0.style,
      _v8 = (0, _v5.b)(_v0, ["anchor", "anchorToWindow", "attach", "childRef", "children", "margin", "style"]),
      _v9 = (0, _v5._)((0, _v9.useState)({}), 2),
      _v10 = _v9[0],
      _v11 = _v9[1],
      _v12 = (0, _v9.useCallback)(function () {
        if (null == _v4 ? void 0 : _v4.current) {
          var _v0 = _v2 && {
              bottom: 0,
              height: window.innerHeight,
              left: 0,
              right: 0,
              top: 0,
              width: window.innerWidth
            },
            _v1 = _v20(_v4),
            _v2 = _v0 || _v20(_v1, window),
            _v3 = function (_v0) {
              var _v1 = (0, _v5._)(_v0.attach, 2),
                _v2 = _v1[0],
                _v3 = _v1[1],
                _v4 = _v0.margin,
                _v5 = _v0.rect,
                _v6 = _v0.childRect;
              if (!_v5 || !_v6) return {
                top: null,
                left: null
              };
              var _v7 = _v5.top + _v5.height * (_v2[0] / 100) - (_v6.height + 2 * _v4) * (_v3[0] / 100),
                _v8 = _v5.left + _v5.width * (_v2[1] / 100) - (_v6.width + 2 * _v4) * (_v3[1] / 100);
              return {
                top: (0, _v19.rem)(_v7 <= 0 ? _v5.bottom : _v7),
                left: (0, _v19.rem)(_v8 <= 0 ? _v5.right : _v8)
              };
            }({
              attach: _v3,
              margin: _v6,
              rect: _v2,
              childRect: _v1
            }),
            _v4 = _v3.top,
            _v5 = _v3.left;
          _v11(function (_v0) {
            return (0, _v5.c)((0, _v5.c)({}, _v0), {
              top: _v4,
              left: _v5,
              rect: _v2,
              childRect: _v1
            });
          });
        }
      }, [_v1, _v2, _v3, _v4, _v6]);
    (0, _v9.useLayoutEffect)(function () {
      return _v12();
    }, []), (0, _v9.useLayoutEffect)(function () {
      var _v0 = null == _v4 ? void 0 : _v4.current;
      return window.addEventListener("resize", _v12), window.addEventListener("scroll", _v12), null == _v0 || _v0.addEventListener("transitionend", _v12), function () {
        window.removeEventListener("resize", _v12), window.removeEventListener("scroll", _v12), null == _v0 || _v0.removeEventListener("transitionend", _v12);
      };
    }, [_v4, _v12]), (0, _v9.useLayoutEffect)(function () {
      _v13 || _v14 || _v12();
    });
    var _v13 = _v10.top,
      _v14 = _v10.left,
      _v15 = function (_v0) {
        var _v1;
        if (null == (_v1 = null == _v0 ? void 0 : _v0.ref) ? void 0 : _v1.current) {
          var _v2 = parseInt(getComputedStyle(_v0.ref.current).zIndex);
          if (_v2 > 0) return _v2;
        }
        return 0;
      }(_v5);
    return _v9.default.createElement(_v21, (0, _v5.c)({
      anchorToWindow: _v2,
      attach: _v3,
      childRect: _v10.childRect,
      children: _v5,
      margin: _v6,
      rect: _v10.rect,
      style: (0, _v5.c)((0, _v5.c)({}, _v7), {
        top: _v13,
        left: _v14,
        zIndex: _v15
      })
    }, _v8));
  }], 0);
}