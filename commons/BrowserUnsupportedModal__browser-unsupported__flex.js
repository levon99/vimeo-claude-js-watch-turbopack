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
    _v17 = _v0.i(0);
  _v0.s(["BrowserUnsupportedModal", 0, function () {
    let _v0 = _v11.browserConfig.BROWSER?.name || "",
      _v1 = _v14.NormalizedSupportedBrowser[_v0],
      [_v2, _v3, _v4] = (0, _v2.useMemo)(() => {
        let _v0 = Object.keys(_v11.browserConfig.AGORA_SUPPORT),
          _v1 = _v0.map(_v0 => _v14.NormalizedSupportedBrowser[_v0]).join(", ");
        return _v0.includes(_v0) ? [!0, _v11.browserConfig.AGORA_SUPPORT[_v0].version, _v1] : [!1, null, _v1];
      }, [_v0]);
    return (0, _v1.jsxs)(_v6.Modal, {
      id: (0, _v16.createLiveDomName)("browser-unsupported"),
      isOpen: !0,
      onClose: _v13.CallablePlaceholder,
      children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: (0, _v10.rem)(24),
        gap: (0, _v10.rem)(16),
        children: [(0, _v1.jsx)(_v5.Header, {
          color: "text-primary",
          textAlign: "center",
          size: "md",
          children: _v17.translations.unsupportedBrowser
        }), _v2 ? (0, _v1.jsx)(_v9.Paragraph, {
          color: "text-primary",
          textAlign: "center",
          children: _v17.translations.unsupportedBrowserVersionUpgrade(_v1, _v3)
        }) : (0, _v1.jsx)(_v9.Paragraph, {
          color: "text-primary",
          textAlign: "center",
          children: _v17.translations.unsupportedBrowserVendor(_v4)
        }), (0, _v1.jsx)(_v4.Flex, {
          justifyContent: "center",
          children: (0, _v1.jsx)(_v3.Button, {
            size: "sm",
            onClick: _v15.redirectToHome,
            children: _v12.T_LEAVE_EVENT
          })
        })]
      })]
    });
  }]);
}