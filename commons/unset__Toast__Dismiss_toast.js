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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = ({
      icon: _v0
    }) => {
      let _v1 = _v20();
      return _v11.default.cloneElement(_v0, {
        __css: {
          ..._v1.icon
        }
      });
    },
    _v18 = _v0 => function (_v0) {
      let {
          theme: _v1
        } = (0, _v10.useChakra)(),
        _v2 = (0, _v8.useToastOptionContext)();
      return (0, _v11.useMemo)(() => (0, _v9.createToastFn)(_v1.direction, {
        ..._v2,
        ..._v0
      }), [_v0, _v1.direction, _v2]);
    }(_v11.default.useMemo(() => ({
      containerStyle: {
        minWidth: "unset",
        ..._v0?.containerStyle
      },
      render: _v0 => (0, _v1.jsxs)(_v22, {
        ..._v0,
        children: [_v0.icon ? (0, _v1.jsx)(_v17, {
          icon: _v0.icon
        }) : (0, _v1.jsx)(_v24, {}), (0, _v1.jsx)(_v23, {
          children: _v0.title
        })]
      }),
      ..._v0
    }), [_v0])),
    [_v19, _v20] = (0, _v4.createStylesContext)("Toast"),
    _v21 = {
      info: _v14.InfoCircleFilled,
      success: _v13.CircleCheckFilled,
      warning: _v12.CircleExclamationFilled,
      neutral: () => (0, _v1.jsx)(_v1.Fragment, {})
    },
    _v22 = (0, _v2.forwardRef)(({
      isClosable: _v0 = !0,
      children: _v1,
      closeAriaLabel: _v2 = "Dismiss toast",
      variant: _v3 = "neutral",
      onClose: _v4,
      ..._v5
    }, _v6) => {
      let _v7 = "neutral" === _v3 ? "neutral" : _v3,
        _v8 = "neutral" === _v3 ? "info" : _v3,
        _v9 = (0, _v5.useMultiStyleConfig)("Toast", {
          variant: _v3
        });
      return (0, _v1.jsx)(_v19, {
        value: {
          ..._v9,
          status: _v7
        },
        children: (0, _v1.jsxs)(_v6.Box, {
          ref: _v6,
          __css: _v9.container,
          ..._v5,
          role: "status",
          "data-status": _v8,
          children: [_v1, _v0 && (0, _v1.jsx)(_v16.IconButton, {
            size: "xs",
            icon: (0, _v1.jsx)(_v15.CloseX, {}),
            "aria-label": _v2,
            onClick: _v4,
            __css: _v9.closeButton
          })]
        })
      });
    }),
    _v23 = _v0 => {
      let _v1 = _v20();
      return (0, _v1.jsx)(_v6.Box, {
        as: _v7.Text,
        __css: _v1.title,
        children: _v0.children
      });
    },
    _v24 = _v0 => {
      let _v1 = _v20(),
        _v2 = _v1.status;
      if (_v0.children) return (0, _v1.jsx)(_v1.Fragment, {
        children: _v0.children
      });
      let _v3 = _v21[_v2];
      return (0, _v1.jsx)(_v3, {
        __css: _v1.icon,
        ..._v0
      });
    },
    _v25 = (0, _v2.forwardRef)(({
      buttonProps: _v0,
      ..._v1
    }, _v2) => {
      let _v3 = _v18();
      return (0, _v1.jsx)(_v3.Button, {
        ref: _v2,
        onClick: _v0 => {
          _v0?.onClick?.(_v0), _v3({
            variant: _v1.status,
            status: _v1.status,
            ..._v1
          });
        },
        ..._v0,
        children: _v1.children
      });
    });
  _v0.s(["Toast", 0, _v25, "ToastButton", 0, _v0 => {
    let _v1 = _v20();
    return (0, _v1.jsx)(_v3.Button, {
      __css: _v1.button,
      ..._v0,
      children: _v0.children
    });
  }, "ToastIcon", 0, _v24, "ToastRoot", 0, _v22, "ToastTitle", 0, _v23, "useToast", 0, _v18], 0);
}