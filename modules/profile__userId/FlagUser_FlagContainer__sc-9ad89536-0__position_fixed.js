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
    _v19 = _v0.i(0);
  let _v20 = _v5.default.article.withConfig({
      displayName: "FlagUser__FlagContainer",
      componentId: "sc-9ad89536-0"
    })`
  display: flex;
  padding-left: ${(0, _v3.rem)(16)};
  ${_v11.media.sm`
    padding-left: ${(0, _v3.rem)(30)};
  `}
  ${_v11.media.mlg`
    justify-content: center;
    padding-left: 0;
    ${({
      forPrivatePage: _v0
    }) => _v0 ? "" : "position: fixed;"}
    bottom: ${(0, _v3.rem)(36)};
    left: 0;
    z-index: 2;
    width: ${(0, _v3.rem)(40)};
  `}
  ${_v11.media.hd`
    width: ${(0, _v3.rem)(60)};
  `}
  ${_v11.media.xhd`
    width: ${(0, _v3.rem)(70)};
  `}
`,
    _v21 = (0, _v5.default)(_v10.Modal).withConfig({
      displayName: "FlagUser__FlagModal",
      componentId: "sc-9ad89536-1"
    })`
  width: ${(0, _v3.rem)(700)};
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
`,
    _v22 = (0, _v5.default)(_v9.Button).withConfig({
      displayName: "FlagUser__FlagButton",
      componentId: "sc-9ad89536-2"
    })`
  margin-left: ${(0, _v3.rem)(8)};
  color: ${_v8.bokehTheme.colors.gray["200"]};

  &:hover {
    color: ${(0, _v3.darken)(.08, _v8.bokehTheme.colors.gray["200"])};
  }
`;
  _v0.s(["default", 0, function ({
    footerRef: _v0,
    isDesktopView: _v1,
    buttonLabel: _v2 = "",
    forPrivatePage: _v3 = !1,
    userId: _v4
  }) {
    let [_v5, _v6] = (0, _v4.useState)(!1),
      [_v7, _v8] = (0, _v4.useState)(!1),
      [_v9, _v10] = (0, _v4.useState)(!1),
      _v11 = (0, _v4.useRef)(null),
      {
        idOrUserName: _v12
      } = (0, _v4.useContext)(_v15.default),
      _v13 = (0, _v4.useContext)(_v14.NotificationDispatchContext),
      _v14 = `users/${_v4 ?? _v12}/report`,
      _v15 = (0, _v16.default)(),
      _v16 = (0, _v4.useCallback)((_v0, _v1) => {
        _v8(!0);
        let _v2 = (0, _v6.decamelizeDeep)({
          reason: _v0,
          block: _v1
        });
        _v15(_v14, void 0, _v17.HTTPMethods.POST, _v2).then(() => {
          _v10(!0), _v8(!1);
        }).catch(_v0 => {
          _v0 && _v0.json && _v0.json().then(_v0 => _v13({
            content: _v0.error,
            status: "negative"
          })), _v8(!1);
        });
      }, [_v14, _v15, _v13]);
    return (0, _v4.useEffect)(() => {
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
    }, [_v11, _v0, _v1]), (0, _v4.useEffect)(() => {
      _v5 || _v10(!1);
    }, [_v5, _v9]), (0, _v1.jsxs)(_v20, {
      forPrivatePage: _v3,
      ref: _v11,
      children: [(0, _v1.jsx)(_v19.default, {
        tooltipText: _v18.default.ReportAccount,
        alignment: "right",
        children: _v3 ? (0, _v1.jsx)(_v9.Button, {
          role: "button",
          format: "soft",
          icon: (0, _v1.jsx)(_v7.FlagFilled, {}),
          variant: "hyperminimal",
          onClick: () => _v6(!0),
          children: _v2
        }) : (0, _v1.jsx)(_v22, {
          icon: (0, _v1.jsx)(_v7.FlagFilled, {}),
          variant: "hyperminimal",
          onClick: () => _v6(!0)
        })
      }), (0, _v1.jsx)(_v21, {
        content: _v9 ? (0, _v1.jsx)(_v12.default, {
          onDismiss: () => _v6(!1)
        }) : (0, _v1.jsx)(_v13.default, {
          submitting: _v7,
          onSubmit: _v16,
          onDismiss: () => _v6(!1)
        }),
        active: _v5,
        onOpen: () => _v6(!1)
      })]
    });
  }]);
}