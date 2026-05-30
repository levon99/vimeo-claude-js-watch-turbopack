{
  "use strict";

  var _v1 = _v0.i(0),
    [_v2, _v3] = (0, _v0.i(0).createContext)({
      strict: !1,
      name: "ButtonGroupContext"
    });
  _v0.s(["ButtonGroupProvider", 0, _v2, "useButtonGroup", 0, _v3], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7(_v0) {
    let {
        children: _v1,
        className: _v2,
        ..._v3
      } = _v0,
      _v4 = (0, _v1.isValidElement)(_v1) ? (0, _v1.cloneElement)(_v1, {
        "aria-hidden": !0,
        focusable: !1
      }) : _v1,
      _v5 = (0, _v5.cx)("chakra-button__icon", _v2);
    return (0, _v6.jsx)(_v4.chakra.span, {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ..._v3,
      className: _v5,
      children: _v4
    });
  }
  _v7.displayName = "ButtonIcon";
  var _v8 = _v0.i(0);
  function _v9(_v0) {
    let {
        label: _v1,
        placement: _v2,
        spacing: _v3 = "0.5rem",
        children: _v4 = (0, _v6.jsx)(_v8.Spinner, {
          color: "currentColor",
          width: "1em",
          height: "1em"
        }),
        className: _v5,
        __css: _v6,
        ..._v7
      } = _v0,
      _v8 = (0, _v5.cx)("chakra-button__spinner", _v5),
      _v9 = "start" === _v2 ? "marginEnd" : "marginStart",
      _v10 = (0, _v1.useMemo)(() => ({
        display: "flex",
        alignItems: "center",
        position: _v1 ? "relative" : "absolute",
        [_v9]: _v1 ? _v3 : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ..._v6
      }), [_v6, _v1, _v9, _v3]);
    return (0, _v6.jsx)(_v4.chakra.div, {
      className: _v8,
      ..._v7,
      __css: _v10,
      children: _v4
    });
  }
  _v9.displayName = "ButtonSpinner";
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = (0, _v11.forwardRef)((_v0, _v1) => {
      let _v2 = _v3(),
        _v3 = (0, _v13.useStyleConfig)("Button", {
          ..._v2,
          ..._v0
        }),
        {
          isDisabled: _v4 = null == _v2 ? void 0 : _v2.isDisabled,
          isLoading: _v5,
          isActive: _v6,
          children: _v7,
          leftIcon: _v8,
          rightIcon: _v9,
          loadingText: _v10,
          iconSpacing: _v11 = "0.5rem",
          type: _v12,
          spinner: _v13,
          spinnerPlacement: _v14 = "start",
          className: _v15,
          as: _v16,
          ..._v17
        } = (0, _v12.omitThemingProps)(_v0),
        _v18 = (0, _v1.useMemo)(() => {
          let _v0 = {
            ...(null == _v3 ? void 0 : _v3._focus),
            zIndex: 1
          };
          return {
            display: "inline-flex",
            appearance: "none",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
            position: "relative",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            outline: "none",
            ..._v3,
            ...(!!_v2 && {
              _focus: _v0
            })
          };
        }, [_v3, _v2]),
        {
          ref: _v19,
          type: _v20
        } = function (_v0) {
          let [_v1, _v2] = (0, _v1.useState)(!_v0);
          return {
            ref: (0, _v1.useCallback)(_v0 => {
              _v0 && _v2("BUTTON" === _v0.tagName);
            }, []),
            type: _v1 ? "button" : void 0
          };
        }(_v16),
        _v21 = {
          rightIcon: _v9,
          leftIcon: _v8,
          iconSpacing: _v11,
          children: _v7
        };
      return (0, _v6.jsxs)(_v4.chakra.button, {
        ref: (0, _v10.useMergeRefs)(_v1, _v19),
        as: _v16,
        type: null != _v12 ? _v12 : _v20,
        "data-active": (0, _v5.dataAttr)(_v6),
        "data-loading": (0, _v5.dataAttr)(_v5),
        __css: _v18,
        className: (0, _v5.cx)("chakra-button", _v15),
        ..._v17,
        disabled: _v4 || _v5,
        children: [_v5 && "start" === _v14 && (0, _v6.jsx)(_v9, {
          className: "chakra-button__spinner--start",
          label: _v10,
          placement: "start",
          spacing: _v11,
          children: _v13
        }), _v5 ? _v10 || (0, _v6.jsx)(_v4.chakra.span, {
          opacity: 0,
          children: (0, _v6.jsx)(_v15, {
            ..._v21
          })
        }) : (0, _v6.jsx)(_v15, {
          ..._v21
        }), _v5 && "end" === _v14 && (0, _v6.jsx)(_v9, {
          className: "chakra-button__spinner--end",
          label: _v10,
          placement: "end",
          spacing: _v11,
          children: _v13
        })]
      });
    });
  function _v15(_v0) {
    let {
      leftIcon: _v1,
      rightIcon: _v2,
      children: _v3,
      iconSpacing: _v4
    } = _v0;
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [_v1 && (0, _v6.jsx)(_v7, {
        marginEnd: _v4,
        children: _v1
      }), _v3, _v2 && (0, _v6.jsx)(_v7, {
        marginStart: _v4,
        children: _v2
      })]
    });
  }
  _v14.displayName = "Button", _v0.s(["Button", 0, _v14], 0);
}