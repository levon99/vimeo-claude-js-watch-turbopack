{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = (0, _v3.forwardRef)(function (_v0, _v1) {
      var _v2;
      let _v3 = (0, _v5.useStyleConfig)("FormLabel", _v0),
        _v4 = (0, _v4.omitThemingProps)(_v0),
        {
          className: _v5,
          children: _v6,
          requiredIndicator: _v7 = (0, _v7.jsx)(_v9, {}),
          optionalIndicator: _v8 = null,
          ..._v9
        } = _v4,
        _v10 = (0, _v1.useFormControlContext)(),
        _v11 = null != (_v2 = null == _v10 ? void 0 : _v10.getLabelProps(_v9, _v1)) ? _v2 : {
          ref: _v1,
          ..._v9
        };
      return (0, _v7.jsxs)(_v2.chakra.label, {
        ..._v11,
        className: (0, _v6.cx)("chakra-form__label", _v4.className),
        __css: {
          display: "block",
          textAlign: "start",
          ..._v3
        },
        children: [_v6, (null == _v10 ? void 0 : _v10.isRequired) ? _v7 : _v8]
      });
    });
  _v8.displayName = "FormLabel";
  var _v9 = (0, _v3.forwardRef)(function (_v0, _v1) {
    let _v2 = (0, _v1.useFormControlContext)(),
      _v3 = (0, _v1.useFormControlStyles)();
    if (!(null == _v2 ? void 0 : _v2.isRequired)) return null;
    let _v4 = (0, _v6.cx)("chakra-form__required-indicator", _v0.className);
    return (0, _v7.jsx)(_v2.chakra.span, {
      ...(null == _v2 ? void 0 : _v2.getRequiredIndicatorProps(_v0, _v1)),
      __css: _v3.requiredIndicator,
      className: _v4
    });
  });
  _v9.displayName = "RequiredIndicator", _v0.s(["FormLabel", 0, _v8]);
}