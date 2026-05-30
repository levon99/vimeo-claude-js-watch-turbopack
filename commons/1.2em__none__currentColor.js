{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    return (0, _v4.jsx)(_v3.chakra.svg, {
      width: "1.2em",
      viewBox: "0 0 12 10",
      style: {
        fill: "none",
        strokeWidth: 2,
        stroke: "currentColor",
        strokeDasharray: 16
      },
      ..._v0,
      children: (0, _v4.jsx)("polyline", {
        points: "1.5 6 4.5 9 10.5 1"
      })
    });
  }
  function _v6(_v0) {
    return (0, _v4.jsx)(_v3.chakra.svg, {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: {
        stroke: "currentColor",
        strokeWidth: 4
      },
      ..._v0,
      children: (0, _v4.jsx)("line", {
        x1: "21",
        x2: "3",
        y1: "12",
        y2: "12"
      })
    });
  }
  function _v7(_v0) {
    let {
      isIndeterminate: _v1,
      isChecked: _v2,
      ..._v3
    } = _v0;
    return _v2 || _v1 ? (0, _v4.jsx)(_v3.chakra.div, {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: (0, _v4.jsx)(_v1 ? _v6 : _v5, {
        ..._v3
      })
    }) : null;
  }
  _v0.s(["CheckboxIcon", 0, _v7], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "top",
      userSelect: "none",
      flexShrink: 0
    },
    _v16 = {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      verticalAlign: "top",
      position: "relative"
    },
    _v17 = (0, _v11.keyframes)({
      from: {
        opacity: 0,
        strokeDashoffset: 16,
        transform: "scale(0.95)"
      },
      to: {
        opacity: 1,
        strokeDashoffset: 0,
        transform: "scale(1)"
      }
    }),
    _v18 = (0, _v11.keyframes)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    }),
    _v19 = (0, _v11.keyframes)({
      from: {
        transform: "scaleX(0.65)"
      },
      to: {
        transform: "scaleX(1)"
      }
    }),
    _v20 = (0, _v10.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v2.useCheckboxGroupContext)(),
        _v3 = {
          ..._v2,
          ..._v0
        },
        _v4 = (0, _v13.useMultiStyleConfig)("Checkbox", _v3),
        _v5 = (0, _v12.omitThemingProps)(_v0),
        {
          spacing: _v6 = "0.5rem",
          className: _v7,
          children: _v8,
          iconColor: _v9,
          iconSize: _v10,
          icon: _v11 = (0, _v4.jsx)(_v7, {}),
          isChecked: _v12,
          isDisabled: _v13 = null == _v2 ? void 0 : _v2.isDisabled,
          onChange: _v14,
          inputProps: _v15,
          ..._v16
        } = _v5,
        _v17 = _v12;
      (null == _v2 ? void 0 : _v2.value) && _v5.value && (_v17 = _v2.value.includes(_v5.value));
      let _v18 = _v14;
      (null == _v2 ? void 0 : _v2.onChange) && _v5.value && (_v18 = (0, _v9.callAll)(_v2.onChange, _v14));
      let {
          state: _v19,
          getInputProps: _v20,
          getCheckboxProps: _v21,
          getLabelProps: _v22,
          getRootProps: _v23
        } = (0, _v8.useCheckbox)({
          ..._v16,
          isDisabled: _v13,
          isChecked: _v17,
          onChange: _v18
        }),
        _v24 = (0, _v1.useInitialAnimationState)(_v19.isChecked),
        _v25 = (0, _v14.useMemo)(() => ({
          animation: _v24 ? _v19.isIndeterminate ? `${_v18} 20ms linear, ${_v19} 200ms linear` : `${_v17} 200ms linear` : void 0,
          fontSize: _v10,
          color: _v9,
          ..._v4.icon
        }), [_v9, _v10, _v24, _v19.isIndeterminate, _v4.icon]),
        _v26 = (0, _v14.cloneElement)(_v11, {
          __css: _v25,
          isIndeterminate: _v19.isIndeterminate,
          isChecked: _v19.isChecked
        });
      return (0, _v4.jsxs)(_v3.chakra.label, {
        __css: {
          ..._v16,
          ..._v4.container
        },
        className: (0, _v9.cx)("chakra-checkbox", _v7),
        ..._v23(),
        children: [(0, _v4.jsx)("input", {
          className: "chakra-checkbox__input",
          ..._v20(_v15, _v1)
        }), (0, _v4.jsx)(_v3.chakra.span, {
          __css: {
            ..._v15,
            ..._v4.control
          },
          className: "chakra-checkbox__control",
          ..._v21(),
          children: _v26
        }), _v8 && (0, _v4.jsx)(_v3.chakra.span, {
          className: "chakra-checkbox__label",
          ..._v22(),
          __css: {
            marginStart: _v6,
            ..._v4.label
          },
          children: _v8
        })]
      });
    });
  _v20.displayName = "Checkbox", _v0.s(["Checkbox", 0, _v20], 0);
}