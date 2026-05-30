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
    _v9 = (0, _v4.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v6.useMultiStyleConfig)("Switch", _v0),
        {
          spacing: _v3 = "0.5rem",
          children: _v4,
          ..._v5
        } = (0, _v5.omitThemingProps)(_v0),
        {
          getIndicatorProps: _v6,
          getInputProps: _v7,
          getCheckboxProps: _v8,
          getRootProps: _v9,
          getLabelProps: _v10
        } = (0, _v1.useCheckbox)(_v5),
        _v11 = (0, _v7.useMemo)(() => ({
          display: "inline-block",
          position: "relative",
          verticalAlign: "middle",
          lineHeight: 0,
          ..._v2.container
        }), [_v2.container]),
        _v12 = (0, _v7.useMemo)(() => ({
          display: "inline-flex",
          flexShrink: 0,
          justifyContent: "flex-start",
          boxSizing: "content-box",
          cursor: "pointer",
          ..._v2.track
        }), [_v2.track]),
        _v13 = (0, _v7.useMemo)(() => ({
          userSelect: "none",
          marginStart: _v3,
          ..._v2.label
        }), [_v3, _v2.label]);
      return (0, _v8.jsxs)(_v3.chakra.label, {
        ..._v9(),
        className: (0, _v2.cx)("chakra-switch", _v0.className),
        __css: _v11,
        children: [(0, _v8.jsx)("input", {
          className: "chakra-switch__input",
          ..._v7({}, _v1)
        }), (0, _v8.jsx)(_v3.chakra.span, {
          ..._v8(),
          className: "chakra-switch__track",
          __css: _v12,
          children: (0, _v8.jsx)(_v3.chakra.span, {
            __css: _v2.thumb,
            className: "chakra-switch__thumb",
            ..._v6()
          })
        }), _v4 && (0, _v8.jsx)(_v3.chakra.span, {
          className: "chakra-switch__label",
          ..._v10(),
          __css: _v13,
          children: _v4
        })]
      });
    });
  _v9.displayName = "Switch", _v0.s(["Switch", 0, _v9]);
}