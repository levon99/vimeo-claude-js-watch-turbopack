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
    _v10 = _v0.i(0);
  _v0.s(["MobileUnsupportedModal", 0, function () {
    return (0, _v1.jsxs)(_v3.Modal, {
      id: (0, _v9.createLiveDomName)("mobile-unsupported"),
      isOpen: !0,
      onClose: _v8.CallablePlaceholder,
      children: [(0, _v1.jsx)(_v5.ModalOverlay, {}), (0, _v1.jsxs)(_v4.ModalContent, {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: (0, _v7.rem)(24),
        gap: (0, _v7.rem)(16),
        children: [(0, _v1.jsx)(_v2.Header, {
          color: "text-primary",
          textAlign: "center",
          size: "md",
          children: _v10.translations.joinFromComputer
        }), (0, _v1.jsx)(_v6.Paragraph, {
          color: "text-primary",
          textAlign: "center",
          children: _v10.translations.eventsAreUnavailable
        })]
      })]
    });
  }]);
}