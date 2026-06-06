{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["BackButtonPanel", 0, function ({
    id: _v0 = (0, _v8.createDomName)("panel-back-button"),
    className: _v1 = (0, _v8.createDomName)("panel-back-button"),
    title: _v2,
    headerSize: _v3,
    padding: _v4,
    margin: _v5,
    onClick: _v6 = _v7.CallablePlaceholder
  }) {
    return (0, _v1.jsxs)(_v3.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      width: "100%",
      cursor: "pointer",
      padding: _v4,
      margin: _v5,
      onClick: _v6,
      children: [(0, _v1.jsx)(_v5.IconButton, {
        id: (0, _v8.createDomName)(_v0, "arrow"),
        className: (0, _v8.createDomName)(_v1, "arrow"),
        "aria-label": "Back",
        variant: "tertiary",
        size: "sm",
        icon: (0, _v1.jsx)(_v6.ChevronLeft, {})
      }), (0, _v1.jsx)(_v4.Header, {
        id: (0, _v8.createDomName)(_v0, "header"),
        className: (0, _v8.createDomName)(_v1, "header"),
        marginLeft: (0, _v2.rem)(4),
        size: _v3 ?? "sm",
        children: _v2
      })]
    });
  }]);
}