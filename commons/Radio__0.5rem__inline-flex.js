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
    _v9 = (0, _v4.forwardRef)((_v0, _v1) => {
      var _v2;
      let _v3 = (0, _v2.useRadioGroupContext)(),
        {
          onChange: _v4,
          value: _v5
        } = _v0,
        _v6 = (0, _v6.useMultiStyleConfig)("Radio", {
          ..._v3,
          ..._v0
        }),
        {
          spacing: _v7 = "0.5rem",
          children: _v8,
          isDisabled: _v9 = null == _v3 ? void 0 : _v3.isDisabled,
          isFocusable: _v10 = null == _v3 ? void 0 : _v3.isFocusable,
          inputProps: _v11,
          ..._v12
        } = (0, _v5.omitThemingProps)(_v0),
        _v13 = _v0.isChecked;
      (null == _v3 ? void 0 : _v3.value) != null && null != _v5 && (_v13 = _v3.value === _v5);
      let _v14 = _v4;
      (null == _v3 ? void 0 : _v3.onChange) && null != _v5 && (_v14 = (0, _v7.callAll)(_v3.onChange, _v4));
      let _v15 = null != (_v2 = null == _v0 ? void 0 : _v0.name) ? _v2 : null == _v3 ? void 0 : _v3.name,
        {
          getInputProps: _v16,
          getCheckboxProps: _v17,
          getLabelProps: _v18,
          getRootProps: _v19,
          htmlProps: _v20
        } = (0, _v1.useRadio)({
          ..._v12,
          isChecked: _v13,
          isFocusable: _v10,
          isDisabled: _v9,
          onChange: _v14,
          name: _v15
        }),
        [_v21, _v22] = function (_v0, _v1) {
          let _v2 = {},
            _v3 = {};
          for (let [_v0, _v1] of Object.entries(_v0)) _v1.includes(_v0) ? _v2[_v0] = _v1 : _v3[_v0] = _v1;
          return [_v2, _v3];
        }(_v20, _v5.layoutPropNames),
        _v23 = _v17(_v22),
        _v24 = _v16(_v11, _v1),
        _v25 = _v18(),
        _v26 = Object.assign({}, _v21, _v19()),
        _v27 = {
          display: "inline-flex",
          alignItems: "center",
          verticalAlign: "top",
          cursor: "pointer",
          position: "relative",
          ..._v6.container
        },
        _v28 = {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          ..._v6.control
        },
        _v29 = {
          userSelect: "none",
          marginStart: _v7,
          ..._v6.label
        };
      return (0, _v8.jsxs)(_v3.chakra.label, {
        className: "chakra-radio",
        ..._v26,
        __css: _v27,
        children: [(0, _v8.jsx)("input", {
          className: "chakra-radio__input",
          ..._v24
        }), (0, _v8.jsx)(_v3.chakra.span, {
          className: "chakra-radio__control",
          ..._v23,
          __css: _v28
        }), _v8 && (0, _v8.jsx)(_v3.chakra.span, {
          className: "chakra-radio__label",
          ..._v25,
          __css: _v29,
          children: _v8
        })]
      });
    });
  _v9.displayName = "Radio", _v0.s(["Radio", 0, _v9]);
}