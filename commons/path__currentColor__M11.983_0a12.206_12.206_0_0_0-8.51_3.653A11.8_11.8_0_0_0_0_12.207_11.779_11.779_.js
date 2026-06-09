{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0) {
    return (0, _v1.jsx)(_v3.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      children: (0, _v1.jsx)("path", {
        fill: "currentColor",
        d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
      })
    });
  }
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    [_v7, _v8] = (0, _v5.createContext)({
      name: "AlertContext",
      hookName: "useAlertContext",
      providerName: "<Alert />"
    }),
    [_v9, _v10] = (0, _v5.createContext)({
      name: "AlertStylesContext",
      hookName: "useAlertStyles",
      providerName: "<Alert />"
    }),
    _v11 = {
      info: {
        icon: function (_v0) {
          return (0, _v1.jsx)(_v3.Icon, {
            viewBox: "0 0 24 24",
            ..._v0,
            children: (0, _v1.jsx)("path", {
              fill: "currentColor",
              d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
            })
          });
        },
        colorScheme: "blue"
      },
      warning: {
        icon: _v4,
        colorScheme: "orange"
      },
      success: {
        icon: function (_v0) {
          return (0, _v1.jsx)(_v3.Icon, {
            viewBox: "0 0 24 24",
            ..._v0,
            children: (0, _v1.jsx)("path", {
              fill: "currentColor",
              d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            })
          });
        },
        colorScheme: "green"
      },
      error: {
        icon: _v4,
        colorScheme: "red"
      },
      loading: {
        icon: _v6.Spinner,
        colorScheme: "blue"
      }
    };
  function _v12(_v0) {
    return _v11[_v0].colorScheme;
  }
  function _v13(_v0) {
    return _v11[_v0].icon;
  }
  _v0.s(["AlertProvider", 0, _v7, "AlertStylesProvider", 0, _v9, "getStatusColorScheme", 0, _v12, "getStatusIcon", 0, _v13, "useAlertContext", 0, _v8, "useAlertStyles", 0, _v10], 0);
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  function _v16(_v0) {
    let {
        status: _v1
      } = _v8(),
      _v2 = _v13(_v1),
      _v3 = _v10(),
      _v4 = "loading" === _v1 ? _v3.spinner : _v3.icon;
    return (0, _v1.jsx)(_v15.chakra.span, {
      display: "inherit",
      "data-status": _v1,
      ..._v0,
      className: (0, _v14.cx)("chakra-alert__icon", _v0.className),
      __css: _v4,
      children: _v0.children || (0, _v1.jsx)(_v2, {
        h: "100%",
        w: "100%"
      })
    });
  }
  _v16.displayName = "AlertIcon", _v0.s(["AlertIcon", 0, _v16], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = (0, _v2.forwardRef)(function (_v0, _v1) {
      var _v2;
      let {
          status: _v3 = "info",
          addRole: _v4 = !0,
          ..._v5
        } = (0, _v19.omitThemingProps)(_v0),
        _v6 = null != (_v2 = _v0.colorScheme) ? _v2 : _v12(_v3),
        _v7 = (0, _v18.useMultiStyleConfig)("Alert", {
          ..._v0,
          colorScheme: _v6
        }),
        _v8 = {
          width: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          ..._v7.container
        };
      return (0, _v1.jsx)(_v7, {
        value: {
          status: _v3
        },
        children: (0, _v1.jsx)(_v9, {
          value: _v7,
          children: (0, _v1.jsx)(_v15.chakra.div, {
            "data-status": _v3,
            role: _v4 ? "alert" : void 0,
            ref: _v1,
            ..._v5,
            className: (0, _v14.cx)("chakra-alert", _v0.className),
            __css: _v8
          })
        })
      });
    });
  _v20.displayName = "Alert";
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = {
      info: "blue.500",
      success: "green.500",
      error: "red.500",
      warning: "yellow.500",
      upsell: "upsell-primary"
    },
    _v27 = {
      info: (0, _v1.jsx)(_v22.InfoCircleFilled, {}),
      success: (0, _v1.jsx)(_v24.CircleCheckFilled, {}),
      error: (0, _v1.jsx)(_v23.CircleExclamationFilled, {}),
      warning: (0, _v1.jsx)(_v23.CircleExclamationFilled, {}),
      upsell: (0, _v1.jsx)(_v22.InfoCircleFilled, {})
    },
    _v28 = (0, _v2.forwardRef)(({
      children: _v0,
      status: _v1,
      ..._v2
    }, _v3) => (0, _v1.jsx)(_v20, {
      ref: _v3,
      status: "upsell" === _v1 ? void 0 : _v1,
      ..._v2,
      children: _v0
    })),
    _v29 = _v0 => {
      let _v1 = (0, _v18.useMultiStyleConfig)("Alert");
      return (0, _v1.jsx)(_v25.IconButton, {
        size: "xs",
        sx: _v1.closeButton,
        variant: "minimal",
        icon: (0, _v1.jsx)(_v21.CloseX, {}),
        ..._v0
      });
    },
    _v30 = (0, _v2.forwardRef)(({
      onClose: _v0,
      children: _v1,
      status: _v2 = "info",
      ..._v3
    }, _v4) => (0, _v1.jsxs)(_v28, {
      ref: _v4,
      ..._v3,
      variant: _v2,
      sx: {
        paddingRight: _v0 ? "3rem" : "1rem"
      },
      children: [(0, _v1.jsx)(_v16, {
        children: _v27[_v2]
      }), (0, _v1.jsx)(_v17.Flex, {
        direction: "column",
        children: _v1
      }), _v0 && (0, _v1.jsx)(_v29, {
        color: _v26[_v2],
        "aria-label": "Dismiss notice",
        onClick: _v0
      })]
    }));
  _v0.s(["Alert", 0, _v30, "AlertCloseButton", 0, _v29, "AlertRoot", 0, _v28], 0);
}