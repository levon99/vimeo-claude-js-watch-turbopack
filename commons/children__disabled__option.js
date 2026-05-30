{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7(_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.disabled,
      _v3 = (0, _v4.b)(_v0, ["children", "disabled"]);
    return _v5.default.createElement("option", (0, _v4.c)({
      disabled: void 0 === _v2 ? null : _v2
    }, _v3), void 0 === _v1 ? null : _v1);
  }
  var _v8 = function (_v0) {
      return "string" == typeof _v0;
    },
    _v9 = function (_v0) {
      return "string" != typeof _v0;
    };
  function _v10(_v0) {
    var _v1 = _v0.children,
      _v2 = void 0 === _v1 ? null : _v1,
      _v3 = _v0.disabled,
      _v4 = _v0.href,
      _v5 = void 0 === _v4 ? null : _v4,
      _v6 = (0, _v4.b)(_v0, ["children", "disabled", "href"]),
      _v7 = (void 0 === _v3 ? null : _v3) ? {
        pointerEvents: "none",
        opacity: .4
      } : {};
    if (_v5) {
      var _v8 = _v2.filter(_v8),
        _v9 = _v2.filter(_v9);
      return _v5.default.createElement("a", {
        href: _v5
      }, _v5.default.createElement(_v6.Pop.Item, (0, _v4.c)({}, _v6), _v5.default.createElement("span", {
        style: _v7
      }, _v8), _v5.default.createElement("span", {
        style: {
          pointerEvents: "none"
        }
      }, _v9)));
    }
    return _v5.default.createElement(_v6.Pop.Item, (0, _v4.c)({}, _v6, {
      style: _v7
    }), _v2);
  }
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v11.default.select(_v1 || (_v1 = (0, _v4.a)(["\n  appearance: none;\n  ", ";\n  ", ";\n  padding-right: 2rem;\n  cursor: pointer;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  transition: all 120ms ease-in-out, opacity 0ms;\n"], ["\n  appearance: none;\n  ", ";\n  ", ";\n  padding-right: 2rem;\n  cursor: pointer;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  transition: all 120ms ease-in-out, opacity 0ms;\n"])), _v12.inputColors, _v12.inputShape),
    _v15 = _v11.default.div(_v2 || (_v2 = (0, _v4.a)(["\n  appearance: none;\n  ", ";\n  ", ";\n  padding-right: 2rem;\n  cursor: pointer;\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  background: transparent;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"], ["\n  appearance: none;\n  ", ";\n  ", ";\n  padding-right: 2rem;\n  cursor: pointer;\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  background: transparent;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"])), _v12.inputColors, _v12.inputShape),
    _v16 = (0, _v11.default)(_v13.ChevronDown)(_v3 || (_v3 = (0, _v4.a)(["\n  position: absolute;\n  top: ", "rem;\n  right: 0.3rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  pointer-events: none;\n\n  * {\n    fill: ", ";\n  }\n"], ["\n  position: absolute;\n  top: ", "rem;\n  right: 0.3rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  pointer-events: none;\n\n  * {\n    fill: ", ";\n  }\n"])), function (_v0) {
      return _v17[_v0.size];
    }, function (_v0) {
      return _v0.theme.content.color;
    }),
    _v17 = {
      xs: .1,
      sm: .2,
      md: .3,
      lg: .8,
      xl: 1.1
    };
  function _v18(_v0, _v1) {
    var _v2 = _v1.type,
      _v3 = _v1.payload,
      _v4 = void 0 === _v3 ? null : _v3;
    switch (_v2) {
      case "SET_WIDTH":
        return (0, _v4.c)((0, _v4.c)({}, _v0), {
          width: _v4
        });
      case "SET_SELECTED":
        return (0, _v4.c)((0, _v4.c)({}, _v0), {
          selected: _v4
        });
      case "SET_ACTIVE":
        return (0, _v4.c)((0, _v4.c)({}, _v0), {
          active: _v4
        });
      case "TOGGLE_ACTIVE":
        return (0, _v4.c)((0, _v4.c)({}, _v0), {
          active: !_v0.active
        });
    }
  }
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  function _v24(_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.className,
      _v3 = _v0.defaultValue,
      _v4 = _v0.disabled,
      _v5 = _v0.format,
      _v6 = _v0.forwardRef,
      _v7 = _v0.id,
      _v8 = _v0.label,
      _v9 = _v0.messages,
      _v10 = _v0.placeholder,
      _v11 = _v0.size,
      _v12 = void 0 === _v11 ? "md" : _v11,
      _v13 = _v0.status,
      _v14 = _v0.style,
      _v15 = _v0.maxHeight,
      _v16 = _v0.value,
      _v17 = (0, _v4.b)(_v0, ["children", "className", "defaultValue", "disabled", "format", "forwardRef", "id", "label", "messages", "placeholder", "size", "status", "style", "maxHeight", "value"]),
      _v18 = (0, _v4._)((0, _v5.useReducer)(_v18, {
        width: 0,
        selected: _v3 || 0,
        active: !1
      }), 2),
      _v19 = _v18[0],
      _v20 = _v18[1],
      _v21 = _v19.width,
      _v22 = _v19.selected,
      _v23 = _v19.active,
      _v24 = (0, _v4._)((0, _v21.useLayoutStyles)(_v14), 2),
      _v25 = _v24[0],
      _v26 = _v24[1],
      _v27 = (0, _v5.useRef)(null),
      _v28 = (0, _v5.useRef)(null),
      _v29 = (0, _v5.useRef)(null);
    (0, _v5.useImperativeHandle)(_v6, function () {
      return _v29.current;
    }), (0, _v22.useOutsideClick)([_v27, _v28], function () {
      return _v20({
        type: "SET_ACTIVE",
        payload: !1
      });
    }), (0, _v5.useLayoutEffect)(function () {
      _v20({
        type: "SET_WIDTH",
        payload: (0, _v23.geometry)(_v27.current).width
      });
    }, [_v12]), (0, _v5.useEffect)(function () {
      _v16 !== _v22 && (void 0 !== _v16 ? _v20({
        type: "SET_SELECTED",
        payload: _v16
      }) : _v22 && _v20({
        type: "SET_SELECTED",
        payload: _v22
      }));
    }, [_v16, _v22]);
    var _v30 = _v1.filter(function (_v0) {
        return "a" !== _v0.type;
      }).map(_v25),
      _v31 = _v5.default.createElement("div", null, _v1.map(function (_v0, _v1) {
        return "string" == typeof _v0.type ? _v0 : (0, _v5.cloneElement)(_v0, {
          onClick: function () {
            if (!_v0.props.disabled) {
              var _v0 = new Event("change", {
                bubbles: !0
              });
              _v29.current.value = _v0.props.value, _v29.current.dispatchEvent(_v0), _v20({
                type: "SET_SELECTED",
                payload: _v0.props.value
              }), _v20({
                type: "SET_ACTIVE",
                payload: !1
              });
            }
          },
          key: _v1,
          faux: !0
        });
      }));
    return _v5.default.createElement(_v19.Wrapper, {
      className: _v2,
      id: _v7,
      label: _v8,
      ref: _v27,
      messages: _v9,
      status: _v13,
      style: (0, _v4.c)({}, _v25)
    }, _v5.default.createElement(_v20.PopOver, {
      attach: "bottom",
      style: {
        width: _v21,
        maxWidth: "100%",
        maxHeight: void 0 === _v15 ? "100%" : _v15,
        overflowY: "scroll"
      },
      content: _v5.default.createElement("div", {
        ref: _v28
      }, _v31),
      active: !_v4 && _v23
    }, _v5.default.createElement("div", {
      style: {
        position: "relative",
        cursor: "pointer"
      },
      onClick: function () {
        return _v20({
          type: "TOGGLE_ACTIVE"
        });
      }
    }, !_v22 && _v5.default.createElement(_v15, {
      inputSize: _v12,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%"
      }
    }, void 0 === _v10 ? "Please select an option." : _v10), _v5.default.createElement(_v14, (0, _v4.c)({
      "aria-label": _v8,
      format: _v13 || (void 0 === _v5 ? "basic" : _v5),
      disabled: _v4,
      inputSize: _v12,
      readOnly: !0,
      ref: _v29,
      value: null == _v22 ? void 0 : _v22.toString(),
      style: (0, _v4.c)((0, _v4.c)({}, _v26), {
        pointerEvents: "none",
        opacity: +!!_v22
      })
    }, _v17), _v22, _v30), _v5.default.createElement(_v16, {
      size: _v12
    }))));
  }
  function _v25(_v0, _v1) {
    var _v2 = _v0.props,
      _v3 = _v2.value,
      _v4 = _v2.children;
    return _v5.default.createElement("option", {
      key: _v1,
      value: _v3
    }, Array.isArray(_v4) ? _v4.filter(function (_v0) {
      return "string" == typeof _v0;
    }) : _v4);
  }
  _v0.i(0);
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = (0, _v26.withIris)(function (_v0) {
      var _v1 = _v0.forwardRef,
        _v2 = _v0.faux,
        _v3 = (0, _v4.b)(_v0, ["forwardRef", "faux"]);
      return _v2 ? _v5.default.createElement(_v24, (0, _v4.c)({
        forwardRef: _v1
      }, _v3)) : _v5.default.createElement(_v29, (0, _v4.c)({
        forwardRef: _v1
      }, _v3));
    });
  function _v29(_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.className,
      _v3 = _v0.defaultValue,
      _v4 = _v0.disabled,
      _v5 = _v0.format,
      _v6 = _v0.forwardRef,
      _v7 = _v0.id,
      _v8 = _v0.label,
      _v9 = _v0.messages,
      _v10 = _v0.pill,
      _v11 = _v0.size,
      _v12 = void 0 === _v11 ? "md" : _v11,
      _v13 = _v0.status,
      _v14 = _v0.style,
      _v15 = (0, _v4.b)(_v0, ["children", "className", "defaultValue", "disabled", "format", "forwardRef", "id", "label", "messages", "pill", "size", "status", "style"]),
      _v16 = (0, _v4._)((0, _v21.useLayoutStyles)(_v14), 2),
      _v17 = _v16[0],
      _v18 = _v16[1];
    return _v5.default.createElement(_v19.Wrapper, {
      className: _v2,
      id: _v7,
      label: _v8,
      messages: _v9,
      status: _v13,
      style: (0, _v4.c)({}, _v17)
    }, _v5.default.createElement("div", {
      style: {
        position: "relative"
      }
    }, _v5.default.createElement(_v14, (0, _v4.c)({
      defaultValue: _v3,
      disabled: _v4,
      format: _v13 || (void 0 === _v5 ? "basic" : _v5),
      inputSize: _v12,
      pill: _v10,
      ref: _v6,
      style: (0, _v4.c)({}, _v18)
    }, _v15), _v1), _v5.default.createElement(_v27.Focus, {
      parent: _v14,
      radius: _v10 ? 50 : 6,
      distance: 1
    }), _v5.default.createElement(_v16, {
      size: _v12
    })));
  }
  _v28.Option = function (_v0) {
    var _v1 = _v0.faux,
      _v2 = (0, _v4.b)(_v0, ["faux"]);
    return void 0 !== _v1 && _v1 ? _v5.default.createElement(_v10, (0, _v4.c)({}, _v2)) : _v5.default.createElement(_v7, (0, _v4.c)({}, _v2));
  }, _v0.s(["Select", 0, _v28], 0);
}