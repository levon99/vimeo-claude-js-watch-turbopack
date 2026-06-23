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
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  _v0.s(["default", 0, function ({
    footerRef: _v0,
    isDesktopView: _v1,
    buttonLabel: _v2 = "",
    forPrivatePage: _v3 = !1,
    userId: _v4
  }) {
    let [_v5, _v6] = (0, _v3.useState)(!1),
      [_v7, _v8] = (0, _v3.useState)(!1),
      [_v9, _v10] = (0, _v3.useState)(!1),
      _v11 = (0, _v3.useRef)(null),
      {
        idOrUserName: _v12
      } = (0, _v3.useContext)(_v18.default),
      _v13 = (0, _v3.useContext)(_v17.NotificationDispatchContext),
      _v14 = `users/${_v4 ?? _v12}/report`,
      _v15 = (0, _v19.default)(),
      _v16 = (0, _v3.useCallback)((_v0, _v1) => {
        _v8(!0);
        let _v2 = (0, _v4.decamelizeDeep)({
          reason: _v0,
          block: _v1
        });
        _v15(_v14, void 0, _v16.HTTPMethods.POST, _v2).then(() => {
          _v10(!0), _v8(!1);
        }).catch(_v0 => {
          _v0 && _v0.json && _v0.json().then(_v0 => _v13({
            content: _v0.error,
            status: "negative"
          })), _v8(!1);
        });
      }, [_v14, _v15, _v13]);
    return (0, _v3.useEffect)(() => {
      let _v0 = (0, _v2.default)(() => {
        if (_v11.current && window && _v0 && _v0.current) {
          let _v0 = document.documentElement,
            _v1 = _v0.scrollHeight,
            _v2 = _v0.scrollTop,
            _v3 = _v0.current.offsetHeight,
            _v4 = window.innerHeight;
          _v11.current.style.position = _v1 - _v2 - _v3 - _v4 > 62 ? "fixed" : "absolute";
        }
      }, 50);
      return _v1 && _v11.current && _v0 && _v0.current && document.addEventListener("scroll", _v0), () => document.removeEventListener("scroll", _v0);
    }, [_v11, _v0, _v1]), (0, _v3.useEffect)(() => {
      _v5 || _v10(!1);
    }, [_v5, _v9]), (0, _v1.jsxs)(_v6.Flex, {
      as: "article",
      ref: _v11,
      pl: {
        base: "md",
        md: (0, _v12.rem)(30),
        lg: 0
      },
      justifyContent: {
        lg: "center"
      },
      position: _v3 ? void 0 : {
        lg: "fixed"
      },
      bottom: {
        lg: (0, _v12.rem)(36)
      },
      left: {
        lg: 0
      },
      zIndex: {
        lg: 2
      },
      width: {
        lg: (0, _v12.rem)(40),
        xl: (0, _v12.rem)(60),
        "3xl": (0, _v12.rem)(70)
      },
      children: [(0, _v1.jsx)(_v11.Tooltip, {
        label: _v20.default.ReportAccount,
        placement: "right",
        children: _v3 ? (0, _v1.jsx)(_v5.Button, {
          role: "button",
          leftIcon: (0, _v1.jsx)(_v13.FlagFilled, {}),
          variant: "tertiary",
          onClick: () => _v6(!0),
          children: _v2
        }) : (0, _v1.jsx)(_v7.IconButton, {
          ml: "sm",
          icon: (0, _v1.jsx)(_v13.FlagFilled, {}),
          "aria-label": _v20.default.ReportAccount,
          variant: "tertiary",
          color: "text-tertiary",
          onClick: () => _v6(!0)
        })
      }), (0, _v1.jsxs)(_v8.Modal, {
        isOpen: _v5,
        onClose: () => _v6(!1),
        size: "lg",
        children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsx)(_v9.ModalContent, {
          children: _v9 ? (0, _v1.jsx)(_v14.default, {
            onDismiss: () => _v6(!1)
          }) : (0, _v1.jsx)(_v15.default, {
            submitting: _v7,
            onSubmit: _v16,
            onDismiss: () => _v6(!1)
          })
        })]
      })]
    });
  }]);
}