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
    _v12 = _v0.i(0);
  _v0.s(["default", 0, function ({
    footerRef: _v0,
    buttonLabel: _v1 = "",
    forPrivatePage: _v2 = !1,
    userId: _v3
  }) {
    let [_v4, _v5] = (0, _v3.useState)(!1),
      _v6 = (0, _v3.useRef)(null),
      {
        userId: _v7
      } = (0, _v3.useContext)(_v11.default);
    return (0, _v3.useEffect)(() => {
      let _v0 = (0, _v2.default)(() => {
        if (_v6.current && window && _v0 && _v0.current) {
          let _v0 = document.documentElement,
            _v1 = _v0.scrollHeight,
            _v2 = _v0.scrollTop,
            _v3 = _v0.current.offsetHeight,
            _v4 = window.innerHeight;
          _v6.current.style.position = _v1 - _v2 - _v3 - _v4 > 62 ? "fixed" : "absolute";
        }
      }, 50);
      return !_v2 && _v6.current && _v0 && _v0.current && document.addEventListener("scroll", _v0), () => document.removeEventListener("scroll", _v0);
    }, [_v6, _v0, _v2]), (0, _v1.jsxs)(_v5.Flex, {
      as: "article",
      ref: _v6,
      pl: {
        base: "md",
        md: (0, _v8.rem)(30),
        lg: 0
      },
      justifyContent: {
        lg: "center"
      },
      position: _v2 ? void 0 : "fixed",
      bottom: _v2 ? void 0 : (0, _v8.rem)(36),
      left: _v2 ? void 0 : 0,
      zIndex: _v2 ? void 0 : 2,
      width: {
        lg: (0, _v8.rem)(40),
        xl: (0, _v8.rem)(60),
        "3xl": (0, _v8.rem)(70)
      },
      children: [(0, _v1.jsx)(_v7.Tooltip, {
        label: _v12.default.ReportAccount,
        placement: "right",
        children: _v2 ? (0, _v1.jsx)(_v4.Button, {
          role: "button",
          leftIcon: (0, _v1.jsx)(_v9.FlagFilled, {}),
          variant: "tertiary",
          onClick: () => _v5(!0),
          children: _v1
        }) : (0, _v1.jsx)(_v6.IconButton, {
          ml: "sm",
          icon: (0, _v1.jsx)(_v9.FlagFilled, {}),
          "aria-label": _v12.default.ReportAccount,
          variant: "blur",
          onClick: () => _v5(!0)
        })
      }), (0, _v1.jsx)(_v10.ReportUserModal, {
        userId: _v3 ?? _v7,
        isOpen: _v4,
        onClose: () => _v5(!1)
      })]
    });
  }]);
}