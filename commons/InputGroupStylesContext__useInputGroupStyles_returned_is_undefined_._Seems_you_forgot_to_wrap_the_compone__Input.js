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
    _v10 = _v0.i(0),
    [_v11, _v12] = (0, _v1.createContext)({
      name: "InputGroupStylesContext",
      errorMessage: "useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "
    }),
    _v13 = (0, _v4.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v6.useMultiStyleConfig)("Input", _v0),
        {
          children: _v3,
          className: _v4,
          ..._v5
        } = (0, _v5.omitThemingProps)(_v0),
        _v6 = (0, _v7.cx)("chakra-input__group", _v4),
        _v7 = {},
        _v8 = (0, _v2.getValidChildren)(_v3),
        _v9 = _v2.field;
      _v8.forEach(_v0 => {
        var _v1, _v2;
        _v2 && (_v9 && "InputLeftElement" === _v0.type.id && (_v7.paddingStart = null != (_v1 = _v9.height) ? _v1 : _v9.h), _v9 && "InputRightElement" === _v0.type.id && (_v7.paddingEnd = null != (_v2 = _v9.height) ? _v2 : _v9.h), "InputRightAddon" === _v0.type.id && (_v7.borderEndRadius = 0), "InputLeftAddon" === _v0.type.id && (_v7.borderStartRadius = 0));
      });
      let _v10 = _v8.map(_v0 => {
        var _v1, _v2;
        let _v3 = (0, _v8.compact)({
          size: (null == (_v1 = _v0.props) ? void 0 : _v1.size) || _v0.size,
          variant: (null == (_v2 = _v0.props) ? void 0 : _v2.variant) || _v0.variant
        });
        return "Input" !== _v0.type.id ? (0, _v9.cloneElement)(_v0, _v3) : (0, _v9.cloneElement)(_v0, Object.assign(_v3, _v7, _v0.props));
      });
      return (0, _v10.jsx)(_v3.chakra.div, {
        className: _v6,
        ref: _v1,
        __css: {
          width: "100%",
          display: "flex",
          position: "relative",
          isolation: "isolate",
          ..._v2.group
        },
        "data-group": !0,
        ..._v5,
        children: (0, _v10.jsx)(_v11, {
          value: _v2,
          children: _v10
        })
      });
    });
  _v13.displayName = "InputGroup", _v0.s(["InputGroup", 0, _v13, "useInputGroupStyles", 0, _v12], 0);
  var _v14 = (0, _v3.chakra)("div", {
      baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        zIndex: 2
      }
    }),
    _v15 = (0, _v4.forwardRef)(function (_v0, _v1) {
      var _v2, _v3;
      let {
          placement: _v4 = "left",
          ..._v5
        } = _v0,
        _v6 = _v12(),
        _v7 = _v6.field,
        _v8 = {
          ["left" === _v4 ? "insetStart" : "insetEnd"]: "0",
          width: null != (_v2 = null == _v7 ? void 0 : _v7.height) ? _v2 : null == _v7 ? void 0 : _v7.h,
          height: null != (_v3 = null == _v7 ? void 0 : _v7.height) ? _v3 : null == _v7 ? void 0 : _v7.h,
          fontSize: null == _v7 ? void 0 : _v7.fontSize,
          ..._v6.element
        };
      return (0, _v10.jsx)(_v14, {
        ref: _v1,
        __css: _v8,
        ..._v5
      });
    });
  _v15.id = "InputElement", _v15.displayName = "InputElement";
  var _v16 = (0, _v4.forwardRef)(function (_v0, _v1) {
    let {
        className: _v2,
        ..._v3
      } = _v0,
      _v4 = (0, _v7.cx)("chakra-input__left-element", _v2);
    return (0, _v10.jsx)(_v15, {
      ref: _v1,
      placement: "left",
      className: _v4,
      ..._v3
    });
  });
  _v16.id = "InputLeftElement", _v16.displayName = "InputLeftElement";
  var _v17 = (0, _v4.forwardRef)(function (_v0, _v1) {
    let {
        className: _v2,
        ..._v3
      } = _v0,
      _v4 = (0, _v7.cx)("chakra-input__right-element", _v2);
    return (0, _v10.jsx)(_v15, {
      ref: _v1,
      placement: "right",
      className: _v4,
      ..._v3
    });
  });
  _v17.id = "InputRightElement", _v17.displayName = "InputRightElement", _v0.s(["InputLeftElement", 0, _v16, "InputRightElement", 0, _v17], 0);
}