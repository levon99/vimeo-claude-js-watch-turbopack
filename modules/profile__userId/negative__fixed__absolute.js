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
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  _v0.s(["default", 0, function ({
    footerRef: _v0,
    buttonLabel: _v1 = "",
    forPrivatePage: _v2 = !1,
    userId: _v3
  }) {
    let [_v4, _v5] = (0, _v3.useState)(!1),
      [_v6, _v7] = (0, _v3.useState)(!1),
      [_v8, _v9] = (0, _v3.useState)(!1),
      _v10 = (0, _v3.useRef)(null),
      {
        idOrUserName: _v11
      } = (0, _v3.useContext)(_v20.default),
      _v12 = _v3 ?? _v11,
      {
        settings: _v13
      } = (0, _v14.useOrionSettings)(),
      _v14 = _v13.enable_granular_user_flagging_modal,
      _v15 = (0, _v3.useContext)(_v19.NotificationDispatchContext),
      _v16 = `users/${_v12}/report`,
      _v17 = (0, _v21.default)(),
      _v18 = (0, _v3.useCallback)((_v0, _v1) => {
        _v7(!0);
        let _v2 = (0, _v4.decamelizeDeep)({
          reason: _v0,
          block: _v1
        });
        _v17(_v16, void 0, _v18.HTTPMethods.POST, _v2).then(() => {
          _v9(!0), _v7(!1);
        }).catch(_v0 => {
          _v0 && _v0.json && _v0.json().then(_v0 => _v15({
            content: _v0.error,
            status: "negative"
          })), _v7(!1);
        });
      }, [_v16, _v17, _v15]);
    return (0, _v3.useEffect)(() => {
      let _v0 = (0, _v2.default)(() => {
        if (_v10.current && window && _v0 && _v0.current) {
          let _v0 = document.documentElement,
            _v1 = _v0.scrollHeight,
            _v2 = _v0.scrollTop,
            _v3 = _v0.current.offsetHeight,
            _v4 = window.innerHeight;
          _v10.current.style.position = _v1 - _v2 - _v3 - _v4 > 62 ? "fixed" : "absolute";
        }
      }, 50);
      return !_v2 && _v10.current && _v0 && _v0.current && document.addEventListener("scroll", _v0), () => document.removeEventListener("scroll", _v0);
    }, [_v10, _v0, _v2]), (0, _v3.useEffect)(() => {
      _v4 || _v9(!1);
    }, [_v4, _v8]), (0, _v1.jsxs)(_v6.Flex, {
      as: "article",
      ref: _v10,
      pl: {
        base: "md",
        md: (0, _v12.rem)(30),
        lg: 0
      },
      justifyContent: {
        lg: "center"
      },
      position: _v2 ? void 0 : "fixed",
      bottom: _v2 ? void 0 : (0, _v12.rem)(36),
      left: _v2 ? void 0 : 0,
      zIndex: _v2 ? void 0 : 2,
      width: {
        lg: (0, _v12.rem)(40),
        xl: (0, _v12.rem)(60),
        "3xl": (0, _v12.rem)(70)
      },
      children: [(0, _v1.jsx)(_v11.Tooltip, {
        label: _v22.default.ReportAccount,
        placement: "right",
        children: _v2 ? (0, _v1.jsx)(_v5.Button, {
          role: "button",
          leftIcon: (0, _v1.jsx)(_v13.FlagFilled, {}),
          variant: "tertiary",
          onClick: () => _v5(!0),
          children: _v1
        }) : (0, _v1.jsx)(_v7.IconButton, {
          ml: "sm",
          icon: (0, _v1.jsx)(_v13.FlagFilled, {}),
          "aria-label": _v22.default.ReportAccount,
          variant: "blur",
          onClick: () => _v5(!0)
        })
      }), _v14 ? (0, _v1.jsx)(_v15.ReportUserModal, {
        userId: _v12,
        isOpen: _v4,
        onClose: () => _v5(!1)
      }) : (0, _v1.jsxs)(_v8.Modal, {
        isOpen: _v4,
        onClose: () => _v5(!1),
        size: "lg",
        children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsx)(_v9.ModalContent, {
          children: _v8 ? (0, _v1.jsx)(_v16.default, {
            onDismiss: () => _v5(!1)
          }) : (0, _v1.jsx)(_v17.default, {
            submitting: _v6,
            onSubmit: _v18,
            onDismiss: () => _v5(!1)
          })
        })]
      })]
    });
  }]);
}