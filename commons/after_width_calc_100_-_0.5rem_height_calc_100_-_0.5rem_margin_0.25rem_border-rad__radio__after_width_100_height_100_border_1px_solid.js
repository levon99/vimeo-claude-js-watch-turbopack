{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v13.default.input(_v1 || (_v1 = (0, _v11.a)(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), _v15.inputColors, _v15.inputShape),
    _v18 = {
      radio: 50,
      checkbox: 4,
      toggle: 30
    },
    _v19 = _v13.default.div(_v2 || (_v2 = (0, _v11.a)(["\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n"])), _v15.inputColors, function (_v0) {
      var _v1 = _v0.type,
        _v2 = _v0.mirror;
      return (0, _v15.FauxMark)(_v1, _v2);
    }, function (_v0) {
      var _v1 = _v0.type,
        _v2 = _v0.size;
      switch (_v1) {
        case "radio":
          return (0, _v13.css)(_v7 || (_v7 = (0, _v11.a)(["\n        ", ";\n        &:after {\n          width: calc(100% - 0.5rem);\n          height: calc(100% - 0.5rem);\n          margin: 0.25rem;\n          border-radius: 50%;\n        }\n      "], ["\n        ", ";\n        &:after {\n          width: calc(100% - 0.5rem);\n          height: calc(100% - 0.5rem);\n          margin: 0.25rem;\n          border-radius: 50%;\n        }\n      "])), (0, _v15.RoundInput)(_v22[_v2]));
        case "checkbox":
          return (0, _v13.css)(_v8 || (_v8 = (0, _v11.a)(["\n        ", ";\n        &:after {\n          width: 100%;\n          height: 100%;\n          border: 1px solid ", ";\n          background-image: ", ";\n        }\n      "], ["\n        ", ";\n        &:after {\n          width: 100%;\n          height: 100%;\n          border: 1px solid ", ";\n          background-image: ", ";\n        }\n      "])), (0, _v15.SquareInput)(_v22[_v2]), (0, _v16.blue)(500), _v23);
        case "toggle":
          return (0, _v13.css)(_v9 || (_v9 = (0, _v11.a)(["\n        ", ";\n        &:after {\n          width: calc(50% - 0.25rem);\n          height: calc(100% - 0.25rem);\n          margin: 0.125rem;\n          border-radius: 50%;\n        }\n      "], ["\n        ", ";\n        &:after {\n          width: calc(50% - 0.25rem);\n          height: calc(100% - 0.25rem);\n          margin: 0.125rem;\n          border-radius: 50%;\n        }\n      "])), (0, _v15.ToggleInput)(_v22[_v2]));
      }
    }),
    _v20 = _v13.default.input.attrs(function (_v0) {
      var _v1 = _v0.type;
      return {
        type: "toggle" === _v1 ? "checkbox" : _v1,
        toggle: "toggle" === _v1
      };
    })(_v3 || (_v3 = (0, _v11.a)(["\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n"])), _v15.Hidden, function (_v0) {
      var _v1 = _v0.disabled;
      return (0, _v13.css)(_v4 || (_v4 = (0, _v11.a)(["\n    &:checked ~ ", " {\n      border: 1px solid ", ";\n\n      &:after {\n        opacity: ", ";\n        transform: scale(1.02);\n      }\n    }\n  "], ["\n    &:checked ~ ", " {\n      border: 1px solid ", ";\n\n      &:after {\n        opacity: ", ";\n        transform: scale(1.02);\n      }\n    }\n  "])), _v19, (0, _v14.rgba)((0, _v16.blue)(500), +!_v1), _v1 ? .5 : 1);
    }, function (_v0) {
      var _v1 = _v0.toggle,
        _v2 = _v0.theme,
        _v3 = "light" === _v2.name ? (0, _v16.slate)(300) : (0, _v16.grayscale)(300),
        _v4 = _v2.formats.primary;
      return _v1 && (0, _v13.css)(_v6 || (_v6 = (0, _v11.a)(["\n      ~ ", " {\n        background: ", ";\n        border: 1px solid ", ";\n      }\n      &:checked ~ ", " {\n        background: ", ";\n        border: 1px solid ", ";\n        ", " {\n          transform: scale(1) translateX(calc(100% + 4px));\n        }\n        &::after {\n          transform: scale(1) translateX(calc(100% + 4px));\n        }\n      }\n\n      :hover:checked:not(:disabled) ~ ", " {\n        background: ", ";\n        border-color: ", ";\n      }\n      :hover:not(:disabled) ~ ", " {\n        background: ", ";\n        border-color: transparent;\n      }\n\n      :disabled ~ ", " {\n        opacity: 50%;\n      }\n    "], ["\n      ~ ", " {\n        background: ", ";\n        border: 1px solid ", ";\n      }\n      &:checked ~ ", " {\n        background: ", ";\n        border: 1px solid ", ";\n        ", " {\n          transform: scale(1) translateX(calc(100% + 4px));\n        }\n        &::after {\n          transform: scale(1) translateX(calc(100% + 4px));\n        }\n      }\n\n      :hover:checked:not(:disabled) ~ ", " {\n        background: ", ";\n        border-color: ", ";\n      }\n      :hover:not(:disabled) ~ ", " {\n        background: ", ";\n        border-color: transparent;\n      }\n\n      :disabled ~ ", " {\n        opacity: 50%;\n      }\n    "])), _v19, _v3, _v3, _v19, _v4, _v4, _v21, _v19, (0, _v14.darken)(.1, _v4), (0, _v14.darken)(.1, _v4), _v19, (0, _v14.darken)(.1, _v3), _v19);
    }),
    _v21 = _v13.default.div(_v5 || (_v5 = (0, _v11.a)(["\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 120ms ease-in-out;\n  width: calc(50% - 0.25rem);\n  height: calc(100% - 0.25rem);\n  margin: 0.125rem;\n  svg {\n    width: 65%;\n  }\n"], ["\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 120ms ease-in-out;\n  width: calc(50% - 0.25rem);\n  height: calc(100% - 0.25rem);\n  margin: 0.125rem;\n  svg {\n    width: 65%;\n  }\n"]))),
    _v22 = {
      sm: 16,
      md: 20,
      lg: 24,
      xl: 28
    };
  function _v23(_v0) {
    return _v0.indeterminate ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23ffffff' d='M4 9h12a1 1 0 0 1 1 1 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1 1 1 0 0 1 1-1z'/%3E%3C/svg%3E\")" : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%23ffffff' d='M6.667 14.39L1.306 9.22l1.388-1.44 3.973 3.83 8.639-8.33 1.388 1.44z'/%3E%3C/svg%3E\")";
  }
  var _v24 = {
      margin: null,
      display: null
    },
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  function _v27(_v0) {
    var _v1 = _v0.children,
      _v2 = (0, _v11.b)(_v0, ["children"]);
    return _v12.default.createElement(_v28, (0, _v11.c)({}, _v2), _v1, _v12.default.createElement(_v26.Focus, {
      parent: _v28
    }));
  }
  var _v28 = (0, _v13.default)(_v25.Header).attrs({
      variant: "thin",
      size: "2",
      element: "button"
    })(_v10 || (_v10 = (0, _v11.a)(["\n  position: relative;\n  padding: 0.5rem 2rem;\n  width: 100%;\n  text-align: left;\n  margin: 0;\n  cursor: pointer;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizelegibility;\n  &:first-child {\n    padding: 0.75rem 2rem 0.5rem;\n  }\n  &:last-child {\n    padding: 0.5rem 2rem 0.75rem;\n  }\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  position: relative;\n  padding: 0.5rem 2rem;\n  width: 100%;\n  text-align: left;\n  margin: 0;\n  cursor: pointer;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizelegibility;\n  &:first-child {\n    padding: 0.75rem 2rem 0.5rem;\n  }\n  &:last-child {\n    padding: 0.5rem 2rem 0.75rem;\n  }\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    background: ", ";\n  }\n"])), (0, _v14.rgba)((0, _v16.blue)(500), .15)),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  function _v32(_v0) {
    var _v1 = _v0.disabled,
      _v2 = _v0.icon,
      _v3 = _v0.id,
      _v4 = _v0.indeterminate,
      _v5 = _v0.label,
      _v6 = _v0.mirror,
      _v7 = _v0.size,
      _v8 = void 0 === _v7 ? "md" : _v7,
      _v9 = _v0.status,
      _v10 = _v0.theme,
      _v11 = _v0.type;
    return _v12.default.createElement(_v12.default.Fragment, null, _v12.default.createElement(_v15.Label, {
      disabled: _v1,
      fauxMark: _v19,
      format: _v9,
      htmlFor: _v3,
      mirror: _v6,
      size: _v8,
      theme: _v10,
      type: _v11
    }, _v5), _v12.default.createElement(_v19, {
      disabled: _v1,
      indeterminate: _v4,
      mirror: _v6,
      size: _v8,
      theme: _v10,
      type: _v11
    }, _v12.default.createElement(_v26.Focus, {
      parent: _v20,
      radius: _v18[_v11],
      theme: _v10
    }), _v12.default.createElement(_v21, null, _v2)));
  }
  function _v33(_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.htmlFor,
      _v3 = _v0.checked,
      _v4 = _v0.disabled;
    "Button" !== _v1.type.displayName || _v1.props.element && "button" !== _v1.props.element || console.warn('@vimeo/iris: Using <Button /> with type "button" is not supported as a <Radio /> child, <Button /> will be rendered as span');
    var _v5 = {
      disabled: _v4,
      checked: _v3
    };
    return "Button" === _v1.type.displayName && (_v5.element = "span"), _v1 && _v12.default.createElement("label", {
      htmlFor: _v2,
      style: {
        cursor: _v4 ? "not-allowed" : "pointer"
      }
    }, (0, _v12.cloneElement)(_v1, _v5));
  }
  function _v34(_v0) {
    var _v1 = _v0.key,
      _v2 = _v0.target;
    ("Enter" === _v1 || _v1.includes("Arrow")) && (_v2.checked = !_v2.checked);
  }
  _v0.i(0), _v0.s(["Text", 0, function (_v0) {
    var _v1,
      _v2 = _v0.autoComplete,
      _v3 = void 0 === _v2 || _v2,
      _v4 = _v0.autosuggest,
      _v5 = _v0.children,
      _v6 = _v0.className,
      _v7 = _v0.disabled,
      _v8 = _v0.floating,
      _v9 = void 0 !== _v8 && _v8,
      _v10 = _v0.id,
      _v11 = _v0.label,
      _v12 = _v0.messages,
      _v13 = _v0.forwardRef,
      _v14 = _v0.pill,
      _v15 = void 0 !== _v14 && _v14,
      _v16 = _v0.size,
      _v17 = void 0 === _v16 ? "md" : _v16,
      _v18 = _v0.status,
      _v19 = _v0.style,
      _v20 = _v0.onFocus,
      _v21 = _v0.onBlur,
      _v22 = _v0.theme,
      _v23 = _v0.type,
      _v24 = _v0.value,
      _v25 = _v0.variant,
      _v26 = (0, _v11.b)(_v0, ["autoComplete", "autosuggest", "children", "className", "disabled", "floating", "id", "label", "messages", "forwardRef", "pill", "size", "status", "style", "onFocus", "onBlur", "theme", "type", "value", "variant"]),
      _v27 = (0, _v11._)((0, _v12.useState)(!1), 2),
      _v28 = _v27[0],
      _v29 = _v27[1],
      _v30 = (0, _v11._)((0, _v31.useLayoutStyles)(void 0 === _v19 ? _v24 : _v19), 2),
      _v31 = _v30[0],
      _v32 = _v30[1],
      _v33 = (0, _v12.useRef)(null);
    (0, _v12.useImperativeHandle)(_v13, function () {
      return _v33.current;
    });
    var _v34 = (0, _v12.useRef)(null),
      _v35 = function (_v0) {
        var _v1 = _v0.autosuggest,
          _v2 = _v0.onSelect;
        if (void 0 !== _v1) {
          if (null === _v1) return {
            has: !0,
            show: !1
          };
          var _v3 = null == _v1 ? void 0 : _v1.map(function (_v0, _v1) {
            var _v2;
            return _v12.default.createElement(_v27, {
              key: _v1,
              onKeyDown: (_v2 = _v0, function (_v0) {
                var _v1, _v2, _v3, _v4;
                switch (_v0.preventDefault(), _v0.key) {
                  case "Escape":
                  case "Tab":
                    return _v2();
                  case "ArrowDown":
                    return null == (_v2 = null == (_v1 = _v0.target) ? void 0 : _v1.nextSibling) ? void 0 : _v2.focus();
                  case "ArrowUp":
                    return null == (_v4 = null == (_v3 = _v0.target) ? void 0 : _v3.previousSibling) ? void 0 : _v4.focus();
                  case "Enter":
                    return _v2(_v2);
                }
              }),
              onClick: function () {
                return _v2(_v0);
              }
            }, _v0);
          });
          return _v3.has = !0, _v3.show = (null == _v3 ? void 0 : _v3.length) > 0, _v3;
        }
      }({
        autosuggest: _v4,
        onSelect: function (_v0) {
          _v0 && (_v33.current.value = _v0), _v33.current.focus(), _v29(!1);
        }
      }),
      _v36 = _v28 || _v33.current && (null == (_v1 = _v33.current.value) ? void 0 : _v1.length) > 0;
    !0 === _v3 && (_v3 = "on"), !1 === _v3 && (_v3 = "off");
    var _v37 = _v12.default.createElement("div", {
        style: {
          position: "relative"
        }
      }, _v5, _v12.default.createElement(_v17, (0, _v11.c)({
        "aria-invalid": "negative" === _v18,
        autoComplete: _v3,
        disabled: _v7,
        floating: _v9,
        format: _v18,
        id: _v10,
        inputSize: _v17,
        onBlur: function (_v0) {
          var _v1;
          (null == (_v1 = _v34.current) ? void 0 : _v1.contains(_v0.relatedTarget)) || (_v21 && _v21(_v0), _v29(!1));
        },
        onFocus: function (_v0) {
          _v29(!0), _v20 && _v20(_v0);
        },
        onKeyDown: function (_v0) {
          var _v1, _v2;
          _v4 && ("Enter" === _v0.key || "ArrowDown" === _v0.key) && (_v0.preventDefault(), _v29(!0), null == (_v2 = null == (_v1 = _v34.current) ? void 0 : _v1.firstElementChild) || _v2.focus());
        },
        pill: _v15,
        ref: _v33,
        style: _v32,
        theme: _v22,
        type: void 0 === _v23 ? "text" : _v23,
        value: _v24,
        variant: _v25
      }, _v26)), _v12.default.createElement(_v26.Focus, {
        parent: _v17,
        radius: _v15 ? 50 : 6,
        variant: _v25,
        distance: 1
      })),
      _v38 = _v12.default.createElement(_v30.PopOver, {
        active: _v28 && (null == _v35 ? void 0 : _v35.show),
        content: _v12.default.createElement("div", {
          ref: _v34
        }, (null == _v35 ? void 0 : _v35[0]) && _v35)
      }, _v37);
    return _v12.default.createElement(_v29.Wrapper, {
      className: _v6,
      disabled: _v7,
      floating: _v9,
      floatLabel: _v36,
      id: _v10,
      label: _v11,
      messages: _v12,
      size: _v17,
      status: _v18,
      style: _v31,
      theme: _v22
    }, (null == _v35 ? void 0 : _v35.has) ? _v38 : _v37);
  }], 0), _v0.s(["Mark", 0, function (_v0) {
    var _v1 = _v0.autoComplete,
      _v2 = void 0 === _v1 || _v1,
      _v3 = _v0.checked,
      _v4 = _v0.defaultChecked,
      _v5 = _v0.children,
      _v6 = _v0.className,
      _v7 = _v0.defaultValue,
      _v8 = _v0.disabled,
      _v9 = _v0.forwardRef,
      _v10 = _v0.id,
      _v11 = _v0.messages,
      _v12 = _v0.name,
      _v13 = _v0.onChange,
      _v14 = _v0.required,
      _v15 = _v0.status,
      _v16 = _v0.style,
      _v17 = _v0.theme,
      _v18 = _v0.type,
      _v19 = _v0.value,
      _v20 = (0, _v11.b)(_v0, ["autoComplete", "checked", "defaultChecked", "children", "className", "defaultValue", "disabled", "forwardRef", "id", "messages", "name", "onChange", "required", "status", "style", "theme", "type", "value"]);
    return !0 === _v2 && (_v2 = "on"), !1 === _v2 && (_v2 = "off"), _v12.default.createElement(_v29.Wrapper, {
      className: _v6,
      messages: _v11,
      onKeyUp: _v34,
      status: _v15,
      style: void 0 === _v16 ? _v24 : _v16,
      theme: _v17
    }, _v12.default.createElement("div", {
      style: {
        position: "relative"
      }
    }, _v12.default.createElement(_v20, {
      autoComplete: _v2,
      defaultValue: _v7,
      checked: _v3,
      defaultChecked: _v4,
      disabled: _v8,
      id: _v10,
      name: _v12,
      onChange: _v13,
      ref: _v9,
      required: _v14,
      type: _v18,
      value: _v19
    }), _v5 && _v12.default.createElement(_v33, (0, _v11.c)({
      checked: _v3,
      children: _v5,
      disabled: _v8,
      htmlFor: _v10
    }, _v20)), !_v5 && _v12.default.createElement(_v32, (0, _v11.c)({
      disabled: _v8,
      id: _v10,
      status: _v15,
      type: _v18
    }, _v20))));
  }], 0);
}