{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    [_v8, _v9] = (0, _v2.createContext)({
      name: "TagStylesContext",
      errorMessage: "useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "
    }),
    _v10 = (0, _v4.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v6.useMultiStyleConfig)("Tag", _v0),
        _v3 = (0, _v5.omitThemingProps)(_v0),
        _v4 = {
          display: "inline-flex",
          verticalAlign: "top",
          alignItems: "center",
          maxWidth: "100%",
          ..._v2.container
        };
      return (0, _v7.jsx)(_v8, {
        value: _v2,
        children: (0, _v7.jsx)(_v3.chakra.span, {
          ref: _v1,
          ..._v3,
          __css: _v4
        })
      });
    });
  _v10.displayName = "Tag";
  var _v11 = (0, _v4.forwardRef)((_v0, _v1) => {
    let _v2 = _v9();
    return (0, _v7.jsx)(_v3.chakra.span, {
      ref: _v1,
      noOfLines: 1,
      ..._v0,
      __css: _v2.label
    });
  });
  _v11.displayName = "TagLabel";
  var _v12 = (0, _v4.forwardRef)((_v0, _v1) => (0, _v7.jsx)(_v1.Icon, {
    ref: _v1,
    verticalAlign: "top",
    marginEnd: "0.5rem",
    ..._v0
  }));
  _v12.displayName = "TagLeftIcon";
  var _v13 = (0, _v4.forwardRef)((_v0, _v1) => (0, _v7.jsx)(_v1.Icon, {
    ref: _v1,
    verticalAlign: "top",
    marginStart: "0.5rem",
    ..._v0
  }));
  _v13.displayName = "TagRightIcon";
  var _v14 = _v0 => (0, _v7.jsx)(_v1.Icon, {
    verticalAlign: "inherit",
    viewBox: "0 0 512 512",
    ..._v0,
    children: (0, _v7.jsx)("path", {
      fill: "currentColor",
      d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
    })
  });
  _v14.displayName = "TagCloseIcon";
  var _v15 = (0, _v4.forwardRef)((_v0, _v1) => {
    let {
        isDisabled: _v2,
        children: _v3,
        ..._v4
      } = _v0,
      _v5 = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "0",
        ..._v9().closeButton
      };
    return (0, _v7.jsx)(_v3.chakra.button, {
      ref: _v1,
      "aria-label": "close",
      ..._v4,
      type: "button",
      disabled: _v2,
      __css: _v5,
      children: _v3 || (0, _v7.jsx)(_v14, {})
    });
  });
  _v15.displayName = "TagCloseButton", _v0.s(["Tag", 0, _v10, "TagCloseButton", 0, _v15, "TagLabel", 0, _v11, "TagLeftIcon", 0, _v12, "TagRightIcon", 0, _v13]);
}