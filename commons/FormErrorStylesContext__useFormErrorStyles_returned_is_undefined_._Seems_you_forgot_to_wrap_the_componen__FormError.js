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
    _v9 = _v0.i(0),
    [_v10, _v11] = (0, _v3.createContext)({
      name: "FormErrorStylesContext",
      errorMessage: "useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "
    }),
    _v12 = (0, _v5.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v7.useMultiStyleConfig)("FormError", _v0),
        _v3 = (0, _v6.omitThemingProps)(_v0),
        _v4 = (0, _v1.useFormControlContext)();
      return (null == _v4 ? void 0 : _v4.isInvalid) ? (0, _v9.jsx)(_v10, {
        value: _v2,
        children: (0, _v9.jsx)(_v4.chakra.div, {
          ...(null == _v4 ? void 0 : _v4.getErrorMessageProps(_v3, _v1)),
          className: (0, _v8.cx)("chakra-form__error-message", _v0.className),
          __css: {
            display: "flex",
            alignItems: "center",
            ..._v2.text
          }
        })
      }) : null;
    });
  _v12.displayName = "FormErrorMessage";
  var _v13 = (0, _v5.forwardRef)((_v0, _v1) => {
    let _v2 = _v11(),
      _v3 = (0, _v1.useFormControlContext)();
    if (!(null == _v3 ? void 0 : _v3.isInvalid)) return null;
    let _v4 = (0, _v8.cx)("chakra-form__error-icon", _v0.className);
    return (0, _v9.jsx)(_v2.Icon, {
      ref: _v1,
      "aria-hidden": !0,
      ..._v0,
      __css: _v2.icon,
      className: _v4,
      children: (0, _v9.jsx)("path", {
        fill: "currentColor",
        d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
      })
    });
  });
  _v13.displayName = "FormErrorIcon", _v0.s(["FormErrorIcon", 0, _v13, "FormErrorMessage", 0, _v12]);
}